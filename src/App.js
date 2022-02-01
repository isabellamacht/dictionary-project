import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Search engine</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">Coded by Isabella Macht</footer>
      </div>
    </div>
  );
}
