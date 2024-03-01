// App.js
import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./App.css";
import {
  InputGroup,
  FormControl,
  Button,
  Card,
  CardBody,
} from "react-bootstrap";
import { PlusCircleFill } from "react-bootstrap-icons";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }
  };

  const editTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const deleteAllTodos = () => {
    if (window.confirm("Are you sure you want to delete all tasks?")) {
      setTodos([]);
    }
  };

  const toggleAllCompleted = () => {
    const allCompleted = todos.every((todo) => todo.completed);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        completed: !allCompleted,
      }))
    );
  };

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className="main-todo mt-4">
        <div className="todo-input">
          <Card className="mb-4 custom-border">
            <CardBody>
              <InputGroup>
                <FormControl
                  placeholder="New Task"
                  aria-label="New Task"
                  aria-describedby="basic-addon2"
                  value={inputValue}
                  style={{ width: "400px" }}
                  maxLength={60}
                  className="custom-border"
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Button
                  className="custom-purple"
                  id="button-addon2"
                  onClick={addTodo}
                >
                  <PlusCircleFill />
                </Button>
              </InputGroup>
            </CardBody>
          </Card>
        </div>
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
        {todos.length > 0 && (
          <div className="todo-controls mt-4">
            <Button className="custom-purple" onClick={toggleAllCompleted}>
              {todos.every((todo) => todo.completed)
                ? "Mark All Undone"
                : "Mark All Done"}
            </Button>
            <Button className="custom-orange ms-2" onClick={deleteAllTodos}>
              Delete All
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
