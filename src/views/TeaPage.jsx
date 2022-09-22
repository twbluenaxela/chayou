import { useState, useEffect } from "react";

const TeaPage = ({ tea }) => {
    return (
        <div>
            <h1>{tea.type}</h1>
            I am alive
        </div>
    )
}

export default TeaPage