<template>
  <div class="wrap">
    <div class="progress"></div>
    <div class="content">
      <span class="text">哈</span>
      <span class="text">哈</span>
      <span class="text">哈</span>
      <span class="text">哈</span>
      <span class="text">哈</span>
      <span class="text">哈</span>
      <span class="text">哈</span>
      <span class="text">哈</span>
      <span class="text">哈</span>
      <span class="text">哈</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollDrivenRow',
}
</script>

<style lang="less" scoped>
.wrap {
  display: flex;
  overflow-x: scroll;
  scroll-timeline: --scrollcontainer inline;

  .progress {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background-color: #f44336;
    transform-origin: 0 50%;
    animation: auto grow-progress linear forwards;
    animation-timeline: --scrollcontainer;
  }

  .content {
    display: flex;
    flex-direction: row;

    .text {
      display: inline-block;
      flex-shrink: 0;
      width: 200px;
      height: 200px;
      line-height: 200px;
      margin: 10px;
      font-size: 36px;
      text-align: center;
      background-color: aquamarine;
    }
  }

  @keyframes grow-progress {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
}
</style>
