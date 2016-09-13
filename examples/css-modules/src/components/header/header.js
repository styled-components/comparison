import React, { PropTypes } from 'react';

import styles from './header.css';

const Header = ({ name, profileImageUrl, screenName, url }) => (
  <div className={styles.header}>
    <div className={styles.profile}>
      <a href={url}>
        <img className={styles.image} src={profileImageUrl} alt={name} />
      </a>
    </div>
    <div className={styles.user}>
      <a className={styles.url} href={url}>
        <span className={styles.name}>{name}</span>
        <span className={styles.screenName}>@{screenName}</span>
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
