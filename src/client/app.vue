<template>
    <div class="container">
        <ke-scrollbar>
            <div class="box-item" v-for="item in 15">{{ item }}</div>
        </ke-scrollbar>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.container {
    padding-top: 20px;
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
}

.box-item {
    width: 600px;
    height: 200px;
    background-color: skyblue;
    margin: 10px;
    text-align: center;
    line-height: 200px;
    font-size: 30px;
    color: #333;
}

</style>