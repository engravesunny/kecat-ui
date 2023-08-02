<template>
    <div class="ke-upload">
        <input
            ref="fileInput"
            type="file"
            class="ke-upload-input"
            :multiple="multiple"
            :accept="accept"
            @change="handleFileChange"
            @click.stop
        >
        <div
            v-if="listStyle==='doc'"
            class="ke-upload-content"
        >
            <ke-button
                class="ke-upload-btn"
                :type="btnType"
                @click="handleUploadClick"
            >
                选择文件
            </ke-button>
        </div>
        <div
            v-else-if="listStyle==='drag'"
            ref="dragArea"
            draggable="true"
            class="ke-upload-dragArea"
            :class="{dragging:dragging,hovering:hovering}"
            @click="handleUploadClick"
            @dragenter.prevent="handleDragEnter"
            @drop.stop
            @drop.prevent="handleDrop"
            @dragover.prevent
            @dragleave.prevent="handleDragLeave"
            @dragend.prevent="handleDragLeave"
            @dragexit.prevent
            @dragstart.prevent
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
        >
            <div class="area-icon">
                <ke-icon name="tongji"></ke-icon>
            </div>
            <div class="area-tip">
                <template v-if="$slots.dragInfo">
                    <slot name="dragInfo" />
                </template>
                <span v-else>Drop file here or click to upload</span>
            </div>
        </div>
        <ul
            v-else
            class="ke-upload-imgs"
        >
            <li
                v-for="(item,index) in imgList"
                :key="item.url"
                class="imgItem"
                @mouseenter="handleImgHover(index)"
                @mouseleave="handleImgHoverRemove(index)"
            >
                <div
                    v-if="imgHovering[index]"
                    class="mark"
                >
                    <ke-icon
                        name="sousuo"
                        class="icon"
                        @click="handleShowImgPre(item.url)"
                    ></ke-icon>
                    <ke-icon
                        name="shanchu"
                        class="icon"
                        @click="handleDelImg(index)"
                    ></ke-icon>
                </div>
                <img
                    :src="item.url"
                    :alt="item?.file?item.file.name:index.toString()"
                >
            </li>
            <li class="imgItem">
                <div
                    class="uploadBox"
                    @click="handleUploadClick"
                >
                    <ke-icon name="tianjia2"></ke-icon>
                </div>
            </li>
        </ul>
        <template v-if="$slots.tip&&listStyle!=='img'">
            <div class="ke-upload-tip">
                <slot name="tip" /> 
            </div>
        </template>
        <template v-if="showFileList&&listStyle!=='img'">
            <ul class="ke-upload-fileList">
                <li
                    v-for="(item,index) in fileList"
                    :key="item.name"
                    class="file-item"
                >
                    <ke-icon
                        name="wenjian1"
                        class="icon-left"
                    ></ke-icon>
                    <span>{{ item.name }}</span>
                    <ke-icon
                        name="guanbi1"
                        class="icon-right"
                        @click="handleDelFileItem(index)"
                    ></ke-icon>
                </li>
            </ul>
        </template>
        <div
            v-if="showImgPre"
            class="ke-upload-imgPre"
            :class="{preFadeIn:isAniamte,preFadeOut:!isAniamte}"
        >
            <div
                class="mark"
                @click="handleClosePre"
            >
                <ke-scrollbar height="100vh">
                    <div
                        class="imgItem"
                        @click.stop
                    >
                        <img
                            :src="preUrl"
                            alt=""
                        >
                        <ke-icon
                            name="guanbi1"
                            class="icon"
                            @click="handleClosePre"
                        ></ke-icon>
                    </div>
                </ke-scrollbar>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { uploadProps, uploadFile, imgItem } from './upload'

const emit = defineEmits(['change', 'update:fileList'])
const props = defineProps(uploadProps)

const isAniamte = ref(false)
const preUrl = ref('https://cdn.jsdelivr.net/gh/engravesunny/CDN/image/postImg/48.webp')
const showImgPre = ref(false)
const hovering = ref(false)
const fileList = ref<Array<File>>([...props.fileList as File[]])
const fileInput = ref<HTMLInputElement>()
const dragArea = ref<HTMLElement>()
const dragging = ref(false)
const imgList = reactive<imgItem[]>(props.imgList)
const imgHovering = ref<boolean[]>([])
const uploadFiles = ref<Array<File>>([])

const handleImgHover = (index:number) => {
    imgHovering.value[index] = true
}
const handleImgHoverRemove = (index:number) => {
    imgHovering.value[index] = false
}

const handleUploadClick = () => {
    const fileEl = fileInput.value as HTMLInputElement
    fileEl.value = ''
    fileEl.click()
}
const updateFileList = (files:File[]) => {
    const tempList = [...fileList.value, ...files]
    if (props.limit === 1 && files.length === 1) {
        if (props.listStyle === 'img') {
            const imgItem = URL.createObjectURL(files[0])
            imgList.push({ file: files[0], url: imgItem })
        }
        uploadFiles.value.push(...files)
        fileList.value = [...files]
        emit('change', fileList.value)
        emit('update:fileList', fileList.value)
    } else if (props.limit && tempList.length > props.limit) {
        props.onExceed(fileList.value)
    } else {
        if (props.listStyle === 'img') {
            const fileArr = [...files]
            const imgArr = fileArr.map(file => ({
                file,
                url: URL.createObjectURL(file),
            }))
            imgList.push(...imgArr)
        }
        uploadFiles.value.push(...files)
        fileList.value = tempList
        emit('change', fileList.value)
        emit('update:fileList', fileList.value)
    }
}

const upload = (file:File) => {
    const beforeUpload = props.beforeUpload
    const url = props.uploadUrl as string
    const name = props.formName as string
    if (beforeUpload === undefined) {
        console.log(fileList.value)
        uploadFile(url, file, name)
    } else if (beforeUpload && beforeUpload(file)) {
        console.log(fileList.value)
        uploadFile(url, file, name)
    }
}

const handleFileChange = (e:Event) => {
    const files = (e.target as any).files as Array<File>
    if (props.limit && files.length > props.limit) {
        const exceed = props.onExceed as Function
        exceed()
    } else {
        updateFileList(files)
        if (props.autoUpload) {
            uploadFiles.value.forEach(file => {
                upload(file)
            })
            uploadFiles.value = []
        }
    }
}
const handleDelFileItem = (index:number) => {
    fileList.value.splice(index, 1)
}
const handleDrop = (e:any) => {
    const files = e.dataTransfer.files as File[]
    updateFileList(files)
    if (props.autoUpload) {
        uploadFiles.value.forEach(file => {
            upload(file)
        })
        uploadFiles.value = []
    }
    dragging.value = false
}

const handleDragEnter = () => {
    dragging.value = true
}
const handleDragLeave = () => {
    dragging.value = false
}

const handleMouseEnter = () => {
    hovering.value = true
}
const handleMouseLeave = () => {
    hovering.value = false
}

const handleShowImgPre = (url:string) => {
    preUrl.value = url
    isAniamte.value = true
    setTimeout(() => {
        showImgPre.value = true
    }, 10)
}
const handleClosePre = () => {
    isAniamte.value = false
    setTimeout(() => {
        showImgPre.value = false
    }, 250)
}
const handleDelImg = (index:number) => {
    handleDelFileItem(index)
    imgList.splice(index, 1)
}

const clearFiles = () => {
    fileList.value = []
    emit('update:fileList', [])
}

defineExpose({
    clearFiles,
})

defineOptions({
    name: 'KeUpload',
})
</script>

<style lang="less" scoped>
@import '../style/index.less';
</style>