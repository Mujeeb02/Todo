import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store/store';
import Home from './components/Home';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <div className="max-w-md w-full p-4 bg-white rounded-md shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-4">Todo App</h1>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<TodoForm />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
