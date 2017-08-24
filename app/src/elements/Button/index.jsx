import React from 'react'
import styles from './style.css'
import classNames from 'classnames'

const Button = (props) => {
  const btnType = props.btnType
  const buttonType = classNames({
    btn: true,
    [`btn-${btnType}`]: true,
    [styles.hoverClass]: true,
  })
  return (
    <button className={buttonType}>{props.caption}</button>
  )
}

export default Button
