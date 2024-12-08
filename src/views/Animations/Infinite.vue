<template>
  <div class="wrap">
    <img
      alt="Vue logo"
      src="@/assets/logo.png"
    />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Infinite',
  components: {
    HelloWorld,
  },
}
</script>

<style lang="less" scoped>
.wrap {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

// 无限动画
.wrap::before {
  content: '';
  position: fixed;
  height: 7px;
  left: 0;
  top: 0;
  right: 0;
  background: #ffc107;
  animation: scale 3s linear infinite;
  transform-origin: 0 50%;
}

@keyframes scale {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>
