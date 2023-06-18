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
    .example_select{
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

const value = ref('')
const value1 = ref([])
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const options2 = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const cities = [
  {
    value: 'Beijing',
    label: 'Beijing',
  },
  {
    value: 'Shanghai',
    label: 'Shanghai',
  },
  {
    value: 'Nanjing',
    label: 'Nanjing',
  },
  {
    value: 'Chengdu',
    label: 'Chengdu',
  },
  {
    value: 'Shenzhen',
    label: 'Shenzhen',
  },
  {
    value: 'Guangzhou',
    label: 'Guangzhou',
  },
]
</script>

# Select选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选 `v-model` 的值为当前被选中的 `el-option` 的 `value` 属性值

<div class="example_select">
    <ke-select v-model="value" placeholder="Select">
        <ke-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        />
    </ke-select>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-select v-model="value" placeholder="Select">
        <ke-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        />
    </ke-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
```

</details>

## 有禁用选项

在 `el-option` 中，设定 `disabled` 值为`true`，即可禁用该选项

<div class="example_select">
    <ke-select v-model="value" placeholder="Select">
        <ke-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
        />
    </ke-select>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-select v-model="value" placeholder="Select">
        <ke-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
        />
    </ke-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
```

</details>

## 禁用状态

禁用整个选择器组件

为 `el-select` 设置 `disabled` 属性，则整个选择器不可用。

<div class="example_select">
    <ke-select v-model="value" disabled placeholder="Select">
        <ke-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </ke-select>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-select v-model="value" disabled placeholder="Select">
        <ke-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </ke-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
```

</details>

## 可清空单选

您可以使用清除图标来清除选择。

为 `el-select` 设置 `clearable` 属性，则可将选择器清空。 需要注意的是，`clearable` 属性仅适用于单选。

<div class="example_select">
    <ke-select v-model="value" clearable placeholder="Select">
        <ke-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </ke-select>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-select v-model="value" clearable placeholder="Select">
        <ke-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </ke-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
```

</details>

## 基础多选

多选选择器使用 tag 组件来展示已选中的选项。

为 el-select 设置 multiple 属性即可启用多选， 此时 v-model 的值为当前选中值所组成的数组。

<div class="example_select">
    <ke-select
        v-model="value1"
        multiple
        placeholder="Select"
        style="width: 240px"
    >
        <ke-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </ke-select>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-select
        v-model="value1"
        multiple
        placeholder="Select"
        style="width: 240px"
    >
        <ke-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </ke-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref([])
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
```

</details>

## 自定义模板

你可以自定义如何来渲染每一个选项。

将自定义的 HTML 模板插入 el-option 的 slot 中即可。

<div class="example_select">
    <ke-select v-model="value" placeholder="Select">
        <ke-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        >
        <span style="float: left">{{ item.label }}</span>
        <span
            style="
            float: right;
            color: var(--el-text-color-secondary);
            font-size: 13px;
            "
            >{{ item.value }}</span
        >
        </ke-option>
    </ke-select>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-select v-model="value" placeholder="Select">
        <ke-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        >
        <span style="float: left">{{ item.label }}</span>
        <span
            style="
            float: right;
            color: var(--el-text-color-secondary);
            font-size: 13px;
            "
            >{{ item.value }}</span
        >
        </ke-option>
    </ke-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const cities = [
  {
    value: 'Beijing',
    label: 'Beijing',
  },
  {
    value: 'Shanghai',
    label: 'Shanghai',
  },
  {
    value: 'Nanjing',
    label: 'Nanjing',
  },
  {
    value: 'Chengdu',
    label: 'Chengdu',
  },
  {
    value: 'Shenzhen',
    label: 'Shenzhen',
  },
  {
    value: 'Guangzhou',
    label: 'Guangzhou',
  },
]
</script>
```

</details>

# Select API

## Select Attributes

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
            <div class="col"><span class="code">number/string</span> / <span class="code">number[]/string[]</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">multiple</div>
            <div class="col">是否多选</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col"> false </div>
        </div>
        <div class="row">
            <div class="col">disabled</div>
            <div class="col">是否禁用</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col"> false </div>
        </div>
        <div class="row">
            <div class="col">clearable </div>
            <div class="col">是否可以清空选项</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col">false</div>
        </div>
        <div class="row">
            <div class="col">placeholder</div>
            <div class="col">占位文字</div>
            <div class="col"><span class="code">string/number</span></div>
            <div class="col"> Select </div>
        </div>
    </div>
</div>

## Select Events

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
            <div class="col">选中值发生变化时触发</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col">val，目前的选中值</div>
        </div>
    </div>
</div>

# Option API

## Option Attributes

<div class="example_switch">
    <div class="containerx">
        <div class="row">
            <div class="col"><b>属性名</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>默认值</b></div>
        </div>
        <div class="row">
            <div class="col">value</div>
            <div class="col">选项的值</div>
            <div class="col"><span class="code">number/string</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">label</div>
            <div class="col">选项的标签</div>
            <div class="col"><span class="code">string/number</span></div>
            <div class="col"> false </div>
        </div>
        <div class="row">
            <div class="col">disabled</div>
            <div class="col">是否禁用该选项</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col"> false </div>
        </div>
    </div>
</div>
