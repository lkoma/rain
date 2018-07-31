import Vue from 'vue';
import 'babel-polyfill';
import { sync } from 'vuex-router-sync';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/element-ui.styl';
import App from './App';
import './filters/index';
import router from './router';
import store from './store';
import './assets/css/base.styl';

require('smoothscroll-polyfill').polyfill();

sync(store, router);

Vue.config.devtools = process.env.NODE_ENV !== 'production';
Vue.config.productionTip = false;
Vue.config.silent = process.env.NODE_ENV === 'production';

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    components: { App },
    router,
    store
});
