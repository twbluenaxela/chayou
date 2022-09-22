import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import NavigationBar from './components/Navbar'
import Homepage from './views/Homepage'
import TeaPage from './views/TeaPage'

const listOfTeas = [
  {
      color: '#A7DB42',
      type: '绿茶',
      name: 'green'
  },
  {
      color: '#c83c23',
      type: '紅茶',
      name: 'black'
  },
  {
      color: '#8b0000',
      type: '普爾',
      name: 'puer'
  },
  {
      color: '#FFA500',
      type: '烏龍茶',
      name: 'wulong'
  }
]

function App() {
  const [selectedTea, setSelectedTea] = useState('')
  const [teaList, setTeaList] = useState([...listOfTeas])

  // const setTeaHandler = (teaType) => {
  //   console.log('Tea type: (App) ', teaType)
  //   setSelectedTea(teaType)
  //   console.log('Current tea selected: ', selectedTea)
  // }
  // console.log('Currently selected tea: ', selectedTea)

  const findObjectByTeaName = (teaName) => {
    const teaObject = teaList.find((tea) => tea.name === teaName)
    console.log('Found: ', teaObject)
    return teaObject
  }

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Homepage setSelectedTea={setSelectedTea} teaList={teaList} />} />
        {teaList.map((tea) =>
          <Route key={tea.name} path={`/${tea.name}`} element={<TeaPage tea={tea} />} /> 
        )}
      </Routes>
    </div>
  )
}

export default App
