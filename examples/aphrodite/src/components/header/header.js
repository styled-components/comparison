import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    padding: '1rem 0 .65625rem',
  },
  profile: {
    flex: '1 0 0',
    margin: '0 .3rem',
  },
  image: {
    borderRadius: '.35rem',
    display: 'block',
    width: '100%',
  },
  user: {
    flex: '7 0 0',
    margin: '0 .3rem',
  },
  url: {
    display: 'inline-block',
    marginTop: '-.15rem',
  },
  name: {
    color: '#292f33',
    fontWeight: '700',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  screenName: {
    color: '#8899a6',
    ':before': {
      content: '"\\a"',
      whiteSpace: 'pre',
    },
  },
});

const Header = ({ name, profileImageUrl, screenName, url }) => (
  <div className={css(styles.header)}>
    <div className={css(styles.profile)}>
      <a target="_blank" href={url}>
        <img className={css(styles.image)} src={profileImageUrl} alt={name} />
      </a>
    </div>
    <div className={css(styles.user)}>
      <a className={css(styles.url)} target="_blank" href={url}>
        <span className={css(styles.name)}>{name}</span>
        <span className={css(styles.screenName)}>@{screenName}</span>
      </a>
    </div>
  </div>
);

Header.propTypes = {
  name: PropTypes.string,
  profileImageUrl: PropTypes.string,
  screenName: PropTypes.string,
  url: PropTypes.string,
};

export default Header;
