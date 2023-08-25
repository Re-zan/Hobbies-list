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
    loader: ({ params }) =>
      fetch(`https://hobbies-server-side.vercel.app/${params.id}`),
  },
]);

export default router;
