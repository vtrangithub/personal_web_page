import { Typography, Divider } from 'antd';
// import '../src/components/ToDoApp.css';
import TodoList from '../src/components/TodoList';
import Filters from '../src/components/Filters';

const { Title } = Typography;

function ToDoApp() {
  return (
    <div
      style={{
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default ToDoApp;
