import React, { useEffect, useState } from "react";
import Task from "./components/Task";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [taskDesc, setTaskDesc] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInput = (text) => {
    setTaskDesc(text);
  };

  const handleSubmit = () => {
    if (taskDesc == "") {
      setIsEmpty(true);
      return;
    }
    setIsEmpty(false);
    setTasks((prevTasks) => [...prevTasks, taskDesc]);
    setTaskDesc("");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-purple-100/60">
      <div className="max-w-lg sm:w-full flex flex-col space-y-4">
        <div className="bg-violet-500/80 text-white grow p-3 shadow-md">
          <h1 className="text-xl font-bold text-center tracking-wider">
            Todo List
          </h1>
        </div>

        <div className="p-4 bg-white shadow-md">
          <form
            action=""
            className="flex justify-center items-center space-x-2"
          >
            <label className="text-gray-500">Task description: </label>
            <input
              type="text"
              className={`border-2 px-1 rounded-md ${
                isEmpty ? "border-red-600/60" : "border-gray-500/30"
              } focus:border-violet-500/60 focus:outline-none transition grow`}
              onChange={(e) => handleInput(e.target.value)}
              value={taskDesc}
            />
          </form>
        </div>

        <div className="p-4 relative bg-white shadow-lg">
          <ul className="list-inside">
            {tasks.length == 0 ? (
              <p className="text-gray-500 text-center mb-2">
                You currently have no tasks...
              </p>
            ) : (
              tasks.map((task, index) => (
                <Task key={index} desc={task} setTasks={setTasks} />
              ))
            )}
          </ul>

          <button
            className="bg-violet-400 text-white font-bold tracking-wide py-2 px-4 rounded-2xl cursor-pointer flex justify-center items-center absolute bottom left-1/2 -translate-x-1/2 hover:scale-105 transition shadow-[5px_5px_15px_rgba(166,132,255,0.6)]"
            onClick={handleSubmit}
          >
            + New Task
          </button>
        </div>
      </div>
    </section>
  );
};

export default App;
