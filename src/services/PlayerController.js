
import Galactic from "anghami-audio-manager";
import invoke from "lodash/invoke";

class _PlayerController {
  constructor() {
    this.didInit = false;
  }
  didInit = false;
  galactic = null;
  playing = false;
  loading = true;

  init(callbacks) {
    if (!this.didInit) {
      this.didInit = true;
      this.galactic = new Galactic().init({
        video: true,
        reloadOnInit: 10000,
        reloadOnError: 5000,
        reloadCount: 5,
        playOnLoad: false,
        // controls: true,
        poster: "https://images-3.wuaki.tv/system/shots/153990/original/singel-39-1566463884-width1920-quality80.jpeg",
        onInit: () => {
          this.galactic.setAttribute("muted", true);
          const loadEmpty = this.galactic.loadEmpty();
          // setTimeout(() => {
          // debugger;

          this.galactic.load("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8").play();
          // });
          console.log(loadEmpty);
        },
        hls: true,
        volume: 0,
        html5: false
      });

      this.galactic.on("durationChange", (_data) => {
        this.playing = true;// this.galactic.audioTrackPlaying;

        invoke(callbacks, "setDuration", _data.duration);
        invoke(callbacks, "setCurrentTime", _data.position);
        invoke(callbacks, "setProgress", _data.progress);
        invoke(callbacks, "setPlaying", this.playing);

        // console.log("durationchange", _data);
      });

      this.galactic.on("bufferChange", (_data) => {
        // console.log("bufferChange", _data);
        invoke(callbacks, "setBuffer", _data.bufferProgress);
      });

      this.galactic.on("wait", (_data) => {
        this.loading = true;
        this.playing = false;// this.galactic.audioTrackPlaying;
        invoke(callbacks, "setLoading", this.loading);
        invoke(callbacks, "setPlaying", this.playing);

        console.log("wait", _data);
      });

      this.galactic.on("play", (_data) => {
        console.log("play", _data);
        this.playing = this.galactic.audioTrackPlaying;
        invoke(callbacks, "setPlaying", this.playing);
        invoke(callbacks, "onPlay");
      });

      this.galactic.on("readyToPlay", (_data) => {
        this.loading = false;
        this.playing = this.galactic.audioTrackPlaying;

        invoke(callbacks, "setLoading", this.loading);
        invoke(callbacks, "setPlaying", this.playing);
        // invoke(callbacks, "onReadyToPlay");


        console.log("readyToPlay", _data);
        // this.galactic.setOptions({ playOnLoad: true });
        // this.galactic.pause();
        // this.galactic.audioElement.play()
        console.log(this.galactic);
      });

      this.galactic.on("pause", (_data) => {
        this.playing = !this.galactic.isPaused;
        invoke(callbacks, "setPlaying", this.playing);
        invoke(callbacks, "onPause");

        console.log("pause", _data);
      });

      this.galactic.on("stop", (_data) => {
        this.playing = false;
        invoke(callbacks, "setPlaying", this.playing);
        console.log("stop", _data);
      });

      this.galactic.on("end", (_data) => {
        console.log("end", _data);
      });
    }
  }

  playPause() {
    if (this.galactic.audioTrackPlaying === true) {
      this.galactic.pause();
    } else {
      this.galactic.play();
    }
  }

  destroy() {
    this.didInit = false;
    this.galactic.destroy();
  }
}

const PlayerController = new _PlayerController();

export default PlayerController;