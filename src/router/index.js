import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Base',
            component: () => import(/* webpackChunkName: "base-view" */ '@views/index'),
            redirect: { name: 'Demo' },
            children: [
                {
                    path: '/demo',
                    name: 'Demo',
                    component: () => import(/* webpackChunkName: "demo-view" */ '@views/demo/index')
                }
            ]
        }
    ]
});
