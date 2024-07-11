import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/actions';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(task.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        dispatch(editTask({ ...task, text: newTask }));
        setIsEditing(false);
    };

    return (
        <li className={`p-4 border rounded-lg bg-gray-700 flex justify-between items-center transition-colors ${task.completed ? 'line-through text-gray-500' : ''}`}>
            {isEditing ? (
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="border rounded-lg p-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
                />
            ) : (
                <span onClick={() => dispatch(toggleTask(task.id))} className="flex-1 cursor-pointer">{task.text}</span>
            )}
            <div className="flex space-x-2">
                {isEditing ? (
                    <button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white rounded-lg p-2 transition-colors">Save</button>
                ) : (
                    <button onClick={handleEdit} className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg p-2 transition-colors">Edit</button>
                )}
                <button onClick={() => dispatch(deleteTask(task.id))} className="bg-red-600 hover:bg-red-700 text-white rounded-lg p-2 transition-colors">Delete</button>
            </div>
        </li>
    );
};

export default TaskItem;
