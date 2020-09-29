<template>
  <div id="userToDo">
    <el-calendar v-model="curDate">
      <template slot="dateCell" slot-scope="{ date, data }">
        <el-tooltip
          v-show="toDoList[data.day]"
          class="item"
          effect="dark"
          :content="toDoList[data.day]"
          placement="right"
        >
          <div class="data-cell">
              <p>{{ data.day }}</p>
              <p>{{ toDoList[data.day] }}</p>
          </div>
        </el-tooltip>
        <div v-show="!toDoList[data.day]">{{ data.day }}</div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curDate: new Date(),
      toDoList: {
        "2020-09-01":
          "提示文字提示文字提示文字提示文字提示文字提示文字提示文字",
        "2020-09-06":
          "提示文字提示文字提示文字提示文字提示文字提示文字提示文字",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#userToDo {
  .data-cell {
    width: 100%;
    height: 100%;
  }
}
</style>