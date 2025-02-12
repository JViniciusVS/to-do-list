import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if(newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("")
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  function moveTaskUp(index) {
    if (index > 0) {
      setTasks(prevTasks => {
        const updatedTasks = [...prevTasks];
        [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index]];
        return updatedTasks;
      });
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      setTasks(prevTasks => {
        const updatedTasks = [...prevTasks];
        [updatedTasks[index], updatedTasks[index + 1]] =
        [updatedTasks[index + 1], updatedTasks[index]];
        return updatedTasks;
      });
    }
  }

  return (
    <div className="to-do-list">
      <h1>To do list</h1>

      <div className="input-field">
        <input
          onChange={handleInputChange}
          value={newTask}
          type="text"
          placeholder="Digita sua tarefa aqui..."
        />
        <button className="add-button" onClick={addTask}>
          Adicionar
        </button>
      </div>

      <ol className="tasks-list">
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <span className="text">{task}</span>
              <button className="delete-button" onClick={() => deleteTask(index)}>
                excluir
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                ☝️
              </button>
              <button className="move-button" onClick={() => moveTaskDown(index)}>
                👇
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export { ToDoList };
