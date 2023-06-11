<style>
    .tip_box{
        padding: 8px 16px;
        background-color: rgba(64, 158, 255,.1);
        border-radius: 4px;
        border-left: 5px solid #409eff;
        margin: 20px 0;
    }
    .example{
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      padding: 20px;
    }
    .ke-col-demo1 {
        background-color: #99a9bf;
    }
    .ke-col-demo2 {
        background-color: #d3dce6;
    }
    .ke-col-demo3 {
        background-color: #e5e9f2;
    }
    .ke-col-demo-content{
        width:100%;
        height:40px;
        border-radius: 5px;
    }
  
    details > summary:first-of-type {
        font-size: 10px;
        padding: 8px 0;
        cursor: pointer;
        color: #1989fa;
    }
    .ke-row{
        margin-bottom: 20px;
    }
</style>

# Layout布局组件

通过基础的 24 分栏，迅速简便地创建布局。

<div class="tip_box">
    <p><strong>TIP</strong></p>
    <p>组件默认使用 Flex 布局，不需要手动设置 type="flex"。</p>
    <p>请注意父容器避免使用 inline 相关样式，会导致组件宽度不能撑满。</p>
</div>

## 基础布局

使用列创建基础网格布局。

通过 `row` 和 `col` 组件，并通过 `col` 组件的 `span` 属性我们就可以自由地组合布局。

<div class="example">
    <ke-row><ke-col><div class="ke-col-demo1 ke-col-demo-content"></div></ke-col></ke-row>
    <ke-row>
        <ke-col span="12"><div class="ke-col-demo2 ke-col-demo-content"></div></ke-col>
        <ke-col span="12"><div class="ke-col-demo3 ke-col-demo-content"></div></ke-col>
    </ke-row>
    <ke-row>
        <ke-col span="8"><div class="ke-col-demo3 ke-col-demo-content"></div></ke-col>
        <ke-col span="8"><div class="ke-col-demo1 ke-col-demo-content"></div></ke-col>
        <ke-col span="8"><div class="ke-col-demo2 ke-col-demo-content"></div></ke-col>
    </ke-row>
    <ke-row>
        <ke-col span="6"><div class="ke-col-demo2 ke-col-demo-content"></div></ke-col>
        <ke-col span="6"><div class="ke-col-demo3 ke-col-demo-content"></div></ke-col>
        <ke-col span="6"><div class="ke-col-demo2 ke-col-demo-content"></div></ke-col>
        <ke-col span="6"><div class="ke-col-demo3 ke-col-demo-content"></div></ke-col>
    </ke-row>
    <ke-row>
        <ke-col span="4"><div class="ke-col-demo3 ke-col-demo-content"></div></ke-col>
        <ke-col span="4"><div class="ke-col-demo1 ke-col-demo-content"></div></ke-col>
        <ke-col span="4"><div class="ke-col-demo2 ke-col-demo-content"></div></ke-col>
        <ke-col span="4"><div class="ke-col-demo3 ke-col-demo-content"></div></ke-col>
        <ke-col span="4"><div class="ke-col-demo1 ke-col-demo-content"></div></ke-col>
        <ke-col span="4"><div class="ke-col-demo2 ke-col-demo-content"></div></ke-col>
    </ke-row>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-row>
        <ke-col>
            <div class="ke-col-demo1 ke-col-demo-content"></div>
        </ke-col>
    </ke-row>
    <ke-row>
        <ke-col span="12">
            <div class="ke-col-demo2 ke-col-demo-content"></div>
        </ke-col>
        <ke-col span="12">
            <div class="ke-col-demo3 ke-col-demo-content"></div>
        </ke-col>
    </ke-row>
    <ke-row>
        <ke-col span="8">
            <div class="ke-col-demo3 ke-col-demo-content"></div>
        </ke-col>
        <ke-col span="8">
            <div class="ke-col-demo1 ke-col-demo-content"></div>
        </ke-col>
        <ke-col span="8">
            <div class="ke-col-demo2 ke-col-demo-content"></div>
        </ke-col>
    </ke-row>
    <ke-row>
        <ke-col span="6">
            <div class="ke-col-demo2 ke-col-demo-content"></div>
        </ke-col>
        <ke-col span="6">
            <div class="ke-col-demo3 ke-col-demo-content"></div>
        </ke-col>
        <ke-col span="6">
            <div class="ke-col-demo2 ke-col-demo-content"></div>
        </ke-col>
        <ke-col span="6">
            <div class="ke-col-demo3 ke-col-demo-content"></div>
        </ke-col>
    </ke-row>
    <ke-row>
        <ke-col span="4">
            <div class="ke-col-demo3 ke-col-demo-content"></div>
        </ke-col>
        <ke-col span="4">
            <div class="ke-col-demo1 ke-col-demo-content"></div>
        </ke-col>
        <ke-col span="4">
            <div class="ke-col-demo2 ke-col-demo-content"></div>
        </ke-col>
        <ke-col span="4">
            <div class="ke-col-demo3 ke-col-demo-content"></div>
        </ke-col>
        <ke-col span="4">
            <div class="ke-col-demo1 ke-col-demo-content"></div>
        </ke-col>
        <ke-col span="4">
            <div class="ke-col-demo2 ke-col-demo-content"></div>
        </ke-col>
    </ke-row>
</template>

<style>
.ke-row{
        margin-bottom: 20px;
}
.ke-col-demo1 {
    background-color: #99a9bf;
}
.ke-col-demo2 {
    background-color: #d3dce6;
}
.ke-col-demo3 {
    background-color: #e5e9f2;
}
.ke-col-demo-content{
    width:100%;
    height:40px;
    border-radius: 5px;
}
</style>
```

</details>

## 分栏间隔

支持列间距。

行提供 `gutter` 属性来指定列之间的间距，其默认值为0。

<div class="example">
    <ke-row gutter="20">
        <ke-col span="6"><div class="ke-col-demo2 ke-col-demo-content"></div></ke-col>
        <ke-col span="6"><div class="ke-col-demo3 ke-col-demo-content"></div></ke-col>
        <ke-col span="6"><div class="ke-col-demo2 ke-col-demo-content"></div></ke-col>
        <ke-col span="6"><div class="ke-col-demo3 ke-col-demo-content"></div></ke-col>
    </ke-row>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-row gutter="20">
        <ke-col span="6">
            <div class="ke-col-demo2 ke-col-demo-content"></div>
        </ke-col>
        <ke-col span="6">
            <div class="ke-col-demo3 ke-col-demo-content"></div>
        </ke-col>
        <ke-col span="6">
            <div class="ke-col-demo2 ke-col-demo-content"></div>
        </ke-col>
        <ke-col span="6">
            <div class="ke-col-demo3 ke-col-demo-content"></div>
        </ke-col>
    </ke-row>
</template>

<style>
.ke-col-demo1 {
    background-color: #99a9bf;
}
.ke-col-demo2 {
    background-color: #d3dce6;
}
.ke-col-demo3 {
    background-color: #e5e9f2;
}
.ke-col-demo-content{
    width:100%;
    height:40px;
    border-radius: 5px;
}
</style>
```

</details>

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<div class="example">
    <ke-row :gutter="20">
        <ke-col :span="16"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
        <ke-col :span="8"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
    </ke-row>
    <ke-row :gutter="20">
        <ke-col :span="8"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
        <ke-col :span="8"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
        <ke-col :span="4"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
        <ke-col :span="4"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
    </ke-row>
    <ke-row :gutter="20">
        <ke-col :span="4"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
        <ke-col :span="16"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
        <ke-col :span="4"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
    </ke-row>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-row gutter="20">
        <ke-col span="6">
            <div class="ke-col-demo2 ke-col-demo-content"></div>
        </ke-col>
        <ke-col span="6">
            <div class="ke-col-demo3 ke-col-demo-content"></div>
        </ke-col>
        <ke-col span="6">
            <div class="ke-col-demo2 ke-col-demo-content"></div>
        </ke-col>
        <ke-col span="6">
            <div class="ke-col-demo3 ke-col-demo-content"></div>
        </ke-col>
    </ke-row>
</template>

<style>
.ke-row{
        margin-bottom: 20px;
}
.ke-col-demo1 {
    background-color: #99a9bf;
}
.ke-col-demo2 {
    background-color: #d3dce6;
}
.ke-col-demo3 {
    background-color: #e5e9f2;
}
.ke-col-demo-content{
    width:100%;
    height:40px;
    border-radius: 5px;
}
</style>
```

</details>

## 对齐方式

默认使用 flex 布局来对分栏进行灵活的对齐。

您可以通过`justify` 属性来定义子元素的排版方式，其取值为`flex-start`、`center`、`flex-end`、`space-between`、`space-around`或`space-evenly`。

<div class="example">
    <ke-row>
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo3 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
    </ke-row>
    <ke-row justify="center">
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo3 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
    </ke-row>
    <ke-row justify="end">
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo3 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
    </ke-row>
    <ke-row justify="space-between">
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo3 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
    </ke-row>
    <ke-row justify="space-around">
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo3 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
    </ke-row>
    <ke-row justify="space-evenly">
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo3 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
    </ke-row>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-row>
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo3 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
    </ke-row>
    <ke-row justify="center">
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo3 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
    </ke-row>
    <ke-row justify="end">
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo3 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
    </ke-row>
    <ke-row justify="space-between">
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo3 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
    </ke-row>
    <ke-row justify="space-around">
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo3 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
    </ke-row>
    <ke-row justify="space-evenly">
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo3 ke-col-demo-content" /></ke-col>
        <ke-col :span="6"><div class="ke-col-demo2 ke-col-demo-content" /></ke-col>
    </ke-row>
</template>

<style>
.ke-row{
        margin-bottom: 20px;
}
.ke-col-demo1 {
    background-color: #99a9bf;
}
.ke-col-demo2 {
    background-color: #d3dce6;
}
.ke-col-demo3 {
    background-color: #e5e9f2;
}
.ke-col-demo-content{
    width:100%;
    height:40px;
    border-radius: 5px;
}
</style>
```

</details>

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
    margin-bottom:10px;
}
.col{
    width:25%;
    font-size:14px;
    margin-right:10px;
}
</style>

# Row API

## Row Attributes

<div class="example">
    <div class="container">
        <div class="row">
            <div class="col"><b>属性名</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>默认值</b></div>
        </div>
        <hr />
        <div class="row">
            <div class="col">gutter</div>
            <div class="col">栅格间隔</div>
            <div class="col">string / number</div>
            <div class="col">0</div>
        </div>
        <div class="row">
            <div class="col">justify</div>
            <div class="col">flex 布局下的水平排列方式</div>
            <div class="col">enum</div>
            <div class="col">flex-start</div>
        </div>
        <div class="row">
            <div class="col">align</div>
            <div class="col">flex 布局下的垂直排列方式</div>
            <div class="col">enum</div>
            <div class="col">top</div>
        </div>
    </div>
</div>

# Col API

## Col Attributes

<div class="example">
    <div class="container">
        <div class="row">
            <div class="col"><b>属性名</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>默认值</b></div>
        </div>
        <hr />
        <div class="row">
            <div class="col">span</div>
            <div class="col">栅格占据的列数</div>
            <div class="col">string / number</div>
            <div class="col">24</div>
        </div>
    </div>
</div>
