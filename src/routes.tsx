import Home from "./pages/Home/Home";
import Login from "./pages/Form/Login/Login";
import Register from "./pages/Form/Register/Register";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/auth/login", element: <Login /> },
  { path: "/auth/register", element: <Register /> },
];

export default routes;
