import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deploying this app with CI/CD on digital ocean
        </p>
        <p>
          Reactjs App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello world
        </a>
        <h6>Random Name</h6>
      </header>
    </div>
  );
}

export default App;
