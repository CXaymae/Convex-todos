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
        <div className="flex feex-col gap-2">
      <label className="text-sm" htmlFor="title">Title</label>
      <input
      className="p-1 border rounded"
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <label className="text-sm font-semibold" htmlFor="description">Description</label>
      <input
      className="p-1 border rounded"
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button className="bg-blue-500 rounded text-white" type="submit">Create</button>
      </div>
    </form>
    )
}