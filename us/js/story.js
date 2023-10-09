
var box = document.getElementById("list-box");
var next = document.getElementById("next");
var front = document.getElementById("front");
// li元素数组
var list = box.getElementsByTagName("li");
console.log(list);

//设置li的left
var temp = -600;
for (var i = 0; i < list.length; i++) {
  list[i].style.left = temp + "px";
  temp += 970;
}

// 记录移动位置
var now = 1;
list[1].className = 'temp'
list[1].style.left = 220 + "px";

// 节流阀
var flag = true

// 下一张
// 点击事件
next.addEventListener('click', function () {
  if (now == list.length - 1) {
    alert("这是最后一张啦");
  } else if (flag) {
    flag = false
    //将上一个元素往左移150，并缩小
    shrink(list[now], 700, 500, now * 970 - 600, 80, callback)
    now++;
    //将当前元素往前移150，并放大
    shrink(list[now], 1000, 680, now * 970 - 600 - 150, 0, callback)
    // 大盒子移动
    move(box, -(now - 1) * 970)
  }
})

// 上一张
// 绑定点击事件
front.addEventListener("click", function () {
  if (now < 2) {
    alert("前面没有了哦");
  } else if (flag) {
    flag = false
    // 清除
    shrink(list[now], 700, 500, now * 970 - 600, 80, callback)
    now--;
    shrink(list[now], 1000, 680, now * 970 - 600 - 150, 0, callback)
    move(box, -(now - 1) * 970)
  }
});


//清除li的样式
function delclass() {
  for (var i = 0; i < list.length; i++) {
    list[i].className = "";
  }
}

function callback() {
  flag = true
}

// 放大，缩小动画函数
// obj，移动对象
// target：目标大小
function shrink(obj, targetW, targetH, targetL, targetT, callback) {
  // 清除计时器
  clearInterval(obj.timer)
  // 设置计时器
  obj.timer = setInterval(function (e) {
    // 获取缩小步数
    var width = parse((targetW - obj.offsetWidth) / 10)
    var height = parse((targetH - obj.offsetHeight) / 10)
    var pos = parse((targetL - obj.offsetLeft) / 10)
    var top = parse((targetT - obj.offsetTop) / 10)
    //如果达到目标，则清除计时器
    if (obj.offsetWidth == targetW && obj.offsetHeight == targetH) {
      clearInterval(obj.timer)
      callback && callback()
    }
    obj.style.width = obj.offsetWidth + width + "px"
    obj.style.height = obj.offsetHeight + height + "px"
    obj.style.left = obj.offsetLeft + pos + "px"
    obj.style.top = obj.offsetTop + top + "px"
  }, 30)
}


function parse(temp) {
  return temp > 0 ? Math.ceil(temp) : Math.floor(temp)
}

// 移动函数
function move(obj, target, callback) {
  clearInterval(obj.timer)
  obj.timer = setInterval(function () {
    var step = parse((target - obj.offsetLeft) / 10)
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer)
      callback && callback
    }
    obj.style.left = obj.offsetLeft + step + "px"

  }, 30)
}


//12， 7月1日
var imgbox12 = document.getElementById("imgbox12");

      var time12;
      console.log(imgbox12.offsetTop);
      
      gettime12()
      function gettime12() {
        flag12 = true
        time12 = setInterval(function () {
          if (imgbox12.offsetTop == 0) {
            imgbox12.style.top = -3000+"px"
          }else{
            imgbox12.style.top = imgbox12.offsetTop +1+ "px"
          }
        },15);
      }

      var flag12 = false
      imgbox12.addEventListener('mouseover',function(){
        clearInterval(time12)
        flag12 =false
      })
      imgbox12.addEventListener('mouseout',function(){
        if(!flag12){
          gettime12()
        }
      }) 



// 20 南澳岛
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var backbox = document.getElementsByClassName("back-box");

//   移动计时器
var timer;
// 节流阀
var timeFlag = false;
gettime()
function gettime() {
  timeFlag = true;
  timer = setInterval(function () {
    side(one);
    mid(two);
    side(three);
  }, 50);
}
// 鼠标经过停下
backbox[0].addEventListener("mouseover", function () {
  clearInterval(timer);
  timeFlag = false;
});
// 鼠标离开继续
backbox[0].addEventListener("mouseout", function () {
  if (timeFlag == false) {
    gettime();
  }
});

// 两边方框
function side(temp) {
  // 判断第一张是否移动到最上面
  if (Math.abs(temp.offsetTop) == temp.offsetHeight / 2) {
    temp.style.top = 0 + "px";
  }
  // 如果没有继续移动
  else {
    temp.style.top = temp.offsetTop - 2 + "px";
  }
}

// 中间
function mid(temp) {
  // 判断第一张是否移动到最上面
  if (Math.abs(temp.offsetTop) == 0) {
    temp.style.top = -(temp.offsetHeight / 2) + "px";
  }
  // 如果没有继续移动
  else {
    temp.style.top = temp.offsetTop + 2 + "px";
  }
}




// 播放音乐
var music = document.getElementById("music")
function m() {
  if (music.paused) {
    music.paused = false
    // 播放
    music.play()
  }
}
// 点击事件后，播放音乐
document.addEventListener('click', function () {
  m()
})


// 伞型轮播图
var stackedCard = new stackedCards({
  selector: '.stacked-cards',
  layout: "fanOut",
  transformOrigin: "bottom",
});

stackedCard.init();      