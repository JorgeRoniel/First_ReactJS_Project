import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";

function App() {
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("Task")) || []
  );

  function onTaskClicked(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTask(newTask);
  }

  function deleteTask(taskId) {
    const newTask = tasks.filter((task) => task.id != taskId);
    setTask(newTask);
  }

  function createTask(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    };

    setTask([...tasks, newTask]);
  }

  // Aqui estamos salvando as tarefas no LocalStorage usando o hook do react: useEffects.
  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=7",
        { method: "GET" }
      );
      const data = await response.json();

      setTask(data);
    }

    //fetchTasks();
  }, []);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Task Manager
        </h1>
        <AddTask createTask={createTask} />
        <Task
          tasks={tasks}
          onTaskClicked={onTaskClicked}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
