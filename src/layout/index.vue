<template>
  <div class="lay-out-container">
    <el-container style="height:100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <div class="left-name">Lee</div>
           <el-submenu index="0">
            <template slot="title">
                <div class="cor-pad">
              <i class="el-icon-document"></i> <span>数据管理</span> 
                </div>
            </template>
                <el-menu-item index="2-1-1"><router-link to= '/user'>用户列表</router-link></el-menu-item>
                <el-menu-item index="2-1-1"><router-link to='/shop'>商家列表</router-link></el-menu-item>
                <el-menu-item index="2-1-1"><router-link to='/food'>食品列表</router-link></el-menu-item>
                <el-menu-item index="2-1-1"><router-link to='/order'>订单列表</router-link></el-menu-item>
                <el-menu-item index="2-1-1"><router-link to='/admin'>管理员列表</router-link></el-menu-item>
              
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
                <div class="cor-pad">
              <i class="el-icon-plus"></i> <span>添加数据</span> 
                </div>
            </template>
              <el-menu-item index="2-1-1"><router-link to='/addshop'>添加商铺</router-link></el-menu-item>
              <el-menu-item index="2-1-1"><router-link to='/addfood'>添加商品</router-link></el-menu-item>
          </el-submenu>

          <el-submenu index="7">
            <template slot="title">
                <div class="cor-pad">
              <i class="el-icon-star-on"></i> <span>图表</span> 
                </div>
            </template>
            <el-menu-item index="7-1-1"><router-link to='/user-detri'>用户分布</router-link></el-menu-item>
          </el-submenu>

        
          <el-submenu index="4">
            <template slot="title">
                <div class="cor-pad">                
              <i class="el-icon-edit"></i>编辑
                </div>
            </template>
            <el-menu-item index="4-1-1"><router-link to='/edit'>文本编辑</router-link></el-menu-item>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
                 <div class="cor-pad">         
              <i class="el-icon-setting"></i>设置
                 </div>
            </template>
               <el-menu-item index="5-1-1"><router-link to='admin'>管理员设置</router-link></el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
                 <div class="cor-pad">         
              <i class="el-icon-warning"></i>说明
                 </div>
            </template>
              <el-menu-item index="6-1-1"><router-link to ='/explain'>说明</router-link></el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span class="admin">李大大</span>
        </el-header>

        <el-main>
           <keep-alive>
              <router-view></router-view>
           </keep-alive>
        </el-main>
      </el-container>
    </el-container>

   
  </div>
</template>

<style>
@import "../assets/css/reset.css";
.lay-out-container {
  height: 100%;
}
.left-name {
  height: 60px;
  text-align: center;
  line-height: 60px;
  background-color: #b3c0d1;
  font-weight: bold;
  color: #2da0ff;
  font-size: 18px;
  background-color: #324157;
}
.cor-pad{
    text-align: left;
    padding-left: 20px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #324157 !important;
 
}
.el-aside .el-menu{
    background-color: #324157;
}
.el-submenu__title:hover {
    background-color: #48576a !important;
}
.el-submenu__title,.el-menu-item {
   color: #bfcbd9 !important;
}
.el-submenu__title i {
   color: #bfcbd9 !important;
}
.el-menu-item:focus, .el-menu-item:hover {
    outline: 0;
    background-color: #48576a !important;
}
.el-menu-item.is-active {
    color: #409EFF !important;
    
}
.el-menu-item{
background-color: rgba(0,0,0,.5);
}
.admin {
  color: #fff;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px !important;
    text-align: center;
  }
.avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<script>
export default {};
</script>