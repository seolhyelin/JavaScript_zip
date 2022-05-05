import { useState } from 'react'
import styles from './Dropdown.module.scss'
import arrowIcon from '../../../assets/img/arrow.png'
import lensIcon from '../../../assets/img/lens.png'

const fruitsList = [
  'All Fruits',
  'orange',
  'grape',
  'tomato',
  'apple',
  'banana',
  'peach',
  'pineapple',
  'strawberry',
  'olive',
  'pear',
]

function Dropdown() {
  const [isShow, setIsShow] = useState(false)
  const [currentKeyword, setCurrentKeyword] = useState('All Fruits')
  const [currentList, setCurrentList] = useState(fruitsList.slice())

  const handleDropdownClick = (e) => {
    setIsShow(!isShow)
  }

  const handleSearchWord = (e) => {
    const searchWord = e.target.value
    const searchStage = fruitsList.slice(1).map((item) => ({
      // eslint-disable-next-line object-shorthand
      item: item,
      string: item.slice(0, searchWord.length),
    }))

    const result = ['All Fruits']
    for (let i of searchStage) {
      if (i.string === searchWord) result.push(i.item)
    }

    setCurrentList(result)
  }

  const handleSelectKeyword = (e) => {
    setCurrentKeyword(e.target.id)
    setIsShow(false)
  }

  return (
    <div className={styles.container}>
      <section className={styles.selectWrapper} onClick={handleDropdownClick} role='presentation'>
        <div className={styles.selectBox}>
          <p className={styles.selectWord}>{currentKeyword}</p>
        </div>
        <img src={arrowIcon} alt='arrow' />
      </section>
      {isShow && (
        <section className={styles.dropdownWrapper}>
          <input className={styles.searchBar} placeholder='Search Symbol' onChange={handleSearchWord} />
          <img src={lensIcon} alt='lens' />
          <ul className={styles.dropdownList} onClick={handleSelectKeyword} role='presentation'>
            {currentList.map((item, index) => {
              return (
                <li key={index} id={item}>
                  {item}
                </li>
              )
            })}
          </ul>
        </section>
      )}
    </div>
  )
}

export default Dropdown
