(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1398:function(e,t,l){var content=l(1789);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(54).default)("758f6dca",content,!0,{sourceMap:!1})},1788:function(e,t,l){"use strict";var n=l(1398);l.n(n).a},1789:function(e,t,l){(t=l(53)(!1)).push([e.i,".email-enable-page[data-v-8b3bd47e]{min-height:100vh;display:flex;justify-content:center;align-items:center}.email-enable-card[data-v-8b3bd47e]{width:384px;box-shadow:0 0 10px rgba(0,0,0,.10196);border-radius:3px}.email-enable-heading[data-v-8b3bd47e]{color:#212833;margin-bottom:10px}.email-input[data-v-8b3bd47e]{margin:20px auto 10px}",""]),e.exports=t},2721:function(e,t,l){"use strict";l.r(t);l(25);var n=l(14),r=(l(42),l(43),l(24),{name:"EnableEmailAuthenticatorPage",middleware:["auth"],components:{VueTelInput:l(1321).a},head:function(){return{title:"E-posta | Cointral.com"}},data:function(){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return{emailRgx:e,enableEmail:{EmailAddress:""},enableEmailRules:{EmailAddress:[{validator:function(t,l,n){""===l?n(new Error("Please enter your E-mail")):e.test(l.toString().toLowerCase())||n(new Error("Please Enter a Valid Email Address")),n()},trigger:"change"}]},enableEmailLoading:!1}},methods:{enableEmailVerif:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var l,n,r,o,c,d,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=e.$axios,n=e.$cookies,r=e.$store,o=e.$config.FINANCE_API_URL,c={Authorization:"Bearer "+n.get("Token")},e.enableEmailLoading=!0,t.next=5,l.post(o+"/EnableEmail",e.enableEmail,{headers:c});case 5:d=t.sent,e.enableEmailLoading=!1,d.data.Success&&(m=d.data.SecurityVerificationToken,r.commit("auth/setVerficationData",{SecurityVerificationToken:m,status:!0,redirectURI:"/account"}),e.$router.push(e.localeRoute("/security-verification")));case 8:case"end":return t.stop()}}),t)})))()}},computed:{isValidEmail:function(){return this.emailRgx.test(this.enableEmail.EmailAddress.toString().toLowerCase())}}}),o=(l(1788),l(19)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"email-enable-page"},[l("a-card",{staticClass:"email-enable-card border-none"},[l("h2",{staticClass:"email-enable-heading Roboto-Medium",attrs:{align:"center"}},[e._v("\n      "+e._s(e.$t("text_enable_email_auth"))+"\n    ")]),e._v(" "),l("a-form-model",{ref:"enableEmailFormRef",attrs:{model:e.enableEmail,rules:e.enableEmailRules,layout:"vertical"}},[l("a-form-model-item",{attrs:{"has-feedback":"",prop:"EmailAddress"}},[l("template",{slot:"label"},[l("span",{staticClass:"email-label Roboto-Medium"},[e._v(e._s(e.$t("text_email")))])]),e._v(" "),l("a-input",{staticClass:"Roboto-Regular",attrs:{type:"email",size:"large"},model:{value:e.enableEmail.EmailAddress,callback:function(t){e.$set(e.enableEmail,"EmailAddress",t)},expression:"enableEmail.EmailAddress"}})],2)],1),e._v(" "),l("a-button",{staticClass:"Roboto-Medium",attrs:{disabled:!e.isValidEmail,size:"large",type:"primary",loading:e.enableEmailLoading,block:""},on:{click:e.enableEmailVerif}},[e._v(e._s(e.$t("text_approve")))])],1)],1)}),[],!1,null,"8b3bd47e",null);t.default=component.exports}}]);