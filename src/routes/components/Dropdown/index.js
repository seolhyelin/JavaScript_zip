import styles from './Dropdown.module.scss'
import arrowIcon from '../../../assets/img/arrow.png'
import lensIcon from '../../../assets/img/lens.png'

function Dropdown() {
  return (
    <div className={styles.container}>
      <div className={styles.selectWrapper}>
        <div className={styles.selectBox}>
          <p className={styles.selectWord} />
        </div>
        <img src={arrowIcon} alt='arrow' />
      </div>
      <div className={styles.dropdownWrapper}>
        <input className={styles.searchBar} />
        <img src={lensIcon} alt='lens' />
        <ul className={styles.dropdownList}>
          <li>kk</li>
          <li>kk</li>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
