import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Header from '../header';
import Content from '../content';
import Footer from '../footer';
import { transform } from '../../../../shared/utils/text';

const Wrapper = styled.div`
  padding: 0 .6rem;
`;

const Tweet = ({ data }) => (
  <Wrapper>
    <Header
      name={data.user.name}
      profileImageUrl={data.user.profile_image_url_https}
      screenName={data.user.screen_name}
      url={data.user.url}
    />
    <Content
      media={data.entities.media[0]}
      text={transform(data)}
    />
    <Footer
      createdAt={data.created_at}
      favoriteCount={data.favorite_count}
      retweetCount={data.retweet_count}
    />
  </Wrapper>
);

Tweet.propTypes = {
  data: PropTypes.object,
};

export default Tweet;
