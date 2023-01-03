import React from "react"
import Die from "./Die"

export default function App() {
    const value = Math.floor(Math.random() * 6 ) + 1
    return (
        <main>
            <div className="grid">
                <Die value={value}/>
                <Die value={value}/>
                <Die value={value}/>
                <Die value={value}/>
                <Die value={value}/>
                <Die value={value}/>
                <Die value={value}/>
                <Die value={value}/>
                <Die value={value}/>
                <Die value={value}/>
            </div>
        </main>
    )
}