<template>
    <div
        v-if="date"
        class="ke-calendar"
    >
        <ke-container>
            <ke-header>
                <div class="ke-calendar-header">
                    <div class="left">
                        {{ curYear + ' ' + months[curMonth] }}
                    </div>
                    <div class="right">
                        <ke-button
                            size="small"
                            class="btn1"
                            @click="handleLastClick(1)"
                        >
                            Previous Month
                        </ke-button>
                        <ke-button
                            size="small"
                            class="btn2"
                            @click="handleClickToday"
                        >
                            Today
                        </ke-button>
                        <ke-button
                            size="small"
                            class="btn3"
                            @click="handleNextClick(1)"
                        >
                            Next Mouth
                        </ke-button>
                    </div>
                </div>
            </ke-header>
            <ke-main>
                <div class="ke-calendar-main">
                    <ul class="weeks">
                        <li
                            v-for="item in weeks"
                            :key="item"
                        >
                            <span>{{ item }}</span>
                        </li>
                    </ul>
                    <ul class="days">
                        <template v-if="curMonthFirDayWeek!==7">
                            <li
                                v-for="item in curMonthFirDayWeek"
                                :key="item"
                                class="lastMonth"
                                @click="handleLastClick(lastMonthDayCount - (curMonthFirDayWeek - item))"
                            >
                                <span v-if="!$slots['date-cell']">
                                    {{ lastMonthDayCount - (curMonthFirDayWeek - item) }}
                                </span>
                                <slot
                                    v-else
                                    name="date-cell"
                                    :date="`
                                    ${curYear}-
                                    ${handleFrontZero(curMonth)}-
                                    ${handleFrontZero(lastMonthDayCount - (curMonthFirDayWeek - item))}`"
                                />
                            </li>
                        </template>
                        <li
                            v-for="item in days"
                            :key="item"
                            :class="{
                                active:item===curDay
                            }"
                            @click="handleDayClick(item)"
                        >
                            <span v-if="!$slots['date-cell']">{{ item }}</span>
                            <slot
                                v-else
                                name="date-cell"
                                :date="`${curYear}-${handleFrontZero(curMonth + 1)}-${handleFrontZero(item)}`"
                                :is-selected="item === curDay"
                            />
                        </li>
                        <li
                            v-for="item in curMonthLastDayWeek"
                            :key="item"
                            class="nextMonth"
                            @click="handleNextClick(item)"
                        >
                            <span v-if="!$slots['date-cell']">{{ item }}</span>
                            <slot
                                v-else
                                name="date-cell"
                                :date="`${curYear}-${handleFrontZero(+curMonth + 2)}-${handleFrontZero(item)}`"
                            />
                        </li>
                    </ul>
                </div>
            </ke-main>
            <ke-footer>
                <div class="ke-calendar-footer"></div>
            </ke-footer>
        </ke-container>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { isRunYear } from './utils'
import { handleFrontZero } from '../../../utils/frontZero'
import { calendarProps } from './calendar'

const props = defineProps(calendarProps)
const emit = defineEmits(['update:modelValue'])
const date = props.modelValue ? new Date(props.modelValue) : new Date()
const curMonth = ref(date.getMonth())
const curYear = ref(date.getFullYear())
const curDay = ref(date.getDate())

const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days = computed(() => {
    const months1 = [1, 3, 5, 7, 8, 10, 12]
    const months2 = [4, 6, 9, 11]
    if (months1.includes(curMonth.value + 1)) {
        return 31
    } if (months2.includes(curMonth.value + 1)) { 
        return 30
    } 
    return isRunYear(curYear.value) ? 29 : 28
})
const curMonthFirDayWeek = computed(() => {
    const firstDayOfMonth = new Date(curYear.value, curMonth.value, 1)
    return firstDayOfMonth.getDay()
})

const lastMonthDayCount = computed(() => {
    let lastMonth = curMonth.value
    if (lastMonth === 0) {
        lastMonth = 12
    }
    const months1 = [1, 3, 5, 7, 8, 10, 12]
    const months2 = [4, 6, 9, 11]
    if (months1.includes(lastMonth)) {
        return 31
    } if (months2.includes(lastMonth)) { 
        return 30
    } 
    return isRunYear(curYear.value) ? 29 : 28
})
const curMonthLastDayWeek = computed(() => {
    const lastDay = new Date(curYear.value, curMonth.value, days.value)
    let week = lastDay.getDay()
    
    return 6 - week
})

const handleDayClick = (item:number) => {
    curDay.value = item
}
const handleLastClick = (item:number) => {
    curDay.value = item
    const month = curMonth.value
    if (month === 0) {
        curMonth.value = 11
        curYear.value -= 1 
    } else {
        curMonth.value = month - 1 
    }
}
const handleNextClick = (item:number) => {
    curDay.value = item
    const month = curMonth.value
    const year = curYear.value
    if (month === 11) {
        curMonth.value = 0
        curYear.value = year + 1 
    } else {
        curMonth.value = month + 1 
    }
}
const handleClickToday = () => {
    const newDate = new Date()
    curMonth.value = newDate.getMonth()
    curYear.value = newDate.getFullYear()
    curDay.value = newDate.getDate()
}

const handleDateSelect = (option:string) => {
    switch (option) {
        case 'next-year':
            curYear.value += 1
            curMonth.value = 0
            curDay.value = 1
            break
        case 'pre-year':
            curYear.value -= 1
            curYear.value = curYear.value < 0 ? 0 : curYear.value
            curMonth.value = 0
            curDay.value = 1
            break
        case 'next-month':
            handleNextClick(1)
            break
        case 'pre-month':
            handleLastClick(1)
            break
        default:
            let date = option.split('-')
            curYear.value = +date[0]
            curMonth.value = +date[1] - 1
            curDay.value = +date[2]
    }
}

const changeValue = () => {
    emit('update:modelValue', `${curYear.value}-${curMonth.value + 1}-${curDay.value}`)
}

watch([curYear, curMonth, curDay], () => {
    changeValue()
})

defineOptions({
    name: 'KeCalendar',
})
defineExpose({
    handleDateSelect,
})
</script>

<style lang="less" scoped>
@import '../style/index.less';
</style>