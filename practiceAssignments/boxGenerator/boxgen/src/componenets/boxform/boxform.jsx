import React, { useState } from 'react';
const BoxForm = (props) => {
    const [color, setColor] = useState('');

    const handleChange = (e) => {
    setColor(e.target.value);
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        props.handleBoxFormSubmit(color);
        console.log(color);
        setColor('');
    }
    return (
        <form onSubmit={handleSumbit}>
            <div className='form-group mb-3'>
                <label>color:</label>
                <input type="text" value={color} onChange={handleChange} />
                <button type="submit" value="create box">Add Color!</button>
            </div>
        </form>
    )
}

export default BoxForm;