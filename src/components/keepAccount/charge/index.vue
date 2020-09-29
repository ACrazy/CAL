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
          <el-input
            v-model="searchForm.user"
            placeholder="请输入审批人"
          ></el-input>
        </el-form-item>
      </template>

      <template #button>
        <el-button type="primary" @click="addCharge">新增</el-button>
      </template>
    </search-page>

    <el-dialog
      title="新增支出"
      :visible.sync="dialogVisible"
      width="200"
      :close-on-click-modal="false"
    >
      <el-Form label-position="right" label-width="80px" class="dialog-form">
        <el-form-item label="金额：">
          <el-input v-model="form.amount" placeholder="请输入审批人"></el-input>
        </el-form-item>
        <el-form-item label="分类：">
          <el-input v-model="form.type" placeholder="请输入审批人"></el-input>
        </el-form-item>
        <el-form-item label="账户：">
          <el-input v-model="form.account" placeholder="请输入审批人"></el-input>
        </el-form-item>
        <el-form-item label="日期：">
          <el-row class="date-picker">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date"
            ></el-date-picker>
            <div class="line" :span="2">-</div>
            <el-time-picker
              placeholder="选择时间"
              v-model="form.time"
            ></el-time-picker>
          </el-row>
        </el-form-item>
        <el-form-item label="地点：">
          <el-input v-model="form.position" placeholder="请输入审批人"></el-input>
        </el-form-item>
        <el-form-item label="备注：">
          <el-input
            class="el-textarea"
            type="textarea"
            :maxlength="40"
            rows="2"
            v-model="form.remark"
            placeholder="请输入审批人"
          ></el-input>
        </el-form-item>
      </el-Form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
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
      form: {},
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
#charge {
  height: 100%;
  width: 100%;

  .dialog-form {
    padding: 0 20px;

    .date-picker {
      display: flex;
      width: 92%;

      .line {
        padding: 0 10px;
      }
    }

    /deep/ .el-input {
      width: 92%;
    }

    /deep/ .el-textarea__inner {
      width: 92%;
      resize: none;

      &::-webkit-scrollbar {
       width: 5px; 
      }
    }
  }

  /deep/ .el-dialog {
    width: 560px;
  }
}
</style>