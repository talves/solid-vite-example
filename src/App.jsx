import logo from "./logo.svg";
import styles from "./App.module.css";
import { createSignal } from "solid-js";

function App() {
  const [count, setCount] = createSignal(1);

  setInterval(() => {
    if (count() >= 60) {
      setCount(0);
    } else setCount(count() + 1);
  }, 1000);

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>{" "}
        [{count}]
      </header>
    </div>
  );
}

export default App;
