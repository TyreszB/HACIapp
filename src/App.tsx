import "./App.css";
import { Provider } from "./components/ui/provider";
import Home from "./pages/Home";
import Navbar from "./UI/Navbar";

function App() {
  return (
    <Provider>
      <Navbar />
      <Home />
    </Provider>
  );
}

export default App;
