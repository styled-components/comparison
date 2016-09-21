import React, { Component, PropTypes } from 'react';

import ReplyIcon from '../../../../shared/assets/reply.svg';
import RetweetIcon from '../../../../shared/assets/retweet.svg';
import LikeIcon from '../../../../shared/assets/like.svg';
import MoreIcon from '../../../../shared/assets/more.svg';

import styles from './footer.css';

class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      liked: false,
    };
  }

  handleClick = () => {
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    const { createdAt, favoriteCount, retweetCount } = this.props;
    const { liked } = this.state;

    return (
      <div>
        <div className={styles.date}>{createdAt}</div>
        <div className={styles.counters}>
          <span>
            <span className={styles.value}>{retweetCount}</span>
            <span className={styles.label}> Retweets</span>
          </span>
          <span className={styles.favorite}>
            <span className={styles.value}>
              {liked ? favoriteCount + 1 : favoriteCount}
            </span>
            <span className={styles.label}> Likes</span>
          </span>
        </div>
        <div className={styles.actions}>
          <div className={styles.icon}>
            <ReplyIcon />
          </div>
          <div className={styles.icon}>
            <RetweetIcon />
          </div>
          <button className={styles.button} onClick={this.handleClick}>
            <LikeIcon className={liked && styles.liked} />
          </button>
          <div className={styles.icon}>
            <MoreIcon />
          </div>
        </div>
      </div>
    );
  }

}

Footer.propTypes = {
  createdAt: PropTypes.string,
  favoriteCount: PropTypes.number,
  retweetCount: PropTypes.number,
};

export default Footer;
