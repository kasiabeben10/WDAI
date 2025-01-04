import { useState, useEffect } from 'react';
import {Button} from 'antd';

const Counter: React.FC = () => {
    const [counter, setCounter] = useState(Number(localStorage.getItem('counter')) || 0);


    useEffect(() => {
        localStorage.setItem('counter', counter.toString());
    }, [counter]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
            <p style={{fontSize: '24px'}}>Counter: {counter}</p>
            <Button onClick={() => setCounter(counter + 1)}>Add</Button>
        </div>
    );
}

export default Counter;