/**
 * Created by lcfevr on 16/7/18.
 */
export default {

    //深对象复制，无法复制继承属性
    clone(obj){
        return Object.assign({},obj)
    },
    //深对象复制，可复制继承属性 注：若两个对象中有同名字段，后一个对象的值会覆盖前一个对象
    extendClone(origin){
        let originProto=Object.getPrototypeOf(origin);
        return Object.assign(Object.create(originProto),origin);
    },
    //多个对象合并到某一个对象
    merge(target,...sources){
        return Object.assign(target,...sources);
    },
    strLength(str){
        var oLength=0;
        for(let ch of str){
            if(ch.codePointAt(0)>0xFFF){
                oLength+=4
            }else{
                oLength+=2
            }
        }
        return oLength;
    },
    getLength(str){
        return  [...str].length;
    },

    getMultiArr(arr,...newArr){
        arr.push(...newArr);
        return arr;
    },
    pushArr(arr,newArr){
        arr.push(...newArr)
        return arr;
    },
    baseImg(imgObj,callback){
        var  reader=new FileReader();
        reader.onload=callback()
        reader.readAsDataURL(imgObj)
    },
    objToArr(obj){
        var arr=[];
        Object.keys(obj).forEach(function(item){
            arr.push(obj[item])
        })

        return arr;
    },
    objToQueryString(obj) {
        var result = [],
            key, value, i;
        for (key in obj) {
            value = obj[key];
            if (value instanceof Array) {
                for (i = value.length; i--;) {
                    result.push(key + '[]=' + encodeURIComponent(value[i]));
                }
            } else {
                result.push(key + ('' === value ? '' : ('=' + encodeURIComponent(value))));
            }
        }
        return result.join('&');
    },
    arrToObj(arr, key) {
        if (typeof arr == 'object' && (arr instanceof Array)) {
            var obj = {};
            for (var i = 0, len = arr.length; i < len; i++) {
                if (!!arr[i] && arr[i][key]) {
                    obj[arr[i][key]] = arr[i];
                }
            };
            return obj;
        }
        return null;
    },
}