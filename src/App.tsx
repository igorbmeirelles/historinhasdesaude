import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
//import { History } from "./pages/history";
import { Home } from "./pages/home";
import { StoryPage } from "./pages/Story";
import { Equipe } from "./pages/Equipe";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [],
    },
    {
      path: "/historia/v2",
      children: [
        {
          path: ":storySlug",
          element: <StoryPage />,
          children: [],
        },
      ],
    },
    {
      path: "/equipe",
      element: <Equipe />,
      children: [],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
