import React, { PropTypes } from 'react';
import useSheet from 'react-jss';

const styles = {
  text: {
    fontSize: '1.25rem',
    fontWeight: '300',
    lineHeight: '1.5em',
    margin: '0',
    padding: '.65625rem 0 .98438rem',
  },
  media: {
    borderRadius: '.35rem',
    border: '1px solid #e1e8ed',
    color: '#1da1f2',
    display: 'block',
    margin: '.65625rem 0 1.3125rem',
  },
  image: {
    display: 'block',
    maxWidth: '100%',
  },
};

const Content = ({ text, media, sheet }) => (
  <div>
    <p className={sheet.classes.text} dangerouslySetInnerHTML={{ __html: text }} />
    <a className={sheet.classes.media} href={media.expanded_url}>
      <img className={sheet.classes.image} src={media.media_url_https} alt="" />
    </a>
  </div>
);

Content.propTypes = {
  media: PropTypes.object,
  text: PropTypes.string,
};

export default useSheet(Content, styles);
