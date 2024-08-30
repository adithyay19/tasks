import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Grid,
  // IconButton,
  // Typography,
} from "@mui/material";
import { task } from "./App";

import "@fontsource/poppins/600.css";
import "@fontsource/lato";

const statuses = ["incomplete", "in-progress", "complete", "blocked"];

export default function TaskSection({
  tasks,
  setTasks,
}: {
  tasks: task[];
  setTasks: React.Dispatch<React.SetStateAction<task[]>>;
}) {
  function handleDragStart(event: React.DragEvent<HTMLDivElement>, id: number) {
    event.dataTransfer.setData("text/plain", id.toString());
  }

  function handleDrop(
    event: React.DragEvent<HTMLDivElement>,
    newStatus: string
  ) {
    event.preventDefault();
    const id = Number(event.dataTransfer.getData("text/plain"));
    console.log(id, newStatus);
    const updatedTasks = tasks.map((task: task) => {
      if (task.id === id) task.status = newStatus;
      return task;
    });
    setTasks([...updatedTasks]);
  }

  function handleSwitch(id: number, newStatus: string) {
    const updatedTasks = tasks.map((task: task) => {
      if (task.id === id) task.status = newStatus;
      return task;
    });
    setTasks([...updatedTasks]);
  }

  function deleteTask(id: number) {
    const updatedTasks = tasks.filter((task) => task.id != id);
    setTasks([...updatedTasks]);
  }

  return (
    <Grid
      container
      // rowGap={2}
      // columnGap={2}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        background: "#b588f6",
        borderRadius: "2rem",
      }}
    >
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textTransform: "uppercase",
          letterSpacing: "0.2rem",
          background: "#e7dcf3",
          borderRadius: "1rem",
        }}
      >
        <h2>Incomplete</h2>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textTransform: "uppercase",
          letterSpacing: "0.2rem",
          background: "#e7dcf3",
          borderRadius: "1rem",
        }}
      >
        <h2>In-progress</h2>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textTransform: "uppercase",
          letterSpacing: "0.2rem",
          background: "#e7dcf3",
          borderRadius: "1rem",
        }}
      >
        <h2>Complete</h2>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textTransform: "uppercase",
          letterSpacing: "0.2rem",
          background: "#e7dcf3",
          borderRadius: "1rem",
        }}
      >
        <h2>Blocked</h2>
      </Grid>
      <Grid
        item
        xs={3}
        className="task-box"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, "incomplete")}
        sx={{
          height: 300,
          overflowY: "auto",
          background: "#e7dcf3",
          padding: "0.5rem",
          borderRadius: "1rem",
        }}
      >
        {tasks
          .filter((task) => task.status === "incomplete")
          .map((task) => (
            <div
              key={task.id}
              className="task-item"
              draggable              
              onDragStart={(e) => handleDragStart(e, task.id)}
              onDragEnd={(e) => e.dataTransfer.clearData()}
            >
              <Accordion
                slotProps={{ transition: { unmountOnExit: true } }}
                sx={{
                  background: "#ff6464",
                }}
              >
                <AccordionSummary
                  sx={{ fontFamily: "poppins", fontWeight: 600 }}
                >
                  <span>
                    <button
                      className="delete-btn"
                      onClick={() => deleteTask(task.id)}
                    >
                      X
                    </button>
                    {task.title}
                  </span>
                </AccordionSummary>
                <Divider />
                <AccordionDetails sx={{ fontFamily: "lato" }}>
                  {task.description}
                </AccordionDetails>
                <AccordionActions>
                  {statuses
                    .filter((item) => item != task.status)
                    .map((item) => (
                      <Button
                        key={item}
                        variant="contained"
                        onClick={() => handleSwitch(task.id, item)}
                        sx={{
                          background: "whitesmoke",
                          color: "#3d3a53",
                          "&:hover": {
                            color: "whitesmoke",
                            background: "#3d3a53",
                            borderColor: "#3d3a53",
                          },
                        }}
                      >
                        {item}
                      </Button>
                    ))}
                </AccordionActions>
              </Accordion>
            </div>
          ))}
      </Grid>
      <Grid
        item
        xs={3}
        className="task-box"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, "in-progress")}
        sx={{
          height: 300,
          overflowY: "auto",
          background: "#e7dcf3",
          padding: "0.5rem",
          borderRadius: "1rem",
        }}
      >
        {tasks
          .filter((task) => task.status === "in-progress")
          .map((task) => (
            <div
              key={task.id}
              className="task-item"
              draggable
              onDragStart={(e) => handleDragStart(e, task.id)}
              onDragEnd={(e) => e.dataTransfer.clearData()}
            >
              <Accordion
                slotProps={{ transition: { unmountOnExit: true } }}
                sx={{
                  background: "#fba669",
                }}
              >
                <AccordionSummary
                  sx={{ fontFamily: "poppins", fontWeight: 600 }}
                >
                  <span>
                    <button
                      className="delete-btn"
                      onClick={() => deleteTask(task.id)}
                    >
                      X
                    </button>
                    {task.title}
                  </span>
                </AccordionSummary>
                <Divider />
                <AccordionDetails sx={{ fontFamily: "lato" }}>
                  {task.description}
                </AccordionDetails>
                <AccordionActions>
                  {statuses
                    .filter((item) => item != task.status)
                    .map((item) => (
                      <Button
                        key={item}
                        variant="contained"
                        onClick={() => handleSwitch(task.id, item)}
                        sx={{
                          background: "whitesmoke",
                          color: "#3d3a53",
                          "&:hover": {
                            color: "whitesmoke",
                            background: "#3d3a53",
                            borderColor: "#3d3a53",
                          },
                        }}
                      >
                        {item}
                      </Button>
                    ))}
                </AccordionActions>
              </Accordion>
            </div>
          ))}
      </Grid>
      <Grid
        item
        xs={3}
        className="task-box"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, "complete")}
        sx={{
          height: 300,
          overflowY: "auto",
          background: "#e7dcf3",
          padding: "0.5rem",
          borderRadius: "1rem",
        }}
      >
        {tasks
          .filter((task) => task.status === "complete")
          .map((task) => (
            <div
              key={task.id}
              className="task-item"
              draggable
              onDragStart={(e) => handleDragStart(e, task.id)}
              onDragEnd={(e) => e.dataTransfer.clearData()}
            >
              <Accordion
                slotProps={{ transition: { unmountOnExit: true } }}
                sx={{
                  background: "#91c483",
                }}
              >
                <AccordionSummary
                  sx={{ fontFamily: "poppins", fontWeight: 600 }}
                >
                  <span>
                    <button
                      className="delete-btn"
                      onClick={() => deleteTask(task.id)}
                    >
                      X
                    </button>
                    {task.title}
                  </span>
                </AccordionSummary>
                <Divider />
                <AccordionDetails sx={{ fontFamily: "lato" }}>
                  {task.description}
                </AccordionDetails>
                <AccordionActions>
                  {statuses
                    .filter((item) => item != task.status)
                    .map((item) => (
                      <Button
                        key={item}
                        variant="contained"
                        onClick={() => handleSwitch(task.id, item)}
                        sx={{
                          background: "whitesmoke",
                          color: "#3d3a53",
                          "&:hover": {
                            color: "whitesmoke",
                            background: "#3d3a53",
                            borderColor: "#3d3a53",
                          },
                        }}
                      >
                        {item}
                      </Button>
                    ))}
                </AccordionActions>
              </Accordion>
            </div>
          ))}
      </Grid>
      <Grid
        item
        xs={3}
        className="task-box"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, "blocked")}
        sx={{
          height: 300,
          overflowY: "auto",
          background: "#e7dcf3",
          padding: "0.5rem",
          borderRadius: "1rem",
        }}
      >
        {tasks
          .filter((task) => task.status === "blocked")
          .map((task) => (
            <div
              key={task.id}
              className="task-item"
              draggable
              onDragStart={(e) => handleDragStart(e, task.id)}
              onDragEnd={(e) => e.dataTransfer.clearData()}
            >
              <Accordion
                slotProps={{ transition: { unmountOnExit: true } }}
                sx={{
                  background: "#91c483",
                }}
              >
                <AccordionSummary
                  sx={{ fontFamily: "poppins", fontWeight: 600 }}
                >
                  <span>
                    <button
                      className="delete-btn"
                      onClick={() => deleteTask(task.id)}
                    >
                      X
                    </button>
                    {task.title}
                  </span>
                </AccordionSummary>
                <Divider />
                <AccordionDetails sx={{ fontFamily: "lato" }}>
                  {task.description}
                </AccordionDetails>
                <AccordionActions>
                  {statuses
                    .filter((item) => item != task.status)
                    .map((item) => (
                      <Button
                        key={item}
                        variant="contained"
                        onClick={() => handleSwitch(task.id, item)}
                        sx={{
                          background: "whitesmoke",
                          color: "#3d3a53",
                          "&:hover": {
                            color: "whitesmoke",
                            background: "#3d3a53",
                            borderColor: "#3d3a53",
                          },
                        }}
                      >
                        {item}
                      </Button>
                    ))}
                </AccordionActions>
              </Accordion>
            </div>
          ))}
      </Grid>
    </Grid>
  );
}
