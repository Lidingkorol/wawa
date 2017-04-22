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
		width: 4.2rem;
		height: 5.4rem;
		background:url(../images/kefu_03.png) no-repeat;
		background-size: 100%;
		padding:.3rem;
		margin: 2rem auto;
		box-sizing: border-box;
	}
	.dialog_bd .item span {
		text-align: center;
		width: 100%;
		display: block;
	}
	.dialog_bd .item img {
		width: 3.1rem;
		height: 3.1rem;
		padding: .4rem;
		box-sizing: border-box;
		margin: 0 auto;
	}
	.dialog_bd .item p {
		text-align: center;
		color: #fff;
	}
	.dialog_bd .item .mt20 {
		margin-top: .2rem;
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
	.blank {
		height: 1.3rem;
		background-color:rgb(216,39,29);
	}
</style>
<template>
	<div class="dialog">
		<div class="dialog_bd flex-box flex-direction_column">
			<i class="back" @click="close"></i>
			<div class="item flex-box flex-direction_column flex-justify_center">
				<p class="mt20">如有疑问请扫描下二维码</p>
				<p class="mt20">添加客服微信</p>
				<img src="../images/kai_03.png">
				<p>微信客服号（xxxxx）</p>
			</div>
		</div>
	</div>
</template>
<script>

	import Config from '../config/config'
    import Request from '../config/request'

	export default {
		data () {
			return {
				img:null
			}
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