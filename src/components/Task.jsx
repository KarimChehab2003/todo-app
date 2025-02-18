import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

function Task({ desc, setTasks }) {
  const [hovered, setHovered] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleHoverEnter = () => {
    setHovered(true);
  };

  const handleHoverLeave = () => {
    setHovered(false);
  };

  const handleOnDelete = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task !== desc));
  };

  const handleCheck = () => {
    setChecked((prevState) => !prevState);
  };
  return (
    <li
      className="flex justify-between items-center"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <div className="flex items-center space-x-4">
        <div
          className={`w-2.5 h-2.5 rounded-full p-1 border-2 border-gray-500 ${
            checked ? "bg-violet-400/80" : ""
          }`}
          onClick={handleCheck}
        ></div>

        <p className={`text-gray-500 ${checked ? "line-through" : ""}`}>
          {desc}
        </p>
      </div>
      <FontAwesomeIcon
        icon={faTrashCan}
        className={`mx-2 cursor-pointer text-gray-500 ${
          hovered ? "opacity-100" : "opacity-0"
        } transition duration-150 hover:text-red-600`}
        onClick={handleOnDelete}
      />
    </li>
  );
}

export default Task;
