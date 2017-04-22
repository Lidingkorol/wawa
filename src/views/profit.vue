<style scoped>
	.container {
		background: url(../images/asd_02.png) no-repeat;
		background-size: 100%;
		padding-top: 2.8rem;
		box-sizing: border-box;
	}
	.imgBox {
		margin:0  1.2rem;
		background-color: #fff;
		padding:0 .2rem .2rem;
		border-radius: .2rem;
		border: none;
    	outline: none;
	}
	.imgBox p {
		text-align: center;
		line-height: .6rem;
		font-weight: bold;
		font-size: .18rem;
	}
	.imgBox img {
		width: 100%;
	}
</style>
<template>
	<div class="container">
		<div class="imgBox">
			<p>分享到朋友圈/微信群，每天可赚100元</p>
			<img :src="img">
		</div>
		<nav-bottom :link="5"></nav-bottom>
	</div>
</template>
<script>

	import navBottom from '../components/bottom'
	import Config from '../config/config'
    import Request from '../config/request'
	
	export default {
		components: {
			navBottom
		},
		data () {
			return {
				img:null
			}
		},
		created() {
			this.$dispatch('isLoading',true)
		},
		ready () {
			this.getPic();
			this.$dispatch('isLoading',false);
		},
		beforeDestroy () {

		},
		methods: {
			async getPic() {
				this.img=Config.apiDomain+ '/Index/getPic';
			}
		}
	}
</script>