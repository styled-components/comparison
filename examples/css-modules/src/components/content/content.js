import React, { PropTypes } from 'react'

import styles from './content.css'

const Tweet = ({ text, media }) => (
  <div>
    <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
    <a className={styles.media} href={media.expanded_url}>
      <img className={styles.image} src={media.media_url_https} alt="" />
    </a>
  </div>
)

Tweet.propTypes = {
  media: PropTypes.object,
  text: PropTypes.string,
}

export default Tweet
