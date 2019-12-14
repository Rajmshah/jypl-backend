import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// toaster
import Toaster from "v-toaster";
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import "v-toaster/dist/v-toaster.css";

// Font awesome
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon.vue";

// lodash
import VueLodash from "vue-lodash";

// vue-validation
import Vuelidate from "vuelidate";

// vue multiSelect
import Multiselect from "vue-multiselect";
Vue.component("vue-multiselect", Multiselect);
import "vue-multiselect/dist/vue-multiselect.min.css";

// FontAwesomeIcon
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faTrashAlt } from "@fortawesome/free-regular-svg-icons"; // far
import {
  faAlignRight,
  faHeart,
  faSignOutAlt,
  faTrash,
  faSpinner,
  faShoppingCart,
  faGlobeAmericas,
  faGift,
  faUsers,
  faEdit,
  faPencilAlt
} from "@fortawesome/free-solid-svg-icons"; // fas and fa
import { faTwitter, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"; // fab

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";
import tinymce from "vue-tinymce-editor";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// vue-tinymce-editor

Vue.component("tinymce", tinymce);

Vue.use(VueLodash);
// optional set default imeout, the default is 10000 (10 seconds).
Vue.use(Toaster, { timeout: 5000 });
Vue.use(Vuelidate);

Vue.use(BootstrapVue);

Vue.component("icon", Icon);

Vue.config.productionTip = false;

library.add(
  faAlignRight,
  faEye,
  faEdit,
  faTrashAlt,
  faTwitter,
  faFacebookSquare,
  faHeart,
  faSpinner,
  faShoppingCart,
  faGlobeAmericas,
  faGift,
  faUsers,
  faSignOutAlt,
  faPencilAlt,
  faTrash
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
