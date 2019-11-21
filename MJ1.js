/**
* @supported 28D0150923AA CF1FE6F0B3BC
*/

var obj = JSON.parse($response.body);

obj["subscriptions"] = [
  {
	"status": 1,
	"message": "success",
	"data": []
}
  ];
$done({body: JSON.stringify(obj)});
