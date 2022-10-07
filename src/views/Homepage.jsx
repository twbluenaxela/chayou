import { useState, useEffect } from "react";
import TeaCategoryCard from "../components/TeaCategoryCard";
import test from '../assets/react.svg'
import { Row, Col } from "react-bootstrap";

const Homepage = ({ teaList, setSelectedTeaCategory }) => {

    return (
        <div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h1>我想喝。。。</h1>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: '1.5rem', justifyContent: 'center', marginLeft: "55px", marginRight: "55px"}}  >
            <Row xs={1} md={4} className="g-4">
            {teaList.map((tea) => (
                <Col>
                    <TeaCategoryCard key={tea.name} tea={tea} setSelectedTeaCategory={setSelectedTeaCategory} />
                </Col>
            ))}
            </Row>

            </div>
        </div>
    )
}

export default Homepage