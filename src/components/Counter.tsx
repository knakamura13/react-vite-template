import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, increment, decrement } from '@store/store';
import './Counter.scss';
import Button from '@components/Button.tsx';

const Counter: React.FC = () => {
    const count: number = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div className="counter">
            <p className="counter-display">Count: {count}</p>

            <div className="counter-buttons">
                <Button onClick={() => dispatch(increment())}>Increment</Button>
                <Button onClick={() => dispatch(decrement())}>Decrement</Button>
            </div>
        </div>
    );
};

export default Counter;
