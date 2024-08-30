import { useState } from "react";
import { task } from "./App";
import { Button, MenuItem, Select, TextField } from "@mui/material";

export default function InputSection({
  tasks,
  setTasks,
}: {
  tasks: task[];
  setTasks: React.Dispatch<React.SetStateAction<task[]>>;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isBlocked, setIsBlocked] = useState("not-blocked");
  const [open, setOpen] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title || !description) return;

    const newTask: task = {
      id: Date.now(),
      title: title,
      description: description,
      status: isBlocked === "blocked"? "blocked":"incomplete",
    };
    console.log(newTask);
    setTasks([...tasks, newTask]);
    setOpen(!open);

    setTitle("");
    setDescription("");
    setIsBlocked("not-blocked");
  }
  return (
    <div className="input-section">
      {open && (
        <form className="input-form" onSubmit={handleSubmit}>
          <TextField
            required
            id="outlined-size-small-title"
            type="text"
            label="Title"
            size="small"
            color="secondary"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              marginX: "0.5rem",
            }}
          />
          <TextField
          required
            id="outlined-size-small-description"
            type="text"
            label="Description"
            size="small"
            color="secondary"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{
              marginX: "0.5rem",
              color: "#3d3a36",
            }}
          />
          <Select
          value={isBlocked}
          onChange={(e) => setIsBlocked(e.target.value)}
          color="secondary"
          >
            <MenuItem value={"not-blocked"}>Not Blocked</MenuItem>
            <MenuItem value={"blocked"}>Blocked</MenuItem>
          </Select>
          <Button
          type="submit"
            variant="contained"
            color="secondary"
            sx={{ marginX: "1rem", color: "whitesmoke", background: "#906ad8", fontFamily: "cursive", '&:hover':{background: "#d076ff"}}}
          >
            Add Task
          </Button>
        </form>
      )}
      <Button
      
        variant="contained"
        onClick={() => setOpen(!open)}
        sx={{ marginX: "1rem", color: "whitesmoke", background: "#906ad8", fontFamily: "cursive", '&:hover':{background: "#d076ff"}}}
      >
        {open ? "Close" : "Add Task"}
      </Button>
    </div>
  );
}
