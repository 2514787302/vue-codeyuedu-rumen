<template>
  <!-- 这里并非最外层容器 ，因为在index.hmtl 中定义了 id=add -->
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
	  console.log(this,"初始化this");
  },
};
</script>

<style>
</style>
