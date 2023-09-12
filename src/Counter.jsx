import { useState } from "react"
// Hook: useState
export default
    function Counter() {
    const [count, setCount] = useState(0);
    // console.log(setCount);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
        console.log(count);
    }
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div style={{ border: '2px solid purple', borderRadius: '5px', background: 'wheat' }}>
            <h2>Count:{count}</h2>
            <button style={{ background: 'purple', color: 'white', margin: '5px' }} onClick={handleAdd}>Add</button>
            <button style={{ background: 'purple', color: 'white', margin: '5px' }} onClick={handleReduce}>Reduce</button>
        </div>
    )
}