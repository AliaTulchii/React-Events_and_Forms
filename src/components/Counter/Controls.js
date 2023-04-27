import React from 'react';
import css from '../Counter/Counter.module.css';

const Controls = ({onIncrement, onDecrement}) => {
    return (
        <div className={css.Counter__controls}>
        <button
            type="button"
            className={css.Counter__buttn}
            onClick={onIncrement}>
            Increase by 1
        </button>

        <button
            type="button"
            className={css.Counter__buttn}
            onClick={onDecrement}>
            Decrease by 1
        </button>
    </div>
    )
}

export default Controls;


