import { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap'
import teaService from '../services/teas'
import TeaProductCard from "../components/TeaProductCard";

const TeaSearchResults = ({ teaToSearchFor }) => {
    const [teaResults, setTeaResults] = useState([])

    useEffect(() => {
        teaService
        .fetchTeas(teaToSearchFor)
        .then((fetchedTeas) => {
            console.log('Retrieved teas from server: ', fetchedTeas)
            setTeaResults(fetchedTeas)
        })
    },[])

    return (
        <div>
            <h1>Teas</h1>
            <Row xs={1} md={4} className="g-4" >
                {teaResults.map((tea) => (
                    <Col>
                        <TeaProductCard tea={tea} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default TeaSearchResults