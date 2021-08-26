import { useState } from "react"

export default function Mouse() {

    const [x, changeX] = useState(0)
    const [y, changeY] = useState(0)

    const style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        color: "yellow",
        height: "100vh",
    }

    function withMove(ev) {
        changeX(ev.clientX)
        changeY(ev.clientY)
        console.log('alterado')
    }

    return (
        <diY style={style} onMouseMove={withMove}>
            <span>X: {x}</span>
            <span>Y: {y}</span>
        </diY>
    )
}
