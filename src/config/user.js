/**
 * Created by yang on 2017/2/27.
 */
import Vue from 'vue';
import Config from '../config/config'
import Request from '../config/request'
import Util from '../libs/util';

class User{
    constructor(isLogin=false,userInfo=null,token='',timeout=0,uid='',openid='',isWeixin="micromessenger" == window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)){
        this.isLogin=isLogin;
        this.userInfo=userInfo;
        this.token=token;
        this.timeout=timeout;
        this.uid=uid;
        this.openid=openid;
        this.isWeixin=isWeixin;
    }
    init(query){
        let self = this,
            queryData = query,
            userInfo = localStorage.getItem('USER');
        console.log(queryData);
		console.log( userInfo)
        console.log(queryData.res)
        if (queryData.res == 'clear') {

            localStorage.removeItem('USER');
            // localStorage.removeItem('CART');

            history.replaceState(history.state, null, this.getNoCodeHref(queryData));
        }

        if (!!queryData.token) {
            console.log('存在token')
            this.token = queryData.token;
            this.openid=queryData.openid;
            this.timeout = Date.now() + 86400000;
            this.isFocus=queryData.isFocus;
            this.isLogin=true;
            console.log(this)
            history.replaceState(history.state, null, this.getNoCodeHref(queryData));
            return  this.saveUser(this.token);
        } else {
            return  this.checkUser();
        }
    }
    getNoCodeHref(query) {
        console.log(query)
        let search = query,
            href = window.location.origin + window.location.pathname;
        delete search.code;
        delete search.state;
        delete search.from;
        delete search.isappinstalled;
        delete search.token;
        delete search.res;
        delete search.openid;
        search = Util.objToQueryString(search);
        return href + (search == '' ? '' : '?' + search);
    }
    checkUser() {
        let user = localStorage.getItem('USER');

        console.log(user)
        if (!!user) {
            user = JSON.parse(user);
        }

		
        if (user && user.token && user.timeout > Date.now()) {
            /*if (user.id) {
            	
                this.saveUser(user.token, user.timeout, user.id,user.isFocus,user.couponNum);
                return true;
            } else {
                this.token = user.token;
                this.timeout = user.timeout;
                return  this.getUser();
            }*/
           this.saveUser(user.token, user.timeout, user.id,user.isFocus,user.couponNum);
        } else {
            this.removeUser();
            return false;
        }
    }
    saveUser(token, timeout=(Date.now() + 86400000), id,isFocus,couponNum) {
        if (!token) {
            return;
        }

        let obj = {
            token: token,
            timeout: timeout ,
            id: id,
            isFocus:isFocus,
            couponNum:couponNum
        };
        localStorage.setItem('USER', JSON.stringify(obj));
        this.token = obj.token;
        this.uid = obj.id;
        this.timeout = obj.timeout;
        this.isLogin = true;
        this.isFocus=obj.isFocus;
        this.couponNum=obj.couponNum;
        console.log(this.token)
        console.log(obj)
        return obj;
    }
    removeUser() {
        console.warn('移除User')
        this.isLogin = false;
        this.userInfo = null;
        this.token = '';
        this.timeout = 0;
        this.uid = '';
        localStorage.removeItem('USER');
    }

    //返回user对象
/*    async getUser() {
        console.log('getUser')
        let res=await Request.post(Config.apiDomain + '/Member/getUserCenter?token='+this.token)
        if (res.status == 200 && !!res.data && !!res.data.item && res.data.item.length > 0) {
            this.uid = res.data.item[0].id;
            this.couponNum=Number.parseInt(res.data.item[0].coupon_num);
            this.isFocus=res.data.item[0].isFocus
            console.log(this.couponNum)
            console.log(res.data)
            this.saveUser(this.token, this.timeout, this.uid,this.isFocus,this.couponNum);
            return res;
        }
        return false;
    }*/




    async setUserName(name=''){
        let res=await Request.post(Config.apiDomain + '/Member/setUserName?token='+this.token,{data:{username:name}})
        return res;
    }


}


let user=new User();
export default user;