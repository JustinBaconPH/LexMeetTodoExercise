import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { PencilSquare, TrashFill } from "react-bootstrap-icons";
import "./Header.css";

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    const newTaskName = prompt("Enter new task name:", todo.text);
    if (newTaskName !== null && newTaskName.trim() !== "") {
      setEditText(newTaskName);
      onEdit(todo.id, newTaskName);
    }
  };

  return (
    <Card className="mb-2 mx-auto custom-border" style={{ width: "75%" }}>
      <Card.Body className="d-flex align-items-center">
        <Form.Check
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="custom-checkbox"
          style={{ paddingRight: "20px", paddingBottom: "8px" }}
        />
        <span
          className="edit-text"
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            flex: 1,
          }}
        >
          {editText}
        </span>
        <Button className="custom-purple" onClick={handleEdit}>
          <PencilSquare />
        </Button>
        <Button
          className="custom-orange"
          style={{ marginLeft: "5px" }}
          onClick={() => onDelete(todo.id)}
        >
          <TrashFill />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TodoItem;
