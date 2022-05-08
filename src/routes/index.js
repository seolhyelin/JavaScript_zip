import styles from './Routes.module.scss'
import Dropdown from './components/Dropdown'
import BoardTemplate from './components/BoardTemplate.js'
import Input from './components/Input'
import Tab from './components/Tab'
import Toggle from './components/Toggle'
import Slider from './components/Slider'

function App() {
  return (
    <div className={styles.container}>
      <BoardTemplate name='Tab'>
        <Tab />
      </BoardTemplate>
      <BoardTemplate name='Input'>
        <Input />
      </BoardTemplate>
      <BoardTemplate name='Toggle'>
        <Toggle />
      </BoardTemplate>
      <BoardTemplate name='Slider'>
        <Slider />
      </BoardTemplate>
      <BoardTemplate name='Dropdown'>
        <Dropdown />
      </BoardTemplate>
    </div>
  )
}

export default App
