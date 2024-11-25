import { createBrowserRouter } from "react-router-dom";
import AddCoffee from "../components/AddCoffee/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import MainLayout from "../layout/MainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee",
        element: <UpdateCoffee></UpdateCoffee>,
      },
    ],
  },
]);

export default router;
