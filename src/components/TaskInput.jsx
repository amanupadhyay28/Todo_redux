import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            dispatch(addTask({ id: Date.now(), text: task, completed: false }));
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 flex flex-col space-y-4">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="border border-gray-700 rounded-lg p-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add a new task..."
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-2 transition-colors">Add Task</button>
        </form>
    );
};

export default TaskInput;
