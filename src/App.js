import logo from './logo.svg';
import './App.css';

function App() {

  const hello = <p>Hello World!</p>;
  const objeto = { name: 'Diego', surname: 'Moreira' };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {hello}
        <p>My name is {objeto.name} {objeto.surname}.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
