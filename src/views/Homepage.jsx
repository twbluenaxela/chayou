import { useState, useEffect } from "react";
import TeaCard from "./TeaCard";
import test from '../assets/react.svg'

const Homepage = ({ setTeaHandler }) => {

    const listOfTeas = [
        {
            color: '#A7DB42',
            type: '绿茶',
            icon: test,
            name: 'greentea'
        },
        {
            color: '#c83c23',
            type: '紅茶',
            icon: test,
            name: 'blacktea'
        },
        {
            color: '#8b0000',
            type: '普爾',
            icon: test,
            name: 'puer'
        },
        {
            color: '#FFA500',
            type: '烏龍茶',
            icon: test,
            name: 'wulong'
        }
    ]

    return (
        <div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h1>我想喝。。。</h1>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: '2rem', justifyContent: 'center'}}>
            {listOfTeas.map((tea) => (
                <TeaCard color={tea.color} type={tea.type} key={tea.name} setTeaHandler={setTeaHandler} />
            ))}
            </div>
        </div>
    )
}

export default Homepage