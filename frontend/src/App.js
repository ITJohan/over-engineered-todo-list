import NavBar from './components/NavBar';
import Todo from './components/Todo'; // REMOVE

const App = () => {
  return (
    <div>
      <NavBar />
      <Todo
        text='Buy groceries'
      />
      <Todo
        text='Do laundry'
      />
    </div>
  );
}

export default App;
