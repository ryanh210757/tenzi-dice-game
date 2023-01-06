import React from "react"
import Die from "./Die"
import { nanoid } from "nanoid"


export default function App() {
    
    //sets dice to an array of 10 random numbers
    const [dice, setDice] = React.useState(getRandomDice())

    

    function getRandomDice(){
        const newArray = []
        for(let i = 0; i < 10; i++){
            newArray.push({
                value: Math.floor(Math.random() * 6 ) + 1,
                isHeld: true,
                id: nanoid()
            })
        }
        return newArray
    }

    function rollButton(){{
        setDice(getRandomDice())
    }}
    
    //toggles isHeld property
    function holdDice(id){
        setDice(prev => {
            return prev.map(item => {
                return item.id === id ? {
                    ...item,
                    isHeld: !item.isHeld
                } : item
            })
        })
    }

    //array of die elements with the value prop 
    //set to the same number as index of dice array
    const diceElements = dice.map(item => (
        <Die
        key={item.id}
        value={item.value}
        isHeld={item.isHeld}
        holdDice={() => holdDice(item.id)}
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