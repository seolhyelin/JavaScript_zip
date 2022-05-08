import { useState } from 'react'
import styles from './Toggle.module.scss'

function Toggle() {
  const [currentActive, setCurrentActive] = useState('기본')

  const handleActive = (e) => {
    console.log(e.currentTarget.classList)
    if (e.currentTarget.classList.contains(styles.default)) {
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
          <div
            className={`${currentActive === '기본' ? styles.activeBar : styles.activeRightBar}`}
            currentActive={currentActive}
            // stlye={{ transform: `translateX(${currentActive === '기본' ? '0%' : '100%'})` }}
          />
          <button
            className={styles.default}
            type='button'
            onClick={handleActive}
            currentActive={currentActive}
            style={{
              color: `${currentActive === '기본' ? '#000000' : '#787878'}`,
              fontWeight: `${currentActive === '기본' ? '600' : '400'}`,
            }}
          >
            기본
          </button>
          <button
            className={styles.detail}
            type='button'
            onClick={handleActive}
            currentActive={currentActive}
            style={{
              color: `${currentActive === '상세' ? '#000000' : '#787878'}`,
              fontWeight: `${currentActive === '상세' ? '600' : '400'}`,
            }}
          >
            상세
          </button>
        </div>
      </section>
    </div>
  )
}

export default Toggle
