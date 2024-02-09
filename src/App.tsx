// import { Home } from "./pages/Home";
import MyRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
