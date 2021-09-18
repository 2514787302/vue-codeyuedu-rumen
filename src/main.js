import Vue from 'vue'   //引入vue 在node_modules
import VueRouter from 'vue-router' //引入 vue 路由组件 
import routes from './router/router' //引入我们定义的路由信息
import store from './store/'        //引入 vueX store
import ajax from './config/ajax'  //这个应该是接口请求用的  但是这个项目好像没有用到
import './style/common'   //引入全局样式文件 less
import './config/rem'    //用rem来计算那些需要自适应。
// 这个usel类似php 中的命名空间    如果引入的是依赖包中的 组件 那么你就必须要use  举个简单得例子  使用 axios时，就不需要用 Vue.use(axios) 如果是 VueRouter 就需要Vue.use(VueRouter)
Vue.use(VueRouter)  
////////////////////////////////注册路由
const router = new VueRouter({
	routes
})
/*new Vue({ render: h => h(App), }).$mount('#app')   //有的入口文件是这样的   这样的但是这个框app.vue文件 没有定义id = app 所以外层容器用的不是app.vue 所以这里不会写 
官方文档中是这样的，createElement 是 Vue.js 里面的 函数，
这个函数的作用就是生成一个 VNode节点（虚拟节点），
render 函数得到这个 VNode 节点之后，返回给 Vue.js 的 mount 函数，渲染成真实 DOM 节点，并挂载到根节点上。*/


/*
render: h => h(App)是ES6的写法，其实就是如下内容的简写：
render: function (createElement) {
     return createElement(App);
}
*/
//创建vue实例 并挂载router 路由 和  store 与 this上   
new Vue({
	router,  
	store,
}).$mount('#app')   