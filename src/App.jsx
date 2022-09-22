import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavigationBar from './components/Navbar'
import Homepage from './views/Homepage'

function App() {
  const [count, setCount] = useState(0)
  const [selectedTea, setSelectedTea] = useState('')

  const setTeaHandler = (teaType) => {
    console.log('Tea type: (App) ', teaType)
    setSelectedTea('green')
    console.log('Current tea selected: ', selectedTea)
  }

  if(selectedTea === '') {
    return (
      <div>
        <NavigationBar />
        <Homepage setTeaHandler={setTeaHandler}/>
      </div>
    )
  }

  return (
    <div className="App">
      <NavigationBar />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React weee</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
