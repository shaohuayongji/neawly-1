/**
* @supported 28D0150923AA CF1FE6F0B3BC
*/

var body = $response.body;
var obj = JSON.parse(body);

obj.tradeEndTime = 1679685290000;
body = JSON.stringify(obj);
$done(body);

//By yxiaocai & JO2EY
