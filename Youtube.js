/**
* @supported 28D01509 CF1FE6F0
*/

/*
[Script]
http-request ^https://[\s\S]*\.googlevideo\.com/.*&(oad|ctier) script-path=https://raw.githubusercontent.com/seamly01/neawly/master/Youtube.js

[MITM]
hostname = *.googlevideo.com
*/

var data = {
  body: "{}",
  headers: {
    "Content-Type": "multipart/byteranges"
  }
};
$done({response: data});
