/**
* @supported 28D01509 CF1FE6F0
*/

var body = $response.body;
var obj = JSON.parse(body);

obj.tradeEndTime = 1679685290000;
body = JSON.stringify(obj);
$done(body);

//By yxiaocai & JO2EY
