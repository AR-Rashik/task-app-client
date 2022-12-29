import React from "react";

const CompletedTask = () => {
  return (
    <>
      {/* Card is full width. Use in 8 col grid for best view. */}
      {/* Card code block start */}
      <div className="mx-auto bg-white dark:bg-gray-800 shadow rounded w-full">
        <div className="py-6 xl:px-8 lg:px-8 md:px-8 px-4 flex justify-between items-center">
          <p className="font-bold text-sm xl:text-lg lg:text-lg md:text-lg text-gray-800 dark:text-gray-100">
            My Completed <span className="text-gray-500">Tasks</span>
          </p>
        </div>
        {/* {tasks.map((task) => (
          <div className="xl:px-8 lg:px-8 md:px-8 px-4 py-6 bg-white dark:bg-gray-800">
            <div className="p-5 flex justify-between rounded mb-6 bg-gray-100 dark:bg-gray-700">
              <div className="w-3/5">
                <p className="mb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  {task.title}
                </p>
                <ul>
                  <li className="mb-2 text-xs text-gray-600 dark:text-gray-400">
                    {task.description}
                  </li>
                </ul>
              </div>
              <div className="w-3/12 flex flex-col items-end justify-between">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {task.time}
                </p>
                <div className="bg-gray-200 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                  <span className="text-xs text-gray-600 dark:text-gray-400 font-normal">
                    Meeting
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))} */}
      </div>
      {/* Card code block end */}
    </>
  );
};

export default CompletedTask;
