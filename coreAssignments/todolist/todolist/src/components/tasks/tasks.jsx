const Task = ({ task, index }) => {
    return (
      <tr>
        <td>{task.text}</td>
        <td>{task.completed ? 'Completed' : 'Not Completed'}</td>
      </tr>
    );
};

export default Task