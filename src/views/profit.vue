<style scoped>
	.container {
		background: url(../images/asd_02.png) no-repeat;
		background-size: 100%;
		padding-top: 3rem;
		box-sizing: border-box;
	}

</style>
<template>
	<div class="container">
		
		
		
		<nav-bottom :link="5"></nav-bottom>
	</div>
</template>
<script>

	import navBottom from '../components/bottom'

	export default {
		components: {
			navBottom
		},
		data () {
			return {}
		},
		created() {
			this.$dispatch('isLoading',true)
		},
		ready () {
			this.$dispatch('isLoading',false);
		},
		beforeDestroy () {

		},
		methods: {}
	}
</script>