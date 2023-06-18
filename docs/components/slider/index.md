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
    .example_slider{
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
    .slider-demo-block {
        display: flex;
        align-items: center;
    }
    .slider-demo-block .ke-slider {
        margin-top: 0;
        margin-left: 12px;
    }
    .slider-demo-block .demonstration {
        font-size: 14px;
        color: var(--el-text-color-secondary);
        line-height: 44px;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 0;
    }
    .slider-demo-block .demonstration + .ke-slider {
        flex: 0 0 70%;
    }
</style>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(0)
const value4 = ref(0)
const value5 = ref(0)
const value = ref([4, 8])
const value_v = ref(0)
</script>

# Slider 滑块

通过拖动滑块在一个固定区间内进行选择

## 基础用法

在拖动滑块时，显示当前值

通过设置绑定值自定义滑块的初始值

<div class="example_slider">
    <div class="slider-demo-block">
        <span class="demonstration">Default value</span>
        <ke-slider v-model="value1" />
    </div>
    <div class="slider-demo-block">
        <span class="demonstration">Customized initial value</span>
        <ke-slider v-model="value2" />
    </div>
    <div class="slider-demo-block">
        <span class="demonstration">Hide Tooltip</span>
        <ke-slider v-model="value3" :show-tooltip="false" />
    </div>
    <div class="slider-demo-block">
        <span class="demonstration">Disabled</span>
        <ke-slider v-model="value5" disabled />
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <div class="slider-demo-block">
        <span class="demonstration">Default value</span>
        <ke-slider v-model="value1" />
    </div>
    <div class="slider-demo-block">
        <span class="demonstration">Customized initial value</span>
        <ke-slider v-model="value2" />
    </div>
    <div class="slider-demo-block">
        <span class="demonstration">Hide Tooltip</span>
        <ke-slider v-model="value3" :show-tooltip="false" />
    </div>
    <div class="slider-demo-block">
        <span class="demonstration">Disabled</span>
        <ke-slider v-model="value5" disabled />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(0)
const value4 = ref(0)
const value5 = ref(0)

</script>
```

</details>

## 离散值

选项可以是离散的

改变step的值可以改变步长， 通过设置 show-stops 属性可以显示间断点

<div class="example_slider">
    <div class="slider-demo-block">
        <span class="demonstration">Breakpoints not displayed</span>
        <ke-slider v-model="value1" :step="10" />
    </div>
    <div class="slider-demo-block">
        <span class="demonstration">Breakpoints displayed</span>
        <ke-slider v-model="value2" :step="10" show-stops />
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <div class="slider-demo-block">
        <span class="demonstration">Breakpoints not displayed</span>
        <ke-slider v-model="value1" :step="10" />
    </div>
    <div class="slider-demo-block">
        <span class="demonstration">Breakpoints displayed</span>
        <ke-slider v-model="value2" :step="10" show-stops />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
</script>
```

</details>

## 位置

您可以自定义 Tooltip 提示的位置。

<div class="example_slider">
    <div class="slider-demo-block">
        <ke-slider v-model="value1" />
    </div>
    <div class="slider-demo-block">
        <ke-slider v-model="value2" placement="bottom" />
    </div>
    <div class="slider-demo-block">
        <ke-slider v-model="value3" placement="right" />
    </div>
    <div class="slider-demo-block">
        <ke-slider v-model="value4" placement="left" />
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <div class="slider-demo-block">
        <ke-slider v-model="value1" />
    </div>
    <div class="slider-demo-block">
        <ke-slider v-model="value2" placement="bottom" />
    </div>
    <div class="slider-demo-block">
        <ke-slider v-model="value3" placement="right" />
    </div>
    <div class="slider-demo-block">
        <ke-slider v-model="value4" placement="left" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(0)
const value4 = ref(0)
</script>
```

</details>

## 范围选择

你还可以选择一个范围值

配置 range 属性以激活范围选择模式，该属性的绑定值是一个数组，由最小边界值和最大边界值组成。

<div class="example_slider">
    <div class="slider-demo-block">
        <ke-slider v-model="value" range show-stops :max="10" />
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <div class="slider-demo-block">
        <ke-slider v-model="value" range show-stops :max="10" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([4, 8])
</script>
```

</details>

## 垂直模式

配置 vertical 属性为 true 启用垂直模式。 在垂直模式下，必须设置 height 属性。

<div class="example_slider" style="height:300px">
  <div class="slider-demo-block" style="transform:translate(0,300%)">
    <ke-slider v-model="value_v" vertical height="200px" />
  </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div class="slider-demo-block">
    <el-slider v-model="value" vertical height="200px" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value_v = ref(0)
</script>
```

</details>

# Slider API

## Slider Attributes

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
            <div class="col">选中项绑定值</div>
            <div class="col"><span class="code">number</span> / <span class="code">number[]</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">min</div>
            <div class="col">最小值</div>
            <div class="col"><span class="code">number</span></div>
            <div class="col"> 0 </div>
        </div>
        <div class="row">
            <div class="col">max</div>
            <div class="col">最大值</div>
            <div class="col"><span class="code">number</span></div>
            <div class="col"> 100 </div>
        </div>
        <div class="row">
            <div class="col">disabled </div>
            <div class="col">是否禁用</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col">false</div>
        </div>
        <div class="row">
            <div class="col">step</div>
            <div class="col">步长</div>
            <div class="col"><span class="code">number</span></div>
            <div class="col"> 1 </div>
        </div>
        <div class="row">
            <div class="col">show-stops</div>
            <div class="col">是否显示间断点</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col"> false </div>
        </div>
        <div class="row">
            <div class="col">show-tooltip</div>
            <div class="col">是否显示提示信息</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col">  true </div>
        </div>
        <div class="row">
            <div class="col">range</div>
            <div class="col">是否开启选择范围</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col">  false </div>
        </div>
        <div class="row">
            <div class="col">vertical</div>
            <div class="col">垂直模式</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col">  false </div>
        </div>
        <div class="row">
            <div class="col">height</div>
            <div class="col">滑块高度，垂直模式必填</div>
            <div class="col"><span class="code">string</span></div>
            <div class="col">  — </div>
        </div>
        <div class="row">
            <div class="col">placement</div>
            <div class="col">Tooltip 出现的位置</div>
            <div class="col"><span class="code">string</span></div>
            <div class="col"> top </div>
        </div>
        <div class="row">
            <div class="col">before-change</div>
            <div class="col">switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换</div>
            <div class="col"><span class="code"> Function </span></div>
            <div class="col"> — </div>
        </div>
    </div>
</div>

## Slider Events

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
            <div class="col">状态发生变化时的回调函数</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col">—</div>
        </div>
    </div>
</div>
