import { useState } from 'react'


function useCounter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    return [count, increment];
}


function CounterComponent() {
    const [count, increment] = useCounter();

    return (
        <div className='p-6'>
            <h1 className="text-2xl font-bold mb-4">Counter Components</h1>
            <p>Count : {count}</p>
            <button onClick={increment}>Increment</button>

        </div>
    )
}

export default CounterComponent
