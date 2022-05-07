import { useState } from 'react'
import styles from './Toggle.module.scss'
import { cx } from 'classnames'

function Toggle() {
  const [currentActive, setCurrentActive] = useState('기본')

  const handleActive = (e) => {
    if (e.currentTarget.classList.contains('default')) {
      if (currentActive === '기본') return
      setCurrentActive('기본')
    } else {
      if (currentActive === '상세') return
      setCurrentActive('상세')
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.toggleWrapper}>
        <div className={styles.slider}>
          <div className={styles.activeBar} currentActive={currentActive} />
          <button className={styles.default} type='button' onClick={handleActive} currentActive={currentActive}>
            기본
          </button>
          <button className={styles.detail} type='button' onClick={handleActive} currentActive={currentActive}>
            상세
          </button>
        </div>
      </section>
    </div>
  )
}

export default Toggle
