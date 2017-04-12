<style scoped lang="less">
	
</style>
<template>

</template>
<script>



    export default {
        filters: {

        },
        directives: {
			
        },
        data () {
            return {
            }
        },
        created() {
            this.$dispatch('isLoading',true)
        },
        ready () {
            this.$dispatch('isLoading',false);
        },
        beforeDestroy () {

        },
        methods: {
            
        }
    }
</script>
