(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1278:function(t,e,n){"use strict";var r=n(29),o=n(648)(6),l="findIndex",c=!0;l in[]&&Array(1)[l]((function(){c=!1})),r(r.P+r.F*c,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(199)(l)},1522:function(t,e,n){var content=n(2470);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("46a16d41",content,!0,{sourceMap:!1})},2469:function(t,e,n){"use strict";var r=n(1522);n.n(r).a},2470:function(t,e,n){(e=n(53)(!1)).push([t.i,".main-row[data-v-60a6299c]{margin-left:40px;margin-right:80px}.main-row[data-v-60a6299c],.main-row-mobile[data-v-60a6299c]{background:#fff 0 0 no-repeat padding-box;box-shadow:0 0 6px rgba(0,0,0,.03922);opacity:1;padding-top:50px;padding-bottom:50px}.breadcrumb[data-v-60a6299c]{font-size:12px;padding-bottom:20px}",""]),t.exports=e},2765:function(t,e,n){"use strict";n.r(e);n(63),n(32),n(31),n(24),n(55),n(82);var r=n(26),o=(n(1278),n(25),n(14)),l=n(41);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={name:"Withdraw",head:function(){return{title:"Ana Cüzdan Çekme | Cointral.com"}},data:function(){return{isMobile:null,windowWidth:null}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c,d,w,f,data,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.app,r=t.params,o=t.redirect,l=t.$axios,c=t.$config,d=t.$cookies,r.asset){e.next=5;break}o(n.localeRoute("/my/wallet/main-wallet/withdraw/BTC")),e.next=12;break;case 5:return w={Authorization:"Bearer "+d.get("Token")},e.next=8,l.get(c.FINANCE_API_URL+"/GetSymbols",{headers:w});case 8:f=e.sent,data=f.data,h=data.SymbolList,data.Success&&-1===h.findIndex((function(t){return t.BaseAsset===r.asset.toUpperCase()}))&&o(n.localeRoute("/my/wallet/main-wallet/withdraw/BTC"));case 12:case"end":return e.stop()}}),e)})))()},computed:d(d({},Object(l.c)({USER_BALANCE:"mainwallet/USER_BALANCE",WITHDRAW_HISTORY:"mainwallet/WITHDRAW_HISTORY"})),{},{responsiveStyleBelowNineHundredPixels:function(){return this.windowWidth,""}}),mounted:function(){var t=this;this.isMobile=window.innerWidth<1e3,window.addEventListener("resize",(function(){t.windowWidth=window.innerWidth,t.isMobile=window.innerWidth<1e3}))},methods:d(d({},Object(l.d)({SET_ASSETS:"swap/SET_ASSETS",SET_CURRENT_TAB:"wallet/SET_CURRENT_TAB"})),{},{changeAsset:function(t){var e=this.$route.path.split("/");""!==e[e.length-1]?e[e.length-1]=t.toLowerCase():e[e.length-2]=t.toLowerCase();var n=e.join("/");history.pushState({},null,n)}})},f=(n(2469),n(19)),component=Object(f.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"background-color":"#fafafa"}},[t.isMobile?t._e():n("a-breadcrumb",{staticClass:"breadcrumb",staticStyle:{"margin-top":"20px","margin-left":"20px"}},[n("nuxt-link",{attrs:{to:t.localePath("/my/wallet/main-wallet")}},[n("a-breadcrumb-item",{on:{click:function(e){return t.SET_CURRENT_TAB("MainWallet")}}},[t._v("\n        "+t._s(t.$t("main_wallet_label")))])],1),t._v(" "),n("a-breadcrumb-item",[t._v(t._s(t.$t("text_withdraw")))])],1),t._v(" "),n("a-row",{staticStyle:{"margin-bottom":"20px"}},[n("a-col",{staticStyle:{"text-align":"start"},attrs:{offset:1,span:23}},[n("div",{staticClass:"Roboto-Regular",staticStyle:{"font-size":"32px",color:"#1c2640"}},[t._v("\n        "+t._s(t.$t("withdraw_title"))+"\n      ")])])],1),t._v(" "),n("a-row",{class:t.isMobile?"main-row-mobile":"main-row"},[n("Asset",{attrs:{transactionType:"withdraw"},on:{change:t.changeAsset}}),t._v(" "),n("Network",{style:t.responsiveStyleBelowNineHundredPixels,attrs:{networkTitle:t.$t("withdraw_network"),networkType:"withdraw"}})],1),t._v(" "),n("a-row",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[t.isMobile?t._e():n("MainWalletHistory",{attrs:{historyData:t.WITHDRAW_HISTORY,historyType:"WITHDRAW",title:t.$t("withdraw_history")}}),t._v(" "),t.isMobile?n("MainWalletHistoryMobile",{attrs:{historyData:t.WITHDRAW_HISTORY,historyType:"WITHDRAW",title:t.$t("withdraw_history")}}):t._e()],1)],1)}),[],!1,null,"60a6299c",null);e.default=component.exports;installComponents(component,{Asset:n(1365).default,Network:n(1366).default,MainWalletHistory:n(1367).default,MainWalletHistoryMobile:n(1368).default})}}]);