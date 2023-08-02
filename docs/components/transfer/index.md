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
    .example_transfer{
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

interface Option {
  key: number
  label: string
  disabled: boolean
}

const generateData = () => {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data = ref<Option[]>(generateData())
const value = ref([])

interface Option1 {
  value: number
  desc: string
  disabled: boolean
}

const generateData1 = () => {
  const data: Option1[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      value: i,
      desc: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}
const props = {
    key: 'value',
    label: 'desc',
}
const data1 = ref<Option[]>(generateData1())
const value1 = ref([])
</script>

# Transfer 穿梭框

## 基础用法

Transfer 的数据通过 `data` 属性传入。 数据需要是一个对象数组，每个对象有以下属性：`key` 为数据的唯一性标识，`label` 为显示文本，`disabled` 表示该项数据是否禁止被操作。 目标列表中的数据项会同步到绑定至 `v-model` 的变量，值为数据项的 `key` 所组成的数组。 当然，如果希望在初始状态时目标列表不为空，可以像本例一样为 `v-model` 绑定的变量赋予一个初始值。

<div class="example_transfer">
    <ke-transfer v-model="value" :data="data" />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-transfer v-model="value" :data="data" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Option {
  key: number
  label: string
  disabled: boolean
}

const generateData = () => {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data = ref<Option[]>(generateData())
const value = ref([])
</script>
```

</details>

## 可搜索过滤

在数据很多的情况下，可以对数据进行搜索和过滤。

设置 `filterable` 为 `true` 即可开启搜索模式。

<div class="example_transfer">
    <ke-transfer
        v-model="value"
        filterable
        filter-placeholder="State Abbreviations"
        :data="data"
    />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-transfer
        v-model="value"
        filterable
        filter-placeholder="State Abbreviations"
        :data="data"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Option {
  key: number
  label: string
  disabled: boolean
}

const generateData = () => {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data = ref<Option[]>(generateData())
const value = ref([])
</script>

```

</details>

## 自定义

可以对列表标题文案、按钮文案等进行自定义。

可以使用 `titles`、`button-texts` 属性分别对列表标题文案、按钮文案进行自定义。

<div class="example_transfer">
    <ke-transfer
        v-model="value"
        filterable
        :titles="['Source', 'Target']"
        :button-texts="['left', 'right']"
        :data="data"
    />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-transfer
        v-model="value"
        filterable
        :titles="['Source', 'Target']"
        :button-texts="['To left', 'To right']"
        :data="data"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Option {
  key: number
  label: string
  disabled: boolean
}

const generateData = () => {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data = ref<Option[]>(generateData())
const value = ref([])
</script>

```

</details>

## 数据项属性别名

默认情况下，Transfer 仅能识别数据项中的 key、label 和 disabled 字段。 如果你的数据的字段名不同，可以使用 props 属性为它们设置别名。

本例中的数据源没有 key 和 label 字段，在功能上与它们相同的字段名为 value 和 desc。 因此可以使用props 属性为 key 和 label 设置别名。

<div class="example_transfer">
    <ke-transfer
        v-model="value1"
        :props="props"
        :data="data1"
    />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-transfer
        v-model="value1"
        :props="props"
        :data="data1"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Option {
  value: number
  desc: string
  disabled: boolean
}

const generateData = () => {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      value: i,
      desc: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}
const props = {
    key: 'value',
    label: 'desc',
}
const data = ref<Option[]>(generateData())
const value = ref([])
</script>

```

</details>

# Select API

## Select Attributes

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
            <div class="col"><span class="code">array</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">data</div>
            <div class="col">Transfer 的数据源</div>
            <div class="col"><span class="code">{{'Array<{ key, label, disabled }>'}}</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">filterable</div>
            <div class="col">是否可搜索</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col"> false </div>
        </div>
        <div class="row">
            <div class="col">filter-placeholder </div>
            <div class="col">搜索框占位符</div>
            <div class="col"><span class="code">string</span></div>
            <div class="col">State Abbreviations</div>
        </div>
        <div class="row">
            <div class="col">titles</div>
            <div class="col">自定义列表标题</div>
            <div class="col"><span class="code">array</span></div>
            <div class="col"> ['List 1', 'List 2'] </div>
        </div>
        <div class="row">
            <div class="col">button-texts</div>
            <div class="col">自定义按钮文案</div>
            <div class="col"><span class="code">array</span></div>
            <div class="col"> [ ] </div>
        </div>
        <div class="row">
            <div class="col">props</div>
            <div class="col">数据源的字段别名</div>
            <div class="col"><span class="code">{ key, label, disabled }</span></div>
            <div class="col"> — </div>
        </div>
    </div>
</div>

## Select Events

<div class="example_transfer">
    <div class="containerx">
        <div class="row">
            <div class="col"><b>事件名</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>回调参数</b></div>
        </div>
        <div class="row">
            <div class="col">change</div>
            <div class="col">右侧列表元素变化时触发</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col">当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组</div>
        </div>
        <div class="row">
            <div class="col">left-check-change</div>
            <div class="col">左侧列表元素被用户选中 / 取消选中时触发</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col">当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组</div>
        </div>
        <div class="row">
            <div class="col">right-check-change</div>
            <div class="col">右侧列表元素被用户选中 / 取消选中时触发</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col">当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组</div>
        </div>
    </div>
</div>
