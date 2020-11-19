(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1272:function(t,e,o){"use strict";o.r(e);var r={layout:"login",data:function(){return{isMobile:null}},mounted:function(){var t=this;this.isMobile=window.innerWidth<1e3,window.addEventListener("resize",(function(){t.isMobile=window.innerWidth<1e3}))}},n=o(19),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{margin:"50px 0"}},[o("a-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[o("a-col",{attrs:{xs:t.isMobile?24:20,md:8}},[o("a-card",{staticClass:"card-box-shadow border-none",attrs:{bordered:!1}},[t._t("auth-card-header"),t._v(" "),o("div",{staticClass:"my-20"},[t._t("auth-card-feedback")],2),t._v(" "),t._t("auth-card-content"),t._v(" "),t._t("auth-card-actions")],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},1289:function(t,e,o){"use strict";o(42),o(43),o(24);e.a={data:function(){return{emailRegex:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,passwordRegex:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/}},methods:{EmailValidator:function(t,e,o){""===e?o(new Error(this.$t("validation_text_email"))):this.emailRegex.test(e.toString().toLowerCase())||o(new Error(this.$t("validation_text_valid_email"))),o()},PasswordValidator:function(t,e,o){""===e?o(new Error(this.$t("validation_text_password"))):this.passwordRegex.test(e.toString())?o():o(new Error(this.$t("password_text_regex")))},PasswordValidatorEmail:function(t,e,o){""===e?o(new Error(this.$t("validation_text_password"))):this.passwordRegex.test(e.toString())?(""!==this.signUpEmail.confirmPassword&&this.$refs.signUpEmailFormRef.validateField("confirmPassword"),o()):o(new Error(this.$t("password_text_regex")))},PasswordValidatorMobile:function(t,e,o){""===e?o(new Error(this.$t("validation_text_password"))):this.passwordRegex.test(e.toString())?(""!==this.signUpMobile.confirmPassword&&this.$refs.signUpMobileFormRef.validateField("confirmPassword"),o()):o(new Error(this.$t("password_text_regex")))},confirmPasswordValidatorEmail:function(t,e,o){""===e?o(new Error(this.$t("validation_text_password_again"))):e!==this.signUpEmail.Password?o(new Error(this.$t("validation_text_password_match"))):o()},confirmPasswordValidatorMobile:function(t,e,o){""===e?o(new Error(this.$t("validation_text_password_again"))):e!==this.signUpMobile.Password?o(new Error(this.$t("validation_text_password_match"))):o()},ResetPasswordValidator:function(t,e,o){""===e?o(new Error(this.$t("validation_text_password"))):this.passwordRegex.test(e.toString())?(""!==this.resetPasswords.ConfirmPassword&&this.$refs.resetPasswordsRef.validateField("ConfirmPassword"),o()):o(new Error(this.$t("password_text_regex")))},ConfirmResetPasswordValidator:function(t,e,o){""===e?o(new Error(this.$t("validation_text_password_again"))):e!==this.resetPasswords.NewPassword?o(new Error(this.$t("validation_text_password_match"))):o()},DocumentTypeValidator:function(t,e,o){""!==e&&null!==e&&e?o():o(new Error(this.$t("validation_text_document_type")))}}}},1500:function(t,e,o){var content=o(2492);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("a9791300",content,!0,{sourceMap:!1})},1667:function(t,e,o){"use strict";o.r(e);o(114),o(82);var r=o(1324),n={mixins:[o(1289).a],props:{isResetPasswordLoading:{type:Boolean,default:!1}},components:{VueTelInput:r.a},data:function(){return{tabList:[{key:"Email",scopedSlots:{tab:"titleSlot"}},{key:"Mobile",scopedSlots:{tab:"titleSlot"}}],activeKey:"Email",resetPassword:{Email:"",PhoneNumber:"",AreaCode:""},resetPasswordRules:{Email:[{validator:this.EmailValidator,trigger:"change"}]},isValidPhoneNo:!1}},methods:{emitResetPassword:function(){var t=this.resetPassword,e=t.Email,o=t.PhoneNumber,r=t.AreaCode;if("Email"===this.activeKey)this.$emit("resetPassword",{Email:e});else{var n=o.slice(1).replace(r,"").split(" ").join("");this.$emit("resetPassword",{PhoneNumber:n,AreaCode:r})}},validateMobileNumber:function(t){this.isValidPhoneNo=t.isValid,this.resetPassword.AreaCode=t.country.dialCode}}},l=(o(2491),o(19)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-card",{staticClass:"border-none",attrs:{bordered:!1,tabList:t.tabList,"active-tab-key":t.activeKey},on:{tabChange:function(e){return t.activeKey=e}},scopedSlots:t._u([{key:"titleSlot",fn:function(e){return o("span",{class:{"login-tab-title-active":e.key===t.activeKey,"login-tab-title-inactive":e.key!==t.activeKey}},[t._v("\n    "+t._s(e.key)+"\n  ")])}}])},[t._v(" "),"Email"===t.activeKey?o("div",[o("a-form-model",{attrs:{layout:"vertical",model:t.resetPassword,rules:t.resetPasswordRules},on:{submit:function(e){return e.preventDefault(),t.emitResetPassword(e)}}},[o("a-form-model-item",{attrs:{label:t.$t("login_text_email_info"),"has-feedback":"",prop:"Email"}},[o("a-input",{staticClass:"Roboto-Regular",attrs:{type:"email",size:"large"},model:{value:t.resetPassword.Email,callback:function(e){t.$set(t.resetPassword,"Email",e)},expression:"resetPassword.Email"}})],1),t._v(" "),o("a-form-model-item",[o("a-button",{staticClass:"login-button border-none Roboto-Medium",attrs:{loading:t.isResetPasswordLoading,disabled:!t.emailRegex.test(t.resetPassword.Email),type:"primary",size:"large",block:""},on:{click:t.emitResetPassword}},[t._v(t._s(t.$t("login_text_reset_password")))])],1)],1)],1):t._e(),t._v(" "),"Mobile"===t.activeKey?o("div",[o("a-form-model",{attrs:{layout:"vertical"},on:{submit:function(e){return e.preventDefault(),t.emitResetPassword(e)}}},[o("a-form-model-item",{attrs:{label:t.$t("login_text_phone_info")}},[o("vue-tel-input",{class:{invalidPhoneNo:!t.isValidPhoneNo},attrs:{inputClasses:"ant-input ant-input-lg",dynamicPlaceholder:!0},on:{validate:t.validateMobileNumber},model:{value:t.resetPassword.PhoneNumber,callback:function(e){t.$set(t.resetPassword,"PhoneNumber",e)},expression:"resetPassword.PhoneNumber"}}),t._v(" "),t.isValidPhoneNo?t._e():o("span",{style:{color:"red"}},[t._v("\n          "+t._s(t.$t("login_text_invalid_phone"))+"\n        ")])],1),t._v(" "),o("a-form-model-item",[o("a-button",{staticClass:"login-button border-none Roboto-Medium",attrs:{loading:t.isResetPasswordLoading,disabled:!t.isValidPhoneNo,type:"primary",size:"large",block:""},on:{click:t.emitResetPassword}},[t._v(t._s(t.$t("login_text_reset_password")))])],1)],1)],1):t._e()])}),[],!1,null,"5aaac100",null);e.default=component.exports},2491:function(t,e,o){"use strict";var r=o(1500);o.n(r).a},2492:function(t,e,o){(e=o(53)(!1)).push([t.i,".login-button[data-v-5aaac100]{background-color:var(--login-button-bg-color);color:var(--login-button-text-color)}.login-tab-title-inactive[data-v-5aaac100]{color:var(--login-tab-title-inactive-color)}.login-tab-title-active[data-v-5aaac100]{color:var(--login-tab-title-active-color)}.invalidPhoneNo.vue-tel-input[data-v-5aaac100]{border:1px solid red!important}",""]),t.exports=e},2752:function(t,e,o){"use strict";o.r(e);o(25);var r=o(14),n=o(1272),l=o(1667),d={middleware:["public"],layout:"login",components:{Index:n.default,ResetPasswordContent:l.default},head:function(){return{title:"Parola Sıfırla | Cointral.com"}},data:function(){return{isResetPasswordLoading:!1,showError:!1,errorMsg:""}},methods:{resetPassword:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var r,n,l,d,c,w,m,_,h,v,f;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,e.isResetPasswordLoading=!0,r=e.$axios,e.$cookies,n=e.$config.FINANCE_API_URL,l=e.$store,d=e.$router,o.next=5,r.post(n+"/ResetPassword",t);case 5:c=o.sent,w=c.data,m=w.Success,_=w.Message,h=w.RequiredSecurityVerification,v=w.ResetVerificationToken,m?h&&(l.commit("auth/setVerficationData",{status:!0,redirectURI:"/login",SecurityVerificationToken:v}),d.push(e.localeRoute("/security-verification"))):(e.showError=!0,e.errorMsg=_),o.next=18;break;case 14:o.prev=14,o.t0=o.catch(0),o.t0.response&&(f=response.data.Message,e.showError=!0,e.errorMsg=f),console.error(o.t0);case 18:return o.prev=18,e.isResetPasswordLoading=!1,o.finish(18);case 21:case"end":return o.stop()}}),o,null,[[0,14,18,21]])})))()}}},c=o(19),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Index",[o("template",{slot:"auth-card-header"},[o("h2",{staticClass:"text-center"},[t._v(t._s(t.$t("reset_password")))])]),t._v(" "),o("template",{slot:"auth-card-feedback"},[t.showError?o("a-alert",{attrs:{message:t.$t("warning_title"),description:t.errorMsg,type:"warning",closable:""},on:{close:function(e){return t.showError=!1}}}):t._e()],1),t._v(" "),o("template",{slot:"auth-card-content"},[o("ResetPasswordContent",{attrs:{isResetPasswordLoading:t.isResetPasswordLoading},on:{resetPassword:t.resetPassword}})],1)],2)}),[],!1,null,"e3d5ded8",null);e.default=component.exports;installComponents(component,{ResetPasswordContent:o(1667).default,Index:o(1272).default})}}]);