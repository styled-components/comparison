import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
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
});

const Content = ({ text, media }) => (
  <div>
    <p className={css(styles.text)} dangerouslySetInnerHTML={{ __html: text }} />
    <a className={css(styles.media)} href={media.expanded_url}>
      <img className={css(styles.image)} src={media.media_url_https} alt="" />
    </a>
  </div>
);

Content.propTypes = {
  media: PropTypes.object,
  text: PropTypes.string,
};

export default Content;
