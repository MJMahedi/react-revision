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

const getColor = (count) => {
    if (count > 0) {
        return "text-green-500"
    } else if (count < 0) {
        return "text-red";
    } else {
        return "text-gray-500";
    }

}
function Counter_Mine() {
    const [count, increment, decrement] = useCounter();
    return (
        <>
            <div className='p-6 bg-gray-200 text-center'>
                <h1 className="text-2xl font-bold mt-2">Closure Counter Components</h1>             
                <p className="text-4xl">
                    New Count Color is{' '}
                    <span className={`${getColor(count)}`}>{count}</span>
                </p>

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
