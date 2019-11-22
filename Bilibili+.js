/**
* @supported 28D0150923AA CF1FE6F0B3BC
*/

let obj = JSON.parse($response.body);
obj["result"]["user_status"]["vip"] = 1;
$done({body: JSON.stringify(obj)});
