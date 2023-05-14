if (location.href.indexOf('qq.com') >= 0) { document.domain = 'qq.com' };
function pings() { if (typeof (pgvMain) == 'function') pgvMain(); }
function _g(sid) { return document.getElementById(sid); }
String.prototype.trim = function () { return this.replace(/(^\s*)|(\s*$)/g, ""); }//string去空格
var IE = window.navigator.appVersion.indexOf('MSIE') != -1, ua = navigator.userAgent, FF = ua.indexOf("Firefox") != -1;
if (IE) var IE6 = window.navigator.appVersion.indexOf('MSIE 6') != -1;
function loadJs(url) { var obj = document.createElement("script"); obj.setAttribute("src", url); document.getElementsByTagName("head")[0].appendChild(obj); return obj; }
function delayJs(u, s, v) { var e = loadJs(u); if (IE) { e.onreadystatechange = function () { if (this.readyState && this.readyState == "loading") return; else if (s) s(v) } } else { e.onload = function () { if (s) s(v) } } };
function addload(func) { var old = window.onload; if (typeof window.onload != "function") { window.onload = func; } else { window.onload = function () { old(); func(); } } };
function addEvent(el, type, handler, capture) { if (typeof el.addEventListener != 'undefined') { if (type === 'mouseenter') el.addEventListener('mouseover', withinElement(handler), capture); else if (type === 'mouseleave') el.addEventListener('mouseout', withinElement(handler), capture); else el.addEventListener(type, handler, capture) } else if (typeof el.attachEvent != 'undefined') el.attachEvent('on' + type, handler); else el['on' + type] = handler } function withinElement(handler) { return function (e) { var parent = e.relatedTarget; while (parent && parent != this) { try { parent = parent.parentNode } catch (e) { break } } if (parent != this) handler.call(this, e) } };
function addClass(obj, cls) { var oldCls = obj.className; if (oldCls.indexOf(cls) == -1) { if (oldCls == "") obj.className = cls; else { obj.className = oldCls + " " + cls; } } }//原有样式上添加样式名
function delClass(obj, cls) { var oldCls = obj.className; var arr = oldCls.split(cls); if (oldCls.indexOf(cls) != -1) obj.className = (arr[0].trim() + arr[1]).trim(); }//原有样式上删除样式名
function index(node) { var index = 0; while (node = node.previousSibling) { if (node.nodeType == 1) index++; } return index; }//获取dom在父节点中的子节点里的位置
function appendHtml(o, h) { try { o.insertAdjacentHTML('beforeEnd', h) } catch (e) { var f = o.ownerDocument.createRange().createContextualFragment(h); o.appendChild(f); } }//兼容浏览器的插入html方法
function getStyle(o, c) { if (IE) { if (c.indexOf("-") != -1) { c = c.split("-"); var len = c[1].length, S = c[1].substring(0, 1).toUpperCase(), T = c[1].substring(1, len); c = c[0] + S + T; }; return _g(o).currentStyle[c]; } else { return document.defaultView.getComputedStyle(_g(o), "").getPropertyValue(c); } }//获取对象的原始样式值
function outHTML(htmlNode) { return document.createElement("DIV").appendChild(htmlNode.cloneNode(true)).parentNode.innerHTML }
//nav
addEvent(_g("topNav"), "mouseenter", function () { _g("navWrap").style.display = "block"; }, false); addEvent(_g("navWrap"), "mouseleave", function () { _g("navWrap").style.display = "none"; }, false);
//回到顶部事件,IE6下才执行
if (_g("fixed")) {
   if (IE6) { window.onscroll = function () { var scrT = parseInt(document.documentElement.scrollTop) + 130; _g("fixed").style.top = scrT + "px"; } }
}
function doZoom(s) { var size = parseInt(getStyle("detailCon", "font-size")), o = _g("detailCon"); if (s == "add" && size < 18) o.style.fontSize = size + 2 + "px"; else if (s == "del" && size > 12) o.style.fontSize = size - 2 + "px"; }
//下载按钮
function insertFlash(elm, eleid, url, w, h) { if (!document.getElementById(elm)) return; var str = ''; str += '<object width="' + w + '" height="' + h + '" id="' + eleid + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0">'; str += '<param name="movie" value="' + url + '" />'; str += '<param name="allowScriptAccess" value="always" />'; str += '<param name="wmode" value="transparent" />'; str += '<param name="quality" value="autohigh" />'; str += '<param name="allowFullScreen" value="true" />'; str += '<embed width="' + w + '" height="' + h + '" name="' + eleid + '" src="' + url + '" quality="autohigh" swLiveConnect="always" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer"></embed>'; str += '</object>'; document.getElementById(elm).innerHTML = str }
insertFlash("btnDown", "btnDown", "/20130912index/swf/dzsBtn.swf", 170, 130); insertFlash("dzsTop", "dzsTop", "/20130912index/swf/dzsTop.swf", 170, 130);
if (window.console && window.console.log) try { console.log("DZSGL") } catch (e) { }