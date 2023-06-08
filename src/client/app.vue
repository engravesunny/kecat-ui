<template>
    <el-row>
        <ke-button type="default" @click="handleClick($event)">
            Default
        </ke-button>
        <ke-button type="primary" @click="handleClick($event)">
            primary
        </ke-button>
        <ke-button type="danger" @click="handleClick($event)">
            danger
        </ke-button>
        <ke-button type="warning" @click="handleClick($event)">
            warning
        </ke-button>
        <ke-button type="success" @click="handleClick($event)">
            success
        </ke-button>
        <ke-button type="info" @click="handleClick($event)">
            info
        </ke-button>
    </el-row>
    <br>
    <el-row>
        <ke-button plain type="default" @click="handleClick($event)">
            Default
        </ke-button>
        <ke-button plain type="primary" @click="handleClick($event)">
            primary
        </ke-button>
        <ke-button plain type="danger" @click="handleClick($event)">
            danger
        </ke-button>
        <ke-button plain type="warning" @click="handleClick($event)">
            warning
        </ke-button>
        <ke-button plain type="success" @click="handleClick($event)">
            success
        </ke-button>
        <ke-button plain type="info" @click="handleClick($event)">
            info
        </ke-button>
    </el-row>
    <br>
    <el-row>
        <ke-button round type="default" @click="handleClick($event)">
            Default
        </ke-button>
        <ke-button round type="primary" @click="handleClick($event)">
            primary
        </ke-button>
        <ke-button round type="danger" @click="handleClick($event)">
            danger
        </ke-button>
        <ke-button round type="warning" @click="handleClick($event)">
            warning
        </ke-button>
        <ke-button round type="success" @click="handleClick($event)">
            success
        </ke-button>
        <ke-button round type="info" @click="handleClick($event)">
            info
        </ke-button>
    </el-row>
    <br>
    <el-row>
        <ke-button disabled type="default" @click="handleClick($event)">
            Default
        </ke-button>
        <ke-button disabled type="primary" @click="handleClick($event)">
            primary
        </ke-button>
        <ke-button disabled type="danger" @click="handleClick($event)">
            danger
        </ke-button>
        <ke-button disabled type="warning" @click="handleClick($event)">
            warning
        </ke-button>
        <ke-button disabled type="success" @click="handleClick($event)">
            success
        </ke-button>
        <ke-button disabled type="info" @click="handleClick($event)">
            info
        </ke-button>
    </el-row>
    <br>
    <el-row>
        <ke-button disabled plain type="default" @click="handleClick($event)">
            Default
        </ke-button>
        <ke-button disabled plain type="primary" @click="handleClick($event)">
            primary
        </ke-button>
        <ke-button disabled plain type="danger" @click="handleClick($event)">
            danger
        </ke-button>
        <ke-button disabled plain type="warning" @click="handleClick($event)">
            warning
        </ke-button>
        <ke-button disabled plain type="success" @click="handleClick($event)">
            success
        </ke-button>
        <ke-button disabled plain type="info" @click="handleClick($event)">
            info
        </ke-button>
    </el-row>
    <br>
    <el-row>
        <ke-button disabled round type="default" @click="handleClick($event)">
            Default
        </ke-button>
        <ke-button disabled round type="primary" @click="handleClick($event)">
            primary
        </ke-button>
        <ke-button disabled round type="danger" @click="handleClick($event)">
            danger
        </ke-button>
        <ke-button disabled round type="warning" @click="handleClick($event)">
            warning
        </ke-button>
        <ke-button disabled round type="success" @click="handleClick($event)">
            success
        </ke-button>
        <ke-button disabled round type="info" @click="handleClick($event)">
            info
        </ke-button>
    </el-row>
    <br>
    <el-row>
        <ke-button icon="zanwuneirong" size="large" round type="default" @click="handleClick($event)">
            Default
        </ke-button>
        <ke-button icon="zanwuneirong" round type="primary" @click="handleClick($event)">
            primary
        </ke-button>
        <ke-button icon="zanwuneirong" size="small" round type="danger" @click="handleClick($event)">
            danger
        </ke-button>
        <ke-button icon="zanwuneirong" round size="large" plain type="warning" @click="handleClick($event)">
            warning
        </ke-button>
        <ke-button icon="zanwuneirong" round plain type="success" @click="handleClick($event)">
            success
        </ke-button>
        <ke-button icon="zanwuneirong" round size="small" plain type="info" @click="handleClick($event)">
            info
        </ke-button>
    </el-row>
    <br>
    <el-row>
        <ke-button icon="js" circle type="default" @click="handleClick($event)">
        </ke-button>
        <ke-button icon="js" circle type="primary" @click="handleClick($event)">
        </ke-button>
        <ke-button icon="js" circle type="danger" @click="handleClick($event)">
        </ke-button>
        <ke-button icon="js" circle type="warning" @click="handleClick($event)">
        </ke-button>
        <ke-button icon="js" circle type="success" @click="handleClick($event)">
        </ke-button>
        <ke-button icon="js" circle type="info" @click="handleClick($event)">
        </ke-button>
    </el-row>
    <br>
</template>

<script setup lang="ts">
const handleClick = (e: Event) => {
    console.log('Click on', e);
}
</script>