import styles from './BoardTemplate.module.scss'
/* eslint-disable react/prop-types */

function BoardTemplate({ name, children }) {
  return (
    <div className={styles.container}>
      <p className={styles.nameContainer}>{name}</p>
      {children}
    </div>
  )
}

export default BoardTemplate
