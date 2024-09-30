import React from 'react'
import styles from './Categories.module.css'

const Categories = () => {
  return (
    <div className={`${styles.container}`}>
        <h2>Cuisine 🍽</h2>
        <div className={`${styles.mainFlex}`}>
            <div className={`${styles.subFlex}`}>Fisrt</div>
            <div className={`${styles.subFlex}`}>Second</div>
            <div className={`${styles.subFlex}`}>Third</div>
            <div className={`${styles.subFlex}`}>Fourth</div>
        </div>
    </div>
  )
}

export default Categories