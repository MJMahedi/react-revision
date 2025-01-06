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
const thresholds = [
    [20, "text-gold-800"],
    [19, "text-gold-800"],
    [18, "text-teal-800"],
    [17, "text-gold-800"],
    [16, "text-gold-200"],
    [15, "text-gold-100"],
    [14, "text-gold-500"],
    [13, "text-purple-500"],
    [12, "text-purple-200"],
    [11, "text-purple-500"],
    [10, "text-teal-500"],
    [9, "text-teal-500"],
    [8, "text-teal-900"],
    [7, "text-teal-500"],
    [6, "text-teal-100"],
    [5, "text-orange-900"],
    [4, "text-blue-500"],
    [3, "text-orange-100"],
    [2, "text-green-800"],
    [1, "text-teal-200"],
    [0, "text-green-500"],
];


const fallbackColor = "text-red-500";

const getColor = (count) => {
    for (const [limit, color] of thresholds) {
        if (count > limit) {
            return color;
        }

    }
    return fallbackColor;

}
function Counter_Mine() {
    const [count, increment, decrement] = useCounter();
    return (
        <>
            <div className='p-6 bg-gray-200 text-center'>
                <h1 className="text-2xl font-bold mt-2">Closure Counter Components</h1>
                <p className="text-4xl font-bold mt-2 ">
                    New Count Color is{' '}
                    <span className={`text-5xl ${getColor(count)}`} style={{
                        transition: "color 0.5s ease, transform 0.3s ease",
                        transform: "scale(1.2)",
                    }}>{count}</span>
                </p>

                <button
                    onClick={increment}
                    className="bg-green-500 text-white py-2 px-4 rounded mr-2 mt-2"
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
