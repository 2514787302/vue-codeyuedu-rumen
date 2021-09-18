<template>
  	<div>
        <!-- 这里使用了组件中的 props 进行传值  会 react 的同学应该很好理解 -->
        <itemcontainer father-component="home"></itemcontainer>   
    </div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer'

export default {
	name: 'home',
  	components: {
  		itemcontainer
  	},
    created(){
        
    }
}
</script>

