(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1274:function(t,e,n){var content=n(1317);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("25ecc94c",content,!0,{sourceMap:!1})},1297:function(t,e,n){t.exports=n.p+"59bcd0ad48a59ff1c8ef7b1b5837ebd4.svg"},1316:function(t,e,n){"use strict";var o=n(1274);n.n(o).a},1317:function(t,e,n){(e=n(53)(!1)).push([t.i,".content[data-v-472e95d6]{height:150px;display:flex;flex-direction:column;align-items:center;justify-content:space-between}.spacer[data-v-472e95d6]{flex-grow:1}.action-buttons[data-v-472e95d6]{display:flex;align-items:center;justify-content:space-around}",""]),t.exports=e},1323:function(t,e,n){"use strict";n.r(e);var o={name:"KycWarningPopup",props:{visible:{required:!0,default:!1}}},r=(n(1316),n(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-modal",{attrs:{id:"kyc-warning",visible:t.visible,centered:!0,destroyOnClose:!0,header:null,footer:null,width:384,maskStyle:{"background-color":"#242631",opacity:.9},maskClosable:!1},on:{cancel:function(e){return t.$emit("close")}}},[o("div",{staticClass:"content"},[o("img",{attrs:{alt:"kyc_warning",src:n(1297)}}),t._v(" "),o("span",{staticClass:"spacer"}),t._v(" "),o("h3",{staticClass:"Roboto-Medium m-0",attrs:{align:"center"}},[t._v("\n      Kimlik doğrulama talebinde bulununuz.\n    ")]),t._v(" "),o("span",{staticClass:"spacer"}),t._v(" "),o("div",{staticClass:"action-buttons"},[o("a-button",{staticClass:"Roboto-Medium",staticStyle:{"margin-right":"5px"},attrs:{block:"",type:"secondary"},on:{click:function(e){return t.$emit("close")}}},[t._v("İptal et")]),t._v(" "),o("a-button",{staticClass:"Roboto-Medium",attrs:{block:"",type:"primary"},on:{click:function(e){t.$router.push(t.localePath("/account/kyc"))}}},[t._v("Kimliği doğrula")])],1)])])}),[],!1,null,"472e95d6",null);e.default=component.exports},1419:function(t,e,n){var content=n(2310);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("d8d21d62",content,!0,{sourceMap:!1})},1602:function(t,e,n){"use strict";n.r(e);var o={name:"PaymentModal",props:{visible:{type:Boolean,required:!0}},data:function(){return{loading:!1}},methods:{showModal:function(){this.visible=!0},handleOk:function(t){this.$emit("verify")},handleCancel:function(t){this.$emit("closeModal")},closeModal:function(){this.$emit("closeModal")}}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-modal",{attrs:{"on-ok":"handleOk",footer:null,centered:""},on:{cancel:t.closeModal},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[o("a-col",{staticStyle:{"margin-top":"60px"},attrs:{span:24,align:"center"}},[o("img",{staticStyle:{position:"relative"},attrs:{src:n(1297),alt:"Bulb"}})]),t._v(" "),o("a-col",{staticStyle:{"margin-top":"20px","margin-bottom":"40px"},attrs:{span:24,align:"center"}},[t._v("\n    "+t._s(t.$t("payment_text_kyc"))+"\n  ")]),t._v(" "),o("a-col",{attrs:{align:"center"}},[o("a-button",{key:"back",on:{click:t.handleCancel}},[t._v("\n      "+t._s(t.$t("payment_text_cancel_btn")))]),t._v(" "),o("a-button",{key:"submit",staticStyle:{"background-color":"var(--text-primary)"},attrs:{type:"primary",loading:t.loading},on:{click:function(e){t.$router.push(t.localeRoute("/account/kyc"))}}},[t._v("\n      "+t._s(t.$t("text_authentication"))+"\n    ")])],1)],1)}),[],!1,null,"517cf968",null);e.default=component.exports},2309:function(t,e,n){"use strict";var o=n(1419);n.n(o).a},2310:function(t,e,n){(e=n(53)(!1)).push([t.i,".btn-cancel{border:none;background:#50c5fd;border-radius:3px;cursor:pointer}.Cash{display:flex}.Cash .ant-table-thead th{background:#fff}.Cash .ant-table-thead th span{color:#292f35;font-size:14px;font-weight:500;text-align:left}.Cash-item-table-title{font-size:18px;font-weight:700;margin-bottom:14px;color:#292f35;text-align:left;margin-top:34px}.Cash-item-desc{font-size:12px;margin-top:20px;width:90%;text-align:left}.Cash-body{background-color:#f7f7f7;height:100%;padding:48px}.Cash-body-item{background-color:#fff;border-radius:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);padding:24px 30px;text-align:center}.Cash-body-item-title{font-size:24px;font-weight:700;margin-bottom:10px;color:#292f35}.Cash-body-item-desc{font-size:14px;margin-bottom:18px;color:#292f35}.Cash-body-form{display:flex;flex-direction:column}.Cash-body-form-label{color:#292f35;font-size:14px;width:50px;text-align:left}.Cash-body-form .ant-btn-primary{height:45px;width:auto;margin-right:68px}.Cash-body-form .ant-btn-primary span{color:#0b0e11}.Cash-body-form-item{display:flex;align-items:center;margin-bottom:15px}.Cash-body-form-item .ant-input-number{flex:1;margin-right:17px;height:45px}.Cash-body-form-item .ant-input-number-input{height:45px!important}.Cash-body-form-item .ant-input-number-input::-moz-placeholder{font-size:15px}.Cash-body-form-item .ant-input-number-input:-ms-input-placeholder{font-size:15px}.Cash-body-form-item .ant-input-number-input::placeholder{font-size:15px}.Cash-wrapper{flex:1}.Cash-sidebar{background:linear-gradient(180deg,#1c2640,#3a57a8);font-size:34px;color:#fff;width:280px;position:relative}.Cash-sidebar-body{position:absolute;left:50%;transform:translateX(-50%);top:30%;display:grid;align-items:center;justify-items:center;place-items:center;font-weight:400}.Cash-sidebar-body img{height:24px;margin-bottom:5px}.Cash-header{background-color:#151a26;padding:24px 54px;color:#fff;display:flex;align-items:center;justify-content:space-between}.Cash-title{font-size:24px;font-weight:700;margin-bottom:10px}.Cash-desc{font-size:16px}.Cash-right{text-align:right}.alert-message{width:100%;margin-right:22px}.alert-message>div{width:100%}.error-message{color:#721c24;background-color:#f8d7da;position:relative;padding:.3rem 1.2rem;margin:10px 0;border:1px solid transparent;border-radius:.25rem;text-align:left}.Cash-body-item{min-height:887px}.Cash-body-form .ant-btn-primary{white-space:break-spaces!important}@media (max-width:1291px){table{display:block;overflow-x:auto;white-space:nowrap}}@media (max-width:840px){table{display:block;overflow-x:auto;white-space:nowrap}.Cash-sidebar{display:none}}@media (max-width:768px){.Cash-header{display:flex;flex-direction:column}.Cash-header,.Cash-header div{width:100%;text-align:left}.col-container{width:100%;margin-bottom:20px}.Cash-wrapper{width:100%}}",""]),t.exports=e},2741:function(t,e,n){"use strict";n.r(e);n(63),n(32),n(31),n(24),n(55),n(25);var o=n(14),r=n(26),c=n(3),l=n.n(c),d=n(41);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={head:function(){return{title:"Nakit | Cointral.com"}},data:function(){return{showKycWarning:!1,showError:!0,visible:!1,errorMsg:"Error",withdrawLoader:!1,withDrawTableloading:!1,depositLoader:!1,withDrawErrorMsg:"",depositErrorMsg:"",userBalance:null,message:null,deposit:{amount:null,total:null},depositPagination:{current:1,total:0,position:"bottom",pageSize:3},withdrawPagination:{current:1,total:0,position:"bottom",pageSize:3},withdraw:{amount:null,total:null},tableData:[],withDrawtableData:[],loading:!1,withDrawColumns:[{title:"Miktar",key:"Amount",scopedSlots:{customRender:"Amount"}},{title:"Toplam",key:"Total",scopedSlots:{customRender:"Total"}},{title:"İşlem No.",key:"ID",scopedSlots:{customRender:"ID"}},{title:"Durum",key:"Durum",scopedSlots:{customRender:"Durum"}},{title:"Tarih",key:"Date",scopedSlots:{customRender:"Date"}}],depositColumns:[{title:"Miktar",dataIndex:"Amount"},{title:"Toplam",dataIndex:"Total"},{title:"İşlem No.",dataIndex:"TxID"},{title:"Durum",dataIndex:"Status"},{title:"Tarih",dataIndex:"UpdatedOn"}]}},middleware:["auth"],computed:m(m({},Object(d.c)({isLoggedIn:"auth/isLoggedIn"})),{},{filteredInbound:function(){return this.tableData.filter((function(t){return!0===t.InBound}))},filteredOutbound:function(){return this.withDrawtableData.filter((function(t){return!1===t.InBound}))}}),watch:{"deposit.amount":function(t){this.depositErrorMsg="",this.deposit.total=t?t+.03*t:null},"withdraw.amount":function(t){(this.withDrawErrorMsg="",t)?(t-=.03*t,this.withdraw.total=t):this.withdraw.total=null}},created:function(){this.getUserBalance(),this.getCashTransaction(),this.getOutBoundCashTransaction()},mounted:function(){},filters:{dateFormat:function(t){return l()(t).format("yyy-mm-DD hh:mm:ss")}},methods:{clearForm:function(){this.deposit.amount=null,this.deposit.total=null,this.withdraw.amount=null,this.withdraw.total=null},dateFormater:function(t){return l()(t).format("yyy-mm-DD hh:mm:ss")},onCancel:function(t){this.cancelWithDrawMoney(t)},getUserBalance:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,o=t.$config,r=t.$cookies,c={Authorization:"Bearer "+r.get("Token")},e.next=4,n.get(o.FINANCE_API_URL+"/GetUserCashBalance",{headers:c});case 4:(l=e.sent).data&&(t.userBalance=l.data);case 6:case"end":return e.stop()}}),e)})))()},getCashTransaction:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c,l,d,h,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,o=t.$config,r=t.$cookies,c={Authorization:"Bearer "+r.get("Token")},e.next=4,n.get(o.FINANCE_API_URL+"/GetUserInboundCashTransactions",{params:{Offset:3*t.depositPagination.current-t.depositPagination.pageSize,RowSize:t.depositPagination.pageSize},headers:c});case 4:l=e.sent,t.loading=!1,l.data&&(l.data.Cash_Transaction.map((function(e){e.UpdatedOn=t.dateFormater(e.UpdatedOn)})),d=l.data,h=d.Cash_Transaction,m=d.Max,t.tableData=h,t.depositPagination.total=m);case 7:case"end":return e.stop()}}),e)})))()},getOutBoundCashTransaction:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c,l,data,d,h,m,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,o=t.$config,r=t.$cookies,c={Authorization:"Bearer "+r.get("Token")},e.next=4,n.get(o.FINANCE_API_URL+"/GetUserOutboundCashTransactions",{params:{Offset:3*t.withdrawPagination.current-t.withdrawPagination.pageSize,RowSize:t.withdrawPagination.pageSize},headers:c});case 4:l=e.sent,data=l.data,t.withDrawTableloading=!1,d=data.Success,data.Message,h=data.ErrorCode,d?(m=data.Cash_Transaction,f=data.Max,t.withDrawtableData=m,t.withdrawPagination.total=f):98===h&&(t.showKycWarning=!0);case 9:case"end":return e.stop()}}),e)})))()},depositTableChange:function(t){this.depositPagination=t,this.loading=!0,this.getCashTransaction()},withDrawTableChange:function(t){this.withdrawPagination=t,this.withDrawTableloading=!0,this.getOutBoundCashTransaction()},cancelWithDrawMoney:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r,c,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.$axios,e.$config,r=e.$cookies,{Authorization:"Bearer "+r.get("Token"),"Content-Type":"application/json; charset=utf-8"},c={TxID:t},n.next=5,o({method:"delete",url:e.$config.FINANCE_API_URL+"/CancelCashTx",data:c,headers:{Authorization:"Bearer "+e.$cookies.get("Token"),"Content-Type":"application/json"}});case 5:(l=n.sent).data.Success?(e.openNotificationWithIcon("success",e.$t(l.data.Message)),e.getOutBoundCashTransaction(),e.getUserBalance()):e.openNotificationWithIcon("error",l.data.Message);case 7:case"end":return n.stop()}}),n)})))()},verify:function(){this.visible=!1},depositMoney:function(){var t=this;if(this.deposit.amount>0){this.depositLoader=!0;var e=this.$axios,n=this.$config,o={Authorization:"Bearer "+this.$cookies.get("Token")},r={Amount:this.deposit.amount};e.post(n.FINANCE_API_URL+"/CreateInBoundCashTransaction",r,{headers:o}).then((function(e){"0"===e.data.ErrorCode?(t.loading=!1,t.depositLoader=!1,t.openNotificationWithIcon("success",e.data.Message),t.clearForm(),t.getCashTransaction()):(98==e.data.ErrorCode&&(t.showKycWarning=!0),t.loading=!1,t.depositLoader=!1,t.openNotificationWithIcon("error",e.data.Message))}))}},openNotificationWithIcon:function(t,e){this.$notification[t]({message:e,description:this.errorMessage})},withdrawMoney:function(){var t=this;if(this.withdraw.amount>0){this.withdrawLoader=!0;var e=this.$axios,n=this.$config,o={Authorization:"Bearer "+this.$cookies.get("Token")},r={Amount:this.withdraw.amount};e.post(n.FINANCE_API_URL+"/CreateOutBoundCashTransaction",r,{headers:o}).then((function(e){"98"===e.data.ErrorCode?(t.withdrawLoader=!1,t.showKycWarning=!0):"0"===e.data.ErrorCode?(t.withdrawLoader=!1,t.clearForm(),t.openNotificationWithIcon("success",e.data.Message),t.getOutBoundCashTransaction(),t.getUserBalance()):(t.withdrawLoader=!1,t.withDrawErrorMsg=e.data.Message)}))}}}},_=(n(2309),n(19)),component=Object(_.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isLoggedIn?o("div",{staticClass:"Cash"},[o("div",{staticClass:"Cash-sidebar"},[o("div",{staticClass:"Cash-sidebar-body"},[o("img",{attrs:{src:n(649),alt:""}}),t._v(" "),o("div",[t._v(t._s(t.$t("cash_heading_text")))])])]),t._v(" "),o("PaymentModal",{attrs:{visible:t.visible},on:{closeModal:function(e){t.visible=!1},verify:t.verify}}),t._v(" "),o("div",{staticClass:"Cash-wrapper"},[o("div",{staticClass:"Cash-header"},[o("div",{staticClass:"Cash-left"},[o("div",{staticClass:"Cash-title"},[t._v("\n          "+t._s(t.$t("cash_sub_heading_text"))+"\n        ")]),t._v(" "),t.userBalance&&t.userBalance.Balance?o("div",{staticClass:"Cash-desc"},[t._v("\n          "+t._s(t.userBalance&&t.userBalance.Balance)+" USDT\n        ")]):t._e(),t._v(" "),t.userBalance?t._e():o("div",{staticClass:"Cash-desc"},[t._v("0 USDT")])]),t._v(" "),o("div",{staticClass:"Cash-right"},[o("div",{staticClass:"Cash-title"},[t._v("\n          "+t._s(t.$t("cash_title"))+"\n        ")]),t._v(" "),o("div",{staticClass:"Cash-desc"},[t._v("\n          "+t._s(t.$t("cash_tips"))+"\n        ")])])]),t._v(" "),o("div",{staticClass:"Cash-body"},[o("a-row",{attrs:{gutter:32}},[o("a-col",{staticClass:"col-container",attrs:{span:12}},[o("div",{staticClass:"Cash-body-item"},[o("div",{staticClass:"Cash-body-item-title"},[t._v("\n              "+t._s(t.$t("cash_form_deposit_heading_text"))+"\n            ")]),t._v(" "),o("div",{staticClass:"Cash-body-item-desc"},[t._v("\n              "+t._s(t.$t("cash_form_deposit_sub_heading_text"))+"\n            ")]),t._v(" "),o("div",{staticClass:"Cash-body-form"},[o("div",{staticClass:"Cash-body-form-item"},[o("a-input-number",{staticClass:"no-focus-shadow Roboto-Bold",attrs:{placeholder:this.$t("cash_deposit_amount")},model:{value:t.deposit.amount,callback:function(e){t.$set(t.deposit,"amount",t._n(e))},expression:"deposit.amount"}}),t._v(" "),o("label",{staticClass:"Roboto-Bold Cash-body-form-label"},[t._v("USDT")])],1),t._v(" "),o("div",{staticClass:"Cash-body-form-item"},[o("a-input-number",{staticClass:"no-focus-shadow Roboto-Bold",attrs:{disabled:"",placeholder:""},model:{value:t.deposit.total,callback:function(e){t.$set(t.deposit,"total",t._n(e))},expression:"deposit.total"}}),t._v(" "),o("label",{staticClass:"Roboto-Bold Cash-body-form-label"},[t._v("USD")])],1),t._v(" "),o("a-button",{staticClass:"Roboto-Medium",attrs:{loading:t.depositLoader,type:"primary"},on:{click:t.depositMoney}},[t._v(t._s(t.$t("cash_form_btn_text")))])],1),t._v(" "),o("div",{staticClass:"Cash-item-desc"},[t._v(t._s(t.$t("cash_desc1_deposit")))]),t._v(" "),o("div",{staticClass:"Cash-item-desc"},[t._v(t._s(t.$t("cash_desc2")))]),t._v(" "),o("div",{staticClass:"Cash-item-desc"},[t._v(t._s(t.$t("cash_desc3")))]),t._v(" "),o("div",{staticClass:"Cash-item-desc"},[t._v(t._s(t.$t("cash_desc4_deposit")))]),t._v(" "),o("div",{staticClass:"Cash-item-desc"},[t._v(t._s(t.$t("cash_desc5")))]),t._v(" "),o("div",{staticClass:"Cash-item-desc"},[t._v(t._s(t.$t("cash_desc6")))]),t._v(" "),o("div",{staticClass:"Cash-item-table-title"},[t._v("\n              "+t._s(t.$t("cash_deposit_table_text"))+"\n            ")]),t._v(" "),o("div",{staticClass:"Cash-item-table"},[o("a-table",{staticClass:"Roboto-Bold",attrs:{columns:t.depositColumns,rowKey:function(t){return t.TxID},"data-source":t.filteredInbound,pagination:t.depositPagination,loading:t.loading,"expand-icon-column-index":5,"expand-icon-as-cell":!1},on:{change:t.depositTableChange}})],1)])]),t._v(" "),o("a-col",{staticClass:"col-container",attrs:{span:12}},[o("div",{staticClass:"Cash-body-item"},[o("div",{staticClass:"Cash-body-item-title"},[t._v("\n              "+t._s(t.$t("cash_form_dpn_heading_text"))+"\n            ")]),t._v(" "),o("div",{staticClass:"Cash-body-item-desc"},[t._v("\n              "+t._s(t.$t("cash_form_dpn_sub_heading_text"))+"\n            ")]),t._v(" "),o("div",{staticClass:"Cash-body-form"},[o("div",{staticClass:"Cash-body-form-item"},[o("div",{staticClass:"alert-message"},[o("a-input-number",{staticClass:"no-focus-shadow Roboto-Bold",attrs:{placeholder:this.$t("cash_withdrawal_amount")},model:{value:t.withdraw.amount,callback:function(e){t.$set(t.withdraw,"amount",t._n(e))},expression:"withdraw.amount"}}),t._v(" "),t.withDrawErrorMsg?o("div",{staticClass:"error-message"},[t._v("\n                    "+t._s(t.withDrawErrorMsg)+"\n                  ")]):t._e()],1),t._v(" "),o("label",{staticClass:"Roboto-Bold Cash-body-form-label"},[t._v("USDT")])]),t._v(" "),o("div",{staticClass:"Cash-body-form-item"},[o("a-input-number",{staticClass:"no-focus-shadow Roboto-Bold",attrs:{disabled:"",placeholder:""},model:{value:t.withdraw.total,callback:function(e){t.$set(t.withdraw,"total",t._n(e))},expression:"withdraw.total"}}),t._v(" "),o("label",{staticClass:"Roboto-Bold Cash-body-form-label"},[t._v("USD")])],1),t._v(" "),o("a-button",{staticClass:"Roboto-Medium",attrs:{type:"primary",loading:t.withdrawLoader},on:{click:t.withdrawMoney}},[t._v(t._s(t.$t("cash_form_btn_text")))])],1),t._v(" "),o("div",{staticClass:"Cash-item-desc"},[t._v(t._s(t.$t("cash_desc1_withdraw")))]),t._v(" "),o("div",{staticClass:"Cash-item-desc"},[t._v(t._s(t.$t("cash_desc2")))]),t._v(" "),o("div",{staticClass:"Cash-item-desc"},[t._v(t._s(t.$t("cash_desc3")))]),t._v(" "),o("div",{staticClass:"Cash-item-desc"},[t._v(t._s(t.$t("cash_desc4_withdraw")))]),t._v(" "),o("div",{staticClass:"Cash-item-desc"},[t._v(t._s(t.$t("cash_desc5")))]),t._v(" "),o("div",{staticClass:"Cash-item-desc"},[t._v(t._s(t.$t("cash_desc6")))]),t._v(" "),o("div",{staticClass:"Cash-item-table-title"},[t._v("\n              "+t._s(t.$t("cash_withdraw_table_text"))+"\n            ")]),t._v(" "),o("div",{staticClass:"Cash-item-table"},[o("a-table",{staticClass:"Roboto-Bold",attrs:{columns:t.withDrawColumns,rowKey:function(t){return t.TxID},"data-source":t.filteredOutbound,pagination:t.withdrawPagination,loading:t.withDrawTableloading,"expand-icon-column-index":5,"expand-icon-as-cell":!1},on:{change:t.withDrawTableChange},scopedSlots:t._u([{key:"Amount",fn:function(e){return o("span",{},[t._v("\n                  "+t._s(e.Amount.toFixed(8))+" \n                ")])}},{key:"Total",fn:function(e){return o("span",{},[t._v("\n                  "+t._s(e.Total.toFixed(8))+"\n                ")])}},{key:"ID",fn:function(e){return o("span",{},[t._v("\n                  "+t._s(e.TxID)+"\n                ")])}},{key:"Durum",fn:function(e){return o("span",{},["ready_for_cash"===e.Status||"ready_for_cash"===e.Status?[o("button",{staticClass:"btn-cancel",on:{click:function(n){return t.onCancel(e.TxID)}}},[t._v("\n                      "+t._s(t.$t("text_cancel"))+"\n                    ")])]:t._e(),t._v(" "),"ready_for_cash"!==e.Status&&"ready_for_cash"!==e.Status?[t._v("\n                    "+t._s(t.$t(e.Status))+"\n                  ")]:t._e()],2)}},{key:"Date",fn:function(e){return o("span",{},[t._v("\n                  "+t._s(t._f("dateFormat")(e.CreatedOn))+"\n                ")])}}],null,!1,3710326776)})],1)])])],1)],1)]),t._v(" "),o("KycWarningPopup",{attrs:{visible:t.showKycWarning},on:{close:function(e){t.showKycWarning=!1}}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PaymentModal:n(1602).default,KycWarningPopup:n(1323).default})}}]);