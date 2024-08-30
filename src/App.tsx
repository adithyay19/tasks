import { useState } from "react";
import InputSection from "./InputSection";
import TaskSection from "./TaskSection";
import { Grid } from "@mui/material";

export interface task {
  id: number;
  title: string;
  description: string;
  status: string;
}

export default function App() {
  const initialTask: task[] = [
    { id: 0, title: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et lacus vitae odio facilisis consectetur congue ut orci. Maecenas finibus.", status: "in-progress" },
    { id: 1, title: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et lacus vitae odio facilisis consectetur congue ut orci. Maecenas finibus.", status: "complete" },
    { id: 2, title: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et lacus vitae odio facilisis consectetur congue ut orci. Maecenas finibus.", status: "incomplete" },
    { id: 3, title: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et lacus vitae odio facilisis consectetur congue ut orci. Maecenas finibus.", status: "in-progress" },
    
  ];

  const [tasks, setTasks] = useState<task[]>(initialTask);

  return (
    <div className="app">

    <Grid container sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
      
    }}>
      <Grid item xs={12}>
        <InputSection tasks={tasks} setTasks={setTasks} />
      </Grid>
      <Grid item xs={12}>
        <TaskSection tasks={tasks} setTasks={setTasks} />
      </Grid>
    </Grid>
      </div>
  );
}
