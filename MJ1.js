/**
* @supported 28D01509 CF1FE6F0
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
