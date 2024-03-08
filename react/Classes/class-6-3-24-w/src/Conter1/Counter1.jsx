

export default function Counter1({ setCount1, count1 }) {

    const counter1hanler = () => {
        setCount1(count1 + 1)
    }
    console.log(count1, "counter 1 start")
    return (
        <div>
            <h1>count1: {count1}</h1>
            <button onClick={counter1hanler}>counter1: 0</button>
        </div>
    )
}
