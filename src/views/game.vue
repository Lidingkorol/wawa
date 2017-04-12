<style scoped>
	.container {
		background: url(../images/bg-01_02.png) no-repeat;
		background-size: 100%;
		height: 12.5rem;
		min-height: 100%;
		position: relative;
	}
	.message {
		position: absolute;
		top: .9rem;
		left: .5rem;
	}
	.message span {
		border-radius: .3rem;
		background: rgb(255,222,187);
		width: 2.25rem;
		height: .6rem;
		line-height: .6rem;
		display: block;
		margin-top: .15rem;
	}
	.service {
		position:fixed;
		right: 0;
		top: .9rem;
		line-height: .6rem;
		height: .6rem;
		border-bottom-left-radius: .3rem;
		border-top-left-radius: .3rem;
		background:rgba(0,0,0,0.7);
		color: #fff;
		width: 1.5rem;
		text-align: center;
	}
	.loop {
		position: absolute;
		bottom: 2.9rem;
		left: 0;
		right: 0;
		margin: 0 .35rem;
		box-sizing: border-box;
	}
	.loop ul {
		width: 20rem;
		flex-wrap: nowrap;
	}
	.loop .item {
		background:url(../images/wawa_03.png) no-repeat;
		background-size: cover;
		width: 1.8rem;
		height: 2.2rem;
		position: relative;
		margin: 0 .5rem;
	}
	.loop .item span {
		position: absolute;
		bottom: .6rem;
		width: 100%;
		text-align: center;
	}
	.clamp {
		position: absolute;
		top: 1.1rem;
		left: 3rem;
		z-index: 999;
	}
	.clamp img {
		width: 1.5rem;
		transition: all linear 1s;
		height: 1.8rem;
	}
	.aniHeight {
		height: 5rem;
		margin-top: 5rem;
	}
	.btn {
		position: absolute;
		bottom: 1rem;
		left: 0;
		right: 0;
		height: 1.2rem;
	}
	.btn a {
		background: url(../images/btn_03.png);
		background-size: 100%;
		text-align: center;
		width: 3.8rem;
		height: 1.1rem;
		display: inline-block;
		line-height: 1.1rem;
	}
</style>
<template>
	<div class="container">
		<a class="service">
			联系客服
		</a>
		<div class="message">
			<span>ID:{{}}</span>
			<span>ID:{{}}</span>
		</div>
		<div class="clamp" >
			<img src="../images/jz_03.png" :class="{aniHeight:isPlaying}">
		</div>
		<marquee class="loop" loop="infinite" direction="left" behavior="scroll">
            <ul class="flex-box">
				<li class="item" v-for="i in list">
					<span>{{i.price}}</span>
				</li>
			</ul>
		</marquee>
		<div class="btn">
			<a @click="play">开始</a>
		</div>
		<nav-bottom :link="1"></nav-bottom>
	</div>
</template>
<script>

	import navBottom from '../components/bottom'
	import Swiper from '../libs/swiper.min'
	
	var fData=[
		{price:11},
		{price:12},
		{price:13},
		{price:14},
		{price:15},
		{price:16},
		{price:17}
	]
	
	export default {
		components: {
			navBottom
		},
		watch:{
            
		},
		data () {
			return {
				list:[],
				isPlaying:false
			}
		},
		created() {
			this.$dispatch('isLoading',true)
		},
		ready () {
			this.list=fData;
			this.$dispatch('isLoading',false);
		},
		beforeDestroy () {

		},
		methods: {
			play:function(){
				this.isPlaying=true;
			}
		}
	}
</script>