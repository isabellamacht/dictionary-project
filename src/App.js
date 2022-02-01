import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container text-center">
        <header className="App-header">Search engine</header>
        <main>
          <Dictionary />
        </main>
        <footer>Coded by Isabella Macht</footer>
      </div>
    </div>
  );
}
