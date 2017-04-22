<style scoped>
	.container {
		background: url(../images/asd_02.png) no-repeat;
		background-size: 100%;
		padding-top: 2.8rem;
		box-sizing: border-box;
	}
	.service {
		position:fixed;
		left: 0;
		top: 3rem;
		line-height: .6rem;
		height: .6rem;
		border-bottom-right-radius: .3rem;
		border-top-right-radius: .3rem;
		background:rgba(0,0,0,0.7);
		color: #fff;
		width: 1.5rem;
		text-align: center;
		font-weight: bold;
	}
	.main_top {
		line-height: .8rem;
		height: .8rem;
		text-align: center;
		margin: 0 auto;
		display: block;
		color: #fff;
		font-weight: bold;
	}
	.myList {
		padding:0 .6rem;
	}
	.myList>.item_hd {
		background-color: rgb(242,144,152);
		line-height: .65rem;
		height: .65rem;
		color: rgb(175,44,60);
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
/*		height: 6rem;
		overflow-x: auto;*/
		min-height: 5rem;
		overflow-x: auto;
	}
	.myList .item_bd ul p {
		text-align: center;
		color: #fff;
		padding-top: 2rem;
	}
	.myList span {
		text-align: center;
	}
	.blank {
		height: 1.3rem;
		background-color:rgb(216,39,29);
	}
	.bounce-transition {
  		display: inline-block; /* 否则 scale 动画不起作用 */
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
		<a class="service" @click="goRule">
			佣金规则
		</a>
		<span class="main_top fontSize_34 ">下级越多，佣金越多</span>
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
					<template v-if="rank.length!==0">
						<li class="flex-box flex-align_center" v-for="i in rank">
							<span class="flex-item">{{i.pid}}</span>
							<span class="flex-item">{{i.send_money}}</span>
							<span class="flex-item">{{$index+1}}</span>
						</li>
					</template>
					<template v-else>
						<p class="fontSize_30">暂无排名信息！</p>
					</template>
				</ul>
			</div>
		</div>
		<dialog transition="bounce" v-show="isShow" @touchmove.prevent></dialog>
		<div class="blank"></div>
		<nav-bottom :link="4"></nav-bottom>
	</div>
</template>
<script>

	import navBottom from '../components/bottom';
	import dialog from '../components/dialog'
	import Request from '../config/request'
	import Config from '../config/config'

	export default {
		components: {
			navBottom,
			dialog
		},
		data () {
			return {
				isShow:false,
				rank:[]
			}
		},
		created() {
			this.$dispatch('isLoading',true)
		},
		ready () {
			this.getMyRecord();
			this.$dispatch('isLoading',false);
		},
		beforeDestroy () {

		},
		methods: {
			goRule:function(){
				this.isShow=true;
			},
			async getMyRecord(){
				let res = await Request.post(Config.apiDomain+ '/Index/getMyRecord');
        		if(res.status == 200 && !!res.data){
        			this.rank=res.data.rank;
        			for(let i=0;i<res.data.rank.length;i++) {
        				if(res.data.rank[i].pid==0) {
        					res.data.rank.splice(i,1);
        				}
        			}
	        	}else {
	        		Toast(res.msg)
	        	}
			}
		},
		events:{
			'dialog':function(value){
				this.isShow=value;
			}
		}
	}
</script>