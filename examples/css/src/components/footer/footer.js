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
        <div className="footer__date">{createdAt}</div>
        <div className="footer__counters">
          <span>
            <span className="footer__value">{retweetCount}</span>
            <span className="footer__label"> Retweets</span>
          </span>
          <span className="footer__favorite">
            <span className="footer__value">
              {liked ? favoriteCount + 1 : favoriteCount}
            </span>
            <span className="footer__label"> Likes</span>
          </span>
        </div>
        <div className="footer__actions">
          <div className="footer__icon">
            <ReplyIcon />
          </div>
          <div className="footer__icon">
            <RetweetIcon />
          </div>
          <button className="footer__icon footer__button" onClick={this.handleClick}>
            <LikeIcon className={liked && 'footer__liked'} />
          </button>
          <div className="footer__icon">
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
