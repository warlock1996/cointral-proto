(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1291:function(t,e,c){t.exports=c.p+"94fa2081167a0d215cfd2e76c459fb58.svg"},1380:function(t,e,c){var content=c(1729);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(54).default)("ebe1acaa",content,!0,{sourceMap:!1})},1381:function(t,e,c){var content=c(1732);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(54).default)("5ecea91e",content,!0,{sourceMap:!1})},1382:function(t,e,c){var content=c(1734);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(54).default)("364c96be",content,!0,{sourceMap:!1})},1383:function(t,e,c){var content=c(1736);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(54).default)("6c388e5e",content,!0,{sourceMap:!1})},1384:function(t,e,c){var content=c(1738);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(54).default)("90e8c5cc",content,!0,{sourceMap:!1})},1385:function(t,e,c){var content=c(1740);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(54).default)("034311e4",content,!0,{sourceMap:!1})},1386:function(t,e,c){var content=c(1742);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(54).default)("72df6c00",content,!0,{sourceMap:!1})},1667:function(t,e,c){"use strict";c.r(e);var n={props:{UserInfo:{required:!0,type:Object,default:{KYCStatus:"Verified"}}},data:function(){return{badgeNumberStyle:{backgroundColor:"#fff",textAlign:"center",padding:"3px",color:"#999",height:"20px",width:"20px",borderRadius:"50%"}}}},o=(c(1728),c(19)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"account-header"},[e("div",{staticClass:"account-overlay"}),this._v(" "),e("div",{staticClass:"account-content-wrapper"},[e("h1",{staticClass:"account-white-text Roboto-Bold",staticStyle:{"margin-bottom":"0"}},[this._v("\n      "+this._s(this.$t("text_welcome"))+"\n    ")])])])}),[],!1,null,"0e589f53",null);e.default=component.exports},1668:function(t,e,c){"use strict";c.r(e);c(25);var n=c(13),o={data:function(){return{tabList:[{key:"Main Wallet",scopedSlots:{tab:"titleSlot"}},{key:"P2P Wallet",scopedSlots:{tab:"titleSlot"}},{key:"Fiat Wallet",scopedSlots:{tab:"titleSlot"}}],activeKey:"Main Wallet",UserBalance:{},hideMainBalance:!0,hideP2PBalance:!0,hideFiatBalance:!0}},mounted:function(){this.getUserBalance()},methods:{getUserBalance:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var c,n,o,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.$axios,n=t.$cookies,o=t.$config.FINANCE_API_URL,r={Authorization:"Bearer "+n.get("Token")},e.next=4,c.get(o+"/GetUserBalance",{headers:r});case 4:(l=e.sent).data.Success&&(t.UserBalance=l.data);case 6:case"end":return e.stop()}}),e)})))()}}},r=(c(1731),c(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-card",{staticClass:"account-card border-none h-100",attrs:{bodyStyle:{padding:0}}},[n("h4",{staticClass:"Roboto-Bold account-default-text-color",staticStyle:{margin:"0"},attrs:{slot:"title"},slot:"title"},[t._v("\n    "+t._s(t.$t("text_wallets"))+"\n  ")]),t._v(" "),n("div",{staticClass:"Roboto-Medium",attrs:{slot:"extra"},slot:"extra"},["P2P Wallet"!==t.activeKey?n("a-button",{attrs:{type:"primary"},on:{click:function(e){t.$router.push(t.localeRoute("/my/wallet/main-wallet/deposit/BTC"))}}},[t._v("\n      "+t._s(t.$t("text_deposit"))+"\n    ")]):t._e(),t._v(" "),"P2P Wallet"!==t.activeKey?n("a-button",{on:{click:function(e){t.$router.push(t.localeRoute("/my/wallet/main-wallet/withdraw/BTC"))}}},[t._v("\n      "+t._s(t.$t("text_donotpull"))+"\n    ")]):t._e(),t._v(" "),"P2P Wallet"==t.activeKey?n("a-button",{attrs:{type:"primary"},on:{click:function(e){t.$router.push(t.localeRoute("/P2P/Market"))}}},[t._v("\n      "+t._s(t.$t("text_purchase"))+"\n    ")]):t._e(),t._v(" "),"P2P Wallet"==t.activeKey?n("a-button",{on:{click:function(e){t.$router.push(t.localeRoute("/P2P/Market"))}}},[t._v("\n      "+t._s(t.$t("text_sale"))+"\n    ")]):t._e(),t._v(" "),n("a-button",{staticClass:"border-none",on:{click:function(e){t.$router.push(t.localeRoute("/my/wallet/main-wallet"))}}},[n("a-icon",{attrs:{type:"right"}})],1)],1),t._v(" "),n("a-card",{staticClass:"border-none",attrs:{tabList:t.tabList,"active-tab-key":t.activeKey},on:{tabChange:function(e){return t.activeKey=e}},scopedSlots:t._u([{key:"titleSlot",fn:function(e){return n("span",{staticClass:"Roboto-Medium account-default-text-color",class:{"tab-label-active":e.key===t.activeKey,"tab-label-inactive":e.key!==t.activeKey}},["Main Wallet"===e.key?n("span",[t._v(t._s(t.$t("text_main_wallet")))]):t._e(),t._v(" "),"P2P Wallet"===e.key?n("span",[t._v(t._s(t.$t("text_p2p_wallet")))]):t._e(),t._v(" "),"Fiat Wallet"===e.key?n("span",[t._v(t._s(t.$t("text_fiat_wallet")))]):t._e()])}}])},[t._v(" "),"Main Wallet"===t.activeKey?n("a-row",{staticClass:"account-card-tab-row"},[n("a-col",{attrs:{span:16}},[n("div",{staticClass:"Roboto-Medium"},[n("p",{staticClass:"account-card-secondary-text Roboto-Regular",staticStyle:{margin:"0"}},[t._v("\n            "+t._s(t.$t("text_account_balance"))+"\n          ")]),t._v(" "),n("div",{staticClass:"account-card-flex"},[n("h1",{staticClass:"account-default-text-color"},[t.hideMainBalance?n("span",[t._v("*****")]):n("span",[t._v(t._s(t.UserBalance.TotalSpotBalanceInBtc))]),t._v("\n               "),n("small",[t._v("BTC")])]),t._v(" "),n("a-button",{staticClass:"account-card-flex-button",attrs:{shape:"round"},on:{click:function(e){t.hideMainBalance=!t.hideMainBalance}}},[(t.hideMainBalance,n("img",{staticStyle:{"margin-right":"5px"},attrs:{src:c(1291),width:"15"}})),t._v(" "),t.hideMainBalance?n("span",[t._v("\n                "+t._s(t.$t("text_show_balance"))+"\n              ")]):n("span",[t._v(t._s(t.$t("text_hide_balance")))])])],1)]),t._v(" "),n("div",{staticClass:"Roboto-Medium"},[n("p",{staticClass:"account-card-secondary-text Roboto-Regular",staticStyle:{margin:"0"}},[t._v("\n            "+t._s(t.$t("text_estimated_value"))+"\n          ")]),t._v(" "),n("h2",{staticClass:"account-default-text-color"},[t.hideMainBalance?n("span",[t._v("*****")]):n("span",[t._v(t._s(t.UserBalance.TotalSpotBalanceInTRY))]),t._v("\n             "),n("small",[t._v("TRY")]),t._v(" "),n("br"),t._v(" "),t.hideMainBalance?n("span",[t._v("*****")]):n("span",[t._v(t._s(t.UserBalance.TotalSpotBalanceInUSD))]),t._v("\n             "),n("small",[t._v("USD")])])])])],1):t._e(),t._v(" "),"P2P Wallet"===t.activeKey?n("a-row",{staticClass:"account-card-tab-row"},[n("a-col",{attrs:{span:16}},[n("div",{staticClass:"Roboto-Medium"},[n("p",{staticClass:"account-card-secondary-text Roboto-Regular",staticStyle:{margin:"0"}},[t._v("\n            "+t._s(t.$t("text_account_balance"))+"\n          ")]),t._v(" "),n("div",{staticClass:"account-card-flex"},[n("h1",{staticClass:"account-default-text-color"},[t.hideP2PBalance?n("span",[t._v("*****")]):n("span",[t._v(t._s(t.UserBalance.TotalP2PBalanceInBtc)+" ")]),t._v(" "),n("small",[t._v("BTC")])]),t._v(" "),n("a-button",{staticClass:"account-card-flex-button",attrs:{shape:"round"},on:{click:function(e){t.hideP2PBalance=!t.hideP2PBalance}}},[t.hideP2PBalance?n("span",[t._v(t._s(t.$t("text_show_balance")))]):n("span",[t._v(t._s(t.$t("text_hide_balance")))])])],1)]),t._v(" "),n("div",{staticClass:"Roboto-Medium"},[n("p",{staticClass:"account-card-secondary-text Roboto-Regular",staticStyle:{margin:"0"}},[t._v("\n            "+t._s(t.$t("text_estimated_value"))+"\n          ")]),t._v(" "),n("h2",{staticClass:"account-default-text-color"},[t.hideP2PBalance?n("span",[t._v("*****")]):n("span",[t._v(t._s(t.UserBalance.TotalP2PBalanceInTRY))]),t._v("\n             "),n("small",[t._v("TRY")]),t._v(" "),n("br"),t._v(" "),t.hideP2PBalance?n("span",[t._v("*****")]):n("span",[t._v(t._s(t.UserBalance.TotalP2PBalanceInUSD))]),t._v("\n             "),n("small",[t._v("USD")])])])])],1):t._e(),t._v(" "),"Fiat Wallet"===t.activeKey?n("a-row",{staticClass:"account-card-tab-row"},[n("a-col",{attrs:{span:16}},[n("div",{staticClass:"Roboto-Medium"},[n("p",{staticClass:"account-card-secondary-text Roboto-Regular",staticStyle:{margin:"0"}},[t._v("\n            "+t._s(t.$t("text_account_balance"))+"\n          ")]),t._v(" "),n("div",{staticClass:"account-card-flex"},[n("h1",{staticClass:"account-default-text-color"},[t.hideFiatBalance?n("span",[t._v("*****")]):n("span",[t._v(t._s(t.UserBalance.TotalFiatBalanceInBtc))]),t._v(" \n              "),n("small",[t._v("BTC")])]),t._v(" "),n("a-button",{staticClass:"account-card-flex-button",attrs:{shape:"round"},on:{click:function(e){t.hideFiatBalance=!t.hideFiatBalance}}},[t.hideFiatBalance?n("span",[t._v(t._s(t.$t("text_show_balance")))]):n("span",[t._v(t._s(t.$t("text_hide_balance")))])])],1)]),t._v(" "),n("div",{staticClass:"Roboto-Medium"},[n("p",{staticClass:"account-card-secondary-text Roboto-Regular",staticStyle:{margin:"0"}},[t._v("\n            "+t._s(t.$t("text_estimated_value"))+"\n          ")]),t._v(" "),n("h2",{staticClass:"account-default-text-color"},[t.hideFiatBalance?n("span",[t._v("*****")]):n("span",[t._v(t._s(t.UserBalance.TotalFiatBalanceInTRY))]),t._v("\n             "),n("small",[t._v("TRY")]),t._v(" "),n("br"),t._v(" "),t.hideFiatBalance?n("span",[t._v("*****")]):n("span",[t._v(t._s(t.UserBalance.TotalFiatBalanceInUSD))]),t._v("\n             "),n("small",[t._v("USD")])])])])],1):t._e()],1)],1)}),[],!1,null,"36100e02",null);e.default=component.exports},1669:function(t,e,c){"use strict";c.r(e);c(25);var n=c(13),o={data:function(){return{NotificationList:[]}},mounted:function(){this.getUserNotifications()},methods:{getUserNotifications:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var c,n,o,r,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.$axios,n=t.$cookies,o=t.$config.FINANCE_API_URL,r={Authorization:"Bearer "+n.get("Token")},e.next=4,c.get(o+"/GetUserNotifications",{headers:r});case 4:(l=e.sent).data.Success&&(d=l.data.NotificationList,t.NotificationList=d);case 6:case"end":return e.stop()}}),e)})))()}}},r=(c(1733),c(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("a-card",{staticClass:"account-card border-none h-100"},[c("h4",{staticClass:"Roboto-Bold account-default-text-color",staticStyle:{margin:"0"},attrs:{slot:"title"},slot:"title"},[t._v("\n    "+t._s(t.$t("text_announcements"))+"\n  ")]),t._v(" "),c("div",{staticClass:"Roboto-Medium",attrs:{slot:"extra"},slot:"extra"},[c("a-button",{staticClass:"border-none",on:{click:function(e){t.$router.push(t.localeRoute("/account/notifications"))}}},[c("a-icon",{attrs:{type:"right"}})],1)],1),t._v(" "),c("div",{staticClass:"account-announcements-list"},[c("a-list",{attrs:{"item-layout":"horizontal","data-source":t.NotificationList},scopedSlots:t._u([{key:"renderItem",fn:function(e){return c("a-list-item",{},[c("a-list-item-meta",[c("p",{staticClass:"account-default-text-color Roboto-Regular",attrs:{slot:"title"},slot:"title"},[t._v("\n            "+t._s(e.NotificationText)+"\n          ")]),t._v(" "),c("p",{staticClass:"Roboto-Regular account-announcements-text",attrs:{slot:"description",align:"right"},slot:"description"},[t._v("\n            "+t._s(e.UpdatedOn)+"\n          ")])])],1)}}])})],1)])}),[],!1,null,"3815982c",null);e.default=component.exports},1670:function(t,e,c){"use strict";c.r(e);c(25);var n=c(13),o={props:{UserInfo:{required:!0,type:Object}},methods:{disable2fa:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var c,n,o,r,l,d,v,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.$store,n=t.$router,o=t.$config.FINANCE_API_URL,r=t.$axios,l=t.$cookies,d={Authorization:"Bearer "+l.get("Token")},e.next=4,r.get(o+"/DisableTwoFA",{headers:d});case 4:(v=e.sent).data.Success&&(f=v.data.SecurityVerificationToken,c.commit("auth/setVerficationData",{SecurityVerificationToken:f,status:!0,redirectURI:"/account/security"}),n.push(t.localeRoute("/security-verification")));case 6:case"end":return e.stop()}}),e)})))()},disableSms:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var c,n,o,r,l,d,v,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.$store,n=t.$router,o=t.$config.FINANCE_API_URL,r=t.$axios,l=t.$cookies,d={Authorization:"Bearer "+l.get("Token")},e.next=4,r.get(o+"/DisableSMS",{headers:d});case 4:(v=e.sent).data.Success&&(f=v.data.SecurityVerificationToken,c.commit("auth/setVerficationData",{SecurityVerificationToken:f,status:!0,redirectURI:"/account/security"}),n.push(t.localeRoute("/security-verification")));case 6:case"end":return e.stop()}}),e)})))()}}},r=(c(1735),c(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("a-card",{staticClass:"account-card border-none h-100"},[c("h4",{staticClass:"Roboto-Bold account-default-text-color",staticStyle:{margin:"0"},attrs:{slot:"title"},slot:"title"},[t._v("\n    "+t._s(t.$t("text_increase_security"))+"\n  ")]),t._v(" "),c("div",{staticClass:"Roboto-Medium",attrs:{slot:"extra"},slot:"extra"},[c("a-button",{staticClass:"border-none",on:{click:function(e){t.$router.push(t.localeRoute("/account/security"))}}},[c("a-icon",{attrs:{type:"right"}})],1)],1),t._v(" "),c("div",{staticClass:"account-card-body"},[c("div",{staticClass:"account-card-body-item"},[c("p",{staticClass:"account-default-text-color"},[t._v("\n        "+t._s(t.$t("text_enable_2fa"))+"\n      ")]),t._v(" "),t.UserInfo.Enable2FAVerify?c("div",[c("a-button",{attrs:{type:"link"},on:{click:t.disable2fa}},[t._v(t._s(t.$t("text_disable")))])],1):c("div",[c("a-button",{attrs:{type:"link"},on:{click:function(e){t.$router.push(t.localeRoute("/account/security/enable-google-authenticator"))}}},[t._v(t._s(t.$t("text_activate")))])],1)]),t._v(" "),c("div",{staticClass:"account-card-body-item"},[c("p",{staticClass:"account-default-text-color"},[t._v("\n        "+t._s(t.$t("text_authentication"))+"\n      ")]),t._v(" "),"Done"!==t.UserInfo.KYCStatus?c("div",["Revision"===t.UserInfo.KYCStatus||"NoKYC"===t.UserInfo.KYCStatus?c("a-button",{attrs:{type:"link"},on:{click:function(e){t.$router.push(t.localeRoute("/account/kyc"))}}},[t._v("\n          "+t._s(t.$t("text_confirm"))+"\n        ")]):"InProgress"===t.UserInfo.KYCStatus?c("a-button",{attrs:{type:"link",disabled:!0}},[t._v("\n          "+t._s(t.$t("text_inprogress"))+"\n        ")]):t._e()],1):c("div",[c("a-button",{staticClass:"text-success",attrs:{type:"link",disabled:!0}},[t._v(t._s(t.$t("text_verified")))])],1)]),t._v(" "),c("div",{staticClass:"account-card-body-item"},[c("p",{staticClass:"account-default-text-color"},[t._v("\n        "+t._s(t.$t("text_sms_authentication"))+"\n      ")]),t._v(" "),t.UserInfo.EnableSMSVerify?c("div",[c("a-button",{attrs:{type:"link"},on:{click:t.disableSms}},[t._v(t._s(t.$t("text_disable")))])],1):c("div",[c("a-button",{attrs:{type:"link"},on:{click:function(e){t.$router.push(t.localeRoute("/account/security/enable-sms-authenticator"))}}},[t._v(t._s(t.$t("text_activate")))])],1)]),t._v(" "),c("div",{staticClass:"account-card-body-item"},[c("p",{staticClass:"account-default-text-color"},[t._v("\n        "+t._s(t.$t("text_phishing_block_code"))+"\n      ")]),t._v(" "),""===t.UserInfo.AntiphishingCode?c("a-button",{attrs:{type:"link"},on:{click:function(e){t.$router.push(t.localeRoute("/account/security/anti-phishing-code"))}}},[t._v(t._s(t.$t("text_activate")))]):c("a-button",{attrs:{type:"link"},on:{click:function(e){t.$router.push(t.localeRoute("/account/security/anti-phishing-code"))}}},[t._v(t._s(t.$t("text_change")))])],1)])])}),[],!1,null,"0bb4d7a1",null);e.default=component.exports},1671:function(t,e,c){"use strict";c.r(e);c(63),c(32),c(31),c(22),c(55);var n=c(26),o=(c(25),c(13));function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,c)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{tabListActivity:[{key:"Activity",scopedSlots:{tab:"titleSlot"}},{key:"Devices",scopedSlots:{tab:"titleSlot"}}],activeKeyActivity:"Activity",UserLoginActivity:[],UserDevicesList:[],UserLoginActivityParams:{From:"2020-01-31",To:"2020-12-31",Offset:0,PageSize:10}}},mounted:function(){this.getUserLoginActivities(),this.getUserDevicesList()},methods:{getUserLoginActivities:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var c,n,o,r,d,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.$axios,n=t.$cookies,o=t.$config.FINANCE_API_URL,r={Authorization:"Bearer "+n.get("Token")},e.next=4,c.get(o+"/GetAccountLoginActivities",{params:l({},t.UserLoginActivityParams),headers:r});case 4:(d=e.sent).data.Success&&(v=d.data.AccountHistory,t.UserLoginActivity=v);case 6:case"end":return e.stop()}}),e)})))()},getUserDevicesList:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var c,n,o,r,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.$axios,n=t.$cookies,o=t.$config.FINANCE_API_URL,r={Authorization:"Bearer "+n.get("Token")},e.next=4,c.get(o+"/GetUserBrowserList",{headers:r});case 4:(l=e.sent).data.Success&&(d=l.data.UserBrowser,t.UserDevicesList=d);case 6:case"end":return e.stop()}}),e)})))()}}},v=(c(1737),c(1739),c(19)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("a-card",{staticClass:"account-card border-none h-100"},[c("a-tabs",{model:{value:t.activeKeyActivity,callback:function(e){t.activeKeyActivity=e},expression:"activeKeyActivity"}},[t._l(t.tabListActivity,(function(e){return c("a-tab-pane",{key:e.key,staticClass:"Roboto-Medium",class:{"tab-label-active":e.key===t.activeKeyActivity,"tab-label-inactive":e.key!==t.activeKeyActivity}},["Activity"===e.key?c("span",{attrs:{slot:"tab"},slot:"tab"},[t._v("\n        "+t._s(t.$t("text_login_activity"))+"\n      ")]):t._e(),t._v(" "),"Devices"===e.key?c("span",{attrs:{slot:"tab"},slot:"tab"},[t._v("\n        "+t._s(t.$t("text_browsers"))+"\n      ")]):t._e(),t._v(" "),"Activity"===e.key?c("div",[c("a-list",{staticClass:"Roboto-Regular account-activity-list",attrs:{"item-layout":"horizontal","data-source":t.UserLoginActivity},scopedSlots:t._u([{key:"renderItem",fn:function(e){return c("a-list-item",{},[c("a-list-item-meta",{staticClass:"account-device-meta"},[c("p",{staticClass:"account-device-description",attrs:{slot:"title",align:"left"},slot:"title"},[t._v("\n                "+t._s(e.Description)+"\n              ")]),t._v(" "),e.Browser&&e.OS?c("p",{staticClass:"account-browser-info",attrs:{slot:"description",align:"left"},slot:"description"},[t._v("\n                "+t._s(e.Browser)+" ("+t._s(e.OS)+")\n              ")]):t._e()]),t._v(" "),c("div",{staticClass:"account-device-list-content"},[c("p",{staticClass:"account-device-ip account-default-text-color",attrs:{align:"right"}},[t._v("\n                "+t._s(e.IP_Address)+"\n              ")]),t._v(" "),c("p",{staticClass:"account-device-date",attrs:{align:"right"}},[t._v("\n                "+t._s(e.CreatedOn)+"\n              ")])])],1)}}],null,!0)})],1):t._e(),t._v(" "),"Devices"===e.key?c("div",[c("a-list",{staticClass:"Roboto-Regular account-devices-list",attrs:{"item-layout":"horizontal","data-source":t.UserDevicesList},scopedSlots:t._u([{key:"renderItem",fn:function(e){return c("a-list-item",{},[c("a-list-item-meta",{staticClass:"account-device-meta"},[e.Browser&&e.OS?c("p",{staticClass:"account-browser-info",attrs:{slot:"title",align:"left"},slot:"title"},[t._v("\n                "+t._s(e.Browser)+" ("+t._s(e.OS)+")\n              ")]):t._e()]),t._v(" "),c("div",{staticClass:"account-device-list-content"},[c("p",{staticClass:"account-device-ip account-default-text-color",attrs:{align:"right"}},[t._v("\n                "+t._s(e.DeviceId)+"\n              ")])])],1)}}],null,!0)})],1):t._e()])})),t._v(" "),c("span",{staticClass:"Roboto-Medium",attrs:{slot:"tabBarExtraContent"},slot:"tabBarExtraContent"},[c("a-button",{attrs:{type:"link"},on:{click:function(e){t.$router.push(t.localeRoute("/account/froze"))}}},[c("u",[t._v(t._s(t.$t("text_deactivate_account")))])]),t._v(" "),c("a-button",{staticClass:"border-none",on:{click:function(e){t.$router.push(t.localeRoute("/account/activity"))}}},[c("a-icon",{attrs:{type:"right"}})],1)],1)],2)],1)}),[],!1,null,"4a7b05dc",null);e.default=component.exports},1728:function(t,e,c){"use strict";var n=c(1380);c.n(n).a},1729:function(t,e,c){var n=c(53),o=c(636),r=c(1730);e=n(!1);var l=o(r);e.push([t.i,'.account-card[data-v-0e589f53]{box-shadow:0 0 9px rgba(0,0,0,.07059);border-radius:4px}.account-white-text[data-v-0e589f53]{color:#fff}.account-secondary-text[data-v-0e589f53]{color:#999b9f}.account-welcome-wrapper[data-v-0e589f53]{position:relative}.account-header-status[data-v-0e589f53]{display:flex;flex-direction:column;position:relative}.account-header-status .account-header-status-progress-wrapper[data-v-0e589f53],.account-header-status .account-header-status-text-wrapper[data-v-0e589f53]{display:flex}.account-header-status[data-v-0e589f53]{margin-top:10px}.account-header-status .account-header-status-text[data-v-0e589f53]{padding-top:8px;margin-right:50px;margin-bottom:0}.account-header-status .account-header-status-item[data-v-0e589f53]{max-width:200px}.account-header-status .account-header-status-item .account-header-status-badge[data-v-0e589f53]{position:relative!important;z-index:1!important}.account-header-status .account-header-status-item .account-header-status-badge .line[data-v-0e589f53]{content:"";border:.5px dashed #1ba4e8;height:200px;transform:rotate(90deg);position:absolute;top:-100px;left:100px;z-index:-1}.account-status-button[data-v-0e589f53]{height:20px;color:#fff;background-image:linear-gradient(180,#8cd8fd,#1ba4e8);background:transparent linear-gradient(180deg,#8cd8fd,#1ba4e8) 0 0 no-repeat padding-box;border-radius:3px}.account-header[data-v-0e589f53]{border-radius:5px;padding:12px 20px;background-color:#000;background:url('+l+") no-repeat 50%;background-size:cover;height:256px;position:relative}.account-content-wrapper[data-v-0e589f53]{position:relative;z-index:2}.account-overlay[data-v-0e589f53]{background-image:linear-gradient(to top left,#000,#1c2640,#3d4867);position:absolute;border-radius:5px;left:0;width:100%;top:0;height:100%;opacity:.8;z-index:1}",""]),t.exports=e},1730:function(t,e,c){t.exports=c.p+"img/dashboard-header.b32b564.png"},1731:function(t,e,c){"use strict";var n=c(1381);c.n(n).a},1732:function(t,e,c){(e=c(53)(!1)).push([t.i,".account-card[data-v-36100e02]{box-shadow:0 0 9px rgba(0,0,0,.07059);border-radius:4px}.account-card-flex[data-v-36100e02]{display:flex;justify-content:unset}.account-card-secondary-text[data-v-36100e02]{color:#778090}.account-default-text-color[data-v-36100e02]{color:var(--text-color)}.account-card-flex-button[data-v-36100e02]{font-size:12px;margin-top:5px;margin-left:15px}",""]),t.exports=e},1733:function(t,e,c){"use strict";var n=c(1382);c.n(n).a},1734:function(t,e,c){(e=c(53)(!1)).push([t.i,".account-card[data-v-3815982c]{box-shadow:0 0 9px rgba(0,0,0,.07059);border-radius:4px}.account-card-secondary-text[data-v-3815982c]{color:#778090}.account-default-text-color[data-v-3815982c]{color:var(--text-color)}.account-announcements-list[data-v-3815982c]{max-height:250px;overflow-y:scroll}.account-announcements-list[data-v-3815982c]::-webkit-scrollbar{display:none}.account-announcements-text[data-v-3815982c]{padding-right:20px}.account-announcements-date[data-v-3815982c]{padding-left:20px}",""]),t.exports=e},1735:function(t,e,c){"use strict";var n=c(1383);c.n(n).a},1736:function(t,e,c){(e=c(53)(!1)).push([t.i,".account-card[data-v-0bb4d7a1]{box-shadow:0 0 9px rgba(0,0,0,.07059);border-radius:4px}.account-card-secondary-text[data-v-0bb4d7a1]{color:#778090}.account-default-text-color[data-v-0bb4d7a1]{color:var(--text-color)}.account-card-body-item[data-v-0bb4d7a1]{display:flex;justify-content:space-between;margin-bottom:20px}.account-card-body-item p[data-v-0bb4d7a1]{margin:0}",""]),t.exports=e},1737:function(t,e,c){"use strict";var n=c(1384);c.n(n).a},1738:function(t,e,c){(e=c(53)(!1)).push([t.i,".account-default-text-color[data-v-4a7b05dc]{color:var(--text-color)}.account-device-list-content[data-v-4a7b05dc]{display:flex;flex-direction:column}.account-browser-info[data-v-4a7b05dc],.account-device-date[data-v-4a7b05dc],.account-device-meta[data-v-4a7b05dc]{color:#1ba4e8}.account-activity-list[data-v-4a7b05dc],.account-devices-list[data-v-4a7b05dc]{max-height:250px;overflow-y:scroll}.account-activity-list[data-v-4a7b05dc]::-webkit-scrollbar,.account-devices-list[data-v-4a7b05dc]::-webkit-scrollbar{display:none}",""]),t.exports=e},1739:function(t,e,c){"use strict";var n=c(1385);c.n(n).a},1740:function(t,e,c){(e=c(53)(!1)).push([t.i,".account-card .ant-card-body{padding:10px}@media screen and (max-width:767px){.account-card .ant-tabs-nav .ant-tabs-tab{margin:0 8px 0 0;padding:12px 4px}.account-card .ant-tabs-nav .ant-tabs-tab:last-child{margin-right:0}}",""]),t.exports=e},1741:function(t,e,c){"use strict";var n=c(1386);c.n(n).a},1742:function(t,e,c){(e=c(53)(!1)).push([t.i,".account-row[data-v-8fb1d4f2]:first-child{margin-bottom:20px}.account-row[data-v-8fb1d4f2]{margin:10px auto}.account-card[data-v-8fb1d4f2]{box-shadow:0 0 9px rgba(0,0,0,.07059);border-radius:4px}.account-email[data-v-8fb1d4f2]{color:var(--text-color)}.account-email-detail[data-v-8fb1d4f2]{color:#778090}.account-default-text-color[data-v-8fb1d4f2]{color:var(--text-color)}.account-card-secondary-text[data-v-8fb1d4f2]{color:#778090}.account-block-button[data-v-8fb1d4f2]{background:transparent linear-gradient(172deg,#90dafe,#30abe5) 0 0 no-repeat padding-box;box-shadow:0 0 9px rgba(0,0,0,.07059);border-radius:4px;min-height:48px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.align-items-start[data-v-8fb1d4f2]{align-items:flex-start}@media only screen and (max-width:1000px){.account-icons[data-v-8fb1d4f2]{margin-left:10px}.account-holder-details[data-v-8fb1d4f2]{align-items:flex-start}}",""]),t.exports=e},2744:function(t,e,c){"use strict";c.r(e);c(25);var n=c(13),o=c(1667),r=c(1668),l=c(1669),d=c(1670),v=c(1671),f={components:{WelcomeHeader:o.default,WalletCard:r.default,Announcements:l.default,Security:d.default,Activity:v.default},head:function(){return{title:"Kontrol Paneli | Cointral.com"}},data:function(){return{UserInfo:{}}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getUserInfo();case 2:case"end":return e.stop()}}),e)})))()},methods:{getUserInfo:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var c,n,o,r,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.$axios,n=t.$cookies,o=t.$config.FINANCE_API_URL,r={Authorization:"Bearer "+n.get("Token")},e.next=4,c.get(o+"/GetUserInfo",{headers:r});case 4:(l=e.sent).data.Success&&(d=l.data.UserInfo,t.UserInfo=d);case 6:case"end":return e.stop()}}),e)})))()}}},_=(c(1741),c(19)),component=Object(_.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Dashboard"},[n("a-row",{staticClass:"account-row"},[n("a-col",{attrs:{xs:11,sm:11,md:11,lg:11,xl:11}},[n("div",{staticClass:"account-holder-details",staticStyle:{display:"flex"}},[n("img",{staticClass:"account-icons",attrs:{src:c(655),alt:"wallet"}}),t._v(" "),n("div",{staticClass:"account-holder-text-details",staticStyle:{"margin-left":"10px",display:"flex","flex-direction":"column"}},[n("span",{staticClass:"account-email Roboto-Medium"},[t._v("\n            "+t._s(t.UserInfo.Email)+"\n          ")]),t._v(" "),n("span",{staticClass:"account-email-detail Roboto-Regular",staticStyle:{"font-size":"0.8rem"}},[t._v("\n            "+t._s(t.$t("dashboard_text_last_login"))+" "+t._s(t.UserInfo.LastLogin)+"\n            "+t._s(t.UserInfo.LastLoginIP)+"\n          ")])])])]),t._v(" "),n("a-col",{attrs:{xs:11,sm:11,md:11,lg:11,xl:11}},[n("p",{staticClass:"Roboto-Regular",attrs:{align:"right"}},[n("span",{staticClass:"Roboto-Medium account-email-detail"},[t._v("User ID :")]),t._v("\n        38668998\n      ")])])],1),t._v(" "),n("a-row",{staticClass:"account-row hide-mobile-1000"},[n("a-col",[n("WelcomeHeader",{attrs:{UserInfo:t.UserInfo}})],1)],1),t._v(" "),n("a-row",{staticClass:"account-row",attrs:{type:"flex",gutter:12}},[n("a-col",{attrs:{xs:24,sm:24,md:24,lg:16,xl:16}},[n("WalletCard")],1),t._v(" "),n("a-col",{attrs:{xs:24,sm:24,md:24,lg:8,xl:8}},[n("a-button",{staticClass:"account-block-button Roboto-Medium",attrs:{type:"primary",block:""},on:{click:function(e){t.$router.push(t.localeRoute("/account/referral"))}}},[t._v("\n        "+t._s(t.$t("dashboard_text_referal_info"))+"\n      ")]),t._v(" "),n("a-row",{staticStyle:{"margin-top":"10px"}},[n("a-col",[n("Announcements")],1)],1)],1)],1),t._v(" "),n("a-row",{staticClass:"account-row",attrs:{type:"flex",gutter:12}},[n("a-col",{attrs:{xs:24,sm:24,md:24,lg:16,xl:16}},[n("Security",{attrs:{UserInfo:t.UserInfo}})],1),t._v(" "),n("a-col",{attrs:{xs:24,sm:24,md:24,lg:8,xl:8}},[n("Activity")],1)],1)],1)}),[],!1,null,"8fb1d4f2",null);e.default=component.exports;installComponents(component,{WelcomeHeader:c(1667).default,WalletCard:c(1668).default,Announcements:c(1669).default,Security:c(1670).default,Activity:c(1671).default})}}]);