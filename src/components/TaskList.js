import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './TaskList.css';

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <Card className="task-card" key={task.id}>
                    <Card.Body className="task-content">
                        {/* Task Details */}
                        <div className="task-details">
                            <Card.Title className="task-title">
                                Task: <span className="task-result">{task.name}</span>
                            </Card.Title>
                        </div>

                        {/* Task Metadata */}
                        <div className="task-meta">
                            <span className={`priority-label priority-${task.priority.toLowerCase()}`}>
                                {task.priority}
                            </span>
                            <span className="status-label">{task.status}</span>
                        </div>

                        {/* Action Buttons */}
                        <div className="task-actions">
                            <Button
                                variant="outline-primary"
                                className="icon-btn edit-btn"
                                onClick={() => showEditForm(task)}
                            >
                                <FaEdit />
                            </Button>
                            <Button
                                variant="outline-danger"
                                className="icon-btn delete-btn"
                                onClick={() => deleteTask(task.id)}
                            >
                                <FaTrashAlt />
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default TaskList;
