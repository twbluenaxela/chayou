import { useState, useEffect } from "react";
import { useMatch, useParams, useNavigate } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const dummyGreenTeaData = [
    { 
        chineseName: "龍井",
        englishName: "longjing"
    },
    { 
        chineseName: "碧螺春",
        englishName: "biluochun"
    },
    { 
        chineseName: "抹茶",
        englishName: "matcha"
    },
    { 
        chineseName: "毛峰",
        englishName: "maofeng"
    },
    { 
        chineseName: "毛尖",
        englishName: "maojian"
    },
    { 
        chineseName: "玉露",
        englishName: "gyokuro"
    }]

const TeaSubTypePage = ({ tea, setSelectedTea }) => {
    //for dev purposes
    /**
     * TODO: pull different subcategories of tea from a database (mongodb)
     * based on params of the current page. 
     * ex: website.com/green should pull the green tea subcategories such as
     * longjing 龍井, matcha抹茶, biluochun 碧螺春, etc.
     * website.com/black would pulll up black tea subcategories such as golden monkey black,
     * etc
     */

    const [teaSubTypeList, setTeaSubTypeList] = useState([...dummyGreenTeaData])
    //note to self: if you want to use the navigate function to go to another page, make sure to have it defined first 
    // as is seen below. 
    const navigate = useNavigate()

    const navigateToSearchpage = (e) => {
        // e.preventDefault()
        const teaToSearchFor = e.target.name
        setSelectedTea(teaToSearchFor)
        navigate(`/search/${teaToSearchFor}`)
    
    }

    return (
        <div className="d-grid gap-3" style={{ marginLeft: "40px", marginRight: "40px" }} >
            <h1 style={{ textAlign: "center", margin: "10px" }} >{tea.type}</h1>
            {teaSubTypeList.map((teaCategory) => (
            <Button 
            style={{ color: tea.color, backgroundColor: 'white', borderColor: tea.color }} 
            size="lg"
            name={teaCategory.englishName}
            id={teaCategory.englishName}
            onClick={navigateToSearchpage}
            key={teaCategory.englishName}
            >
                {teaCategory.chineseName}
            </Button>
            ))}
        </div>
    )
}

export default TeaSubTypePage