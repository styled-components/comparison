import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

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
    fontWeight: 700,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  screenName: {
    color: '#8899a6',
    '&:before': {
      content: '"\\a"',
      whiteSpace: 'pre',
    },
  },
};

const Header = ({ name, profileImageUrl, screenName, url, classes }) => (
  <div className={classes.header}>
    <div className={classes.profile}>
      <a target="_blank" href={url}>
        <img className={classes.image} src={profileImageUrl} alt={name} />
      </a>
    </div>
    <div className={classes.user}>
      <a className={classes.url} target="_blank" href={url}>
        <span className={classes.name}>{name}</span>
        <span className={classes.screenName}>@{screenName}</span>
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

export default injectSheet(styles)(Header);
