import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";

function App() {
  const routers = useRoutes(routes)
  return (
    <div>
      {routers}
    </div>
  )
}

export default App;
