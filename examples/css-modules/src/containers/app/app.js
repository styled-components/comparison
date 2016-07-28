import React from 'react'

import Tweet from 'components/tweet'
import data from 'data/755481795206971392.json'

import 'normalize.css'
import styles from './app.css'

const App = () => (
  <div className={styles.container}>
    <Tweet data={data} />
  </div>
)

export default App
