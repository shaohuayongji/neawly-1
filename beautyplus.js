/**
* @supported 28D0150923AA CF1FE6F0B3BC
*/

var obj = JSON.parse($response.body);


obj=  {
  "status": 0,
  "expires_date": "9999-06-06 19:57:41"
};
$done({body: JSON.stringify(obj)});
