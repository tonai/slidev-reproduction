import { defineAppSetup } from "@slidev/types";
// import ProgressPlugin from "slidev-component-progress";
import SpotlightPlugin from "spotlight-vue";

export default defineAppSetup(({ app }) => {
  // app.use(ProgressPlugin);
  app.use(SpotlightPlugin);
});
