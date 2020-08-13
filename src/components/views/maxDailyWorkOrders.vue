<template>
  <div class="maxOrder-wrapper">
    <div class="maxOrder-img">
      <span class="maxOrder-num">45</span>
      <span class="maxOrder-text">单</span>
    </div>
    <div class="maxOrder-container">
      <div class="maxOrder-date">2019年12月31日</div>
      <div class="maxOrder-name">客户名称</div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.maxOrder-wrapper {
  width: 100%;
  height: 100%;
  padding: 0 15px;
  box-sizing: border-box;
}

.maxOrder-img {
  width: 25%;
  height: 100%;

  background: center / contain no-repeat url('../assets/images/maxOrderWork-background.png');
  position: relative;
  float: left;
  .maxOrder-num {
    position: absolute;
    top: 45%;
    left: 43%;
    transform: translate(-50%, -50%);
    color: #cd5e0c;
    font-size: 16px;
    font-weight: bolder;
  }
  .maxOrder-text {
    position: absolute;
    top: 46%;
    left: 70%;
    transform: translate(-50%, -50%);
    color: #cd5e0c;
    font-size: 12px;
  }
}

.maxOrder-container {
  position: relative;
  width: 75%;
  height: 100%;
  margin-left: 25%;
  text-align: center;
  color: #fff;
}

.maxOrder-date {
  width: 100%;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0)
  font-size: 14px;
}

.maxOrder-name {
  width: 100%;
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, 0)
  font-size: 16px;
}
</style>