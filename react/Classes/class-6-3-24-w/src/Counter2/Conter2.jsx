

export default function Conter2({ setCount2, count2, foo }) {



    const counter2hanler = () => {
        setCount2(count2 + 1)
        console.log(foo)

    }
    console.log(count2, "counter 2 start")
    return (
        <div>
            <h1>count2: {count2}</h1>
            <button onClick={counter2hanler}>counter2:</button>
        </div>
    )
}
