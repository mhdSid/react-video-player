const HtmlWebpackPlugin = require("html-webpack-plugin");
const postcssNormalize = require("postcss-normalize");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");
// const InterpolateHtmlPlugin = require("react-dev-utils/InterpolateHtmlPlugin");
const InlineChunkHtmlPlugin = require("react-dev-utils/InlineChunkHtmlPlugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const WatchMissingNodeModulesPlugin = require("react-dev-utils/WatchMissingNodeModulesPlugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const isWsl = require("is-wsl");
const safePostCssParser = require("postcss-safe-parser");
const webpack = require("webpack");
const ModuleNotFoundPlugin = require("react-dev-utils/ModuleNotFoundPlugin");
const path = require("path");
const paths = require("./paths");

const appPackageJson = require(paths.appPackageJson);

// process.env.NODE_ENV = "development"
const create = () => {
  const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== "false";

  const isDev = process.env.NODE_ENV === "development";
  const isProd = process.env.NODE_ENV === "production";

  const publicPath = isProd
    ? paths.servedPath
    : isDev && "/";

  // const publicUrl = isProd
  //   ? publicPath.slice(0, -1)
  //   : isDev && "";

  const shouldUseRelativeAssetPaths = publicPath === "./";

  // const env = getClientEnvironment(publicUrl);
  const shouldInlineRuntimeChunk = process.env.INLINE_RUNTIME_CHUNK !== "false";

  const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
      isDev && require.resolve("style-loader"),
      isProd && {
        loader: MiniCssExtractPlugin.loader,
        options: shouldUseRelativeAssetPaths ? { publicPath: "../../" } : {}
      },
      {
        loader: require.resolve("css-loader"),
        options: cssOptions
      },
      {
        // Options for PostCSS as we reference these options twice
        // Adds vendor prefixing based on your specified browser support in
        // package.json
        loader: require.resolve("postcss-loader"),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebook/create-react-app/issues/2677
          ident: "postcss",
          plugins: () => [

            require("postcss-flexbugs-fixes"),
            require("postcss-preset-env")({
              autoprefixer: {
                flexbox: "no-2009"
              },
              stage: 3
            }),
            // Adds PostCSS Normalize as the reset css with default options,
            // so that it honors browserslist config in package.json
            // which in turn let's users customize the target behavior as per their needs.
            postcssNormalize()
          ],
          sourceMap: isProd && shouldUseSourceMap
        }
      }
    ].filter(Boolean);
    if (preProcessor) {
      loaders.push(
        {
          loader: require.resolve("resolve-url-loader"),
          options: {
            sourceMap: isProd && shouldUseSourceMap
          }
        },
        {
          loader: require.resolve(preProcessor),
          options: {
            sourceMap: true
          }
        }
      );
    }
    return loaders;
  };

  return {
    entry: [paths.appIndexJs],
    output: {
      // The build folder.
      path: isProd ? paths.appBuild : undefined,
      // Add /* filename */ comments to generated require()s in the output.
      pathinfo: isDev,
      // There will be one main bundle, and one file per asynchronous chunk.
      // In development, it does not produce real files.
      filename: isProd
        ? "static/js/[name].[contenthash:8].js"
        : isDev && "static/js/bundle.js",
      // TODO: remove this when upgrading to webpack 5
      futureEmitAssets: true,
      // There are also additional JS chunk files if you use code splitting.
      chunkFilename: isProd
        ? "static/js/[name].[contenthash:8].chunk.js"
        : isDev && "static/js/[name].chunk.js",
      // We inferred the "public path" (such as / or /my-project) from homepage.
      // We use "/" in development.
      publicPath,
      // Point sourcemap entries to original disk location (format as URL on Windows)
      devtoolModuleFilenameTemplate: isProd
        ? info =>
          path
            .relative(paths.appSrc, info.absoluteResourcePath)
            .replace(/\\/g, "/")
        : isDev &&
        (info => path.resolve(info.absoluteResourcePath).replace(/\\/g, "/")),
      // Prevents conflicts when multiple Webpack runtimes (from different apps)
      // are used on the same page.
      jsonpFunction: `webpackJsonp${appPackageJson.name}`
    },
    optimization: {
      minimize: isProd,
      minimizer: [
        // This is only used in production mode
        new TerserPlugin({
          terserOptions: {
            parse: {
              // We want terser to parse ecma 8 code. However, we don't want it
              // to apply any minification steps that turns valid ecma 5 code
              // into invalid ecma 5 code. This is why the 'compress' and 'output'
              // sections only apply transformations that are ecma 5 safe
              // https://github.com/facebook/create-react-app/pull/4234
              ecma: 8
            },
            compress: {
              ecma: 5,
              warnings: false,
              // Disabled because of an issue with Uglify breaking seemingly valid code:
              // https://github.com/facebook/create-react-app/issues/2376
              // Pending further investigation:
              // https://github.com/mishoo/UglifyJS2/issues/2011
              comparisons: false,
              // Disabled because of an issue with Terser breaking valid code:
              // https://github.com/facebook/create-react-app/issues/5250
              // Pending further investigation:
              // https://github.com/terser-js/terser/issues/120
              inline: 2
            },
            mangle: {
              safari10: true
            },
            output: {
              ecma: 5,
              comments: false,
              // Turned on because emoji and regex is not minified properly using default
              // https://github.com/facebook/create-react-app/issues/2488
              ascii_only: true
            }
          },
          // Use multi-process parallel running to improve the build speed
          // Default number of concurrent runs: os.cpus().length - 1
          // Disabled on WSL (Windows Subsystem for Linux) due to an issue with Terser
          // https://github.com/webpack-contrib/terser-webpack-plugin/issues/21
          parallel: !isWsl,
          // Enable file caching
          cache: true,
          sourceMap: shouldUseSourceMap
        }),
        // This is only used in production mode
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            parser: safePostCssParser,
            map: shouldUseSourceMap
              ? {
                // `inline: false` forces the sourcemap to be output into a
                // separate file
                inline: false,
                // `annotation: true` appends the sourceMappingURL to the end of
                // the css file, helping the browser find the sourcemap
                annotation: true
              }
              : false
          }
        })
      ],
      // Automatically split vendor and commons
      // https://twitter.com/wSokra/status/969633336732905474
      // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
      splitChunks: {
        chunks: "all",
        name: false
      },
      // Keep the runtime chunk separated to enable long term caching
      // https://twitter.com/wSokra/status/969679223278505985
      runtimeChunk: true
    },
    module: {
      rules: [
        { parser: { requireEnsure: false } },
        // First, run the linter.
        // It's important to do this before Babel processes the JS.
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          enforce: "pre",
          use: [
            {
              options: {
                formatter: require.resolve("react-dev-utils/eslintFormatter"),
                eslintPath: require.resolve("eslint"),
                resolvePluginsRelativeTo: __dirname
              },
              loader: require.resolve("eslint-loader")
            }
          ],
          include: paths.appSrc
        },
        {
          oneOf: [
            {
              test: /\.html$/,
              use: [
                {
                  loader: "html-loader"
                }
              ]
            },
            // Process application JS with Babel.
            // The preset includes JSX, Flow, TypeScript, and some ESnext features.
            {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              include: paths.appSrc,
              loader: require.resolve("babel-loader"),
              options: {
                // customize: require.resolve(
                //   "babel-preset-react-app/webpack-overrides"
                // ),

                plugins: [
                  [require.resolve("@babel/plugin-proposal-class-properties")],
                  [
                    require.resolve("babel-plugin-named-asset-import"),
                    {
                      loaderMap: {
                        svg: {
                          ReactComponent:
                            "@svgr/webpack?-svgo,+titleProp,+ref![path]"
                        }
                      }
                    }
                  ]
                ],
                // This is a feature of `babel-loader` for webpack (not Babel itself).
                // It enables caching results in ./node_modules/.cache/babel-loader/
                // directory for faster rebuilds.
                cacheDirectory: true,
                cacheCompression: isProd,
                compact: isProd
              }
            },
            // Process any JS outside of the app with Babel.
            // Unlike the application JS, we only compile the standard ES features.
            {
              test: /\.(js|mjs)$/,
              exclude: /@babel(?:\/|\\{1,2})runtime/,
              loader: require.resolve("babel-loader"),
              options: {
                babelrc: false,
                configFile: false,
                compact: false,
                // presets: [
                //   [
                //     require.resolve("babel-preset-react-app/dependencies"),
                //     { helpers: true }
                //   ]
                // ],
                cacheDirectory: true,
                cacheCompression: isProd,

                // If an error happens in a package, it's possible to be
                // because it was compiled. Thus, we don't want the browser
                // debugger to show the original code. Instead, the code
                // being evaluated would be much more helpful.
                sourceMaps: false
              }
            },
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },

            {
              test: /\.css$/,
              use: getStyleLoaders({
                importLoaders: 1,
                localIdentName: isDev
                  ? "[local]--[hash:base64:5]"
                  : "[hash:base64:5]",
                modules: true,
                sourceMap: isProd && shouldUseSourceMap
              }),
              // Don't consider CSS imports dead code even if the
              // containing package claims to have no side effects.
              // Remove this when webpack adds a warning or an error for this.
              // See https://github.com/webpack/webpack/issues/6571
              sideEffects: true
            },
            {
              test: /\.(scss|sass)$/,
              exclude: /\.module\.(scss|sass)$/,
              use: getStyleLoaders(
                {
                  importLoaders: 2,
                  localIdentName: isDev
                    ? "[local]--[hash:base64:5]"
                    : "[hash:base64:5]",
                  modules: true,
                  sourceMap: isProd && shouldUseSourceMap
                },
                "sass-loader"
              ),
              // Don't consider CSS imports dead code even if the
              // containing package claims to have no side effects.
              // Remove this when webpack adds a warning or an error for this.
              // See https://github.com/webpack/webpack/issues/6571
              sideEffects: true
            },
            {
              test: /\.module\.(scss|sass)$/,
              use: getStyleLoaders(
                {
                  importLoaders: 2,
                  sourceMap: isProd && shouldUseSourceMap,
                  modules: true,
                  getLocalIdent: getCSSModuleLocalIdent
                },
                "sass-loader"
              )
            },
            {
              loader: require.resolve("file-loader"),
              // Exclude `js` files to keep "css" loader working as it injects
              // its runtime that would otherwise be processed through "file" loader.
              // Also exclude `html` and `json` extensions so they get processed
              // by webpacks internal loaders.
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              options: {
                name: "static/media/[name].[hash:8].[ext]"
              }
            }
          ]
        }]
    },
    devServer: {
      // historyApiFallback: {
      //   rewrites: [
      //     { from: /^\/$/, to: "/public/index.scss" },
      //     // { from: /^\/movies\/*/, to: "/public/index.scss" }
      //   ]
      // },
      // inline: true,
      // hot: true,
      // contentBase: path.join(__dirname, "public"),
      // https: true
      historyApiFallback: true,
      contentBase: "./",
      hot: true
    },
    // devServer: {
    //   inline: true,
    //   publicPath: "/public/",
    //   contentBase: path.join(__dirname, "public"),
    //   hot: true,
    //   port: 8080
    // },
    plugins: [
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            // template: paths.appHtml,
            template: "./public/index.html",
            filename: "./index.html"
          },
          isProd
            ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
              }
            }
            : undefined
        )
      ),
      isProd &&
      shouldInlineRuntimeChunk &&
      new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime~.+[.]js/]),
      // new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
      new ModuleNotFoundPlugin(paths.appPath),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // new webpack.DefinePlugin(env.stringified),
      isDev && new webpack.HotModuleReplacementPlugin(),
      isDev && new CaseSensitivePathsPlugin(),
      isDev &&
      new WatchMissingNodeModulesPlugin(paths.appNodeModules),
      isProd &&
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "static/css/[name].[contenthash:8].css",
        chunkFilename: "static/css/[name].[contenthash:8].chunk.css"
      }),
    ].filter(Boolean),
    node: {
      module: "empty",
      dgram: "empty",
      dns: "mock",
      fs: "empty",
      http2: "empty",
      net: "empty",
      tls: "empty",
      child_process: "empty"
    },
    performance: false
  };
};

module.exports = create();