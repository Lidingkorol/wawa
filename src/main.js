/**
 * Created by lcfevr on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router';
import Env from './config/env';
import MintUI from 'mint-ui';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(MintUI);
Vue.use(VueResource);

// 开启debug模式
Vue.config.debug = true;
Vue.http.options.xhr = {withCredentials: true};
// post的时候会把JSON对象转成formdata
Vue.http.options.emulateJSON=true;
Vue.http.options.emulateHTTP = true;


// 路由配置
let router = new VueRouter({
    // 是否开启History模式的路由,默认开发环境开启,生产环境不开启。如果生产环境的服务端没有进行相关配置,请慎用
    /*history: Env != 'production'*/
   	history:true
});

router.map(Routers);

router.beforeEach(() => {
    window.scrollTo(0, 0);
});

router.afterEach(() => {

});

router.redirect({
    '*': "/game"
});
router.start(App, '#app');