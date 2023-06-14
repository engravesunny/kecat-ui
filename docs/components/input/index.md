<style>
.code{
    padding:2px 5px;
    background-color: #c6e2ff;
    border-radius: 5px;
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
.warning_box{
    padding: 8px 16px;
    background-color: #fef0f0;
    border-radius: 4px;
    border-left: 5px solid #f56c6c;
    margin: 20px 0;
}
.example_input{
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
.ke-row+.ke-row{
    margin-top: 20px;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
const textarea = ref('')
const text = ref('')
</script>

# Input 输入框

通过鼠标或键盘输入字符

<div class="warning_box">
    <h4><strong>WARING</strong></h4>
    <p>Input 为受控组件，它<strong>总会显示 Vue 绑定值</strong>。</p>
    <p>在正常情况下，input 的输入事件应该被正常响应。 它的处理程序应该更新组件的绑定值 (或使用 v-model)。 否则，输入框的值将不会改变。</p>
    <p>不支持 v-model 修饰符。</p>
</div>

## 基础用法

<div class="example_input">
    <ke-input v-model="input" placeholder="Please input" />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <ke-input v-model="input" placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```

</details>

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

<div class="example_input">
    <ke-input v-model="input" disabled placeholder="Please input" />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-input v-model="input" disabled placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```

</details>

## 一键清空

<div class="example_input">
    <ke-input v-model="input" placeholder="Please input" clearable />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <ke-input v-model="input" placeholder="Please input" clearable />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```

</details>

## 格式化

在 `formatter`的情况下显示值，我们通常同时使用 `parser`

<div class="example_input">
    <ke-input
        v-model="input"
        placeholder="Please input"
        :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
        :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
    />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <ke-input
    v-model="input"
    placeholder="Please input"
    :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
    :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```

</details>

## 密码框

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框

<div class="example_input">
    <ke-input
        v-model="input"
        type="password"
        placeholder="Please input password"
        show-password
    />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <ke-input
    v-model="input"
    type="password"
    placeholder="Please input password"
    show-password
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
```

</details>

## 带图标的输入框

带有图标标记输入类型

要在输入框中添加图标，你可以简单地使用 `prefix-icon` 和 `suffix-icon` 属性。 另外， `prefix` 和 `suffix` 命名的插槽也能正常工作。

<div class="example_input">
    <ke-row :gutter="20">
        <ke-col span="6">
            <span>Using attributes</span>
        </ke-col>
        <ke-col span="8">
            <ke-input
                v-model="input1"
                placeholder="Pick a date"
                suffix-icon="rili"
            />
        </ke-col>
        <ke-col span="8">
            <ke-input
                v-model="input2"
                placeholder="Type something"
                prefix-icon="bianji"
            />
        </ke-col>
    </ke-row>
    <ke-row gutter="20">
        <ke-col span="6">
            <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
                >Using slots</span
            >
        </ke-col>
        <ke-col span="8">
            <ke-input v-model="input3" class="w-50 m-2" placeholder="Pick a date">
                <template #suffix>
                    <ke-icon name="rili"></ke-icon>
                </template>
            </ke-input>
        </ke-col>
        <ke-col span="8">
            <ke-input v-model="input4" class="w-50 m-2" placeholder="Type something">
                <template #prefix>
                    <ke-icon name="bianji"></ke-icon>
                </template>
            </ke-input>
        </ke-col>
    </ke-row>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-row :gutter="20">
        <ke-col span="6">
            <span>Using attributes</span>
        </ke-col>
        <ke-col span="8">
            <ke-input
                v-model="input1"
                placeholder="Pick a date"
                suffix-icon="rili"
            />
        </ke-col>
        <ke-col span="8">
            <ke-input
                v-model="input2"
                placeholder="Type something"
                prefix-icon="bianji"
            />
        </ke-col>
    </ke-row>
    <ke-row gutter="20">
        <ke-col span="6">
            <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
                >Using slots</span
            >
        </ke-col>
        <ke-col span="8">
            <ke-input v-model="input3" class="w-50 m-2" placeholder="Pick a date">
                <template #suffix>
                    <ke-icon name="rili"></ke-icon>
                </template>
            </ke-input>
        </ke-col>
        <ke-col span="8">
            <ke-input v-model="input4" class="w-50 m-2" placeholder="Type something">
                <template #prefix>
                    <ke-icon name="bianji"></ke-icon>
                </template>
            </ke-input>
        </ke-col>
    </ke-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
</script>
```

</details>

## 文本域

用于输入多行文本信息可缩放的输入框。 添加 `type="textarea"` 属性来将 input 元素转换为原生的 textarea 元素。

文本域高度可通过 `rows` 属性控制

<div class="example_input">
    <ke-input
        v-model="textarea"
        :rows="2"
        type="textarea"
        placeholder="Please input"
    />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <ke-input
    v-model="textarea"
    :rows="2"
    type="textarea"
    placeholder="Please input"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const textarea = ref('')
</script>
```

</details>

## 尺寸

使用 `size` 属性改变输入框大小。 除了默认大小外，还有另外两个选项： `large`, `small`。

<div class="example_input">
    <ke-input
      v-model="input1"
      size="large"
      placeholder="Please Input"
      suffix-icon="bianji"
    />
    &nbsp;
    <ke-input
      v-model="input2"
      placeholder="Please Input"
      suffix-icon="bianji"
    />
    &nbsp;
    <ke-input
      v-model="input3"
      size="small"
      placeholder="Please Input"
      suffix-icon="bianji"
    />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-input
      v-model="input1"
      size="large"
      placeholder="Please Input"
      suffix-icon="bianji"
    />
    &nbsp;
    <ke-input
      v-model="input2"
      placeholder="Please Input"
      suffix-icon="bianji"
    />
    &nbsp;
    <ke-input
      v-model="input3"
      size="small"
      placeholder="Please Input"
      suffix-icon="bianji"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
</script>

```

</details>

## 输入长度限制

使用 `maxlength` 属性, 来控制输入内容的最大字数和最小字数。 "字符数"使用JavaScript字符串长度来衡量。 为文本或文本输入类型设置 `maxlength` prop可以限制输入值的长度。 允许你通过设置 `show-word-limit` 到 `true` 来显示剩余字数。

<div class="example_input">
    <ke-input
        v-model="text"
        maxlength="10"
        placeholder="Please input"
        show-word-limit
        type="text"
    />
    <div style="margin: 20px 0" />
    <ke-input
        v-model="textarea"
        maxlength="30"
        placeholder="Please input"
        show-word-limit
        type="textarea"
    />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-input
        v-model="text"
        maxlength="10"
        placeholder="Please input"
        show-word-limit
        type="text"
    />
    <div style="margin: 20px 0" />
    <ke-input
        v-model="textarea"
        maxlength="30"
        placeholder="Please input"
        show-word-limit
        type="textarea"
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const text = ref('')
const textarea = ref('')
</script>
```

</details>

# API

## Attributes

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
            <div class="col"><span class="code">string</span> / <span class="code">number</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">type</div>
            <div class="col">类型</div>
            <div class="col"><span class="code">string</span></div>
            <div class="col"> text </div>
        </div>
        <div class="row">
            <div class="col">maxlength</div>
            <div class="col">最大输入长度</div>
            <div class="col"><span class="code">string</span> / <span class="code">number</span></div>
            <div class="col"> false </div>
        </div>
        <div class="row">
            <div class="col">show-word-limit</div>
            <div class="col">是否显示统计字数</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col"> true </div>
        </div>
        <div class="row">
            <div class="col">placeholder</div>
            <div class="col">输入框占位文本</div>
            <div class="col"><span class="code">string</span></div>
            <div class="col">  — </div>
        </div>
        <div class="row">
            <div class="col">clearable</div>
            <div class="col">是否显示清除按钮</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col"> false </div>
        </div>
        <div class="row">
            <div class="col">formatter</div>
            <div class="col">指定输入值的格式</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">parser</div>
            <div class="col">指定从格式化器输入中提取的值</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">show-password</div>
            <div class="col">是否显示切换密码图标</div>
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
            <div class="col">size</div>
            <div class="col">输入框尺寸</div>
            <div class="col"><span class="code">'large'</span> / <span class="code">'small'</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">prefix-icon</div>
            <div class="col">自定义前缀图标</div>
            <div class="col"><span class="code">string</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">suffix-icon</div>
            <div class="col">自定义后缀图标</div>
            <div class="col"><span class="code">string</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">rows</div>
            <div class="col">输入框行数，仅 <span class="code">type</span> 为 'textarea' 时有效</div>
            <div class="col"><span class="code">number</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">name</div>
            <div class="col">等价于原生 input name 属性</div>
            <div class="col"><span class="code">string</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">max</div>
            <div class="col">原生 max 属性，设置最大值</div>
            <div class="col"> — </div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">min</div>
            <div class="col">原生属性，设置最小值</div>
            <div class="col"> — </div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">autofocus</div>
            <div class="col">原生属性，自动获取焦点</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col"> false </div>
        </div>
        <div class="row">
            <div class="col">step</div>
            <div class="col">原生属性，设置输入字段的合法数字间隔</div>
            <div class="col"> — </div>
            <div class="col"> — </div>
        </div>
    </div>
</div>

## Events

<div class="example">
    <div class="containerx">
        <div class="row">
            <div class="col"><b>事件名</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>—</b></div>
        </div>
        <div class="row">
            <div class="col">blur</div>
            <div class="col">当选择器的输入框失去焦点时触发</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col">—</div>
        </div>
        <div class="row">
            <div class="col">focus</div>
            <div class="col">当选择器的输入框获得焦点时触发</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col">—</div>
        </div>
        <div class="row">
            <div class="col">clear</div>
            <div class="col">在点击由 <span class="code">clearable</span> 属性生成的清空按钮时触发</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col">—</div>
        </div>
        <div class="row">
            <div class="col">input</div>
            <div class="col">在 Input 值改变时触发</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col">—</div>
        </div>
    </div>
</div>

## Slots

<div class="example">
    <div class="containerx">
        <div class="row">
            <div class="col"><b>插槽名</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>—</b></div>
            <div class="col"><b>—</b></div>
        </div>
        <div class="row">
            <div class="col">prefix</div>
            <div class="col">输入框头部内容</div>
            <div class="col">—</div>
            <div class="col">—</div>
        </div>
        <div class="row">
            <div class="col">suffix</div>
            <div class="col">输入框尾部内容</div>
            <div class="col">—</div>
            <div class="col">—</div>
        </div>
    </div>
</div>

## Exposes

<div class="example">
    <div class="containerx">
        <div class="row">
            <div class="col"><b>名称</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>—</b></div>
        </div>
        <div class="row">
            <div class="col">blur</div>
            <div class="col">使 input 失去焦点</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col">—</div>
        </div>
        <div class="row">
            <div class="col">clear</div>
            <div class="col">清除 input 值</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col">—</div>
        </div>
        <div class="row">
            <div class="col">focus</div>
            <div class="col">使 input 获取焦点</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col">—</div>
        </div>
        <div class="row">
            <div class="col">input</div>
            <div class="col">Input HTML 元素</div>
            <div class="col"><span class="code">object</span></div>
            <div class="col">—</div>
        </div>
    </div>
</div>
