import React from "react"
import Die from "./Die"


export default function App() {
    
    //sets dice to an array of 10 random numbers
    const [dice, setDice] = React.useState(getRandomDice())

    

    function getRandomDice(){
        const newArray = []
        for(let i = 0; i < 10; i++){
            newArray.push({
                value: Math.floor(Math.random() * 6 ) + 1,
                isHeld: true
            })
        }
        return newArray
    }

    function rollButton(){{
        setDice(getRandomDice())
    }}

    //array of die elements with the value prop 
    //set to the same number as index of dice array
    const diceElements = dice.map(item => (
        <Die
        value={item.value}
        isHeld={item.isHeld}
        />
        ))

    return (
        <main>
            <div className="grid">
                {diceElements}
                <button className="rollDice" onClick={rollButton}>Roll</button>
            </div>
        </main>
    )
}