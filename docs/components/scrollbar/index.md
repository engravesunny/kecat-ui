
<style>
  .example{
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      padding: 20px;
  }
  .ke-button {
      margin:10px 5px;
  }
  
  details > summary:first-of-type {
      font-size: 10px;
      padding: 8px 0;
      cursor: pointer;
      color: #1989fa;
  }
.scrollbar-demo-item{
    width: 100%;
    min-width: 200px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size:40px;
    height: 100px;
    border-radius:5px;
    margin:20px;
    background-color: skyblue;
}

.scrollbar-flex-content{
    display:flex;
}
.scrollbar-demo-itemx{
    padding:10px 40px;
    margin:0 20px !important;
    background-color: skyblue;
    border-radius:5px;
}
</style>

# Scrollbar 滚动条

用于替换浏览器原生滚动条。

## 基础用法

通过`height`属性设置滚动条高度，若不设置则根据父容器高度自适应。

<div class="example">
    <ke-scrollbar height="400px">
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </ke-scrollbar>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <ke-scrollbar height="400px">
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </ke-scrollbar>
</template>
```

</details>

## 横向滚动

当元素宽度大于滚动条宽度时，会显示横向滚动条。

<div class="example">
    <ke-scrollbar>
        <div class="scrollbar-flex-content">
            <p v-for="item in 50" :key="item" class="scrollbar-demo-itemx">
                {{ item }}
            </p>
        </div>
    </ke-scrollbar>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-scrollbar>
        <div class="scrollbar-flex-content">
            <p v-for="item in 50" :key="item" class="scrollbar-demo-itemx">
                {{ item }}
            </p>
        </div>
    </ke-scrollbar>
</template>
```

</details>

## API

### Attributes

<style>
table {
    width: 100%;
    display:flex !important;
    background-color: transparent;
    border:0;
}

td, th, td,tr {
    color: #333 !important;
    border: none !important;
    padding: 6px;
    background-color:transparent !important;
}
.container{
    width:100%;
}
.row{
    width:100%;
    display: flex !important;
    border-bottom: 1px solid #dcdfe6;
    padding-bottom:10px;
}
.col{
    width:25%;
    font-size:14px;
}
</style>

<div class="example">
    <div class="container">
        <div class="row">
            <div class="col"><b>属性名</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>默认值</b></div>
        </div>
        <div class="row">
            <div class="col">height</div>
            <div class="col">滚动条高度</div>
            <div class="col">string</div>
            <div class="col">'100%'</div>
        </div>
    </div>
</div>

### Events

<div class="example">
    <div class="container">
        <div class="row">
            <div class="col"><b>事件名</b></div>
            <div class="col" style="width:40%;margin-right:10px;"><b>说明</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>-</b></div>
        </div>
        <div class="row">
            <div class="col">scroll</div>
            <div class="col" style="width:40%;margin-right:10px;">当触发滚动事件时，返回滚动的距离</div>
            <div class="col">Function</div>
            <div class="col">-</div>
        </div>
    </div>
</div>

### Exposes

<div class="example">
    <div class="container">
        <div class="row">
            <div class="col"><b>名称</b></div>
            <div class="col" style="width:40%;margin-right:10px;"><b>说明</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>-</b></div>
        </div>
        <div class="row">
            <div class="col">handleScroll</div>
            <div class="col" style="width:40%;margin-right:10px;">触发滚动事件</div>
            <div class="col">Function</div>
            <div class="col">-</div>
        </div>
        <div class="row">
            <div class="col">setViewScrollTop</div>
            <div class="col" style="width:40%;margin-right:10px;">设置滚动条到顶部的距离</div>
            <div class="col">Function</div>
            <div class="col">-</div>
        </div>
        <div class="row">
            <div class="col">setViewScrollLeft</div>
            <div class="col" style="width:40%;margin-right:10px;"> 设置滚动条到左边的距离</div>
            <div class="col">Function</div>
            <div class="col">-</div>
        </div>
    </div>
</div>
