import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// toaster
import Toaster from "v-toaster";
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import "v-toaster/dist/v-toaster.css";

// TOASTED
import Toasted from "vue-toasted";

// vue select
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

// vue-tel-input
import VueTelInput from "vue-tel-input";

// Font awesome
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon.vue";

// lodash
import VueLodash from "vue-lodash";

// vue-validation
import Vuelidate from "vuelidate";

// vue multiSelect
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";

// FontAwesomeIcon
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faTrashAlt, faCalendar } from "@fortawesome/free-regular-svg-icons"; // far
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
  faPencilAlt,
  faEnvelope,
  faDownload
} from "@fortawesome/free-solid-svg-icons"; // fas and fa
import { faTwitter, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"; // fab

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";
import tinymce from "vue-tinymce-editor";
import globalJs from "@/service/global.js";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.filter("serverimage", (value, width, height, style) => {
  const tmp = function(input, width, height, style) {
    if (input) {
      if (input.substr(0, 4) == "http") {
        return input;
      }
      let image = globalJs.readFileUrl + input;
      // var image = "http://wohlig.io:1330/api/Upload/readfile" + "?file=" + input;
      if (width) {
        image += `&width=${width}`;
      }
      if (height) {
        image += `&height=${height}`;
      }
      if (style) {
        image += `&style=${style}`;
      }
      return image;
    }
    return "img/jypl-logo.png";
  };
  return tmp(value, width, height, style);
});

Vue.use(Toasted, {
  position: "top-right",
  duration: 5000,
  keepOnHover: true,
  theme: "bubble"
});
Vue.component("v-select", vSelect);
Vue.use(VueTelInput);

// vue momemt
Vue.use(require("vue-moment"));

Vue.component("vue-multiselect", Multiselect);
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
  faEnvelope,
  faDownload,
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
  faTrash,
  faCalendar
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
