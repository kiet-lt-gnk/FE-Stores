import { createStore } from "vuex";
import * as user from "areas/store/user";
import * as product from "@/store/modules/product.js";

export default createStore({
  modules: {
    user,
    product,
  },
});
