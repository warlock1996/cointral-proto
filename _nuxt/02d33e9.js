(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1290:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAFKADAAQAAAABAAAAFQAAAACsdft3AAAB+klEQVQ4EY1UQXbaQAyVHCevu/gGpScINwi8hGxjTgCcoGFReNnBKg+ygJ6g5AS429JXkhOEI9AbsE5tFGlcTWxnTOyF50v6+qMZzQxAha89XUXh9Fe9AhW8KiTmBIAYVOHmBKtWkRUu5qAGJYDgPRNgLxpcLNR/aAwnvxeIFCwHrVB5tsJocLURMQT6Ed6ta0oIZ+ugPf1znvVJLJysRlxNnY79rnJltBWqUxKj2+ZWhOBfMmNCV2NEsGV7tBxePpgJPsEu6jd3GpfxnaA4U7F4jQRfiAW4dRvc45zZZxInon40bM0FFz+75FzgJZkbsRO/JmJA2CGEz8pBxFmxGRrzFWRHROjw8vrwkjQ4eZmNWUzeDeOutf8DXw4tN+NU7Ghw2QzvVw3gdZplEnGSc1f4WFJNcrjTIVO+Cmbug09AI3YEqYP/RDsjQjDjiWpuOcsG2B9twI/HxhMfbZ389mS14xJM1ZnUHOTGjLkxo5yTDWdTTGeLzLz9F078ed6VWs4KJSR7y0u/diURUjP61np0xZwVCrF4AzSZq/9eJiacUsH0BtBPFXob94s3/B45z6HSKPFvwIs3agN6W7nz1naAg4LgJXXu9rnNIzpjvLC2AxwWBOInDRs2r7SFllG+h4ZijgY9KZ0Pek9x2fjhnOaZ8uJuun8fP7yvUbqmzxaTaQQAAAAASUVORK5CYII="},1303:function(t,e,n){t.exports=n.p+"59bcd0ad48a59ff1c8ef7b1b5837ebd4.svg"},1378:function(t,e,n){var content=n(1722);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("05467d6a",content,!0,{sourceMap:!1})},1610:function(t,e,n){"use strict";n.r(e);var r={name:"PaymentModal",props:{visible:{type:Boolean,required:!0}},data:function(){return{loading:!1}},methods:{showModal:function(){this.visible=!0},handleOk:function(t){this.$emit("verify")},handleCancel:function(t){this.$emit("closeModal")},closeModal:function(){this.$emit("closeModal")}}},o=n(19),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-modal",{attrs:{"on-ok":"handleOk",footer:null,centered:""},on:{cancel:t.closeModal},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[r("a-col",{staticStyle:{"margin-top":"60px"},attrs:{span:24,align:"center"}},[r("img",{staticStyle:{position:"relative"},attrs:{src:n(1303),alt:"Bulb"}})]),t._v(" "),r("a-col",{staticStyle:{"margin-top":"20px","margin-bottom":"40px"},attrs:{span:24,align:"center"}},[t._v("\n    "+t._s(t.$t("payment_text_kyc"))+"\n  ")]),t._v(" "),r("a-col",{attrs:{align:"center"}},[r("a-button",{key:"back",on:{click:t.handleCancel}},[t._v("\n      "+t._s(t.$t("payment_text_cancel_btn")))]),t._v(" "),r("a-button",{key:"submit",staticStyle:{"background-color":"var(--text-primary)"},attrs:{type:"primary",loading:t.loading},on:{click:function(e){t.$router.push(t.localeRoute("/account/kyc"))}}},[t._v("\n      "+t._s(t.$t("text_authentication"))+"\n    ")])],1)],1)}),[],!1,null,"517cf968",null);e.default=component.exports},1721:function(t,e,n){"use strict";var r=n(1378);n.n(r).a},1722:function(t,e,n){(e=n(53)(!1)).push([t.i,".tip[data-v-3cb58eb1]{padding:22px 30px;margin-top:50px;background:#f5fcff 0 0 no-repeat padding-box;border-radius:3px;text-align:left}.add-bank-account[data-v-3cb58eb1]{background:#fff 0 0 no-repeat padding-box;box-shadow:0 0 10px rgba(0,0,0,.12157);border-radius:10px}",""]),t.exports=e},2742:function(t,e,n){"use strict";n.r(e);n(63),n(32),n(31),n(22),n(55),n(115);var r=n(113),o=(n(25),n(13)),c=n(26),l=n(41);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"Payment",head:function(){return{title:"Banka Hesapları | Cointral.com"}},data:function(){return{data:[],cacheData:[],columns:null,editingKey:"",accountName:null,iban:"",bankAccounts:[],visible:!1,isMobile:null,message:null,isError:!1,typeAlert:null,accountNameAlert:!1,accountNameErrorMessage:null,ibanAlert:!1,ibanErrorMessage:null,isButton:!1}},mounted:function(){var t=this;this.isMobile=window.innerWidth<1e3,window.addEventListener("resize",(function(){t.isMobile=window.innerWidth<1e3}))},computed:f({},Object(l.c)({USER_INFO:"payment/USER_INFO"})),beforeMount:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.columns=[{title:t.$t("bank_accounts_text_friendly_name"),dataIndex:"FriendlyName",width:"25%",scopedSlots:{customRender:"FriendlyName"}},{title:"IBAN",dataIndex:"IBAN",width:"60%",scopedSlots:{customRender:"IBAN"}},{dataIndex:"update",scopedSlots:{customRender:"update"}},{dataIndex:"delete",scopedSlots:{customRender:"delete"}}],e.next=3,t.GET_USER_INFO();case 3:return e.next=5,t.getCustomerBankAccountList();case 5:case"end":return e.stop()}}),e)})))()},methods:f(f({},Object(l.b)({GET_USER_INFO:"payment/GET_USER_INFO",CREATE_CUSTOMER_BANK_ACCOUNT:"payment/CREATE_CUSTOMER_BANK_ACCOUNT",DELETE_CUSTOMER_BANK_ACCOUNT:"payment/DELETE_CUSTOMER_BANK_ACCOUNT"})),{},{openNotificationWithIcon:function(t){this.$notification[t]({message:"Hata",description:this.errorMessage})},checkAccountName:function(){this.accountNameAlert&&(this.accountNameAlert=!1,this.accountNameErrorMessage=null),this.isButton=!1},checkIban:function(t){this.ibanAlert&&(this.ibanAlert=!1,this.ibanErrorMessage=null),this.isButton=!1},handleChange:function(t,e,n){var o=Object(r.a)(this.data),c=o.filter((function(t){return e===t.key}))[0];c&&(c[n]=t,this.data=o)},edit:function(t){var e=Object(r.a)(this.data),n=e.filter((function(e){return t===e.key}))[0];this.editingKey=t,n&&(n.editable=!0,this.data=e)},save:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,c,l,d,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=Object(r.a)(e.data),c=Object(r.a)(e.cacheData),l=o.filter((function(e){return t===e.key}))[0],n.next=5,e.CREATE_CUSTOMER_BANK_ACCOUNT({IBAN:l.IBAN,FriendlyName:l.FriendlyName,Swift:l.SWIFT,BankAccountUniqueId:l.BankAccountId});case 5:d=n.sent,f=c.filter((function(e){return t===e.key}))[0],l&&f&&d.Success?(delete l.editable,e.data=o,Object.assign(f,l),e.cacheData=c):(e.errorMessage=d.Message,e.openNotificationWithIcon("error")),e.editingKey="";case 9:case"end":return n.stop()}}),n)})))()},onDelete:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,c,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=Object(r.a)(e.data),c=o.filter((function(e){return e.key===t})),n.next=4,e.DELETE_CUSTOMER_BANK_ACCOUNT({BankAccountId:c[0].BankAccountId});case 4:(l=n.sent).Success?e.data=o.filter((function(e){return e.key!==t})):(e.errorMessage=l.Message,e.openNotificationWithIcon("error"));case 6:case"end":return n.stop()}}),n)})))()},cancel:function(t){var e=Object(r.a)(this.data),n=e.filter((function(e){return t===e.key}))[0];this.editingKey="",n&&(Object.assign(n,this.cacheData.filter((function(e){return t===e.key}))[0]),delete n.editable,this.data=e)},checkKYCStatus:function(){this.USER_INFO.KYCVerified?this.USER_INFO.KYCVerified&&this.createCustomerBankAccount():this.visible=!0},verify:function(){this.visible=!1},createCustomerBankAccount:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,3!==t.data.length){e.next=8;break}t.typeAlert="error",t.message=t.$t("bank_accounts_text_error_message"),t.isError=!0,setTimeout((function(){return t.isError=!1}),2e3),e.next=15;break;case 8:return n={IBAN:"TR"+t.iban.replace(/\s/g,""),FriendlyName:t.accountName,Swift:""},e.next=11,t.CREATE_CUSTOMER_BANK_ACCOUNT(n);case 11:return!1===(r=e.sent).Success&&("1"===r.ErrorCode?(t.ibanAlert=!0,t.ibanErrorMessage=r.Message):"2"===r.ErrorCode&&(t.accountNameAlert=!0,t.accountNameErrorMessage=r.Message)),e.next=15,t.getCustomerBankAccountList();case 15:e.next=23;break;case 17:e.prev=17,e.t0=e.catch(0),t.typeAlert="error",t.message="Session Geçersizdir",t.isError=!0,setTimeout((function(){return t.isError=!1}),2e3);case 23:case"end":return e.stop()}}),e,null,[[0,17]])})))()},getCustomerBankAccountList:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={Authorization:"Bearer "+t.$cookies.get("Token")},e.next=4,t.$axios.get(t.$config.FINANCE_API_URL+"/GetCustomerBankAccountList",{headers:n});case 4:if(!(r=e.sent).data){e.next=14;break}for(o=0,c=[],i=0;i<r.data.BankAccounts.length;i++)r.data.BankAccounts[i].key=o,c.push(r.data.BankAccounts[i]),o++;return t.data=c,t.cacheData=t.data.map((function(t){return f({},t)})),e.abrupt("return",r.data.Success);case 14:return e.abrupt("return",!1);case 15:e.next=20;break;case 17:return e.prev=17,e.t0=e.catch(0),e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})))()}})},A=(n(1721),n(19)),component=Object(A.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-col",{staticClass:"Roboto-Regular",staticStyle:{"background-color":"#fafafa"},attrs:{span:24}},[r("PaymentModal",{attrs:{visible:t.visible},on:{closeModal:function(e){t.visible=!1},verify:t.verify}}),t._v(" "),r("a-row",[r("a-col",{staticStyle:{"text-align":"start"},attrs:{span:24}},[r("div",{staticClass:"Roboto-Regular",staticStyle:{"font-size":"32px",color:"#1c2640"}},[t._v("\n        "+t._s(t.$t("bank_accounts_text_title"))+"\n      ")])])],1),t._v(" "),r("a-col",{style:t.isMobile?null:"background-color: white; margin-top: 20px; padding-right: 20px; border-radius: 10px",attrs:{offset:(t.isMobile,0),xs:24,sm:24,md:24,lg:24,xl:24}},[r("a-col",{staticStyle:{"margin-bottom":"50px"},attrs:{offset:t.isMobile?0:1,xs:24,sm:24,md:24,lg:10,xl:10}},[r("a-col",{staticStyle:{"margin-top":"50px","text-align":"start",padding:"40px 20px 20px 20px",height:"280px",background:"#ffffff 0 0 no-repeat padding-box","box-shadow":"0 0 10px #0000001f","border-radius":"10px",opacity:"1"}},[r("a-col",{attrs:{offset:"1",span:24}},[r("a-col",{attrs:{span:4,align:"left"}},[t._v(t._s(t.$t("bank_accounts_text_friendly_name")))]),t._v(" "),r("a-col",{attrs:{span:20}},[r("a-form",{staticClass:"Roboto-Regular"},[r("a-form-item",{attrs:{"has-feedback":t.accountNameAlert,"validate-status":t.accountNameAlert?"error":null,help:t.accountNameErrorMessage}},[r("a-input",{staticStyle:{width:"90%","z-index":"1"},on:{keyup:t.checkAccountName},model:{value:t.accountName,callback:function(e){t.accountName=e},expression:"accountName"}})],1)],1)],1)],1),t._v(" "),r("a-col",{attrs:{offset:"1",span:24}},[r("a-col",{attrs:{span:4,align:"left"}},[t._v("IBAN")]),t._v(" "),r("a-col",{attrs:{span:20}},[r("a-form",{staticClass:"Roboto-Regular"},[r("a-form-item",{attrs:{"has-feedback":t.ibanAlert,"validate-status":t.ibanAlert?"error":null,help:t.ibanErrorMessage}},[r("a-input",{directives:[{name:"mask",rawName:"v-mask",value:"## #### #### #### #### #### ##",expression:"'## #### #### #### #### #### ##'"}],staticStyle:{width:"90%","z-index":"1"},attrs:{prefix:"TR"},on:{keypress:t.checkIban},model:{value:t.iban,callback:function(e){t.iban=e},expression:"iban"}})],1)],1)],1)],1),t._v(" "),r("a-col",{style:t.isError?"margin-top: 20px":"margin-top: 30px",attrs:{offset:"1",span:22}},[r("a-button",{staticClass:"Roboto-Bold",staticStyle:{width:"100%","background-color":"var(--login-button-bg-color)","z-index":"1",height:"50px"},attrs:{type:"primary",disabled:t.isButton},on:{click:t.checkKYCStatus}},[t._v(t._s(t.$t("bank_accounts_text_button")))])],1),t._v(" "),t.isError?r("a-col",{attrs:{offset:"1",span:22}},[r("a-alert",{attrs:{type:t.typeAlert,message:t.message,banner:""}})],1):t._e()],1),t._v(" "),r("a-row",[r("a-col",{staticClass:"tip",attrs:{offset:(t.isMobile,0),xs:24,sm:24,md:24,lg:24,xl:24}},[r("a-col",[r("img",{staticStyle:{position:"relative"},attrs:{src:n(1290),alt:"Bulb"}}),t._v("\n            "+t._s(t.$t("bank_accounts_tips"))+":\n          ")]),t._v(" "),r("a-col",{staticStyle:{"margin-top":"10px"},attrs:{span:24}},[r("li",[t._v(t._s(t.$t("bank_accounts_tips_item_1")))])]),t._v(" "),r("a-col",{attrs:{span:24}},[r("li",[t._v(t._s(t.$t("bank_accounts_tips_item_2")))])]),t._v(" "),r("a-col",{attrs:{span:24}},[r("li",[t._v(t._s(t.$t("bank_accounts_tips_item_3")))])]),t._v(" "),r("a-col",{attrs:{span:24}},[r("li",[t._v(t._s(t.$t("bank_accounts_tips_item_4")))])]),t._v(" "),r("a-col",{attrs:{span:24}},[r("li",[t._v(t._s(t.$t("bank_accounts_tips_item_5")))])]),t._v(" "),r("a-col",{attrs:{span:24}},[r("li",[t._v(t._s(t.$t("bank_accounts_tips_item_6")))])])],1)],1)],1),t._v(" "),r("a-col",{staticStyle:{"margin-top":"50px","margin-bottom":"50px"},attrs:{offset:t.isMobile?0:1,xs:24,sm:24,md:24,lg:12,xl:12}},[r("a-table",{staticClass:"Roboto-Regular",attrs:{columns:t.columns,"data-source":t.data,pagination:!1},scopedSlots:t._u([t._l(["FriendlyName","IBAN"],(function(col){return{key:col,fn:function(text,e){return[r("div",{key:col},[e.editable?r("a-input",{directives:[{name:"mask",rawName:"v-mask",value:"## #### #### #### #### #### ##",expression:"'## #### #### #### #### #### ##'"}],staticStyle:{margin:"-5px 0"},attrs:{value:text},on:{change:function(n){return t.handleChange(n.target.value,e.key,col)}}}):[t._v(t._s(text))]],2)]}}})),{key:"delete",fn:function(text,e){return[r("a-popconfirm",{attrs:{title:"Emin misiniz?",okText:"Evet",cancelText:"İptal"},on:{confirm:function(){return t.onDelete(e.key)}}},[r("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.$t("bank_accounts_text_delete")))])])]}}],null,!0)})],1)],1)],1)}),[],!1,null,"3cb58eb1",null);e.default=component.exports;installComponents(component,{PaymentModal:n(1610).default})}}]);