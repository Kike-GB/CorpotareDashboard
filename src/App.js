import logo from './logo.svg';
import './App.css';
import Heads from "./components/Heads.js";
import Body from "./components/Body.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Heads />
          <Body />
        </p>
      </header>
    </div>
  );
}

export default App;
