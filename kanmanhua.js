/**
* @supported 28D0150923AA CF1FE6F0B3BC
*/

var body = $response.body;
var url = $request.url;
const path = "/app_api/v5/getuserinfo/";
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
	obj["isvip"] = "1";
	body = JSON.stringify(obj);
 }
$done({body});

// From HoGer
