//mutations 类似数据的基本操作model的封装  进行 state立面的数据基本修改操作 ，但是支持异步操作。
const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
export default {
	//点击进入下一题
	[ADD_ITEMNUM](state, num) {
		state.itemNum += num;
		console.log(state);
	},
	//记录答案
	[REMBER_ANSWER](state, id) {
		state.answerid.push(id);
	},
	/*
	记录做题时间
	 */
	[REMBER_TIME](state) {
		
		//直接使用定时器去做异步操作是不可以的 此方法是无效的
		// setTimeout(() => {
		// 	console.log(1231);
		// 	state.allTime++;
		// }, 1000)

		// 利用箭头函数去赋值一个变量是可以做到  会持续输出
		state.timer = setInterval(() => {
			console.log(1231);
			state.allTime++;
		}, 1000)
	},
	/*
	初始化信息，
	 */
	[INITIALIZE_DATA](state) {
		state.itemNum = 1;
		state.allTime = 0;
		state.answerid = [];
	},
}