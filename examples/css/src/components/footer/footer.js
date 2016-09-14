import React, { Component, PropTypes } from 'react';

import ReplyIcon from '../../../../shared/assets/reply.svg';
import RetweetIcon from '../../../../shared/assets/retweet.svg';
import LikeIcon from '../../../../shared/assets/like.svg';
import MoreIcon from '../../../../shared/assets/more.svg';

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
        <div className="date">{createdAt}</div>
        <div className="counters">
          <span>
            <span className="value">{retweetCount}</span>
            <span className="label"> Retweets</span>
          </span>
          <span className="favorite">
            <span className="value">
              {liked ? favoriteCount + 1 : favoriteCount}
            </span>
            <span className="label"> Likes</span>
          </span>
        </div>
        <div className="actions">
          <div className="icon">
            <ReplyIcon />
          </div>
          <div className="icon">
            <RetweetIcon />
          </div>
          <button className="button" onClick={this.handleClick}>
            <LikeIcon className={liked && 'liked'} />
          </button>
          <div className="icon">
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
