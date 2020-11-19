(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1272:function(e,t,o){"use strict";o.r(t);var r={layout:"login",data:function(){return{isMobile:null}},mounted:function(){var e=this;this.isMobile=window.innerWidth<1e3,window.addEventListener("resize",(function(){e.isMobile=window.innerWidth<1e3}))}},n=o(19),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{margin:"50px 0"}},[o("a-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[o("a-col",{attrs:{xs:e.isMobile?24:20,md:8}},[o("a-card",{staticClass:"card-box-shadow border-none",attrs:{bordered:!1}},[e._t("auth-card-header"),e._v(" "),o("div",{staticClass:"my-20"},[e._t("auth-card-feedback")],2),e._v(" "),e._t("auth-card-content"),e._v(" "),e._t("auth-card-actions")],2)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},1289:function(e,t,o){"use strict";o(42),o(43),o(24);t.a={data:function(){return{emailRegex:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,passwordRegex:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/}},methods:{EmailValidator:function(e,t,o){""===t?o(new Error(this.$t("validation_text_email"))):this.emailRegex.test(t.toString().toLowerCase())||o(new Error(this.$t("validation_text_valid_email"))),o()},PasswordValidator:function(e,t,o){""===t?o(new Error(this.$t("validation_text_password"))):this.passwordRegex.test(t.toString())?o():o(new Error(this.$t("password_text_regex")))},PasswordValidatorEmail:function(e,t,o){""===t?o(new Error(this.$t("validation_text_password"))):this.passwordRegex.test(t.toString())?(""!==this.signUpEmail.confirmPassword&&this.$refs.signUpEmailFormRef.validateField("confirmPassword"),o()):o(new Error(this.$t("password_text_regex")))},PasswordValidatorMobile:function(e,t,o){""===t?o(new Error(this.$t("validation_text_password"))):this.passwordRegex.test(t.toString())?(""!==this.signUpMobile.confirmPassword&&this.$refs.signUpMobileFormRef.validateField("confirmPassword"),o()):o(new Error(this.$t("password_text_regex")))},confirmPasswordValidatorEmail:function(e,t,o){""===t?o(new Error(this.$t("validation_text_password_again"))):t!==this.signUpEmail.Password?o(new Error(this.$t("validation_text_password_match"))):o()},confirmPasswordValidatorMobile:function(e,t,o){""===t?o(new Error(this.$t("validation_text_password_again"))):t!==this.signUpMobile.Password?o(new Error(this.$t("validation_text_password_match"))):o()},ResetPasswordValidator:function(e,t,o){""===t?o(new Error(this.$t("validation_text_password"))):this.passwordRegex.test(t.toString())?(""!==this.resetPasswords.ConfirmPassword&&this.$refs.resetPasswordsRef.validateField("ConfirmPassword"),o()):o(new Error(this.$t("password_text_regex")))},ConfirmResetPasswordValidator:function(e,t,o){""===t?o(new Error(this.$t("validation_text_password_again"))):t!==this.resetPasswords.NewPassword?o(new Error(this.$t("validation_text_password_match"))):o()},DocumentTypeValidator:function(e,t,o){""!==t&&null!==t&&t?o():o(new Error(this.$t("validation_text_document_type")))}}}},1294:function(e,t,o){"use strict";o.r(t);var r={},n=(o(2315),o(19)),component=Object(n.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text-center"},[t("h2",{staticClass:"Roboto-Medium"},[this._v(this._s(this.$t("login_title_create_account")))]),this._v(" "),t("p",{staticClass:"login-card-subtitle Roboto-Regular"},[this._v("\n    "+this._s(this.$t("login_subtitle_create_account"))+"\n  ")])])}),[],!1,null,"162a91c1",null);t.default=component.exports},1295:function(e,t,o){"use strict";o.r(t);o(63),o(32),o(31),o(24),o(55);var r=o(26),n=(o(82),o(651),o(25),o(14)),l=o(1324);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={mixins:[o(1289).a],components:{VueTelInput:l.a},props:{error4Msg:{type:String,default:null},isSignUpLoading:{type:Boolean,default:!1}},beforeMount:function(){var e=this.$route.query.type;if(e){if("email"===e){var t=this.$route.query.email;this.signUpEmail.Email=t}if("phone"===e){var o=this.$route.query.phone;this.activeKey="Mobile",this.signUpMobile.PhoneNumber=o}}},data:function(){var e=this;return{tabList:[{key:"Email",scopedSlots:{tab:"titleSlot"}},{key:"Mobile",scopedSlots:{tab:"titleSlot"}}],activeKey:"Email",emailTouched:!1,mobileTouched:!1,emailReference:["2"],mobileReference:["2"],phoneTouched:!1,signUpEmail:{Email:"",Password:"",confirmPassword:"",ReferenceCode:""!==this.$route.query.ref?this.$route.query.ref:"",DeviceId:"",agreeTerms:!1},signUpMobile:{AreaCode:"",PhoneNumber:"",Password:"",confirmPassword:"",ReferenceCode:""!==this.$route.query.ref?this.$route.query.ref:"",DeviceId:"",agreeTerms:!1},isValidPhoneNo:!0,PhoneNoDetails:{},emailSignUpRules:{Email:[{validator:this.EmailValidator,trigger:"change"}],Password:[{validator:this.PasswordValidatorEmail,trigger:"change"}],confirmPassword:[{validator:this.confirmPasswordValidatorEmail,trigger:"change"}],agreeTerms:[{validator:function(t,o,r){o||"Mobile"===e.activeKey?r():r(new Error("validation_text_terms"))},trigger:"change"}]},mobileSignUpRules:{Password:[{validator:this.PasswordValidatorMobile,trigger:"change"}],confirmPassword:[{validator:this.confirmPasswordValidatorMobile,trigger:"change"}],agreeTerms:[{validator:function(t,o,r){o||"Email"===e.activeKey?r():r(new Error("validation_text_terms"))},trigger:"change"}]}}},mounted:function(){var e=this;document.addEventListener("keydown",(function(t){var o=e.activeKey;if(13===t.keyCode)switch(o){case"Email":e.emitEmailSignUp();break;case"Mobile":e.emitMobileSignUp()}})),this.setDeviceId()},methods:{setDeviceId:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e,e.$fingerPrint2.get({canvas:!0,ie_activex:!0,screen_resolution:!0},(function(e){var t=e.map((function(component){return component.value})),r=o.$fingerPrint2.x64hash128(t.join(""),31);o.signUpEmail.DeviceId=r,o.signUpMobile.DeviceId=r}));case 2:case"end":return t.stop()}}),t)})))()},emitEmailSignUp:function(){var e=this;this.$refs.signUpEmailFormRef.validate((function(t){t&&e.$emit("signUp",e.signUpEmail)}))},emitMobileSignUp:function(){var e,t=this,o=this.signUpMobile.PhoneNumber,r=this.PhoneNoDetails.country.dialCode.length+1;e=o.startsWith("+")?o.slice(r).split(" ").join(""):o,this.$refs.signUpMobileFormRef.validate((function(o){o&&t.isValidPhoneNo&&t.$emit("signUp",d(d({},t.signUpMobile),{},{PhoneNumber:e}))}))},validateMobileNumber:function(e){this.PhoneNoDetails=e,this.isValidPhoneNo=!this.phoneTouched||e.isValid,this.signUpMobile.AreaCode=e.country.dialCode},onPhoneFocus:function(e){this.isValidPhoneNo=this.phoneTouched,this.phoneTouched=!0,this.mobileTouched=!0},onPhoneInput:function(e,t){this.isValidPhoneNo=!this.phoneTouched||t.isValid},onTabChange:function(e){switch(this.activeKey=e,e){case"Email":this.$refs.signUpMobileFormRef.clearValidate();break;case"Mobile":this.$refs.signUpEmailFormRef.clearValidate()}}},watch:{"signUpMobile.PhoneNumber":function(){""===this.signUpMobile.PhoneNumber&&(this.isValidPhoneNo=!0)}}},f=(o(2317),o(2319),o(19)),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("client-only",[o("a-card",{staticClass:"border-none",attrs:{bordered:!1,tabList:e.tabList,"active-tab-key":e.activeKey},on:{tabChange:function(t){return e.onTabChange(t)}},scopedSlots:e._u([{key:"titleSlot",fn:function(t){return o("span",{staticClass:"Roboto-Medium",class:{"tab-label-active":t.key===e.activeKey,"tab-label-inactive":t.key!==e.activeKey}},["Email"===t.key?o("span",{attrs:{slot:"tab"},slot:"tab"},[e._v("\n        "+e._s(e.$t("login_tab_email"))+"\n      ")]):e._e(),e._v(" "),"Mobile"===t.key?o("span",{attrs:{slot:"tab"},slot:"tab"},[e._v("\n        "+e._s(e.$t("login_tab_mobile"))+"\n      ")]):e._e()])}}])},[e._v(" "),"Email"===e.activeKey?o("div",[o("a-form-model",{ref:"signUpEmailFormRef",attrs:{model:e.signUpEmail,rules:e.emailSignUpRules,layout:"vertical"}},[o("a-form-model-item",{attrs:{"has-feedback":"",prop:"Email"},on:{submit:function(t){return t.preventDefault(),e.emitEmailSignUp(t)}}},[o("template",{slot:"label"},[o("span",{staticClass:"input-label Roboto-Regular"},[e._v(e._s(e.$t("text_email")))])]),e._v(" "),o("a-input",{attrs:{size:"large"},on:{focus:function(t){e.emailTouched=!0}},model:{value:e.signUpEmail.Email,callback:function(t){e.$set(e.signUpEmail,"Email",t)},expression:"signUpEmail.Email"}})],2),e._v(" "),o("a-form-model-item",{attrs:{"has-feedback":"",prop:"Password"}},[o("template",{slot:"label"},[o("span",{staticClass:"input-label Roboto-Regular"},[e._v(e._s(e.$t("text_password")))])]),e._v(" "),o("a-input-password",{staticClass:"Roboto-Regular",attrs:{size:"large"},on:{focus:function(t){e.emailTouched=!0}},model:{value:e.signUpEmail.Password,callback:function(t){e.$set(e.signUpEmail,"Password",t)},expression:"signUpEmail.Password"}})],2),e._v(" "),o("a-form-model-item",{attrs:{"has-feedback":"",prop:"confirmPassword"}},[o("template",{slot:"label"},[o("span",{staticClass:"input-label Roboto-Regular"},[e._v(e._s(e.$t("text_password_again")))])]),e._v(" "),o("a-input-password",{staticClass:"Roboto-Regular",attrs:{size:"large"},on:{focus:function(t){e.emailTouched=!0}},model:{value:e.signUpEmail.confirmPassword,callback:function(t){e.$set(e.signUpEmail,"confirmPassword",t)},expression:"signUpEmail.confirmPassword"}})],2),e._v(" "),o("a-collapse",{staticClass:"reference-collapse",attrs:{bordered:!1,"expand-icon-position":"right","default-active-key":"1"},scopedSlots:e._u([{key:"expandIcon",fn:function(e){return[o("a-icon",{attrs:{type:"caret-down",rotate:e.isActive?0:180}})]}}],null,!1,1333794751),model:{value:e.emailReference,callback:function(t){e.emailReference=t},expression:"emailReference"}},[e._v(" "),o("a-collapse-panel",{key:"1",staticStyle:{"border-bottom":"none",padding:"0"},attrs:{header:"Referans Kodu"}},[o("a-input",{attrs:{size:"large"},model:{value:e.signUpEmail.ReferenceCode,callback:function(t){e.$set(e.signUpEmail,"ReferenceCode",t)},expression:"signUpEmail.ReferenceCode"}})],1)],1),e._v(" "),e.error4Msg?o("a-alert",{attrs:{message:"Error",description:e.error4Msg,type:"error",closable:""},on:{close:function(t){return e.$emit("clear-error4")}}}):e._e(),e._v(" "),o("a-form-model-item",{attrs:{prop:"agreeTerms"}},[o("a-checkbox",{model:{value:e.signUpEmail.agreeTerms,callback:function(t){e.$set(e.signUpEmail,"agreeTerms",t)},expression:"signUpEmail.agreeTerms"}},[e._v("\n              "+e._s(e.$t("login_text_term_of_use"))+"\n              "),o("span",{staticClass:"Roboto-Medium"},[e._v(e._s(e.$t("login_text_cointral_terms")))])])],1),e._v(" "),o("a-form-model-item",[o("a-button",{staticClass:"primary-button border-none Roboto-Medium",attrs:{loading:e.isSignUpLoading,type:"primary",size:"large",block:""},on:{click:e.emitEmailSignUp}},[e._v(e._s(e.$t("login_text_create_account")))])],1)],1)],1):e._e(),e._v(" "),"Mobile"===e.activeKey?o("div",[o("a-form-model",{ref:"signUpMobileFormRef",attrs:{model:e.signUpMobile,rules:e.mobileSignUpRules,layout:"vertical"},on:{submit:function(t){return t.preventDefault(),e.emitMobileSignUp(t)}}},[o("a-form-model-item",{attrs:{prop:"PhoneNumber"}},[o("template",{slot:"label"},[o("span",{staticClass:"input-label Roboto-Regular"},[e._v(e._s(e.$t("text_mobile")))])]),e._v(" "),o("vue-tel-input",{class:{invalidPhoneNo:!e.isValidPhoneNo},attrs:{inputClasses:"ant-input ant-input-lg Roboto-Regular",dynamicPlaceholder:!0},on:{validate:e.validateMobileNumber,focus:function(t){return e.onPhoneFocus(t)},input:e.onPhoneInput},model:{value:e.signUpMobile.PhoneNumber,callback:function(t){e.$set(e.signUpMobile,"PhoneNumber",t)},expression:"signUpMobile.PhoneNumber"}}),e._v(" "),e.isValidPhoneNo?e._e():o("span",{staticClass:"Roboto-Regular",style:{color:"red"}},[e._v("\n              Invalid Phone No\n            ")])],2),e._v(" "),o("a-form-model-item",{attrs:{"has-feedback":"",prop:"Password"}},[o("template",{slot:"label"},[o("span",{staticClass:"input-label Roboto-Regular"},[e._v(e._s(e.$t("text_password")))])]),e._v(" "),o("a-input-password",{staticClass:"Roboto-Regular",attrs:{size:"large"},on:{focus:function(t){e.mobileTouched=!0}},model:{value:e.signUpMobile.Password,callback:function(t){e.$set(e.signUpMobile,"Password",t)},expression:"signUpMobile.Password"}})],2),e._v(" "),o("a-form-model-item",{attrs:{"has-feedback":"",prop:"confirmPassword"}},[o("template",{slot:"label"},[o("span",{staticClass:"input-label Roboto-Regular"},[e._v(e._s(e.$t("text_password_again")))])]),e._v(" "),o("a-input-password",{staticClass:"Roboto-Regular",attrs:{size:"large"},on:{focus:function(t){e.mobileTouched=!0}},model:{value:e.signUpMobile.confirmPassword,callback:function(t){e.$set(e.signUpMobile,"confirmPassword",t)},expression:"signUpMobile.confirmPassword"}})],2),e._v(" "),o("a-collapse",{staticClass:"reference-collapse",attrs:{bordered:!1,"expand-icon-position":"right"},scopedSlots:e._u([{key:"expandIcon",fn:function(e){return[o("a-icon",{attrs:{type:"caret-down",rotate:e.isActive?0:180}})]}}],null,!1,1333794751),model:{value:e.mobileReference,callback:function(t){e.mobileReference=t},expression:"mobileReference"}},[e._v(" "),o("a-collapse-panel",{key:"1",staticStyle:{"border-bottom":"none",padding:"0"},attrs:{header:"Referans Kodu"}},[o("a-input",{attrs:{size:"large"},model:{value:e.signUpMobile.ReferenceCode,callback:function(t){e.$set(e.signUpMobile,"ReferenceCode",t)},expression:"signUpMobile.ReferenceCode"}})],1)],1),e._v(" "),e.error4Msg?o("a-alert",{attrs:{message:"Error",description:e.error4Msg,type:"error",closable:""},on:{close:function(t){return e.$emit("clear-error4")}}}):e._e(),e._v(" "),o("a-form-model-item",{attrs:{prop:"agreeTerms"}},[o("a-checkbox",{model:{value:e.signUpMobile.agreeTerms,callback:function(t){e.$set(e.signUpMobile,"agreeTerms",t)},expression:"signUpMobile.agreeTerms"}},[e._v("\n              "+e._s(e.$t("login_text_term_of_use_mobile"))+"\n              "),o("span",{staticClass:"Roboto-Medium"},[e._v(e._s(e.$t("login_text_cointral_terms")))])])],1),e._v(" "),o("a-form-model-item",[o("a-button",{staticClass:"Roboto-Medium",attrs:{loading:e.isSignUpLoading,type:"primary",size:"large",block:""},on:{click:e.emitMobileSignUp}},[e._v(e._s(e.$t("login_text_create_account")))])],1)],1)],1):e._e()])],1)],1)}),[],!1,null,"e0ab0606",null);t.default=component.exports},1296:function(e,t,o){"use strict";o.r(t);var r={},n=(o(2321),o(19)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.$nuxt.$route.path.includes("new-account3")?e._e():o("div",{staticClass:"text-center"},[o("p",[e._v("\n    "+e._s(e.$t("login_text_already_register"))+"\n    "),o("Nuxt-Link",{staticClass:"login-bottom-links",attrs:{to:e.localePath("/login")}},[o("span",[e._v(e._s(e.$t("login_text")))])])],1)])}),[],!1,null,"e944b8e0",null);t.default=component.exports},1426:function(e,t,o){var content=o(2316);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(54).default)("48d90ef4",content,!0,{sourceMap:!1})},1427:function(e,t,o){var content=o(2318);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(54).default)("30c8fb3c",content,!0,{sourceMap:!1})},1428:function(e,t,o){var content=o(2320);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(54).default)("0dee0998",content,!0,{sourceMap:!1})},1429:function(e,t,o){var content=o(2322);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(54).default)("641a7655",content,!0,{sourceMap:!1})},2315:function(e,t,o){"use strict";var r=o(1426);o.n(r).a},2316:function(e,t,o){(t=o(53)(!1)).push([e.i,".login-card-subtitle[data-v-162a91c1]{color:#9aa0ac}",""]),e.exports=t},2317:function(e,t,o){"use strict";var r=o(1427);o.n(r).a},2318:function(e,t,o){(t=o(53)(!1)).push([e.i,".invalidPhoneNo.vue-tel-input[data-v-e0ab0606]{border:1px solid red!important}",""]),e.exports=t},2319:function(e,t,o){"use strict";var r=o(1428);o.n(r).a},2320:function(e,t,o){(t=o(53)(!1)).push([e.i,".reference-collapse{background-color:#fff}.reference-collapse .ant-collapse-header{padding-left:0!important;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.reference-collapse .ant-collapse-content-box{padding-left:0!important;padding-right:0!important}.display-block{display:block}.display-none{display:none}",""]),e.exports=t},2321:function(e,t,o){"use strict";var r=o(1429);o.n(r).a},2322:function(e,t,o){(t=o(53)(!1)).push([e.i,".login-bottom-links[data-v-e944b8e0]{color:var(--login-bottom-links-color)}",""]),e.exports=t}}]);