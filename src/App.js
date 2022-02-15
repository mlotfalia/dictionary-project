import "./App.css";

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="Music" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by
            <a href="https://inspiring-goldwasser-7318f4.netlify.app/">
              Mahsa Lotfalia
            </a>
            and is
            <a href="https://github.com/mlotfalia/dictionary-project">
              open-sourced on GitHub
            </a>
            and hosted on <a href="https://netlify.com">Netlify</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
