import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthPProvider/AuthProvider";
import { FaEdit, FaRegCheckSquare, FaRegTrashAlt } from "react-icons/fa";

const MyTasks = () => {
  // const [showDropdown, setShowDropdown] = useState(false);
  const [tasks, setTasks] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/tasks?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want delete this task?");
    if (proceed) {
      fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  return (
    <>
      {/* Card is full width. Use in 8 col grid for best view. */}
      {/* Card code block start */}
      <div className="mx-auto bg-white dark:bg-gray-800 shadow rounded w-full">
        <div className="py-6 xl:px-8 lg:px-8 md:px-8 px-4 flex justify-between items-center">
          <p className="font-bold text-sm xl:text-lg lg:text-lg md:text-lg text-gray-800 dark:text-gray-100">
            My All <span className="text-gray-500">Tasks</span>
          </p>
        </div>
        {tasks.map((task) => (
          <div
            key={task._id}
            className="xl:px-8 lg:px-8 md:px-8 px-4 py-6 bg-white dark:bg-gray-800 md:w-4/6 mx-auto w-full "
          >
            <div className="flex flex-col bg-gray-100 dark:bg-gray-700 rounded">
              <div className="p-5">
                <div className="flex justify-between">
                  <p className="mb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                    {task.title}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {task.time}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-xs text-gray-600 dark:text-gray-400">
                    {task.details}
                  </p>
                </div>
              </div>
              <div className=" my-4 rounded-md flex items-center justify-center gap-3">
                {/* Edit button */}
                <button className="bg-blue-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                  <div className="flex items-center">
                    <FaEdit className="text-blue-800"></FaEdit>
                    <span className="text-xs pl-2 text-blue-800 font-semibold">
                      Edit
                    </span>
                  </div>
                </button>

                {/* Delete button */}
                <button
                  onClick={() => handleDelete(task._id)}
                  className="bg-red-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center"
                >
                  <div className="flex items-center">
                    <FaRegTrashAlt className="text-red-800"></FaRegTrashAlt>
                    <span className="text-xs  pl-2 text-red-800 font-semibold">
                      Delete
                    </span>
                  </div>
                </button>

                {/* Completed button */}
                <button className="bg-green-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                  <div className="flex items-center">
                    <FaRegCheckSquare className="text-green-800 "></FaRegCheckSquare>
                    <span className="text-xs pl-2 text-green-800 font-semibold">
                      Completed
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Card code block end */}
    </>
  );
};

export default MyTasks;
