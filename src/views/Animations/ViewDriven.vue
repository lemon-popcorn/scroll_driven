<template>
  <div class="wrap">
    <div class="text">哈</div>
    <div class="text">哈</div>
    <div class="text">哈</div>
    <div class="text">哈</div>
    <div class="text">哈</div>
    <div class="text">哈</div>
    <div class="text">哈</div>
    <div class="text">哈</div>
    <div class="text">哈</div>
    <div class="text">哈</div>
    <div class="text">哈</div>
    <div class="text">哈</div>
    <div class="text">哈</div>
    <div class="text">哈</div>
    <div class="text">哈</div>
    <div class="text">哈</div>
    <div class="text">哈</div>
    <div class="text">哈</div>
    <div class="text">哈</div>
    <div class="text">哈</div>
  </div>
</template>

<script>
export default {
  name: 'ViewDriven',
}
</script>

<style lang="less" scoped>
.wrap {
  .text {
    flex-shrink: 0;
    width: 400px;
    height: 100px;
    line-height: 100px;
    margin: 10px;
    font-size: 36px;
    text-align: center;
    background-color: aquamarine;
    animation: appear 1s linear both;
    // animation-timeline: view();
    // animation-timeline: view(40% 0);
    animation-timeline: view(100% 0);
  }
}

@keyframes appear {
  from {
    opacity: 0;
    transform: scaleX(0);
  }
  to {
    opacity: 1;
    transform: scaleX(1);
  }
}
</style>
