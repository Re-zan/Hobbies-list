import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ListDataUpdate from "../ListDataUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/:id",
    element: <ListDataUpdate></ListDataUpdate>,
    loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
  },
]);

export default router;
