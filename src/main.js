import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import store from "./store";

const app = createApp(App);

app.use(store);

// Fetch tasks on app initialization
store.dispatch('fetchTasks');



app.mount("#app");
