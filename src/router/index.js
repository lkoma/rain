import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/demo',
            name: 'demo',
            component: () => import(/* webpackChunkName: "demo-view" */ '@views/demo/Index')
        }
    ]
});
