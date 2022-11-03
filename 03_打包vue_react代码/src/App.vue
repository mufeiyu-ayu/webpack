<template>

    <div class="container">

        <h1>打包速度</h1>

        <h1 class="a1">{{title}}</h1>

    </div>

</template>

<script>
export default {
    data() {
        return {
            title: '打包vue2代码'
        }
    }
}
</script>

<style lang="scss">
.container {
    width: 300px;
    height: 300px;
    background-color: red;
    .a1 {
        color: blue;
    }
}
</style>

