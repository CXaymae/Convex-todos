"use client";

import {useState} from "react";

type ToDoItem = {
  title: string;
  description: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<ToDoItem[]>([]);
  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h1 className="text-xl font-bold">To Do List</h1>
      <ul>
      {todos.map(({ title, description, completed}, index) => ( 
        <li key={index}>
         <input 
         type="checkbox" 
         checked={completed} 
         onChange={e => setTodos(prev => {
          const newTodos = [...prev];
          prev[index].completed = e.target.checked;
          return prev;
         })} 
        />
         <span className="font-semibold">{title}</span>
         {description}
        </li>
        
      ))}
      </ul>

      
    </div>
    
  );
}
