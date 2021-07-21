const main = require('./src/main');

// coin_list();     // 코인 리스트 확인하기
order_create(); // 결제 주문 생성


// 코인 리스트 확인하기
function coin_list(){
    var json_data = {
        appKey: "kpecb34edd45cf4d2bb42229aac78f66c5",  // 가맹점 appKey
        ts: Math.round(new Date() / 1000),             // 현재 유닉스 시간
        appSecret: "sbf54f0ae60704c69859b028c5cdb1fbd" // 가맹점 appSecret
    }

    main.send_data(json_data,1).then(data => {
        console.log(data);
    });
}

// 결제 주문 생성
function order_create(){
    var json_data = {
        amount: 15000,                                  // 결제금액(법정화페)
        appKey: "kpecb34edd45cf4d2bb42229aac78f66c5",   // 가맹점 appKey
        createType: 1,                                  // 1.법정화페, 2.결제시 코인ID, 3.가맹점 코인ID
        currencyType: 3,                                // 1.CNY, 2.USD, 3.KRW
        goodsName: "test1111",                          // 상품이름
        merchantOrderNum: "test"+Math.round(new Date() / 1000),// 사용자 주문번호 고유값
        ts: Math.round(new Date() / 1000),              // 현재 유닉스 시간
        appsecret: "sbf54f0ae60704c69859b028c5cdb1fbd"  // 가맹점 appSecret
    }

    main.send_data(json_data,2).then(data => {
        console.log(data);
    });
}