import NavBar from './components/NavBar';
import TodoList from './components/TodoList';

const todos = [
  {
    id: 1,
    content: 'Buy groceries'
  },
  {
    id: 2,
    content: 'Do laundry'
  },
  {
    id: 3,
    content: 'Go shopping'
  }
];

const App = () => {
  return (
    <div>
      <NavBar />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
