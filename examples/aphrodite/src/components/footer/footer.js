import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import ReplyIcon from '../../../../shared/assets/reply.svg';
import RetweetIcon from '../../../../shared/assets/retweet.svg';
import LikeIcon from '../../../../shared/assets/like.svg';
import MoreIcon from '../../../../shared/assets/more.svg';

const likedAnimation = {
  '50%': {
    transform: 'scale(1.2)',
  },
  '100%': {
    tranform: 'scale(1)',
  },
};

const styles = StyleSheet.create({
  date: {
    paddingBottom: '.98438rem',
    color: '#8899a6',
  },
  counters: {
    borderTop: '1px solid #e1e8ed',
    padding: '.98438rem 0',
    textTransform: 'uppercase',
  },
  value: {
    fontWeight: '700',
  },
  label: {
    color: '#8899a6',
    fontSize: '.85rem',
  },
  favorite: {
    display: 'inline-block',
    marginLeft: '1.96875rem',
  },
  actions: {
    alignItems: 'center',
    borderBottom: '1px solid #e1e8ed',
    borderTop: '1px solid #e1e8ed',
    color: '#8899a6',
    display: 'flex',
    fontSize: '1.5rem',
    height: '3.28125rem',
    width: '100%',
  },
  icon: {
    display: 'flex',
    flexGrow: '1',
    justifyContent: 'center',
    textAlign: 'center',
  },
  button: {
    display: 'flex',
    flexGrow: '1',
    justifyContent: 'center',
    textAlign: 'center',
    background: 'none',
    border: 'none',
    color: 'inherit',
    cursor: 'pointer',
    fontSize: 'inherit',
    outline: 'none',
  },
  liked: {
    animationName: likedAnimation,
    animationDuration: '.25s',
    color: '#e81c4f',
  },
});

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
        <div className={css(styles.date)}>{createdAt}</div>
        <div className={css(styles.counters)}>
          <span>
            <span className={css(styles.value)}>{retweetCount}</span>
            <span className={css(styles.label)}> Retweets</span>
          </span>
          <span className={css(styles.favorite)}>
            <span className={css(styles.value)}>
              {liked ? favoriteCount + 1 : favoriteCount}
            </span>
            <span className={css(styles.label)}> Likes</span>
          </span>
        </div>
        <div className={css(styles.actions)}>
          <div className={css(styles.icon)}>
            <ReplyIcon />
          </div>
          <div className={css(styles.icon)}>
            <RetweetIcon />
          </div>
          <button className={css(styles.button)} onClick={this.handleClick}>
            <LikeIcon className={liked && css(styles.liked)} />
          </button>
          <div className={css(styles.icon)}>
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
