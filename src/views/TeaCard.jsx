import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import './TeaCardStyles.css'
import teaIcon from '../assets/icons8-tea-tin-100.png'

const TeaCard = ({ color, type, setTeaHandler }) => {
    const handleSetTea = (e) => {
        e.preventDefault()
        console.log('Type: ', type)
        setTeaHandler(type)
    }

    return (
        <Card 
        style={{ width: '18rem', height: '90vh', backgroundColor: color, cursor: "pointer", border: 'light' }} 
        className="teaCard"
        onClick={handleSetTea}
        >
            <Card.Img variant='center' src={teaIcon} />
            <Card.ImgOverlay>
            <Card.Body style={{ display: 'grid', placeItems: 'center' }} >
                <Card.Title style={{ color: 'white' }}  >{type}</Card.Title>

            </Card.Body>

            </Card.ImgOverlay>

        </Card>
    )
}

export default TeaCard