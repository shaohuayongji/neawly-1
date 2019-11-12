/**
* @supported 28D01509 CF1FE6F0
*/

let obj = JSON.parse($response.body);
obj.data.is_vip = 1;
obj.data.vip_endtime = 1630296877;
$done({body: JSON.stringify(obj)});
