import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { History } from "./pages/history";
import { Home } from "./pages/home";
import { StoryPage } from "./pages/story";

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
          children: [],
        },
      ],
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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
