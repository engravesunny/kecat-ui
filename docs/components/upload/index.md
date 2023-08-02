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
    .example_upload{
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

const fileList = ref([
  {
    name: 'kecat-logo.svg',
  },
  {
    name: 'kecat-logo2.svg',
  },
])
const fileList2 = ref([])
const imgList = ref([
    {
        url:'https://kecat.top/images/wallpaper/kiana.webp'
    },
    {
        url:'https://kecat.top/images/wallpaper/8.webp'
    },
    {
        url:'https://kecat.top/images/wallpaper/9.webp'
    },
    {
        url:'https://kecat.top/images/wallpaper/5.webp'
    },
    {
        url:'https://kecat.top/images/wallpaper/44.webp'
    }
])

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  console.log('Exceed')
}
const handleBeforeUpload = () => {
    return false
}
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}
</script>

# Upload 上传

## 基础用法

通过 `slot` 你可以传入自定义文字提示。 可通过设置 `limit` 和 `on-exceed` 来限制上传文件的个数和定义超出限制时的行为。通过设置`btnType`控制按钮类型。

<div class="example_upload">
    <ke-upload v-model:file-list="fileList" :limit="3" :on-exceed="handleExceed" show-file-list :before-upload="handleBeforeUpload">
        <template #tip>
            <span>jpg/png files with a size less than 500KB.</span>
        </template>
    </ke-upload>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-upload v-model:file-list="fileList" :limit="3" :on-exceed="handleExceed" show-file-list :before-upload="handleBeforeUpload">
        <template #tip>
            <span>jpg/png files with a size less than 500KB.</span>
        </template>
    </ke-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const fileList = ref([
  {
    name: 'kecat-logo.svg',
  },
  {
    name: 'kecat-logo2.svg',
  },
])

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  console.log('Exceed')
}
const handleBeforeUpload = () => {
    return false
}
</script>
```

</details>

## 上传文件

此组件会自动上传选中的文件，需要传入上传地址`uploadUrl` , 若有跨域、自定义上传表单参数或自定义设置请求头参数等需求请不要使用此内置上传请求，并置`auto-upload`为false或者在`before-upload`传入的函数中返回`false`。

## 覆盖前一个文件

设置 `limit` 和 `on-exceed` 可以在选中时自动替换上一个文件。

<div class="example_transfer">
    <ke-upload v-model:file-list="fileList2" :limit="1" show-file-list :before-upload="handleBeforeUpload">
        <template #tip>
            <span>jpg/png files with a size less than 500KB.</span>
        </template>
    </ke-upload>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-upload v-model:file-list="fileList" :limit="1" show-file-list :before-upload="handleBeforeUpload">
        <template #tip>
            <span>jpg/png files with a size less than 500KB.</span>
        </template>
    </ke-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const fileList = ref([])

const handleBeforeUpload = () => {
    return false
}
</script>
```

</details>

## 用户头像

可通过设置`accept`和`listStyle`限制用户上传文件的格式以及改变上传的样式，可以在`before-upload`中限制用户上传文件大小。

<div class="example_transfer">
    <ke-upload v-model:file-list="fileList2" list-style="img" accept="image/jpeg" :before-upload="beforeAvatarUpload" />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-upload 
        v-model:file-list="fileList" 
        list-style="img" 
        accept="image/jpeg" 
        :before-upload="beforeAvatarUpload" 
    />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const fileList = ref([])

const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}
</script>
```

</details>

## 照片墙

使用 `list-type` 属性来设定文件列表的样式。

<div class="example_transfer">
    <ke-upload list-style="img" :img-list="imgList" :before-upload="handleBeforeUpload"></ke-upload>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-upload list-style="img" :img-list="imgList" :before-upload="handleBeforeUpload"></ke-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const imgList = ref([
    {
        url:'https://kecat.top/images/wallpaper/kiana.webp'
    },
    {
        url:'https://kecat.top/images/wallpaper/8.webp'
    },
    {
        url:'https://kecat.top/images/wallpaper/9.webp'
    },
    {
        url:'https://kecat.top/images/wallpaper/5.webp'
    },
    {
        url:'https://kecat.top/images/wallpaper/44.webp'
    }
])

const handleBeforeUpload = () => {
    return false
}
</script>
```

</details>

## 拖拽上传

你可以将文件拖拽到特定区域以进行上传。

<div class="example_transfer">
    <ke-upload
        list-style="drag"
        v-model:file-list="fileList"
        :limit="3"
        :on-exceed="handleExceed"
        show-file-list
        :before-upload="handleBeforeUpload"
    >
        <template #dragInfo>
            <span>拖拽到此处上传</span>
        </template>
        <template #tip>
            <span>这里是tip</span>
        </template>
    </ke-upload>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <ke-upload
        list-style="drag"
        v-model:file-list="fileList"
        :limit="3"
        :on-exceed="handleExceed"
        show-file-list
        :before-upload="handleBeforeUpload"
    >
        <template #dragInfo>
            <span>拖拽到此处上传</span>
        </template>
        <template #tip>
            <span>这里是tip</span>
        </template>
    </ke-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const fileList = ref([
  {
    name: 'kecat-logo.svg',
  },
  {
    name: 'kecat-logo2.svg',
  },
])
const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  console.log('Exceed')
}
const handleBeforeUpload = () => {
    return false
}
</script>
```

</details>

# Upload API

## Upload Attributes

<div class="example_transfer">
    <div class="containerx">
        <div class="row">
            <div class="col"><b>属性名</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>默认值</b></div>
        </div>
        <div class="row">
            <div class="col">upload-url</div>
            <div class="col">请求 URL</div>
            <div class="col"><span class="code">string</span></div>
            <div class="col"> — </div>
        </div>
        <div class="row">
            <div class="col">multiple</div>
            <div class="col">是否支持多选文件</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col"> false </div>
        </div>
        <div class="row">
            <div class="col">show-file-list</div>
            <div class="col">是否显示已上传文件列表</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col"> false </div>
        </div>
        <div class="row">
            <div class="col">accept</div>
            <div class="col">接受上传的文件类型</div>
            <div class="col"><span class="code">string</span></div>
            <div class="col"> —— </div>
        </div>
        <div class="row">
            <div class="col">before-upload</div>
            <div class="col">上传文件之前的钩子，参数为上传的文件， 若返回false或者返回 Promise 且被 reject，则停止上传。</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col"> —— </div>
        </div>
        <div class="row">
            <div class="col">file-list / v-model:file-list</div>
            <div class="col">默认上传文件</div>
            <div class="col"><span class="code">array</span></div>
            <div class="col"> [ ] </div>
        </div>
        <div class="row">
            <div class="col">list-type</div>
            <div class="col">文件列表的类型</div>
            <div class="col"><span class="code">{{ [drag, doc, img] }}</span></div>
            <div class="col"> doc </div>
        </div>
        <div class="row">
            <div class="col">auto-upload</div>
            <div class="col">是否自动上传文件</div>
            <div class="col"><span class="code">boolean</span></div>
            <div class="col"> true </div>
        </div>
        <div class="row">
            <div class="col">limit</div>
            <div class="col">允许上传文件的最大数量</div>
            <div class="col"><span class="code">number</span></div>
            <div class="col"> —— </div>
        </div>
        <div class="row">
            <div class="col">on-exceed</div>
            <div class="col">当超出限制时，执行的钩子函数</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col"> —— </div>
        </div>
    </div>
</div>

## Select Slots

<div class="example_transfer">
    <div class="containerx">
        <div class="row">
            <div class="col"><b>插槽名</b></div>
            <div class="col"><b>说明</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>——</b></div>
        </div>
        <div class="row">
            <div class="col">tip</div>
            <div class="col">提示说明文字</div>
            <div class="col"><span class="code">-</span></div>
            <div class="col">-</div>
        </div>
        <div class="row">
            <div class="col">dragInfo</div>
            <div class="col">拖拽上传文字说明</div>
            <div class="col"><span class="code">-</span></div>
            <div class="col">-</div>
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
            <div class="col">文件列表改变事件</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col">fileList</div>
        </div>
    </div>
</div>

## Select Exposes

<div class="example_transfer">
    <div class="containerx">
        <div class="row">
            <div class="col"><b>名称</b></div>
            <div class="col"><b>描述</b></div>
            <div class="col"><b>类型</b></div>
            <div class="col"><b>-</b></div>
        </div>
        <div class="row">
            <div class="col">clearFiles</div>
            <div class="col">清空已上传的文件列表</div>
            <div class="col"><span class="code">Function</span></div>
            <div class="col">-</div>
        </div>
    </div>
</div>
