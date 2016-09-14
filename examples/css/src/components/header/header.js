import React, { PropTypes } from 'react';

const Header = ({ name, profileImageUrl, screenName, url }) => (
  <div className="header">
    <div className="profile">
      <a href={url}>
        <img className="header__image" src={profileImageUrl} alt={name} />
      </a>
    </div>
    <div className="user">
      <a className="url" href={url}>
        <span className="name">{name}</span>
        <span className="screenName">@{screenName}</span>
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
