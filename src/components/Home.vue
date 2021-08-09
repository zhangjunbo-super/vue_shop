<template>
  <el-container class="home_container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/logo.png" alt="logo" />
        <span>super后台</span>
      </div>
      <el-button type="info" @click="layout">退出</el-button></el-header
    >
    <!-- 页面主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-Button" @click="toggleCollapse">|||</div>
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
          :default-active="activePath"
        >
          <el-submenu
            :index="item.id + ''"
            v-for="item in menuList"
            :key="item.id"
          >
            <template slot="title">
              <i :class="iconObj[item.id]"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item
              :index="'/' + subitem.path"
              v-for="subitem in item.children"
              :key="subitem.id"
              @click="saveNevState('/' + subitem.path)"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ subitem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menuList: [],
      iconObj: {
        125: "el-icon-user",
        103: "el-icon-s-check",
        101: "el-icon-s-shop",
        102: "el-icon-tickets",
        145: "el-icon-notebook-2",
      },
      isCollapse: false,
      activePath: "",
    };
  },
  created() {
    this.getMenuList();
    this.activePath = window.sessionStorage.getItem("activePath");
  },
  methods: {
    //退出登录
    layout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    //获取菜单
    async getMenuList() {
      const { data: res } = await this.$http.get("menus");
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg);
      this.menuList = res.data;
      // console.log(res);
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    saveNevState(activePath) {
      window.sessionStorage.setItem("activePath", activePath);
      this.activePath = activePath;
    },
  },
};
</script>

<style  scoped>
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 20px;
  padding-left: 10px;
}
.el-header div {
  display: flex;
  align-items: center;
}
.el-header img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: white;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
}
.el-header span {
  margin-left: 20px;
}
.el-aside {
  background-color: #333741;
}
.el-aside .el-menu {
  border-right: none;
}
.el-main {
  background-color: #eaedf1;
}
.home_container {
  height: 100%;
}
.toggle-Button {
  background-color: #4a5064;
  color: white;
  letter-spacing: 2px;
  text-align: center;
  line-height: 24px;
  font-size: 10px;
  cursor: pointer;
}
</style>