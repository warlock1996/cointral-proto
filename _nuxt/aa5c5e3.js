(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1291:function(e,t,r){e.exports=r.p+"94fa2081167a0d215cfd2e76c459fb58.svg"},1299:function(e,t,r){var content=r(1349);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(54).default)("d195b9cc",content,!0,{sourceMap:!1})},1311:function(e,t,r){e.exports=r.p+"d1182d0cd2c6f797f150d4db88cac337.svg"},1316:function(e,t,r){"use strict";r.r(t);r(31),r(22),r(1329),r(25);var n=r(13),o={name:"TransferPopUp",data:function(){var e=this,t=function(t,r,n){r?n():n(new Error(e.$t("text_required_field")))};return{TransferWallets:[],FIAT_WALLETS:["Fiat Wallet","P2P Wallet"],UserWalletsBalance:[],TransferData:{From:"Main Wallet",To:"Fiat Wallet",Amount:0,Asset:void 0},TransferDataRules:{From:[{validator:t,trigger:"change"}],To:[{validator:t,trigger:"change"}],Amount:[{validator:t,trigger:"change"},{validator:function(t,r,n){r<=e.TransferAssetAvailableAmount?n():n(new Error(e.$t("text_insufficient_balance")))},trigger:"change"}],Asset:[{validator:t,trigger:"change"}]},isTransferLoading:!1,isTransferPopBusy:!1}},mounted:function(){this.getTransferWallets(),this.getUserBalance()},methods:{getAssetIcon:function(symbol){try{return r(1271)("./".concat(symbol.toLowerCase(),".svg"))}catch(e){return r(637)}},switchWallets:function(){var e=this.TransferData,t=e.From,r=e.To;this.TransferData.From=r,this.TransferData.To=t},ValidateAndTransfer:function(){var e=this;this.$refs.TransferForm.validate((function(t){t&&e.Transfer()}))},Transfer:function(data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isTransferLoading=!0,e.isTransferPopBusy=!0,r={Authorization:"Bearer "+e.$cookies.get("Token")},t.next=6,e.$axios.post(e.$config.FINANCE_API_URL+"/Transfer",e.TransferData,{headers:r});case 6:n=t.sent,(o=n.data).Success?(e.$notification.success({message:"Success",description:o.Message}),e.getUserBalance()):e.$notification.info({message:"Failed",description:o.Message}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),t.t0.response?e.$notification.info({message:"Failed",description:t.t0.response.data.Message}):console.error(t.t0);case 14:return t.prev=14,e.isTransferLoading=!1,e.isTransferPopBusy=!1,t.finish(14);case 18:case"end":return t.stop()}}),t,null,[[0,11,14,18]])})))()},getTransferWallets:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,data,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isTransferPopBusy=!0,r={Authorization:"Bearer "+e.$cookies.get("Token")},t.next=5,e.$axios.get(e.$config.FINANCE_API_URL+"/GetFilters",{headers:r});case 5:n=t.sent,(data=n.data).Success&&(o=data.TransferList,e.TransferWallets=o.filter((function(e){return"Security Wallet"!==e.Key}))),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:return t.prev=12,e.isTransferPopBusy=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,10,12,15]])})))()},getUserBalance:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isTransferPopBusy=!0,r={Authorization:"Bearer "+e.$cookies.get("Token")},t.next=5,e.$axios.get(e.$config.FINANCE_API_URL+"/GetUserBalance",{headers:r});case 5:n=t.sent,(data=n.data).Success&&(e.UserWalletsBalance=data),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:return t.prev=12,e.isTransferPopBusy=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,10,12,15]])})))()}},computed:{TransferWalletsFrom:function(){var e=this;return this.TransferWallets.filter((function(t){return t.Key!==e.TransferData.To}))},TransferWalletsTo:function(){var e=this;return this.TransferWallets.filter((function(t){return t.Key!==e.TransferData.From}))},WalletAssets:function(){return"Fiat Wallet"!==this.TransferData.From&&"Fiat Wallet"!==this.TransferData.To||!this.UserWalletsBalance.UserFiatBalance?"P2P Wallet"===this.TransferData.From||"P2P Wallet"===this.TransferData.To?this.UserWalletsBalance.UserP2PBalance:void 0:this.UserWalletsBalance.UserFiatBalance.filter((function(e){return"TRY"!==e.asset}))},TransferAssetAvailableAmount:function(){var e=this;if("Main Wallet"===this.TransferData.From){if(this.UserWalletsBalance.UserSpotBalance){var t=Object.values(this.UserWalletsBalance.UserSpotBalance).filter((function(t){return t.asset===e.TransferData.Asset}));return t[0]?t[0].free.toFixed(8):""}}else if("Fiat Wallet"===this.TransferData.From){if(this.UserWalletsBalance.UserFiatBalance){var r=Object.values(this.UserWalletsBalance.UserFiatBalance).filter((function(t){return t.asset===e.TransferData.Asset}));return r[0]?r[0].free.toFixed(8):""}}else if("P2P Wallet"===this.TransferData.From&&this.UserWalletsBalance.UserP2PBalance){var n=Object.values(this.UserWalletsBalance.UserP2PBalance).filter((function(t){return t.asset===e.TransferData.Asset}));return n[0]?n[0].free.toFixed(8):""}}},watch:{"TransferData.From":{handler:function(e,t){"Main Wallet"!==e&&"Main Wallet"!==this.TransferData.To&&(this.TransferData.To=t,this.TransferData.Asset=void 0)},deep:!0},"TransferData.To":{handler:function(e,t){"Main Wallet"!==e&&"Main Wallet"!==this.TransferData.From&&(this.TransferData.From=t,this.TransferData.Asset=void 0)},deep:!0}}},l=(r(1348),r(19)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("a-spin",{attrs:{spinning:e.isTransferPopBusy}},[n("a-form-model",{ref:"TransferForm",attrs:{model:e.TransferData,rules:e.TransferDataRules}},[n("a-row",{attrs:{gutter:16,type:"flex",align:"middle"}},[n("a-col",{attrs:{span:10}},[n("a-form-model-item",{attrs:{prop:"From"}},[n("h4",{staticClass:"m-0 Roboto-Bold text-left"},[e._v("\n              "+e._s(e.$t("transfer_sender"))+"\n            ")]),e._v(" "),n("a-select",{staticClass:"Roboto-Regular",attrs:{size:"large"},model:{value:e.TransferData.From,callback:function(t){e.$set(e.TransferData,"From",t)},expression:"TransferData.From"}},e._l(e.TransferWalletsFrom,(function(t,r){return n("a-select-option",{key:r,attrs:{value:t.Key}},[e._v("\n                "+e._s(t.Name)+"\n              ")])})),1)],1)],1),e._v(" "),n("a-col",{attrs:{span:4}},[n("div",{staticClass:"text-center"},[n("img",{staticClass:"switch-wallets-icon",attrs:{src:r(1311)},on:{click:e.switchWallets}})])]),e._v(" "),n("a-col",{attrs:{span:10}},[n("a-form-model-item",{attrs:{prop:"To"}},[n("h4",{staticClass:"m-0 Roboto-Bold text-right"},[e._v("\n              "+e._s(e.$t("transfer_receiver"))+"\n            ")]),e._v(" "),n("a-select",{staticClass:"Roboto-Regular",attrs:{size:"large"},model:{value:e.TransferData.To,callback:function(t){e.$set(e.TransferData,"To",t)},expression:"TransferData.To"}},e._l(e.TransferWalletsTo,(function(t,r){return n("a-select-option",{key:r,attrs:{value:t.Key}},[e._v("\n                "+e._s(t.Name)+"\n              ")])})),1)],1)],1)],1),e._v(" "),n("a-row",{attrs:{gutter:16}},[n("a-col",{attrs:{span:24}},[n("a-form-model-item",{attrs:{prop:"Asset","has-feedback":""}},[n("a-select",{staticClass:"Roboto-Regular",attrs:{size:"large",placeholder:e.$t("main_wallet_asset")},model:{value:e.TransferData.Asset,callback:function(t){e.$set(e.TransferData,"Asset",t)},expression:"TransferData.Asset"}},e._l(e.WalletAssets,(function(t,r){return n("a-select-option",{key:r,attrs:{value:t.asset}},[n("div",{staticClass:"d-flex align-items-center justify-content-start"},[n("img",{staticStyle:{"margin-right":"6px"},attrs:{src:e.getAssetIcon(t.asset),width:"18px"}}),e._v(" "),n("span",{staticClass:"Roboto-Bold"},[e._v("\n                    "+e._s(t.asset)+"\n                  ")])])])})),1)],1)],1)],1),e._v(" "),n("a-row",{attrs:{gutter:16}},[n("a-col",{attrs:{span:24}},[n("a-form-model-item",{attrs:{prop:"Amount","has-feedback":""}},[n("a-input-number",{staticClass:"w-100 Roboto-Regular",attrs:{size:"large"},model:{value:e.TransferData.Amount,callback:function(t){e.$set(e.TransferData,"Amount",t)},expression:"TransferData.Amount"}})],1)],1)],1),e._v(" "),n("a-row",{staticStyle:{margin:"10px auto"},attrs:{gutter:0}},[n("a-col",{attrs:{span:12}},[n("h4",{staticClass:"text-left Roboto-Regular"},[e._v("\n            "+e._s(e.$t("transfer_available_amount"))+"\n          ")])]),e._v(" "),n("a-col",{attrs:{span:12}},[n("h4",{staticClass:"text-right primary-text Roboto-Bold"},[n("a-button",{attrs:{type:"link"},on:{click:function(t){e.TransferData.Amount=e.TransferAssetAvailableAmount}}},[e._v("\n              "+e._s(e.TransferAssetAvailableAmount)+" "+e._s(e.TransferData.Asset)+"\n            ")])],1)])],1),e._v(" "),n("a-row",{attrs:{gutter:16}},[n("a-col",{attrs:{span:24}},[n("a-button",{staticClass:"Roboto-Medium",attrs:{size:"large",loading:e.isTransferLoading,type:"primary",block:""},on:{click:e.ValidateAndTransfer}},[e._v("\n            "+e._s(e.$t("transfer_start"))+"\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,"b330ed30",null);t.default=component.exports},1324:function(e,t,r){e.exports=r.p+"b3d00314f1169b7e6b8d7fb4ce4aae58.svg"},1329:function(e,t,r){var n=r(29),o=r(656)(!1);n(n.S,"Object",{values:function(e){return o(e)}})},1348:function(e,t,r){"use strict";var n=r(1299);r.n(n).a},1349:function(e,t,r){(t=r(53)(!1)).push([e.i,".switch-wallets-icon[data-v-b330ed30]{cursor:pointer}",""]),e.exports=t},1520:function(e,t,r){var content=r(2532);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(54).default)("158298d6",content,!0,{sourceMap:!1})},1651:function(e,t,r){e.exports=r.p+"3852d34165d0f2cadb91b150a4d36e46.svg"},1652:function(e,t,r){e.exports=r.p+"77722e71794aa96938d3e5eaebec46d2.svg"},1677:function(e,t,r){"use strict";r.r(t);r(63),r(32),r(55),r(31),r(22),r(1329);var n=r(26),o=(r(25),r(13));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={name:"TransferPopUp",data:function(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"}),fromToDropdownContent:[],unitDromDownContent:[],fromValue:this.$t("text_security_deposit"),toValue:this.$t("text_p2p_wallet"),showingData:{usdtP2PBalance:0,usdtSecurityBalance:0},loading:!0,UserBalance:{}}},mounted:function(){this.getDropdownContent(),this.getMainWallet()},methods:{handleFromChange:function(){},handleToChange:function(){},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,r){e||t.postData(r)}))},setMax:function(){},switchWallets:function(){var e=this.fromValue,t=this.toValue;this.fromValue=t,this.toValue=e},postData:function(data){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,r={Authorization:"Bearer "+e.$cookies.get("Token")},n=c({},data),t.next=6,e.$axios.post(e.$config.FINANCE_API_URL+"/Transfer",n,{headers:r});case 6:(o=t.sent).data.Success?(e.$notification.success({message:"Success",description:o.data.Message}),e.getMainWallet()):e.$notification.error({message:"Hata",description:o.data.Message}),e.loading=!1,t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),e.loading=!1,e.$notification.error({message:"Hata",description:t.t0});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()},getDropdownContent:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r={Authorization:"Bearer "+e.$cookies.get("Token")},t.next=4,e.$axios.get(e.$config.FINANCE_API_URL+"/GetFilters",{headers:r});case 4:(n=t.sent).data&&(e.loading=!1,e.fromToDropdownContent=n.data.TransferList.map((function(e){return e.Name})),e.fromToDropdownContent=e.fromToDropdownContent.filter((function(t){return t!==e.$t("text_security_deposit")})),e.unitDromDownContent=n.data.AssetList.map((function(e){return e.Name}))),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.$notification.error({message:"Hata",description:t.t0});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},getMainWallet:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,o,l,c,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r={Authorization:"Bearer "+e.$cookies.get("Token")},t.next=4,e.$axios.get(e.$config.FINANCE_API_URL+"/GetUserBalance",{headers:r});case 4:(n=t.sent).data&&(e.loading=!1,o=n.data,l=o.SecurityBalance,c=o.UserP2PBalance,e.showingData.usdtSecurityBalance=l,f=Object.values(c).filter((function(e){return"USDT"===e.asset})),e.showingData.usdtP2PBalance=f[0].free.toFixed(8)),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},d=(r(2531),r(19)),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"popup"},[e.loading?n("a-icon",{attrs:{type:"sync",spin:""}}):n("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[n("div",{staticClass:"fromToRow"},[n("a-form-item",{attrs:{label:e.$t("transfer_sender")}},[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["From",{rules:[{required:!0,message:this.$t("text_required_field")}],initialValue:e.fromValue}],expression:"[\n            'From',\n            {\n              rules: [\n                { required: true, message: this.$t('text_required_field') },\n              ],\n              initialValue: fromValue,\n            },\n          ]"}],staticClass:"fromToSelects",attrs:{disabled:!0},on:{change:e.handleFromChange}},e._l(e.fromToDropdownContent,(function(t){return n("a-select-option",{key:t,attrs:{value:t}},[e._v("\n            "+e._s(t)+"\n          ")])})),1)],1),e._v(" "),n("img",{staticClass:"switch-icon",attrs:{src:r(1311),height:"32"},on:{click:e.switchWallets}}),e._v(" "),n("a-form-item",{attrs:{label:e.$t("transfer_receiver")}},[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["To",{rules:[{required:!0,message:this.$t("text_required_field")}],initialValue:e.toValue}],expression:"[\n            'To',\n            {\n              rules: [\n                { required: true, message: this.$t('text_required_field') },\n              ],\n              initialValue: toValue,\n            },\n          ]"}],staticClass:"fromToSelects",attrs:{disabled:!0},on:{change:e.handleToChange}},e._l(e.fromToDropdownContent,(function(t){return n("a-select-option",{key:t,attrs:{value:t}},[e._v("\n            "+e._s(t)+"\n          ")])})),1)],1)],1),e._v(" "),n("a-form-item",[n("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["Amount",{rules:[{required:!0,message:this.$t("text_required_field")}]}],expression:"[\n          'Amount',\n          {\n            rules: [\n              { required: true, message: this.$t('text_required_field') },\n            ],\n          },\n        ]"}],staticStyle:{width:"300px"}})],1),e._v(" "),n("div",{staticClass:"avaiable"},[n("span",[e._v(e._s(e.$t("transfer_available_amount")))]),e._v(" "),this.fromValue===e.$t("text_security_deposit")?n("span",{staticClass:"total"},[e._v(e._s(e.showingData.usdtSecurityBalance.toFixed(8))+" USDT")]):n("span",{staticClass:"total",on:{click:e.setMax}},[e._v(e._s(e.showingData.usdtP2PBalance)+" USDT")])]),e._v(" "),n("a-button",{staticStyle:{width:"300px"},attrs:{type:"primary","html-type":"submit"}},[e._v("\n      "+e._s(e.$t("text_send"))+"\n    ")])],1)],1)}),[],!1,null,"53e26064",null);t.default=component.exports},2531:function(e,t,r){"use strict";var n=r(1520);r.n(n).a},2532:function(e,t,r){(t=r(53)(!1)).push([e.i,".popup[data-v-53e26064]{flex-direction:column;width:100%}.fromToRow[data-v-53e26064],.popup[data-v-53e26064]{display:flex;align-items:center}.fromToRow[data-v-53e26064]{justify-content:space-around;width:300px}.fromToSelects[data-v-53e26064]{width:120px}.avaiable[data-v-53e26064]{display:flex;justify-content:space-between;margin-bottom:10px}.avaiable .total[data-v-53e26064]{color:#1ba4e8}",""]),e.exports=t}}]);