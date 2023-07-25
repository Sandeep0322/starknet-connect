import logo from './logo.svg';
import { connect } from "get-starknet"
import './App.css';

async function App() {
  const starknet = connect()
  // await starknet.enable()

// or try to connect to an approved wallet silently (on mount probably)
// const starknet = connect()


  return (
    <div className="starknet">
      <header className="Dapp">
        <button onclick={starknet}>starknet</button>
      </header>
    </div>
  );
}

export default App;
