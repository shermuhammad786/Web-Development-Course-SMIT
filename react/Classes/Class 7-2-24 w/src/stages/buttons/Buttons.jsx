import React from 'react'
export default function Buttons({ setLevel, level, dark }) {
    const style = {
        margin: "10px",
        width: "100px",
        height: "40px",
        fontSize: "20px",
        borderRadius: "10px",
        fontWeight: "bold",
        backgroundColor: "unset",
        color: dark === "white" ? "black" : "white"
    }
    const previous = () => {
        if (level === 1) {
            setLevel(3)
        } else {
            setLevel((level) => level - 1)
            setLevel((level) => level - 1)
        }
    }
    const next = () => {
        if (level === 3) {
            setLevel(1)
        } else {
            setLevel((level) => level + 1)
            setLevel((level) => level + 1)
        }
    }
    return (
        <div>
            <button style={style} onClick={previous}>Previous</button>
            <button style={style} onClick={next}>Next</button>
        </div>
    )
}
