<template>
  <div id="income">
    <search-page
      :tableData="tableData"
      :tableColumns="tableColumns"
      :searchForm="searchForm"
      @search="search"
    ></search-page>
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
    search(page, pageSize) {
      console.log(page, pageSize, this.searchForm);
    },
    handleSizeChange() {},
    handleCurrentChange() {},
    onSubmit() {},
    onReset() {},
  },
};
</script>

<style lang="scss" scoped>
#income {
  height: 100%;
  width: 100%;
}
</style>