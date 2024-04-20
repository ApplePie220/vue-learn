import { createRouter, createWebHistory } from "vue-router"
import AllFilmsPage from "@/pages/AllFilmsPage.vue"
import FilmPage from "@/pages/FilmPage.vue"
import MainPage from "@/pages/MainPage.vue"
import NotFound from "@/pages/404.vue"
import FilmsLayout from "@/pages/FilmsLayout.vue";

const router = createRouter({
    mode: 'history',
    routes: [
        {
        path: '/',
        name: 'main',
        component: MainPage
    },
        {
            path: '/films',
            name: 'filmsLayout',
            component: FilmsLayout,
            children: [
                {
                    path: '',
                    name: 'films',
                    component: AllFilmsPage
                },
                {
                    path: ':id',
                    name: 'filmPage',
                    component: FilmPage,
                    beforeEnter: (to, from, next) => {
                        if (localStorage.getItem('auth')) {
                            next()
                        } else {
                            next({ name: 'films'})
                        }
                    }
                },
                {
                    path: '/:catchAll(.*)//:catchAll(.*)',
                    redirect: {name: 'films'}
                }
            ]
        },
        {
            path: '/:catchAll(.*)',
            name: 'notFound',
            component: NotFound
        }
    ],
    history: createWebHistory()
})

export default router;