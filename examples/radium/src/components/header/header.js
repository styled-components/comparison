import React, { PropTypes } from 'react';
import radium from 'radium';

const styles = {
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
  },
  screenNameBefore: {
    display: 'block',
    whiteSpace: 'pre',
  },
};

const Header = ({ name, profileImageUrl, screenName, url }) => (
  <div style={styles.header}>
    <div style={styles.profile}>
      <a href={url}>
        <img style={styles.image} src={profileImageUrl} alt={name} />
      </a>
    </div>
    <div style={styles.user}>
      <a style={styles.url} href={url}>
        <span style={styles.name}>{name}</span>
        <span style={styles.screenNameBefore}></span>
        <span style={styles.screenName}>@{screenName}</span>
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

export default radium(Header);
