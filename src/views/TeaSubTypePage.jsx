import { useState, useEffect } from "react";
import teaCategoryService from '../services/teaCategories'
import Button from 'react-bootstrap/Button';

const TeaSubTypePage = ({ tea, setSelectedTea, navigateToSearchPage }) => {

    const [teaSubTypeList, setTeaSubTypeList] = useState([])
    //note to self: if you want to use the navigate function to go to another page, make sure to have it defined first 
    // as is seen below. 
    useEffect(() => {
        if(tea.type){
            teaCategoryService.getTeaCategory(tea.name).then((fetchedCategories) => {
                console.log('Retrieved categories from server: ', fetchedCategories)

                if(fetchedCategories) {
                    setTeaSubTypeList(fetchedCategories)
                }
            })
        }
    }, [])

    const handleSetSearch = (e) => {
        e.preventDefault()
        const teaToSearchFor = e.target.value
        navigateToSearchPage(teaToSearchFor)
      }
    

    return (
        <div className="d-grid gap-3" style={{ marginLeft: "40px", marginRight: "40px" }} id="teasubtypecontainer" >
            <h1 style={{ textAlign: "center", margin: "10px" }} >{tea.type}</h1>
            {teaSubTypeList.map((teaCategory) => (
            <Button 
            style={{ color: tea.color, backgroundColor: 'white', borderColor: tea.color }} 
            size="lg"
            name={teaCategory.englishName}
            id={teaCategory.englishName}
            onClick={handleSetSearch}
            key={teaCategory.englishName}
            value={teaCategory.englishName}
            >
                {teaCategory.chineseName}
            </Button>
            ))}
        </div>
    )
}

export default TeaSubTypePage