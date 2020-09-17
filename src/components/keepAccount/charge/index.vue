<template>
  <div id="charge">
    <search-page
      :tableData="tableData"
      :tableColumns="tableColumns"
      :searchForm="searchForm"
      @search="search"
    >
      <template #searchForm>
        <el-form-item label="审批人">
          <el-input v-model="searchForm.user" placeholder="请输入审批人"></el-input>
        </el-form-item>
      </template>

      <template #button>
        <el-button type="primary" @click="addCharge">新增</el-button>
      </template>
    </search-page>
  </div>
</template>

<script>
import SearchPage from "@common/searchPage";
export default {
  components: {
    SearchPage,
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      totalCount: 100,
      searchForm: {},
      tableData: [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 3 },
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 3 },
        { number: 1 },
        { number: 2 },
        { number: 3 },
      ],
      tableColumns: [
        { title: "序号", key: "number", align: "center" },
        { title: "金额", key: "", align: "center" },
        { title: "分类", key: "", align: "center" },
        { title: "账户", key: "", align: "center" },
        { title: "时间", key: "", align: "center" },
        { title: "地点", key: "", align: "center" },
        { title: "备注", key: "", align: "center" },
      ],
    };
  },
  methods: {
    // 搜索账单信息
    search(page, pageSize) {
      console.log(page, pageSize, this.searchForm);
    },
    // 新增一笔支出账单
    addCharge() {

    }
  },
};
</script>

<style lang="scss" scoped>
#charge {
  height: 100%;
  width: 100%;
}
</style>