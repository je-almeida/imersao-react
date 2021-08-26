import { useState } from 'react'
import Numero from '../../../components/Numero'
import Title from '../../../components/Title'
import styles from './styles.module.css' 

export default function Index(params) {

    // const [numbers, getNumbers] = useState(0)
    const [input, setInput] = useState(0)
    const [numbers, setGame] = useState()
    function getGame() {
        if(input > 0) {
            
            let numbers = []
            for(let i = 0; i < input; i++) {
                numbers.push(getRandomInt(1, 99))
            }

            numbers = numbers.sort()
            
            numbers = numbers.map((el, i) => (<Numero key={"nr_"+i} number={el}/>))
            console.log(numbers)
            setGame(numbers)
        }
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return (
        <>
            <div className={styles.row}>
                <Title>MegaSena</Title>
                <div className={styles.rowGame}>
                    {numbers}
                </div>
                <div style={{ 
                    marginTop: "50px",
                    display: "flex",
                    flexDirection: "column",
                 }}>
                    <label htmlFor="qtd" style={{ 
                        fontSize: "20px",
                        fontWeight: "bold"
                     }}>Qtd Nrs</label>
                    <div className={styles.rowGame}>
                        <input type="number" id="qtd" value={input} style={{
                            textAlign: "center",
                            fontSize: "20px",
                            fontWeight: "bold",
                        }} onChange={e => setInput(() => {
                            let value = e.target.value
                            if(value > 8) {
                                value = 8
                            } else if(value < 1) {
                                value = 1
                            }
                            return value
                        })}/>
                    </div>
                    <button style={{ 
                        backgroundColor: "#000",
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "bold",
                        padding: "10px",
                        borderRadius: "15px",
                        marginTop: "15px"
                     }} onClick={getGame}>Gerar Jogo</button>
                </div>
            </div>
        </>            
    )
}
