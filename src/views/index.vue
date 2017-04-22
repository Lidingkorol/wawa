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
		width: 30rem;
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
</style>
<template>
		<div class="loop" v-el:loop id="loops">
			<ul class="flex-box" v-el:ul id="uls">
				<li class="item" v-for="i in list">
					<div class="box">
						<span class="fontSize_34">{{i}}</span>
					</div>
				</li>
			</ul>
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
				console.log(this.$els.ul.children[0])
				function step(){
					/*console.count()*/
					var first=that.$els.ul.children[0];
					/*console.log(that.$els.ul.offsetLeft)*/
					console.log(that.$els.ul.offsetLeft)
					if(that.$els.ul.offsetLeft + first.offsetWidth*k<0) {
						console.count();
						k++;
						that.$els.ul.removeChild(first);
						that.$els.ul.appendChild(first);
					}
					i--;
					that.$els.ul.style.left=i + 'px';
					requestAnimationFrame(step);
				}
				step();
			},
        }
    }
</script>
