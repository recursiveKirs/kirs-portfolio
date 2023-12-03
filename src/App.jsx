import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AppRoutes } from "./AppRoutes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
