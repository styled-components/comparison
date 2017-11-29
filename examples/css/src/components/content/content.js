import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ text, media }) => (
  <div>
    <p className="tweet__text" dangerouslySetInnerHTML={{ __html: text }} />
    <a className="tweet__media" target="_blank" href={media.expanded_url}>
      <img className="tweet__image" src={media.media_url_https} alt="" />
    </a>
  </div>
);

Content.propTypes = {
  media: PropTypes.object,
  text: PropTypes.string,
};

export default Content;
