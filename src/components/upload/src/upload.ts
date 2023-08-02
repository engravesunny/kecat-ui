import { buildProps } from '../../../utils/buildProps'
import { buttonType } from '@/components/button/src/button'
import axios from 'axios'

const request = axios.create({
    baseURL: '',
    timeout: 5000,
})

request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'multipart/form-data'
    return config
})

export const listStyle = ['doc', 'img', 'drag']

export const uploadFile = (url:string, file:File, name = 'file') => request({
    url,
    method: 'post',
    data: { [name]: file },
})

export type imgItem = {
    file?:File,
    url:string
}

export const uploadProps = buildProps({
    multiple: {
        type: Boolean,
        default: false,
    },
    fileList: {
        type: Array,
        default: [],
    },
    btnType: {
        type: String,
        value: buttonType,
        default: 'primary',
    },
    showFileList: {
        type: Boolean,
    },
    limit: {
        type: Number,
    },
    onExceed: {
        type: Function,
        default: () => {
            console.log('文件个数超出限制')
        },
    },
    listStyle: {
        type: String,
        values: listStyle,
        default: 'doc',
    },
    beforeUpload: {
        type: Function,
    },
    uploadUrl: {
        type: String,
        default: 'http://kecat.top',
    },
    formName: {
        type: String,
        default: 'file',
    },
    accept: {
        type: String,
        default: '*',
    },
    imgList: {
        type: Array<imgItem>,
        default: [],
    },
    autoUpload: {
        type: Boolean,
        default: true,
    },
})