import "./App.css";
import "./index.css";

import { Login } from "./FormHandling/Login";
import { Registration } from "./FormHandling/Registration";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./FormHandling/Dashboard";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Registration />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);
  return <RouterProvider router={route} />;
}

export default App;
