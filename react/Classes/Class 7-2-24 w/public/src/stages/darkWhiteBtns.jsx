import React from 'react'

export function Dark({ dark, setDark }) {
    const darkHandler = () => {
        if (dark === "white") {
            setDark("black")
        } else {
            setDark("white")
        }
    }
    return <button style={style} className='btns' onClick={darkHandler}>{dark === "black" ? "WHITE" : "DARK"}</button>
}
const style = {
    fontWeight: "bold",
    fontSize: "20px",
    padding: "7px 20px",
    position: "absolute",
    top: "30%",
    left: "20%"
}
