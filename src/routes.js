import Home from "./pages/Home.svelte";
import About from "./pages/About.svelte";
import ErrorPage from "./pages/ErrorPage.svelte";

function isAdmin() {
  // route guard
}

const routes = [
  {
    name: "/",
    component: Home,
  },
  {
    name: "home",
    component: Home,
  },
  {
    name: "about",
    component: About,
  },
  {
    name: "404",
    component: ErrorPage,
  },
];

export { routes };
