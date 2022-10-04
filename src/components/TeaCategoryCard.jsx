import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import './TeaCategoryCardStyles.css'
import teaIcon from '../assets/icons8-tea-tin-100.png'
import { Link, useNavigate } from "react-router-dom";

const TeaCategoryCard = ({ tea, setSelectedTeaCategory }) => {

    const navigate = useNavigate()

    const { color, type, name } = tea
    const handleSetTeaCategory = (e) => {
        console.log('Type: ', tea.type)
        setSelectedTeaCategory(tea)
        navigate(`/${name}`)
    }
    // console.log('name: ', name)

    return (
        <Card 
        style={{ width: '18rem', height: '25rem', background: color, cursor: "pointer", border: 'light' }} 
        className="teaCard"
        onClick={handleSetTeaCategory}
        >
            <Card.Body className="teaCard teaCardBody" style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white" }} >
                <Card.Title style={{ fontWeight: 'bolder', fontSize: '35px' }} >{type}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default TeaCategoryCard