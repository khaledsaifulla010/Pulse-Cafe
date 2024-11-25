import { createBrowserRouter } from "react-router-dom";
import AddCoffee from "../components/AddCoffee/AddCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee",
    element: <div>Hello world!</div>,
  },
]);

export default router;
