import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(100)

    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}
