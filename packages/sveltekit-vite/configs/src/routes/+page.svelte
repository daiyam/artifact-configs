<script lang="ts">
	import { commands } from "../bindings";

	let name = $state("");
	let greetMsg = $state("");

	async function greet(event: Event) {
		event.preventDefault();

		greetMsg = await commands.greet(name);
	}
</script>

<main class="container">
	<h1>Welcome to Tauri</h1>

	<div class="row">
		<a href="https://tauri.app" target="_blank">
			<img src="/tauri.svg" class="logo tauri" alt="Tauri logo" />
		</a>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo vite" alt="Vite logo" />
		</a>
		<a href="https://www.typescriptlang.org/docs" target="_blank">
			<img src="/typescript.svg" class="logo typescript" alt="typescript logo" />
		</a>
		<a href="https://kit.svelte.dev" target="_blank">
			<img src="/svelte.svg" class="logo svelte-kit" alt="SvelteKit Logo" />
		</a>
	</div>
	<p>Click on the Tauri logo to learn more about the framework</p>

	<form class="row" onsubmit={greet}>
		<input id="greet-input" placeholder="Enter a name..." bind:value={name} />
		<button type="submit">Greet</button>
	</form>
	<p>{greetMsg}</p>
</main>

<style>
:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color: #0f0f0f;
  background-color: #f6f6f6;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

.container {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  min-width: 100%;
}

.row {
  display: flex;
  justify-content: center;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}

a:hover {
  color: #535bf2;
}

h1 {
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: 0.75s;
}

.logo.tauri:hover {
  filter: drop-shadow(0 0 2em #24c8db);
}

.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.typescript:hover, .logo.svelte-kit:hover {
  filter: drop-shadow(0 0 2em #ff3e00);
}

input,
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: #0f0f0f;
  background-color: #ffffff;
  transition: border-color 0.25s;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

button {
  cursor: pointer;
}

button:hover {
  border-color: #396cd8;
}
button:active {
  border-color: #396cd8;
  background-color: #e8e8e8;
}

input,
button {
  outline: none;
}

#greet-input {
  margin-right: 5px;
}

@media (prefers-color-scheme: dark) {
  :root {
    color: #f6f6f6;
    background-color: #2f2f2f;
  }

  a:hover {
    color: #24c8db;
  }
}
</style>
