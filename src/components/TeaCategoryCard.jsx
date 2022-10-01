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
        style={{ width: '18rem', height: '90vh', backgroundColor: color, cursor: "pointer", border: 'light' }} 
        className="teaCard"
        onClick={handleSetTeaCategory}
        >
            <Card.Img variant='center' src={teaIcon} />
            <Card.ImgOverlay>
            <Card.Body style={{ display: 'grid', placeItems: 'center' }} >
                <Card.Title style={{ color: 'white', fontWeight: 'bold', fontSize: '25px' }}  >{type}</Card.Title>
            </Card.Body>

            </Card.ImgOverlay>

        </Card>
    )
}

export default TeaCategoryCard