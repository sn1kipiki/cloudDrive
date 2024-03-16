import React from 'react';
import s from './styles.module.scss'

const Input = (props) => {
    return (
        <input onChange={(event)=> props.setValue(event.target.value)}
               value={props.value}
               type={props.type}
               placeholder={props.placeholder}
                className={s.input}
        />
    );
};

export default Input;