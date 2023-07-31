import { useRoutes } from "react-router-dom";
import routers from "./router";

function App() {
  const outlet = useRoutes(routers);
  return <div>{outlet}</div>;
}

export default App;
