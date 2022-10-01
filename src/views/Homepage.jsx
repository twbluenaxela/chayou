import { useState, useEffect } from "react";
import TeaCategoryCard from "../components/TeaCategoryCard";
import test from '../assets/react.svg'

const Homepage = ({ teaList, setSelectedTeaCategory }) => {

    return (
        <div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h1>我想喝。。。</h1>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: '2rem', justifyContent: 'center'}}>
            {teaList.map((tea) => (
                <TeaCategoryCard key={tea.name} tea={tea} setSelectedTeaCategory={setSelectedTeaCategory} />
            ))}
            </div>
        </div>
    )
}

export default Homepage