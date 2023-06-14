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
    .example_radio{
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

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const radio = ref('selected and disabled')
const radiox = ref('3')
</script>

# Radio 单选框

在一组备选项中进行单选

## 基础用法

单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。

要使用 Radio 组件，只需要设置`v-model`绑定变量， 选中意味着变量的值为相应 Radio `label`属性的值， `label`可以是`String`、`Number` 或 `Boolean`。

<div class="example_radio">
    <ke-radio-group v-model="radio1">
            <ke-radio label="1" size="large">Option 1</ke-radio>
            <ke-radio label="2" size="large">Option 2</ke-radio>
    </ke-radio-group>
    <ke-radio-group v-model="radio2">
        <ke-radio label="1">Option 1</ke-radio>
        <ke-radio label="2">Option 2</ke-radio>
    </ke-radio-group>
    <ke-radio-group v-model="radio3">
        <ke-radio label="1" size="small">Option 1</ke-radio>
        <ke-radio label="2" size="small">Option 2</ke-radio>
    </ke-radio-group>
    <ke-radio-group v-model="radio3" disabled>
        <ke-radio label="1" size="small">Option 1</ke-radio>
        <ke-radio label="2" size="small">Option 2</ke-radio>
    </ke-radio-group>
</div>

<details>
<summary>展开查看</summary>

```vue

<template>
    <ke-radio-group v-model="radio1">
            <ke-radio label="1" size="large">Option 1</ke-radio>
            <ke-radio label="2" size="large">Option 2</ke-radio>
    </ke-radio-group>
    <ke-radio-group v-model="radio2">
        <ke-radio label="1">Option 1</ke-radio>
        <ke-radio label="2">Option 2</ke-radio>
    </ke-radio-group>
    <ke-radio-group v-model="radio3">
        <ke-radio label="1" size="small">Option 1</ke-radio>
        <ke-radio label="2" size="small">Option 2</ke-radio>
    </ke-radio-group>
    <ke-radio-group v-model="radio3" disabled>
        <ke-radio label="1" size="small">Option 1</ke-radio>
        <ke-radio label="2" size="small">Option 2</ke-radio>
    </ke-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
</script>
```

</details>

## 禁用状态

`disabled` 属性可以用来控制单选框的禁用状态。

你只需要为单选框设置 `disabled` 属性就能控制其禁用状态。

<div class="example_radio">
    <ke-radio v-model="radio" disabled label="disabled">Option A</ke-radio>
    <ke-radio v-model="radio" disabled label="selected and disabled"
        >Option B</ke-radio
    >
</div>

<details>
<summary>展开查看</summary>

```vue

<template>
    <ke-radio v-model="radio" disabled label="disabled">Option A</ke-radio>
    <ke-radio v-model="radio" disabled label="selected and disabled"
        >Option B</ke-radio
    >
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('selected and disabled')
</script>
```

</details>

## 单选框组

适用于在多个互斥的选项中选择的场景

结合`el-radio-group`元素和子元素`el-radio`可以实现单选组， 为 `el-radio-group` 绑定 `v-model`，再为 每一个 `el-radio` 设置好 `label` 属性即可， 另外，还可以通过 `change` 事件来响应变化，它会传入一个参数 `value` 来表示改变之后的值。

<div class="example_radio">
    <ke-radio-group v-model="radiox">
        <ke-radio label="3">Option A</ke-radio>
        <ke-radio label="6">Option B</ke-radio>
        <ke-radio label="9">Option C</ke-radio>
    </ke-radio-group>
</div>

<details>
<summary>展开查看</summary>

```vue

<template>
    <ke-radio-group v-model="radio">
        <ke-radio :label="3">Option A</ke-radio>
        <ke-radio :label="6">Option B</ke-radio>
        <ke-radio :label="9">Option C</ke-radio>
    </ke-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref(3)
</script>

```

</details>

# Radio API

## Radio Attributes

<div class="example">
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
            <div class="col"><span class="code">string</span> / <span class="code">number</span> / <span class="code">boolean</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">label</div>
            <div class="col">单选框的值</div>
            <div class="col"><span class="code">string</span> / <span class="code">number</span> / <span class="code">boolean</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">disabled</div>
            <div class="col">是否禁用</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col"> false </div>
        </div>
        <div class="row">
            <div class="col">size</div>
            <div class="col">单选框的尺寸</div>
            <div class="col"><span class="code">'large'</span> / <span class="code">'small'</span></div>
            <div class="col"> false </div>
        </div>
        <div class="row">
            <div class="col">name</div>
            <div class="col">原始 name 属性</div>
            <div class="col"><span class="code">string</span></div>
            <div class="col"> false </div>
        </div>
    </div>
</div>

## Radio Events

<div class="example">
    <div class="containerx">
        <div class="row">
            <div class="col"><b>事件名</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>—</b></div>
        </div>
        <div class="row">
            <div class="col">change</div>
            <div class="col">绑定值变化时触发的事件</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col">—</div>
        </div>
    </div>
</div>

# RadioGroup API

## RadioGroup Attributes

<div class="example">
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
            <div class="col"><span class="code">string</span> / <span class="code">number</span> / <span class="code">boolean</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">label</div>
            <div class="col">与 RadioGroup 中的 aria-label 属性相同</div>
            <div class="col"><span class="code">string</span> / <span class="code">number</span> / <span class="code">boolean</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">disabled</div>
            <div class="col">是否禁用</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col"> false </div>
        </div>
        <div class="row">
            <div class="col">size</div>
            <div class="col">单选框的尺寸</div>
            <div class="col"><span class="code">'large'</span> / <span class="code">'small'</span></div>
            <div class="col"> false </div>
        </div>
        <div class="row">
            <div class="col">name</div>
            <div class="col">原始 name 属性</div>
            <div class="col"><span class="code">string</span></div>
            <div class="col"> false </div>
        </div>
    </div>
</div>

## RadioGroup Events

<div class="example">
    <div class="containerx">
        <div class="row">
            <div class="col"><b>事件名</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>—</b></div>
        </div>
        <div class="row">
            <div class="col">change</div>
            <div class="col">绑定值变化时触发的事件</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col">—</div>
        </div>
    </div>
</div>
