import React, { PropTypes } from 'react';

const Header = ({ name, profileImageUrl, screenName, url }) => (
  <div className="header">
    <div className="header__profile">
      <a target="_blank" href={url}>
        <img className="header__image" src={profileImageUrl} alt={name} />
      </a>
    </div>
    <div className="header__user">
      <a className="header__user-url" target="_blank" href={url}>
        <span className="header__user-name">{name}</span>
        <span className="header__user-screenName">@{screenName}</span>
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
