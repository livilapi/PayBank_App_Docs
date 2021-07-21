const coin_list  = require("./coin_list/coin_list")
const order_create = require("./order_create/order_create")

var main = {
    send_data: function(p_data,result){
        return new Promise(function(resolve,reject){
            if(result == 1){
                // 코인 리스트 확인하기
                coin_list.process(p_data).then((data) => resolve(data))
            }else if(result == 2){
                // 결제 주문 생성
                order_create.process(p_data).then((data) => resolve(data))
            }
        });
    }
}

module.exports = main