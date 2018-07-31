<template>
   <div>
       <main class="main">
            <transition name="fade" mode="out-in">
                <router-view class="router-view"></router-view>
            </transition>
        </main>
   </div>
</template>

<script>

export default {
    data() {
        return {
        };
    },
    created() {
    },
    methods: {
    }
};
</script>
<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active
    transition opacity .3s
.fade-enter, .fade-leave-to
    opacity 0
</style>
