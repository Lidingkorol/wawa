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
		position: relative;
		top: 1.1rem;
		left: 3rem;
		z-index: 999;
	}
	.clamp img {
		width: 1.5rem;
		height: 1.8rem;
		opacity: 1;
		-webkit-backface-visibility: hidden;
		position: absolute;
	}
/*	.clamp img.aniHeight {
		animation: aniHeight 1.5s linear;
		-moz-animation: aniHeight 1.5s linear;	
		-webkit-animation: aniHeight 1.5s linear;	
		-o-animation: aniHeight 1.5s linear;	
	}
	@keyframes aniHeight
	{
		0% {top:0rem;}
		50%{top:5.5rem;}
		100%{top:0rem;}
	}
	
	@-moz-keyframes aniHeight 
	{
		0% {top:0rem;}
		50%{top:5.5rem;}
		100%{top:0rem;}
	}
	
	@-webkit-keyframes aniHeight 
	{
		0% {top:0rem;}
		50%{top:5.5rem;}
		100%{top:0rem;}
	}
	
	@-o-keyframes aniHeight 
	{
		0% {top:0rem;}
		50%{top:5.5rem;}
		100%{top:0rem;}
	}*/
	.btn {
		position: absolute;
		bottom: 1rem;
		left: 0;
		right: 0;
		height: 1.2rem;
	}
	.btn button {
		background: url(../images/btn_03.png);
		background-size: 100%;
		text-align: center;
		width: 3.8rem;
		height: 1.1rem;
		display: inline-block;
		line-height: 1.1rem;
		outline: none;
		border:none;
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
			<img src="../images/jz_03.png" :class="{aniHeight:isPlaying}" v-el:clamp>
		</div>
		<marquee class="loop" loop="infinite" direction="left" behavior="scroll" v-el:loop>
            <ul class="flex-box">
				<li class="item" v-for="i in list">
					<span>{{i.price}}</span>
				</li>
			</ul>
		</marquee>
		<div class="btn">
			<button @click.prevent="play" :disabled="isPlaying">开始</button>
		</div>
		<nav-bottom :link="1"></nav-bottom>
	</div>
</template>
<script>
	import { Linear } from '../libs/tween'
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
				isPlaying:false,
				clamp:{},
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
				this.animate();
				setTimeout(()=>{
	            	this.isPlaying=false;
	            },1500)
			},
			check:function(){
				
			},
			animate:function(){
				var start=this.$els.clamp.style.top;
				var stop=this.$els.loop.offsetTop;
				var time=0.1;
				var step=function(time,start,stop){
					let [t,b,c,d]=[time,start,stop,2];
					let x=Linear(t,b,c,d);
					start = x;
					time+=0.1;
					console.log(x)
					this.$els.clamp.style.top=x;
					if(time>2) {
						return;
					}
					requestAnimationFrame(step);
				}
			}
		}
	}
</script>