import {createStore} from 'vuex'
import packages from "@/store/packages";

export default createStore({
  modules: {
    packages
  }
})
