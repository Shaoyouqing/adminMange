<template>
<div id="app">
  <Header/>
  <section class="content">
    <div style="min-width:201px;background-color:#333">
      <NavMenu/>
    </div>
    <article class="article_content" >
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin: 10px 0">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
      <router-view></router-view>
    </article>
  </section>
</div>
  
</template>

<script>
  import { Header , NavMenu } from "./components"
  export default {
    data() {
      return {
         
      }
    },
    components:{
      Header,
      NavMenu
    },
    methods: {
     
    }
  }
</script>

<style>
*{
  padding: 0;
  margin:0;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  height: 100vh;
  flex-direction: column;
}
.content{
  display: flex;
  flex: 1;
}
.article_content{
  padding: 10px;
  flex:1
}
</style>
