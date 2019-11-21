/**
* @supported 28D0150923AA CF1FE6F0B3BC
*/

var obj = JSON.parse($response.body);
obj.data.is_premium= true;
$done({body: JSON.stringify(obj)});
