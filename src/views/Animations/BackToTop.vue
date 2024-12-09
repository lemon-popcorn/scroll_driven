<template>
  <div class="wrap">
    <a
      class="back"
      href="#"
    ></a>
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
  name: 'BackToTop',
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
    animation-timeline: view(100% 0);
  }

  .back {
    position: fixed;
    right: 10px;
    bottom: 10px;
    background-color: royalblue;
    border-radius: 4px;
    width: 40px;
    height: 40px;
    animation: back-progress 1s linear forwards;
    animation-timeline: scroll();
    animation-range: entry 0 500px;
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

  @keyframes back-progress {
    from {
      // transform: translateY(150%);
      // transform: translateX(150px);
      opacity: 0;
    }
    to {
      // transform: translateY(0%);
      // transform: translateX(0);
      opacity: 1;
    }
  }
}
</style>
