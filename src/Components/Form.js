import React from 'react';
import { useState } from 'react';



const Form = (props) => {
    const [color, setColor] = useState('red');
    const [width, setwidth] = useState('50px');
    const [height, setHeight] =useState('50px');
    const {box, setBox} = props;
    function submitHandler(e) {
        e.preventDefault();
        console.log({
            color
        })
        const newBox ={
            width: width+'px',
            height: height+'px',
            backgroundColor: color,
            margin: '5px'
        }
        setBox([...box, newBox])
        console.log(box);
        e.target.reset();
        setColor('');
        setwidth('50');
        setHeight('50')
    }

    return (
        <div >
            <form onSubmit={submitHandler}>
                <label>Color</label>
                <input
                type={'text'}
                onChange={(e) => setColor(e.target.value)}
                />
                <label>Set the width</label>
                <input type={'text'}
                onChange={(e) => setwidth(e.target.value)}
                />
                <label>Set the height</label>
                <input
                type={'text'}
                onChange={(e) => setHeight(e.target.value)}
                />
                <button type='submit' value={'SUBMIT'}>Add</button>
            </form>
        </div>
    )
}

export default Form