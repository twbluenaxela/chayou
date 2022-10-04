import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import NavigationBar from './components/Navbar'
import Homepage from './views/Homepage'
import TeaSubTypePage from './views/TeaSubTypePage'
import TeaSearchResults from './views/TeaSearchResults'

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

const App = () => {
  const [selectedTeaCategory, setSelectedTeaCategory] = useState('')
  const [teaList, setTeaList] = useState([...listOfTeas])
  const [selectedTea, setSelectedTea] = useState(null)
  const navigate = useNavigate()

  // const setTeaHandler = (teaType) => {
  //   console.log('Tea type: (App) ', teaType)
  //   setSelectedTea(teaType)
  //   console.log('Current tea selected: ', selectedTea)
  // }
  console.log('Currently selected tea: ', selectedTea)

  const findObjectByTeaName = (teaName) => {
    const teaObject = teaList.find((tea) => tea.name === teaName)
    console.log('Found: ', teaObject)
    return teaObject
  }

  const navigateToSearchPage = (keyword) => {
    // e.preventDefault()
    // const teaToSearchFor = e.target.value
    setSelectedTea(keyword)
    navigate(`/search/${keyword}`)
}

  return (
    <div className="App">
      <NavigationBar navigateToSearchPage={navigateToSearchPage} />
      <Routes>
        <Route path='/' element={<Homepage setSelectedTeaCategory={setSelectedTeaCategory} teaList={teaList} />} />
        <Route path={`/search`} element={selectedTea && <TeaSearchResults teaToSearchFor={ selectedTea } />}>
          {selectedTea && <Route path={`/search/${selectedTea}`} element={<TeaSearchResults teaToSearchFor={ selectedTea } navigateToSearchPage={navigateToSearchPage}  />} />}
        </Route>
        {teaList.map((tea) =>
          <Route key={tea.name} path={`/${tea.name}`} element={ <TeaSubTypePage key={tea.name} tea={tea} setSelectedTea={setSelectedTea} navigateToSearchPage={navigateToSearchPage} /> } /> 
        )}
      </Routes>
    </div>
  )
}

export default App
