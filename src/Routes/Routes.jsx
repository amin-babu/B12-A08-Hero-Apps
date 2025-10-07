import { createBrowserRouter } from "react-router";
import App from "../Pages/Apps";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installations from "../Pages/Installations";

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'apps',
        Component: Apps
      },
      {
        path: 'installations',
        Component: Installations
      }
    ]
  }
]);

export default router;