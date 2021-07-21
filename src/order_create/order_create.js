var md5 = require('md5');
var request = require('request');

function process(p_Data){
    return new Promise(function(resolve, reject){
        var return_data = {}
        try{
            var sign = md5("AMOUNT="+p_Data.amount+"&APPKEY="+p_Data.appKey+"&CREATETYPE="+p_Data.createType+"&CURRENCYTYPE="+p_Data.currencyType+"&GOODSNAME="+p_Data.goodsName+"&MERCHANTORDERNUM="+p_Data.merchantOrderNum+"&TS="+p_Data.ts+"&APPSECRET="+p_Data.appsecret+"");   
            sign = sign.toLowerCase();
            var send_data = {
                createType:p_Data.createType,
                currencyType:p_Data.currencyType,
                amount:p_Data.amount,
                merchantOrderNum:p_Data.merchantOrderNum,
                goodsName:p_Data.goodsName,
                appKey:p_Data.appKey,
                sign:sign,
                ts:p_Data.ts
            }
            request.post({
                headers: {'Content-Type':'application/json','Accept-Language':'zh-CN'},
                url: 'https://openapi.payurl.app/pay/order/create',
                body: send_data,
                json: true
            }, function(error, response, body){
                if(error){
                    return_data = {
                        code: 201,
                        msg: "api-error"
                    }
                }else{
                    resolve(body);
                }
            });
        }catch(e){
            return_data = {
                code: 201,
                msg: "api-error"
            }
            resolve(return_data);
        }
    });
}

exports.process = process;