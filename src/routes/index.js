import styles from './Routes.module.scss'
import Dropdown from './components/Dropdown'
import BoardTemplate from './components/BoardTemplate.js'
import Input from './components/Input'

function App() {
  return (
    <div className={styles.container}>
      <BoardTemplate name='Dropdown'>
        <Dropdown />
      </BoardTemplate>
      <BoardTemplate name='Input'>
        <Input />
      </BoardTemplate>
    </div>
  )
}

export default App
