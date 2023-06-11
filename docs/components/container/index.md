<style>
    .container {
        width: 100%;
        height: 300px;
        display: flex;
    }
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
  
    details > summary:first-of-type {
        font-size: 10px;
        padding: 8px 0;
        cursor: pointer;
        color: #1989fa;
    }
    .code{
        padding:2px 5px;
        background-color: #c6e2ff;
        border-radius: 5px;
    }
    .ke-asider,
    .ke-footer,
    .ke-header,
    .ke-main {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .ke-header,
    .ke-footer {
        background-color: #95c8ff;
    }

    .ke-asider {
        background-color: #d9ecff;
    }

    .ke-main {
        background-color: #ecf5ff;
    }
</style>

# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<ke-container>`：外层容器。 当子元素中包含 `<ke-header>` 或 `<ke-footer>` 时，全部子元素会垂直上下排列， 否则会水平左右排列。

`<ke-header>`：顶栏容器。

`<ke-aside>`：侧边栏容器。

`<ke-main>`：主要区域容器。

`<ke-footer>`：底栏容器。

<div class="tip_box">
    <p><strong>TIP</strong></p>
    <p>
        以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。
        此外， <span class='code'> {{'<' + 'ke-container' + '>'}} </span>的直接子元素必须是后四个组件中的一个或多个。
        后四个组件的亲元素必须是一个<span class='code'> {{'<' + 'ke-container' + '>'}} </span>
    </p>
</div>

## 常见页面布局

<!-- 常见布局一 -->

<div class="example">
    <div class="container">
        <ke-container>
            <ke-header>Header</ke-header>
            <ke-main>
                Main
            </ke-main>
        </ke-container>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <div class="container">
        <ke-container>
            <ke-header>Header</ke-header>
            <ke-main>
                Main
            </ke-main>
        </ke-container>
    </div>
</template>
```

</details>

<!-- 常见布局二 -->

<div class="example">
    <div class="container">
        <ke-container>
            <ke-header>Header</ke-header>
            <ke-main>
                Main
            </ke-main>
            <ke-footer>Footer</ke-footer>
        </ke-container>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <div class="container">
        <ke-container>
            <ke-header>Header</ke-header>
            <ke-main>
                Main
            </ke-main>
            <ke-footer>Footer</ke-footer>
        </ke-container>
    </div>
</template>
```

</details>

<!-- 常见布局三 -->

<div class="example">
    <div class="container">
        <ke-container>
            <ke-asider width="200px">Aside</ke-asider>
            <ke-main>
                Main
            </ke-main>
        </ke-container>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <div class="container">
        <ke-container>
            <ke-asider width="200px">Aside</ke-asider>
            <ke-main>
                Main
            </ke-main>
        </ke-container>
    </div>
</template>
```

</details>

<!-- 常见布局四 -->

<div class="example">
    <div class="container">
        <ke-container>
      <ke-header>Header</ke-header>
      <ke-container>
        <ke-asider width="200px">Aside</ke-asider>
        <ke-main>Main</ke-main>
      </ke-container>
    </ke-container>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <div class="container">
        <ke-container>
            <ke-header>Header</ke-header>
            <ke-container>
                <ke-asider width="200px">Aside</ke-asider>
                <ke-main>Main</ke-main>
            </ke-container>
        </ke-container>
    </div>
</template>
```

</details>

<!-- 常见布局五 -->

<div class="example">
    <div class="container">
        <ke-container>
            <ke-header>Header</ke-header>
            <ke-container>
                <ke-asider width="200px">Aside</ke-asider>
                <ke-container>
                    <ke-main>Main</ke-main>
                    <ke-footer>Footer</ke-footer>
                </ke-container>
            </ke-container>
        </ke-container>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <div class="container">
        <ke-container>
            <ke-header>Header</ke-header>
            <ke-container>
                <ke-asider width="200px">Aside</ke-asider>
                <ke-container>
                    <ke-main>Main</ke-main>
                    <ke-footer>Footer</ke-footer>
                </ke-container>
            </ke-container>
        </ke-container>
    </div>
</template>
```

</details>

<!-- 常见布局六 -->

<div class="example">
    <div class="container">
        <ke-container>
      <ke-asider width="200px">Aside</ke-asider>
      <ke-container>
        <ke-header>Header</ke-header>
        <ke-main>Main</ke-main>
      </ke-container>
    </ke-container>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <div class="container">
        <ke-container>
            <ke-asider width="200px">Aside</ke-asider>
            <ke-container>
                <ke-header>Header</ke-header>
                <ke-main>Main</ke-main>
            </ke-container>
        </ke-container>
    </div>
</template>
```

</details>

<!-- 常见布局七 -->

<div class="example">
    <div class="container">
        <ke-container>
      <ke-asider width="200px">Aside</ke-asider>
      <ke-container>
        <ke-header>Header</ke-header>
        <ke-main>Main</ke-main>
        <ke-footer>Footer</ke-footer>
      </ke-container>
    </ke-container>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <div class="container">
        <ke-container>
            <ke-asider width="200px">Aside</ke-asider>
            <ke-container>
                <ke-header>Header</ke-header>
                <ke-main>Main</ke-main>
                <ke-footer>Footer</ke-footer>
            </ke-container>
        </ke-container>
    </div>
</template>
```

</details>

<style>
.containerx{
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

## Header API

### Header Attributes

<div class="example">
    <div class="containerx">
        <div class="row">
            <div class="col"><b>属性名</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>默认值</b></div>
        </div>
        <hr />
        <div class="row">
            <div class="col">height</div>
            <div class="col">顶栏高度</div>
            <div class="col">string</div>
            <div class="col">60px</div>
        </div>
    </div>
</div>

## Aside API

### Aside Attributes

<div class="example">
    <div class="containerx">
        <div class="row">
            <div class="col"><b>属性名</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>默认值</b></div>
        </div>
        <hr />
        <div class="row">
            <div class="col">width</div>
            <div class="col">侧边栏宽度</div>
            <div class="col">string</div>
            <div class="col">300px</div>
        </div>
    </div>
</div>

## Footer API

### Footer Attributes

<div class="example">
    <div class="containerx">
        <div class="row">
            <div class="col"><b>属性名</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>默认值</b></div>
        </div>
        <hr />
        <div class="row">
            <div class="col">height</div>
            <div class="col">底栏高度</div>
            <div class="col">string</div>
            <div class="col">60px</div>
        </div>
    </div>
</div>
