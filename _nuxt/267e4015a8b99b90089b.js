(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1274:function(t,e,o){t.exports=o.p+"78c246c15bd6b556c227d61c2c2dd31c.svg"},1278:function(t,e,o){t.exports=o.p+"008e7016d924fd9dbf645cfbf4281b2e.svg"},1291:function(t,e,o){var content=o(1332);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("6df6503a",content,!0,{sourceMap:!1})},1314:function(t,e,o){"use strict";o.r(e);o(63),o(32),o(31),o(22),o(55);var r=o(26),n=(o(25),o(13)),l=(o(83),o(295));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={props:{verifyData:{required:!0,type:Object}},data:function(){return{tabListVrf:[{key:"sms",scopedSlots:{tab:"titleSlot"}},{key:"2fa",scopedSlots:{tab:"titleSlot"}}],activeVrfType:"sms",vrf:{SmsCode:"",EmailCode:"",TwoFaCode:""},vrfTypes:[],isSmsCodeSent:!1,smsTimer:60,smsIntrvl:null,isloadingVerifyData:!1,showError:!1,errorMsg:""}},mounted:function(){if(document.addEventListener("keyup",this.CTA_SECURITY_VERIFY),this.verifyData.Token){var t=Object(l.a)(this.verifyData.Token).vrf;this.vrfTypes=t.split(",").length>1?t.split(","):[t]}},destroyed:function(){document.removeEventListener("keyup",this.CTA_SECURITY_VERIFY)},methods:{CTA_SECURITY_VERIFY:function(t){13===t.keyCode&&this.verify()},verify:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,r,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,r=t.$config,e.prev=1,t.$recaptcha.language=t.$cookies.get("i18n_redirected"),e.next=5,t.$recaptcha.getResponse();case 5:return n=e.sent,e.next=8,t.$recaptcha.reset();case 8:return t.isloadingVerifyData=!0,e.next=11,o.post(r.AUTH_API_URL+"/SecurityVerify",d({Token:t.verifyData.Token},t.vrf),{headers:{captcha:n}});case 11:l=e.sent,t.isloadingVerifyData=!1,l.data.Success?(t.clearTimers(),t.$router.push(t.localeRoute("/account/security"))):(t.showError=!0,t.errorMsg=l.data.Message),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),e.t0.response&&(t.showError=!0,t.errorMsg=e.t0.response.data.Message);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})))()},cancelVerify:function(){this.clearTimers(),this.verifyData.Token=null,this.verifyData.showDialog=!1},sendCode:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var r,n,l,c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r=e.$axios,n=e.$config,l={Type:t,Token:e.verifyData.Token},o.prev=2,e.$recaptcha.language=e.$cookies.get("i18n_redirected"),o.next=6,e.$recaptcha.getResponse();case 6:return c=o.sent,o.next=9,e.$recaptcha.reset();case 9:return o.next=11,r.post(n.AUTH_API_URL+"/SendOTP",l,{headers:{captcha:c}});case 11:o.sent.data.Success&&(e.isSmsCodeSent=!0,e.startTimer("SMS")),o.next=17;break;case 15:o.prev=15,o.t0=o.catch(2);case 17:case"end":return o.stop()}}),o,null,[[2,15]])})))()},startTimer:function(t){var e=this;"SMS"===t&&(this.smsIntrvl=setInterval((function(){0===e.smsTimer&&(e.smsTimer=60,e.isSmsCodeSent=!1,clearInterval(e.smsIntrvl)),e.smsTimer-=1}),1e3))},clearTimers:function(){clearInterval(this.smsIntrvl),this.smsTimer=60,this.isSmsCodeSent=!1}},watch:{activeVrfType:function(t){"sms"===t&&(this.vrf.TwoFaCode=""),"2fa"===t&&(this.vrf.SmsCode="")}}},f=(o(1331),o(19)),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"verify-modal-container"},[r("a-modal",{attrs:{id:"verify-modal",visible:t.verifyData.showDialog,"confirm-loading":t.isloadingVerifyData,centered:!0,destroyOnClose:!0,footer:null,width:384,maskStyle:{"background-color":"#242631",opacity:.9},maskClosable:!1},on:{ok:t.verify,cancel:t.cancelVerify}},[t.showError?r("a-alert",{staticClass:"my-10",attrs:{message:t.$t("warning_title"),description:t.errorMsg,type:"warning",closable:""},on:{close:function(e){return e.stopPropagation(),t.showError=!1}}}):t._e(),t._v(" "),t.vrfTypes.includes("sms")&&!t.vrfTypes.includes("2fa")||t.vrfTypes.includes("2fa")&&!t.vrfTypes.includes("sms")?r("div",[r("div",{staticClass:"modal-body"},[t.vrfTypes.includes("sms")?r("div",[r("p",{staticClass:"Roboto-Regular"},[t._v("\n            "+t._s(t.$t("text_sms_label"))+"\n          ")]),t._v(" "),r("p",{staticClass:"Roboto-Regular",staticStyle:{"margin-bottom":"0"}},[t._v("\n            "+t._s(t.$t("text_sms_code_label"))+"\n          ")]),t._v(" "),r("a-form-model",[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:16}},[r("a-form-model-item",{staticClass:"mr-0"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:t.$t("text_sms_placeholder"),size:"large"},model:{value:t.vrf.SmsCode,callback:function(e){t.$set(t.vrf,"SmsCode",e)},expression:"vrf.SmsCode"}})],1)],1),t._v(" "),r("a-col",{attrs:{span:8}},[r("a-form-model-item",{staticClass:"mr-0"},[r("a-button",{staticClass:"submit-button-color Roboto-Regular",attrs:{disabled:t.isSmsCodeSent,type:"secondary",size:"large",block:""},on:{click:function(e){return t.sendCode("SMS")}}},[t._v("\n                    "+t._s(t.isSmsCodeSent?t.smsTimer:t.$t("text_send_code")))])],1)],1)],1)],1)],1):t._e(),t._v(" "),t.vrfTypes.includes("2fa")?r("div",[r("p",{staticClass:"Roboto-Regular",staticStyle:{"margin-bottom":"0"}},[t._v("\n            "+t._s(t.$t("text_twofa_code_label"))+"\n          ")]),t._v(" "),r("a-form-model",[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:24}},[r("a-form-model-item",{staticClass:"mr-0"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:t.$t("text_twofa_placeholder"),size:"large"},model:{value:t.vrf.TwoFaCode,callback:function(e){t.$set(t.vrf,"TwoFaCode",e)},expression:"vrf.TwoFaCode"}})],1)],1)],1)],1)],1):t._e()]),t._v(" "),r("div",{staticClass:"change-password-footer"},[r("a-row",{attrs:{gutter:16}},[r("a-col",{attrs:{span:12}},[r("a-button",{staticClass:"Roboto-Medium change-password-footer-btn-cancel",attrs:{type:"secondary",size:"large",block:""},on:{click:t.cancelVerify}},[t._v("\n              "+t._s(t.$t("text_cancel"))+"\n            ")])],1),t._v(" "),r("a-col",{attrs:{span:12}},[r("a-button",{staticClass:"Roboto-Medium change-password-footer-btn-approve",attrs:{disabled:6!==t.vrf.SmsCode.length&&6!==t.vrf.TwoFaCode.length,type:"primary",size:"large",block:""},on:{click:t.verify}},[t._v("\n              "+t._s(t.$t("text_approve"))+"\n            ")])],1)],1)],1)]):t.vrfTypes.includes("sms")&&t.vrfTypes.includes("2fa")?r("div",[r("a-tabs",{model:{value:t.activeVrfType,callback:function(e){t.activeVrfType=e},expression:"activeVrfType"}},t._l(t.tabListVrf,(function(e,o){return r("a-tab-pane",{key:e.key,staticClass:"Roboto-Medium",class:{"tab-label-active":e.key===t.activeVrfType,"tab-label-inactive":e.key!==t.activeVrfType}},["sms"===e.key?r("span",{staticClass:"text-uppercase",attrs:{slot:"tab"},slot:"tab"},[t._v("\n            "+t._s(e.key)+"\n          ")]):t._e(),t._v(" "),"2fa"===e.key?r("span",{staticClass:"text-uppercase",attrs:{slot:"tab"},slot:"tab"},[t._v("\n            "+t._s(e.key)+"\n          ")]):t._e()])})),1),t._v(" "),r("div",{staticClass:"modal-body"},["sms"===t.activeVrfType?r("div",[r("p",{staticClass:"Roboto-Regular"},[t._v("\n            "+t._s(t.$t("text_sms_label"))+"\n          ")]),t._v(" "),r("p",{staticClass:"Roboto-Regular",staticStyle:{"margin-bottom":"0"}},[t._v("\n            "+t._s(t.$t("text_sms_code_label"))+"\n          ")]),t._v(" "),r("a-form-model",[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:16}},[r("a-form-model-item",{staticClass:"mr-0"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:t.$t("text_sms_placeholder"),size:"large"},model:{value:t.vrf.SmsCode,callback:function(e){t.$set(t.vrf,"SmsCode",e)},expression:"vrf.SmsCode"}})],1)],1),t._v(" "),r("a-col",{attrs:{span:8}},[r("a-form-model-item",{staticClass:"mr-0"},[r("a-button",{staticClass:"submit-button-color Roboto-Regular",attrs:{disabled:t.isSmsCodeSent,type:"secondary",size:"large",block:""},on:{click:function(e){return t.sendCode("SMS")}}},[t._v("\n                    "+t._s(t.isSmsCodeSent?t.smsTimer:t.$t("text_send_code")))])],1)],1)],1)],1)],1):t._e(),t._v(" "),"2fa"===t.activeVrfType?r("div",[r("p",{staticClass:"Roboto-Regular",staticStyle:{"margin-bottom":"0"}},[t._v("\n            "+t._s(t.$t("text_twofa_code_label"))+"\n          ")]),t._v(" "),r("a-form-model",[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:24}},[r("a-form-model-item",{staticClass:"mr-0"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:t.$t("text_twofa_placeholder"),size:"large"},model:{value:t.vrf.TwoFaCode,callback:function(e){t.$set(t.vrf,"TwoFaCode",e)},expression:"vrf.TwoFaCode"}})],1)],1)],1)],1)],1):t._e()]),t._v(" "),r("div",{staticClass:"change-password-footer"},[r("a-row",{attrs:{gutter:16}},[r("a-col",{attrs:{span:12}},[r("a-button",{staticClass:"Roboto-Medium change-password-footer-btn-cancel",attrs:{type:"secondary",size:"large",block:""},on:{click:t.cancelVerify}},[t._v("\n              "+t._s(t.$t("text_cancel"))+"\n            ")])],1),t._v(" "),r("a-col",{attrs:{span:12}},[r("a-button",{staticClass:"Roboto-Medium change-password-footer-btn-approve",attrs:{disabled:6!==t.vrf.SmsCode.length&&6!==t.vrf.TwoFaCode.length,type:"primary",size:"large",block:""},on:{click:t.verify}},[t._v("\n              "+t._s(t.$t("text_approve"))+"\n            ")])],1)],1)],1)],1):2===t.vrfTypes.length&&t.vrfTypes.includes("sms")&&t.vrfTypes.includes("email")?r("div",[r("h3",{staticClass:"security-modal-title",attrs:{slot:"title"},slot:"title"},[t._v("SMS")]),t._v(" "),r("div",{staticClass:"modal-body"},[r("p",{staticClass:"Roboto-Regular"},[t._v("\n          "+t._s(t.$t("text_sms_label"))+"\n        ")]),t._v(" "),r("p",{staticClass:"Roboto-Regular",staticStyle:{"margin-bottom":"0"}},[t._v("\n          "+t._s(t.$t("text_sms_code_label"))+"\n        ")]),t._v(" "),r("a-form-model",[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:16}},[r("a-form-model-item",{staticClass:"mr-0"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:t.$t("text_sms_placeholder"),size:"large"},model:{value:t.vrf.SmsCode,callback:function(e){t.$set(t.vrf,"SmsCode",e)},expression:"vrf.SmsCode"}})],1)],1),t._v(" "),r("a-col",{attrs:{span:8}},[r("a-form-model-item",{staticClass:"mr-0"},[r("a-button",{staticClass:"submit-button-color Roboto-Regular",attrs:{disabled:t.isSmsCodeSent,type:"secondary",size:"large",block:""},on:{click:function(e){return t.sendCode("SMS")}}},[t._v("\n                  "+t._s(t.isSmsCodeSent?t.smsTimer:t.$t("text_send_code")))])],1)],1)],1)],1)],1),t._v(" "),r("div",{staticClass:"change-password-footer"},[r("a-row",{attrs:{gutter:16}},[r("a-col",{attrs:{span:12}},[r("a-button",{staticClass:"Roboto-Medium change-password-footer-btn-cancel",attrs:{type:"secondary",size:"large",block:""},on:{click:t.cancelVerify}},[t._v("\n              "+t._s(t.$t("text_cancel"))+"\n            ")])],1),t._v(" "),r("a-col",{attrs:{span:12}},[r("a-button",{staticClass:"Roboto-Medium change-password-footer-btn-approve",attrs:{disabled:6!==t.vrf.SmsCode.length,type:"primary",size:"large",block:""},on:{click:t.verify}},[t._v("\n              "+t._s(t.$t("text_approve"))+"\n            ")])],1)],1)],1)]):2===t.vrfTypes.length&&t.vrfTypes.includes("2fa")&&t.vrfTypes.includes("email")?r("div",[r("h3",{staticClass:"security-modal-title",attrs:{slot:"title"},slot:"title"},[t._v("2fa")]),t._v(" "),r("p",{staticClass:"Roboto-Regular"},[t._v("\n        "+t._s(t.$t("text_twofa_label"))+"\n      ")]),t._v(" "),r("p",{staticClass:"Roboto-Regular",staticStyle:{"margin-bottom":"0"}},[t._v("\n        "+t._s(t.$t("text_twofa_code_label"))+"\n      ")]),t._v(" "),r("div",{staticClass:"modal-body"},[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:16}},[r("a-form-model-item",{staticClass:"mr-0"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:t.$t(t.text_twofa_placeholder),size:"large"},model:{value:t.vrf.TwoFaCode,callback:function(e){t.$set(t.vrf,"TwoFaCode",e)},expression:"vrf.TwoFaCode"}})],1)],1)],1)],1),t._v(" "),r("div",{staticClass:"change-password-footer"},[r("a-row",{attrs:{gutter:16}},[r("a-col",{attrs:{span:12}},[r("a-button",{staticClass:"Roboto-Medium change-password-footer-btn-cancel",attrs:{type:"secondary",size:"large",block:""},on:{click:t.cancelVerify}},[t._v("\n              "+t._s(t.$t("text_cancel"))+"\n            ")])],1),t._v(" "),r("a-col",{attrs:{span:12}},[r("a-button",{staticClass:"Roboto-Medium change-password-footer-btn-approve",attrs:{disabled:6!==t.vrf.TwoFaCode.length,type:"primary",size:"large",block:""},on:{click:t.verify}},[t._v("\n              "+t._s(t.$t("text_approve"))+"\n            ")])],1)],1)],1)]):1===t.vrfTypes.length&&(t.vrfTypes.includes("sms")||t.vrfTypes.includes("email"))?r("div",[r("h3",{staticClass:"security-modal-title",attrs:{slot:"title"},slot:"title"},[t._v("\n        "+t._s(t.$t("text_security_verification"))+"\n      ")]),t._v(" "),r("div",{staticClass:"modal-body"},[r("p",{staticClass:"Roboto-Regular"},[t._v("\n          "+t._s(t.$t("text_p2p_warning"))+"\n        ")]),t._v(" "),r("div",{staticClass:"invite-verify-box"},[r("div",{staticClass:"invite-verify-box-item"},[r("img",{staticClass:"icon-2fa",attrs:{slot:"avatar",src:o(1274),alt:""},slot:"avatar"}),t._v(" "),r("p",{staticClass:"Roboto-Medium"},[t._v(t._s(t.$t("text_phone_verification")))])]),t._v(" "),r("div",{staticClass:"invite-verify-box-item"},[r("img",{staticClass:"icon-2fa",attrs:{slot:"avatar",src:o(1278),alt:""},slot:"avatar"}),t._v(" "),r("p",{staticClass:"Roboto-Medium"},[t._v(t._s(t.$t("text_twofa_verification")))])])]),t._v(" "),r("p",{staticClass:"Roboto-Medium remind-me-text",attrs:{align:"right"}},[t._v("\n          "+t._s(t.$t("text_remind"))+"\n        ")])])]):r("div",[r("h3",{staticClass:"security-modal-title",attrs:{slot:"title"},slot:"title"},[t._v("\n        "+t._s(t.$t("text_security_verification"))+"\n      ")]),t._v(" "),r("div",{staticClass:"modal-body"},[r("p",{staticClass:"Roboto-Regular"},[t._v("\n          "+t._s(t.$t("text_p2p_warning"))+"\n        ")]),t._v(" "),r("div",{staticClass:"invite-verify-box"},[r("div",{staticClass:"invite-verify-box-item",on:{click:function(e){t.$router.push(t.localeRoute("/account/security/enable-sms-authenticator"))}}},[r("img",{staticClass:"icon-2fa",attrs:{slot:"avatar",src:o(1274),alt:""},slot:"avatar"}),t._v(" "),r("p",{staticClass:"Roboto-Medium"},[t._v(t._s(t.$t("text_phone_verification")))])]),t._v(" "),r("div",{staticClass:"invite-verify-box-item",on:{click:function(e){t.$router.push(t.localeRoute("/account/security/enable-google-authenticator"))}}},[r("img",{staticClass:"icon-2fa",attrs:{slot:"avatar",src:o(1278),alt:""},slot:"avatar"}),t._v(" "),r("p",{staticClass:"Roboto-Medium"},[t._v(t._s(t.$t("text_twofa_verification")))])])]),t._v(" "),r("p",{staticClass:"Roboto-Medium remind-me-text",attrs:{align:"right"}},[t._v("\n          "+t._s(t.$t("text_remind"))+"\n        ")])])]),t._v(" "),r("span",{staticClass:"custom-modal-icon",attrs:{slot:"closeIcon"},slot:"closeIcon"},[r("a-icon",{attrs:{type:"close"},on:{click:t.cancelVerify}})],1),t._v(" "),r("recaptcha")],1)],1)}),[],!1,null,"0fb52581",null);e.default=component.exports},1331:function(t,e,o){"use strict";var r=o(1291);o.n(r).a},1332:function(t,e,o){(e=o(53)(!1)).push([t.i,".text-uppercase[data-v-0fb52581]{text-transform:uppercase}.change-password-footer .change-password-footer-cancel[data-v-0fb52581]{margin-right:5px}.invite-verify-box[data-v-0fb52581]{display:flex;justify-content:space-between;align-items:center;margin:10px auto}.invite-verify-box-item[data-v-0fb52581]{display:flex;flex-direction:column;justify-content:center;align-items:center;border:1px solid #e6e8ea;border-radius:3px;text-align:center;width:150px;height:120px;cursor:pointer}.remind-me-text[data-v-0fb52581]{color:#1ca4e8;cursor:pointer}.security-modal-title[data-v-0fb52581]{margin-bottom:10px;text-align:center}.custom-modal-icon[data-v-0fb52581]{position:absolute;top:-70%;right:-50%;color:#c1c6cd}",""]),t.exports=e},1386:function(t,e,o){t.exports=o.p+"ac7b9e9fa1861532b2e540c94fde7dcb.svg"},1387:function(t,e,o){var content=o(1742);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("37335551",content,!0,{sourceMap:!1})},1741:function(t,e,o){"use strict";var r=o(1387);o.n(r).a},1742:function(t,e,o){(e=o(53)(!1)).push([t.i,".security-modal-title[data-v-a26afde0]{margin-bottom:10px;text-align:center}.invite-verify-box[data-v-a26afde0]{display:flex;justify-content:space-between;align-items:center;margin:10px auto}.invite-verify-box-item[data-v-a26afde0]{display:flex;flex-direction:column;justify-content:center;align-items:center;border:1px solid #e6e8ea;border-radius:3px;text-align:center;width:150px;height:120px;cursor:pointer}.remind-me-text[data-v-a26afde0]{margin-top:20px;color:#1ca4e8;cursor:pointer}",""]),t.exports=e},2741:function(t,e,o){"use strict";o.r(e);o(42),o(43),o(22),o(83),o(25);var r=o(13),n=(o(1314),{name:"Frozen",head:function(){return{title:"Hesap Dondurma | Cointral.com"}},data:function(){return{isMobile:null,isModalVisible:!1,isDisabled:!1,errorMessage:null,isError:!1,verifyData:{Token:null,errorCode:null,showDialog:!1}}},mounted:function(){var t=this;this.isMobile=window.innerWidth<1e3,window.addEventListener("resize",(function(){t.isMobile=window.innerWidth<1e3}))},methods:{verify:function(){this.isModalVisible=!1},cancelVerify:function(){this.isModalVisible=!1},remindMeLater:function(){this.isModalVisible=!1},frozeAccount:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,n,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,r=t.$cookies,n=t.$config.FINANCE_API_URL,l={Authorization:"Bearer "+r.get("Token")},e.next=4,o.post(n+"/FrozeAccount",null,{headers:l});case 4:(c=e.sent).data.Success?(t.verifyData.Token=c.data.SecurityVerificationToken,t.verifyData.errorCode=c.data.ErrorCode,t.verifyData.showDialog=!0):(t.isModalVisible=!0,1===(d=c.data.Message.split(",")).length?(t.errorMessage="Lütfen ".concat(d[0].toString()," tamamlayınız."),t.isError=!0):(t.errorMessage="Lütfen ".concat(d[0].toString()," ve ").concat(d[1].toString()," tamamlayınız."),t.isError=!0),setTimeout((function(){return t.isError=!1}),5e3));case 6:case"end":return e.stop()}}),e)})))()}}}),l=(o(1741),o(19)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-col",{staticStyle:{"margin-bottom":"80vh"}},[r("a-breadcrumb",{staticClass:"Roboto-Regular",staticStyle:{"margin-top":"20px","margin-left":"20px","margin-bottom":"30px"}},[r("a-breadcrumb-item",[t._v(t._s(t.$t("froze_security")))]),t._v(" "),r("a-breadcrumb-item",[t._v(t._s(t.$t("froze_transactions")))]),t._v(" "),r("a-breadcrumb-item",[t._v(t._s(t.$t("froze_disable_account")))])],1),t._v(" "),r("a-col",{staticClass:"Roboto-Regular",staticStyle:{"background-color":"white","margin-top":"8%","z-index":"5"},attrs:{offset:t.isMobile?3:9,span:t.isMobile?18:6}},[r("a-col",{attrs:{span:24,align:"center"}},[r("img",{attrs:{src:o(1386),alt:""}})]),t._v(" "),r("a-col",{staticStyle:{"margin-top":"20px"},attrs:{span:24,align:"center"}},[r("h2",[t._v(t._s(t.$t("froze_disable_account")))])]),t._v(" "),r("a-col",{staticClass:"Roboto-Bold",attrs:{offset:"1",span:22}},[t._v("\n      "+t._s(t.$t("froze_warning"))+"\n    ")]),t._v(" "),r("a-col",{attrs:{span:24}},[r("ul",[r("li",[t._v(t._s(t.$t("froze_item_one")))]),t._v(" "),r("li",[t._v(t._s(t.$t("froze_item_two")))]),t._v(" "),r("li",[t._v(t._s(t.$t("froze_item_three")))]),t._v(" "),r("li",[t._v(t._s(t.$t("froze_item_four")))]),t._v(" "),r("li",[t._v(t._s(t.$t("froze_item_five")))])])]),t._v(" "),r("a-col",{attrs:{offset:"1",span:22}},[r("a-divider",{attrs:{type:"horizontal"}})],1),t._v(" "),r("a-col",{attrs:{offset:"1",span:22}},[t._v("\n      "+t._s(t.$t("froze_second_warning"))+"\n    ")]),t._v(" "),r("a-col",{staticStyle:{"margin-top":"20px"},attrs:{offset:"1",span:22}},[r("a-button",{staticClass:"w-100 ant-btn-primary",attrs:{disabled:t.isDisabled},on:{click:t.frozeAccount}},[t._v("\n        "+t._s(t.$t("froze_approve"))+"\n      ")]),t._v(" "),t.isError?r("a-alert",{staticStyle:{"margin-top":"20px"},attrs:{type:"error",message:t.errorMessage,banner:""}}):t._e()],1)],1),t._v(" "),this.verifyData.showDialog?r("SecurityVerifyModal",{attrs:{verifyData:t.verifyData}}):t._e(),t._v(" "),r("a-modal",{attrs:{id:"verify-modal",visible:t.isModalVisible,centered:!0,destroyOnClose:!0,footer:null,width:384,maskStyle:{"background-color":"#242631",opacity:.9},maskClosable:!1},on:{ok:t.verify,cancel:t.cancelVerify}},[r("h3",{staticClass:"security-modal-title",attrs:{slot:"title"},slot:"title"},[t._v("\n      "+t._s(t.$t("froze_modal_title"))+"\n    ")]),t._v(" "),r("div",{staticClass:"modal-body"},[r("p",{staticClass:"Roboto-Regular"},[t._v("\n        "+t._s(t.$t("froze_modal_text"))+"\n      ")]),t._v(" "),r("div",{staticClass:"invite-verify-box"},[r("div",{staticClass:"invite-verify-box-item"},[r("img",{staticClass:"icon-2fa",attrs:{slot:"avatar",src:o(1274),alt:""},slot:"avatar"}),t._v(" "),r("p",{staticClass:"Roboto-Medium"},[t._v(t._s(t.$t("froze_modal_sms")))])]),t._v(" "),r("div",{staticClass:"invite-verify-box-item"},[r("img",{staticClass:"icon-2fa",attrs:{slot:"avatar",src:o(1278),alt:""},slot:"avatar"}),t._v(" "),r("p",{staticClass:"Roboto-Medium"},[t._v(t._s(t.$t("froze_modal_google")))])])]),t._v(" "),r("p",{staticClass:"Roboto-Medium remind-me-text",attrs:{align:"right"},on:{click:t.remindMeLater}},[t._v("\n        "+t._s(t.$t("froze_remember_me"))+"\n      ")])])])],1)}),[],!1,null,"a26afde0",null);e.default=component.exports;installComponents(component,{SecurityVerifyModal:o(1314).default})}}]);