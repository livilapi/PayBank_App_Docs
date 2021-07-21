var md5 = require('md5');
var request = require('request');

function process(p_Data){
    return new Promise(function(resolve, reject){
        var return_data = {}
        try{
            var sign = md5("APPKEY="+p_Data.appKey+"&TS="+p_Data.ts+"&APPSECRET="+p_Data.appSecret);
            sign = sign.toLowerCase();
            var send_data = {
                appKey:p_Data.appKey,
                sign:sign,
                ts:p_Data.ts
            }
            request.post({
                headers: {'Content-Type':'application/json','Accept-Language':'zh-CN'},
                url: 'https://openapi.payurl.app/pay/order/coin/list',
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