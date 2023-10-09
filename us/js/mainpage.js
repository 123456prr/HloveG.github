//获取元素
var timer = document.getElementById("timer");

//
var date = new Date();
var lovetime = new Date("July 01, 2023 23:00:00:000");
var love = date.getTime() - lovetime.getTime();
console.log(love);
var day = parseInt(love / 1000 / 60 / 60  / 24);
var hour = parseInt((love / 1000 / 60 / 60 ) % 24);
var min = parseInt((love / 1000 / 60 ) % 60);
var sec = parseInt((love / 1000 ) % 60);
var str;
//定义计时器
setInterval(function () {
  var date = new Date();
  love = date.getTime() - lovetime.getTime();
  day = parseInt(love / 1000 / 60 / 60 / 24);
  hour = parseInt((love / 1000 / 60 / 60) % 24);
  min = parseInt((love / 1000 / 60) % 60);
  sec = parseInt((love / 1000 ) % 60);
  str = day + "天 " + hour + "时 " + min + "分 " + sec + "秒";
  // console.log(str);
  timer.innerHTML = str;
}, 1000);