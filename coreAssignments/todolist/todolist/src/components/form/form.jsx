import { useState } from 'react';
function TaskForm({addTask}) {
    const [inputValue, setInputValue] = useState('');

    //! validation goes here!
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === ''){
            alert('Please enter a task!');
            return
        }
        addTask(inputValue);
        setInputValue('');
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange}/>
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm