import { useState } from 'react';

export default function NamePlate({ name }) {
    const [count, setCount] = useState(0)

    return (<>
        <h1>{name}: {count}</h1>
        <button onClick={
            () => {
                setCount(count + 1)
            }
        }>Plus 1</button>
        <button onClick={() => {
            setCount(count - 1)
        }
        }>Minus 1</button>
    </>)
}