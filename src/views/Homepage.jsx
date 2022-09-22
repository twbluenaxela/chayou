import { useState, useEffect } from "react";
import TeaCard from "../components/TeaCard";
import test from '../assets/react.svg'

const Homepage = ({ teaList, setSelectedTea }) => {

    

    return (
        <div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h1>我想喝。。。</h1>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: '2rem', justifyContent: 'center'}}>
            {teaList.map((tea) => (
                <TeaCard key={tea.name} tea={tea} setSelectedTea={setSelectedTea} />
            ))}
            </div>
        </div>
    )
}

export default Homepage