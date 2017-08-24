import React from 'react'
import styles from './style.css'
import classNames from 'classnames'
import Button from '../../../elements/Button'

 {/* Welcome message will switch to current schedule upon log in */}

const Welcome = () => {

  const yellow = true;

  const fontColor = classNames({
    [styles.greenFont]: !yellow,
    [styles.yellowFont]: yellow,
  })



  return (
    <div id='welcome' className={fontColor}>
      <h1 className={styles.green}>
        Please log in to view current volunteer schedule.
      </h1>
      <h1 className={styles.yellow}>Here is some more text to give an ugly background color to.</h1>
      <Button
        caption='Cool Button Component'
        btnType='danger'
      />
    </div>
  )
}

export default Welcome
