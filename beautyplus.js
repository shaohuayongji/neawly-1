/**
* @supported 28D01509 CF1FE6F0
*/

var obj = JSON.parse($response.body);


obj=  {
  "status": 0,
  "expires_date": "9999-06-06 19:57:41"
};
$done({body: JSON.stringify(obj)});
