import Todo from './Todo';

/**
 * A list of todos
 * @param {{
 *  todos: [{
 *    id: number,
 *    content: string
 *  }]
 * }} props
 */
const TodoList = ({ todos }) => {
  return (
    <main aria-label='Todo list'>
      {todos.map(todo => <Todo key={todo.id} content={todo.content} />)}
    </main>
  );
};

export default TodoList;