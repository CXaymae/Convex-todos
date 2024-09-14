import { useState } from "react";

type ToDoFormProps = {
    onCreate: (title: string, description: string) => void;
}

export function NewToDoForm({onCreate}: ToDoFormProps) {
    
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    onCreate(title, description)
    setTitle("");
    setDescription("");
  };

    return (       
      <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
    )
}