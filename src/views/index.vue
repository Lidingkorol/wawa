<style scoped lang="less">
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
	.loopBox {
		width: 30rem;
		position: relative;
	}
</style>
<template>
		<div class="loop" v-el:loop id="loops">
			<div v-el:box class="loopBox flex-box">
				<ul class="flex-box" v-el:ul id="uls">
					<li class="item" v-for="i in list">
						<div class="box">
							<span class="fontSize_34">{{i}}</span>
						</div>
					</li>
				</ul>
				<ul class="flex-box" v-el:ful id="uls2">
					<li class="item" v-for="i in list">
						<div class="box">
							<span class="fontSize_34">{{i}}</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
</template>
<script>
	import Config from '../config/config'
    import Request from '../config/request'
	import { Toast,Indicator,MessageBox } from 'mint-ui';

    export default {
        filters: {

        },
        directives: {
			
        },
        data () {
            return {
            	list:[]
            }
        },
        created() {
            this.$dispatch('isLoading',true)
        },
        async ready () {
            this.$dispatch('isLoading',false);
            await this.getList();
            this.animateLoop1();
        },
        beforeDestroy () {

        },
        methods: {
        	async getList(){
				let res = await Request.post(Config.apiDomain+ '/Index/showGoods',{data:{money:5}});
        		if(res.status == 200 && !!res.data){
	        		this.list=res.data;
	        	}else {
	        		Toast(res.msg)
	        	}
			},
            animateLoop1:function(){
				let that=this;
				var i=0;
				var k=1;
				function step(){
					/*console.count()*/
					i--;
					console.log(that.$els.box.offsetLeft)
					console.log(that.$els.ul.offsetWidth)
					if(that.$els.ul.offsetWidth+that.$els.box.offsetLeft<0) {
						that.$els.box.style.left=0;
						i=0;
					}
					that.$els.box.style.left=i + 'px';
					that.inter=requestAnimationFrame(step);
				}
				step();
			},
        }
    }
</script>
