import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthPProvider/AuthProvider";

const AddTask = () => {
  const { user } = useContext(AuthContext);

  const handleAddTask = (event) => {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const image_url = form.image_url?.value;
    const time = form.time.value;
    const details = form.details.value;
    const email = user?.email;
    const name = user?.displayName || "Unregistered";

    const task = {
      email,
      name,
      time,
      title,
      image_url,
      details,
    };

    fetch("http://localhost:5000/task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Task added successfully");
          form.reset();
        }
      })
      .catch((error) => console.error("Item post errors: ", error));
  };

  return (
    <>
      {/* Card is full width. Use in 8 col grid for best view. */}
      {/* Card code block start */}
      <div className="mx-auto absolute bg-white dark:bg-gray-800 shadow rounded w-full pb-10">
        <div className="py-6 xl:px-8 lg:px-8 md:px-8 px-4 flex justify-between items-center">
          <p className="font-bold text-sm xl:text-lg lg:text-lg md:text-lg text-gray-800 dark:text-gray-100">
            Add New <span className="text-gray-500">Tasks</span>
          </p>
        </div>
        <form onSubmit={handleAddTask} className="text-center mt-8 ">
          <div className="mt-8 px-4 flex flex-col justify-center items-center ">
            <input
              required
              type="text"
              name="title"
              placeholder="Enter task title"
              className="md:w-[643px] w-full resize-none focus:outline-none border border-gray-300 px-3 py-3 mb-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            />
            <input
              type="text"
              name="image_url"
              placeholder="Enter image url"
              className="md:w-[643px] w-full resize-none focus:outline-none border border-gray-300 px-3 py-3 mb-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            />
            <input
              required
              type="text"
              name="time"
              placeholder="Enter date and time"
              className="md:w-[643px] w-full resize-none focus:outline-none border border-gray-300 px-3 py-3 mb-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            />
            <textarea
              required
              name="details"
              className="md:w-[643px] w-full md:h-[208px] h-[340px] resize-none focus:outline-none border border-gray-300 px-3 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
              placeholder="Task details..."
              defaultValue={""}
            />
          </div>
          <div className="lg:flex justify-center gap-8 text-center lg:mt-6 md:mt-8 mt-8">
            <input
              type="submit"
              value="Submit"
              className="bg-gray-700 hover:bg-gray-800 transition duration-300 ease-out lg:max-w-[187px] w-full text-white py-3 font-medium text-base border border-gray-300"
            />
          </div>
        </form>
      </div>
      {/* Card code block end */}
    </>
  );
};

export default AddTask;
