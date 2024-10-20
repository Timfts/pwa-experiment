import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PageWithBoundary from "./pages/PageWithBoundary";
import PageWithoutBoundary from "./pages/PageWithoutBoundary";
import SimpleBoundary from "./components/SimpleBoundary";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <SimpleBoundary />,
  },
  {
    path: "/with-boundary",
    element: <PageWithBoundary />,
    /* errorElement: <SimpleBoundary />, */
  },
  {
    path: "/without-boundary",
    element: <PageWithoutBoundary />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
