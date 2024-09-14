"use client";

import React, { useState } from "react";
import { NewToDoForm } from "./_components/new-todo-form";

type ToDoItem = {
  title: string;
  description: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<ToDoItem[]>([
    { title: "Buy groceries", description: "Milk, eggs, bread", completed: true },
    { title: "Clean the house", description: "Kitchen, bathroom, bedroom", completed: false },
    { title: "Workout", description: "Push-ups, crunches, burpees", completed: false },
  ]);

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h1 className="text-xl font-bold">To Do List</h1>
      <ul>
        {todos.map(({ title, description, completed }, index) => (
          <ToDoItem 
            key={index}
            title={title} 
            description={description} 
            complete={completed}
            onCompleteChanged={(newValue) => {
              setTodos(prev => {
                const newTodos = [...prev];
                newTodos[index].completed = newValue;
                return newTodos;
              });
            }}
          />
        ))}
      </ul>
      <NewToDoForm onCreate={(title, description) => {
        setTodos(prev => {
          const newTodos = [...prev];
          newTodos.push({ title, description, completed: false });
          return newTodos;
        });
      }} />
    </div>
  );
}

function ToDoItem({ title, description, complete, onCompleteChanged }: {
  title: string; 
  description: string; 
  complete: boolean; 
  onCompleteChanged: (newValue: boolean) => void;
}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={complete}
        onChange={e => onCompleteChanged(e.target.checked)}
      />
      <span className="font-semibold">{title}</span> - {description}
    </li>
  );
}
