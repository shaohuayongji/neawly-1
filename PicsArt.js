/**
* @supported 28D0150923AA CF1FE6F0B3BC
*/

var obj = JSON.parse($response.body);

obj.subscription= {
  "granted": true
};
$done({body: JSON.stringify(obj)});

// Mô tả
