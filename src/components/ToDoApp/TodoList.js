// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTask, searchTask } from './actions';
// import { TextField, Button, FormControl, RadioGroup, FormControlLabel, Radio, Typography } from '@material-ui/core';
// import './TodoList.scss';

// const TodoList = () => {
//     const [taskName, setTaskName] = useState('');
//     const [priority, setPriority] = useState('low');
//     const [searchedTask, setSearchedTask] = useState('');
//     const tasks = useSelector((state) => state.tasks);
//     const dispatch = useDispatch();

//     const handleAddTask = () => {
//         if (taskName.trim() === '') {
//             alert('Please enter a task!');
//             return;
//         }

//         dispatch(addTask({ name: taskName, priority }));
//         setTaskName('');
//     };

//     const handleSearchTask = () => {
//         if (searchedTask.trim() === '') {
//             alert('Please enter a task to search!');
//             return;
//         }

//         const foundTask = tasks.find((task) => task.name.toLowerCase() === searchedTask.toLowerCase());

//         if (foundTask) {
//             dispatch(searchTask(searchedTask));
//         } else {
//             alert('Task not found!');
//         }

//         setSearchedTask('');
//     };

//     return (
//         <div className="container">
//             <Typography variant="h3" gutterBottom className="rainbow-title">
//                 Todo List
//             </Typography>


//             <FormControl>
//                 <TextField
//                     label="Enter a task here"
//                     value={taskName}
//                     onChange={(e) => setTaskName(e.target.value)}
//                     margin="normal"
//                 />

//                 <RadioGroup row value={priority} onChange={(e) => setPriority(e.target.value)}>
//                     <FormControlLabel value="high" control={<Radio />} label="High" />
//                     <FormControlLabel value="medium" control={<Radio />} label="Medium" />
//                     <FormControlLabel value="low" control={<Radio />} label="Low" />
//                 </RadioGroup>

//                 <Button variant="contained" color="primary" onClick={handleAddTask}>
//                     Add Task
//                 </Button>
//             </FormControl>

//             <br />

//             <Typography variant="h5" gutterBottom>
//                 Task List
//             </Typography>

//             <FormControl>
//                 <TextField
//                     label="Search Task"
//                     value={searchedTask}
//                     onChange={(e) => setSearchedTask(e.target.value)}
//                     margin="normal"
//                 />

//                 <Button variant="contained" color="primary" onClick={handleSearchTask}>
//                     Search Task
//                 </Button>
//             </FormControl>

//             <ul>
//                 {tasks.length > 0 ? (
//                     tasks.map((task, index) => (
//                         <li key={index} className={task.isSearched ? 'highlighted-task' : ''}>
//                             {task.name} - {task.priority}
//                         </li>
//                     ))
//                 ) : (
//                     <li className="no-tasks">No tasks found!</li>
//                 )}
//             </ul>
//         </div>
//     );
// };

// export default TodoList;
// ---------------------------------------------------
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, searchTask, updateTask } from './actions';
import { TextField, Button, FormControl, RadioGroup, FormControlLabel, Radio, Typography } from '@material-ui/core';
import './TodoList.scss';

const TodoList = () => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('low');
  const [searchedTask, setSearchedTask] = useState('');
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim() === '') {
      alert('Please enter a task!');
      return;
    }

    dispatch(addTask({ name: taskName, priority }));
    setTaskName('');
  };

  const handleSearchTask = () => {
    if (searchedTask.trim() === '') {
      alert('Please enter a task to search!');
      return;
    }

    const foundTask = tasks.find((task) => task.name.toLowerCase() === searchedTask.toLowerCase());

    if (foundTask) {
      dispatch(searchTask(searchedTask));
    } else {
      alert('Task not found!');
    }

    setSearchedTask('');
  };

  const handleTaskClick = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    dispatch(updateTask(updatedTasks));
  };

  return (
    <div className="container">
       <Typography variant="h3" gutterBottom className="rainbow-title">
        Todo List
      </Typography>

      <FormControl>
        <TextField
          label="Enter a task here"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          margin="normal"
        />

        <RadioGroup row value={priority} onChange={(e) => setPriority(e.target.value)}>
          <FormControlLabel value="high" control={<Radio />} label="High" />
          <FormControlLabel value="medium" control={<Radio />} label="Medium" />
          <FormControlLabel value="low" control={<Radio />} label="Low" />
        </RadioGroup>

        <Button variant="contained" color="primary" onClick={handleAddTask}>
          Add Task
        </Button>
      </FormControl>

      <br />

      <Typography variant="h5" gutterBottom>
        Task List
      </Typography>

      <FormControl>
        <TextField
          label="Search Task"
          value={searchedTask}
          onChange={(e) => setSearchedTask(e.target.value)}
          margin="normal"
        />

        <Button variant="contained" color="primary" onClick={handleSearchTask}>
          Search Task
        </Button>
      </FormControl>

      <ul>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li
              key={index}
              className={`${task.isSearched ? 'highlighted-task' : ''} ${task.completed ? 'completed-task' : ''}`}
              onClick={() => handleTaskClick(index)}
            >
              {task.name} - {task.priority}
            </li>
          ))
        ) : (
          <li className="no-tasks">No tasks found!</li>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
