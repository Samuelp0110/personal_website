import { createBrowserRouter } from "react-router";
import RootLayout from "./routes/RootLayout";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import NotFound from "./routes/NotFound";
import Temp from "./routes/Temp";
import ProjectPageLoader from "./routes/ProjectPageLoader";
import PDFViewerPage from "./routes/PDFViewerPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "*", element: <NotFound /> },
      { path: "temp", element: <Temp /> },
      {
        path: "/projects/:slug",
        element: <ProjectPageLoader />,
      },
      {
        path: "pdf/:slug", // <-- Add this route
        element: <PDFViewerPage />,
      },
    ],
  },
]);
