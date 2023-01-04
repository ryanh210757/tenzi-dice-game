import React from "react"
import Die from "./Die"

export default function App() {
    
    //sets dice to an array of 10 random numbers
    const [dice, setDice] = React.useState(getRandomDice())

    

    function getRandomDice(){
        const newArray = []
        for(let i = 0; i < 10; i++){
            newArray.push(Math.floor(Math.random() * 6 ) + 1)
        }
        return newArray
    }

    function rollButton(){{
        setDice(getRandomDice())
    }}

    //array of die elements with the value prop 
    //set to the same number as index of dice array
    const diceElements = dice.map(item => <Die value={item}/>)
    return (
        <main>
            <div className="grid">
                {diceElements}
                <button onClick={rollButton}>Roll</button>
            </div>
        </main>
    )
}