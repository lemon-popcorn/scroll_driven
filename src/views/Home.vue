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
          routeName: 'AnimationsInfinite',
        },
        {
          title: '初识滚动驱动-滚动动画',
          routeName: 'AnimationsScrollDriven',
        },
        {
          title: '滚动驱动-滚动进度时间线',
          routeName: 'ScrollDrivenRow',
        },
        {
          title: '滚动驱动-视图进度时间线',
          routeName: 'ViewDriven',
        },
        {
          title: '滚动驱动-回到顶部效果',
          routeName: 'BackToTop',
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
          routeName: 'AnimationBezierCurve',
        },
        {
          title: '路径运动加滚动驱动-沿贝塞尔曲线滚动动画',
          routeName: 'ScrollDrivenBezierCurve',
        },
        {
          title: '路径运动加滚动驱动-实现最终效果',
          routeName: 'ScrollDrivenParagraph',
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
  background-color: rgb(190, 199, 234);
  padding: 4px;
}
li:hover {
  cursor: pointer;
}
</style>
