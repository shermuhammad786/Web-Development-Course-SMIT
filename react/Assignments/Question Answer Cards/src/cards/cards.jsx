import React, { useState } from 'react'

export default function Cards() {
    const questionAnswer = [
        {
            question: 'What language is React based on?',
            answer: "React is based on JavaScript.",
        },
        {
            question: 'What are the building blocks of React apps?',
            answer: "Components are the building blocks of React apps.",
        },
        {
            question: 'What is name of syntax we use to describe a UI in React apps?',
            answer: "JSX (JavaScript XML) is the syntax used to describe UI in React apps.",
        },
        {
            question: 'How to pass data from parent to child component?',
            answer: "Use props for data passing from parent to child in React.",
        },
        {
            question: 'How to give components memory?',
            answer: "Use useState Hook to give components memory.",
        },
        {
            question: 'What do we call and input element that is completely synchronised with state?',
            answer: "A controlled input element.",
        },

    ];
    const [ans, setAns] = useState("")
    const displayAnswer = (answer, question) => {
        setAns(answer)
    }
    return (
        <div className="App">
            <h1 style={{ textAlign: "center", margin: "30px" }}>REACT CARD ASSIGNMENT</h1>
            <div className="cards">
                {questionAnswer.map(e => (
                    <div className="card">
                        <p
                            style={{ backgroundColor: ans === e.answer ? "red" : "white", display: 'flex', alignItems: "center", justifyContent: "center", textAlign: "center" }}
                            onClick={() => displayAnswer(e.answer, e.question)}>
                            {ans === e.answer ? ans : e.question}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
