import Checkbox from '../shared/checkbox'
import '../../App.css';

const Task = ({ task, toggleTask, toggleSelect}) => {
    return (
      <tr>
        <td className={`task ${task.completed ? 'completed' : ''}`}>{task.text}</td>
        <td><Checkbox
        checked={task.completed}
        onChange={() => toggleTask(task.id)}/>
        </td>
        <td><Checkbox
        checked={task.selected}
        onChange={() => toggleSelect(task.id)}/></td>
      </tr>
    );
};

export default Task