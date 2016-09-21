import React, { PropTypes } from 'react';
import useSheet from 'react-jss';

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

const Header = ({ name, profileImageUrl, screenName, url, sheet }) => (
  <div className={sheet.classes.header}>
    <div className={sheet.classes.profile}>
      <a href={url}>
        <img className={sheet.classes.image} src={profileImageUrl} alt={name} />
      </a>
    </div>
    <div className={sheet.classes.user}>
      <a className={sheet.classes.url} href={url}>
        <span className={sheet.classes.name}>{name}</span>
        <span className={sheet.classes.screenName}>@{screenName}</span>
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

export default useSheet(Header, styles);
