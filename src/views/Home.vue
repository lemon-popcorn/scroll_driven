<template>
  <div>
    <ul>
      <li
        v-for="item in pagesList"
        :key="item.routeName"
        @click="() => jumpRoute(item.routeName)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      pagesList: [
        {
          title: '初识滚动驱动-无限动画',
          routeName: 'InfiniteAnimations',
        },
        {
          title: '初识滚动驱动-滚动动画',
          routeName: 'ScrollDrivenAnimations',
        },
        {
          title: '路径运动-直线',
          routeName: 'MotionPathStraightLine',
        },
        {
          title: '路径运动-折线',
          routeName: 'MotionPathBrokenLine',
        },
        {
          title: '路径运动-贝塞尔曲线',
          routeName: 'MotionPathBezierCurve',
        },
        {
          title: '路径运动加滚动驱动-沿贝塞尔曲线运动动画',
          routeName: 'BezierCurveAnimation',
        },
        {
          title: '路径运动加滚动驱动-沿贝塞尔曲线滚动动画',
          routeName: 'BezierCurveScrollDriven',
        },
        {
          title: '路径运动加滚动驱动-实现最终效果',
          routeName: 'ParagraphScrollDriven',
        },
      ],
    }
  },
  methods: {
    jumpRoute(routeName) {
      this.$router.push({
        name: routeName,
      })
    },
  },
}
</script>

<style lang="less" scoped>
li {
  margin: 6px 0;
  width: fit-content;
  background-color: rgb(234, 224, 234);
}
li:hover {
  cursor: pointer;
}
</style>
