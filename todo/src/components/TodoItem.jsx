import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../store/actions/todoAction';
import EditTodoModal from './EditTodoModal';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <>
      <div className="flex items-center justify-between bg-white shadow-sm rounded-md p-4 mb-4 transition duration-300 ease-in-out hover:shadow-lg">
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggle}
            className="mr-4 h-5 w-5 text-blue-500 focus:ring-blue-400"
          />
          <span className={todo.completed ? 'line-through text-gray-500' : 'text-black'}>
            {todo.title}
          </span>
        </div>
        <div className="flex space-x-2">
          <button onClick={handleEdit} className="px-3 py-1 bg-yellow-500 text-white rounded-md shadow-sm hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 transition duration-300 ease-in-out">
            Edit
          </button>
          <button onClick={handleDelete} className="px-3 py-1 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-300 ease-in-out">
            Delete
          </button>
        </div>
      </div>
      <EditTodoModal isOpen={isEditing} onRequestClose={() => setIsEditing(false)} todo={todo} />
    </>
  );
};

export default TodoItem;
