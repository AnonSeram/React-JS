import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => {  
    setShowForm(false);
    setTaskToEdit(null);
  };

  const addTask = (task) => { 
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const showEditForm = (task) => {
    setTaskToEdit(task);
    handleShowForm();
  };

 
return (
  <>
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand>Task Manager</Navbar.Brand>
      </Container>
    </Navbar>
    <Container className="my-5">
      <h1 className="mb-4">Task List</h1>
      <Button variant="primary" onClick={handleShowForm}>+ Add Task</Button>
      <div className="mt-4">
        <TaskList tasks={tasks} deleteTask={deleteTask} showEditForm={showEditForm} />
        <TaskForm
          show={showForm}
          handleClose={handleCloseForm}
          addTask={addTask}
          editTask={editTask}
          taskToEdit={taskToEdit}
        />
      </div>
    </Container>
  </>
);
}

export default App;
