<style scoped>
	.container {
		background: url(../images/asd_02.png) no-repeat;
		background-size: 100%;
		padding-top: 3rem;
		box-sizing: border-box;
	}
	.main_top {
		line-height: 1rem;
		height: 1rem;
		text-align: center;
		margin: 0 auto;
		display: block;
	}
	.myList {
		padding:0 .6rem;
	}
	.myList>.item_hd {
		background-color: rgb(242,144,152);
		line-height: .65rem;
		height: .65rem;
	}
	.myList .item_bd .title {
		background-color:rgb(153,24,18);
		color: #fff;
	}
	.myList .item_bd span {
		line-height: .45rem;
		height: .45rem;
	}
	.myList .item_bd ul {
		background-color: rgb(242,144,152);
		height: 6rem;
	}
	.myList span {
		text-align: center;
	}
</style>
<template>
	<div class="container">
		<span class="main_top">下级越多，佣金越多</span>
		<div class="myList flex-box flex-direction_column">
			<span class="item_hd">
				佣金排行榜
			</span>
			<div class="item_bd">
				<div class="title flex-box flex-align_center">
					<span class="flex-item">ID</span>
					<span class="flex-item">佣金</span>
					<span class="flex-item">排名</span>
				</div>
				<ul>
					<li class="flex-box flex-align_center">
						<span class="flex-item">{{}}</span>
						<span class="flex-item">{{}}</span>
						<span class="flex-item">{{}}</span>
					</li>
				</ul>
			</div>
		</div>
		<nav-bottom :link="4"></nav-bottom>
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