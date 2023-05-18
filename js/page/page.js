if (location.href.indexOf('qq.com') >= 0) {
   document.domain = 'qq.com'
}
; function pings() {
   if (typeof (pgvMain) == 'function')
      pgvMain();
}
function _g(sid) {
   return document.getElementById(sid);
}
String.prototype.trim = function () {
   return this.replace(/(^\s*)|(\s*$)/g, "");
}
//string去空格
var IE = window.navigator.appVersion.indexOf('MSIE') != -1
   , ua = navigator.userAgent
   , FF = ua.indexOf("Firefox") != -1;
if (IE)
   var IE6 = window.navigator.appVersion.indexOf('MSIE 6') != -1;
function loadJs(url) {
   var obj = document.createElement("script");
   obj.setAttribute("src", url);
   document.getElementsByTagName("head")[0].appendChild(obj);
   return obj;
}
function delayJs(u, s, v) {
   var e = loadJs(u);
   if (IE) {
      e.onreadystatechange = function () {
         if (this.readyState && this.readyState == "loading")
            return;
         else if (s)
            s(v)
      }
   } else {
      e.onload = function () {
         if (s)
            s(v)
      }
   }
}
; function addload(func) {
   var old = window.onload;
   if (typeof window.onload != "function") {
      window.onload = func;
   } else {
      window.onload = function () {
         old();
         func();
      }
   }
}
; function addEvent(el, type, handler, capture) {
   if (typeof el.addEventListener != 'undefined') {
      if (type === 'mouseenter')
         el.addEventListener('mouseover', withinElement(handler), capture);
      else if (type === 'mouseleave')
         el.addEventListener('mouseout', withinElement(handler), capture);
      else
         el.addEventListener(type, handler, capture)
   } else if (typeof el.attachEvent != 'undefined')
      el.attachEvent('on' + type, handler);
   else
      el['on' + type] = handler
}
function withinElement(handler) {
   return function (e) {
      var parent = e.relatedTarget;
      while (parent && parent != this) {
         try {
            parent = parent.parentNode
         } catch (e) {
            break
         }
      }
      if (parent != this)
         handler.call(this, e)
   }
}
; function addClass(obj, cls) {
   var oldCls = obj.className;
   if (oldCls.indexOf(cls) == -1) {
      if (oldCls == "")
         obj.className = cls;
      else {
         obj.className = oldCls + " " + cls;
      }
   }
}
//原有样式上添加样式名
function delClass(obj, cls) {
   var oldCls = obj.className;
   var arr = oldCls.split(cls);
   if (oldCls.indexOf(cls) != -1)
      obj.className = (arr[0].trim() + arr[1]).trim();
}
//原有样式上删除样式名
function index(node) {
   var index = 0;
   while (node = node.previousSibling) {
      if (node.nodeType == 1)
         index++;
   }
   return index;
}
//获取dom在父节点中的子节点里的位置
function appendHtml(o, h) {
   try {
      o.insertAdjacentHTML('beforeEnd', h)
   } catch (e) {
      var f = o.ownerDocument.createRange().createContextualFragment(h);
      o.appendChild(f);
   }
}
//兼容浏览器的插入html方法
function getStyle(o, c) {
   if (IE) {
      if (c.indexOf("-") != -1) {
         c = c.split("-");
         var len = c[1].length
            , S = c[1].substring(0, 1).toUpperCase()
            , T = c[1].substring(1, len);
         c = c[0] + S + T;
      }
      ; return _g(o).currentStyle[c];
   } else {
      return document.defaultView.getComputedStyle(_g(o), "").getPropertyValue(c);
   }
}
//获取对象的原始样式值
function outHTML(htmlNode) {
   return document.createElement("DIV").appendChild(htmlNode.cloneNode(true)).parentNode.innerHTML
}
//nav
addEvent(_g("topNav"), "mouseenter", function () {
   _g("navWrap").style.display = "block";
}, false);
addEvent(_g("navWrap"), "mouseleave", function () {
   _g("navWrap").style.display = "none";
}, false);
//荣誉墙下拉
if (_g("awardBox")) {
   addEvent(_g("awardBox"), "mouseover", function () {
      _g("awardWall").style.display = "block";
      addClass(_g("fixP1"), "fix_p1_on")
   }, false);
   addEvent(_g("awardBox"), "mouseout", function () {
      _g("awardWall").style.display = "none";
      delClass(_g("fixP1"), "fix_p1_on")
   }, false);
}
//合作媒体列表下拉
addEvent(_g("dropList"), "mouseover", function () {
   _g("listBox").style.display = "block";
}, false);
addEvent(_g("dropList"), "mouseout", function () {
   _g("listBox").style.display = "none";
}, false);
//回到顶部事件,IE6下才执行
if (_g("fixed")) {
   if (IE6) {
      window.onscroll = function () {
         var scrT = parseInt(document.documentElement.scrollTop) + 130;
         _g("fixed").style.top = scrT + "px";
      }
   }
}
//字体增大减小
function doZoom(s) {
   var size = parseInt(getStyle("detailCon", "font-size"))
      , o = _g("detailCon");
   if (s == "add" && size < 18)
      o.style.fontSize = size + 2 + "px";
   else if (s == "del" && size > 12)
      o.style.fontSize = size - 2 + "px";
}
//分享组件
function shareto(site) {
   try {
      var titcon = "【" + _g("detailTitle").innerHTML + "】";
   } catch (e) {
      var titcon = document.title;
   }
   var _t = encodeURIComponent("#斗战神#");
   var _url = encodeURI(document.location.href);
   var _appkey = encodeURI("801000863");
   try {
      var _desc = _g("detailDesc").innerHTML;
   } catch (e) {
      var _desc = "斗战神！不限号！不删档！火热开启！一棒战妖魔！弑神闹天宫！"
   }
   var _site = encodeURI('//dzs.qq.com/');
   try {
      var picDom = _g("detailCon").getElementsByTagName("img")
         , picArr = [];
      for (var i = 0, l = picDom.length; i < l; i++) {
         picArr.push(picDom[i].src)
      }
      var _pic = "&pic=" + encodeURI(picArr.join("|"))
         , pics = "&pics=" + encodeURI(picArr.join("|"));
   } catch (e) {
      var _pic = ""
         , pics = "";
   }
   if (site == "qzone") {
      var _u = '//sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?showcount=1&title=' + encodeURI(titcon) + "&url=" + _url + "&desc=" + _t + " " + encodeURI(_desc) + pics;
   }
   if (site == "pyw") {
      var _u = '//sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?to=pengyou&url=' + _url + "&desc=" + encodeURIComponent("#斗战神# " + _desc + titcon) + "&title=" + encodeURI(titcon) + '&site=' + _site + pics;
   }
   if (site == "renren") {
      var _u = '//share.renren.com/share/buttonshare.do?link=' + _url;
   }
   if (site == "kaixin") {
      var _comment = encodeURI(titcon + "\n网址：" + _url)
         , _u = '//www.kaixin001.com/repaste/bshare.php?rtitle=' + _t + '&rcontent=' + _comment;
   }
   if (site == "douban") {
      var _u = '//www.douban.com/recommend/?title=' + encodeURI(titcon) + '&url=' + _url + '&comment=' + _t;
   }
   if (site == "baidu") {
      var _u = '//apps.hi.baidu.com/share/?url=' + _url + '&title=' + encodeURI(titcon) + '&content=' + _t;
   }
   if (site == "qqshuqian") {
      var _u = '//shuqian.qq.com/post?from=3&jumpback=2&noui=1&uri=' + _url + '&title=' + encodeURI(document.title);
   }
   if (site == "qqwb") {
      var _t = encodeURIComponent("#斗战神# " + titcon + _desc) + encodeURI("\n网址：")
         , _u = '//v.t.qq.com/share/share.php?title=' + _t + '&url=' + _url + '&appkey=' + _appkey + '&site=' + _site + _pic;
   }
   window.open(_u);
}
//下载按钮
function insertFlash(elm, eleid, url, w, h) {
   if (!document.getElementById(elm))
      return;
   var str = '';
   str += '<object width="' + w + '" height="' + h + '" id="' + eleid + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0">';
   str += '<param name="movie" value="' + url + '" />';
   str += '<param name="allowScriptAccess" value="always" />';
   str += '<param name="wmode" value="transparent" />';
   str += '<param name="quality" value="autohigh" />';
   str += '<param name="allowFullScreen" value="true" />';
   str += '<embed width="' + w + '" height="' + h + '" name="' + eleid + '" src="' + url + '" quality="autohigh" swLiveConnect="always" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer"></embed>';
   str += '</object>';
   document.getElementById(elm).innerHTML = str
}
insertFlash("btnDown", "btnDown", "/20130912index/swf/dzsBtn.swf", 170, 130);
insertFlash("dzsTop", "dzsTop", "/20130912index/swf/dzsTop.swf", 170, 130);
/*function topSec(){
  var params={menu:"false",wmode:"transparent",scale:"noscale",salign:"T",allowScriptAccess:"always"};	
  var attributes = {id: "btnDown",name:"btnDown"},attributes2 = {id: "dzsTop",name:"dzsTop"};
  swfobject.embedSWF("/20130912index/swf/dzsBtn.swf","btnDown","170","130","8.0.0","",{},params,attributes);
  swfobject.embedSWF("/20130912index/swf/dzsTop.swf?d=20141016","dzsTop","170","130","8.0.0","",{},params,attributes2);
}
delayJs("//ossweb-img.qq.com/images/js/swfobject.js",topSec);*/
if (window.console && window.console.log)
   try {
      console.log("TGideas隶属于腾讯公司互动娱乐业务系统的专业推广类设计团队，\n工作范围涉及各类游戏产品的推广设计工作，\n由专业的视觉设计师、网站重构工程师、FLASH动画设计师、视频包装设计师构成。\nJOIN US://tgideas.qq.com/web201106/join.shtml \n简历投放地址：tgideas@qq.com \n投简历时注明简历来自于console")
   } catch (e) { }
/*  |xGv00|f12c3d14d567c2d5288e0eb0d8eb01df */
////////////////////////////////////////////////////////////////////
//                          _ooOoo_                               //
//                         o8888888o                              //
//                         88" . "88                              //
//                         (| ^_^ |)                              //
//                         O\  =  /O                              //
//                      ____/`---'\____                           //
//                    .'  \\|     |//  `.                         //
//                   /  \\|||  :  |||//  \                        //
//                  /  _||||| -:- |||||-  \                       //
//                  |   | \\\  -  /// |   |                       //
//                  | \_|  ''\---/''  |   |                       //
//                  \  .-\__  `-`  ___/-. /                       //
//                ___`. .'  /--.--\  `. . ___                     //
//              ."" '<  `.___\_<|>_/___.'  >'"".                  //
//            | | :  `- \`.;`\ _ /`;.`/ - ` : | |                 //
//            \  \ `-.   \_ __\ /__ _/   .-` /  /                 //
//      ========`-.____`-.___\_____/___.-`____.-'========         //
//                           `=---='                              //
//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^        //
//         佛祖保佑       永无Bug     永不修改                    //
////////////////////////////////////////////////////////////////////