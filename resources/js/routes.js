import { createWebHistory, createRouter } from "vue-router";

const routes  = [
    {
        path: '/',
        name: 'products.index',
        component: () => import('./Components/Products/Index.vue')
    },
    {
        path: '/product/:slug',
        name: 'product.show',
        component: () => import('./Components/Products/Show.vue')

    },
    {
        path: '/checkout',
        name: 'order.checkout',
        component: () => import('./Components/Orders/Checkout.vue')
    },
    {
        path: '/summary',
        name: 'order.summary',
        component: () => import('./Components/Orders/Summary.vue')
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

