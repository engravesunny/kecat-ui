<style>
    .vp-doc li + li {
        margin-top: 0px;
    }
    .vp-doc ul{
        margin:0px;
        padding:0px;
    }
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
    .example_calendar{
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

</style>

<script setup lang='ts'>
    import { ref } from 'vue'
    let calendar = ref('')
    let value = ref('2002-11-15')
    const handleClick = () => {
        calendar.value.handleDateSelect(value.value)
    }
</script>

# Calendar 日历

## 基础用法

设置 `value` 来指定当前显示的月份。 如果 `value` 未指定，则显示当月。 `value` 支持 `v-model` 双向绑定。

<div class="example_calendar">
    <ke-calendar v-model="value" />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <div class="example_calendar">
        <ke-calendar v-model="value" />
    </div>
</template>

<script>
    import { ref } from 'vue'
    let value = ref('2002-11-15')
</script>
```

</details>

## 自定义内容

通过设置名为 `date-cell` 的 `scoped-slot` 来自定义日历单元格中显示的内容。 在 `scoped-slot` 可以获取到 `data`, data（包括 `isSelected`，`date` 属性）。

<div class="example_calendar">
    <ke-calendar>
        <template #date-cell="{ date, isSelected }">
            <span>
                {{ date.split('-').slice(1).join('-') }}
                {{ isSelected ? '✔️' : '' }}
            </span>
        </template>
    </ke-calendar>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-calendar>
        <template #date-cell="{ date, isSelected }">
            <span>
                {{ date.split('-').slice(1).join('-') }}
                {{ isSelected ? '✔️' : '' }}
            </span>
        </template>
    </ke-calendar>
</template>
```

</details>

## 设置日期

可以通过组件暴露的方法 `handleDateSelect` 进行对日期的设置，可以传入xxxx-xx-xx日期，`next-month`，`pre-month`，`next-year`，`pre-year`来修改日期

<div class="example_calendar">
    <ke-row style="padding:0 20px;">
        <ke-col span='8'>
            <ke-input v-model="value" />
        </ke-col>
        <ke-col span='8' style="margin-left:10px;">
            <ke-button type="primary" @click=handleClick>设置日期</ke-button>
        </ke-col>
    </ke-row>
    <ke-calendar ref='calendar' v-model="value" />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-row style="padding:0 20px;">
        <ke-col span='8'>
            <ke-input v-model="value" />
        </ke-col>
        <ke-col span='8' style="margin-left:10px;">
            <ke-button type="primary" @click=handleClick>设置日期</ke-button>
        </ke-col>
    </ke-row>
    <ke-calendar ref='calendar' v-model="value" />
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    let calendar = ref('')
    let value = ref('2002-11-15')
    const handleClick = () => {
        calendar.value.handleDateSelect(value.value)
    }
</script>
```

</details>

# Calendar API

## Calendar Attributes

<div class="example_transfer">
    <div class="containerx">
        <div class="row">
            <div class="col"><b>属性名</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>默认值</b></div>
        </div>
        <div class="row">
            <div class="col">model-value / v-model</div>
            <div class="col">选中项绑定值</div>
            <div class="col"><span class="code">Date</span></div>
            <div class="col"> — </div>
        </div>
    </div>
</div>

## Calendar Slots

<div class="example_transfer">
    <div class="containerx">
        <div class="row">
            <div class="col"><b>插槽名</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>——</b></div>
            <div class="col"><b>——</b></div>
        </div>
        <div class="row">
            <div class="col">date-cell</div>
            <div class="col">isSelected 标明该日期是否被选中；date 是格式化的日期，格式为 yyyy-MM-dd；</div>
            <div class="col"><span class="code">——</span></div>
            <div class="col">——</div>
        </div>
    </div>
</div>
