/*! For license information please see 34.bf2715e48cc27768d634.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"144":function(e,t,n){"use strict";n.d(t,"b",(function(){return x}));var a=n(5),r=n(10),o=n(11),c=n(20),i=n(15),s=n(16),d=n(6),l=n(26),u=n.n(l),_=n(142),m=function(e){Object(i.a)(ErrorBoundary,e);var t=Object(s.a)(ErrorBoundary);function ErrorBoundary(){var e;Object(r.a)(this,ErrorBoundary);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),Object(d.a)(Object(c.a)(e),"state",{"hasError":!1}),e}return Object(o.a)(ErrorBoundary,[{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidCatch","value":function componentDidCatch(e,t){this.setState({"hasError":!0}),e.message="".concat(e.message," - componentStack: ").concat(t.componentStack),console.log("我是错误",e)}},{"key":"render","value":function render(){return this.state.hasError?"":this.props.children}}]),ErrorBoundary}(u.a.Component),x=function errorBoundary(e){return function(t){Object(i.a)(_class,t);var n=Object(s.a)(_class);function _class(){return Object(r.a)(this,_class),n.apply(this,arguments)}return Object(o.a)(_class,[{"key":"render","value":function render(){return Object(_.jsx)(m,{"children":Object(_.jsx)(e,Object(a.a)({},this.props))})}}]),_class}(u.a.PureComponent)};t.a=x},"145":function(e,t,n){var a,r=n(27);!function(){"use strict";var o={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=r(n);if("string"===a||"number"===a)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(classNames.apply(this,n));else if("object"===a)if(n.toString===Object.prototype.toString)for(var c in n)o.call(n,c)&&n[c]&&e.push(this&&this[c]||c);else e.push(n.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):"object"===r(n(148))&&n(148)?void 0===(a=function(){return classNames}.apply(t,[]))||(e.exports=a):window.classNames=classNames}()},"148":function(e,t){(function(t){e.exports=t}).call(this,{})},"149":function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),c=n(1),i=n(26),s=n(143),d=n(150),l=n.n(d),u=n(144),_=n(142);t.a=Object(u.b)((function Header(e){var t=e.content,n=void 0===t?{}:t,a=n.type,d=void 0===a?"":a,u=n&&n.title||"",m=n&&n.imageUrl||"",x=n&&n.backgroundColor||"",h=n&&n.prevIcon||"",b=n&&n.moreIcon||"",j=n&&n.moreText||"",p=n&&n.fizeColor||"",f=n&&n.moreTextColor||p||"",g=c.default.getCurrentInstance();Object(i.useEffect)((function(){Object(c.pageScrollTo)({"scrollTop":0})}),[]);var O=function(){var t=Object(o.a)(r.a.mark((function _callee(){return r.a.wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:if(!e.content.goBackHandle){t.next=3;break}return e.content.goBackHandle(),t.abrupt("return");case 3:if(!g.router.path.includes("back=home")){t.next=6;break}return c.default.reLaunch({"url":"/pages/index/index"}),t.abrupt("return",!1);case 6:if(!window||!window.grounds||"/pages/index/index"!==g.router.path&&"/pages/my/index"!==g.router.path&&"/pages/found/index"!==g.router.path){t.next=10;break}window.ground.close(),t.next=22;break;case 10:if("share"!==d){t.next=14;break}c.default.reLaunch({"url":"/pages/index/index"}),t.next=22;break;case 14:return t.prev=14,t.next=17,c.default.navigateBack({"delta":1});case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(14),c.default.reLaunch({"url":"/pages/index/index"});case 22:case"end":return t.stop()}}),_callee,null,[[14,19]])})));return function h5GoBackHandle(){return t.apply(this,arguments)}}(),w=m?{"backgroundImage":"url(".concat(m,")")}:{"backgroundColor":x};return Object(_.jsx)(s.View,{"className":l.a.headerBox,"style":w,"children":Object(_.jsxs)(s.View,{"className":l.a.header,"style":w,"children":[Object(_.jsx)(s.View,{"className":l.a.headerPrev,"children":h&&Object(_.jsx)(s.Image,{"onClick":O,"src":h,"mode":"aspectFit","className":l.a.headerPrevPic})}),Object(_.jsx)(s.View,{"className":l.a.headerTitle,"children":Object(_.jsx)(s.Text,{"className":l.a.headerTitleText,"style":{"color":p},"children":u})}),Object(_.jsxs)(s.View,{"className":l.a.headerMore,"children":[b&&Object(_.jsx)(s.Image,{"src":b,"mode":"aspectFit","onClick":function moreIconHandle(){if(window&&window.grounds)try{window.grounds.openShare(location.href,"凤娱指数-影剧综榜单","凤凰新闻","https://x0.ifengimg.com/ucms/2021_50/42603B06AF7D0F555A12FC2E60ED0C61CFDB9709_size27_w432_h432.png","brand_mxdb01")}catch(e){try{window.grounds.openShare(location.href,"凤娱指数-影剧综榜单","凤凰新闻","https://x0.ifengimg.com/ucms/2021_50/42603B06AF7D0F555A12FC2E60ED0C61CFDB9709_size27_w432_h432.png","brand_mxdb01","")}catch(e){}}},"className":l.a.headerMorePic}),e.children,j&&Object(_.jsx)(s.Text,{"className":l.a.headerMoreText,"onClick":function moreTextHandle(){e.content.moreTextHandle()},"style":{"color":f},"children":j})]})]})})}))},"150":function(e,t,n){e.exports={"headerBox":"index-module__headerBox___1_u1D","headerBoxWx":"index-module__headerBoxWx___3wJqw","header":"index-module__header___6NxCV","headerWx":"index-module__headerWx___3y-VP","headerPrev":"index-module__headerPrev___12MB1","headerPrevPic":"index-module__headerPrevPic___212ke","headerTitle":"index-module__headerTitle___25jwe","headerTitleText":"index-module__headerTitleText___3LAcX","headerMore":"index-module__headerMore___2nNrE","headerMorePic":"index-module__headerMorePic___ydU02","headerMoreText":"index-module__headerMoreText___fvvfk"}},"189":function(e,t,n){e.exports={"imgbox":"index-module__imgbox___1fKJC","shoucang":"index-module__shoucang___DzF1d","yinying":"index-module__yinying___3kS04","secret":"index-module__secret___1qrF9","itemBox":"index-module__itemBox___AAXZv"}},"190":function(e,t,n){e.exports={"box":"index-module__box___TVXRM","star":"index-module__star___2aIHm"}},"192":function(e,t,n){"use strict";var a=n(5),r=(n(26),n(143)),o=n(189),c=n.n(o),i=n(144),s=n(145),d=n.n(s),l=n(190),u=n.n(l),_=n(142),m=d.a.bind(u.a),x=Object(i.a)((function Collection(e){var t=e.styleObj,n=e.item,a=(void 0===n?{}:n).followTotal,o=void 0===a?0:a;return Object(_.jsx)(r.View,{"className":m("box"),"style":t,"children":Object(_.jsx)(r.View,{"className":m("star"),"children":o>99999?"9999+":o})})})),h=n(172),b=n(45),j=d.a.bind(c.a);t.a=Object(i.a)((function Content(e){var t=e.showYinying,n=void 0!==t&&t,o=e.bgObj,i=e.showCollect,s=void 0!==i&&i,d=e.isPublic,l=void 0===d||d,u=e.item,m=void 0===u?{}:u,p=e.guize,f=void 0!==p&&p,g=e.canClick,O=void 0!==g&&g,w=m.coverImageUrl,v=void 0===w?"https://x0.ifengimg.com/ucms/2022_23/847E4FA4EA50C1038F741CC99B341AA9733331A5_size41_w318_h318.png":w,y=m.followTotal,C=void 0===y?0:y,k=m.listId;return Object(_.jsxs)(r.View,{"className":j("imgbox"),"onClick":function goDetail(){O&&Object(b.e)("/pages/subPages/filmDetail/index?listId=".concat(k))},"children":[Object(_.jsx)(r.Image,{"src":Object(h.a)(v||"https://x0.ifengimg.com/ucms/2022_23/847E4FA4EA50C1038F741CC99B341AA9733331A5_size41_w318_h318.png",300,300,100),"mode":"aspectFill","className":c.a.itemBox}),s&&!f&&Object(_.jsx)(r.View,{"className":j("shoucang"),"children":Object(_.jsx)(x,Object(a.a)({},e))}),s&&f&&parseInt(C)>500&&Object(_.jsx)(r.View,{"className":j("shoucang"),"children":Object(_.jsx)(x,Object(a.a)({},e))}),n&&Object(_.jsx)(r.View,{"className":c.a.yinying,"style":o}),!l&&Object(_.jsx)(r.View,{"className":c.a.secret})]})}))},"231":function(e,t,n){"use strict";var a=n(5),r=(n(26),n(143)),o=n(232),c=n.n(o),i=n(144),s=n(145),d=n.n(s),l=n(192),u=n(45),_=n(142),m=d.a.bind(c.a);t.a=Object(i.a)((function FilmItem(e){var t=e.item,n=void 0===t?{}:t,o=n.title,i=void 0===o?"":o,s=n.listId,d=n.type;return Object(_.jsxs)(r.View,{"className":m("item"),"onClick":function gotoDetail(e,t){Object(u.e)("/pages/subPages/filmDetail/index?listId=".concat(e,"&type=").concat(t))}.bind(void 0,s,d),"children":[Object(_.jsx)(l.a,Object(a.a)({},e)),Object(_.jsx)(r.View,{"className":c.a.bottom,"children":i})]})}))},"232":function(e,t,n){e.exports={"imgbox":"index-module__imgbox___2fqMy","shoucang":"index-module__shoucang___3mLnm","itemBox":"index-module__itemBox___u-FUS","bottom":"index-module__bottom___2wHJR"}},"321":function(e,t,n){e.exports={"box":"index-module__box___3eaIa","item":"index-module__item___3N2rf"}},"398":function(e,t,n){"use strict";n.r(t);var a=n(12),r=(n(26),n(143)),o=n(321),c=n.n(o),i=n(149),s=n(144),d=n(231),l=n(175),u=n(142);t.default=Object(s.b)((function Detail(){var e=Object(l.b)(50),t=Object(a.a)(e,1)[0],n={"backgroundColor":"rgba(0,0,0,0.40)"};return Object(u.jsxs)(r.View,{"children":[Object(u.jsx)(i.a,{"content":{"title":"推荐片单","imageUrl":"https://x0.ifengimg.com/ucms/2021_47/027B7788BC18A519F99A1372340EA4DBFB3A7149_size52_w750_h466.png","prevIcon":"https://x0.ifengimg.com/ucms/2021_47/4DC9914EAD905A00A1F206287906F54422AAA993_size1_w80_h88.png","moreIcon":"https://x0.ifengimg.com/ucms/2021_47/F8097E8F89C929E2EDE42074519E4B35D8B418FC_size1_w96_h88.png","fizeColor":"#000000"}}),Object(u.jsx)(r.View,{"className":c.a.box,"children":t.map((function(e,t){return Object(u.jsx)(r.View,{"className":c.a.item,"children":Object(u.jsx)(d.a,{"styleObj":n,"showCollect":!0,"item":e,"guize":!0})},t)}))})]})}))}}]);