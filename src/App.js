import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

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

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
