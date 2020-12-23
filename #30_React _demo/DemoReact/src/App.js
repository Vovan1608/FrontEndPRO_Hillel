import React from "react";
import { TodoList } from "./components/todo-list";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <TodoList title="My Todo List" />
    </div>
  );
}
