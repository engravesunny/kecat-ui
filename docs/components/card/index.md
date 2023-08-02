<style>
    .containerx{
        width:100%;
    }
    .row{
        width:100%;
        display: flex !important;
        margin-bottom:10px;
        border-bottom: 1px solid #dcdfe6;
        padding-bottom:10px;
    }
    .col{
        width:25%;
        font-size:14px;
        margin-right:20px;
    }
    .example_card{
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
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .box-card {
        width: 480px;
    }
    .time {
        font-size: 12px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .button {
        padding: 0;
        min-height: auto;
    }

    .image {
        width: 100%;
        display: block;
    }
</style>

<script lang="ts" setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

# Card 卡片

将信息聚合在卡片容器中展示。

## 基础用法

卡片包含标题，内容以及操作区域。

Card 组件由 header 和 body 组成。 header 是可选的，其内容取决于一个具名的 slot。

<div class="example_card">
    <ke-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>Card name</span>
                <ke-button class="button">Operation button</ke-button>
            </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </ke-card>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>Card name</span>
                <ke-button class="button">Operation button</ke-button>
            </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </ke-card>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
```

</details>

## 简单卡片

卡片可以只有内容区域。

<div class="example_card">
    <ke-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </ke-card>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </ke-card>
</template>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>
```

</details>

## 有图片内容的卡片

可配置定义更丰富的内容展示。

配置 body-style 属性来自定义 body 部分的样式。 在这个例子中我们还使用了 ke-col 组件来布局。

<div class="example_card">
    <ke-row justify="space-evenly">
        <ke-col
        v-for="(o, index) in 2"
        :key="o"
        :span="8"
        >
            <ke-card :body-style="{ padding: '0px' }">
                <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
                />
                <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <ke-button text class="button">Operating</ke-button>
                </div>
                </div>
            </ke-card>
        </ke-col>
    </ke-row>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-row justify="space-evenly">
        <ke-col
        v-for="(o, index) in 2"
        :key="o"
        :span="8"
        >
            <ke-card :body-style="{ padding: '0px' }">
                <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
                />
                <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <ke-button text class="button">Operating</ke-button>
                </div>
                </div>
            </ke-card>
        </ke-col>
    </ke-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
```

</details>

## 带有阴影效果的卡片

你可以定义什么时候展示卡片的阴影效果。

通过 shadow 属性设置卡片阴影出现的时机。 该属性的值可以是：always、hover 或 never。

<div class="example_card">
    <ke-row :gutter="12">
        <ke-col :span="8">
            <ke-card shadow="always"> Always </ke-card>
        </ke-col>
        <ke-col :span="8">
            <ke-card shadow="hover"> Hover </ke-card>
        </ke-col>
        <ke-col :span="8">
            <ke-card shadow="never"> Never </ke-card>
        </ke-col>
    </ke-row>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-row :gutter="12">
        <ke-col :span="8">
            <ke-card shadow="always"> Always </ke-card>
        </ke-col>
        <ke-col :span="8">
            <ke-card shadow="hover"> Hover </ke-card>
        </ke-col>
        <ke-col :span="8">
            <ke-card shadow="never"> Never </ke-card>
        </ke-col>
    </ke-row>
</template>
```

</details>

# Card API

## Card Attributes

<div class="example_transfer">
    <div class="containerx">
        <div class="row">
            <div class="col"><b>属性名</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>默认值</b></div>
        </div>
        <div class="row">
            <div class="col">body-style</div>
            <div class="col">body 的 CSS 样式</div>
            <div class="col"><span class="code">object</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">shadow</div>
            <div class="col">设置阴影显示时机</div>
            <div class="col"><span class="code"> ['always','hover','never']</span></div>
            <div class="col"> 'always' </div>
        </div>
    </div>
</div>

## Card Slots

<div class="example_transfer">
    <div class="containerx">
        <div class="row">
            <div class="col"><b>插槽名</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>——</b></div>
            <div class="col"><b>——</b></div>
        </div>
        <div class="row">
            <div class="col">default</div>
            <div class="col">自定义默认内容</div>
            <div class="col"><span class="code">——</span></div>
            <div class="col">——</div>
        </div>
        <div class="row">
            <div class="col">header</div>
            <div class="col">卡片标题内容</div>
            <div class="col"><span class="code">——</span></div>
            <div class="col">——</div>
        </div>
    </div>
</div>
