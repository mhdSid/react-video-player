import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Carousel from "../Carousel";
import LanguageSubtitles from "../LanguageSubtitles";
import Genres from "../Genres";

const mapStateToProps = ({ sections }) => ({
  sections: sections.sections
});

const Sections = (props) => {
  const { sections, data } = props;

  return (
    <>
      {
        !data && Array.isArray(sections) && sections.length > 0 && sections.map(section => (
          <Carousel type={section.content_type} key={section.id} data={section} />
        ))
      }

      {
        data && (
          <>
            {Array.isArray(data.actors) && data.actors.length > 0 && <Carousel type="people" data={{ name: "Directors and cast", contents: { data: data.actors } }} />}

            {data.view_options.public.trailers[0] && <LanguageSubtitles data={data.view_options.public.trailers[0]} />}

            {Array.isArray(data.genres) && data.genres.length > 0 && <Genres data={data.genres} />}
          </>
        )
      }
    </>
  );
};

Sections.propTypes = {
  sections: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  data: PropTypes.object
};

export default connect(
  mapStateToProps
)(Sections);
