(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1275:function(t,e,r){"use strict";r.r(e);var o={layout:"login",data:function(){return{isMobile:null}},mounted:function(){var t=this;this.isMobile=window.innerWidth<1e3,window.addEventListener("resize",(function(){t.isMobile=window.innerWidth<1e3}))}},n=r(19),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{margin:"50px 0"}},[r("a-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[r("a-col",{attrs:{xs:t.isMobile?24:20,md:8}},[r("a-card",{staticClass:"card-box-shadow border-none",attrs:{bordered:!1}},[t._t("auth-card-header"),t._v(" "),r("div",{staticClass:"my-20"},[t._t("auth-card-feedback")],2),t._v(" "),t._t("auth-card-content"),t._v(" "),t._t("auth-card-actions")],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},1292:function(t,e,r){"use strict";r(42),r(43),r(22);e.a={data:function(){return{emailRegex:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,passwordRegex:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/}},methods:{EmailValidator:function(t,e,r){""===e?r(new Error(this.$t("validation_text_email"))):this.emailRegex.test(e.toString().toLowerCase())||r(new Error(this.$t("validation_text_valid_email"))),r()},PasswordValidator:function(t,e,r){""===e?r(new Error(this.$t("validation_text_password"))):this.passwordRegex.test(e.toString())?r():r(new Error(this.$t("password_text_regex")))},PasswordValidatorEmail:function(t,e,r){""===e?r(new Error(this.$t("validation_text_password"))):this.passwordRegex.test(e.toString())?(""!==this.signUpEmail.confirmPassword&&this.$refs.signUpEmailFormRef.validateField("confirmPassword"),r()):r(new Error(this.$t("password_text_regex")))},PasswordValidatorMobile:function(t,e,r){""===e?r(new Error(this.$t("validation_text_password"))):this.passwordRegex.test(e.toString())?(""!==this.signUpMobile.confirmPassword&&this.$refs.signUpMobileFormRef.validateField("confirmPassword"),r()):r(new Error(this.$t("password_text_regex")))},confirmPasswordValidatorEmail:function(t,e,r){""===e?r(new Error(this.$t("validation_text_password_again"))):e!==this.signUpEmail.Password?r(new Error(this.$t("validation_text_password_match"))):r()},confirmPasswordValidatorMobile:function(t,e,r){""===e?r(new Error(this.$t("validation_text_password_again"))):e!==this.signUpMobile.Password?r(new Error(this.$t("validation_text_password_match"))):r()},ResetPasswordValidator:function(t,e,r){""===e?r(new Error(this.$t("validation_text_password"))):this.passwordRegex.test(e.toString())?(""!==this.resetPasswords.ConfirmPassword&&this.$refs.resetPasswordsRef.validateField("ConfirmPassword"),r()):r(new Error(this.$t("password_text_regex")))},ConfirmResetPasswordValidator:function(t,e,r){""===e?r(new Error(this.$t("validation_text_password_again"))):e!==this.resetPasswords.NewPassword?r(new Error(this.$t("validation_text_password_match"))):r()},DocumentTypeValidator:function(t,e,r){""!==e&&null!==e&&e?r():r(new Error(this.$t("validation_text_document_type")))}}}},1395:function(t,e,r){var o=r(29),n=r(47),l=r(95),c=/"/g,d=function(t,e,r,o){var n=String(l(t)),d="<"+e;return""!==r&&(d+=" "+r+'="'+String(o).replace(c,"&quot;")+'"'),d+">"+n+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(d),o(o.P+o.F*n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",r)}},1497:function(t,e,r){var content=r(2486);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("66d4f249",content,!0,{sourceMap:!1})},2484:function(t,e,r){"use strict";r(1395)("sub",(function(t){return function(){return t(this,"sub","","")}}))},2485:function(t,e,r){"use strict";var o=r(1497);r.n(o).a},2486:function(t,e,r){(e=r(53)(!1)).push([t.i,".verify-text-secondary[data-v-f9a47e24]{color:#9aa0ac}.disable2fa-text-container[data-v-f9a47e24]{margin:15px auto;color:#6992bc}.security-verify-header[data-v-f9a47e24]{margin-bottom:30px}",""]),t.exports=e},2759:function(t,e,r){"use strict";r.r(e);r(63),r(32),r(31),r(22),r(55),r(64),r(71),r(115),r(25);var o=r(13),n=r(26),l=(r(83),r(2484),r(1275)),c=r(41),d=(r(1292),r(295));function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{Index:l.default},layout:"login",middleware:function(t){var e=t.app,r=t.store,o=t.redirect;r.state.auth.verficationData.status||o(e.localePath("/login"))},head:function(){return{title:"Güvenlik Onayı | Cointral.com"}},data:function(){return{TwoFaTabs:[{key:"SMS",scopedSlots:{tab:"titleSlot"}},{key:"2FA",scopedSlots:{tab:"titleSlot"}}],TwoFaActiveTabKey:"SMS",vrf:{SmsCode:"",EmailCode:"",TwoFaCode:""},resetPasswords:{NewPassword:"",ConfirmPassword:""},resetPasswordRules:{NewPassword:[{validator:this.ResetPasswordValidator,trigger:"change"}],ConfirmPassword:[{validator:this.ConfirmResetPasswordValidator,trigger:"change"}]},vrfTypes:[],phn:"",cst:"",subject:"",oem:"",oph:"",ttl:"",dsc:"",isSmsCodeSent:!1,isEmailCodeSent:!1,isValidVerifInfo:!1,smsTimer:60,emailTimer:60,smsIntrvl:null,emailIntrvl:null,showError:!1,errorMsg:"",isSecurityVerifyLoading:!1,isLoadingSendCodeSMS:!1,isLoadingSendCodeEmail:!1}},mounted:function(){document.addEventListener("keyup",this.CTA_SECURITY_VERIFY);var t=this.$store.state.auth.verficationData,e=t.SecurityVerificationToken,r=(t.redirectURI,Object(d.a)(e)),sub=r.sub,o=r.phn,n=r.cst,l=r.vrf,c=r.oem,m=r.oph,f=r.ttl,v=r.dsc;this.subject=sub,this.phn=o,this.cst=n,this.vrfTypes=l.split(","),this.oem=c,this.oph=m,this.ttl=f,this.dsc=v},destroyed:function(){document.removeEventListener("keyup",this.CTA_SECURITY_VERIFY)},methods:f(f({CTA_SECURITY_VERIFY:function(t){13===t.keyCode&&("RESETPASSWORD"===this.subject?this.resetPassword():this.securityVerify())}},Object(c.d)({setLoggedIn:"auth/setLoggedIn"})),{},{sendCode:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n,l,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.$store.state.auth.verficationData.SecurityVerificationToken,n=e.$axios,l=e.$config,c={Type:t,Token:o},r.prev=3,"SMS"===t&&(e.isLoadingSendCodeSMS=!0),"EMAIL"===t&&(e.isLoadingSendCodeEmail=!0),r.next=8,n.post(l.AUTH_API_URL+"/SendOTP",c);case 8:r.sent.data.Success&&("SMS"===t&&(e.isLoadingSendCodeSMS=!1,e.isSmsCodeSent=!0,e.startTimer("SMS"),setTimeout((function(){e.isSmsCodeSent=!1}),6e4)),"EMAIL"===t&&(e.isLoadingSendCodeEmail=!1,e.isEmailCodeSent=!0,e.startTimer("EMAIL"),setTimeout((function(){e.isEmailCodeSent=!1}),6e4))),r.next=17;break;case 12:r.prev=12,r.t0=r.catch(3),e.isLoadingSendCodeSMS=!1,e.isLoadingSendCodeEmail=!1,e.$router.push(e.localeRoute("/login"));case 17:case"end":return r.stop()}}),r,null,[[3,12]])})))()},securityVerify:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n,l,c,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.clearTimers(),r=t.$store.state.auth.verficationData,o=r.SecurityVerificationToken,n=r.redirectURI,l=t.$axios,c=t.$config,d=f({Token:o},t.vrf),e.prev=4,t.isSecurityVerifyLoading=!0,e.next=8,l.post(c.AUTH_API_URL+"/SecurityVerify",d);case 8:"Success"in(m=e.sent).data&&m.data.Success?(m.data.Token&&m.data.RefreshToken&&(t.$cookies.set("Token",m.data.Token),t.$cookies.set("RefreshToken",m.data.RefreshToken),t.setLoggedIn(!0)),t.isSecurityVerifyLoading=!1,t.$router.replace(t.localeRoute(n))):(t.isSecurityVerifyLoading=!1,t.showError=!0,t.errorMsg=m.data.Message),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),t.isSecurityVerifyLoading=!1,t.$notification.error({message:"Hata"});case 16:case"end":return e.stop()}}),e,null,[[4,12]])})))()},startTimer:function(t){var e=this;"SMS"===t&&(this.smsIntrvl=setInterval((function(){0===e.smsTimer&&(e.smsTimer=60,clearInterval(e.smsIntrvl)),e.smsTimer-=1}),1e3)),"EMAIL"===t&&(this.emailIntrvl=setInterval((function(){0===e.emailTimer&&(e.emailTimer=60,clearInterval(e.emailIntrvl)),e.emailTimer-=1}),1e3))},clearTimers:function(){clearInterval(this.smsIntrvl),clearInterval(this.emailIntrvl),this.smsTimer=this.emailTimer=60,this.isSmsCodeSent=this.isEmailCodeSent=!1},resetPassword:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n,l,c,d,m,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isSecurityVerifyLoading=!0,r=t.$store.state.auth.verficationData,o=r.SecurityVerificationToken,r.redirectURI,n=t.$axios,l=t.$router,c=t.$config,e.next=6,n.post(c.FINANCE_API_URL+"/ResetPasswordVerify",f(f({Token:o},t.vrf),{},{NewPassword:t.resetPasswords.NewPassword}));case 6:d=e.sent,m=d.data,v=m.Message,m.Success?l.replace(t.localeRoute("/login")):(t.showError=!0,t.errorMsg=v),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),e.t0.response&&(t.showError=!0,t.errorMsg=Message);case 16:return e.prev=16,t.isSecurityVerifyLoading=!1,e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,13,16,19]])})))()}}),computed:{validateVrfCodes:function(){var t=!0;return this.vrfTypes.includes("sms")&&(t*=""!==this.vrf.SmsCode&&6===this.vrf.SmsCode.length),this.vrfTypes.includes("email")&&(t*=""!==this.vrf.EmailCode&&6===this.vrf.EmailCode.length),this.vrfTypes.includes("2fa")&&(t*=""!==this.vrf.TwoFaCode&&6===this.vrf.TwoFaCode.length),t},DisableCheckVerify:function(){if("TWOFATOKEN"===this.subject)if(this.vrfTypes.includes("sms")&&this.vrfTypes.includes("2fa")){if("SMS"===this.TwoFaActiveTabKey)return this.vrf.SmsCode.length<6;if("2FA"===TwoFaActiveTabKey)return this.vrf.TwoFaCode.length<6}else{if(1===this.vrfTypes.length&&this.vrfTypes.includes("sms"))return this.vrf.SmsCode.length<6;if(1===this.vrfTypes.length&&this.vrfTypes.includes("2fa"))return this.vrf.TwoFaCode.length<6}}},filters:{maskMail:function(t){return t.slice(0,t.indexOf("@")).split("").map((function(t){return"*"})).join("")+t.slice(t.indexOf("@"))},maskPhone:function(t){var e=t.slice(3,-4);return t.slice(0,3)+e.split("").map((function(t){return"*"})).join("")+t.slice(-4)}},watch:{TwoFaActiveTabKey:function(t){"SMS"===t&&(this.vrf.TwoFaCode=""),"2FA"===t&&(this.vrf.SmsCode="")}}},_=(r(2485),r(19)),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"security-verify-page"}},[r("Index",[r("template",{slot:"auth-card-content"},[r("div",{staticClass:"security-verify-header text-center"},[r("h2",{staticClass:"Roboto-Medium"},[t._v(t._s(t.$t(this.ttl)))]),t._v(" "),r("p",{staticClass:"verify-text-secondary Roboto-Regular"},[t._v(t._s(t.$t(this.dsc)))])]),t._v(" "),"DISABLE2FA"===t.subject?r("a-alert",{staticClass:"disable2fa-text-container border-none",attrs:{description:t.$t("text_disable_2fa_warning"),type:"info","show-icon":""}}):t._e(),t._v(" "),"DISABLESMS"===t.subject?r("a-alert",{staticClass:"disable2fa-text-container border-none",attrs:{description:t.$t("text_disable_sms_warning"),type:"info","show-icon":""}}):t._e(),t._v(" "),t.showError?r("a-alert",{staticClass:"my-10",attrs:{message:t.$t("warning_title"),description:t.errorMsg,type:"warning",closable:""},on:{close:function(e){return t.showError=!1}}}):t._e(),t._v(" "),"TWOFATOKEN"!==t.subject?r("div",[t.vrfTypes.includes("sms")?r("div",{staticClass:"my-10"},[r("p",{staticClass:"Roboto-Regular mb-0"},[t._v(t._s(t.$t("verify_phone_title")))]),t._v(" "),r("a-form-model",{staticClass:"verify-form-model"},[r("a-row",{attrs:{gutter:1}},[r("a-col",{attrs:{span:16}},[r("a-form-model-item",{staticClass:"mr-0 mb-0"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:t.$t("verify_enter_code"),size:"large"},model:{value:t.vrf.SmsCode,callback:function(e){t.$set(t.vrf,"SmsCode",e)},expression:"vrf.SmsCode"}})],1)],1),t._v(" "),r("a-col",{attrs:{span:8}},[r("a-form-model-item",{staticClass:"mr-0 mb-0"},[r("a-button",{staticClass:"submit-button-color Roboto-Regular",attrs:{disabled:t.isSmsCodeSent,loading:t.isLoadingSendCodeSMS,type:"secondary",size:"large",block:""},on:{click:function(e){return t.sendCode("SMS")}}},[t._v("\n                    "+t._s(t.isSmsCodeSent?t.smsTimer:t.$t("text_send_code"))+"\n                  ")])],1)],1)],1)],1),t._v(" "),t.isSmsCodeSent?r("p",{staticClass:"Roboto-Regular mb-0",attrs:{align:"left"}},[t._v("\n            "+t._s(t.$t("send_sms_text",{phn:t.oph}))+"\n          ")]):t._e()],1):t._e(),t._v(" "),t.vrfTypes.includes("email")?r("div",{staticClass:"my-10"},[r("p",{staticClass:"Roboto-Regular mb-0"},[t._v(t._s(t.$t("verify_email_title")))]),t._v(" "),r("a-form-model",{staticClass:"verify-form-model"},[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:16}},[r("a-form-model-item",{staticClass:"mr-0 mb-0"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:t.$t("verify_enter_code"),size:"large"},model:{value:t.vrf.EmailCode,callback:function(e){t.$set(t.vrf,"EmailCode",e)},expression:"vrf.EmailCode"}})],1)],1),t._v(" "),r("a-col",{attrs:{span:8}},[r("a-form-model-item",{staticClass:"mr-0 mb-0"},[r("a-button",{staticClass:"submit-button-color Roboto-Regular",attrs:{loading:t.isLoadingSendCodeEmail,disabled:t.isEmailCodeSent,type:"secondary",size:"large",block:""},on:{click:function(e){return t.sendCode("EMAIL")}}},[t._v("\n                    "+t._s(t.isEmailCodeSent?t.emailTimer:t.$t("text_send_code"))+"\n                  ")])],1)],1)],1)],1),t._v(" "),t.isEmailCodeSent?r("p",{staticClass:"Roboto-Regular mb-0",attrs:{align:"left"}},[t._v("\n            "+t._s(t.$t("send_email_text",{email:t.oem}))+"\n          ")]):t._e()],1):t._e(),t._v(" "),t.vrfTypes.includes("2fa")?r("div",{staticClass:"my-10"},[r("p",{staticClass:"Roboto-Regular mb-0"},[t._v(t._s(t.$t("verify_2fa_title")))]),t._v(" "),r("a-form-model",{staticClass:"verify-form-model"},[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:24}},[r("a-form-model-item",{staticClass:"mr-0 mb-0"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:t.$t("verify_enter_code"),size:"large"},model:{value:t.vrf.TwoFaCode,callback:function(e){t.$set(t.vrf,"TwoFaCode",e)},expression:"vrf.TwoFaCode"}})],1)],1)],1)],1),t._v(" "),r("p",{staticClass:"Roboto-Regular mb-0",attrs:{align:"left"}},[t._v("\n            "+t._s(t.$t("verify_2fa_info"))+"\n          ")])],1):t._e()]):t._e(),t._v(" "),"TWOFATOKEN"===t.subject?r("div",[t.vrfTypes.includes("sms")&&t.vrfTypes.includes("2fa")?r("a-tabs",{model:{value:t.TwoFaActiveTabKey,callback:function(e){t.TwoFaActiveTabKey=e},expression:"TwoFaActiveTabKey"}},t._l(t.TwoFaTabs,(function(e){return r("a-tab-pane",{key:e.key,staticClass:"Roboto-Medium"},["SMS"===e.key?r("span",{class:{"tab-label-active":e.key===t.TwoFaActiveTabKey,"tab-label-inactive":e.key!==t.TwoFaActiveTabKey},attrs:{slot:"tab"},slot:"tab"},[t._v(t._s(e.key))]):t._e(),t._v(" "),"2FA"===e.key?r("span",{class:{"tab-label-active":e.key===t.TwoFaActiveTabKey,"tab-label-inactive":e.key!==t.TwoFaActiveTabKey},attrs:{slot:"tab"},slot:"tab"},[t._v(t._s(e.key))]):t._e(),t._v(" "),"SMS"===t.TwoFaActiveTabKey?r("div",[r("p",{staticClass:"Roboto-Regular mb-0"},[t._v("\n                "+t._s(t.$t("verify_phone_title"))+"\n              ")]),t._v(" "),r("a-form-model",{staticClass:"verify-form-model"},[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:16}},[r("a-form-model-item",{staticClass:"mr-0 mb-0"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:t.$t("verify_enter_code"),size:"large"},model:{value:t.vrf.SmsCode,callback:function(e){t.$set(t.vrf,"SmsCode",e)},expression:"vrf.SmsCode"}})],1)],1),t._v(" "),r("a-col",{attrs:{span:8}},[r("a-form-model-item",{staticClass:"mr-0 mb-0"},[r("a-button",{staticClass:"submit-button-color Roboto-Regular",attrs:{disabled:t.isSmsCodeSent,loading:t.isLoadingSendCodeSMS,type:"secondary",size:"large",block:""},on:{click:function(e){return t.sendCode("SMS")}}},[t._v("\n                        "+t._s(t.isSmsCodeSent?t.smsTimer:t.$t("text_send_code"))+"\n                      ")])],1)],1)],1)],1),t._v(" "),t.isSmsCodeSent?r("p",{staticClass:"Roboto-Regular mb-0",attrs:{align:"left"}},[t._v("\n                "+t._s(t.$t("send_sms_text",{phn:t.oph}))+"\n              ")]):t._e()],1):t._e(),t._v(" "),"2FA"===t.TwoFaActiveTabKey?r("div",[r("p",{staticClass:"Roboto-Regular mb-0"},[t._v(t._s(t.$t("verify_2fa_title")))]),t._v(" "),r("a-form-model",{staticClass:"verify-form-model"},[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:24}},[r("a-form-model-item",{staticClass:"mr-0 mb-0"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:t.$t("verify_enter_code"),size:"large"},model:{value:t.vrf.TwoFaCode,callback:function(e){t.$set(t.vrf,"TwoFaCode",e)},expression:"vrf.TwoFaCode"}})],1)],1)],1)],1),t._v(" "),r("p",{staticClass:"Roboto-Regular mb-0",attrs:{align:"left"}},[t._v("\n                "+t._s(t.$t("verify_2fa_info"))+"\n              ")])],1):t._e()])})),1):t._e(),t._v(" "),1===t.vrfTypes.length&&t.vrfTypes.includes("sms")?r("div",[r("p",{staticClass:"Roboto-Regular mb-0"},[t._v(t._s(t.$t("verify_phone_title")))]),t._v(" "),r("a-form-model",{staticClass:"verify-form-model"},[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:16}},[r("a-form-model-item",{staticClass:"mr-0 mb-0"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:t.$t("verify_enter_code"),size:"large"},model:{value:t.vrf.SmsCode,callback:function(e){t.$set(t.vrf,"SmsCode",e)},expression:"vrf.SmsCode"}})],1)],1),t._v(" "),r("a-col",{attrs:{span:8}},[r("a-form-model-item",{staticClass:"mr-0 mb-0"},[r("a-button",{staticClass:"submit-button-color Roboto-Regular",attrs:{disabled:t.isSmsCodeSent,loading:t.isLoadingSendCodeSMS,type:"secondary",size:"large",block:""},on:{click:function(e){return t.sendCode("SMS")}}},[t._v("\n                    "+t._s(t.isSmsCodeSent?t.smsTimer:t.$t("text_send_code"))+"\n                  ")])],1)],1)],1)],1),t._v(" "),t.isSmsCodeSent?r("p",{staticClass:"Roboto-Regular mb-0",attrs:{align:"left"}},[t._v("\n            "+t._s(t.$t("send_sms_text",{phn:t.oph}))+"\n          ")]):t._e()],1):t._e(),t._v(" "),1===t.vrfTypes.length&&t.vrfTypes.includes("2fa")?r("div",[r("p",{staticClass:"Roboto-Regular mb-0"},[t._v(t._s(t.$t("verify_2fa_title")))]),t._v(" "),r("a-form-model",{staticClass:"verify-form-model"},[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:24}},[r("a-form-model-item",{staticClass:"mr-0 mb-0"},[r("a-input",{staticClass:"Roboto-Regular",attrs:{maxLength:6,placeholder:t.$t("verify_enter_code"),size:"large"},model:{value:t.vrf.TwoFaCode,callback:function(e){t.$set(t.vrf,"TwoFaCode",e)},expression:"vrf.TwoFaCode"}})],1)],1)],1)],1),t._v(" "),r("p",{staticClass:"Roboto-Regular mb-0",attrs:{align:"left"}},[t._v("\n            "+t._s(t.$t("verify_2fa_info"))+"\n          ")])],1):t._e()],1):t._e(),t._v(" "),"RESETPASSWORD"===t.subject?r("div",[r("a-form-model",{ref:"resetPasswordsRef",staticClass:"verify-form-model Roboto-Regular",attrs:{model:t.resetPasswords,layout:"vertical",rules:t.resetPasswordRules}},[r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:24}},[r("a-form-model-item",{staticClass:"mr-0 mb-0",attrs:{"has-feedback":"",prop:"NewPassword"}},[r("template",{slot:"label"},[r("p",{staticClass:"input-label mb-0"},[t._v("\n                    "+t._s(t.$t("verify_new_password"))+"\n                  ")])]),t._v(" "),r("a-input-password",{staticClass:"Roboto-Regular",attrs:{placeholder:t.$t("verify_new_password"),size:"large"},model:{value:t.resetPasswords.NewPassword,callback:function(e){t.$set(t.resetPasswords,"NewPassword",e)},expression:"resetPasswords.NewPassword"}})],2)],1)],1),t._v(" "),r("a-row",{attrs:{gutter:8}},[r("a-col",{attrs:{span:24}},[r("a-form-model-item",{staticClass:"mr-0 mb-0",attrs:{"has-feedback":"",prop:"ConfirmPassword')"}},[r("template",{slot:"label"},[r("p",{staticClass:"input-label mb-0"},[t._v("\n                    "+t._s(t.$t("verify_confirm_password"))+"\n                  ")])]),t._v(" "),r("a-input-password",{staticClass:"Roboto-Regular",attrs:{placeholder:t.$t("verify_confirm_password"),size:"large"},model:{value:t.resetPasswords.ConfirmPassword,callback:function(e){t.$set(t.resetPasswords,"ConfirmPassword",e)},expression:"resetPasswords.ConfirmPassword"}})],2)],1)],1)],1)],1):t._e(),t._v(" "),"RESETPASSWORD"===t.subject?r("a-button",{staticClass:"primary-button Roboto-Medium",staticStyle:{"margin-top":"20px"},attrs:{loading:t.isSecurityVerifyLoading,type:"primary",size:"large",block:""},on:{click:t.resetPassword}},[t._v(t._s(t.$t("verify_send_button")))]):r("a-button",{staticClass:"primary-button Roboto-Medium",staticStyle:{"margin-top":"20px"},attrs:{loading:t.isSecurityVerifyLoading,disabled:t.DisableCheckVerify,type:"primary",size:"large",block:""},on:{click:t.securityVerify}},[t._v(t._s(t.$t("verify_send_button")))])],1)],2)],1)}),[],!1,null,"f9a47e24",null);e.default=component.exports;installComponents(component,{Index:r(1275).default})}}]);