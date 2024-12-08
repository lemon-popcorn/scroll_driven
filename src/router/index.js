import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    name: 'InfiniteAnimations',
    path: '/Infinite',
    component: () => import('@/views/Animations/Infinite.vue'),
  },
  {
    name: 'ScrollDrivenAnimations',
    path: '/ScrollDriven',
    component: () => import('@/views/Animations/ScrollDriven.vue'),
  },
  {
    name: 'MotionPathStraightLine',
    path: '/StraightLine',
    component: () => import('@/views/MotionPath/StraightLine.vue'),
  },
  {
    name: 'MotionPathBrokenLine',
    path: '/BrokenLine',
    component: () => import('@/views/MotionPath/BrokenLine.vue'),
  },
  {
    name: 'MotionPathBezierCurve',
    path: '/BezierCurve',
    component: () => import('@/views/MotionPath/BezierCurve.vue'),
  },
  {
    name: 'BezierCurveAnimation',
    path: '/BezierCurveAnimation',
    component: () => import('@/views/ScrollDriven/BezierCurveAnimation.vue'),
  },
  {
    name: 'BezierCurveScrollDriven',
    path: '/BezierCurveScrollDriven',
    component: () => import('@/views/ScrollDriven/BezierCurveScrollDriven.vue'),
  },
  {
    name: 'ParagraphScrollDriven',
    path: '/ParagraphScrollDriven',
    component: () => import('@/views/ScrollDriven/ParagraphScrollDriven.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
})

export default router
