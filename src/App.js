import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/Navbars";
import Router from "./components/Router";

function App() {
  return (
    <div className="App">
      <Navbars />
      <Router />
    </div>
  );
}

export default App;
