import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
    return (
        <Provider store={store}>
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-3xl font-bold mb-6 text-center">React To-Do Application</h1>
                    <TaskInput />
                    <TaskList />
                </div>
            </div>
        </Provider>
    );
};

export default App;
