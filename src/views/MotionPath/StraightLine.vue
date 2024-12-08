<template>
  <div class="wrap"></div>
</template>

<script>
export default {
  name: 'MotionPath',
}
</script>

<style lang="less" scoped>
// 直线运动
.wrap {
  width: 60px;
  height: 60px;
  background: linear-gradient(#fc0, #f0c);
  offset-rotate: 0deg;
  offset-anchor: 0 0;
  offset-path: path('M 0 0 L 100 100');
  animation: move 2000ms infinite alternate ease-in-out;
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
