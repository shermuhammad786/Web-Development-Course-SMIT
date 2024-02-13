import { useState } from "react"
import Description from "./Description/Description"
import Buttons from "./buttons/Buttons"
import Number from "./numbers/number"
import { Dark } from "./darkWhiteBtns"

export default function Stages() {
    const [level, setLevel] = useState(1);

    const [dark, setDark] = useState("white")

    const [colors, setColors] = useState("black")
    return (
        <div>

            <div style={{ height: "100vh", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", backgroundColor: dark }}>
                <Dark dark={dark} setDark={setDark} colors={colors} setColors={setColors} />
                <h1><Number level={level} dark={dark} colors={colors} /></h1>
                <h1><Description level={level} dark={dark} /></h1>
                <h1><Buttons setLevel={setLevel} level={level} dark={dark} /></h1>
            </div>
        </div>
    )
}