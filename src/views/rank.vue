<style scoped>
	.container {
		background: url(../images/asd_02.png) no-repeat;
		background-size: 100%;
		padding-top: 3rem;
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
		height: 6rem;
	}
	.myList span {
		text-align: center;
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
					<li class="flex-box flex-align_center">
						<span class="flex-item">{{}}</span>
						<span class="flex-item">{{}}</span>
						<span class="flex-item">{{}}</span>
					</li>
				</ul>
			</div>
		</div>
		<dialog transition="bounce" v-show="isShow" @touchmove.prevent></dialog>
		<nav-bottom :link="4"></nav-bottom>
	</div>
</template>
<script>

	import navBottom from '../components/bottom';
	import dialog from '../components/dialog'

	export default {
		components: {
			navBottom,
			dialog
		},
		data () {
			return {
				isShow:false
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
			goRule:function(){
				this.isShow=true;
			}
		},
		events:{
			'dialog':function(value){
				this.isShow=value;
			}
		}
	}
</script>