import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home/Home";
import { ProjectPage } from "./Components/Project/ProjectPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Home />}
      >
        {/* <Route
          index
          element={<Home />}
        /> */}
        <Route
          path="projects/:projectId"
          element={<ProjectPage />}
        />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
