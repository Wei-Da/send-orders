<template>
  <div class="header-wrapper">
    <span class="yellow">派单易</span><span class="white">数据综合大屏展示</span>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
@font-face {
  font-family: 'pangmen';
  src: url('../assets/fonts/庞门正道标题体.ttf');
  font-weight: normal;
  font-style: normal;
}

.header-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-family: 'pangmen';
  letter-spacing: 3px; 
}
.yellow {
  color: #e7a003;
}

.white {
  color: #fff;
}
</style>