import React, { Component, PropTypes } from 'react';
import radium from 'radium';

import ReplyIcon from '../../../../shared/assets/reply.svg';
import RetweetIcon from '../../../../shared/assets/retweet.svg';
import LikeIcon from '../../../../shared/assets/like.svg';
import MoreIcon from '../../../../shared/assets/more.svg';

const likedAnimation = radium.keyframes({
  '50%': {
    transform: 'scale(1.2)',
  },
  '100%': {
    tranform: 'scale(1)',
  },
}, 'liked');

const styles = {
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
    animation: 'x .25s',
    animationName: likedAnimation,
    color: '#e81c4f',
  },
};

class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      liked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    const { createdAt, favoriteCount, retweetCount } = this.props;
    const { liked } = this.state;

    return (
      <div>
        <div style={styles.date}>{createdAt}</div>
        <div style={styles.counters}>
          <span>
            <span style={styles.value}>{retweetCount}</span>
            <span style={styles.label}> Retweets</span>
          </span>
          <span style={styles.favorite}>
            <span style={styles.value}>
              {liked ? favoriteCount + 1 : favoriteCount}
            </span>
            <span style={styles.label}> Likes</span>
          </span>
        </div>
        <div style={styles.actions}>
          <div style={styles.icon}>
            <ReplyIcon />
          </div>
          <div style={styles.icon}>
            <RetweetIcon />
          </div>
          <button style={styles.button} onClick={this.handleClick}>
            <LikeIcon style={liked && styles.liked || {}} />
          </button>
          <div style={styles.icon}>
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

export default radium(Footer);
