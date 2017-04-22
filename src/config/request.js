/**
 * Created by yang on 2016/12/26.
 */
import Vue from 'vue';
export default {
     post(url,{data={},body={ "Access-Control-Allow-Origin":'*',"Access-Control-Allow-Headers":'Origin, X-Requested-With, Content-Type, Accept'}}={}){
         return new Promise((rs,rj)=>{
             Vue.http.post(url,data,body)
                 .then((res)=>{
                     console.log(res)
                     if(res.ok){
                         return res.body
                     }
                 })
                 .then((resolve)=>{
                     rs(resolve);
                 })
                 .catch((reject)=>{
                     rs(reject);
                     console.log('reject',reject)
                     return reject;
                 })

         })
     },
     get(url,{body={ "Access-Control-Allow-Origin":'*',"Access-Control-Allow-Headers":'Origin, X-Requested-With, Content-Type, Accept'}}={}){
         return new Promise((rs,rj)=>{
             Vue.http.get(url,body)
                 .then((res)=>{
                     if(res.ok){
                         return res.body
                     }
                 })
                 .then((resolve)=>{
                     rs(resolve);

                 })
                 .catch((reject)=>{
                     rs(reject)
                 })
         })
     },
     put(url,{data={},body={"Access-Control-Allow-Origin":'*',"Access-Control-Allow-Headers":'Origin, X-Requested-With, Content-Type, Accept'}}={}){
         return new Promise((rs,rj)=>{
             Vue.http.put(url,data,body)
                 .then((res)=>{
                     if(res.ok){
                         return res.body
                     }
                 })
                 .then((resolve)=>{
                     rs(resolve);

                 })
                 .catch((reject)=>{
                     rs(reject)
                 })
         })

     }


}