import './App.css';
import TodoHead from './components/head/TodoHead';
import TodoTemplate from './components/template/TodoTemplate';

function App() {
  return (
    <TodoTemplate>
      <TodoHead></TodoHead>
    </TodoTemplate>
  );
}

export default App;
