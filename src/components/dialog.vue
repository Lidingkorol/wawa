<style scoped>
	.dialog {
		width: 100%;
        height: 100%;
        position:fixed;
        top: 0;
        background:rgba(0,0,0,0.7);
        z-index: 999;
	}
	.dialog_bd {
		width: 5.9rem;
		height: 7.2rem;
		background: rgb(236,212,88);
		padding:.3rem;
		margin: 2rem auto;
		box-sizing: border-box;
		border-radius: .4rem;
	}
	.dialog_bd .item span {
		text-align: center;
		width: 100%;
		display: block;
	}
	.dialog_bd .em {
		text-indent: 2em;
	}
	.dialog_bd i {
		background: url(../images/close_03.png) no-repeat;
		background-size: 100%;
		width: .3rem;
		height: .3rem;
		align-self: flex-end;
	}
</style>
<template>
	<div class="dialog">
		<div class="dialog_bd flex-box flex-direction_column">
			<i class="back" @click="close"></i>
			<div class="item">
				<span class="fontSize_48">佣金规则</span>
				<p class="fontSize_28">1、好友每玩一把，都有佣金></p>
				<p class="em fontSize_28">a、好友每玩一把5元，系统随机给<b>0.3~0.7</b>元佣金</p>
				<p class="em fontSize_28">b、好友每玩一把10元，系统随机给<b>0.5~1</b>元佣金</p>
				<p class="em fontSize_28">b、好友每玩一把20元，系统随机给<b>0.8~2</b>元佣金</p>
				<p class="fontSize_28">2、佣金实时发放</p>
				<p class="fontSize_28">3、只需发朋友圈，群发，发群。分享越多，赚点越多</p>
			</div>
		</div>
	</div>
</template>
<script>


	export default {
		data () {
			return {}
		},
		created(){

		},
		ready () {

		},
		beforeDestroy () {

		},
		methods: {
			close:function(){
				this.$dispatch('dialog',false);
			}
		}
	}
</script>