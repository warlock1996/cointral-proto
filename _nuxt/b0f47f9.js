(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1276:function(t,e,o){"use strict";var r=o(27),n=o(84),l=o(96),c=o(294),d=o(201),f=o(47),m=o(145).f,v=o(203).f,_=o(44).f,h=o(1295).trim,x=r.Number,y=x,C=x.prototype,S="Number"==l(o(202)(C)),w="trim"in String.prototype,T=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var o,r,n,l=(e=w?e.trim():h(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(o=e.charCodeAt(2))||120===o)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>n)return NaN;return parseInt(c,r)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof x&&(S?f((function(){C.valueOf.call(o)})):"Number"!=l(o))?c(new y(T(e)),o,x):T(e)};for(var R,E=o(34)?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;E.length>I;I++)n(y,R=E[I])&&!n(x,R)&&_(x,R,v(y,R));x.prototype=C,C.constructor=x,o(48)(r,"Number",x)}},1295:function(t,e,o){var r=o(29),n=o(95),l=o(47),c=o(1296),d="["+c+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),v=function(t,e,o){var n={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),f=n[t]=d?e(_):c[t];o&&(n[o]=f),r(r.P+r.F*d,"String",n)},_=v.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=v},1296:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},1414:function(t,e,o){t.exports=o.p+"a17d93f7e7245e1f443604dc69ab3fbb.svg"},1415:function(t,e,o){var content=o(1812);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("03769be7",content,!0,{sourceMap:!1})},1416:function(t,e,o){var content=o(1814);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("78ffed80",content,!0,{sourceMap:!1})},1417:function(t,e,o){var content=o(1816);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("34c8de1e",content,!0,{sourceMap:!1})},1670:function(t,e,o){"use strict";o.r(e);o(1276);var r={props:{subtitle:{required:!1,type:String},stepNo:{required:!1,type:Number}}},n=(o(1811),o(19)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-center Roboto-Medium"},[t.stepNo?o("h2",[t._v(t._s(t.$t("text_step"))+" "+t._s(t.stepNo))]):t._e(),t._v(" "),t.subtitle?o("p",{staticClass:"card-2fa-subtitle"},[t._v(t._s(t.subtitle))]):t._e(),t._v(" "),t._t("store-icons"),t._v(" "),t._t("content"),t._v(" "),t._t("footer")],2)}),[],!1,null,"620cc86a",null);e.default=component.exports},1671:function(t,e,o){"use strict";o.r(e);var r={props:{title:{required:!0,type:String},type:{required:!0,type:String}},methods:{visitStore:function(){"apple"===this.type?window.open("https://apps.apple.com/tr/app/google-authenticator/id388497605?"):window.open("https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2")}}},n=(o(1813),o(19)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"store-button cursor-pointer",on:{click:t.visitStore}},[t._t("icon"),t._v(" "),o("div",[o("p",{staticClass:"download-text"},[t._v("Download from")]),t._v(" "),o("p",{staticClass:"store-name"},[t._v(t._s(t.title))])])],2)}),[],!1,null,"00eb5668",null);e.default=component.exports},1811:function(t,e,o){"use strict";var r=o(1415);o.n(r).a},1812:function(t,e,o){(e=o(53)(!1)).push([t.i,".text-center[data-v-620cc86a]{text-align:center}.card-2fa-subtitle[data-v-620cc86a]{color:#778090;width:70%;margin:auto}",""]),t.exports=e},1813:function(t,e,o){"use strict";var r=o(1416);o.n(r).a},1814:function(t,e,o){(e=o(53)(!1)).push([t.i,".store-button[data-v-00eb5668]{display:flex;align-items:center;justify-content:space-around;border:1px solid #eceaef;border-radius:3px;padding:20px;width:192px;height:64px}.download-text[data-v-00eb5668],.store-name[data-v-00eb5668]{margin:0;text-align:justify}.store-name[data-v-00eb5668]{font-size:20px}.store-icon[data-v-00eb5668]{font-size:30px}",""]),t.exports=e},1815:function(t,e,o){"use strict";var r=o(1417);o.n(r).a},1816:function(t,e,o){(e=o(53)(!1)).push([t.i,".page-2fa[data-v-08a26ff0]{min-height:100vh;display:flex;justify-content:center;align-items:center}.secondary-text-enable2fa[data-v-08a26ff0]{font-size:12px;color:#89919f}.primary-text-enable2fa[data-v-08a26ff0]{font-size:12px}.card-2fa[data-v-08a26ff0]{padding:30px;box-shadow:0 0 10px rgba(0,0,0,.16078);border-radius:3px;width:736px;max-width:736px;min-height:450px}.step-content[data-v-08a26ff0]{margin:20px auto;max-width:300px}.enable-2fa-step-title[data-v-08a26ff0]{color:#778090}.store-icons[data-v-08a26ff0]{margin:30px auto;max-width:400px;display:flex;justify-content:space-around;align-items:center}.btn-2fa[data-v-08a26ff0]{margin-top:10px;height:40px;width:250px}.btn-2fa-back[data-v-08a26ff0]{position:absolute;left:20px;bottom:40px;cursor:pointer}.verify-fieldset[data-v-08a26ff0]{margin:20px auto}.qr-container[data-v-08a26ff0]{display:flex;justify-content:center;align-items:center;margin:auto 5px}.qr-container-item[data-v-08a26ff0]{margin:auto 10px}.key-container[data-v-08a26ff0]{display:flex;justify-content:center;align-items:center}.form-2fa[data-v-08a26ff0]{margin:auto;max-width:60%}.form-model-item[data-v-08a26ff0]{margin-bottom:0}.card-2fa-mobile[data-v-08a26ff0]{box-shadow:0 0 10px rgba(0,0,0,.16078);border-radius:3px;width:100vw;min-height:450px}.store-icons-mobile[data-v-08a26ff0]{margin:30px auto;max-width:400px}.form-2fa-mobile[data-v-08a26ff0]{margin:auto;max-width:100%}",""]),t.exports=e},2747:function(t,e,o){"use strict";o.r(e);o(63),o(32),o(31),o(22),o(55),o(64),o(71);var r=o(26),n=(o(83),o(25),o(13)),l=o(1670),c=o(1671),d=o(295);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"EnableGoogleAuthenticatorPage",middleware:["auth"],components:{Step:l.default,StoreButton:c.default},head:function(){return{title:this.$t("title_text_google_authanticator")}},data:function(){return{currentStep:0,vrfTypes:[],phn:"",cst:"",vrf:{SmsCode:"",EmailCode:"",TwoFaCode:""},enable2fa:{QRImage:null,SecretKey:null,SecurityVerificationToken:null},isSmsCodeSent:!1,isEmailCodeSent:!1,smsTimer:60,emailTimer:60,smsIntrvl:null,emailIntrvl:null,get2faLoading:!1,enable2faloading:!1,securityVerifyLoading:!1,showError:!1,errorMsg:"",isMobile:null}},mounted:function(){var t=this;this.isMobile=window.innerWidth<750,window.addEventListener("resize",(function(){t.isMobile=window.innerWidth<750}))},destroyed:function(){document.removeEventListener("keyup",this.CTA_GOOGLE_SECURITY_VERIFY)},methods:{CTA_GOOGLE_SECURITY_VERIFY:function(t){13===t.keyCode&&this.securityVerify()},get2faSecretKey:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,r,n,l,c,d,f,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,r=t.$cookies,n=t.$config.FINANCE_API_URL,l={Authorization:"Bearer "+r.get("Token")},t.get2faLoading=!0,e.next=5,o.get(n+"/Get2FASecretKey",{headers:l});case 5:c=e.sent,t.get2faLoading=!1,c.data.Success&&(d=c.data,f=d.QRImage,m=d.SecretKey,t.enable2fa.QRImage="data:image/png;base64,"+f,t.enable2fa.SecretKey=m,t.currentStep=1);case 8:case"end":return e.stop()}}),e)})))()},enableTwoFa:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,r,n,l,c,f,m,v,_,h,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,r=t.$cookies,n=t.$config.FINANCE_API_URL,t.clearTimers(),t.vrf.EmailCode=t.vrf.SmsCode=t.vrf.TwoFaCode="",l={Authorization:"Bearer "+r.get("Token")},t.enable2faloading=!0,e.next=7,o.post(n+"/EnableTwoFA",{TwoFaSecretKey:t.enable2fa.SecretKey},{headers:l});case 7:c=e.sent,t.enable2faloading=!1,c.data.Success&&(f=c.data.SecurityVerificationToken,m=Object(d.a)(f),v=m.vrf,_=m.cst,m.phn,h=m.oph,x=m.oem,t.cst=_,t.oph=h,t.oem=x,t.vrfTypes=v.split(","),t.vrfTypes.push("2fa"),t.vrfTypes.push("email"),t.enable2fa.SecurityVerificationToken=f,t.currentStep=3);case 10:case"end":return e.stop()}}),e)})))()},sendCode:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var r,n,l,c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r=e.enable2fa.SecurityVerificationToken,n=e.$axios,l=e.$config,c={Type:t,Token:r},o.prev=3,o.next=6,n.post(l.AUTH_API_URL+"/SendOTP",c);case 6:o.sent.data.Success&&("SMS"===t&&(e.isSmsCodeSent=!0,e.startTimer("SMS"),setTimeout((function(){e.isSmsCodeSent=!1}),6e4)),"EMAIL"===t&&(e.isEmailCodeSent=!0,e.startTimer("EMAIL"),setTimeout((function(){e.isEmailCodeSent=!1}),6e4))),o.next=13;break;case 10:o.prev=10,o.t0=o.catch(3),e.$router.push(e.localeRoute("/account/security"));case 13:case"end":return o.stop()}}),o,null,[[3,10]])})))()},securityVerify:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,r,n,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.clearTimers(),o=t.enable2fa.SecurityVerificationToken,r=t.$axios,n=t.$config,l=m({Token:o},t.vrf),e.prev=4,t.securityVerifyLoading=!0,e.next=8,r.post(n.AUTH_API_URL+"/SecurityVerify",l);case 8:c=e.sent,t.securityVerifyLoading=!1,"Success"in c.data&&c.data.Success?t.$router.push(t.localeRoute("/account/security")):(t.showError=!0,t.errorMsg=c.data.Message),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),t.$router.push(t.localeRoute("/account/security"));case 16:case"end":return e.stop()}}),e,null,[[4,13]])})))()},startTimer:function(t){var e=this;"SMS"===t&&(this.smsIntrvl=setInterval((function(){0===e.smsTimer&&(e.smsTimer=60,clearInterval(e.smsIntrvl)),e.smsTimer-=1}),1e3)),"EMAIL"===t&&(this.emailIntrvl=setInterval((function(){0===e.emailTimer&&(e.emailTimer=60,clearInterval(e.emailIntrvl)),e.emailTimer-=1}),1e3))},clearTimers:function(){clearInterval(this.smsIntrvl),clearInterval(this.emailIntrvl),this.smsTimer=this.emailTimer=60,this.isSmsCodeSent=this.isEmailCodeSent=!1}},computed:{validateVrfCodes:function(){var t=!0;return this.vrfTypes.includes("sms")&&(t*=""!==this.vrf.SmsCode&&6===this.vrf.SmsCode.length),this.vrfTypes.includes("email")&&(t*=""!==this.vrf.EmailCode&&6===this.vrf.EmailCode.length),this.vrfTypes.includes("2fa")&&(t*=""!==this.vrf.TwoFaCode&&6===this.vrf.TwoFaCode.length),t}},filters:{maskMail:function(t){return t.slice(0,t.indexOf("@")).split("").map((function(t){return"*"})).join("")+t.slice(t.indexOf("@"))}},watch:{currentStep:function(t){3===t?document.addEventListener("keyup",this.CTA_GOOGLE_SECURITY_VERIFY):document.removeEventListener("keyup",this.CTA_GOOGLE_SECURITY_VERIFY)}}},_=(o(1815),o(19)),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-2fa"},[r("div",{staticClass:"card-wrapper-2fa"},[r("h1",{staticClass:"Roboto-Medium",attrs:{align:"center"}},[t._v("\n      "+t._s(t.$t("text_enable_google_authenticator"))+"\n    ")]),t._v(" "),r("a-row",[r("a-col",{attrs:{span:t.isMobile?24:16}},[r("a-card",{class:t.isMobile?"card-2fa-mobile border-none":"card-2fa border-none"},[r("a-steps",{attrs:{direction:t.isMobile?"vertical":"horizontal",labelPlacement:"vertical",size:"small"},model:{value:t.currentStep,callback:function(e){t.currentStep=e},expression:"currentStep"}},[r("a-step",{attrs:{disabled:!0}},[r("template",{slot:"title"},[r("span",{staticClass:"enable-2fa-step-title Roboto-Medium"},[t._v(t._s(t.$t("text_download_app")))])])],2),t._v(" "),r("a-step",{attrs:{disabled:!0}},[r("template",{slot:"title"},[r("span",{staticClass:"enable-2fa-step-title Roboto-Medium"},[t._v(t._s(t.$t("text_scan_qr")))])])],2),t._v(" "),r("a-step",{attrs:{disabled:!0}},[r("template",{slot:"title"},[r("span",{staticClass:"enable-2fa-step-title Roboto-Medium"},[t._v(t._s(t.$t("text_save_key_title")))])])],2),t._v(" "),r("a-step",{attrs:{disabled:!0}},[r("template",{slot:"title"},[r("span",{staticClass:"enable-2fa-step-title Roboto-Medium"},[t._v(t._s(t.$t("text_google_auth_enabled")))])])],2)],1),t._v(" "),0===t.currentStep?r("div",[r("Step",{attrs:{subtitle:t.$t("text_download_install"),stepNo:t.currentStep+1}},[t.isMobile?r("a-col",{staticClass:"store-icons-mobile",attrs:{slot:"store-icons",align:"center"},slot:"store-icons"},[r("a-col",{attrs:{span:24}},[r("StoreButton",{attrs:{title:"App Store"}},[r("div",{attrs:{slot:"icon"},slot:"icon"},[r("a-icon",{staticClass:"store-icon",attrs:{type:"apple",theme:"filled"}})],1)])],1),t._v(" "),r("a-col",{staticStyle:{"margin-top":"20px","margin-bottom":"10px"},attrs:{span:24}},[r("StoreButton",{attrs:{title:"Google Play"}},[r("div",{attrs:{slot:"icon"},slot:"icon"},[r("a-icon",{staticClass:"store-icon",attrs:{type:"google-circle",theme:"filled"}})],1)])],1)],1):r("div",{staticClass:"store-icons",attrs:{slot:"store-icons"},slot:"store-icons"},[r("StoreButton",{attrs:{title:"App Store",type:"apple"}},[r("div",{attrs:{slot:"icon"},slot:"icon"},[r("a-icon",{staticClass:"store-icon",attrs:{type:"apple",theme:"filled"}})],1)]),t._v(" "),r("StoreButton",{attrs:{title:"Google Play",type:"google"}},[r("div",{attrs:{slot:"icon"},slot:"icon"},[r("a-icon",{staticClass:"store-icon",attrs:{type:"google-circle",theme:"filled"}})],1)])],1),t._v(" "),r("div",{staticClass:"step-content",attrs:{slot:"content"},slot:"content"}),t._v(" "),r("div",{staticClass:"step-footer",attrs:{slot:"footer"},slot:"footer"},[r("a-button",{staticClass:"btn-2fa Roboto-Medium",attrs:{type:"primary",loading:t.get2faLoading},on:{click:t.get2faSecretKey}},[t._v(t._s(t.$t("text_next")))])],1)],1)],1):t._e(),t._v(" "),1===t.currentStep?r("div",[r("Step",{attrs:{subtitle:t.$t("text_download_install"),stepNo:t.currentStep+1}},[r("div",{staticClass:"step-content",attrs:{slot:"content"},slot:"content"},[r("div",{staticClass:"qr-container"},[r("div",{staticClass:"qr-container-item"},[r("img",{attrs:{src:t.enable2fa.QRImage,width:"100px"}})]),t._v(" "),r("div",{staticClass:"qr-container-item"},[r("p",{staticClass:"Roboto-Medium",attrs:{align:"left"}},[t._v("\n                      "+t._s(t.$t("text_cant_scan"))+"\n                    ")]),t._v(" "),r("h4",{staticClass:"Roboto-Medium",attrs:{align:"left"}},[t._v("\n                      "+t._s(t.enable2fa.SecretKey)+"\n                    ")])])])]),t._v(" "),r("div",{staticClass:"step-footer",attrs:{slot:"footer"},slot:"footer"},[r("a-button",{staticClass:"btn-2fa Roboto-Medium",style:t.isMobile?"max-width: 50vw; left: 20vw":null,attrs:{type:"primary"},on:{click:function(e){t.currentStep=2}}},[t._v(t._s(t.$t("text_next")))])],1)])],1):t._e(),t._v(" "),2===t.currentStep?r("div",[r("Step",{attrs:{subtitle:t.$t("text_save_key"),stepNo:t.currentStep+1}},[r("div",{staticClass:"step-content",attrs:{slot:"content"},slot:"content"},[r("div",{staticClass:"key-container"},[r("div",[r("img",{attrs:{src:o(1414),alt:"image_needed"}})]),t._v(" "),r("div",[r("p",{staticClass:"Roboto-Regular",attrs:{align:"left"}},[t._v("\n                      "+t._s(t.$t("text_reset_google_auth"))+"\n                    ")]),t._v(" "),r("h4",{staticClass:"Roboto-Medium",attrs:{align:"left"}},[t._v("\n                      "+t._s(t.enable2fa.SecretKey)+"\n                    ")])])])]),t._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("a-button",{staticClass:"btn-2fa Roboto-Medium",style:t.isMobile?"max-width: 50vw; left: 20vw":null,attrs:{type:"primary",loading:t.enable2faloading},on:{click:t.enableTwoFa}},[t._v(t._s(t.$t("text_next")))])],1)])],1):t._e(),t._v(" "),3===t.currentStep?r("div",[r("div",{class:t.isMobile?"form-2fa-mobile":"form-2fa"},[t.showError?r("a-alert",{staticClass:"my-10",attrs:{message:t.$t("warning_title"),description:t.errorMsg,type:"warning",closable:""},on:{close:function(e){return t.showError=!1}}}):t._e(),t._v(" "),t.vrfTypes.includes("sms")?r("div",{staticClass:"verify-fieldset"},[r("p",{staticClass:"Roboto-Medium primary-text-enable2fa",staticStyle:{margin:"0"}},[t._v("\n                  "+t._s(t.$t("text_phone_verification"))+"\n                ")]),t._v(" "),r("a-form-model",{staticClass:"form-model"},[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:16}},[r("a-form-model-item",{staticClass:"mr-0 form-model-item"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:"Kodu Giriniz",size:"large"},model:{value:t.vrf.SmsCode,callback:function(e){t.$set(t.vrf,"SmsCode",e)},expression:"vrf.SmsCode"}})],1)],1),t._v(" "),r("a-col",{attrs:{span:8}},[r("a-form-model-item",{staticClass:"mr-0 form-model-item"},[r("a-button",{staticClass:"submit-button-color Roboto-Regular",attrs:{disabled:t.isSmsCodeSent,type:"secondary",size:"large",block:""},on:{click:function(e){return t.sendCode("SMS")}}},[t._v("\n                          "+t._s(t.isSmsCodeSent?t.smsTimer:t.$t("text_send_code"))+"\n                        ")])],1)],1)],1)],1),t._v(" "),t.isSmsCodeSent?r("p",{staticClass:"Roboto-Medium secondary-text-enable2fa",attrs:{align:"left"}},[t._v("\n                  "+t._s(t.$t("send_sms_text",{phn:t.oph}))+"\n                ")]):t._e()],1):t._e(),t._v(" "),t.vrfTypes.includes("email")?r("div",{staticClass:"verify-fieldset"},[r("p",{staticClass:"Roboto-Medium primary-text-enable2fa",staticStyle:{margin:"0"}},[t._v("\n                  "+t._s(t.$t("text_email_verification"))+"\n                ")]),t._v(" "),r("a-form-model",{staticClass:"form-model"},[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:16}},[r("a-form-model-item",{staticClass:"mr-0 form-model-item"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:"Kodu Giriniz",size:"large"},model:{value:t.vrf.EmailCode,callback:function(e){t.$set(t.vrf,"EmailCode",e)},expression:"vrf.EmailCode"}})],1)],1),t._v(" "),r("a-col",{attrs:{span:8}},[r("a-form-model-item",{staticClass:"mr-0 form-model-item"},[r("a-button",{staticClass:"submit-button-color Roboto-Regular",attrs:{disabled:t.isEmailCodeSent,type:"secondary",size:"large",block:""},on:{click:function(e){return t.sendCode("EMAIL")}}},[t._v("\n                          "+t._s(t.isEmailCodeSent?t.emailTimer:t.$t("text_send_code"))+"\n                        ")])],1)],1)],1)],1),t._v(" "),t.isEmailCodeSent?r("p",{staticClass:"Roboto-Medium secondary-text-enable2fa"},[t._v("\n                  "+t._s(t.$t("send_email_text",{email:t.oem}))+"\n                ")]):t._e()],1):t._e(),t._v(" "),r("div",{staticClass:"verify-fieldset"},[r("p",{staticClass:"Roboto-Medium primary-text-enable2fa",staticStyle:{margin:"0"}},[t._v("\n                  "+t._s(t.$t("text_google_verification"))+"\n                ")]),t._v(" "),r("a-form-model",{staticClass:"form-model"},[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:24}},[r("a-form-model-item",{staticClass:"mr-0 form-model-item"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:"Kodu Giriniz",size:"large"},model:{value:t.vrf.TwoFaCode,callback:function(e){t.$set(t.vrf,"TwoFaCode",e)},expression:"vrf.TwoFaCode"}})],1)],1)],1)],1),t._v(" "),r("p",{staticClass:"Roboto-Medium secondary-text-enable2fa"},[t._v("\n                  "+t._s(t.$t("text_google_code_enter"))+"\n                ")])],1),t._v(" "),r("nuxt-link",{attrs:{to:"#"}},[r("p",{staticClass:"help-text Roboto-Medium secondary-text-enable2fa"},[r("u",[t._v(t._s(t.$t("text_security_verify_not_available")))])])]),t._v(" "),r("a-button",{staticClass:"btn-2fa Roboto-Medium",style:t.isMobile?"max-width: 50vw; left: 40vw":null,attrs:{disabled:!t.validateVrfCodes,type:"primary",loading:t.securityVerifyLoading},on:{click:t.securityVerify}},[t._v(t._s(t.$t("text_next")))])],1)]):t._e(),t._v(" "),t.currentStep>0?r("div",{staticClass:"btn-2fa-back Roboto-Medium secondary-text-enable2fa",on:{click:function(e){t.currentStep=t.currentStep-1}}},[r("a-icon",{attrs:{type:"left"}}),t._v(" "),r("span",[r("u",[t._v(t._s(t.$t("text_previous")))])])],1):t._e()],1)],1)],1)],1)])}),[],!1,null,"08a26ff0",null);e.default=component.exports;installComponents(component,{StoreButton:o(1671).default,Step:o(1670).default})}}]);