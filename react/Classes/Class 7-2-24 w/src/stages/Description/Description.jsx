import React from 'react';

function Description({ level, dark }) {
    const descArray = [
        "learn JavaScript",
        "learn React",
        "earn money",
    ]

    return (
        <div style={{ textAlign: "center", width: "350px", height: "60px" }}>
            <p style={{ color: dark === "white" ? "black" : "white" }}>{descArray[level - 1]}</p>
        </div>
    );
}

export default Description;
