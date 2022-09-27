import { useState, useEffect } from "react";
import { useMatch, useParams, useNavigate } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const TeaSubcategoryPage = ({ tea }) => {
    //for dev purposes
    /**
     * TODO: pull different subcategories of tea from a database (mongodb)
     * based on params of the current page. 
     * ex: website.com/green should pull the green tea subcategories such as
     * longjing 龍井, matcha抹茶, biluochun 碧螺春, etc.
     * website.com/black would pulll up black tea subcategories such as golden monkey black,
     * etc
     */
    const dummyGreenTeaData = ['龍井','碧螺春','抹茶','毛峰','毛尖','玉露']

    const fetchSearchResults = (e) => {
        e.preventDefault()
        const teaSubcategoryToSearch = e.target.name

    }

    return (
        <div className="d-grid gap-3">
            <h1>{tea.type}</h1>
            {dummyGreenTeaData.map((subTea) => (
            <Button 
            style={{ color: tea.color, backgroundColor: 'white', borderColor: tea.color }} 
            size="lg"
            name={subTea}
            id={subTea}
            >
                {subTea}
            </Button>
            ))}
        </div>
    )
}

export default TeaSubcategoryPage