(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1499:function(t,e,o){var content=o(2521);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("3ae7b4b8",content,!0,{sourceMap:!1})},2520:function(t,e,o){"use strict";var r=o(1499);o.n(r).a},2521:function(t,e,o){(e=o(53)(!1)).push([t.i,".main-row[data-v-1a861917]{background:#fff 0 0 no-repeat padding-box;box-shadow:0 0 6px rgba(0,0,0,.03922);opacity:1;padding-top:50px;padding-bottom:50px;margin-left:40px;margin-right:80px;height:550px}.tip[data-v-1a861917]{padding:22px 30px;margin-bottom:20px;background:#f5fcff 0 0 no-repeat padding-box;border-radius:3px;opacity:1;text-align:left}.main-row-mobile[data-v-1a861917]{background:#fff 0 0 no-repeat padding-box;box-shadow:0 0 6px rgba(0,0,0,.03922);opacity:1;padding-top:50px;height:660px}",""]),t.exports=e},2749:function(t,e,o){"use strict";o.r(e);o(63),o(32),o(31),o(24),o(55);var r=o(26),n=o(1351),l=o(1352),c=o(41);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"Deposit",head:function(){return{title:"TL Cüzdanı Yatırma | Cointral.com"}},data:function(){return{visible:!0,accepted:!1,approved:!1,isMobile:null,isBlur:!0}},computed:d({},Object(c.c)({USER_FIAT_WALLET_DEPOSIT:"fiatwallet/USER_FIAT_WALLET_DEPOSIT"})),mounted:function(){var t=this;this.checkKycRequired(),this.isMobile=window.innerWidth<1e3,window.addEventListener("resize",(function(){t.isMobile=window.innerWidth<1e3}))},components:{DepositTermsComplete:l.default,DepositTermsModal:n.default},methods:d(d({},Object(c.d)({SET_CURRENT_TAB:"wallet/SET_CURRENT_TAB"})),{},{isTermsAccepted:function(t){},approve:function(){this.visible=!1,this.checkKycRequired(),this.isBlur=!1},checkKycRequired:function(){!0===this.USER_FIAT_WALLET_DEPOSIT.KycRequired||!1===this.USER_FIAT_WALLET_DEPOSIT.KycRequired&&(this.approved=!0,this.accepted=!0)}})},f=(o(2520),o(19)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Roboto-Regular",staticStyle:{"background-color":"#fafafa"}},[r("DepositTermsModal",{attrs:{visible:t.visible},on:{accepted:t.isTermsAccepted,approved:t.approve}}),t._v(" "),r("a-breadcrumb",{staticClass:"Roboto-Regular",staticStyle:{"margin-top":"20px","margin-left":"20px","margin-bottom":"30px"}},[r("a-breadcrumb-item",[r("a",{on:{click:function(e){t.SET_CURRENT_TAB("Price"),t.$router.push(t.localeRoute("/my/wallet/fiat-wallet"))}}},[t._v(t._s(t.$t("text_fiat_wallet")))])]),t._v(" "),r("a-breadcrumb-item",[t._v(t._s(t.$t("fiat_wallet_deposit")))])],1),t._v(" "),r("a-row",{staticStyle:{"margin-bottom":"20px"}},[r("a-col",{staticStyle:{"text-align":"start"},attrs:{offset:1,span:23}},[r("div",{staticClass:"Roboto-Regular",staticStyle:{"font-size":"32px",color:"#1c2640"}},[t._v("\n        "+t._s(t.$t("fiat_wallet_deposit_label"))+"\n      ")])])],1),t._v(" "),r("a-row",{class:t.isMobile?"main-row-mobile":"main-row"},[r("a-col",{style:t.isMobile?"display: none":null,attrs:{offset:"1",xs:16,sm:16,md:16,lg:10,xl:10,align:"center"}},[r("a-row",{attrs:{span:24}},[r("img",{staticStyle:{"margin-right":"10%","margin-left":"10%","margin-top":"50px"},attrs:{height:"326",src:o(1630),alt:""}})])],1),t._v(" "),r("a-col",{attrs:{offset:t.isMobile?0:1,xs:24,sm:24,md:24,lg:11,xl:11}},[t.accepted&&t.approved?r("a-col",[r("div",{directives:[{name:"blur",rawName:"v-blur",value:t.isBlur,expression:"isBlur"}]},[r("BranchInfo",{staticStyle:{"margin-bottom":"20px"},attrs:{title:"Banka Adı",explanation:t.USER_FIAT_WALLET_DEPOSIT.BankAccounts[0].BankName}}),t._v(" "),r("BranchInfo",{staticStyle:{"margin-bottom":"20px"},attrs:{title:"Alıcı Adı",explanation:t.USER_FIAT_WALLET_DEPOSIT.BankAccounts[0].AccountName}}),t._v(" "),r("BranchInfo",{staticStyle:{"margin-bottom":"20px"},attrs:{title:"IBAN",explanation:t.USER_FIAT_WALLET_DEPOSIT.BankAccounts[0].IBAN}}),t._v(" "),r("BranchInfo",{staticStyle:{"margin-bottom":"20px"},attrs:{title:"Yatırma Kodunuz",explanation:t.USER_FIAT_WALLET_DEPOSIT.DepositCode}})],1)]):r("DepositTermsComplete",{staticStyle:{"z-index":"5","margin-bottom":"100px","margin-top":"10px"},on:{checkKycRequired:t.checkKycRequired}}),t._v(" "),r("a-col",{staticClass:"tip",attrs:{span:24}},[r("a-col",{attrs:{span:2}},[r("img",{style:t.isMobile?"position: relative; top: 5":"position: relative; top: 70px",attrs:{src:o(1278),alt:"Bulb"}})]),t._v(" "),r("a-col",{attrs:{span:22}},[r("a-col",{staticStyle:{"margin-top":"10px"},attrs:{span:24}},[r("li",[t._v("\n              "+t._s(t.$t("fiat_wallet_text_condition1"))+"\n            ")])]),t._v(" "),r("a-col",{staticStyle:{"margin-top":"5px"},attrs:{span:24}},[r("li",[t._v(t._s(t.$t("fiat_wallet_text_condition2")))])]),t._v(" "),r("a-col",{staticStyle:{"margin-top":"5px"},attrs:{span:24}},[r("li",[t._v(t._s(t.$t("fiat_wallet_text_condition3")))])]),t._v(" "),r("a-col",{staticStyle:{"margin-top":"5px"},attrs:{span:24}},[r("li",[t._v(t._s(t.$t("fiat_wallet_text_condition4")))])]),t._v(" "),r("a-col",{staticStyle:{"margin-top":"5px"},attrs:{span:24}},[r("li",[t._v(t._s(t.$t("fiat_wallet_text_condition5")))])]),t._v(" "),r("a-col",{staticStyle:{"margin-top":"5px"},attrs:{span:24}},[r("li",[t._v("\n              "+t._s(t.$t("fiat_wallet_text_condition6"))+"\n            ")])])],1)],1)],1)],1),t._v(" "),r("a-row",{style:t.isMobile?null:"margin-top: 20px; margin-bottom: 20px"},[t.isMobile?t._e():r("FiatWalletHistory",{attrs:{historyData:t.USER_FIAT_WALLET_DEPOSIT.FiatDepositList,title:"TL Yatırma Geçmişi"}}),t._v(" "),t.isMobile?r("FiatWalletHistoryMobile",{attrs:{historyData:t.USER_FIAT_WALLET_DEPOSIT.FiatDepositList,title:"TL Yatırma Geçmişi"}}):t._e()],1)],1)}),[],!1,null,"1a861917",null);e.default=component.exports;installComponents(component,{DepositTermsModal:o(1351).default,DepositTermsComplete:o(1352).default,BranchInfo:o(1656).default,FiatWalletHistory:o(1657).default,FiatWalletHistoryMobile:o(1658).default})}}]);