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
		overflow: hidden;
	}
	.loop ul {
		width: 20rem;
		flex-wrap: nowrap;
		position: relative;
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
		opacity: 1;
		-webkit-backface-visibility: hidden;
	}
	.clamp img {
		width: 1.5rem;
		height: 1.8rem;
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
		<div class="clamp" v-el:clamp>
			<img src="../images/jz_03.png" :class="{aniHeight:isPlaying}">
		</div>
		<!--<marquee class="loop" loop="infinite" direction="left" behavior="scroll" v-el:loop>
            <ul class="flex-box" v-el:ul>
				<li class="item" v-for="i in list">
					<span>{{i.price}}</span>
				</li>
			</ul>
		</marquee>-->
		<div class="loop" v-el:loop>
			<ul class="flex-box" v-el:ul>
				<li class="item" v-for="i in list">
					<span>{{i.price}}</span>
				</li>
			</ul>
		</div>
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
			setInterval(()=>{
            	this.animateLoop();
            },10000)
			this.animateLoop();
		},
		beforeDestroy () {

		},
		methods: {
			play:function(){
				this.isPlaying=true;
				this.animateDown();
				setTimeout(()=>{
	            	this.isPlaying=false;
	            },1500)
			},
			check:function(){
				
			},
			animateDown:function(){
				let start=this.$els.clamp.offsetTop;
				let stop=this.$els.loop.offsetTop - start - this.$els.clamp.offsetHeight/2;
				let time=0.1;
				let eTime=2;
				let that=this;
				var arrObj=this.$els.ul.children;
				var parObj=this.$els.loop;
				function step(){
					let [t,b,c,d]=[time,start,stop,eTime];
					let x=Linear(t,b,c,d);
					time+=0.05;
					if(time>eTime) {
						that.animateUp();
						return;
					}
					if(that.$els.clamp.offsetTop + that.$els.clamp.offsetHeight>that.$els.loop.offsetTop) {
						for(var i=0;i<arrObj.length;i++){
							/*console.count()
							console.log(arrObj[i].offsetLeft + that.$els.ul.offsetLeft)*/
							if(that.$els.clamp.offsetLeft>arrObj[i].offsetLeft + that.$els.ul.offsetLeft&&
							that.$els.clamp.offsetLeft + that.$els.clamp.offsetWidth<arrObj[i].offsetLeft + that.$els.ul.offsetLeft + arrObj[i].offsetWidth) {
								console.count()
								console.log(i)
							}
						}
					}
					that.$els.clamp.style.top=x+'px';
					requestAnimationFrame(step);
				}
				step();
			},
			animateUp:function(){
				let start=this.$els.clamp.offsetTop;
				let stop=-(start - this.$els.clamp.offsetHeight/2);
				let time=0.1;
				let eTime=2;
				let that=this;
				function step(){
					let [t,b,c,d]=[time,start,stop,eTime];
					let x=Linear(t,b,c,d);
					time+=0.05;
					if(time>eTime) {
						return ;
					}
					that.$els.clamp.style.top=x+'px';
					requestAnimationFrame(step);
				}
				step();
			},
			animateLoop:function(){
				let start=this.$els.loop.offsetWidth;
				let stop=-this.$els.ul.offsetWidth - start;
				let time=0.01;
				let eTime=5;
				let that=this;
				function step(){
					let [t,b,c,d]=[time,start,stop,eTime];
					let x=Linear(t,b,c,d);
					time+=0.01;
					if(time>eTime) {
						that.$els.loop.left=that.$els.loop.offsetWidth;
						return;
					}
					that.$els.ul.style.left=x+'px';
					requestAnimationFrame(step);
				}
				step();
			}
		}
	}
</script>