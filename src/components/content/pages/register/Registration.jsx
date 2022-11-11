import React from 'react'

import styles from './Registration.module.scss'

export const Registration = () => {
  return (
    <div className={styles.reg__wrapper}>
        <input placeholder='Enter you Email...'></input>
        <input placeholder='Create you password...'></input>
        <button></button>
    </div>
  )
}

