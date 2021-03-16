import Vue from "vue";
import VueRouter from "vue-router";
// CSS
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/main.scss";

// Components
import App from "@/App";
import Home from "@/components/Home.vue";
import Detail from "@/components/Detail.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/detail/:id", name: "Detail", component: Detail },
];

const router = new VueRouter({
    base: __dirname,
    routes,
    template: App,
});

new Vue({
    router,
    template: `
    <div id="app">
      <router-view class="view"></router-view>
    </div>
  `,
}).$mount("#app");
