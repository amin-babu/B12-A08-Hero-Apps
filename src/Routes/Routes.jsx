import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home
      }
    ]
  }
]);

export default router;