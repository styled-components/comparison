import React, { PropTypes } from 'react';

const Content = ({ text, media }) => (
  <div>
    <p className="tweet__text" dangerouslySetInnerHTML={{ __html: text }} />
    <a className="tweet__media" href={media.expanded_url}>
      <img className="tweet__image" src={media.media_url_https} alt="" />
    </a>
  </div>
);

Content.propTypes = {
  media: PropTypes.object,
  text: PropTypes.string,
};

export default Content;
