import { createBrowserRouter } from "react-router";
import App from "../Pages/Apps";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installations from "../Pages/Installations";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayouts,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/apps',
        Component: Apps
      },
      {
        path: '/installations',
        Component: Installations
      },
      {
        path: '/apps/:id',
        Component: AppDetails
      }
    ]
  }
]);

export default router;