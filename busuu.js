/**
* @supported 28D01509 CF1FE6F0
*/

var obj = JSON.parse($response.body);
obj.data.is_premium= true;
$done({body: JSON.stringify(obj)});
