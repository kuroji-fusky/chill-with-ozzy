import { createApp } from "vue"
import App from "./App.vue"
import "./assets/main.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import {
  faShuffle,
  faBackwardStep,
  faForwardStep,
  faPlay,
  faPause,
  faWarning,
} from "@fortawesome/free-solid-svg-icons"

library.add(
  faShuffle,
  faBackwardStep,
  faForwardStep,
  faPlay,
  faPause,
  faWarning
)

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app")
