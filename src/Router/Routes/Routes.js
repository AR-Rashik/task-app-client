import CompletedTask from "../../CompletedTask/CompletedTask";
import Main from "../../Layout/Main";
import AddTask from "../../Pages/AddTask/AddTask";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyTasks from "../../Pages/MyTasks/MyTasks";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/mytasks",
        element: <MyTasks></MyTasks>,
      },
      {
        path: "/addtask",
        element: <AddTask></AddTask>,
      },
      {
        path: "/completedtask",
        element: <CompletedTask></CompletedTask>,
      },
    ],
  },
]);
