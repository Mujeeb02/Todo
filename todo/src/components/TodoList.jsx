import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="mt-8">
      {todos.todos.length === 0 ? (
        <p className="text-center text-gray-500">No todos available. Add some!</p>
      ) : (
        todos.todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
};

export default TodoList;
