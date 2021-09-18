import ajax from '../config/ajax'


/*
action 相当于是vuex的 控制器 可以通过commit() 调用mutations中的方法   并且可以做到真正的异步处理
actions 的第一个参数是 context，它向外暴露一组与 store 实例相同的方法/属性，因此能够直接调用 context.commit 或者访问 context.state 或者 context.getters 。
咱们一般使用 es6 的参数解构来简化咱们的代码，直接写成{ commit }
Action 经过 store.dispatch 方法触发  列如：store.dispatch(‘increment’)

*/
export default {
	addNum({ commit, state }, id) {
		//点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
		commit('REMBER_ANSWER', id);
		if (state.itemNum < state.itemDetail.length) {
			commit('ADD_ITEMNUM', 1);
		}
	},
	//初始化信息
	initializeData({ commit }) {
		console.log("这里调用了初始化 vux数据");
		commit('INITIALIZE_DATA');
	}
}