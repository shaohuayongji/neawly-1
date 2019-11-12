/**
* @supported 28D01509 CF1FE6F0
*/

var obj = JSON.parse($response.body);

obj.subscription= {
  "granted": true
};
$done({body: JSON.stringify(obj)});

// Mô tả
