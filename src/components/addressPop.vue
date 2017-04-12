<style scoped>



    .mask {
        width: 100%;
        height: 100%;
        position:fixed;
        top: 0;
        background:rgba(0,0,0,0.7);
        z-index: 999;
    }

    .addrAdd {
        overflow: hidden;
        border-radius: 0.2rem;
        width: 88%;
        position: fixed;
        z-index: 9999;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        background: #fff;
    }
    .m-form-back {
        display: flex;
        right: 0.1rem;
        top: 0.1rem;
        color: #0fc977;
        position: fixed;
        padding: 0.1rem 0.2rem;
        font-size: 0.4rem;
        line-height: 0.48rem;
        z-index: 99;
    }
    .form-warp {
        margin: 0 0.2rem;
        display: flex;
        flex-wrap: wrap;
    }

    .title {
        width: 100%;
        font-size: 0.3rem;
        line-height: 1rem;
        text-align: center;
        position: relative;
    }
    .title::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        background: #dedede;
        height: 1px;
        width: 100%;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
    }
    .msg-box {
        width: 100%;
        height: 1rem;
        display: flex;
        flex-wrap: nowrap;
        position: relative;
        box-sizing: border-box;
    }
    .msg-box::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        background: #dedede;
        height: 1px;
        width: 100%;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
    }
    .msg-box::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        background: #dedede;
        width: 1px;
        height: 1rem;
        -webkit-transform: scaleX(.5);
        transform: scaleX(.5);
    }
    .msg-box input {
        width: 50%;
        height: 100%;
        padding-left: 0.2rem;
        line-height: 1rem;
        color: #333;
        font-family: inherit;
        font-size: 0.28rem;
    }

    .address-other {
        width: 100%;
        position: relative;
    }

    .address-other input {
        padding-left: 0.2rem;
        margin: 0.2rem 0;
        height: 0.6rem;
        width: 100%;
        box-sizing: border-box;
        color: #333;
        font-family: inherit;
        font-size: 0.28rem;
    }
    .address-other::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        background: #dedede;
        height: 1px;
        width: 100%;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
    }
    .address-save {
        width: 100%;
    }
    .address-save button {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        color: #fff;
        font-family: inherit;
        font-size: 0.38rem;
        background: #0fc977;
        border: none;
        outline: none;
    }
</style>

<template>

    <!--地址弹窗-->
    <div class="mask" v-show="statusAddress"  @touchmove.prevent>

        <div class="addrAdd">

            <a href="javascript:;" class="m-form-back" @click="this.$parent.statusAddress=false">&times;</a>

            <div class="form-warp">
                <div class="title">
                    <template v-if="!!id">
                        修改地址
                    </template>
                    <template v-else>
                        新增地址
                    </template>
                </div>

                <div class="msg-box">
                        <input placeholder="姓名" class="name" type="text" name="name" maxlength="8" v-model="name">
                        <input placeholder="电话" class="phone"  pattern="/^1[3|4|5|7|8]\d{9}$/"  type="number" name="phone" v-model="phone" min="1"  max="11" >
                </div>


                <div class="address-choose">
                    <region-picker
                            :province.sync="province"
                            :city.sync="city"
                            :district.sync="district">
                    </region-picker>
                </div>

                <div class="address-other">
                    <input type="text" placeholder="请填写详细街道地址" v-model="address" name="address">
                </div>

                <input v-if="!!id" type="hidden" name="addressId" v-model="id">

            </div>
            <div class="address-save">
                <button type="submit" class="m-simpleHeader-ok" @click.stop="addressChange" >保存</button>
            </div>
        </div>
    </div>

</template>

<script>
    import { RegionPicker } from 'vue-region-picker'
    import REGION_DATA from 'china-area-data'
    import { Toast,MessageBox } from 'mint-ui';


    import Config from '../config/config'
    import Request from '../config/request'
    import User from '../config/user'

    RegionPicker.region = REGION_DATA;

    module.exports = {

        props:{
            //地址id
            id:{
                type:String,
                default:''
            },

            //省
            province:{
                type:String,
                default:''
            },
            //市
            city:{
                type:String,
            },
            //区
            district:{
                type:String,
                default:''
            },
            //街道
            address:{
                type:String,
                default:''
            },
            phone:{
                type:String,
            },
            name:{

                type:String,
                default:''
            },
            //弹窗显示或隐藏
            statusAddress:{
                type:Boolean,
                default:false
            }

        },
        computed:{

        },
        data() {

            return {
                statusToast:false,
                msg:''
            }
        },

        components: {

            RegionPicker,

        },
        created(){

            this.$dispatch('isLoading', true);

        },
        ready() {

            this.$dispatch('isLoading', false);
        },
        beforeDestroy() {

        },

        route:{
            canReuse(transition){

                return true;

            }

        },

        methods: {

            async addressChange(id){


                if(!this.province||!this.city||!this.district||!this.address||!this.phone||!this.name){
                    Toast({
                        message: '信息不完整',
                        position: 'middle',
                        duration: 2000,
                        className: 'toast'
                    });
                    return false
                }

                if(!this.isPhone(this.phone)){
                    Toast({
                        message: '手机号有误',
                        position: 'middle',
                        duration: 2000,
                        className: 'toast'
                    });
                    return false
                }

                let address = {

                    /*sheng:this.province,
                    shi:this.city,
                    xian:this.district,
                    jiedao:this.address,*/
                   	address:this.province+this.city+this.district+this.address,
                    mobile:this.phone,
                    username:this.name,
                    id:this.id,
                    token:User.token


                }

                let res = {}

                if (!!this.id) {

                    res = await User.updateAddress(address)

//                    this.PTdefault()

                } else {

                    res = await User.addAddress(address)

//                    this.PTdefault()

                }

                if (res.status === 200) {

                    this.$parent.statusAddress = false;

                    this.$dispatch('updateAddressList',res.data.id)

                } else {

                    this.$dispatch('showError',true,res.msg);

                }


            },
//            async PTdefault(){
//                // 为新拼团地址
//
//                let data = {
//                    username:this.name,
//                    mobile: this.phone,
//                    address: this.province+this.city+this.district+this.address,
//                    qq_num: '',
//                    wx_num: '',
//                    token:User.token
//                }
//
////                let res = await User.PTupdateAddress(data)
//
//            },
            isPhone(val){
                return  /^1[3|4|5|7|8]\d{9}$/.test(val)
            }
        },

    }
</script>
