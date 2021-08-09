<template>
  <div>
    <!-- 导航栏 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片区域 -->
    <el-card>
      <!-- <div style="height:700px;overflow-y:auto"> -->
      <el-table :data="rightsList" border style="width: 100%" stripe height="700px">
        
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="authName" label="权限名称"> </el-table-column>
        <el-table-column prop="path" label="路径"> </el-table-column>
        <el-table-column prop="level" label="权限等级">
            <!-- 作用域插槽 -->
          <template slot-scope="scope">
            <el-tag v-if="scope.row.level==='0'">一级</el-tag>
            <el-tag type="success" v-if="scope.row.level==='1'">二级</el-tag>
            <el-tag type="warning" v-if="scope.row.level==='2'">三级</el-tag>
          </template>
        </el-table-column>
      </el-table>
      <!-- </div> -->
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rightsList: [], //表格数据
    };
  },
  created() {
    this.getrightsList();
  },
  methods: {
    async getrightsList() {
      const { data: res } = await this.$http.get("rights/list");
      if (res.meta.status !== 200)
        return this.$message.error("获取权限列表失败！");
      //   console.log(res);
      this.rightsList = res.data;
    },
  },
};
</script>

<style  scoped>
</style>