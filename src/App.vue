<template>
    <div id="app">
        <router-view class="page"></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    }
};
</script>
<style lang="stylus">
html, body
        width 100%
        height 100%
        min-height 100%
        padding 0
    *,
    *:before,
    *:after
        box-sizing border-box
    input:focus,
    textarea:focus,
    button
        outline: none !important;
    #app
        font-family "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        min-height 100%
        height 100%
    .page
        min-height 100%
        width 100%
        position relative
        font-size 14px
        color #545c64
</style>
