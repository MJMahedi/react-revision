import { useState } from "react"

function useCounter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    }
    const decrement = () => {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }
    return [count, increment, decrement];
}
function Counter_Mine() {
    const [count, increment, decrement] = useCounter();
    return (
        <>
            <div className='p-6'>
                <h1 className="text-2xl font-bold mb-4">Counter Components By Mine</h1>
                <p>Count : {count}</p>
                <button
                    onClick={increment}
                    className="bg-green-500 text-white py-2 px-4 rounded mr-2"
                >
                    Increment
                </button>
                <button
                    onClick={decrement}
                    className="bg-red-500 text-white py-2 px-4 rounded"
                >
                    Decrement
                </button>
            </div>
        </>
    )
}

export default Counter_Mine
