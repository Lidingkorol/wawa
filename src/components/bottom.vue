<style scoped>
	.nav_bottom {
		position: fixed;
		bottom:0;
		left:0;
		right:0;
		height:1rem;
		background:rgb(30,28,33);
	}
	.nav_bottom a {
		width:20%;
		text-align: center;
		line-height: 1rem;
		color: #fff;
		font-weight: bold;
	}
	a.on {
		background:rgb(64,64,64);
		color: #fff;
	}
</style>
<template>
	<div class="nav_bottom flex-box flex-align_center">
		<a v-link="{path:'/game'}" :class="{on:link==1}" class="fontSize_30">夹娃娃</a>
		<a v-link="{path:'/record'}" :class="{on:link==2}" class="fontSize_30">记录</a>
		<a v-link="{path:'/money'}" :class="{on:link==3}" class="fontSize_30">佣金</a>
		<a v-link="{path:'/rank'}" :class="{on:link==4}" class="fontSize_30">排行榜</a>
		<a v-link="{path:'/profit'}" :class="{on:link==5}" class="fontSize_30">赚钱</a>
	</div>
</template>
<script>

	export default {
		props:{
			link:{
				default:null	
			}
		},
		watch:{
			
		},
		data () {
			return {
			}
		},
		created(){
			
		},
		ready () {
			
		},
		beforeDestroy () {

		},
		methods: {}
	}
</script>