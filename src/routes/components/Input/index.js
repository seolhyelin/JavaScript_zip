import { useState } from 'react'
import styles from './Input.module.scss'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { AiOutlineEyeInvisible, AiFillEye } from 'react-icons/ai'

function Input() {
  const [isCheck, setIsCheck] = useState(false)
  const [exposePw, setExposePw] = useState({
    type: 'password',
    visible: false,
  })

  const style = { color: `${isCheck ? '#fca503' : '#e0e0e0'}` }

  const handleCheckEmail = (e) => {
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    if (regExp.test(e.currentTarget.value)) {
      setIsCheck(true)
    } else {
      setIsCheck(false)
    }
  }

  const handleConvertPassword = (e) => {
    setExposePw(() => {
      if (!exposePw.visible) {
        return { type: 'text', visible: true }
      }
      return { type: 'password', visible: false }
    })
  }

  return (
    <div className={styles.container}>
      <span htmlFor='email'>E-mail</span>
      <section className={styles.emailWrapper}>
        <input className={styles.emailInput} placeholder='E-mail' id='email' onChange={handleCheckEmail} />
        <BsFillCheckCircleFill className={styles.checkIcon} style={style} />
      </section>
      <span htmlFor='password'>Password</span>
      <section className={styles.pwWrapper}>
        <input className={styles.pwInput} placeholder='Password' id='password' type={exposePw.type} />
        {exposePw.type === 'password' ? (
          <AiOutlineEyeInvisible className={styles.invisibleIcon} onClick={handleConvertPassword} />
        ) : (
          <AiFillEye className={styles.visibleIcon} onClick={handleConvertPassword} />
        )}
      </section>
    </div>
  )
}

export default Input
