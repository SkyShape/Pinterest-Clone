
import './App.css';
import Header from "./Header";
import Mainboard from "./Mainboard";

function App() {
  return (
    <div className="app">
        <div className="app_header">
          <Header />
        </div>

        <div className="app_mainboard">
          <Mainboard />
        </div>
    </div>
  );
}

export default App;
