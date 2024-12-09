本文，我们将一起利用纯 CSS，实现如下这么个酷炫的效果：

![](https://cdn.nlark.com/yuque/0/2024/gif/27028850/1733653185965-5e477721-9cf9-4ecc-aac2-0d0d0502780a.gif)

<h2 id="1d70541b">什么是滚动驱动动画（Scroll-driven Animations）？</h2>
接下来，我们通过一个例子，快速上手滚动驱动动画。

首先，我们来实现这么一个滚动进度指示器效果：

![](https://cdn.nlark.com/yuque/0/2024/gif/27028850/1733192199565-390ab120-f43d-4f68-899b-809db0bddaae.gif)

注意看 GIF 图的上方，有一个黄色进度条，可以通过滚动，改变黄色进度条的进度状态。这个也就是我们说的滚动指示器效果。

在之前，这个效果利用纯 CSS 是不太好实现的，但是有了 animation-timeline 之后，一切都将变得非常轻松。

假设我们有如下结构：

```vue
<template>
  <div class="wrap">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
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
  import HelloWorld from '../components/HelloWorld.vue'

  export default {
    name: 'Test_1',
    components: {
      HelloWorld,
    },
  }
</script>

<style>
  .wrap {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

```

其中，`<font style="color:rgb(30, 107, 184);">.wrap</font>` 有非常多的内容，其长度远远超过 `<font style="color:rgb(30, 107, 184);">100vh</font>`，也就是一个屏幕的高度。因此，整个页面是可以进行滚动的：

![](https://cdn.nlark.com/yuque/0/2024/gif/27028850/1733191997533-2610b0c8-329e-47e9-ac8e-7493af658fd6.gif)

好，接下来，我们需要加上进度条，实现的方式有非常多种，这里我通过给 `<font style="color:rgb(30, 107, 184);">.wrap</font>` 添加一个伪元素，将进度条的效果设置给这个伪元素，代码也非常简单：

```css
.wrap::before {
  content: "";
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
```

这里，利用元素的缩放，从 `<font style="color:rgb(30, 107, 184);">transform: scaleX(0)</font>` 到  `<font style="color:rgb(30, 107, 184);">transform: scaleX(1)</font>` 的变化，实现了进度条的动画效果。

只不过，目前是一个无限动画，一次动画效果持续 3 秒 -- `<font style="color:rgb(30, 107, 184);">animation: scale 3s linear infinite</font>`：

![](https://cdn.nlark.com/yuque/0/2024/gif/27028850/1733191945890-f231d7ff-c383-4179-8a57-7ddda4758ca8.gif)

好，铺垫到这里，接下来终于要轮到 **<font style="color:#1e6bb8;">animation-timeline </font>**登场了。

上述的动画效果，目前是由时间进行控制的，持续时长为 3s，而我们的目标，就是利用滚动的效果控制整个动画。

我们只需要简单的改造一下代码：

```css
.wrap::before {
    // ...
    animation: scale 3s linear;
    animation-timeline: scroll();
    transform-origin: 0 50%;
}
```

![](https://cdn.nlark.com/yuque/0/2024/gif/27028850/1733192199565-390ab120-f43d-4f68-899b-809db0bddaae.gif)

这就是滚动驱动。

<h2 id="TOmoy">CSS 滚动驱动动画</h2>
大家可能知道，传统 `**<font style="color:#1e6bb8;">JS</font>**` 监听滚动有一些问题，如下

+ 现代浏览器在单独的进程上执行滚动，因此只能异步传递滚动事件。
+ 由于是异步传递，因此主线程动画容易出现卡顿

因此，为了解决滚动卡顿的问题，CSS 滚动驱动动画应运而生。那么，什么是 CSS 滚动驱动动画？

默认情况下，动画是**<font style="color:#1e6bb8;">「随着时间的流逝」</font>**而播放的。

**<font style="color:#1e6bb8;">「CSS 滚动驱动动画」</font>**指的是将**<font style="color:#1e6bb8;">「动画的执行过程由页面滚动」</font>**进行接管，也就是这种情况下，**<font style="color:#1e6bb8;">「动画只会跟随页面滚动的变化而变化」</font>**，也就是滚动多少，动画就执行多少，**<font style="color:#1e6bb8;">「时间不再起作用」</font>**。

**<font style="color:#1e6bb8;">animation-timeline</font>**，表示**<font style="color:#1e6bb8;">「动画时间线」</font>**（或者叫时间轴），用于控制 CSS 动画进度的时间线，是必不可少的一个属性。

![](https://cdn.nlark.com/yuque/0/2024/jpeg/27028850/1733196895399-c44d2959-bf4b-4095-8581-49e3d68ada99.jpeg)

默认值是`**<font style="color:#1e6bb8;">auto</font>**`，也是就传统的时间线。下面是它一些关键词

```css
/* 关键词 */
animation-timeline: none;
animation-timeline: auto;
/* 命名时间线 */
animation-timeline: --timeline_name;

/* 滚动时间线 */
animation-timeline: scroll();
animation-timeline: scroll(scroller axis);

/* 视图时间线 */
animation-timeline: view();
animation-timeline: view(axis inset);
```

是不是有点混乱？不要慌，实际滚动场景千千万，这里可以分为两大类：一类是**<font style="color:#1e6bb8;">「滚动进度时间线」</font>**，也就是上面的关键词`**<font style="color:#1e6bb8;">scroll()</font>**`，还有一类是**<font style="color:#1e6bb8;">「视图进度时间线」</font>**，也就是关键词`**<font style="color:#1e6bb8;">view()</font>**`。

两者形式对应两种不同的应用场景，这是什么意思呢？下面一一介绍

<h2 id="0592d2bb">CSS 滚动进度时间线</h2>
**<font style="color:#1e6bb8;">「滚动进度时间线（</font>**`**<font style="color:#1e6bb8;">scroll progress timeline</font>**`**<font style="color:#1e6bb8;">）」</font>**。表示页面或者容器滚动，**<font style="color:#1e6bb8;">「将滚动进度映射到动画进度上」</font>**。起始滚动位置代表 `**<font style="color:#1e6bb8;">0%</font>**` 进度，结束滚动位置代表 `**<font style="color:#1e6bb8;">100%</font>**` 进度，下面是一个可视化演示

**<font style="color:#1e6bb8;">https://scroll-driven-animations.style/tools/scroll-timeline/progress/</font>**

![](https://cdn.nlark.com/yuque/0/2024/gif/27028850/1733196966829-3d620f45-468a-426f-b8b1-1631b4c6ef7a.gif)

在上面的进度条例子中，我们用到的就是`**<font style="color:#1e6bb8;">scroll progress timeline</font>**`，因为我们监听的就是页面的滚动

```css
animation-timeline: scroll();
```

这里的`**<font style="color:#1e6bb8;">scroll()</font>**`是一个简写，可以传递两个参数，分别是`**<font style="color:#1e6bb8;"><scroller></font>**`和`**<font style="color:#1e6bb8;"><axis></font>**`

`**<font style="color:#1e6bb8;"><scroller></font>**`表示滚动容器，支持以下几个关键值

+ `**<font style="color:#1e6bb8;">nearest</font>**`：使用最近的祖先滚动容器*（默认）*
+ `**<font style="color:#1e6bb8;">root</font>**`：使用文档视口作为滚动容器。
+ `**<font style="color:#1e6bb8;">self</font>**`：使用元素本身作为滚动容器。

`**<font style="color:#1e6bb8;"><axis></font>**`表示滚动方向，支持以下几个关键值

+ `**<font style="color:#1e6bb8;">block</font>**`：滚动容器的块级轴方向*（默认）*。
+ `**<font style="color:#1e6bb8;">inline</font>**`：滚动容器内联轴方向。
+ `**<font style="color:#1e6bb8;">y</font>**`：滚动容器沿 y 轴方向。
+ `**<font style="color:#1e6bb8;">x</font>**`：滚动容器沿 x 轴方向。

```css
/* 无参数 */
animation-timeline: scroll();

/* 设置滚动容器 */
animation-timeline: scroll(nearest); /* 默认 */
animation-timeline: scroll(root);
animation-timeline: scroll(self);

/* 设置滚动方向 */
animation-timeline: scroll(block); /* 默认 */
animation-timeline: scroll(inline);
animation-timeline: scroll(y);
animation-timeline: scroll(x);

/* 同时设置 */
animation-timeline: scroll(block nearest); /* 默认 */
animation-timeline: scroll(inline root);
animation-timeline: scroll(x self);
```

> 需要注意的是，这里语法容错性比较强，没有顺序要求，会自动识别
>

因此，如果需要监听横向滚动，可以这样

```css
animation-timeline: scroll(inline);
```

不知大家发现没，前面的滚动容器只有三个关键词，并不能通过`**<font style="color:#1e6bb8;">#id</font>**`方式任意指定滚动容器，真的能满足所有需求吗？

当然不行！有时候结构稍微复杂一点，自动查找就不适用了，并且这里的**<font style="color:#1e6bb8;">「最近祖先滚动容器还受到绝对定位的影响」</font>**，因此，我们还需要手动去指定滚动容器。

官方的解决方式是**<font style="color:#1e6bb8;">「创建一个带有名称的时间线」</font>**，具体做法是，在**<font style="color:#1e6bb8;">「滚动容器」</font>**上添加一个属性**<font style="color:#1e6bb8;">scroll-timeline-name</font>**，这个属性值必须以`**<font style="color:rgb(145, 109, 213);">--</font>**`开头，就像 CSS 变量一样，还可以通过**<font style="color:#1e6bb8;">scroll-timeline-axis</font>**设置滚动方向，此时的`**<font style="color:#1e6bb8;">animation-timeline</font>**`就不用默认的`**<font style="color:#1e6bb8;">scroll()</font>**`了，而是改用前面设置的变量，示意如下

```css
@keyframes animate-it { … }

/*滚动容器*/
.scroller {
  scroll-timeline-name: --my-scroller;
  scroll-timeline-axis: inline;
}

.scroller .subject {
  animation: animate-it linear;
  animation-timeline: --my-scroller;
}
```

这里的`**<font style="color:#1e6bb8;">scroll-timeline-axis</font>**`和`**<font style="color:#1e6bb8;">scroll-timeline-name</font>**`还可以简写成一个属性 **<font style="color:#1e6bb8;">scroll-timeline</font>**

```css
scroll-timeline-name: --my-scroller;
scroll-timeline-axis: inline;
/**可简写为**/
scroll-timeline: --my-scroller inline;
```

下面来看一个横向滚动的例子，刚好可以把上面的几个新概念都用上。

```vue
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
  name: 'RowScrollDriven',
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

```

![](https://cdn.nlark.com/yuque/0/2024/gif/27028850/1733662536302-ab5b694b-cbca-4c84-bb02-640af7c3172c.gif)

<h2 id="e3436d84">CSS 视图进度时间线</h2>
**<font style="color:rgb(56, 56, 56);">视图进度时间线（</font>**`**<font style="color:#1e6bb8;">view progress timeline</font>**`**<font style="color:rgb(56, 56, 56);">）</font>**<font style="color:rgb(56, 56, 56);">。这个名字有些难以理解，其实表示的是一个元素出现在页面视野范围内的进度，也就是关注的是元素自身位置。元素刚刚出现之前代表 </font>`**<font style="color:#1e6bb8;">0%</font>**`<font style="color:rgb(56, 56, 56);"> 进度，元素完全离开之后代表 </font>`**<font style="color:#1e6bb8;">100%</font>**`<font style="color:rgb(56, 56, 56);"> 进度，下面是一个可视化演示</font>

![](https://cdn.nlark.com/yuque/0/2024/gif/27028850/1733662665203-851714a9-3fdb-459a-aaa4-9201472d966f.gif)

和前面的`**<font style="color:#1e6bb8;">scroll progress time</font>**`语法类似，也有一个快捷语法

```css
animation-timeline: view()
```

由于无需关注滚动容器，所以它的参数也不一样，分别是`**<font style="color:#1e6bb8;"><axis></font>**`和`**<font style="color:#1e6bb8;"><inset></font>**`

`**<font style="color:#1e6bb8;"><axis></font>**`表示滚动方向，支持以下几个关键值

+ `**<font style="color:#1e6bb8;">block</font>**`：滚动容器的块级轴方向*（默认）*。
+ `**<font style="color:#1e6bb8;">inline</font>**`：滚动容器内联轴方向。
+ `**<font style="color:#1e6bb8;">y</font>**`：滚动容器沿 y 轴方向。
+ `**<font style="color:#1e6bb8;">x</font>**`：滚动容器沿 x 轴方向。

`<**<font style="color:#1e6bb8;">inset></font>**`表示调整元素的视区范围，有点类似`**<font style="color:#1e6bb8;">scroll-padding</font>**`，支持两个值，表示开始和结束两个范围。

```css
animation-timeline: view(auto); /* 默认值 */
animation-timeline: view(20%);
animation-timeline: view(200px);
animation-timeline: view(20% 40%);
animation-timeline: view(20% 200px);
animation-timeline: view(100px 200px);
animation-timeline: view(auto 200px);
```

这里的`**<font style="color:#1e6bb8;"><inset></font>**`还可以用 [view-timeline-inset](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2Fview-timeline-inset) 单独来表示，不过需要注意的是，这种用法要使用命名的`**<font style="color:#1e6bb8;">view progress time</font>**`，如下

```css
scroll-timeline: --my-scroller block;
view-timeline-inset: 20% 200px;
animation-timeline: --my-scroller;
```

下面来看一个例子，有一个列表

```vue
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
    }
  }
</style>

```

效果如下：

![](https://cdn.nlark.com/yuque/0/2024/png/27028850/1733664314788-ad9d9bc9-ee03-4088-baeb-ae4d3dfda7e1.png)

<font style="color:rgb(56, 56, 56);">现在，我们添加一个淡入和缩放的动画</font>

```css
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
```

<font style="color:rgb(56, 56, 56);">然后通过</font>`**<font style="color:#1e6bb8;">animation-time</font>**`<font style="color:rgb(56, 56, 56);">绑定在每个元素上，因为我们想做一个元素进入的动画，所以要用到</font>`**<font style="color:#1e6bb8;">view progress timeline</font>**`

```css
.text{
  ...,
  animation: appear 1s linear both;
  animation-timeline: view();
}
```

<font style="color:rgb(56, 56, 56);">可以得到这样的效果</font>

![](https://cdn.nlark.com/yuque/0/2024/gif/27028850/1733664529923-0d5865ed-6e53-40a4-bb64-0baf22bdd47d.gif)

<font style="color:rgb(56, 56, 56);">效果是出来了，不过好像有点太过了，太夸张了，可以看到，</font>**<font style="color:rgb(56, 56, 56);">每个元素在滚动出现到离开的过程中都完整的执行了我们定义的动画</font>**<font style="color:rgb(56, 56, 56);">。那么，有没有办法让这个范围变小一点呢？默认的范围如下</font>

![](https://cdn.nlark.com/yuque/0/2024/png/27028850/1733664614325-1be3ad8a-6e85-4a05-93e4-a38ef6d9d61f.png)

<font style="color:rgb(56, 56, 56);">这里就需要用到</font>`**<font style="color:#1e6bb8;">view</font>**`<font style="color:rgb(56, 56, 56);">的第二个参数</font>`**<font style="color:#1e6bb8;"><inset></font>**`<font style="color:rgb(56, 56, 56);">了，比如设置</font>`**<font style="color:#1e6bb8;">40% 0</font>**`<font style="color:rgb(56, 56, 56);">表示调整视区范围，相当于将滚动容器上边距减少了 </font>`**<font style="color:#1e6bb8;">40%</font>**`<font style="color:rgb(56, 56, 56);">，当滚动到视区上面</font>`**<font style="color:#1e6bb8;">40%</font>**`<font style="color:rgb(56, 56, 56);">的时候就完成了动画（默认是滚动到</font>`**<font style="color:#1e6bb8;">0%</font>**`<font style="color:rgb(56, 56, 56);">，也就是完全离开的时候）</font>

```css
.text {
  animation-timeline: view(40% 0);
}
```

![](https://cdn.nlark.com/yuque/0/2024/png/27028850/1733664728775-b0b17102-64aa-42af-b46b-8668ea0aeaec.png)

![](https://cdn.nlark.com/yuque/0/2024/gif/27028850/1733664834439-100d68e3-e8ea-4d86-a13a-e3cdc2c9e886.gif)

<font style="color:rgb(56, 56, 56);">还可以更加激进一点，设置成</font>`**<font style="color:#1e6bb8;">100%</font>**`<font style="color:rgb(56, 56, 56);">，相当于元素一旦完全进入，动画就执行完成了，这样元素出现动画会更加和谐</font>

```css
.text {
  animation-timeline: view(100% 0);
}
```

![](https://cdn.nlark.com/yuque/0/2024/png/27028850/1733664979427-56443d08-9350-4ff1-a6b9-5a3861edd674.png)

<font style="color:rgb(56, 56, 56);">效果如下，这样看起来就没那么夸张了</font>

![](https://cdn.nlark.com/yuque/0/2024/gif/27028850/1733665039271-988f4bd2-e70b-4bf8-b096-fa05ab2842f0.gif)

利用滚动驱动还可以实现回到顶部按钮的显示效果

![](https://cdn.nlark.com/yuque/0/2024/gif/27028850/1733666517465-d8ad7ba7-4e4f-4d66-be34-002bda71dbd4.gif)

当然，整个滚动驱动动画（Scroll-driven Animations）的内容还是非常多的，本文简单介绍一下基本使用。还有许多扩展内容，如果大家感兴趣可以进一步了解。

![](https://cdn.nlark.com/yuque/0/2024/png/27028850/1733665348455-19b56513-0c59-4fd1-af19-dd506530781f.png)

<h2 id="e4867a86">motion-path 运动路径动画</h2>
好，到目前位置，我们都还在铺垫内容，本文的核心是**当路径动画遇到滚动驱动**。

那么，了解完滚动驱动动画之后，我们再来了解一下，什么是**运动路径动画 -- motion-path**。

motion-path 的介绍可以看这个文档 -- [探秘神奇的运动路径动画 Motion Path](http://mp.weixin.qq.com/s?__biz=Mzg2MDU4MzU3Nw==&mid=2247486196&idx=1&sn=cc8cc2bf233caae450afd89a9b140a8e&chksm=ce256902f952e014355e4f614db8e3a3a6679dee1293002d10ab21fc7c027afaa1f6951d0d28&scene=21#wechat_redirect)

什么是 CSS Motion Path 运动路径？利用这个规范规定的属性，我们**可以控制元素按照特定的路径进行位置变换的动画**。并且，这个路径可以是非常复杂的一条路径。

<h3 id="ca2c36d3">初窥 motion-path</h3>
CSS Motion Path 规范主要包含以下几个属性：

+ `<font style="color:rgb(30, 107, 184);">offset-path</font>`<font style="color:rgb(1, 1, 1);">：接收一个 SVG 路径（与 SVG 的path、CSS 中的 clip-path 类似），指定运动的几何路径</font>
+ `<font style="color:rgb(30, 107, 184);">offset-distance</font>`<font style="color:rgb(1, 1, 1);">：控制当前元素基于 </font>`<font style="color:rgb(30, 107, 184);">offset-path</font>`<font style="color:rgb(1, 1, 1);"> 运动的距离</font>
+ `<font style="color:rgb(30, 107, 184);">offset-position</font>`<font style="color:rgb(1, 1, 1);">：指定 </font>`<font style="color:rgb(30, 107, 184);">offset-path</font>`<font style="color:rgb(1, 1, 1);"> 的初始位置</font>
+ `<font style="color:rgb(30, 107, 184);">offset-anchor</font>`<font style="color:rgb(1, 1, 1);">：定义沿 </font>`<font style="color:rgb(30, 107, 184);">offset-path</font>`<font style="color:rgb(1, 1, 1);"> 定位的元素的锚点。 这个也算好理解，运动的元素可能不是一个点，那么就需要指定元素中的哪个点附着在路径上进行运动</font>
+ `<font style="color:rgb(30, 107, 184);">offset-rotate</font>`<font style="color:rgb(1, 1, 1);">：定义沿 </font>`<font style="color:rgb(30, 107, 184);">offset-path</font>`<font style="color:rgb(1, 1, 1);"> 定位时元素的方向，说人话就是运动过程中元素的角度朝向</font>

下面，我们使用 Motion Path 实现一个简单的直线位移动画。

```vue
<template>
  <div class="wrap"></div>
</template>

<script>
  export default {
    name: 'MotionPath',
  }
</script>

<style lang="less" scoped>
  .wrap {
    width: 60px;
    height: 60px;
    background: linear-gradient(#fc0, #f0c);
    animation: move 2000ms infinite alternate ease-in-out;
    offset-path: path('M 0 0 L 100 100');
    offset-rotate: 0deg;
    offset-anchor: 0 0;
  }
  @keyframes move {
    0% {
      offset-distance: 0%;
    }
    100% {
      offset-distance: 100%;
    }
  }
</style>
```

`<font style="color:rgb(30, 107, 184);">offset-path</font>` 接收一个 SVG 的 path 路径，这里我们的路径内容是一条自定义路径 `<font style="color:rgb(30, 107, 184);">path("M 0 0 L 100 100")</font>`，翻译过来就是从 `<font style="color:rgb(30, 107, 184);">0 0</font>` 点运动到 `<font style="color:rgb(30, 107, 184);">100px 100px</font>` 点。

我们会得到如下结果：

![](https://cdn.nlark.com/yuque/0/2024/gif/27028850/1733648469961-c52718d4-9ec9-4a8c-b82a-bbb7dea16172.gif)

通过控制元素的 `<font style="color:rgb(30, 107, 184);">offset-distance</font>` 从 `<font style="color:rgb(30, 107, 184);">0%</font>` 变化到 `<font style="color:rgb(30, 107, 184);">100%</font>` 进行元素的路径动画。

当然，上述的动画是最基本的，我可以充分利用 path 的特性，增加多个中间关键帧，稍微改造下上述代码：

```css
div {
  // 只改变运动路径，其他保持一致
  offset-path: path("M 0 0 L 100 0 L 200 0 L 300 100 L 400 0 L 500 100 L 600 0 L 700 100 L 800 0");
  animation: move 2000ms infinite alternate linear;
}
@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

这里最主要还是运用了 path 中的 `<font style="color:rgb(30, 107, 184);">L</font>` 指令，得到了如下图这样一条直线路径：

![](https://cdn.nlark.com/yuque/0/2024/jpeg/27028850/1733368305545-519ac676-0b10-4761-b0c1-7c4fa580400f.jpeg)

最终的效果如下，与利用 `<font style="color:rgb(30, 107, 184);">transform: translate()</font>` 添加多个关键帧类似：

![](https://cdn.nlark.com/yuque/0/2024/gif/27028850/1733648297883-c502077b-9091-43e6-a23c-91983eed77ce.gif)

<h3 id="e5205ad7">曲线路径动画</h3>
上面的运动轨迹都是由直线构成，下面我们看看如何使用 CSS Motion Path 实现曲线路径动画。

其实原理还是一模一样，只需要在 `<font style="color:rgb(30, 107, 184);">offset-path: path()</font>` 中添加曲线相关的路径即可。

在 SVG 的 Path 中，我们取其中一种绘制曲线的方法 -- 贝塞尔曲线，譬如下述这条 path，其中的 path 为 `<font style="color:rgb(30, 107, 184);">d="M 10 80 C 80 10, 130 10, 190 80 S 300 150, 360 80"</font>`：

```html
<svg width="400" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 C 80 10, 130 10, 190 80 S 300 150, 360 80" stroke="black" fill="transparent"/>
</svg>
```

对应这样一条连续的贝塞尔曲线：

![](https://cdn.nlark.com/yuque/0/2024/png/27028850/1733368403129-c47c2985-0e07-4f05-8472-210174081fa9.png)

将对应的路径应用在 `<font style="color:rgb(30, 107, 184);">offset-path: path</font>` 中：

```vue
<template>
  <div class="wrap"></div>
</template>

<script>
  export default {
    name: 'MotionPath',
  }
</script>

<style lang="less" scoped>
  // 贝赛尔曲线
  .wrap {
    width: 60px;
    height: 60px;
    background: linear-gradient(#fc0, #f0c);
    offset-anchor: 0 0;
    offset-path: path('M 10 80 C 80 10, 130 10, 190 80 S 300 150, 360 80');
    animation: move 2000ms infinite alternate linear;
  }

  @keyframes move {
    0% {
      offset-distance: 0%;
    }
    100% {
      offset-distance: 100%;
    }
  }
</style>

```

可以得到如下运动效果：

![](https://cdn.nlark.com/yuque/0/2024/gif/27028850/1733648354220-207450da-23d2-465b-82d6-41af5bc4e152.gif)

可以看到，元素是沿着贝塞尔曲线的路径进行运动的，并且，由于这次没有限制死 `<font style="color:rgb(30, 107, 184);">offset-rotate</font>`，元素的朝向也是跟随路径的朝向一直变化的。（可以联想成开车的时候，车头一直跟随道路会进行变化的，带动整个车身的角度变化）

<h2 id="10b11798">Amazing！路径动画配合滚动驱动</h2>
好，终于，到这里，你应该已经大致了解了什么是**路径动画 motion-path**，什么是**滚动驱动 scroll-driven**。

我们可以尝试把这两个东西组合在一起。

假设，我们有这么个结构：

```vue
<template>
  <div class="wrap">
    <div class="g-container">
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
  padding: 0 250px;
  box-sizing: border-box;
  width: 100%;
  height: 2000px;

  .ele {
    position: absolute;
    width: 40px;
    height: 40px;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    background: linear-gradient(270deg, #65d060, #0887ec);
    offset-path: path('M 350 40 C 1000 1000, -350 1000, 350 1960');
    animation: move 4s linear infinite;
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
}
</style>

```

简单解释一下：

1. <font style="color:rgb(1, 1, 1);">为了方便理解，我把 body 的背景设置成了格子背景</font>
2. `<font style="color:rgb(30, 107, 184);">.g-container</font>`<font style="color:rgb(1, 1, 1);"> 是一个远比屏幕高度高的容器，方便整个页面进行滚动</font>
3. `<font style="color:rgb(30, 107, 184);">.ele</font>`<font style="color:rgb(1, 1, 1);"> 是一个小三角形</font>

目前，整个页面是这样的：

![](https://cdn.nlark.com/yuque/0/2024/png/27028850/1733645575231-b0f937f4-9b0e-4f8b-8017-47f7196fcba5.png)

下面，我们给 `<font style="color:rgb(30, 107, 184);">.ele</font>`设置一个 `<font style="color:rgb(30, 107, 184);">offset-path</font>` 路径：

```vue
<template>
  <div class="wrap">
    <div class="g-container">
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
    padding: 0 250px;
    box-sizing: border-box;
    width: 100%;
    height: 2000px;
  }

  .ele {
    position: absolute;
    width: 40px;
    height: 40px;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    background: linear-gradient(270deg, #65d060, #0887ec);
    offset-path: path("M 350 40 C 1000 1000, -350 1000, 350 1960");
    animation: move 4s linear infinite;
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
</style>

```

其中的核心就是 `<font style="color:rgb(30, 107, 184);">offset-path: path("M 350 40 C 1000 1000, -350 1000, 350 1960")</font>` 这里面，有一个利用 3 次贝塞尔曲线画出来的路径。

并且，我们给它加上了 `<font style="color:rgb(30, 107, 184);">offset-distance: 0</font>` 到 `<font style="color:rgb(30, 107, 184);">offset-distance: 100%</font>` 的动画效果，目前，整个效果是这样的：

![](https://cdn.nlark.com/yuque/0/2024/gif/27028850/1733648139101-221cd27a-be4d-4853-94e0-396552016146.gif)

可以看到，小三角形，按照特定的路径在进行运动。

为了更好的理解这个动画，我们可以利用 `<font style="color:rgb(30, 107, 184);">SVG</font>`，把这个运动的路径给画出来：

+ 起始时， `<font style="color:rgb(30, 107, 184);">stroke-dashoffset: 2108;</font>` 让路径完全不显示（由于虚线的长度等于路径的总长度）。
+ 随着动画的进行， `<font style="color:rgb(30, 107, 184);">stroke-dashoffset</font>` 会逐渐减小，直到最后为 0，此时路径被完全显示出来，仿佛路径被“描绘”出来

```vue
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
  padding: 0 250px;
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
    animation: move 4s linear infinite;
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
    animation: lineMove 4s linear infinite;
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

```

我们利用 SVG 路径，成功的将运动的路径绘制了出来，并且，利用 `<font style="color:rgb(30, 107, 184);">stroke-dasharray</font>` 和 `<font style="color:rgb(30, 107, 184);">stroke-dashoffset</font>`，实现了一条线条动画，控制它和小三角形的 motion-path 动画保持一致。

> <font style="color:black;">要看懂 </font>`<font style="color:rgb(30, 107, 184);">stroke-dasharray</font>`<font style="color:black;"> 和 </font>`<font style="color:rgb(30, 107, 184);">stroke-dashoffset</font>`<font style="color:black;"> 实现的线条动画，可能需要翻阅：</font>**<font style="color:#1e6bb8;">【Web动画】SVG 线条动画入门 </font>**<sup>**<font style="color:#1e6bb8;">[11]</font>**</sup>
>

这样，现在，我们就得到了这么一个动画效果：

![](https://cdn.nlark.com/yuque/0/2024/gif/27028850/1733648022904-4885ecc3-3a53-4e3b-b32a-7af752d40470.gif)

到这里，其实还没有运用上滚动驱动，现在，我们把上述经由时间控制的动画效果，交给页面的滚动。

简单改造上述 CSS 代码：

```css
.ele {
  position: absolute;
  width: 40px;
  height: 40px;
  clip-path: polygon(0 0, 100% 50%, 0 100%);
  offset-path: path("M 350 40 C 1000 1000, -350 1000, 350 1960");
  background: linear-gradient(270deg, #65d060, #0887ec);
  animation: move 4s linear;
  animation-timeline: scroll(root);
}

#svgpath {
  stroke: #9bc9de;
  stroke-width: 3px;
  stroke-dasharray: 2108, 2108;
  animation: lineMove 4s linear;
  animation-timeline: scroll(root);
}
```

改动比较简单：

1. <font style="color:rgb(1, 1, 1);">去掉两个动画效果的 infinite 关键字</font>
2. <font style="color:rgb(1, 1, 1);">添加上 </font>`<font style="color:rgb(30, 107, 184);">animation-timeline: scroll(root)</font>`

此时，我们就可以利用页面的滚动，控制整个动画效果：

![](https://cdn.nlark.com/yuque/0/2024/gif/27028850/1733649550917-f46a3aaf-c77c-40e9-93f0-e8ea8d8a1ef6.gif)

在灵活掌握了上述内容后，我们就可以利用路径动画及滚动驱动创造出各种妙趣横生的动画效果！

下面是我综合利用各种技巧，实现的一个纯 CSS 滚动动画效果，感受一下：

![](https://cdn.nlark.com/yuque/0/2024/gif/27028850/1733653185965-5e477721-9cf9-4ecc-aac2-0d0d0502780a.gif)

是不是非常的酷炫有意思，到现在，这种效果已经是纯 CSS 代码就能实现完成的了！

<h2 id="can-i-use---css-scroll-driven">Can i Use - CSS Scroll Driven</h2>
来看看 CSS Scroll Driven 相关的 API 目前的兼容性如何？截止至 2024-12-02，基于 **<font style="color:#1e6bb8;">Can i Use - Animation-timeline </font>**的兼容性如下：

![](https://cdn.nlark.com/yuque/0/2024/png/27028850/1733192369643-3d8b5ff7-0c4c-4493-91b8-e6036a0afa41.png)

可以看到 animation-timeline 已经从 Chrome 115 版本正式得到支持，并且其它浏览器也已经开始大力跟进。



