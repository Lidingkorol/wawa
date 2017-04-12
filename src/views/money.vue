<style scoped>
	/*.bg_head {
		background: url(../images/bg_02.png) no-repeat;
		height: 3rem;
		background-size: 100%;
	}*/
	.container {
		background: url(../images/asd_02.png) no-repeat;
		background-size: 100%;
		padding-top: 3rem;
		box-sizing: border-box;
	}
	.main {
		/*background:rgb(216,39,29);*/
		padding:0 .6rem;
	}
	.allRecord span {
		text-align: center;
		height: .45rem;
		line-height: .45rem;
	}
	.allRecord>.item_hd {
		background-color: rgb(153,24,18);
		color: #fff;
	}
	.allRecord>.item_bd {
		background-color: rgb(242,144,152);
	}
	.wallet {
		padding:.2rem;
		color:rgb(216,39,29);
		background-color: rgb(242,144,152);
		margin-top: .2rem;
	}
	.wallet>.price {
		line-height: 1rem;
		height: 1rem;
	}
	.wallet>a {
		display:block;
		width: 100%;
		background:rgb(245,233,45) ;
		height: .6rem;
		line-height: .6rem;
		border-radius: .1rem;
		text-align: center;
	}
	.myList {
		margin-top: .2rem;
	}
	.myList>.item_hd {
		background-color: rgb(242,144,152);
		line-height: .65rem;
		height: .65rem;
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
	}
	.myList span {
		text-align: center;
	}
</style>
<template>
	<div class="container">
		<!--<div class="bg_head"></div>-->
		<div class="main">
			<div class="allRecord flex-box flex-direction_column">
				<div class="item_hd flex-box flex-align_center">
					<span class="flex-item">累计佣金</span>
					<span class="flex-item">今日佣金</span>
					<span class="flex-item">提现中佣金</span>
				</div>
				<div class="item_bd flex-box flex-align_center">
					<span class="flex-item">￥{{}}</span>
					<span class="flex-item">￥{{}}</span>
					<span class="flex-item">￥{{}}</span>
				</div>
			</div>
			<div class="wallet flex-box flex-direction_column flex-align_center">
				<span class="title">账号余额</span>
				<span class="price">￥{{}}</span>
				<p>满一元可提现，每天可提现50次</p>
				<a>立即提现</a>
			</div>
			<div class="myList flex-box flex-direction_column">
				<span class="item_hd">
					我夹中的娃娃
				</span>
				<div class="item_bd">
					<div class="title flex-box flex-align_center">
						<span class="flex-item">时间</span>
						<span class="flex-item">收入</span>
					</div>
					<ul>
						<li class="flex-box flex-align_center">
							<span class="flex-item">{{}}</span>
							<span class="flex-item">{{}}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		<nav-bottom :link="3"></nav-bottom>
	</div>
</template>
<script>

	import navBottom from '../components/bottom'
	
	
	export default {
		components : {
			navBottom
		},
		data () {
			return {}
		},
		created() {
            this.$dispatch('isLoading',true)
        },
        ready () {
            this.$dispatch('isLoading',false);
        },
		beforeDestroy () {

		},
		methods: {}
		
		
	}
</script>