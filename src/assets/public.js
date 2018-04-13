/**
 * Created by leibo on 17/11/11.
 */
//POST请求
export const POST = (url, data, fn, err) => {
  var xhr = null;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {// code for IE6, IE5
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (xhr == null) {
    alert('您的浏览器不支持AJAX！');
    return;
  }
  let oStr = '';
  for (var key in data) {
    oStr += key + "=" + data[key] + "&";
  }
  ;
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(oStr);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 1 || xhr.readyState == 2 || xhr.readyState == 3) {
// 本地提示：加载中/处理中
    }
    if (xhr.readyState == 4 && xhr.status == 200) {
      fn && fn(xhr.responseText)
    } else {
      err && err(xhr.status);
    }
  }
}
function toZear(num) {
  return num < 10 ? '0' + num : '' + num;
}
//获取 年-月-日
export const getDateName = (obj, format) => {
  return obj.getFullYear()
    + format + toZear((obj.getMonth() + 1))
    + format + toZear(obj.getDate())
}
//日期格式化
export const dateFormat = (fmt, date) => {
  var o = {
    "M+": date.getMonth() + 1,                 //月份
    "d+": date.getDate(),                    //日
    "h+": date.getHours(),                   //小时
    "m+": date.getMinutes(),                 //分
    "s+": date.getSeconds(),                 //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds()             //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
export const IsBackCode = (data, _this) => {
  if (data.backCode === '005' || data.backCode === '001' || data.backCode === '002' || data.backCode === '003' || data.backCode === '004' || data.backCode === '000') {
    _this.$message({
      showClose: true,
      message: data.backResult,
      type: 'error'
    });
  }
};
//POST,Promise请求
export const postPromise = (url, data) => {
  return new Promise(function (relove, reject) {
    var xhr = null;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {// code for IE6, IE5
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xhr == null) {
      alert('您的浏览器不支持AJAX！');
      return;
    }
    let oStr = '';
    for (var key in data) {
      oStr += key + "=" + data[key] + "&";
    }
    ;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(oStr);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 1 || xhr.readyState == 2 || xhr.readyState == 3) {
// 本地提示：加载中/处理中
      }
      if (xhr.readyState == 4 && xhr.status == 200) {
        relove(xhr.responseText)
      }
    }
  })
}
// //筛选是否为空
// export const IsGetNull = (obj,_this,keyword)=>{
//   var arrValue = Object.entries(obj);
//   for(var i=0;i<arrValue.length;i++){
//     if(!arrValue[i][1]&&arrValue[i][0].trim()!=keyword){
//       _this.$message({
//         showClose: true,
//         message: '输入内容不能为空！',
//         type: 'error'
//       });
//       return;
//     }
//   }
// }
function checkTime(i){ //将0-9的数字前面加上0，例1变为01
  if(i<10)
  {
    i = "0" + i;
  }
  return i;
}
//倒计时
export const leftTimer = (el,year,month,day,hour,minute,second)=>{
  return new Promise((relove, reject) => {
    var leftTime = (new Date(year, month - 1, day, hour, minute, second)) - (new Date()); //计算剩余的毫秒数
    var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
    var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时
    var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟
    var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
    days = checkTime(days);
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    if(Number(days)==0&&Number(hours)==0&&Number(minutes)==0&&Number(seconds)==0){
      relove()
    }
    // setInterval(leftTimer(el,2018,2,11,11,11,11),1000);
    el.text = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
  })
}
//判断手机号码
export const isPhone = id=>{
  return /^1[0-9]{10}$/.test(id);
};

