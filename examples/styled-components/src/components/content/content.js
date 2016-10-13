import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Text = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.5em;
  margin: 0;
  padding: .65625rem 0 .98438rem;

  > a {
    color: #1da1f2;
  }

  > a:hover {
    text-decoration: underline;
  }
`;

const Media = styled.a`
  border-radius: .35rem;
  border: 1px solid #e1e8ed;
  display: block;
  margin: .65625rem 0 1.3125rem;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
`;

const Content = ({ text, media }) => (
  <div>
    <Text dangerouslySetInnerHTML={{ __html: text }} />
    <Media target="_blank" href={media.expanded_url}>
      <Image src={media.media_url_https} alt="" />
    </Media>
  </div>
);

Content.propTypes = {
  media: PropTypes.object,
  text: PropTypes.string,
};

export default Content;
