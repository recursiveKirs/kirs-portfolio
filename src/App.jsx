import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AppContent } from "./AppContent";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <AppContent />
      </div>
    </BrowserRouter>
  );
}

export default App;
