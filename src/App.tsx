import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { HistoryHigiene } from "./pages/history/higiene";
//import { History } from "./pages/history";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [],
    },
    /* {
      path: "/historia",
      children: [
        {
          path: ":slug",
          element: <History />,
          children: []
        }
      ]
    } */
    {
      path: "/historia",
      children: [
        {
          path: ":slug",
          element: <HistoryHigiene />,
          children: [],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
