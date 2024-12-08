<template>
  <div class="g-container">
    <svg
      class="g-svg"
      width="400"
      height="160"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="svgpath"
        d="M 350 40 C 1200 1000, -550 1000, 350 1960"
        stroke="black"
        fill="transparent"
      />
    </svg>
    <div class="ball"></div>
    <div class="point point1"></div>
    <div class="point point2"></div>
    <div class="point point3"></div>
    <h2>CSS Scroll Driven</h2>
    <p class="p1">
      CSS Scroll Driven refers to a technique where CSS is used to create visual
      effects or animations that are triggered by the scrolling behavior of the
      user. It involves manipulating CSS properties based on the scroll position
      to create dynamic and interactive elements on a webpage.
    </p>
    <p class="p2">
      1. Parallax scrolling: By adjusting background positions or opacity based
      on the scroll position.<br />
      2.Sticky navigation: The navigation bar can have its style modified as the
      user scrolls, such as changing its background color, size, or position to
      enhance usability and improve the user experience.
    </p>
    <p class="p3">
      In summary, CSS Scroll Driven involves using CSS and JavaScript to create
      effects and animations that respond to the user's scrolling behavior. This
      technique adds interactivity and visual appeal to webpages, making them
      more engaging for users.
    </p>
  </div>
</template>

<script>
export default {
  name: 'ParagraphScrollDriven',
}
</script>

<style lang="less" scoped>
h2 {
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  top: 100px;
  font-size: 42px;
  color: #fff;
}

.g-container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 700px;
  height: 2000px;

  &::before {
    content: '';
    position: absolute;
    inset: 0 -30vw;
    background: linear-gradient(#000, purple);
  }
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

.g-svg {
  position: absolute;
  top: 0;
  left: 50%;
  width: 700px;
  height: 2000px;
  transform: translate(-50%, 0);

  #svgpath {
    stroke-dasharray: 2222, 2222;
    animation: lineMove 3s linear;
    animation-timeline: scroll(root);
    stroke-width: 2px;
    stroke: #ff5722;
  }
}
@keyframes lineMove {
  0% {
    stroke-dashoffset: 2222;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

.ball {
  position: absolute;
  width: 40px;
  height: 40px;
  clip-path: polygon(0 0, 100% 50%, 0 100%);
  offset-path: path('M 350 40 C 1200 1000, -550 1000, 350 1960');
  background: linear-gradient(270deg, #673ab7, #ff5722);
  animation: move 1s linear;
  animation-timeline: scroll(root);
  z-index: 10;
}

.point {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ff5722;
  opacity: 0;
  animation: show 1s linear forwards;
  animation-timeline: scroll(root);

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    animation: circleScale 2s infinite ease-in;
    z-index: -1;
  }
  &::after {
    animation-delay: -0.5s;
  }
}
.point1 {
  top: 510px;
  left: 570px;
}
.point2 {
  top: 910px;
  left: 370px;
}
.point3 {
  top: 1410px;
  left: 66px;
}
@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes circleScale {
  80%,
  100% {
    transform: scale(4);
    opacity: 0.1;
  }
}

p {
  position: absolute;
  padding: 16px;
  border: 4px dashed #fff;
  width: 50vw;
  color: #fff;
  font-size: 24px;
  text-align: justify;
  font-style: italic;
  opacity: 0;
  animation: textShow 1s linear forwards;
  animation-timeline: scroll(root);
}
.p1 {
  --x: -500px;
  top: 410px;
  left: 60px;
  width: 400px;
}
.p2 {
  --x: -150px;
  width: 600px;
  top: 840px;
  left: 300px;
}
.p2::before {
  content: '';
  float: left;
  width: 240px;
  height: 200px;
  shape-outside: polygon(80% 0, 90% 0, 0 90%, 0 80%); // 文本环绕
}
.p3 {
  --x: 500px;
  top: 1310px;
  left: 190px;
  width: 450px;
}
@keyframes textShow {
  0% {
    transform: translate(var(--x), 0);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}
</style>
