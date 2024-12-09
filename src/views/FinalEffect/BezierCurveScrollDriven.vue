<template>
  <div class="wrap">
    <div class="g-container">
      <!-- 运动路径 -->
      <svg
        class="g-svg"
        width="400"
        height="160"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="svgpath"
          d="M 350 40 C 1000 1000, -350 1000, 350 1960"
          stroke="black"
          fill="transparent"
        />
      </svg>
      <div class="ele"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BezierCurveScrollDriven',
}
</script>

<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 100%;
  background: conic-gradient(
    #fff,
    #fff 90deg,
    #ddd 90deg,
    #ddd 180deg,
    #fff 180deg,
    #fff 270deg,
    #ddd 270deg
  );
  background-size: 50px 50px;
}

.g-container {
  // padding: 0 250px;
  box-sizing: border-box;
  width: 100%;
  height: 2000px;
  position: relative;

  .ele {
    position: absolute;
    top: 0;
    width: 40px;
    height: 40px;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    background: linear-gradient(270deg, #65d060, #0887ec);
    offset-path: path('M 350 40 C 1000 1000, -350 1000, 350 1960');
    animation: move 4s linear;
    animation-timeline: scroll(root);
  }

  @keyframes move {
    0% {
      offset-distance: 0%;
    }
    50% {
      transform: scale(2.5);
    }
    100% {
      offset-distance: 100%;
    }
  }

  // 运动路径
  .g-svg {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 2000px;
  }

  #svgpath {
    stroke: #9bc9de; // 描边颜色
    stroke-width: 3px; // 描边宽度
    stroke-dasharray: 2108, 2108; // 虚线的模式,实线长度 虚线长度
    stroke-dashoffset: 2108; // 控制虚线的偏移量
    animation: lineMove 4s linear;
    animation-timeline: scroll(root);
  }

  @keyframes lineMove {
    0% {
      stroke-dashoffset: 2108;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
}
</style>
