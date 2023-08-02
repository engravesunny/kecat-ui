import KeCard from '../components/card/index';
<template>
  <div class="container">
    <ke-calendar></ke-calendar>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.container {
    width: 500px;
    height: 500px;
    display: flex;
    margin: 100px auto;
    background: #fff;
    justify-content: center;
    align-items: flex-start;

    .ke-asider,
    .ke-footer,
    .ke-header,
    .ke-main {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

</style>