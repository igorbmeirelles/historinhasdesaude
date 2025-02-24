import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { History } from "./pages/history";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [],
    },
    {
      path: "/historia",
      children: [
        {
          path: ":slug",
          element: <History />,
          children: []
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
