<style scoped>
	/*.bg_head {
		background: url(../images/bg_02.png) no-repeat;
		height: 3rem;
		background-size: 100%;
	}*/
	.container {
		background: url(../images/asd_02.png) no-repeat;
		background-size: 100%;
		padding-top: 2.8rem;
		box-sizing: border-box;
	}
	.main {
		background:rgb(216,39,29);
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
		line-height: 1.5rem;
		height: 1.5rem;
		font-size: .58rem;
	}
	.wallet>p {
		border-top:1px solid rgb(153,24,18);
		width: 100%;
		text-align: center;
		line-height: .6rem;
		height: .6rem;
		color: rgb(175,44,60);
	}
	.wallet>a {
		display:block;
		width: 100%;
		background:rgb(245,233,45) ;
		height: .6rem;
		line-height: .6rem;
		border-radius: .1rem;
		text-align: center;
		margin-top: .2rem;
		color: rgb(175,44,60);
	}
	.myList {
		margin-top: .2rem;
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
/*		overflow-x: auto;
		height: 2rem;*/
		color:rgb(216,39,29);
	}
	.myList .item_bd ul p {
		text-align: center;
		color: #fff;
		padding:.3rem 0;
	}
	.myList span {
		text-align: center;
		
	}
	.blank {
		height: 1.3rem;
		background-color:rgb(216,39,29);
	}
</style>
<template>
	<div class="container">
		<!--<div class="bg_head"></div>-->
		<div class="main">
			<div class="allRecord flex-box flex-direction_column">
				<div class="item_hd flex-box flex-align_center">
					<span class="flex-item">累计佣金</span>
					<span class="flex-item">累计提现</span>
				</div>
				<div class="item_bd flex-box flex-align_center">
					<span class="flex-item">￥{{user.total_send}}</span>
					<span class="flex-item">￥{{user.total_get}}</span>
				</div>
			</div>
			<div class="wallet flex-box flex-direction_column flex-align_center">
				<span class="title fontSize_28">账号余额</span>
				<span class="price">￥{{user.money}}</span>
				<p class="fontSize_28">满一元可提现，每天可提现50次</p>
				<a @click="goWithdraw">立即提现</a>
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
						<template v-if="reList">
							<li class="flex-box flex-align_center" v-for="i in reList">
								<span class="flex-item">{{i.addtime}}</span>
								<span class="flex-item">{{i.true_money}}</span>
							</li>
						</template>
						<template v-else>
							<p class="fontSize_30">暂无消费记录！</p>
						</template>
					</ul>
				</div>
			</div>
		</div>
		<div class="blank"></div>
		<nav-bottom :link="3"></nav-bottom>
	</div>
</template>
<script>

	import navBottom from '../components/bottom'
	import Request from '../config/request'
	import Config from '../config/config'
	import { Toast,Indicator,MessageBox } from 'mint-ui';
	
	export default {
		components : {
			navBottom
		},
		data () {
			return {
				user:{},
				reList:[]
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
			async getMyRecord(){
				let res = await Request.post(Config.apiDomain+ '/Index/getMyRecord',{data:{token:111}});
        		if(res.status == 200 && !!res.data){
        			if(!res.data.user) {
	        			window.location.href=Config.apiDomain + '/Index/index';
	        		}
	        		this.user=res.data.user;
	        		this.reList=res.data.recode;
	        		console.log(this.reList)
	        	}else {
	        		Toast(res.msg)
	        	}
			},
			async goWithdraw(){
				let res = await Request.post(Config.apiDomain+ '/index/send_pay');
        		if(res.status == 200){
        			console.log(res.data)
        			Toast(res.msg)
        			window.location.reload();
	        	}else {
	        		Toast('提现金额未满一元！')
	        	}
			}
		}
		
		
	}
</script>