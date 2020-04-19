import Vue from "vue";
import VueRouter from "vue-router";
import rootNav from "../assets/constants/rootNav";

Vue.use(VueRouter);

const routes = () => {
  return rootNav.map(n => ({
    ...n, component: () =>
      import(`../views/${n.name}.vue`)
  }));
};

const router = new VueRouter({
  routes: routes()
});

export default router;
