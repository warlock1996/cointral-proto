(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1405:function(t,e,o){var content=o(1801);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("18c4aefd",content,!0,{sourceMap:!1})},1800:function(t,e,o){"use strict";var n=o(1405);o.n(n).a},1801:function(t,e,o){(e=o(53)(!1)).push([t.i,".mb-common[data-v-5a11ffd4]{margin-bottom:20px}.list-title[data-v-5a11ffd4]{color:#000;margin-bottom:0}.preferences-header-card[data-v-5a11ffd4]{box-shadow:0 0 2px rgba(0,0,0,.16078);margin-top:-15px;margin-left:-15px}.preferences-list .preferences-list-item[data-v-5a11ffd4]:first-child{border-bottom:0}.preferences-card-extra[data-v-5a11ffd4]{display:flex}.preferences-list-actions[data-v-5a11ffd4]{display:flex;align-items:center;justify-content:space-between}.preferences-list-actions .actions-item[data-v-5a11ffd4]{margin-bottom:0}.preferences-list-actions .actions-item[data-v-5a11ffd4]:first-child{margin-right:20px;text-align:left}",""]),t.exports=e},2725:function(t,e,o){"use strict";o.r(e);o(25);var n=o(14),r={data:function(){return{UserInfo:{},isMobile:null}},head:function(){return{title:"Bildirim Tercihleri | Cointral.com"}},mounted:function(){var t=this;this.getUserInfo(),this.isMobile=window.innerWidth<1e3,window.addEventListener("resize",(function(){t.isMobile=window.innerWidth<1e3}))},methods:{getUserInfo:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r,l,c,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,n=t.$cookies,r=t.$config.FINANCE_API_URL,l={Authorization:"Bearer "+n.get("Token")},e.next=4,o.get(r+"/GetUserInfo",{headers:l});case 4:(c=e.sent).data.Success&&(f=c.data.UserInfo,t.UserInfo=f);case 6:case"end":return e.stop()}}),e)})))()},updateNotifySettings:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r,l,c,f,d,m,S,y,_,h,v,N,I,U;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.UserInfo,n=o.DepositEmailNotify,r=o.DepositSMSNotify,l=o.WithdrawEmailNotify,c=o.WithdrawSMSNotify,f=o.P2PEmailNotify,d=o.P2PSMSNotify,m=o.OTCEmailNotify,S=o.OTCSMSNotify,y=o.SecurityUpdateSMSNotify,_=o.SelectedInformationLanguage,h={DepositEmailNotify:n,DepositSMSNotify:r,WithdrawEmailNotify:l,WithdrawSMSNotify:c,P2PEmailNotify:f,P2PSMSNotify:d,OTCEmailNotify:m,OTCSMSNotify:S,SecurityUpdateSMSNotify:y,SelectedInformationLanguage:_},v=t.$axios,N=t.$cookies,I=t.$config.FINANCE_API_URL,U={Authorization:"Bearer "+N.get("Token")},e.next=6,v.post(I+"/UpdateNotificationSettings",{NotifyInfo:h},{headers:U});case 6:e.sent.data.Success;case 8:case"end":return e.stop()}}),e)})))()},showEmailError:function(){this.UserInfo.EmailVerified||this.$notification.open({description:"E-posta bildirimleri alabilmek için lütfen e-postanızı doğrulayın"})},showSmsError:function(){this.UserInfo.EnableSMSVerify||this.$notification.open({description:"Sms bildirimleri alabilmek için lütfen sms doğrulamanızı aktif edin"})}},watch:{"UserInfo.DepositEmailNotify":function(t,e){t!==e&&this.updateNotifySettings()},"UserInfo.DepositSMSNotify":function(t,e){t!==e&&this.updateNotifySettings()},"UserInfo.WithdrawEmailNotify":function(t,e){t!==e&&this.updateNotifySettings()},"UserInfo.WithdrawSMSNotify":function(t,e){t!==e&&this.updateNotifySettings()},"UserInfo.P2PEmailNotify":function(t,e){t!==e&&this.updateNotifySettings()},"UserInfo.P2PSMSNotify":function(t,e){t!==e&&this.updateNotifySettings()},"UserInfo.OTCEmailNotify":function(t,e){t!==e&&this.updateNotifySettings()},"UserInfo.OTCSMSNotify":function(t,e){t!==e&&this.updateNotifySettings()},"UserInfo.SecurityUpdateEmailNotify":function(t,e){t!==e&&this.updateNotifySettings()},"UserInfo.SecurityUpdateSMSNotify":function(t,e){t!==e&&this.updateNotifySettings()},"UserInfo.SelectedInformationLanguage":function(t,e){t!==e&&this.updateNotifySettings()}}},l=(o(1800),o(19)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"preferences-page",style:t.isMobile?"margin-top: 20px":null},[o("a-row",{staticClass:"mb-common"},[o("a-col",{attrs:{offset:t.isMobile?1:0,span:t.isMobile?23:24}},[o("a-card",{staticClass:"border-none preferences-header-card"},[o("h1",{staticClass:"Roboto-Regular"},[t._v(t._s(t.$t("text_preferences")))])])],1)],1),t._v(" "),o("a-row",{staticClass:"mb-common",attrs:{gutter:16}},[o("a-col",{attrs:{span:t.isMobile?24:12}},[o("a-card",{staticClass:"border-none preferences-card"},[o("a-list",{staticClass:"preferences-list"},[o("a-list-item",{staticClass:"Roboto-Medium preferences-list-item"},[o("a-list-item-meta",[o("h3",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("text_transaction_notifications")))])]),t._v(" "),o("div",{staticClass:"preferences-list-actions",attrs:{slot:"actions"},slot:"actions"},[o("h3",{staticClass:"actions-item"},[t._v(t._s(t.$t("text_email")))]),t._v(" "),o("h3",{staticClass:"actions-item"},[t._v(t._s(t.$t("text_sms")))])])],1),t._v(" "),o("a-list-item",{staticClass:"Roboto-Medium preferences-list-item"},[o("a-list-item-meta",[o("p",{staticClass:"list-title",attrs:{slot:"title"},slot:"title"},[t._v("\n                "+t._s(t.$t("text_deposit_notices"))+"\n              ")])]),t._v(" "),o("div",{staticClass:"preferences-list-actions",attrs:{slot:"actions"},slot:"actions"},[o("span",{on:{click:t.showEmailError}},[o("a-switch",{staticClass:"actions-item",attrs:{disabled:!t.UserInfo.EmailVerified,size:"small"},model:{value:t.UserInfo.DepositEmailNotify,callback:function(e){t.$set(t.UserInfo,"DepositEmailNotify",e)},expression:"UserInfo.DepositEmailNotify"}})],1),t._v(" "),o("span",{on:{click:t.showSmsError}},[o("a-switch",{staticClass:"actions-item",attrs:{disabled:!t.UserInfo.EnableSMSVerify,size:"small"},model:{value:t.UserInfo.DepositSMSNotify,callback:function(e){t.$set(t.UserInfo,"DepositSMSNotify",e)},expression:"UserInfo.DepositSMSNotify"}})],1)])],1),t._v(" "),o("a-list-item",{staticClass:"Roboto-Medium preferences-list-item"},[o("a-list-item-meta",[o("p",{staticClass:"list-title",attrs:{slot:"title"},slot:"title"},[t._v("\n                "+t._s(t.$t("text_withdraw_notifications"))+"\n              ")])]),t._v(" "),o("div",{staticClass:"preferences-list-actions",attrs:{slot:"actions"},slot:"actions"},[o("span",{on:{click:t.showEmailError}},[o("a-switch",{staticClass:"actions-item",attrs:{disabled:!t.UserInfo.EmailVerified,size:"small"},model:{value:t.UserInfo.WithdrawEmailNotify,callback:function(e){t.$set(t.UserInfo,"WithdrawEmailNotify",e)},expression:"UserInfo.WithdrawEmailNotify"}})],1),t._v(" "),o("span",{on:{click:t.showSmsError}},[o("a-switch",{staticClass:"actions-item",attrs:{disabled:!t.UserInfo.EnableSMSVerify,size:"small"},model:{value:t.UserInfo.WithdrawSMSNotify,callback:function(e){t.$set(t.UserInfo,"WithdrawSMSNotify",e)},expression:"UserInfo.WithdrawSMSNotify"}})],1)])],1),t._v(" "),o("a-list-item",{staticClass:"Roboto-Medium preferences-list-item"},[o("a-list-item-meta",[o("p",{staticClass:"list-title",attrs:{slot:"title"},slot:"title"},[t._v("\n                "+t._s(t.$t("text_p2p_notifications"))+"\n              ")])]),t._v(" "),o("div",{staticClass:"preferences-list-actions",attrs:{slot:"actions"},slot:"actions"},[o("span",{on:{click:t.showEmailError}},[o("a-switch",{staticClass:"actions-item",attrs:{disabled:!t.UserInfo.EmailVerified,size:"small"},model:{value:t.UserInfo.P2PEmailNotify,callback:function(e){t.$set(t.UserInfo,"P2PEmailNotify",e)},expression:"UserInfo.P2PEmailNotify"}})],1),t._v(" "),o("span",{on:{click:t.showSmsError}},[o("a-switch",{staticClass:"actions-item",attrs:{disabled:!t.UserInfo.EnableSMSVerify,size:"small"},model:{value:t.UserInfo.P2PSMSNotify,callback:function(e){t.$set(t.UserInfo,"P2PSMSNotify",e)},expression:"UserInfo.P2PSMSNotify"}})],1)])],1),t._v(" "),o("a-list-item",{staticClass:"Roboto-Medium preferences-list-item"},[o("a-list-item-meta",[o("p",{staticClass:"list-title",attrs:{slot:"title"},slot:"title"},[t._v("\n                "+t._s(t.$t("text_otc_statements"))+"\n              ")])]),t._v(" "),o("div",{staticClass:"preferences-list-actions",attrs:{slot:"actions"},slot:"actions"},[o("span",{on:{click:t.showEmailError}},[o("a-switch",{staticClass:"actions-item",attrs:{disabled:!t.UserInfo.EmailVerified,size:"small"},model:{value:t.UserInfo.OTCEmailNotify,callback:function(e){t.$set(t.UserInfo,"OTCEmailNotify",e)},expression:"UserInfo.OTCEmailNotify"}})],1),t._v(" "),o("span",{on:{click:t.showSmsError}},[o("a-switch",{staticClass:"actions-item",attrs:{disabled:!t.UserInfo.EnableSMSVerify,size:"small"},model:{value:t.UserInfo.OTCSMSNotify,callback:function(e){t.$set(t.UserInfo,"OTCSMSNotify",e)},expression:"UserInfo.OTCSMSNotify"}})],1)])],1),t._v(" "),o("a-list-item",{staticClass:"Roboto-Medium preferences-list-item"},[o("a-list-item-meta",[o("p",{staticClass:"list-title",attrs:{slot:"title"},slot:"title"},[t._v("\n                "+t._s(t.$t("text_security_settings_notifications"))+"\n              ")])]),t._v(" "),o("div",{staticClass:"preferences-list-actions",attrs:{slot:"actions"},slot:"actions"},[o("span",{on:{click:t.showSmsError}},[o("a-switch",{staticClass:"actions-item",attrs:{disabled:!t.UserInfo.EnableSMSVerify,size:"small"},model:{value:t.UserInfo.SecurityUpdateSMSNotify,callback:function(e){t.$set(t.UserInfo,"SecurityUpdateSMSNotify",e)},expression:"UserInfo.SecurityUpdateSMSNotify"}})],1)])],1)],1)],1)],1),t._v(" "),o("a-col",{attrs:{span:t.isMobile?24:12}},[o("a-card",{staticClass:"border-none preferences-card"},[o("a-list",{staticClass:"preferences-list"},[o("a-list-item",{staticClass:"Roboto-Medium preferences-list-item"},[o("a-list-item-meta",[o("h3",{attrs:{slot:"title"},slot:"title"},[t._v("\n                "+t._s(t.$t("text_notification_lang_settings"))+"\n              ")]),t._v(" "),o("p",{attrs:{slot:"description"},slot:"description"},[t._v(t._s(t.$t("text_set_notification_lang")))])]),t._v(" "),o("div",{staticClass:"preferences-list-actions",attrs:{slot:"actions"},slot:"actions"},[o("a-select",{staticStyle:{width:"100px"},model:{value:t.UserInfo.SelectedInformationLanguage,callback:function(e){t.$set(t.UserInfo,"SelectedInformationLanguage",e)},expression:"UserInfo.SelectedInformationLanguage"}},[o("a-select-option",{attrs:{value:"tr"}},[t._v("Türkçe")]),t._v(" "),o("a-select-option",{attrs:{value:"en"}},[t._v("English")])],1)],1)],1)],1)],1),t._v(" "),o("a-card",{staticClass:"border-none preferences-card"},[o("a-list",{staticClass:"preferences-list"},[o("a-list-item",{staticClass:"Roboto-Medium preferences-list-item"},[o("a-list-item-meta",[o("h3",{attrs:{slot:"title"},slot:"title"},[t._v("Telegram Bildirimleri \n                "),o("a-tooltip",[o("a-icon",{attrs:{type:"info-circle"}}),t._v(" "),o("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("preferences_text_telegram_tooltip")))])],1)],1),t._v(" "),o("p",{attrs:{slot:"description"},slot:"description"},[t._v("Telegram üzerinden bildirim alın")])]),t._v(" "),o("div",{staticClass:"preferences-list-actions",attrs:{slot:"actions"},slot:"actions"},[o("a",{attrs:{target:"_blank",href:"https://t.me/CointralBot"}},[t._v("@CointralBot")])])],1)],1)],1)],1)],1)],1)}),[],!1,null,"5a11ffd4",null);e.default=component.exports}}]);