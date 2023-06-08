<style>
  .example{
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      padding: 20px;
  }
  .ke-button {
      margin:10px 5px;
  }
  
  details > summary:first-of-type {
      font-size: 10px;
      padding: 8px 0;
      cursor: pointer;
      color: #1989fa;
  }
</style>

# Button 按钮

常用的操作按钮。

## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<div class="example">
    <div>
      <ke-button>默认按钮</ke-button>
      <ke-button type="primary">主要按钮</ke-button>
      <ke-button type="success">成功按钮</ke-button>
      <ke-button type="info">信息按钮</ke-button>
      <ke-button type="warning">警告按钮</ke-button>
      <ke-button type="danger">危险按钮</ke-button>
      <br />
      <br />
      <ke-button plain>朴素按钮</ke-button>
      <ke-button type="primary" plain>主要按钮</ke-button>
      <ke-button type="success" plain>成功按钮</ke-button>
      <ke-button type="info" plain>信息按钮</ke-button>
      <ke-button type="warning" plain>警告按钮</ke-button>
      <ke-button type="danger" plain>危险按钮</ke-button>
      <br />
      <br />
      <ke-button round>圆角按钮</ke-button>
      <ke-button type="primary" round>主要按钮</ke-button>
      <ke-button type="success" round>成功按钮</ke-button>
      <ke-button type="info" round>信息按钮</ke-button>
      <ke-button type="danger" round>危险按钮</ke-button>
      <br />
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <ke-button>默认按钮</ke-button>
    <ke-button type="primary">主要按钮</ke-button>
    <ke-button type="success">成功按钮</ke-button>
    <ke-button type="info">信息按钮</ke-button>
    <ke-button type="warning">警告按钮</ke-button>
    <ke-button type="danger">危险按钮</ke-button>
    <br />
    <br />
    <ke-button plain>朴素按钮</ke-button>
    <ke-button type="primary" plain>主要按钮</ke-button>
    <ke-button type="success" plain>成功按钮</ke-button>
    <ke-button type="info" plain>信息按钮</ke-button>
    <ke-button type="warning" plain>警告按钮</ke-button>
    <ke-button type="danger" plain>危险按钮</ke-button>
    <br />
    <br />
    <ke-button round>圆角按钮</ke-button>
    <ke-button type="primary" round>主要按钮</ke-button>
    <ke-button type="success" round>成功按钮</ke-button>
    <ke-button type="info" round>信息按钮</ke-button>
    <ke-button type="danger" round>危险按钮</ke-button>
  </div>
</template>
```

</details>

## 禁用状态

<div class="example">
    <div>
      <ke-button disabled>禁用按钮</ke-button>
      <ke-button type="primary" disabled>主要按钮</ke-button>
      <ke-button type="success" disabled>成功按钮</ke-button>
      <ke-button type="info" disabled>信息按钮</ke-button>
      <ke-button type="warning" disabled>警告按钮</ke-button>
      <ke-button type="danger" disabled>危险按钮</ke-button>
      <br />
      <br />
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <ke-button disabled>禁用按钮</ke-button>
    <ke-button type="primary" disabled>主要按钮</ke-button>
    <ke-button type="success" disabled>成功按钮</ke-button>
    <ke-button type="info" disabled>信息按钮</ke-button>
    <ke-button type="warning" disabled>警告按钮</ke-button>
    <ke-button type="danger" disabled>危险按钮</ke-button>
    <br />
    <br />
  </div>
</template>
```

</details>

## 调整尺寸

<div class="example">
    <div>
        <ke-button size="large">large</ke-button>
        <ke-button size="medium">default</ke-button>
        <ke-button size="small">small</ke-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <ke-button size="large">large</ke-button>
    <ke-button size="medium">default</ke-button>
    <ke-button size="small">small</ke-button>
  </div>
</template>

```

</details>
