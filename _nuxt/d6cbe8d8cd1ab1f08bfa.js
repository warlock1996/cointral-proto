(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{2760:function(e,t,r){"use strict";r.r(t);r(25);var n=r(13),o=r(1275),c=r(1299),l=r(1300),d=r(1301),m={middleware:["public"],layout:"login",components:{Index:o.default,SignUpFormHeader:c.default,SignUpFormContent:l.default,SignUpFormFooter:d.default},head:function(){return{title:"Kayıt Ol | Cointral.com"}},data:function(){return{showError:!1,errorMsg:"",error4Msg:null,isSignUpLoading:!1}},methods:{createAccount:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,c,l,d,data,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n=t.$axios,o=t.$config,c=t.$store,l=t.$router,t.isSignUpLoading=!0,r.next=5,n.post(o.AUTH_API_URL+"/SignUp",e.user,{headers:{captcha:e.token}});case 5:d=r.sent,data=d.data,200===d.status&&data.Success?(m=data.SecurityVerificationToken,c.commit("auth/setVerficationData",{SecurityVerificationToken:m,status:!0,redirectURI:"/"}),t.isSignUpLoading=!1,l.push(t.localeRoute("/security-verification"))):t.isSignUpLoading=!1,4===data.ErrorCode&&(t.error4Msg=data.Message),r.next=17;break;case 12:r.prev=12,r.t0=r.catch(0),t.showError=!0,t.errorMsg=r.t0.response.Message,t.isSignUpLoading=!1;case 17:case"end":return r.stop()}}),r,null,[[0,12]])})))()}}},f=r(19),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Index",{class:{"block-pointer":e.isSignUpLoading}},[r("template",{slot:"auth-card-header"},[r("SignUpFormHeader")],1),e._v(" "),r("template",{slot:"auth-card-feedback"},[e.showError?r("a-alert",{staticClass:"my-10",attrs:{message:e.$t("warning_title"),description:e.errorMsg,type:"warning",closable:""}}):e._e()],1),e._v(" "),r("template",{slot:"auth-card-content"},[r("SignUpFormContent",{attrs:{isSignUpLoading:e.isSignUpLoading,error4Msg:e.error4Msg},on:{signUp:e.createAccount,"clear-error4":function(t){e.error4Msg=null}}})],1),e._v(" "),r("template",{slot:"auth-card-actions"},[r("SignUpFormFooter")],1)],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SignUpFormHeader:r(1299).default,SignUpFormContent:r(1300).default,SignUpFormFooter:r(1301).default,Index:r(1275).default})}}]);