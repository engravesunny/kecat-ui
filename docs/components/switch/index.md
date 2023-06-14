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
    .example_switch{
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
    .ke-switch+.ke-switch{
        margin-left:10px;
    }
</style>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
const value = ref(true)
const value3 = ref(true)
const value4 = ref(true)
const value5 = ref(true)
const value6 = ref(true)
const loading1 = ref(false)
const loading2 = ref(false)
const beforeChange1 = () => {
  loading1.value = true
  return new Promise((resolve) => {
    setTimeout(() => {
      loading1.value = false
      return resolve(true)
    }, 1000)
  })
}

const beforeChange2 = () => {
  loading2.value = true
  return new Promise((_, reject) => {
    setTimeout(() => {
      loading2.value = false
      return reject(new Error('Error'))
    }, 1000)
  })
}
</script>

# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量。 可以使用 `--el-switch-on-color` 属性与 `--el-switch-off-color` 属性来设置开关的背景色。

<div class="example_switch">
    <ke-switch v-model="value1" />
    <ke-switch
        v-model="value2"
        class="ml-2"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-switch v-model="value1" />
    <ke-switch
        v-model="value2"
        class="ml-2"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
</script>
```

</details>

## 尺寸

<div class="example_switch">
    <ke-switch
        v-model="value"
        size="large"
        active-text="Open"
        inactive-text="Close"
    />
    <br />
    <ke-switch v-model="value" active-text="Open" inactive-text="Close" />
    <br />
    <ke-switch
        v-model="value"
        size="small"
        active-text="Open"
        inactive-text="Close"
    />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-switch
        v-model="value"
        size="large"
        active-text="Open"
        inactive-text="Close"
    />
    <br />
    <ke-switch v-model="value" active-text="Open" inactive-text="Close" />
    <br />
    <ke-switch
        v-model="value"
        size="small"
        active-text="Open"
        inactive-text="Close"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(true)
</script>
```

</details>

## 文字描述

使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。 使用`inline-prompt` 属性来控制文本是否显示在点内。

使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。

<div class="example_switch">
    <ke-switch
        v-model="value1"
        class="mb-2"
        active-text="Pay by month"
        inactive-text="Pay by year"
    />
    <br />
    <ke-switch
        v-model="value2"
        class="mb-2"
        style="--ke-switch-on-color: #13ce66; --ke-switch-off-color: #ff4949"
        active-text="Pay by month"
        inactive-text="Pay by year"
    />
    <br />
    <ke-switch
        v-model="value3"
        inline-prompt
        active-text="是"
        inactive-text="否"
    />
    <ke-switch
        v-model="value4"
        class="ml-2"
        inline-prompt
        style="--ke-switch-on-color: #13ce66; --ke-switch-off-color: #ff4949"
        active-text="Y"
        inactive-text="N"
    />
    <ke-switch
        v-model="value6"
        class="ml-2"
        width="60"
        inline-prompt
        active-text="超出省略"
        inactive-text="超出省略"
    />
    <ke-switch
        v-model="value5"
        class="ml-2"
        inline-prompt
        style="--ke-switch-on-color: #13ce66; --ke-switch-off-color: #ff4949"
        active-text="完整展示多个内容"
        inactive-text="多个内容"
    />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-switch
        v-model="value1"
        active-text="Pay by month"
        inactive-text="Pay by year"
    />
    <br />
    <ke-switch
        v-model="value2"
        style="--ke-switch-on-color: #13ce66; --ke-switch-off-color: #ff4949"
        active-text="Pay by month"
        inactive-text="Pay by year"
    />
    <br />
    <ke-switch
        v-model="value3"
        inline-prompt
        active-text="是"
        inactive-text="否"
    />
    <ke-switch
        v-model="value4"
        inline-prompt
        style="--ke-switch-on-color: #13ce66; --ke-switch-off-color: #ff4949"
        active-text="Y"
        inactive-text="N"
    />
    <ke-switch
        v-model="value6"
        width="60"
        inline-prompt
        active-text="超出省略"
        inactive-text="超出省略"
    />
    <ke-switch
        v-model="value5"
        inline-prompt
        style="--ke-switch-on-color: #13ce66; --ke-switch-off-color: #ff4949"
        active-text="完整展示多个内容"
        inactive-text="多个内容"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(true)
const value5 = ref(true)
const value6 = ref(true)
</script>

```

</details>

## 显示自定义图标

使用 `inactive-icon` 和 `active-icon` 属性来添加图标。 您可以传递组件名称的字符串（提前注册）

使用 `inactive-icon` 和 `active-icon` 属性来添加图标。 使用 `inline-prompt` 属性来控制图标显示在点内。

<div class="example_switch">
    <ke-switch v-model="value1" active-icon="duihao" inactive-icon="guanbi1" />
    <br />
    <ke-switch
        v-model="value2"
        style="margin-left: 24px"
        inline-prompt
        active-icon="duihao"
        inactive-icon="guanbi1"
    />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-switch v-model="value1" active-icon="duihao" inactive-icon="guanbi1" />
    <br />
    <ke-switch
        v-model="value2"
        style="margin-left: 24px"
        inline-prompt
        active-icon="duihao"
        inactive-icon="guanbi1"
    />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(true)
const value2 = ref(true)
</script>
```

</details>

## 禁用状态

设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。

<div class="example_switch">
    <ke-switch v-model="value1" disabled />
    <ke-switch v-model="value2" />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-switch v-model="value1" disabled />
    <ke-switch v-model="value2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
</script>
```

</details>

## 加载状态

设置`loading`属性，接受一个`Boolean`，设置`true`即加载中状态。

<div class="example_switch">
    <ke-switch v-model="value1" loading />
    <ke-switch v-model="value2" loading />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-switch v-model="value1" loading />
    <ke-switch v-model="value2" loading />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
</script>

```

</details>

## 阻止切换

设置`beforeChange`属性，若返回 `false`或者返回 `Promise` 且被 `reject`，则停止切换。

<div class="example_switch">
    <ke-switch
        v-model="value1"
        :loading="loading1"
        :before-change="beforeChange1"
    />
    <ke-switch
        v-model="value2"
        class="ml-2"
        :loading="loading2"
        :before-change="beforeChange2"
    />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-switch
        v-model="value1"
        :loading="loading1"
        :before-change="beforeChange1"
    />
    <ke-switch
        v-model="value2"
        class="ml-2"
        :loading="loading2"
        :before-change="beforeChange2"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(false)
const loading1 = ref(false)
const loading2 = ref(false)

const beforeChange1 = () => {
  loading1.value = true
  return new Promise((resolve) => {
    setTimeout(() => {
      loading1.value = false
      return resolve(true)
    }, 1000)
  })
}

const beforeChange2 = () => {
  loading2.value = true
  return new Promise((_, reject) => {
    setTimeout(() => {
      loading2.value = false
      return reject(new Error('Error'))
    }, 1000)
  })
}
</script>
```

</details>

# Switch API

## Switch Attributes

<div class="example_switch">
    <div class="containerx">
        <div class="row">
            <div class="col"><b>属性名</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>默认值</b></div>
        </div>
        <div class="row">
            <div class="col">model-value / v-model</div>
            <div class="col">绑定值</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">disabled</div>
            <div class="col">是否禁用</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col"> false </div>
        </div>
        <div class="row">
            <div class="col">loading</div>
            <div class="col">是否显示加载中</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col"> false </div>
        </div>
        <div class="row">
            <div class="col">size</div>
            <div class="col">switch 的大小</div>
            <div class="col"><span class="code">'large'</span> / <span class="code">'small'</span></div>
            <div class="col"> - </div>
        </div>
        <div class="row">
            <div class="col">width</div>
            <div class="col">switch 的宽度</div>
            <div class="col"><span class="code">string</span> / <span class="code">number</span></div>
            <div class="col"> false </div>
        </div>
        <div class="row">
            <div class="col">inline-prompt</div>
            <div class="col">图标或文本是否显示在点内</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col"> false </div>
        </div>
        <div class="row">
            <div class="col">active-icon</div>
            <div class="col">switch 状态为 on 时所显示图标</div>
            <div class="col"><span class="code">string</span></div>
            <div class="col">  — </div>
        </div>
        <div class="row">
            <div class="col">inactive-icon</div>
            <div class="col">switch 状态为 off 时所显示图标</div>
            <div class="col"><span class="code">string</span></div>
            <div class="col">  — </div>
        </div>
        <div class="row">
            <div class="col">active-text</div>
            <div class="col">switch 打开时的文字描述</div>
            <div class="col"><span class="code">string</span></div>
            <div class="col">  — </div>
        </div>
        <div class="row">
            <div class="col">inactive-text</div>
            <div class="col">switch 的状态为 off 时的文字描述</div>
            <div class="col"><span class="code">string</span></div>
            <div class="col">  — </div>
        </div>
        <div class="row">
            <div class="col">name</div>
            <div class="col">switch 对应的 name 属性</div>
            <div class="col"><span class="code">string</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">before-change</div>
            <div class="col">switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换</div>
            <div class="col"><span class="code"> Function </span></div>
            <div class="col"> — </div>
        </div>
    </div>
</div>

## Radio Events

<div class="example_switch">
    <div class="containerx">
        <div class="row">
            <div class="col"><b>事件名</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>—</b></div>
        </div>
        <div class="row">
            <div class="col">change</div>
            <div class="col">switch 状态发生变化时的回调函数</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col">—</div>
        </div>
    </div>
</div>
