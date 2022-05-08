import { useState } from 'react'
import styles from './Tab.module.scss'

function Index() {
  const [selected, setSelected] = useState('설혜린')
  const [selectNumber, setSelectNumber] = useState(0)

  const handleWordClick = (e) => {
    setSelected(e.target.name)
    setSelectNumber(e.target.id)
  }
  return (
    <section className={styles.wrapper}>
      {['설혜린', '설토실', '설토린'].map((word, index) => {
        return (
          <button
            className={`${styles.category} ${selected === word ? styles.active : styles.inactive}`}
            key={word}
            id={index}
            name={word}
            selected={selected}
            onClick={handleWordClick}
            type='button'
          >
            {word}
          </button>
        )
      })}

      <div
        className={styles.highlight}
        selectNumber={selectNumber}
        style={{ transform: `translateX(${selectNumber * 100}%)` }}
      />
    </section>
  )
}

export default Index
