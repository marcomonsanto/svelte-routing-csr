<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<script>
  import { Router } from "svelte-router-spa"; // Add this line
  import { routes } from "./routes.js"; // Add this line

  export let name;
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <!-- Add this line -->
  <a href="/home">Home</a>
  <!-- Add this line -->
  <a href="/about">About</a>
  <!-- Add this line -->
  <Router {routes} />
</main>
