import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

import ReplyIcon from '../../../../shared/assets/reply.svg';
import RetweetIcon from '../../../../shared/assets/retweet.svg';
import LikeIcon from '../../../../shared/assets/like.svg';
import MoreIcon from '../../../../shared/assets/more.svg';

const likedAnimation = keyframes`
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const CreationDate = styled.div`
  padding-bottom: .98438rem;
  color: #8899a6;
`;

const Counters = styled.div`
  border-top: 1px solid #e1e8ed;
  padding: .98438rem 0;
  text-transform: uppercase;
`;

const Value = styled.span`
  font-weight: 700;
`;

const Label = styled.span`
  color: #8899a6;
  font-size: .85rem;
`;

const Favorite = styled.span`
  display: inline-block;
  margin-left: 1.96875rem;
`;

const Actions = styled.div`
  align-items: center;
  border-bottom: 1px solid #e1e8ed;
  border-top: 1px solid #e1e8ed;
  color: #8899a6;
  display: flex;
  font-size: 1.5rem;
  height: 3.28125rem;
  width: 100%;
`;

const Icon = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  text-align: center;
`;

const Button = styled.button`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  text-align: center;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  outline: none;

  > svg {
    margin: 0 auto;
  }
`;

const Like = styled(LikeIcon)`
  ${(props) => {
    if (props.liked) {
      return css`
        color: #e81c4f;
        animation: ${likedAnimation} .25s;
      `;
    }

    return '';
  }}
`;

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
        <CreationDate>{createdAt}</CreationDate>
        <Counters>
          <span>
            <Value>{retweetCount}</Value>
            <Label> Retweets</Label>
          </span>
          <Favorite>
            <Value>
              {liked ? favoriteCount + 1 : favoriteCount}
            </Value>
            <Label> Likes</Label>
          </Favorite>
        </Counters>
        <Actions>
          <Icon><ReplyIcon /></Icon>
          <Icon><RetweetIcon /></Icon>
          <Button onClick={this.handleClick}>
            <Like liked={liked} />
          </Button>
          <Icon><MoreIcon /></Icon>
        </Actions>
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
