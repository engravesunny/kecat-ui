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
</style>

# Checkbox 多选框

在一组备选项中进行多选。

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

`checkbox-group`元素能把多个 `checkbox` 管理为一组，只需要在`Group`中使用 `v-model` 绑定 `Array` 类型的变量即可。 `ke-checkbox` 标签中的内容将成为复选框按钮之后的描述。

<div class="example">
    <div>
        <ke-checkbox v-model="checked1" label="Option 1" large />
        <ke-checkbox v-model="checked2" label="Option 2" large />
    </div>
    <div>
        <ke-checkbox v-model="checked3" label="Option 1" />
        <ke-checkbox v-model="checked4" label="Option 2" />
    </div>
    <div>
        <ke-checkbox v-model="checked5" label="Option 1" small />
        <ke-checkbox v-model="checked6" label="Option 2" small />
    </div>
    <div>
        <ke-checkbox v-model="checked5" label="Option 1" small disabled />
        <ke-checkbox v-model="checked6" label="Option 2" small disabled />
    </div>
</div>

<script lang="ts" setup>
import { ref } from 'vue'

const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
const checkList = ref(['selected and disabled', 'Option A'])
const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)
</script>

<details>
<summary>展开查看</summary>

```vue
<template>
    <div>
        <ke-checkbox v-model="checked1" label="Option 1" large />
        <ke-checkbox v-model="checked2" label="Option 2" large />
    </div>
    <div>
        <ke-checkbox v-model="checked3" label="Option 1" />
        <ke-checkbox v-model="checked4" label="Option 2" />
    </div>
    <div>
        <ke-checkbox v-model="checked5" label="Option 1" small />
        <ke-checkbox v-model="checked6" label="Option 2" small />
    </div>
    <div>
        <ke-checkbox v-model="checked5" label="Option 1" small disabled />
        <ke-checkbox v-model="checked6" label="Option 2" small disabled />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)
</script>

```

</details>

## 禁用状态

多选框不可用状态。

设置 `disabled` 属性即可。

<div class="example">
    <ke-checkbox v-model="checked1" disabled>Disabled</ke-checkbox>
    <ke-checkbox v-model="checked2">Not disabled</ke-checkbox>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-checkbox v-model="checked1" disabled>Disabled</ke-checkbox>
    <ke-checkbox v-model="checked2">Not disabled</ke-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checked1 = ref(false)
const checked2 = ref(true)
</script>

```

</details>

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

在 `ke-checkbox` 元素中定义 `v-model` 绑定变量，单一的 `checkbox` 中，默认绑定变量的值会是 `Boolean`，选中为 `true`。 在 `ke-checkbox` 组件中，`label` 是选择框的值。 如果该组件下没有被传入内容，那么 `label` 将会作为 `checkbox` 按钮后的介绍。 `label` 也与数组中的元素值相对应。 如果指定的值存在于数组中，就处于选择状态，反之亦然。

<div class="example">
    <ke-checkbox-group v-model="checkList">
        <ke-checkbox label="Option A" />
        <ke-checkbox label="Option B" />
        <ke-checkbox label="Option C" />
        <ke-checkbox label="disabled" disabled />
        <ke-checkbox label="selected and disabled" disabled />
    </ke-checkbox-group>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-checkbox-group v-model="checkList">
        <ke-checkbox label="Option A" />
        <ke-checkbox label="Option B" />
        <ke-checkbox label="Option C" />
        <ke-checkbox label="disabled" disabled />
        <ke-checkbox label="selected and disabled" disabled />
    </ke-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref(['selected and disabled', 'Option A'])
</script>

```

</details>

## 可选项目数量的限制

使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量。

<div class="example">
    <ke-checkbox-group v-model="checkedCities" :min="1" :max="2">
        <ke-checkbox v-for="city in cities" :key="city" :label="city">
            {{ city }}
        </ke-checkbox>
    </ke-checkbox-group>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-checkbox-group v-model="checkedCities" :min="1" :max="2">
        <ke-checkbox v-for="city in cities" :key="city" :label="city">
            {{ city }}
        </ke-checkbox>
    </ke-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
</script>

```

</details>

# Checkbox API

## Checkbox Attributes

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
            <div class="col">选中状态的值（只有在<span class="code">checkbox-group</span>或者绑定对象类型为<span class="code">array</span>时有效）</div>
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
            <div class="col">large</div>
            <div class="col">大尺寸</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col"> false </div>
        </div>
        <div class="row">
            <div class="col">small</div>
            <div class="col">小尺寸</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col"> false </div>
        </div>
        <div class="row">
            <div class="col">name</div>
            <div class="col">原生 name 属性</div>
            <div class="col"><span class="code">string</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">id</div>
            <div class="col">input id</div>
            <div class="col"><span class="code">string</span></div>
            <div class="col"> — </div>
        </div>
    </div>
</div>

## Checkbox Events

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
            <div class="col">当绑定值变化时触发的事件</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col">—</div>
        </div>
    </div>
</div>

# CheckboxGroup API

## CheckboxGroup Attributes

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
            <div class="col">绑定值</div>
            <div class="col"><span class="code">string[]</span> | <span class="code">number[]</span></div>
            <div class="col">[]</div>
        </div>
        <div class="row">
            <div class="col">min</div>
            <div class="col">可被勾选的 checkbox 的最小数量</div>
            <div class="col"><span class="code">number</span></div>
            <div class="col">0</div>
        </div>
        <div class="row">
            <div class="col">max</div>
            <div class="col">可被勾选的 checkbox 的最大数量</div>
            <div class="col"><span class="code">number</span></div>
            <div class="col">9999</div>
        </div>
    </div>
</div>

## CheckboxGroup Events

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
            <div class="col">当绑定值变化时触发的事件</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col">—</div>
        </div>
    </div>
</div>
