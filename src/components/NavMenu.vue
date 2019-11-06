<template>
  <el-menu 
      default-active="1-4-1"
       background-color="#333" 
       class="el-menu-vertical-demo" 
       :collapse="false"
       text-color="#fff"
       active-text-color="yellow"
       style="padding-top:3vh" 
       router
       >
       <el-menu-item index="4" route="/home">
          <i class="el-icon-setting"></i>
          <span slot="title">工作平台</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-custom"></i>
            <span slot="title">用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/user" route="/user">用户列表</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3" >
          <i class="el-icon-menu"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
</template>

<script>
export default {

}
</script>

<style>

</style>