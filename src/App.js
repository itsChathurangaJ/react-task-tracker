import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import { AddTask } from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'task 1',
      day: '1',
      reminder: true,
    },
    {
      id: 2,
      text: 'task 2',
      day: '2',
      reminder: false,
    },
    {
      id: 3,
      text: 'task 3',
      day: '3',
      reminder: true,
    },
  ]);

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
};

export default App;
