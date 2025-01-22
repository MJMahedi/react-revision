import React, { useState } from 'react'

const DigitalClock = () => {
    const time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);
const updateTime = () =>{
    const time = new Date().toLocaleTimeString();
    setCtime(time);
}
setInterval(updateTime);
    return (
        <div className='text-center font-bold text-2xl pt-2'>
            <h1 className=''>Digital Clock</h1>
            <h2 className=''>{ctime}</h2>
        </div>
    )
}

export default DigitalClock
