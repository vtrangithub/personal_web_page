

// import { Typography, Divider } from 'antd';
// // import '../components/ToDoApp/components/ToDoApp.css';
// import TodoList from '../components/ToDoApp/components/TodoList';
// import Filters from '../components/ToDoApp/components/Filters';

// const { Title } = Typography;
import ToDoApp from "../components/ToDoApp/todo-app-redux-main/src/ToDoApp"

export default function MyToDoList() {
    return (
        <>
            {/* <div
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
            </div> */}
            
                <ToDoApp />
        </>
    )
}