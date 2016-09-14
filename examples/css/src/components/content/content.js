import React, { PropTypes } from 'react';

const Content = ({ text, media }) => (
  <div>
    <p className="text" dangerouslySetInnerHTML={{ __html: text }} />
    <a className="media" href={media.expanded_url}>
      <img className="image" src={media.media_url_https} alt="" />
    </a>
  </div>
);

Content.propTypes = {
  media: PropTypes.object,
  text: PropTypes.string,
};

export default Content;
