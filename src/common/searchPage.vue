<template>
  <div id="searchPage">
    <el-form :inline="true" :model="searchForm">
      <!-- 自定义搜索输入框slot -->
      <slot name="searchForm"></slot>
      <el-form-item>
        <!-- 自定义按钮slot -->
        <slot name="button"></slot>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="info" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>

    <el-card shadow="hover">
      <!-- 表格 -->
      <el-table :data="tableData" :stripe="true">
        <el-table-column
          v-for="(item,index) in tableColumns"
          :key="index"
          :prop="item.key"
          :label="item.title"
          :align="item.align"
          :show-overflow-tooltip="true"
        ></el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
        v-show="totalCount>10"
        class="pagination"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    searchForm: {
      type: Object,
      default: {},
    },
    tableData: {
      type: Array,
      default: {},
    },
    tableColumns: {
      type: Array,
      default: {},
    },
    isInit: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      totalCount: 100,
    };
  },
  methods: {
    handleSizeChange(size) {
      this.pageSize = size;
      this.currentPage = 1;
      this.$emit("search", this.currentPage, this.pageSize);
    },
    handleCurrentChange(page) {
      this.currentPage = page;
      this.$emit("search", this.currentPage, this.pageSize);
    },
    onSubmit() {
      this.$emit("search", 1, this.pageSize, this.searchForm);
    },
    onReset() {},
  },
  created() {
    if (this.isInit) {
      this.$emit("search", 1, this.pageSize);
    }
  },
};
</script>

<style lang="scss" scoped>
#searchPage {
  height: 100%;
  width: 100%;

  .search-form {
    .form-item {
      width: 240px;
    }
  }
  .pagination {
    float: right;
    padding: 10px 0;
  }
}
</style>