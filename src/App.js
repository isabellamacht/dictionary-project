import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container text-center">
        <header className="App-header">
          <strong>Dictionary App</strong>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <p className="Footer">
            Coded by{" "}
            <a href="https://github.com/isabellamacht">Isabella Macht</a>{" "}
          </p>
        </footer>
      </div>
    </div>
  );
}
