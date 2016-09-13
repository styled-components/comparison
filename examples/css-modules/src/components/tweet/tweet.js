import React, { PropTypes } from 'react';

import Header from 'components/header';
import Content from 'components/content';
import Footer from 'components/footer';
import { transform } from 'utils/text';

import styles from './tweet.css';

const Tweet = ({ data }) => (
  <div className={styles.container}>
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
  </div>
);

Tweet.propTypes = {
  data: PropTypes.object,
};

export default Tweet;
