import React, { useState } from 'react'
import styles from './Slider.module.scss'

function Slider() {
  const [percent, setPercent] = useState(1)

  const handlePercent = (e) => {
    setPercent(e.currentTarget.value)
  }

  const percentSlide = () => {
    const slider = []
    for (let i = 1; i <= 100; i += 1) {
      slider.push(
        <div
          className={styles.sliders}
          key={`${i}`}
          id={`${i}`}
          onClick={() => setPercent(i)}
          percent={percent}
          role='presentation'
          style={{ backgroundColor: `${Number(i) <= percent ? '#10aeaf' : '#d3d3d3'}` }}
        />
      )
    }
    return slider
  }

  return (
    <div className={styles.container}>
      <section className={styles.range}>
        <span className={styles.rangeNumber}>{percent}</span>%
      </section>
      <section className={styles.slideWrapper}>
        {percentSlide()}
        <input className={styles.rangeBar} type='range' min={1} max={100} onChange={handlePercent} value={percent} />
      </section>
      <section className={styles.buttonWrapper}>
        {[1, 25, 50, 75, 100].map((number, index) => {
          return (
            <button
              className={styles.percentButton}
              key={index}
              onClick={() => setPercent(number)}
              number={number}
              type='button'
              style={{ left: `${number}%` }}
            >
              {number}%
            </button>
          )
        })}
      </section>
    </div>
  )
}

export default Slider
