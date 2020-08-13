<template>
  <div class="chunk-wrapper">
    <div class="chunk-container">
      <div class="chunk-text">知识库总数</div>
      <div class="chunk-num-1">{{ num }}</div>
    </div>
    <div class="chunk-container">
      <div class="chunk-text">知识库待审</div>
      <div class="chunk-num-2">{{ num }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 10
    }
  }
}
</script>

<style lang="stylus" scoped>
  .chunk-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    .chunk-container {
      width: 35%;
      height: 80%;
      background: #29292a;
      box-shadow: 3px 3px 20px #000;
      .chunk-text {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40%;
        color: #fff;
        letter-spacing: 3px;
        text-align: center;
      }
      .chunk-num-1 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60%;
        color: #26efa8;
        font-size: 26px;
        text-align: center;
      }
      .chunk-num-2 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60%;
        color: #e7a003;
        font-size: 26px;
        text-align: center;
      }
    }
  }
</style>