import { createBrowserRouter } from "react-router";
import RootLayout from "./routes/RootLayout";
import Home from "./routes/Home";
import About from "./routes/About";
import Portfolio from "./routes/Portfolio";
import NotFound from "./routes/NotFound";
import Demo from "./routes/Demo";
import ProjectPageLoader from "./routes/ProjectPageLoader";
import ErrorFallback from "./routes/ErrorFallback";
import PDFViewerPage from "./routes/PDFViewerPage";
import PositionPageLoader from "./routes/PositionPageLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "*", element: <NotFound /> },
      { path: "demo", element: <Demo /> },
      {
        path: "/projects/:slug",
        element: <ProjectPageLoader />,
        errorElement: <ErrorFallback />,
      },
      {
        path: "/positions/:slug",
        element: <PositionPageLoader />,
        errorElement: <ErrorFallback />,
      },
      {
        path: "/pdf/:slug",
        element: <PDFViewerPage />,
        errorElement: <ErrorFallback />,
      },
    ],
  },
]);
