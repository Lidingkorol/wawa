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
				<p>如有疑问请扫描下二维码添加客服微信</p>
				<p>微信客服号（xxxxx）</p>
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