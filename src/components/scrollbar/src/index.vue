<template>
    <div class="ke-scrollbar-hidden">
        <div
            ref="container"
            class="ke-scrollbar-viewer"
            @mouseenter="showScrollbar"
            @mouseleave="closeScrollbar"
        >
            <slot />
        </div>
        <div
            ref="thumb"
            class="ke-scrollbar-thumb"
            :style="{width:thumbWidth,height:thumbHeight}"
        >
            <div
                ref="bar"
                class="ke-scrollbar-bar"
                :style="{
                    transform:`translateY(${barToTop}%) translateX(${barToLeft}%)`,
                    height:`${barHeight}px`,
                    width:`${barWidth}px`,
                    opacity:`${barOpacity}`
                }"
                @mousedown.prevent=""
                @mousedown.stop=""
                @mouseenter="barOpacity=0.5"
            ></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const barToTop = ref<number>(0)
const barToLeft = ref<number>(0)
const barHeight = ref<number>(6)
const barWidth = ref<number>(6)

const thumbHeight = ref<string>('5px')
const thumbWidth = ref<string>('5px')

defineOptions({
    name: 'KeScrollbar',
})
const container = ref<HTMLElement>()
const bar = ref<HTMLElement>()
const thumb = ref<HTMLElement>()
const barOpacity = ref<number>(0)
const isScrolling = ref<boolean>(false)
const shouldShowBar = ref<boolean>(true)

const showScrollbar = () => {
    if (shouldShowBar.value) {
        if (isScrolling.value) {
            barOpacity.value = 0.8
        } else {
            barOpacity.value = 0.5
        }
    }
}

const closeScrollbar = () => {
    if (!isScrolling.value) {
        barOpacity.value = 0
    }
}

function throttle(func:Function, delay:number) {
    let timer:any = null
    return function (this:any, ...args:Array<any>) {
        const context = this as any
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(context, args)
                timer = null
            }, delay)
        }
    }
}

const setViewScrollTop = () => {
    const vh = container.value?.clientHeight as number // 视口高度
    container.value?.scrollTo({
        top: (barToTop.value / 100) * vh,
    })
}

const setViewScrollLeft = () => {
    const vw = container.value?.clientWidth as number
    container.value?.scrollTo({
        left: (barToLeft.value / 100) * vw,
    })
}

const listenBarMoveY = () => {
    bar.value?.addEventListener('mousedown', (e) => {
        const bY = e.pageY
        const bP = barToTop.value
        const listenMove = (ex:MouseEvent) => {
            const y = ex.pageY
            const moveY = y - bY
            const per = (moveY / (bar.value?.clientHeight as number)) * 100
            const vh = container.value?.clientHeight as number // 视口高度
            const barScrollTopb = (barHeight.value as number) * (((per + bP) + 100) / 100) // 底部判定
            const barScrollTopt = (barHeight.value as number) * (((per + bP)) / 100) // 顶部判定
            
            if (barScrollTopt >= 0 && barScrollTopb <= vh) {
                barToTop.value = bP + per
                setViewScrollTop()
            }
        }
        isScrolling.value = true
        barOpacity.value = 0.8
        document.onmousemove = throttle(listenMove, 10)
        document.addEventListener('mouseup', () => {
            document.onmousemove = null
            isScrolling.value = false
            barOpacity.value = 0.5
        })
    })
}

const listenBarMoveX = () => {
    bar.value?.addEventListener('mousedown', (e) => {
        const bX = e.pageX
        const bP = barToLeft.value
        const listenMove = (ex:MouseEvent) => {
            const X = ex.pageX
            const moveX = X - bX
            const per = (moveX / (bar.value?.clientWidth as number)) * 100
            const vw = container.value?.clientWidth as number // 视口宽度
            const barScrollTopb = (barWidth.value as number) * (((per + bP) + 100) / 100) // 底部判定
            const barScrollTopt = (barWidth.value as number) * (((per + bP)) / 100) // 顶部判定
            
            if (barScrollTopt >= 0 && barScrollTopb <= vw) {
                barToLeft.value = bP + per
                setViewScrollTop()
            }
        }
        isScrolling.value = true
        barOpacity.value = 0.8
        document.onmousemove = throttle(listenMove, 10)
        document.addEventListener('mouseup', () => {
            document.onmousemove = null
            isScrolling.value = false
            barOpacity.value = 0.5
        })
    })
}

const listenThumbClickY = () => {
    const thumbTop = thumb.value?.getBoundingClientRect().top as number
    const barH = barHeight.value as number
    const listenClick = (e:MouseEvent) => {
        const y = e.pageY
        const len = y - thumbTop
        const per = (len / barH) * 100 - 50
        barToTop.value = per
        setViewScrollTop()
    }
    thumb.value?.addEventListener('mousedown', listenClick)
}

const listenThumbClickX = () => {
    const thumbLeft = thumb.value?.getBoundingClientRect().left as number
    const barW = barWidth.value as number
    const listenClick = (e:MouseEvent) => {
        const x = e.pageX
        const len = x - thumbLeft
        const per = (len / barW) * 100 - 50
        barToLeft.value = per
        setViewScrollLeft()
    }
    thumb.value?.addEventListener('mousedown', listenClick)
}

const setBarTop = () => {
    const vh = container.value?.clientHeight as number
    const scrollTop = container.value?.scrollTop as number
    const per = (scrollTop / vh) * 100 as number
    barToTop.value = per
}

const initY = () => {
    const ch = container.value?.scrollHeight as number
    const vh = container.value?.clientHeight as number
    barHeight.value = (vh * vh) / ch
    container.value?.addEventListener('scroll', throttle(setBarTop, 10))
    listenBarMoveY()
    listenThumbClickY()
}

const initX = () => {
    const ch = container.value?.scrollWidth as number
    const vh = container.value?.clientWidth as number
    barWidth.value = (vh * vh) / ch
    listenThumbClickX()
    listenBarMoveX()
}

onMounted(() => {
    const chY = container.value?.scrollHeight as number
    const vhY = container.value?.clientHeight as number
    const chX = container.value?.scrollWidth as number
    const vhX = container.value?.clientWidth as number
    if (chY > vhY) {
        thumbHeight.value = '100%'
        initY()
    } 
    if (chX > vhX) {
        thumbWidth.value = '100%'
        initX()
    } 
    if (chY <= vhY && chX <= vhX) {
        shouldShowBar.value = false
    }
})

</script>

<style lang="less" scoped>
@import '../style/index.less';
</style>