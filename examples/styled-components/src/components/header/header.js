import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding: 1rem 0 .65625rem;
`;

const Profile = styled.div`
  flex: 1 0 0;
  margin: 0 .3rem;
`;

const Image = styled.img`
  border-radius: .35rem;
  display: block;
  width: 100%;
`;

const User = styled.div`
  flex: 7 0 0;
  margin: 0 .3rem;
`;

const UserAnchor = styled.a`
  display: inline-block;
  margin-top: -.15rem;

  &:hover > #name {
    text-decoration: underline;
  }
`;

const Name = styled.span`
  color: #292f33;
  font-weight: 700;
`;

const ScreenName = styled.span`
  color: #8899a6;

  &:before {
    content: '\\a';
    white-space: pre;
  }
`;

const Header = ({ name, profileImageUrl, screenName, url }) => (
  <Wrapper>
    <Profile>
      <a target="_blank" href={url}>
        <Image src={profileImageUrl} alt={name} />
      </a>
    </Profile>
    <User>
      <UserAnchor target="_blank" href={url}>
        <Name id="name">{name}</Name>
        <ScreenName>@{screenName}</ScreenName>
      </UserAnchor>
    </User>
  </Wrapper>
);

Header.propTypes = {
  name: PropTypes.string,
  profileImageUrl: PropTypes.string,
  screenName: PropTypes.string,
  url: PropTypes.string,
};

export default Header;
