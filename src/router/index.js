
import { createRouter, createWebHistory } from 'vue-router'


import HomePage from '../components/HomePage.vue'
import loginpage from '../components/login/loginpage.vue'

const routerHistory = createWebHistory()

const routes = createRouter(
  {

    history: routerHistory,
    routes: [
      {
        path: "/",
        component: HomePage,
        children: [{
          path: "",
          components: {
            homecontent: () => import('../components/pagehome/HomeContet.vue'),

          }
        }

        ]


      }, {
        path: "/login",
        name: "login",
        component: loginpage
      }, {
        path: "/content",
        name: "content",
        component: () => import('../components/content/content.vue')
      }, {
        path: "/personalcenter",
        name: "personalcenter",
        component: () => import('../components/personalCenter/personalCenter.vue')
      }
    ]
  }
)
export default routes