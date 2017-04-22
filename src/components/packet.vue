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
		width: 4.6rem;
		height: 6.5rem;
		background: url(../images/hb_03.png) no-repeat;
		background-size: 100%;
		padding:.3rem;
		margin: 2rem auto;
		box-sizing: border-box;
	}
	.dialog_bd .item {
		position: relative;
		height: 100%;
	}
	.dialog_bd .item span {
		text-align: center;
		width: 100%;
		display: block;
	}
	.dialog_bd .item a {
		position: absolute;
		bottom: 1.1rem;
		left: 1rem;
		background: url(../images/kai_03.png) no-repeat;
		background-size: 100%;
		width: 2rem;
		height: 2rem;
	}
	.dialog_bd .item p {
		font-size: .44rem;
		font-weight: bold;
		color: rgb(235,252,36);
		text-align: center;
		margin-top: .2rem;
	}
	.dialog_bd .item span {
		font-size: .5rem;
		font-weight: bold;
		color: rgb(235,252,36);
		text-align: center;
		margin-top: .2rem;
	}
</style>
<template>
	<div class="dialog">
		<div class="dialog_bd flex-box flex-direction_column">
			<div class="item">
				<p>恭喜您夹中了</p>
				<p v-show="flag==0">一个随机红包</p>
				<span>{{trueMoney}}元</span>
				<a @click="close"></a>
			</div>
		</div>
	</div>
</template>
<script>


	export default {
		props:{
			trueMoney:{
				default:null
			},
			flag: {
				default:null
			}
		},
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
				this.$dispatch('packet',false);
			}
		}
	}
</script>