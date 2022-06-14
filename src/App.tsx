import TodoList from './components/todoList/TodoList';
import './app.scss';
import TodoForm from './components/todoForm/TodoForm';
import TodoFooter from './components/todoFooter/TodoFooter';

function App() {
  return (
    <div className="App">
      <h1>todos</h1>
      <TodoForm/>
      <TodoList />
      <TodoFooter />
    </div>
  );
}

export default App;
