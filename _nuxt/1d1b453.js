(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1274:function(t,e,o){t.exports=o.p+"78c246c15bd6b556c227d61c2c2dd31c.svg"},1278:function(t,e,o){t.exports=o.p+"008e7016d924fd9dbf645cfbf4281b2e.svg"},1292:function(t,e,o){var content=o(1333);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("6df6503a",content,!0,{sourceMap:!1})},1315:function(t,e,o){"use strict";o.r(e);o(63),o(32),o(31),o(22),o(55);var r=o(26),n=(o(25),o(13)),c=(o(83),o(295));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={props:{verifyData:{required:!0,type:Object}},data:function(){return{tabListVrf:[{key:"sms",scopedSlots:{tab:"titleSlot"}},{key:"2fa",scopedSlots:{tab:"titleSlot"}}],activeVrfType:"sms",vrf:{SmsCode:"",EmailCode:"",TwoFaCode:""},vrfTypes:[],isSmsCodeSent:!1,smsTimer:60,smsIntrvl:null,isloadingVerifyData:!1,showError:!1,errorMsg:""}},mounted:function(){if(document.addEventListener("keyup",this.CTA_SECURITY_VERIFY),this.verifyData.Token){var t=Object(c.a)(this.verifyData.Token).vrf;this.vrfTypes=t.split(",").length>1?t.split(","):[t]}},destroyed:function(){document.removeEventListener("keyup",this.CTA_SECURITY_VERIFY)},methods:{CTA_SECURITY_VERIFY:function(t){13===t.keyCode&&this.verify()},verify:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,r=t.$config,e.prev=1,t.$recaptcha.language=t.$cookies.get("i18n_redirected"),e.next=5,t.$recaptcha.getResponse();case 5:return n=e.sent,e.next=8,t.$recaptcha.reset();case 8:return t.isloadingVerifyData=!0,e.next=11,o.post(r.AUTH_API_URL+"/SecurityVerify",d({Token:t.verifyData.Token},t.vrf),{headers:{captcha:n}});case 11:c=e.sent,t.isloadingVerifyData=!1,c.data.Success?(t.clearTimers(),t.$router.push(t.localeRoute("/account/security"))):(t.showError=!0,t.errorMsg=c.data.Message),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),e.t0.response&&(t.showError=!0,t.errorMsg=e.t0.response.data.Message);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})))()},cancelVerify:function(){this.clearTimers(),this.verifyData.Token=null,this.verifyData.showDialog=!1},sendCode:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var r,n,c,l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r=e.$axios,n=e.$config,c={Type:t,Token:e.verifyData.Token},o.prev=2,e.$recaptcha.language=e.$cookies.get("i18n_redirected"),o.next=6,e.$recaptcha.getResponse();case 6:return l=o.sent,o.next=9,e.$recaptcha.reset();case 9:return o.next=11,r.post(n.AUTH_API_URL+"/SendOTP",c,{headers:{captcha:l}});case 11:o.sent.data.Success&&(e.isSmsCodeSent=!0,e.startTimer("SMS")),o.next=17;break;case 15:o.prev=15,o.t0=o.catch(2);case 17:case"end":return o.stop()}}),o,null,[[2,15]])})))()},startTimer:function(t){var e=this;"SMS"===t&&(this.smsIntrvl=setInterval((function(){0===e.smsTimer&&(e.smsTimer=60,e.isSmsCodeSent=!1,clearInterval(e.smsIntrvl)),e.smsTimer-=1}),1e3))},clearTimers:function(){clearInterval(this.smsIntrvl),this.smsTimer=60,this.isSmsCodeSent=!1}},watch:{activeVrfType:function(t){"sms"===t&&(this.vrf.TwoFaCode=""),"2fa"===t&&(this.vrf.SmsCode="")}}},f=(o(1332),o(19)),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"verify-modal-container"},[r("a-modal",{attrs:{id:"verify-modal",visible:t.verifyData.showDialog,"confirm-loading":t.isloadingVerifyData,centered:!0,destroyOnClose:!0,footer:null,width:384,maskStyle:{"background-color":"#242631",opacity:.9},maskClosable:!1},on:{ok:t.verify,cancel:t.cancelVerify}},[t.showError?r("a-alert",{staticClass:"my-10",attrs:{message:t.$t("warning_title"),description:t.errorMsg,type:"warning",closable:""},on:{close:function(e){return e.stopPropagation(),t.showError=!1}}}):t._e(),t._v(" "),t.vrfTypes.includes("sms")&&!t.vrfTypes.includes("2fa")||t.vrfTypes.includes("2fa")&&!t.vrfTypes.includes("sms")?r("div",[r("div",{staticClass:"modal-body"},[t.vrfTypes.includes("sms")?r("div",[r("p",{staticClass:"Roboto-Regular"},[t._v("\n            "+t._s(t.$t("text_sms_label"))+"\n          ")]),t._v(" "),r("p",{staticClass:"Roboto-Regular",staticStyle:{"margin-bottom":"0"}},[t._v("\n            "+t._s(t.$t("text_sms_code_label"))+"\n          ")]),t._v(" "),r("a-form-model",[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:16}},[r("a-form-model-item",{staticClass:"mr-0"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:t.$t("text_sms_placeholder"),size:"large"},model:{value:t.vrf.SmsCode,callback:function(e){t.$set(t.vrf,"SmsCode",e)},expression:"vrf.SmsCode"}})],1)],1),t._v(" "),r("a-col",{attrs:{span:8}},[r("a-form-model-item",{staticClass:"mr-0"},[r("a-button",{staticClass:"submit-button-color Roboto-Regular",attrs:{disabled:t.isSmsCodeSent,type:"secondary",size:"large",block:""},on:{click:function(e){return t.sendCode("SMS")}}},[t._v("\n                    "+t._s(t.isSmsCodeSent?t.smsTimer:t.$t("text_send_code")))])],1)],1)],1)],1)],1):t._e(),t._v(" "),t.vrfTypes.includes("2fa")?r("div",[r("p",{staticClass:"Roboto-Regular",staticStyle:{"margin-bottom":"0"}},[t._v("\n            "+t._s(t.$t("text_twofa_code_label"))+"\n          ")]),t._v(" "),r("a-form-model",[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:24}},[r("a-form-model-item",{staticClass:"mr-0"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:t.$t("text_twofa_placeholder"),size:"large"},model:{value:t.vrf.TwoFaCode,callback:function(e){t.$set(t.vrf,"TwoFaCode",e)},expression:"vrf.TwoFaCode"}})],1)],1)],1)],1)],1):t._e()]),t._v(" "),r("div",{staticClass:"change-password-footer"},[r("a-row",{attrs:{gutter:16}},[r("a-col",{attrs:{span:12}},[r("a-button",{staticClass:"Roboto-Medium change-password-footer-btn-cancel",attrs:{type:"secondary",size:"large",block:""},on:{click:t.cancelVerify}},[t._v("\n              "+t._s(t.$t("text_cancel"))+"\n            ")])],1),t._v(" "),r("a-col",{attrs:{span:12}},[r("a-button",{staticClass:"Roboto-Medium change-password-footer-btn-approve",attrs:{disabled:6!==t.vrf.SmsCode.length&&6!==t.vrf.TwoFaCode.length,type:"primary",size:"large",block:""},on:{click:t.verify}},[t._v("\n              "+t._s(t.$t("text_approve"))+"\n            ")])],1)],1)],1)]):t.vrfTypes.includes("sms")&&t.vrfTypes.includes("2fa")?r("div",[r("a-tabs",{model:{value:t.activeVrfType,callback:function(e){t.activeVrfType=e},expression:"activeVrfType"}},t._l(t.tabListVrf,(function(e,o){return r("a-tab-pane",{key:e.key,staticClass:"Roboto-Medium",class:{"tab-label-active":e.key===t.activeVrfType,"tab-label-inactive":e.key!==t.activeVrfType}},["sms"===e.key?r("span",{staticClass:"text-uppercase",attrs:{slot:"tab"},slot:"tab"},[t._v("\n            "+t._s(e.key)+"\n          ")]):t._e(),t._v(" "),"2fa"===e.key?r("span",{staticClass:"text-uppercase",attrs:{slot:"tab"},slot:"tab"},[t._v("\n            "+t._s(e.key)+"\n          ")]):t._e()])})),1),t._v(" "),r("div",{staticClass:"modal-body"},["sms"===t.activeVrfType?r("div",[r("p",{staticClass:"Roboto-Regular"},[t._v("\n            "+t._s(t.$t("text_sms_label"))+"\n          ")]),t._v(" "),r("p",{staticClass:"Roboto-Regular",staticStyle:{"margin-bottom":"0"}},[t._v("\n            "+t._s(t.$t("text_sms_code_label"))+"\n          ")]),t._v(" "),r("a-form-model",[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:16}},[r("a-form-model-item",{staticClass:"mr-0"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:t.$t("text_sms_placeholder"),size:"large"},model:{value:t.vrf.SmsCode,callback:function(e){t.$set(t.vrf,"SmsCode",e)},expression:"vrf.SmsCode"}})],1)],1),t._v(" "),r("a-col",{attrs:{span:8}},[r("a-form-model-item",{staticClass:"mr-0"},[r("a-button",{staticClass:"submit-button-color Roboto-Regular",attrs:{disabled:t.isSmsCodeSent,type:"secondary",size:"large",block:""},on:{click:function(e){return t.sendCode("SMS")}}},[t._v("\n                    "+t._s(t.isSmsCodeSent?t.smsTimer:t.$t("text_send_code")))])],1)],1)],1)],1)],1):t._e(),t._v(" "),"2fa"===t.activeVrfType?r("div",[r("p",{staticClass:"Roboto-Regular",staticStyle:{"margin-bottom":"0"}},[t._v("\n            "+t._s(t.$t("text_twofa_code_label"))+"\n          ")]),t._v(" "),r("a-form-model",[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:24}},[r("a-form-model-item",{staticClass:"mr-0"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:t.$t("text_twofa_placeholder"),size:"large"},model:{value:t.vrf.TwoFaCode,callback:function(e){t.$set(t.vrf,"TwoFaCode",e)},expression:"vrf.TwoFaCode"}})],1)],1)],1)],1)],1):t._e()]),t._v(" "),r("div",{staticClass:"change-password-footer"},[r("a-row",{attrs:{gutter:16}},[r("a-col",{attrs:{span:12}},[r("a-button",{staticClass:"Roboto-Medium change-password-footer-btn-cancel",attrs:{type:"secondary",size:"large",block:""},on:{click:t.cancelVerify}},[t._v("\n              "+t._s(t.$t("text_cancel"))+"\n            ")])],1),t._v(" "),r("a-col",{attrs:{span:12}},[r("a-button",{staticClass:"Roboto-Medium change-password-footer-btn-approve",attrs:{disabled:6!==t.vrf.SmsCode.length&&6!==t.vrf.TwoFaCode.length,type:"primary",size:"large",block:""},on:{click:t.verify}},[t._v("\n              "+t._s(t.$t("text_approve"))+"\n            ")])],1)],1)],1)],1):2===t.vrfTypes.length&&t.vrfTypes.includes("sms")&&t.vrfTypes.includes("email")?r("div",[r("h3",{staticClass:"security-modal-title",attrs:{slot:"title"},slot:"title"},[t._v("SMS")]),t._v(" "),r("div",{staticClass:"modal-body"},[r("p",{staticClass:"Roboto-Regular"},[t._v("\n          "+t._s(t.$t("text_sms_label"))+"\n        ")]),t._v(" "),r("p",{staticClass:"Roboto-Regular",staticStyle:{"margin-bottom":"0"}},[t._v("\n          "+t._s(t.$t("text_sms_code_label"))+"\n        ")]),t._v(" "),r("a-form-model",[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:16}},[r("a-form-model-item",{staticClass:"mr-0"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:t.$t("text_sms_placeholder"),size:"large"},model:{value:t.vrf.SmsCode,callback:function(e){t.$set(t.vrf,"SmsCode",e)},expression:"vrf.SmsCode"}})],1)],1),t._v(" "),r("a-col",{attrs:{span:8}},[r("a-form-model-item",{staticClass:"mr-0"},[r("a-button",{staticClass:"submit-button-color Roboto-Regular",attrs:{disabled:t.isSmsCodeSent,type:"secondary",size:"large",block:""},on:{click:function(e){return t.sendCode("SMS")}}},[t._v("\n                  "+t._s(t.isSmsCodeSent?t.smsTimer:t.$t("text_send_code")))])],1)],1)],1)],1)],1),t._v(" "),r("div",{staticClass:"change-password-footer"},[r("a-row",{attrs:{gutter:16}},[r("a-col",{attrs:{span:12}},[r("a-button",{staticClass:"Roboto-Medium change-password-footer-btn-cancel",attrs:{type:"secondary",size:"large",block:""},on:{click:t.cancelVerify}},[t._v("\n              "+t._s(t.$t("text_cancel"))+"\n            ")])],1),t._v(" "),r("a-col",{attrs:{span:12}},[r("a-button",{staticClass:"Roboto-Medium change-password-footer-btn-approve",attrs:{disabled:6!==t.vrf.SmsCode.length,type:"primary",size:"large",block:""},on:{click:t.verify}},[t._v("\n              "+t._s(t.$t("text_approve"))+"\n            ")])],1)],1)],1)]):2===t.vrfTypes.length&&t.vrfTypes.includes("2fa")&&t.vrfTypes.includes("email")?r("div",[r("h3",{staticClass:"security-modal-title",attrs:{slot:"title"},slot:"title"},[t._v("2fa")]),t._v(" "),r("p",{staticClass:"Roboto-Regular"},[t._v("\n        "+t._s(t.$t("text_twofa_label"))+"\n      ")]),t._v(" "),r("p",{staticClass:"Roboto-Regular",staticStyle:{"margin-bottom":"0"}},[t._v("\n        "+t._s(t.$t("text_twofa_code_label"))+"\n      ")]),t._v(" "),r("div",{staticClass:"modal-body"},[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:16}},[r("a-form-model-item",{staticClass:"mr-0"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:t.$t(t.text_twofa_placeholder),size:"large"},model:{value:t.vrf.TwoFaCode,callback:function(e){t.$set(t.vrf,"TwoFaCode",e)},expression:"vrf.TwoFaCode"}})],1)],1)],1)],1),t._v(" "),r("div",{staticClass:"change-password-footer"},[r("a-row",{attrs:{gutter:16}},[r("a-col",{attrs:{span:12}},[r("a-button",{staticClass:"Roboto-Medium change-password-footer-btn-cancel",attrs:{type:"secondary",size:"large",block:""},on:{click:t.cancelVerify}},[t._v("\n              "+t._s(t.$t("text_cancel"))+"\n            ")])],1),t._v(" "),r("a-col",{attrs:{span:12}},[r("a-button",{staticClass:"Roboto-Medium change-password-footer-btn-approve",attrs:{disabled:6!==t.vrf.TwoFaCode.length,type:"primary",size:"large",block:""},on:{click:t.verify}},[t._v("\n              "+t._s(t.$t("text_approve"))+"\n            ")])],1)],1)],1)]):1===t.vrfTypes.length&&(t.vrfTypes.includes("sms")||t.vrfTypes.includes("email"))?r("div",[r("h3",{staticClass:"security-modal-title",attrs:{slot:"title"},slot:"title"},[t._v("\n        "+t._s(t.$t("text_security_verification"))+"\n      ")]),t._v(" "),r("div",{staticClass:"modal-body"},[r("p",{staticClass:"Roboto-Regular"},[t._v("\n          "+t._s(t.$t("text_p2p_warning"))+"\n        ")]),t._v(" "),r("div",{staticClass:"invite-verify-box"},[r("div",{staticClass:"invite-verify-box-item"},[r("img",{staticClass:"icon-2fa",attrs:{slot:"avatar",src:o(1274),alt:""},slot:"avatar"}),t._v(" "),r("p",{staticClass:"Roboto-Medium"},[t._v(t._s(t.$t("text_phone_verification")))])]),t._v(" "),r("div",{staticClass:"invite-verify-box-item"},[r("img",{staticClass:"icon-2fa",attrs:{slot:"avatar",src:o(1278),alt:""},slot:"avatar"}),t._v(" "),r("p",{staticClass:"Roboto-Medium"},[t._v(t._s(t.$t("text_twofa_verification")))])])]),t._v(" "),r("p",{staticClass:"Roboto-Medium remind-me-text",attrs:{align:"right"}},[t._v("\n          "+t._s(t.$t("text_remind"))+"\n        ")])])]):r("div",[r("h3",{staticClass:"security-modal-title",attrs:{slot:"title"},slot:"title"},[t._v("\n        "+t._s(t.$t("text_security_verification"))+"\n      ")]),t._v(" "),r("div",{staticClass:"modal-body"},[r("p",{staticClass:"Roboto-Regular"},[t._v("\n          "+t._s(t.$t("text_p2p_warning"))+"\n        ")]),t._v(" "),r("div",{staticClass:"invite-verify-box"},[r("div",{staticClass:"invite-verify-box-item",on:{click:function(e){t.$router.push(t.localeRoute("/account/security/enable-sms-authenticator"))}}},[r("img",{staticClass:"icon-2fa",attrs:{slot:"avatar",src:o(1274),alt:""},slot:"avatar"}),t._v(" "),r("p",{staticClass:"Roboto-Medium"},[t._v(t._s(t.$t("text_phone_verification")))])]),t._v(" "),r("div",{staticClass:"invite-verify-box-item",on:{click:function(e){t.$router.push(t.localeRoute("/account/security/enable-google-authenticator"))}}},[r("img",{staticClass:"icon-2fa",attrs:{slot:"avatar",src:o(1278),alt:""},slot:"avatar"}),t._v(" "),r("p",{staticClass:"Roboto-Medium"},[t._v(t._s(t.$t("text_twofa_verification")))])])]),t._v(" "),r("p",{staticClass:"Roboto-Medium remind-me-text",attrs:{align:"right"}},[t._v("\n          "+t._s(t.$t("text_remind"))+"\n        ")])])]),t._v(" "),r("span",{staticClass:"custom-modal-icon",attrs:{slot:"closeIcon"},slot:"closeIcon"},[r("a-icon",{attrs:{type:"close"},on:{click:t.cancelVerify}})],1),t._v(" "),r("recaptcha")],1)],1)}),[],!1,null,"0fb52581",null);e.default=component.exports},1332:function(t,e,o){"use strict";var r=o(1292);o.n(r).a},1333:function(t,e,o){(e=o(53)(!1)).push([t.i,".text-uppercase[data-v-0fb52581]{text-transform:uppercase}.change-password-footer .change-password-footer-cancel[data-v-0fb52581]{margin-right:5px}.invite-verify-box[data-v-0fb52581]{display:flex;justify-content:space-between;align-items:center;margin:10px auto}.invite-verify-box-item[data-v-0fb52581]{display:flex;flex-direction:column;justify-content:center;align-items:center;border:1px solid #e6e8ea;border-radius:3px;text-align:center;width:150px;height:120px;cursor:pointer}.remind-me-text[data-v-0fb52581]{color:#1ca4e8;cursor:pointer}.security-modal-title[data-v-0fb52581]{margin-bottom:10px;text-align:center}.custom-modal-icon[data-v-0fb52581]{position:absolute;top:-70%;right:-50%;color:#c1c6cd}",""]),t.exports=e},1399:function(t,e,o){var content=o(1765);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("b75eb5d0",content,!0,{sourceMap:!1})},1400:function(t,e,o){t.exports=o.p+"8d61ca52669ef1073ca0efad2dbd55ec.svg"},1764:function(t,e,o){"use strict";var r=o(1399);o.n(r).a},1765:function(t,e,o){var r=o(53),n=o(636),c=o(1400);e=r(!1);var l=n(c);e.push([t.i,".stick-margin[data-v-052385a8]{margin:-15px auto auto -15px}.change-antip-card-row[data-v-052385a8]{min-height:50vh;margin:50px auto;display:flex;align-items:center;justify-content:center}.change-antip-card-container[data-v-052385a8]{width:420px;margin:auto}.change-antip-card-container-mobile[data-v-052385a8]{margin:auto}.change-antip-card-outer-head-content[data-v-052385a8]{margin:20px auto}.change-antip-card-media-section[data-v-052385a8]{height:123px;margin:10px auto;background-image:url("+l+");position:relative;overflow:hidden}.change-antip-card[data-v-052385a8]{box-shadow:0 0 5px rgba(0,0,0,.10196);border-radius:3px}.change-antip-card-input-group[data-v-052385a8]{background-color:#fff;border-radius:3px;padding:20px;width:90%;margin:auto;position:relative;top:70px}.change-antip-media-row[data-v-052385a8]{padding-bottom:5px;border-bottom:1px solid #f3f2f3}.alert-box[data-v-052385a8]{margin:10px auto}",""]),t.exports=e},2748:function(t,e,o){"use strict";o.r(e);o(25);var r=o(13),n=(o(1315),{data:function(){return{NewAntiphishingCode:"",verifyData:{Token:null,errorCode:null,showDialog:!1},showError:!1,errorMsg:"",isLoadingUpdateAntiP:!1,isMobile:null}},head:function(){return{title:"Oltalama Engelleme Kodu | Cointral.com"}},mounted:function(){var t=this;this.isMobile=window.innerWidth<1e3,window.addEventListener("resize",(function(){t.isMobile=window.innerWidth<1e3}))},methods:{updateAntiP:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,n,c,l,d,v,f,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,r=t.$config,n=t.$cookies,c={Authorization:"Bearer "+n.get("Token")},t.isLoadingUpdateAntiP=!0,e.prev=3,e.next=6,o.post(r.FINANCE_API_URL+"/UpdateAntiphishing",{NewAntiphishingCode:t.NewAntiphishingCode},{headers:c});case 6:l=e.sent,t.isLoadingUpdateAntiP=!1,l.data.Success?(d=l.data,v=d.SecurityVerificationToken,f=d.ErrorCode,t.verifyData.Token=v,t.verifyData.errorCode=f,t.verifyData.showDialog=!0):(98===(m=l.data.ErrorCode)&&(t.verifyData.Token="",t.verifyData.errorCode=m,t.verifyData.showDialog=!0),t.showError=!0,t.errorMsg=l.data.Message),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(3),t.isLoadingUpdateAntiP=!1,t.showError=!0,t.errorMsg=e.t0.response.data.Message;case 16:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}),c=(o(1764),o(19)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"change-antiphishing-container"},[o("a-row",{staticClass:"stick-margin"},[o("a-col",{attrs:{span:24}},[o("a-card",{staticClass:"border-none"},[o("a-breadcrumb",{staticClass:"Roboto-Regular"},[o("a-breadcrumb-item",[o("a",{on:{click:function(e){t.$router.push(t.localeRoute("/account/security"))}}},[t._v(t._s(t.$t("header_text_security")))])]),t._v(" "),o("a-breadcrumb-item",[t._v(t._s(t.$t("text_anti_phishing_code")))])],1)],1)],1)],1),t._v(" "),o("a-row",{staticClass:"change-antip-card-row",attrs:{type:"flex",align:"middle",justify:"center"}},[o("a-col",{attrs:{span:24}},[o("div",{class:t.isMobile?"change-antip-card-container-mobile":"change-antip-card-container"},[o("div",{staticClass:"change-antip-card-outer-head-content text-center"},[o("h2",{staticClass:"Roboto-Medium"},[t._v(t._s(t.$t("antiphishing_text_code")))]),t._v(" "),o("a-alert",{staticClass:"border-none",attrs:{type:"info","show-icon":""}},[o("span",{staticClass:"Roboto-Regular",attrs:{slot:"description"},slot:"description"},[t._v("\n              "+t._s(t.$t("antiphishing_text_warning"))+"\n            ")])]),t._v(" "),t.showError?o("a-alert",{staticClass:"Roboto-Regular alert-box",attrs:{type:"warning",description:t.errorMsg,"show-icon":"",closable:""},on:{close:function(e){return t.showError=!1}}}):t._e()],1),t._v(" "),o("a-card",{staticClass:"change-antip-card border-none"},[o("div",{staticClass:"text-left"},[o("h3",{staticClass:"Roboto-Medium change-antip-card-title"},[t._v("\n              "+t._s(t.$t("antiphishing_text_title"))+"\n            ")]),t._v(" "),o("p",{staticClass:"Roboto-Regular"},[t._v("\n              "+t._s(t.$t("antiphishing_text_description"))+"\n            ")])]),t._v(" "),o("div",{staticClass:"text-left"},[o("h3",{staticClass:"Roboto-Medium change-antip-card-title"},[t._v("\n              "+t._s(t.$t("antiphishing_text_how_it_work_title"))+"\n            ")]),t._v(" "),o("p",{staticClass:"Roboto-Regular"},[t._v("\n              "+t._s(t.$t("antiphishing_text_how_it_work_description"))+"\n            ")])]),t._v(" "),o("div",{staticClass:"change-antip-card-media-section",style:t.isMobile?"height: 143px !important":null},[o("div",{staticClass:"change-antip-card-media-content"},[o("div",{staticClass:"change-antip-card-input-group"},[o("a-row",{staticClass:"change-antip-media-row",attrs:{type:"flex",align:"middle",gutter:16}},[o("a-col",{attrs:{span:10}},[o("span",{staticClass:"Roboto-Regular",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.$t("antiphishing_text_code")))])]),t._v(" "),o("a-col",{attrs:{span:14}},[o("a-input-search",{staticClass:"anti-code-input",attrs:{size:"small",placeholder:t.$t("antiphishing_text")},model:{value:t.NewAntiphishingCode,callback:function(e){t.NewAntiphishingCode=e},expression:"NewAntiphishingCode"}},[o("a-button",{attrs:{slot:"enterButton",disabled:!0,type:"primary",size:"small"},slot:"enterButton"},[t._v("\n                        xxxxxx\n                      ")])],1)],1)],1)],1)])]),t._v(" "),o("div",{staticClass:"change-antip-card-footer",style:t.isMobile?"margin-top: 20px":null},[o("a-button",{staticClass:"border-none Roboto-Medium",attrs:{disabled:""===t.NewAntiphishingCode,type:"primary",size:"large",loading:t.isLoadingUpdateAntiP,block:""},on:{click:t.updateAntiP}},[t._v("\n              "+t._s(t.$t("antiphishing_text_confirm")))])],1)])],1)])],1),t._v(" "),t.verifyData.showDialog?o("SecurityVerifyModal",{attrs:{verifyData:t.verifyData}}):t._e()],1)}),[],!1,null,"052385a8",null);e.default=component.exports;installComponents(component,{SecurityVerifyModal:o(1315).default})}}]);