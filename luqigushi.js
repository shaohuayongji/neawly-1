/**
* @supported 28D0150923AA CF1FE6F0B3BC
*/

let obj = JSON.parse($response.body);
obj.data.is_vip = 1;
obj.data.vip_endtime = 1630296877;
$done({body: JSON.stringify(obj)});
