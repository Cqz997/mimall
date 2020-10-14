<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>我的第一个脚手架项目！</h1>
    <h2>我的名字:{{uname}}</h2>
  </div>
</template>

<script>
export default {
  data(){
    return {
      uname:"东东"
    }
  }
}
</script>
  
<style>
.home>h1{
  background-color:red;
  color:yellow
}
</style>