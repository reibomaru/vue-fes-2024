import { createApp } from "vue";
import App from "./App.vue";
import { worker } from "./mocks/browser";

const enableMocking = async () => {
  await worker.start();
};

enableMocking().then(() => createApp(App).mount("#app"));
