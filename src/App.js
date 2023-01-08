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
                isHeld: false,
                id: nanoid()
            })
        }
        return newArray
    }

    function rollButton(){{
        setDice(prev => {
            return prev.map(item => {
                return item.isHeld ? item : {
                    value: Math.floor(Math.random() * 6 ) + 1,
                    isHeld: false,
                    id: nanoid()
                }
            })
        })
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
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="grid">
                {diceElements}
                <button className="rollDice" onClick={rollButton}>Roll</button>
            </div>
        </main>
    )
}