import { useState } from "react";
import "./App.css";
import Task from "./components/tasks/tasks";
import TaskForm from "./components/form/form";

function App() {
	const [tasks, setTasks] = useState([{ text: "Test Task", completed: false }]);

	const addTask = (text) => {
		const newTask = {
			text: text,
			completed: false,
		};
		setTasks([...tasks, newTask]);
	};

	const renderTasks = () => {
		return tasks.map((task, i) => {
			return <Task key={i} task={task} index={i} addTask={addTask} />;
		});
	};

	return (
		<div className="App">
			<TaskForm addTask={addTask} />
			<table>
				<thead>
					<tr>
						<th>Tasks</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{renderTasks()}
				</tbody>
			</table>
		</div>
	);
}

export default App;
