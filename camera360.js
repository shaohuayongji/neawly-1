/**
* @supported 28D01509 CF1FE6F0
*/

var obj = JSON.parse($response.body);

obj= {
 "data": {
  "errorCode": 0,
  "sandbox": 0,
  "purchaseTime": 1571682188,
  "expireTime": 4092611821,
  "productId": "VIP_yearly_29.99",
  "appleVip": 1,
  "operationVip": 0,
  "giftVip": 0
 },
 "status": 200,
 "message": "ok",
 "serverTime": 1571821229.7542,
 "exetime": "1571821226646-4092611821000"
};
$done({body: JSON.stringify(obj)});

// Descriptions
