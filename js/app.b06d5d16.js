(function(e){function t(t){for(var a,l,o=t[0],s=t[1],i=t[2],b=0,d=[];b<o.length;b++)l=o[b],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&d.push(c[l][0]),c[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},c={app:0},r=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-npm-api-ui/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2de8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c={class:"min-h-screen max-w-7xl mx-auto p-2.5 rounded flex flex-wrap items-start"};function r(e,t,n,r,l,o){var s=Object(a["k"])("header-component"),i=Object(a["k"])("content-component"),u=Object(a["k"])("footer-component");return Object(a["h"])(),Object(a["c"])("div",c,[Object(a["f"])(s),Object(a["f"])(i),Object(a["f"])(u)])}var l={class:"w-full border-b border-gray-200 p-2.5"},o=Object(a["f"])("button",{type:"submit",class:"bg-blue-500 rounded px-2.5 font-light ml-1.5 py-0.5 text-white","aria-expanded":"false"}," Search ",-1);function s(e,t,n,c,r,s){var i=this;return Object(a["h"])(),Object(a["c"])("header",l,[Object(a["f"])("form",{onSubmit:t[2]||(t[2]=Object(a["p"])((function(){return i.handleSubmit&&i.handleSubmit.apply(i,arguments)}),["prevent"]))},[Object(a["o"])(Object(a["f"])("input",{placeholder:"Search packages",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.value=e}),class:"rounded border-2 px-1.5 py-0.5",type:"text"},null,512),[[a["m"],r.value]]),o],32)])}var i=n("5530"),u=n("5502"),b={name:"Header",data:function(){return{value:""}},methods:Object(i["a"])(Object(i["a"])({handleSubmit:function(){this.getPackages({q:this.value}),this.setValue({value:this.value})}},Object(u["b"])({getPackages:"packages/loadPackages"})),Object(u["d"])({setValue:"packages/SET_VALUE"}))};b.render=s;var d=b,g=(n("b0c0"),{key:0,class:"w-full my-2.5 py-2.5"}),p=Object(a["f"])("h2",{class:"text-center text-3xl text-gray-500"},"There is nothing",-1),f={key:1,class:"w-full my-2.5 py-2.5"},O={class:"p-2.5 bg-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"};function j(e,t,n,c,r,l){var o=Object(a["k"])("content-card"),s=Object(a["k"])("content-pagination"),i=Object(a["k"])("content-modal");return Object(a["h"])(),Object(a["c"])(a["a"],null,[this.getAllPackages().length?Object(a["d"])("",!0):(Object(a["h"])(),Object(a["c"])("div",g,[p])),this.getAllPackages().length?(Object(a["h"])(),Object(a["c"])("div",f,[Object(a["f"])("div",O,[(Object(a["h"])(!0),Object(a["c"])(a["a"],null,Object(a["j"])(this.getAllPackages(),(function(t){return Object(a["h"])(),Object(a["c"])(o,{onOnSelect:e.selectPackage,package:t.package,key:t.package.name},null,8,["onOnSelect","package"])})),128))]),Object(a["f"])(s,{onOnChangePage:l.handleChangePage,total:this.getTotal()},null,8,["onOnChangePage","total"]),Object(a["f"])(i)])):Object(a["d"])("",!0)],64)}n("a4d3"),n("e01a");var h={class:"border-b mb-2.5"},m={class:"text-2xl"},v={style:{"min-height":"150px",overflow:"hidden"}},x={class:"border-t my-2.5"},k=Object(a["f"])("strong",null,"Author:",-1),y=Object(a["f"])("strong",null,"Version",-1),P=Object(a["f"])("strong",null,"Scope",-1);function w(e,t,n,c,r,l){var o,s,i=this;return Object(a["h"])(),Object(a["c"])("div",{class:"bg-gray-50 rounded p-2.5 border cursor-pointer hover:shadow-xl",onClick:t[1]||(t[1]=function(){return i.handleSelect&&i.handleSelect.apply(i,arguments)})},[Object(a["f"])("div",h,[Object(a["f"])("h2",m,Object(a["l"])(n.package.name),1)]),Object(a["f"])("div",v,Object(a["l"])(n.package.description),1),Object(a["f"])("div",x,[Object(a["f"])("div",null,[k,Object(a["e"])(" "+Object(a["l"])(null===(o=n.package)||void 0===o||null===(s=o.author)||void 0===s?void 0:s.name),1)]),Object(a["f"])("div",null,[y,Object(a["e"])(": "+Object(a["l"])(n.package.version),1)]),Object(a["f"])("div",null,[P,Object(a["e"])(": "+Object(a["l"])(n.package.scope),1)])])])}var S={name:"ContentCard",props:{package:{type:Object,required:!0}},methods:{handleSelect:function(){this.$emit("onSelect",{p:this.package.name})}}};S.render=w;var C=S,A={class:"grid grid-cols-5 max-w-xs mx-auto my-2.5"},E={class:"mx-auto block text-center text-blue-600 px-2.5 bg-gray-50 border rounded bg-gray-200"};function _(e,t,n,c,r,l){var o=this;return Object(a["h"])(),Object(a["c"])("div",A,[Object(a["f"])("div",null,[r.currentPage>2?(Object(a["h"])(),Object(a["c"])("button",{key:0,onClick:t[1]||(t[1]=function(e){return o.handleChangePage(r.currentPage-2)}),class:"mx-auto block text-center text-blue-600 px-2.5 bg-gray-50 border rounded"},Object(a["l"])(r.currentPage-2),1)):Object(a["d"])("",!0)]),Object(a["f"])("div",null,[r.currentPage>1?(Object(a["h"])(),Object(a["c"])("button",{key:0,onClick:t[2]||(t[2]=function(e){return o.handleChangePage(r.currentPage-1)}),class:"mx-auto block text-center text-blue-600 px-2.5 bg-gray-50 border rounded"},Object(a["l"])(r.currentPage-1),1)):Object(a["d"])("",!0)]),Object(a["f"])("div",null,[Object(a["f"])("button",E,Object(a["l"])(r.currentPage),1)]),Object(a["f"])("div",null,[Object(a["f"])("button",{onClick:t[3]||(t[3]=function(e){return o.handleChangePage(r.currentPage+1)}),class:"mx-auto block text-center text-blue-600 px-2.5 bg-gray-50 border rounded"},Object(a["l"])(r.currentPage+1),1)]),Object(a["f"])("div",null,[Object(a["f"])("button",{onClick:t[4]||(t[4]=function(e){return o.handleChangePage(r.currentPage+2)}),class:"mx-auto block text-center text-blue-600 px-2.5 bg-gray-50 border rounded"},Object(a["l"])(r.currentPage+2),1)])])}n("a9e3");var T={name:"ContentPagination",props:{total:Number},data:function(){return{currentPage:1,pagesCount:Math.floor(this.total/10)}},methods:{handleChangePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$emit("onChangePage",e),this.currentPage=e}}};T.render=_;var V=T,q=(n("b64b"),{key:0,class:"fixed z-10 inset-0 overflow-y-auto"}),M={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},L=Object(a["f"])("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),R=Object(a["f"])("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),D={class:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"},G={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},K={class:"sm:flex sm:items-start"},z={class:"mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left"},Y={class:"text-gray-600 border-b text-3xl leading-6 pb-2.5",id:"modal-headline"},U={class:"mt-2"},H={class:"text-sm text-gray-500 pb-1"},J=Object(a["f"])("strong",null,"Author:",-1),$={class:"text-sm text-gray-500 pb-1"},F=Object(a["f"])("strong",null,"Description:",-1),N={class:"text-sm text-gray-500 pb-1"},Q=Object(a["f"])("strong",null,"Date:",-1),B={class:"text-sm text-gray-500 pb-1"},I=Object(a["f"])("strong",null,"Scope:",-1),W={class:"text-sm text-gray-500 pb-1"},X=Object(a["f"])("strong",null,"Version:",-1),Z={class:"text-sm text-gray-500 pb-1"},ee=Object(a["f"])("strong",null,"Publisher:",-1),te=Object(a["f"])("p",{class:"text-sm text-gray-500 "},[Object(a["f"])("strong",null,"Links:")],-1),ne={class:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"};function ae(e,t,n,c,r,l){var o,s,i,u=this;return this.getSelected()?(Object(a["h"])(),Object(a["c"])("div",q,[Object(a["f"])("div",M,[Object(a["f"])("div",{onClick:t[1]||(t[1]=function(e){return u.selectPackage({p:null})}),class:"fixed inset-0 transition-opacity","aria-hidden":"true"},[L]),R,Object(a["f"])("div",D,[Object(a["f"])("div",G,[Object(a["f"])("div",K,[Object(a["f"])("div",z,[Object(a["f"])("h3",Y,Object(a["l"])(this.getSelected().name),1),Object(a["f"])("div",U,[Object(a["f"])("p",H,[J,Object(a["e"])(" "+Object(a["l"])(null===(o=this.getSelected().author)||void 0===o?void 0:o.name),1)]),Object(a["f"])("p",$,[F,Object(a["e"])(" "+Object(a["l"])(this.getSelected().description),1)]),Object(a["f"])("p",N,[Q,Object(a["e"])(" "+Object(a["l"])(this.getDate(this.getSelected().date)),1)]),Object(a["f"])("p",B,[I,Object(a["e"])(" "+Object(a["l"])(this.getSelected().scope),1)]),Object(a["f"])("p",W,[X,Object(a["e"])(" "+Object(a["l"])(this.getSelected().version),1)]),Object(a["f"])("p",Z,[ee,Object(a["e"])(" "+Object(a["l"])(null===(s=this.getSelected().publisher)||void 0===s?void 0:s.username)+" "+Object(a["l"])(null===(i=this.getSelected().publisher)||void 0===i?void 0:i.email),1)]),te,(Object(a["h"])(!0),Object(a["c"])(a["a"],null,Object(a["j"])(Object.keys(this.getSelected().links),(function(e){return Object(a["h"])(),Object(a["c"])("span",{key:e,class:"mr-1 text-sm text-gray-500 pb-1"},[Object(a["f"])("a",{class:"underline",target:"_blank",href:u.getSelected().links[e]},Object(a["l"])(e),9,["href"])])})),128))])])])]),Object(a["f"])("div",ne,[Object(a["f"])("button",{onClick:t[2]||(t[2]=function(e){return u.selectPackage({p:null})}),type:"button",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"}," Close ")])])])])):Object(a["d"])("",!0)}var ce=n("5a0c"),re={name:"ContentModal",methods:Object(i["a"])(Object(i["a"])({getDate:function(e){return ce(e).format("MM.DD.YYYY")}},Object(u["c"])({getSelected:"packages/getSelected"})),Object(u["d"])({selectPackage:"packages/SELECT_PACKAGE"}))};re.render=ae;var le=re,oe={name:"Content",components:{ContentCard:C,ContentPagination:V,ContentModal:le},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({handleChangePage:function(e){this.changePage({page:e})}},Object(u["b"])({changePage:"packages/changePage"})),Object(u["d"])({selectPackage:"packages/SELECT_PACKAGE"})),Object(u["c"])({getAllPackages:"packages/getPackages",getTotal:"packages/getTotal"}))};oe.render=j;var se=oe,ie={class:"w-full mt-auto p-2.5 border-t border-b w-2/3 grid grid-cols-3 mt-auto"},ue=Object(a["f"])("div",null,[Object(a["e"])(" Author: "),Object(a["f"])("strong",null,"Danil Sitdikov")],-1),be=Object(a["f"])("div",null,[Object(a["e"])(" Github: "),Object(a["f"])("a",{target:"_blank",class:"text-blue-600",href:"https://github.com/QuadradS"}," Link to github")],-1),de=Object(a["f"])("div",null,[Object(a["e"])(" CV: "),Object(a["f"])("a",{target:"_blank",class:"text-blue-600",href:"https://quadrads.github.io/summary/"},"Link to CV")],-1);function ge(e,t){return Object(a["h"])(),Object(a["c"])("div",ie,[ue,be,de])}const pe={};pe.render=ge;var fe=pe,Oe={name:"App",components:{HeaderComponent:d,ContentComponent:se,FooterComponent:fe}};Oe.render=r;var je=Oe,he=n("1da1"),me=(n("96cf"),n("7db0"),n("bc3a")),ve=n.n(me),xe=function(){var e=Object(he["a"])(regeneratorRuntime.mark((function e(t){var n,a,c,r,l,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.q,a=t.size,c=void 0===a?10:a,r=t.from,l=void 0===r?0:r,e.next=3,ve.a.get("https://api.npms.io/v2/search",{params:{q:n,from:l,size:c}});case 3:return o=e.sent,e.abrupt("return",o.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ke={namespaced:!0,state:{searchValue:"",packages:[],selectedPackage:null,total:null},getters:{getPackages:function(e){return e.packages},getTotal:function(e){return e.total},getSelected:function(e){var t;return null===(t=e.packages.find((function(t){return t.package.name===e.selectedPackage})))||void 0===t?void 0:t.package}},mutations:{SET_PACKAGES:function(e,t){return Object(he["a"])(regeneratorRuntime.mark((function n(){var a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=t.total,c=t.results,e.total=a,e.packages=c;case 3:case"end":return n.stop()}}),n)})))()},SET_VALUE:function(e,t){var n=t.value;e.searchValue=n},SELECT_PACKAGE:function(e,t){var n=t.p;e.selectedPackage=n}},actions:{loadPackages:function(e,t){return Object(he["a"])(regeneratorRuntime.mark((function n(){var a,c,r,l,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,c=t.q,r=t.size,l=t.from,n.prev=2,n.next=5,xe({q:c,size:r,from:l});case 5:o=n.sent,a("SET_PACKAGES",o),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](2),console.error("loadPackages ",n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()},changePage:function(e,t){return Object(he["a"])(regeneratorRuntime.mark((function n(){var a,c,r,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,c=e.state.searchValue,r=t.page,n.prev=2,n.next=5,xe({q:c,from:10*r});case 5:l=n.sent,a("SET_PACKAGES",l),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](2),console.error("loadPackages ",n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()}}},ye=Object(u["a"])({modules:{packages:ke}});n("2de8");Object(a["b"])(je).use(ye).mount("#app")}});
//# sourceMappingURL=app.b06d5d16.js.map