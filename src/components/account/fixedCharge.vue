<template>
  <div id="fixedCharge">
    <search-page
      :tableData="tableData"
      :tableColumns="tableColumns"
      :searchForm="searchForm"
      @search="search"
    >
      <template #searchForm>
        <el-form-item label="账户类型">
          <el-select v-model="searchForm.accountType" placeholder="请选择账户类型">
            <option value="fixedCharge">固定支出</option>
          </el-select>
        </el-form-item>

        <el-form-item label="审批人">
          <el-input v-model="searchForm.user" placeholder="请输入审批人"></el-input>
        </el-form-item>
      </template>

      <template #button>
        <el-button type="primary" @click="addCharge">新增</el-button>
      </template>
    </search-page>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="640"
      :close-on-click-modal="false"
    >
      <el-Form>
        <el-form-item label="审批人">
          <el-input v-model="searchForm.user" placeholder="请输入审批人"></el-input>
        </el-form-item>
      </el-Form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
      dialogVisible: false,
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
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
#fixedCharge {
  height: 100%;
  width: 100%;
}
</style>