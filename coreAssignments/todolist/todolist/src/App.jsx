import { useState, useEffect } from "react";
import "./App.css";
import Task from "./components/tasks/tasks";
import TaskForm from "./components/form/form";
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [tasks, setTasks] = useState(() =>
	{
		const saveTasks = localStorage.getItem('tasks');
		if (saveTasks)
		{
			return JSON.parse(saveTasks)
		}
		else
		{
			return [];
		}
	})

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	const addTask = (text) => {
		const newTask = {
			text: text,
			completed: false,
			id: uuidv4()
		};
		setTasks([...tasks, newTask]);
	};

	const renderTasks = () => {
		return tasks.map((task, i) => {
			return <Task key={i} task={task} index={i} addTask={addTask} />;
		});
	};


	const toggleTask = (taskId) => {
		setTasks(tasks.map(task =>
			task.id === taskId ? {...task,completed: !task.completed } : task))
	}

	const toggleSelect = (taskId) => {
		setTasks(tasks.map(task =>
			task.id === taskId ? {...task,selected: !task.selected} : task
			))
	}

	const deleteSelecedTasks = () => {
	setTasks(tasks.filter(task => !task.selected ))}

	return (
		<div className="App">
			<TaskForm addTask={addTask} />
			<table>
				<thead>
					<tr>
						<th>Tasks</th>
						<th>Status</th>
						<th>Select</th>
					</tr>
				</thead>
				<tbody>
				{tasks.map((task, i) =>
				<Task key={i} task={task} index={i} addTask={addTask} toggleTask={toggleTask} toggleSelect={toggleSelect} /> )}
				</tbody>
				<tfoot>
					<tr><button onClick={deleteSelecedTasks}>Delete Selected</button></tr>
				</tfoot>
			</table>
		</div>
	);
}

export default App;
