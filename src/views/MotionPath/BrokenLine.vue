<template>
  <div class="wrap"></div>
</template>

<script>
export default {
  name: 'MotionPath',
}
</script>

<style lang="less" scoped>
// 折线运动
.wrap {
  width: 60px;
  height: 60px;
  background: linear-gradient(#fc0, #f0c);
  offset-rotate: 0deg;
  offset-anchor: 0 0;
  // 只改变运动路径，其他保持一致
  offset-path: path(
    'M 0 0 L 100 0 L 200 0 L 300 100 L 400 0 L 500 100 L 600 0 L 700 100 L 800 0'
  );
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
