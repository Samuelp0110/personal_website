import { createBrowserRouter } from "react-router";
import RootLayout from "./routes/RootLayout";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import NotFound from "./routes/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
