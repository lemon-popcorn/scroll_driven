<template>
  <div class="wrap"></div>
</template>

<script>
export default {
  name: 'MotionPath',
}
</script>

<style lang="less" scoped>
// 贝赛尔曲线
.wrap {
  width: 60px;
  height: 60px;
  background: linear-gradient(#fc0, #f0c);
  offset-anchor: 0 0;
  offset-path: path('M 10 80 C 80 10, 130 10, 190 80 S 300 150, 360 80');
  animation: move 2000ms infinite alternate linear;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
</style>
