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
    name: 'AnimationsInfinite',
    path: '/Infinite',
    component: () => import('@/views/Animations/Infinite.vue'),
  },
  {
    name: 'AnimationsScrollDriven',
    path: '/ScrollDriven',
    component: () => import('@/views/Animations/ScrollDriven.vue'),
  },
  {
    name: 'ScrollDrivenRow',
    path: '/ScrollDrivenRow',
    component: () => import('@/views/Animations/ScrollDrivenRow.vue'),
  },
  {
    name: 'ViewDriven',
    path: '/ViewDriven',
    component: () => import('@/views/Animations/ViewDriven.vue'),
  },
  {
    name: 'BackToTop',
    path: '/BackToTop',
    component: () => import('@/views/Animations/BackToTop.vue'),
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
    name: 'AnimationBezierCurve',
    path: '/AnimationBezierCurve',
    component: () => import('@/views/FinalEffect/BezierCurveAnimation.vue'),
  },
  {
    name: 'ScrollDrivenBezierCurve',
    path: '/ScrollDrivenBezierCurve',
    component: () => import('@/views/FinalEffect/BezierCurveScrollDriven.vue'),
  },
  {
    name: 'ScrollDrivenParagraph',
    path: '/ScrollDriveParagraphn',
    component: () => import('@/views/FinalEffect/ParagraphScrollDriven.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
})

export default router
