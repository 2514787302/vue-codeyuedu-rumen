<template>
	<!-- 当前组件是将首页 和 答题页面进行了二合一  -->
  	<section>
    	<header class="top_tips">
    		<span class="num_tip" v-if="fatherComponent == 'home'">{{level}}</span>   <!--这里是首页使用的 -->
    		<span class="num_tip" v-if="fatherComponent == 'item'">题目{{itemNum}}</span> <!--这里是答题使用的 -->
    	</header>

		<!--这里是首页使用的 -->
    	<div v-if="fatherComponent == 'home'" >
    		<div class="home_logo item_container_style"></div>    <!--带孩子一起长知识 -->
    		<router-link to="item" class="start button_style" ></router-link>   <!--开始按钮 -->
    	</div>


		<!--这里是答题使用的 -->
    	<div v-if="fatherComponent == 'item'" >
    		<div class="item_back item_container_style">
    			<div class="item_list_container" v-if="itemDetail.length > 0">
    				<header class="item_title">{{itemDetail[itemNum-1].topic_name}}</header>  <!--题目数 n    这里没有题目标题 -->  
    				<ul>
    					<li  v-for="(item, index) in itemDetail[itemNum-1].topic_answer" @click="choosed(index, item.topic_answer_id)" class="item_list">   <!--循环遍历答案-->
							<!--这里是 当前选中的答案索引是否和现在的一样  一样则利用 v-bind 绑定class  显示选中效果   chooseType(index) 匹配选中的选项  ABCD-->
    						<span class="option_style" v-bind:class="{'has_choosed':choosedNum==index}">{{chooseType(index)}}</span>   
    						<span class="option_detail">{{item.answer_name}}</span>  <!--答案内容 -->
    					</li>
    				</ul>
    			</div>
    		</div>
    		<span class="next_item button_style" @click="nextItem" v-if="itemNum < itemDetail.length"></span>  
			<!--
				下一题按钮事件   这里使用的是v-if v-if本质是删除和增加节点  v-show是 通过display样式来控制显示和隐藏 v-shwo 适合频繁的显示和隐藏
				v-show 不管是 真或者假 都会渲染dom节点  v-if是惰性的  如果初始条件为假 什么都不做 只有条件第一次为真了才会编译
			  -->
    		<span class="submit_item button_style" v-else @click="submitAnswer"></span>    <!--提交按钮事件 最后一题的时候会触发-->
    	</div>


  	</section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	name: 'itemcontainer',
	data() {
		return {
			itemId: null, //题目ID
			choosedNum: null, //选中答案索引
			choosedId:null //选中答案id
		}
	},
  	props:['fatherComponent'], //组件接参数  这里的接参方式有很多种 

	//计算属性  mapState 扩展函数 进行映射  相当于 this.itemDetail   另外一种类型的 data
  	computed: mapState([
	  	'itemNum', //第几题
  		'level', //第几周
  		'itemDetail', //题目详情
  		'timer', //计时器
	]),
  	methods: {
		  //这里的三点叫做 : 扩展运算符
		  //mapActions 映射  
  		...mapActions([
  			'addNum', 'initializeData',
  		]),

  		//点击下一题
  		nextItem(){
  			if (this.choosedNum !== null) {
	  			this.choosedNum = null;  // 清空之前选择的答案
	  			//保存答案, 题目索引加一，跳到下一题
	  			this.addNum(this.choosedId)
  			}else{
  				alert('您还没有选择答案哦')
  			}
  		},

  		//索引0-3对应答案A-B  匹配
	  	chooseType: type => {
	  		switch(type){
	  			case 0: return 'A';
	  			case 1: return 'B';
	  			case 2: return 'C';
	  			case 3: return 'D';
	  		}
	  	},
	  	//选中的答案信息
	  	choosed(type,id){
	  		this.choosedNum = type;  //这个用来改变样式使用  
	  		this.choosedId = id;  //这个点击下一题的时候记录 当前答题答案的 
	  	},



	  	//到达最后一题，交卷，请空定时器，跳转分数页面
	  	submitAnswer(){
	  		if (this.choosedNum !== null) {
	  			this.addNum(this.choosedId)  //添加分数
	  			clearInterval(this.timer)  //清空定时器
	  			this.$router.push('score') // 跳转分数页面
  			}else{
  				alert('您还没有选择答案哦')
  			}
	  	},
	},
	created(){
		//初始化信息
		if(this.fatherComponent == 'home') {
			console.log("进入组件",this.fatherComponent);
			this.initializeData();   //这里调用了vuex 中的方法  因为在main.js 中 new Vue的时候挂载了 store   这个方法初始化了store的数据
			document.body.style.backgroundImage = 'url(./static/img/1-1.jpg)'; //修改为首页的背景
		}
	}
}
</script>

<style lang="less">
	.top_tips{
		position: absolute;
		height: 7.35rem;
		width: 3.25rem;
		top: -1.3rem;
		right: 1.6rem;
		background: url(../images/WechatIMG2.png) no-repeat;
		background-size: 100% 100%;
		z-index: 10;
		.num_tip{
			position: absolute;
			left: 0.48rem;
			bottom: 1.1rem;
			height: 0.7rem;
			width: 2.5rem;
			font-size: 0.6rem;
			font-family: '黑体';
			font-weight: 600;
			color: #a57c50;
			text-align: center;
		}
	}
	.item_container_style{
		height: 11.625rem;
		width: 13.15rem;
		background-repeat: no-repeat;
		position: absolute;
		top: 4.1rem;
		left: 1rem;
	}	
	.home_logo{
		background-image: url(../images/1-2.png);
		background-size: 13.142rem 100%;
		background-position: right center;
	}
	.item_back{
		background-image: url(../images/2-1.png);
		background-size: 100% 100%;
	}
	.button_style{
        display: block;
        height: 2.1rem;
        width: 4.35rem;
        background-size: 100% 100%;
        position: absolute;
        top: 16.5rem;
        left: 50%;
        margin-left: -2.4rem;
        background-repeat: no-repeat;
	}
	.start{
        background-image: url(../images/1-4.png);
    }
    .next_item{
    	background-image: url(../images/2-2.png);
    }
    .submit_item{
    	background-image: url(../images/3-1.png);
    }
    .item_list_container{
    	position: absolute;
    	height: 7.0rem;
    	width: 8.0rem;
    	top: 2.4rem;
    	left: 3rem;
		-webkit-font-smoothing: antialiased;
    }
	.item_title{
		font-size: 0.65rem;
		color: #00e;
		line-height: 0.7rem;
	}
	.item_list{
		font-size: 0;
		margin-top: 0.4rem;
		width: 10rem;
		span{
			display: inline-block;
			font-size: 0.6rem;
			color: #00e;
			vertical-align: middle;
		}
		.option_style{
			height: 0.725rem;
			width: 0.725rem;
			border: 1px solid #fff;
			border-radius: 50%;
			line-height: 0.725rem;
			text-align: center;
			margin-right: 0.3rem;
			font-size: 0.5rem;
			font-family: 'Arial';
		}
		.has_choosed{
			background-color: #ffd400;
			color: #575757;
			border-color: #ffd400;
		}
		.option_detail{
			width: 7.5rem;
			padding-top: 0.11rem;
		}
	}
</style>
