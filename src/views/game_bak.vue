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
		color:rgb(216,39,29);
	}
	.message .item {
		border-radius: .3rem;
		background: rgb(255,222,187);
		width: 2.25rem;
		height: .6rem;
		line-height: .6rem;
		margin-top: .15rem;
		padding:0 .1rem;
		font-weight: bold;
	}
	.message .item span {
		font-weight: bold;
	}
	.message .item .add {
		background:url(../images/add_03.png) no-repeat;
		background-size: 100%;
		width: .5rem;
		height: .5rem;
		display: block;
	}
	.title {
		position:absolute;
		top: .3rem;
		height: .7rem;
		left: 0;
		right: 0;
		color: #fff;
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
		width: 14rem;
		flex-wrap: nowrap;
		position: relative;
		opacity: 1;
		-webkit-backface-visibility: hidden;
	}
	.loop .item {
		width: 2.8rem;
		height: 2.2rem;
		padding: 0 .5rem;
		box-sizing: border-box;
	}
	.clamp .box {
		background:url(../images/wawa_03.png) no-repeat;
		background-size: cover;
		width: 1.8rem;
		height: 2.2rem;
		position: relative;
		top: -.5rem;
    	left: -.26rem;
    	opacity: 1;
		-webkit-backface-visibility: hidden;
	}
	.clamp .box span {
		position: absolute;
		bottom: .5rem;
		width: 100%;
		text-align: center;
		color: rgb(254,222,112);
	}
	.loopBox {
		width: 30rem;
		position: relative;
		opacity: 1;
		-webkit-backface-visibility: hidden;
	}
	.loop .box {
		background:url(../images/wawa_03.png) no-repeat;
		background-size: cover;
		width: 1.8rem;
		height: 2.2rem;
		position: relative;
		opacity: 1;
		-webkit-backface-visibility: hidden;
	}
	.loop .box span {
		position: absolute;
		bottom: .5rem;
		width: 100%;
		text-align: center;
		color: rgb(254,222,112);
	}
	.clamp {
		position: absolute;
		top: 1.1rem;
		left: 3.1rem;
		z-index: 999;
		opacity: 1;
		height: 1.6rem;
		-webkit-backface-visibility: hidden;
	}
	.clamp img {
		width: 1.3rem;
		height: 1.6rem;
	}
	.clamp .aniHeight span {
		position: absolute;
		bottom: .5rem;
		width: 100%;
		text-align: center;
		color: rgb(254,222,112);
	}
	.clamp .aniHeight {
		animation: aniHeight 1s linear;
		-moz-animation: aniHeight 1s linear;	
		-webkit-animation: aniHeight 1s linear;	
		-o-animation: aniHeight 1s linear;	
		background:url(../images/wawa_03.png) no-repeat;
		background-size: cover;
		width: 1.8rem;
		height: 2.2rem;
		position: relative;
		top:-.5rem;
    	left: -.26rem;
    	animation-fill-mode : forwards;
    	opacity: 1;
		-webkit-backface-visibility: hidden;
	}
	@keyframes aniHeight
	{
		0% {top:-.5rem;}
		100%{top:3.5rem;}
	}
	
	@-moz-keyframes aniHeight 
	{
		0% {top:-.5rem;}
		100%{top:3.5rem;}
	}
	
	@-webkit-keyframes aniHeight 
	{
		0% {top:-.5rem;}
		100%{top:3.5rem;}
	}
	
	@-o-keyframes aniHeight 
	{
		0% {top:-.5rem;}
		100%{top:3.5rem;}
	}
	.btn {
		position: absolute;
		bottom: 1rem;
		left: 0;
		right: 0;
		height: 1.3rem;
		padding: 0 .5rem;
	}
	.btn .switch {
		text-align: center;
		background: url(../images/btn_05.png)no-repeat;
		background-size: 100%;
		height: .7rem;
    	margin: 0 .1rem;
    	width:.7rem;
    	line-height: .5rem;
    	color: #fff;
    	transition: all ease-in-out .1s;
	}
	.btn button.click {
		margin-top: .2rem;
		background: url(../images/btn_06.png)no-repeat;
		background-size: 100%;
	}
	.btn button {
		background: url(../images/btn_03.png);
		background-size: 100%;
		text-align: center;
		width: 3.3rem;
		height: 1rem;
		display: inline-block;
		outline: none;
		border:none;
		color: #fff;
		font-weight: bold;
	}
	.bounce-enter {
	  	animation: bounce-in .5s;
	}
	.bounce-leave {
  		animation: bounce-out .5s;
	}
	@keyframes bounce-in {
	  0% {
	    transform: scale(0);
	  }
	  50% {
	    transform: scale(1.5);
	  }
	  100% {
	    transform: scale(1);
	  }
	}
	@keyframes bounce-out {
	  0% {
	    transform: scale(1);
	  }
	  50% {
	    transform: scale(1.5);
	  }
	  100% {
	    transform: scale(0);
	  }
	}
</style>
<template>
	<div class="container">
		<a class="service" @click="goService">
			联系客服
		</a>
		<div class="title flex-box flex-direction_column flex-justify_center flex-align_center">
			<span class="fontSize_42"><b>{{title[isChoose-1]}}</b></span>
			<span class="fontSize_20">夹娃娃</span>
		</div>
		<div class="message">
			<div class="item fontSize_30">ID:{{user.id}}</div>
			<div class="item flex-box flex-align_center"><span class="flex-item fontSize_30">￥:{{user.money}}</span><i class="add" @click="goRecharge"></i></div>
		</div>
		<div class="clamp" v-el:clamp>
			<img src="../images/jz_03.png" v-el:img>
		</div>
		<!--<marquee class="loop" loop="infinite" direction="left" behavior="scroll" v-el:loop>
            <ul class="flex-box" v-el:ul>
				<li class="item" v-for="i in list">
					<span>{{i.price}}</span>
				</li>
			</ul>
		</marquee>-->
		<div class="loop" v-el:loop>
			<div v-el:box class="loopBox flex-box">
				<ul class="flex-box" v-el:ul>
					<li class="item" v-for="i in list">
						<div class="box">
							<span class="fontSize_34">{{i}}</span>
						</div>
					</li>
				</ul>
				<ul class="flex-box" v-el:ful>
					<li class="item" v-for="i in list">
						<div class="box">
							<span class="fontSize_34">{{i}}</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="btn flex-box flex-align_center">
			<button class="flex-item switch" :class="{ click:isChoose==1}" @click="goChoose(1)" :disabled="isPlaying" >￥5</button>
			<button class="flex-item switch" :class="{ click:isChoose==2}" @click="goChoose(2)" :disabled="isPlaying" >￥10</button>
			<button class="flex-item switch" :class="{ click:isChoose==3}" @click="goChoose(3)" :disabled="isPlaying" >￥20</button>
			<button  @click.prevent="play" :disabled="isPlaying" class="fontSize_42 B-btn">开始</button>
		</div>
		<Service transition="bounce" v-show="isShow" @touchmove.prevent></Service>
		<Packet transition="bounce" v-show="isPacket" :true-money="trueMoney" :flag="flag" @touchmove.prevent></Packet>
		<nav-bottom :link="1"></nav-bottom>
	</div>
</template>
<script>
	import { Linear } from '../libs/tween'
	import navBottom from '../components/bottom'
	import Swiper from '../libs/swiper.min'
	import Service from '../components/service'
	import Config from '../config/config'
    import Request from '../config/request'
    import { Toast,Indicator,MessageBox } from 'mint-ui';
    import Packet from '../components/packet'
    
	export default {
		components: {
			navBottom,
			Service,
			Packet
		},
		watch:{
			'isChoose':function(){
				if(this.isPlaying){
					return ;
				}
                Indicator.open({
                    spinnerType: 'snake'
                });
                if(this.$els.clamp.getElementsByClassName('aniHeight')[0]) {
                	this.$els.clamp.getElementsByClassName('aniHeight')[0].remove();
                }
                this.i=this.$els.loop.offsetWidth;
				this.getList();
			}
		},
		data () {
			return {
				list:[],
				isPlaying:false,
				clamp:{},
				user:{},
				inter:null,
				isShow:false,
				isChoose:1,
				trueMoney:null,
				flag:null,
				title:['5元','10元','20元'],
				money:[5,10,20],
				key:null,
				isReward:false,
				isPacket:false,
				num:null,
				i:375
			}
		},
		created() {
			this.$dispatch('isLoading',true)
		},
		ready () {
			this.getList();
			this.getMyRecord();
			this.$dispatch('isLoading',false);
			this.animateLoop();
		},
		beforeDestroy () {
			window.cancelAnimationFrame(this.inter);
		},
		methods: {
			async getMyRecord(){
				let res = await Request.post(Config.apiDomain+ '/Index/getMyRecord');
        		if(res.status == 200 && !!res.data){
	        		if(!res.data.user) {
	        			window.location.href=Config.apiDomain + '/Index/index';
	        		}
	        		this.user=res.data.user;
	        		console.log(res)
	        	}else {
	        		Toast(res.msg)
	        	}
			},
			async getList(){
				let res = await Request.post(Config.apiDomain+ '/Index/showGoods',{data:{money:this.money[this.isChoose-1]}});
        		if(res.status == 200 && !!res.data){
	        		this.list=[];
	        		this.list.push(...res.data);
	        		console.log(123)
	        		console.log(this.list)
	        		Indicator.close()
	        	}else {
	        		Toast(res.msg)
	        		Indicator.close()
	        	}
			},
			async getKey(){
				let res = await Request.post(Config.apiDomain+ '/Index/getKey',{data:{money:this.money[this.isChoose-1]}});
        		if(res.status == 200 && !!res.data){
	        		this.key=res.data.key;
	        		this.animateDown();
	        	}else {
	        		this.recharge();
	        		this.isPlaying=false;
	        	}
			},
			async getGood(getMoney,isGet){
				console.count()
				let res = await Request.post(Config.apiDomain+ '/Index/getGood',{data:{money:this.money[this.isChoose-1],isGet:isGet,getMoney:getMoney,key:this.key}});
        		if(res.status == 200 && !!res.data){
        			if(res.data.flag==0&&this.$els.clamp.getElementsByClassName('box').length!==0) {
						this.$els.clamp.getElementsByClassName('box')[0].setAttribute('class','aniHeight');
        			}
        			this.trueMoney=res.data.true_money;
        			this.flag=res.data.flag;
        			this.isReward=false;
	        	}else {
	        		Toast(res.msg)
	        		this.isReward=false;
	        	}
			},
			async play(){
				this.isPlaying=true;
				await this.getKey();
			},
			goService:function(){
				this.isShow=true;
			},
			recharge(){
                MessageBox.confirm('您还没有充值,请充值！').then(
                    action => {
                        this.$router.go('/recharge');
                    },
                    action => {
                    	
                    },
                );
            },
            goRecharge:function(){
            	this.$router.go('/recharge');
            },
			goChoose:function(value){
				this.isChoose=value;
			},
			animateDown(){
				let start=this.$els.clamp.offsetTop;
				let stop=this.$els.loop.offsetTop - start - this.$els.clamp.offsetHeight/2;
				let time=0;
				let eTime=2;
				let that=this;
				var arrObj=this.$els.box.getElementsByClassName('box');
				var parObj=this.$els.loop;
				var item;
				function step(){
					let [t,b,c,d]=[time,start,stop,eTime];
					let x=Linear(t,b,c,d);
					if(time>eTime) {
						if(!that.isReward) {
							that.getGood(0,0);
						}else {
							that.getGood(item.children[0].innerHTML,1);
							item.style.display='block';
							that.$els.clamp.appendChild(item);
						}
						that.animateUp();
						return;
					}
					if(that.$els.img.offsetTop + that.$els.img.offsetHeight>that.$els.loop.offsetTop) {
						for(var i=0;i<arrObj.length;i++){
							if(that.$els.img.offsetLeft>arrObj[i].offsetLeft + that.$els.box.offsetLeft&&
							that.$els.img.offsetLeft + that.$els.img.offsetWidth<arrObj[i].offsetLeft + that.$els.box.offsetLeft + arrObj[i].offsetWidth) {
								that.isReward=true;
								item=arrObj[i];
								arrObj[i].style.display='none';
								that.num=i;
							}
						}
					}
					that.$els.clamp.style.top=x+'px';
					time+=0.05;
					requestAnimationFrame(step);
				}
				step();
			},
			animateUp:function(){
				let start=this.$els.clamp.offsetTop;
				let stop=-start+50;
				let time=0;
				let eTime=2;
				let that=this;
				function step(){
					let [t,b,c,d]=[time,start,stop,eTime];
					let x=Linear(t,b,c,d);
					if(time>eTime) {
						that.isPacket=true;
						that.isPlaying=false;
						return ;
					}
					that.$els.clamp.style.top=x+'px';
					time+=0.05;
					requestAnimationFrame(step);
				}
				step();
			},
			animateLoop1:function(){
				let start=this.$els.loop.offsetWidth;
				let stop=-this.$els.ul.offsetWidth - start;
				let time=0.005;
				let eTime=3;
				let that=this;
				function step(){
					let [t,b,c,d]=[time,start,stop,eTime];
					let x=Linear(t,b,c,d);
					time+=0.005;
					if(time>eTime) {
						that.$els.loop.left=that.$els.loop.offsetWidth;
						that.animateLoop();
						return;
					}
					that.$els.ul.style.left=x+'px';
					that.inter=requestAnimationFrame(step);
				}
				step();
			},
			animateLoop:function(val){
				let that=this;
				this.i=375;
				var k=1;
				function step(){
					/*console.count()*/
					that.i-=1;
					/*console.log(that.$els.box.offsetLeft)
					console.log(that.$els.ul.offsetWidth)*/
					if(that.$els.ul.offsetWidth+that.$els.box.offsetLeft<0) {
						that.$els.box.style.left=0;
						that.i=0;
					}
					that.$els.box.style.left=that.i + 'px';
					that.inter=requestAnimationFrame(step);
				}
				step();
			}
		},
		events:{
			'dialog':function(value){
				this.isShow=value;
			},
			'packet':function(value){
				this.isPacket=value;
				Indicator.open({
                    spinnerType: 'snake'
               });
                if(this.$els.clamp.getElementsByClassName('aniHeight')[0]) {
                	this.$els.clamp.getElementsByClassName('aniHeight')[0].remove();
                }
                if(this.$els.clamp.getElementsByClassName('box')[0]) {
                	this.$els.clamp.getElementsByClassName('box')[0].remove();
                }
                this.list.splice(this.num%5,1);
                this.i=this.$els.loop.offsetWidth;
                this.getList();
				this.getMyRecord();
			}
		}
	}
</script>