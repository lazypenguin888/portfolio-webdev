import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import './App.css'
import Webdev from './components/Webdev/Webdev'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Webdev/>
    </div>
  )
}

export default App