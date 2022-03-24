import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Chatroom from "../views/Chatroom.vue";
import { projectAuth } from "../firebase/config";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: Chatroom
  },
  {
    path: "/:catchAll(.*)",
    redirect: to => ({ name: "Welcome" })
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeResolve((to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user && to.path === "/chatroom") {
    next({ name: "Welcome" });
  } else if (user && to.path === "/") {
    next({ name: "Chatroom" });
  } else {
    next();
  }
});

export default router;
