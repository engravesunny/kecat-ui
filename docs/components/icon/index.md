<script setup lang="ts">
import AllIcon from './allicons.vue'
</script>
<style>
  .example{
    display:flex;
    justify-content:space-around;
    align-items:center;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    padding:20px;
    font-size:20px;
  }
  .allicon{
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding:20px;
        font-size:20px;
        clear:both;
  }
  .allicon::after{
    content: "";
    display:block;
    clear:both;
  }
  .allicon .icon-items{
    float:left;
  }
  .ke-button {
      margin:10px 5px;
  }
  .icon {
        font-size:20px;
  }
  
  details > summary:first-of-type {
      font-size: 10px;
      padding: 8px 0;
      cursor: pointer;
      color: #1989fa;
  }
</style>

# Icon图标

Kecat UI 提供了一些列常用图标供用户使用

## 基础用法

<div class="example">
  <ke-icon name="tongji"></ke-icon>&nbsp;
  <ke-icon name="shijian"></ke-icon>&nbsp;
  <ke-icon name="github-fill"></ke-icon>&nbsp;
  <ke-icon name="danxuan"></ke-icon>&nbsp;
  <ke-icon name="jiantouyou1"></ke-icon>&nbsp;
  <ke-icon name="jiazai"></ke-icon>&nbsp;
  <ke-icon name="jiantoushang"></ke-icon>&nbsp;
  <ke-icon name="bianji"></ke-icon>&nbsp;
  <ke-icon name="caifu"></ke-icon>&nbsp;
  <ke-icon name="guanbi2"></ke-icon>&nbsp;
  <br />
  <br />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <ke-icon name="tongji"></ke-icon>
  <ke-icon name="shijian"></ke-icon>
  <ke-icon name="github-fill"></ke-icon>
  <ke-icon name="danxuan"></ke-icon>
  <ke-icon name="jiantouyou1"></ke-icon>
  <ke-icon name="jiazai"></ke-icon>
  <ke-icon name="jiantoushang"></ke-icon>
  <ke-icon name="bianji"></ke-icon>
  <ke-icon name="caifu"></ke-icon>
  <ke-icon name="guanbi2"></ke-icon>
  <br />
  <br />
</template>
```

</details>

## 自定义大小

默认大小继承**父元素**的font-size

<div class="example">
  <ke-icon name="fenxiang" size="30"></ke-icon>&nbsp;
  <ke-icon name="shaixuan" size="30"></ke-icon>&nbsp;
  <ke-icon name="wode" size="30"></ke-icon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <ke-icon name="shanchu"></ke-icon>&nbsp;
  <ke-icon name="querenduihao"></ke-icon>&nbsp;
  <ke-icon name="shouye"></ke-icon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <ke-icon name="xuanzhong" size="16"></ke-icon>&nbsp;
  <ke-icon name="tongxunlu" size="16"></ke-icon>&nbsp;
  <ke-icon name="saoyisao" size="16"></ke-icon>&nbsp;
  <ke-icon name="shezhi" size="16"></ke-icon>&nbsp;
  <br />
  <br />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <ke-icon name="fenxiang" size="30"></ke-icon>
  <ke-icon name="shaixuan" size="30"></ke-icon>
  <ke-icon name="wode" size="30"></ke-icon>
  <ke-icon name="shanchu"></ke-icon>
  <ke-icon name="querenduihao"></ke-icon>
  <ke-icon name="shouye"></ke-icon>
  <ke-icon name="xuanzhong" size="16"></ke-icon>
  <ke-icon name="tongxunlu" size="16"></ke-icon>
  <ke-icon name="saoyisao" size="16"></ke-icon>
  <ke-icon name="shezhi" size="16"></ke-icon>
  <br />
  <br />
</template>
```

</details>

## 自定义颜色

<div class="example">
  <ke-icon name="fenlei" color="green"></ke-icon>&nbsp;
  <ke-icon name="yinle" color="red"></ke-icon>&nbsp;
  <ke-icon name="shiyanshi1" color="blue"></ke-icon>&nbsp;
  <ke-icon name="youxiang"></ke-icon>&nbsp;
  <ke-icon name="QQ" color="#4cafe9"></ke-icon>&nbsp;
  <ke-icon name="wechat-fill" color="#4cbf00"></ke-icon>&nbsp;
  <ke-icon name="github-fill" color="#333"></ke-icon>&nbsp;
  <ke-icon name="netease-cloud-music-line" color="#e72d2c"></ke-icon>&nbsp;
  <ke-icon name="bilibili" color="#f14767"></ke-icon>&nbsp;
  <ke-icon name="jiantouyou" color="rgb(255,0,255)"></ke-icon>&nbsp;
  <br />
  <br />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <ke-icon name="fenlei" color="green"></ke-icon>
  <ke-icon name="yinle" color="red"></ke-icon>
  <ke-icon name="shiyanshi1" color="blue"></ke-icon>
  <ke-icon name="youxiang"></ke-icon>
  <ke-icon name="QQ" color="#4cafe9"></ke-icon>
  <ke-icon name="wechat-fill" color="#4cbf00"></ke-icon>
  <ke-icon name="github-fill" color="#333"></ke-icon>
  <ke-icon name="netease-cloud-music-line" color="#e72d2c"></ke-icon>
  <ke-icon name="bilibili" color="#f14767"></ke-icon>
  <ke-icon name="jiantouyou" color="rgb(255,0,255)"></ke-icon>
  <br />
  <br />
</template>
```

</details>

## 所有图标

<div class="allicon">
  <AllIcon></AllIcon>
</div>
