(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1290:function(t,e,r){t.exports=r.p+"94fa2081167a0d215cfd2e76c459fb58.svg"},1298:function(t,e,r){var content=r(1348);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("d195b9cc",content,!0,{sourceMap:!1})},1310:function(t,e,r){t.exports=r.p+"d1182d0cd2c6f797f150d4db88cac337.svg"},1315:function(t,e,r){"use strict";r.r(e);r(31),r(22),r(1328),r(25);var n=r(13),o={name:"TransferPopUp",data:function(){var t=this,e=function(e,r,n){r?n():n(new Error(t.$t("text_required_field")))};return{TransferWallets:[],FIAT_WALLETS:["Fiat Wallet","P2P Wallet"],UserWalletsBalance:[],TransferData:{From:"Main Wallet",To:"Fiat Wallet",Amount:0,Asset:void 0},TransferDataRules:{From:[{validator:e,trigger:"change"}],To:[{validator:e,trigger:"change"}],Amount:[{validator:e,trigger:"change"},{validator:function(e,r,n){r<=t.TransferAssetAvailableAmount?n():n(new Error(t.$t("text_insufficient_balance")))},trigger:"change"}],Asset:[{validator:e,trigger:"change"}]},isTransferLoading:!1,isTransferPopBusy:!1}},mounted:function(){this.getTransferWallets(),this.getUserBalance()},methods:{getAssetIcon:function(symbol){try{return r(1271)("./".concat(symbol.toLowerCase(),".svg"))}catch(t){return r(637)}},switchWallets:function(){var t=this.TransferData,e=t.From,r=t.To;this.TransferData.From=r,this.TransferData.To=e},ValidateAndTransfer:function(){var t=this;this.$refs.TransferForm.validate((function(e){e&&t.Transfer()}))},Transfer:function(data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isTransferLoading=!0,t.isTransferPopBusy=!0,r={Authorization:"Bearer "+t.$cookies.get("Token")},e.next=6,t.$axios.post(t.$config.FINANCE_API_URL+"/Transfer",t.TransferData,{headers:r});case 6:n=e.sent,(o=n.data).Success?(t.$notification.success({message:"Success",description:o.Message}),t.getUserBalance()):t.$notification.info({message:"Failed",description:o.Message}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0.response?t.$notification.info({message:"Failed",description:e.t0.response.data.Message}):console.error(e.t0);case 14:return e.prev=14,t.isTransferLoading=!1,t.isTransferPopBusy=!1,e.finish(14);case 18:case"end":return e.stop()}}),e,null,[[0,11,14,18]])})))()},getTransferWallets:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isTransferPopBusy=!0,r={Authorization:"Bearer "+t.$cookies.get("Token")},e.next=5,t.$axios.get(t.$config.FINANCE_API_URL+"/GetFilters",{headers:r});case 5:n=e.sent,(data=n.data).Success&&(o=data.TransferList,t.TransferWallets=o.filter((function(t){return"Security Wallet"!==t.Key}))),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:return e.prev=12,t.isTransferPopBusy=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,10,12,15]])})))()},getUserBalance:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isTransferPopBusy=!0,r={Authorization:"Bearer "+t.$cookies.get("Token")},e.next=5,t.$axios.get(t.$config.FINANCE_API_URL+"/GetUserBalance",{headers:r});case 5:n=e.sent,(data=n.data).Success&&(t.UserWalletsBalance=data),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:return e.prev=12,t.isTransferPopBusy=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,10,12,15]])})))()}},computed:{TransferWalletsFrom:function(){var t=this;return this.TransferWallets.filter((function(e){return e.Key!==t.TransferData.To}))},TransferWalletsTo:function(){var t=this;return this.TransferWallets.filter((function(e){return e.Key!==t.TransferData.From}))},WalletAssets:function(){return"Fiat Wallet"!==this.TransferData.From&&"Fiat Wallet"!==this.TransferData.To||!this.UserWalletsBalance.UserFiatBalance?"P2P Wallet"===this.TransferData.From||"P2P Wallet"===this.TransferData.To?this.UserWalletsBalance.UserP2PBalance:void 0:this.UserWalletsBalance.UserFiatBalance.filter((function(t){return"TRY"!==t.asset}))},TransferAssetAvailableAmount:function(){var t=this;if("Main Wallet"===this.TransferData.From){if(this.UserWalletsBalance.UserSpotBalance){var e=Object.values(this.UserWalletsBalance.UserSpotBalance).filter((function(e){return e.asset===t.TransferData.Asset}));return e[0]?e[0].free.toFixed(8):""}}else if("Fiat Wallet"===this.TransferData.From){if(this.UserWalletsBalance.UserFiatBalance){var r=Object.values(this.UserWalletsBalance.UserFiatBalance).filter((function(e){return e.asset===t.TransferData.Asset}));return r[0]?r[0].free.toFixed(8):""}}else if("P2P Wallet"===this.TransferData.From&&this.UserWalletsBalance.UserP2PBalance){var n=Object.values(this.UserWalletsBalance.UserP2PBalance).filter((function(e){return e.asset===t.TransferData.Asset}));return n[0]?n[0].free.toFixed(8):""}}},watch:{"TransferData.From":{handler:function(t,e){"Main Wallet"!==t&&"Main Wallet"!==this.TransferData.To&&(this.TransferData.To=e,this.TransferData.Asset=void 0)},deep:!0},"TransferData.To":{handler:function(t,e){"Main Wallet"!==t&&"Main Wallet"!==this.TransferData.From&&(this.TransferData.From=e,this.TransferData.Asset=void 0)},deep:!0}}},l=(r(1347),r(19)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("a-spin",{attrs:{spinning:t.isTransferPopBusy}},[n("a-form-model",{ref:"TransferForm",attrs:{model:t.TransferData,rules:t.TransferDataRules}},[n("a-row",{attrs:{gutter:16,type:"flex",align:"middle"}},[n("a-col",{attrs:{span:10}},[n("a-form-model-item",{attrs:{prop:"From"}},[n("h4",{staticClass:"m-0 Roboto-Bold text-left"},[t._v("\n              "+t._s(t.$t("transfer_sender"))+"\n            ")]),t._v(" "),n("a-select",{staticClass:"Roboto-Regular",attrs:{size:"large"},model:{value:t.TransferData.From,callback:function(e){t.$set(t.TransferData,"From",e)},expression:"TransferData.From"}},t._l(t.TransferWalletsFrom,(function(e,r){return n("a-select-option",{key:r,attrs:{value:e.Key}},[t._v("\n                "+t._s(e.Name)+"\n              ")])})),1)],1)],1),t._v(" "),n("a-col",{attrs:{span:4}},[n("div",{staticClass:"text-center"},[n("img",{staticClass:"switch-wallets-icon",attrs:{src:r(1310)},on:{click:t.switchWallets}})])]),t._v(" "),n("a-col",{attrs:{span:10}},[n("a-form-model-item",{attrs:{prop:"To"}},[n("h4",{staticClass:"m-0 Roboto-Bold text-right"},[t._v("\n              "+t._s(t.$t("transfer_receiver"))+"\n            ")]),t._v(" "),n("a-select",{staticClass:"Roboto-Regular",attrs:{size:"large"},model:{value:t.TransferData.To,callback:function(e){t.$set(t.TransferData,"To",e)},expression:"TransferData.To"}},t._l(t.TransferWalletsTo,(function(e,r){return n("a-select-option",{key:r,attrs:{value:e.Key}},[t._v("\n                "+t._s(e.Name)+"\n              ")])})),1)],1)],1)],1),t._v(" "),n("a-row",{attrs:{gutter:16}},[n("a-col",{attrs:{span:24}},[n("a-form-model-item",{attrs:{prop:"Asset","has-feedback":""}},[n("a-select",{staticClass:"Roboto-Regular",attrs:{size:"large",placeholder:t.$t("main_wallet_asset")},model:{value:t.TransferData.Asset,callback:function(e){t.$set(t.TransferData,"Asset",e)},expression:"TransferData.Asset"}},t._l(t.WalletAssets,(function(e,r){return n("a-select-option",{key:r,attrs:{value:e.asset}},[n("div",{staticClass:"d-flex align-items-center justify-content-start"},[n("img",{staticStyle:{"margin-right":"6px"},attrs:{src:t.getAssetIcon(e.asset),width:"18px"}}),t._v(" "),n("span",{staticClass:"Roboto-Bold"},[t._v("\n                    "+t._s(e.asset)+"\n                  ")])])])})),1)],1)],1)],1),t._v(" "),n("a-row",{attrs:{gutter:16}},[n("a-col",{attrs:{span:24}},[n("a-form-model-item",{attrs:{prop:"Amount","has-feedback":""}},[n("a-input-number",{staticClass:"w-100 Roboto-Regular",attrs:{size:"large"},model:{value:t.TransferData.Amount,callback:function(e){t.$set(t.TransferData,"Amount",e)},expression:"TransferData.Amount"}})],1)],1)],1),t._v(" "),n("a-row",{staticStyle:{margin:"10px auto"},attrs:{gutter:0}},[n("a-col",{attrs:{span:12}},[n("h4",{staticClass:"text-left Roboto-Regular"},[t._v("\n            "+t._s(t.$t("transfer_available_amount"))+"\n          ")])]),t._v(" "),n("a-col",{attrs:{span:12}},[n("h4",{staticClass:"text-right primary-text Roboto-Bold"},[n("a-button",{attrs:{type:"link"},on:{click:function(e){t.TransferData.Amount=t.TransferAssetAvailableAmount}}},[t._v("\n              "+t._s(t.TransferAssetAvailableAmount)+" "+t._s(t.TransferData.Asset)+"\n            ")])],1)])],1),t._v(" "),n("a-row",{attrs:{gutter:16}},[n("a-col",{attrs:{span:24}},[n("a-button",{staticClass:"Roboto-Medium",attrs:{size:"large",loading:t.isTransferLoading,type:"primary",block:""},on:{click:t.ValidateAndTransfer}},[t._v("\n            "+t._s(t.$t("transfer_start"))+"\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,"b330ed30",null);e.default=component.exports},1323:function(t,e,r){t.exports=r.p+"b3d00314f1169b7e6b8d7fb4ce4aae58.svg"},1328:function(t,e,r){var n=r(29),o=r(656)(!1);n(n.S,"Object",{values:function(t){return o(t)}})},1347:function(t,e,r){"use strict";var n=r(1298);r.n(n).a},1348:function(t,e,r){(e=r(53)(!1)).push([t.i,".switch-wallets-icon[data-v-b330ed30]{cursor:pointer}",""]),t.exports=e},1519:function(t,e,r){var content=r(2530);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("4c73ddfc",content,!0,{sourceMap:!1})},2529:function(t,e,r){"use strict";var n=r(1519);r.n(n).a},2530:function(t,e,r){var n=r(53),o=r(636),l=r(639),d=r(640),c=r(641),f=r(642),m=r(643),v=r(644),h=r(645),x=r(646),_=r(647),w=r(648),y=r(649),T=r(650),k=r(637);e=n(!1);var R=o(l),B=o(d),F=o(c),C=o(f),D=o(m),A=o(v),I=o(h),$=o(x),P=o(_),W=o(w),S=o(y),U=o(T),j=o(k);e.push([t.i,".h-100[data-v-2787df52]{height:100%!important}.w-100[data-v-2787df52]{width:100%!important}.w-50[data-v-2787df52]{width:50%!important}.btn-text-dark[data-v-2787df52]{color:#12161d!important;text-shadow:none!important}.bg-transparent[data-v-2787df52]{background:transparent!important}.cointral-card[data-v-2787df52]{box-shadow:0 0 4px rgba(0,0,0,.05098)!important;border-radius:3px!important}.d-flex[data-v-2787df52]{display:flex}.align-items-center[data-v-2787df52]{align-items:center}.justify-content-between[data-v-2787df52]{justify-content:space-between}.justify-content-start[data-v-2787df52]{justify-content:flex-start}.flex-column[data-v-2787df52]{flex-direction:column}.flex-1[data-v-2787df52]{flex:1}.flex-wrap[data-v-2787df52]{flex-wrap:wrap}.flex-grow[data-v-2787df52]{flex-grow:1}.font-weight-600[data-v-2787df52]{font-weight:600}.mb-15[data-v-2787df52]{margin-bottom:15px!important}.mt-15[data-v-2787df52]{margin-top:15px!important}.no-focus-shadow input[data-v-2787df52]:focus{box-shadow:none!important}.c-pointer[data-v-2787df52]{cursor:pointer}.d-flex[data-v-2787df52]{display:flex!important}.px-3[data-v-2787df52]{padding:0 1rem}.pr-2[data-v-2787df52]{padding-right:.5rem}.pl-2[data-v-2787df52]{padding-left:.5rem}.p-0[data-v-2787df52]{padding:0!important}.my-5[data-v-2787df52]{margin:5px auto}.my-10[data-v-2787df52]{margin:10px auto}.my-20[data-v-2787df52]{margin:20px auto}.border-none[data-v-2787df52]{border:none!important}.card-box-shadow[data-v-2787df52]{box-shadow:0 0 10px rgba(0,0,0,.10196)}.h-100vh[data-v-2787df52]{min-height:100vh}.text-center[data-v-2787df52]{text-align:center}.m-0[data-v-2787df52]{margin:0}.mr-0[data-v-2787df52]{margin-right:0}.ml-0[data-v-2787df52]{margin-left:0}.mt-0[data-v-2787df52]{margin-top:0}.mb-0[data-v-2787df52]{margin-bottom:0}.mx-auto[data-v-2787df52]{margin-left:auto;margin-right:auto}.float-left[data-v-2787df52]{float:left}.float-right[data-v-2787df52]{float:right}.text-left[data-v-2787df52]{text-align:left}.text-right[data-v-2787df52]{text-align:right}.cursor-pointer[data-v-2787df52]{cursor:pointer}.primary-text[data-v-2787df52]{color:var(--text-primary)}.input-label[data-v-2787df52]{color:var(--active-tab-text-color)}.d-inline[data-v-2787df52]{display:inline}.block-pointer[data-v-2787df52]{pointer-events:none}.tab-label-active[data-v-2787df52]{color:var(--active-tab-text-color)}.tab-label-inactive[data-v-2787df52]{color:var(--inactive-tab-text-color)}@font-face{font-family:Roboto-Black;src:url("+R+")}@font-face{font-family:Roboto-BlackItalic;src:url("+B+")}@font-face{font-family:Roboto-Bold;src:url("+F+")}@font-face{font-family:Roboto-BoldItalic;src:url("+C+")}@font-face{font-family:Roboto-Italic;src:url("+D+")}@font-face{font-family:Roboto-Light;src:url("+A+")}@font-face{font-family:Roboto-LightItalic;src:url("+I+")}@font-face{font-family:Roboto-Medium;src:url("+$+")}@font-face{font-family:Roboto-MediumItalic;src:url("+P+")}@font-face{font-family:Roboto-Regular;src:url("+W+")}@font-face{font-family:Roboto-Thin;src:url("+S+")}@font-face{font-family:Roboto-ThinItalic;src:url("+U+")}.Roboto-Black[data-v-2787df52]{font-family:Roboto-Black}.Roboto-BlackItalic[data-v-2787df52]{font-family:Roboto-BlackItalic}.Roboto-Bold[data-v-2787df52]{font-family:Roboto-Bold}.Roboto-BoldItalic[data-v-2787df52]{font-family:Roboto-BoldItalic}.Roboto-Italic[data-v-2787df52]{font-family:Roboto-Italic}.Roboto-Light[data-v-2787df52]{font-family:Roboto-Light}.Roboto-LightItalic[data-v-2787df52]{font-family:Roboto-LightItalic}.Roboto-Medium[data-v-2787df52]{font-family:Roboto-Medium}.Roboto-MediumItalic[data-v-2787df52]{font-family:Roboto-MediumItalic}.Roboto-Regular[data-v-2787df52]{font-family:Roboto-Regular}.Roboto-Thin[data-v-2787df52]{font-family:Roboto-Thin}.Roboto-ThinItalic[data-v-2787df52]{font-family:Roboto-ThinItalic}.activeRow[data-v-2787df52]{background-color:#eaf8ff!important}.otc .ant-tabs-nav-container[data-v-2787df52]{padding-top:30px!important}.dark[data-v-2787df52] ::-webkit-scrollbar-thumb{background-color:#253558!important}.dark table[data-v-2787df52]{color:#fff!important}.otc .ant-tabs-tab-active[data-v-2787df52]{color:#212833!important;font-weight:500!important}.wallet-asset .ant-select-selection--single[data-v-2787df52],.wallet-withdraw .ant-select-selection--single[data-v-2787df52]{height:60px!important;display:flex;align-items:center}.wallet-withdraw .ant-form-item[data-v-2787df52]{display:flex}.wallet-withdraw .ant-form-item .ant-form-item-label[data-v-2787df52]{margin-right:20px}.wallet-withdraw .ant-form-item-control-wrapper[data-v-2787df52]{flex:1;max-width:430px;margin-left:auto}.container[data-v-2787df52]{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:768px){.container[data-v-2787df52]{width:750px}}@media (min-width:992px){.container[data-v-2787df52]{width:970px}}@media (min-width:1200px){.container[data-v-2787df52]{width:1170px}}@media (min-width:1400px){.container[data-v-2787df52]{width:1320px}}.exchange-table-sm[data-v-2787df52]{width:100%}.exchange-table-sm .table-overlay[data-v-2787df52]{height:auto!important}.exchange-table-sm .exchange-table__head[data-v-2787df52]{align-items:center;height:30px;padding:0 1rem;background:#202429}.exchange-table-sm .exchange-table__head-item[data-v-2787df52]{color:#7c8795}.exchange-table-sm table tbody tr[data-v-2787df52]{height:25px}.exchange-table-sm table tbody tr td[data-v-2787df52]{background:#1a2026!important;border-bottom:1px solid #171b21;border-radius:0!important}.exchange-table-sm table tbody tr td[data-v-2787df52]:first-child{padding-left:1rem!important}.exchange-table-sm table tbody tr td[data-v-2787df52]:last-child{padding-right:1rem!important}.exchange-table__head[data-v-2787df52]{display:flex;justify-content:space-between;padding-bottom:10px}.exchange-table__head-item[data-v-2787df52]{color:#545557;font-size:13px}.exchange-table__head-item[data-v-2787df52]:last-child{text-align:right}.exchange-table .table-overlay[data-v-2787df52]{display:flex;overflow-y:scroll;height:325px}.exchange-table .table-overlay[data-v-2787df52]::-webkit-scrollbar{width:6px;background:transparent}.exchange-table .table-overlay[data-v-2787df52]::-webkit-scrollbar-thumb{background:#d8d8d8;border-radius:3px}.exchange-table .table-overlay table[data-v-2787df52]{width:100%}.exchange-table .table-overlay table.no-even-bg tbody tr:nth-child(2n) td[data-v-2787df52]{background:transparent}.exchange-table .table-overlay table tbody tr[data-v-2787df52]{height:25px}.exchange-table .table-overlay table tbody tr:nth-child(2n) td[data-v-2787df52]:first-child{border-bottom-left-radius:6px;border-top-left-radius:6px}.exchange-table .table-overlay table tbody tr:nth-child(2n) td[data-v-2787df52]:last-child{border-top-right-radius:6px;border-bottom-right-radius:6px}.exchange-table .table-overlay table tbody tr td[data-v-2787df52]{font-size:11px}.exchange-table .table-overlay table tbody tr td.success[data-v-2787df52]{color:#288b38}.exchange-table .table-overlay table tbody tr td.danger[data-v-2787df52]{color:#ce483e}.exchange-table .table-overlay table tbody tr td[data-v-2787df52]:last-child{text-align:right}.select-white[data-v-2787df52],.select-white .ant-select-dropdown-menu-item[data-v-2787df52]{color:#1e2026!important}.action-buttons[data-v-2787df52]{display:flex;justify-content:space-around;width:100%}.action-header[data-v-2787df52]{min-height:51px}.ant-input-number-handler-wrap[data-v-2787df52]{display:none}.ant-modal-header[data-v-2787df52]{text-align:center}[dir=ltr] .ant-table-expanded-row .ant-table-expanded-row-level-1[data-v-2787df52]{text-align:right}[dir=rtl] .ant-table-expanded-row .ant-table-expanded-row-level-1[data-v-2787df52]{text-align:left}.ant-empty-image[data-v-2787df52]{display:none!important}.ant-empty-description[data-v-2787df52]{display:none}.ant-empty[data-v-2787df52]{width:100%;height:200px;background:url("+j+");background-repeat:no-repeat;background-position:50% 50%;background-size:auto}@media (min-width:1000px){.cointral-card[data-v-2787df52]{width:80vw}}.ant-menu-item>a[data-v-2787df52]{color:#fff!important}.ant-menu-item-selected>a[data-v-2787df52],.ant-menu-item-selected>a[data-v-2787df52]:hover{color:#50c5fd}.verify-form-model .ant-form-item[data-v-2787df52]{margin:2px auto}.vue-tel-input[data-v-2787df52]:focus,.vue-tel-input[focus-within][data-v-2787df52]{box-shadow:0 0 0 2px rgba(80,197,253,.2)!important;border-color:#7ad9ff!important;border-right-width:1px!important;outline:0!important}.vue-tel-input[data-v-2787df52]:focus,.vue-tel-input[data-v-2787df52]:focus-within{box-shadow:0 0 0 2px rgba(80,197,253,.2)!important;border-color:#7ad9ff!important;border-right-width:1px!important;outline:0!important}.ant-table .ant-table-tbody[data-v-2787df52]{color:#2c2c2c;font-family:Roboto-Medium}@media screen and (max-width:999px){.hide-mobile-1000[data-v-2787df52]{display:none}}.price[data-v-2787df52]{padding:25px 0 0 24px}.breadcrumb[data-v-2787df52]{font-size:12px;padding-bottom:58px}.table[data-v-2787df52]{width:80vw;align-self:center}.deactivated[data-v-2787df52]{pointer-events:none;color:#bbc0c7}.total[data-v-2787df52]{padding-top:24px;padding-bottom:24px;min-width:80vw;background:#fff 0 0 no-repeat padding-box;box-shadow:0 0 3px rgba(0,0,0,.05882);border-radius:3px;display:flex;justify-content:space-between;margin-bottom:21px}.total .left-total[data-v-2787df52]{padding:0 22px;display:flex;flex-direction:column;justify-content:center}.total .left-total p[data-v-2787df52]{font-size:14px;letter-spacing:0;color:#788191;margin:0}@media (max-width:1000px){.total[data-v-2787df52]{max-width:350px;justify-content:space-around;align-items:flex-start;flex-direction:column}}.total .left-total-bottom[data-v-2787df52]{display:flex;flex-direction:row;align-items:flex-end}@media (max-width:1000px){.total .left-total-bottom[data-v-2787df52]{flex-direction:column;align-items:flex-start}}.total .left-total-bottom button[data-v-2787df52]{background:#fff 0 0 no-repeat padding-box;border:1px solid #eaecef;border-radius:3px;width:122px;height:20px;font-size:12px;color:#212833;margin-bottom:6px}.total .left-total-bottom .amount[data-v-2787df52]{font-size:32px;letter-spacing:-.61px;color:#1e2026}.total .left-total-bottom .type[data-v-2787df52]{font-size:14px;letter-spacing:-.27px;color:#0d0d0d;padding-bottom:6px}.total .left-total-bottom .equals[data-v-2787df52]{padding-bottom:6px;padding-right:16px}.total .right-total[data-v-2787df52]{display:flex;align-items:center;padding-right:23px;flex-wrap:wrap}.total .right-total__link[data-v-2787df52]{flex-basis:100%;text-align:right;margin-bottom:15px;padding-right:15px}@media (min-width:1000px){.total .right-total__link[data-v-2787df52]{flex-basis:auto;order:4;margin-bottom:0}}.total .right-total .deposit-button[data-v-2787df52]{background-color:#fff;width:96px;height:32px;border:1px solid #eaecef;border-radius:3px;opacity:1;font-size:14px;color:#1e2026;margin-right:14px}.total .right-total .deposit-button img[data-v-2787df52]{display:inline-block}@media (max-width:1000px){.total .right-total .deposit-button[data-v-2787df52]{margin-right:5px}}@media (max-width:1000px){.total .right-total[data-v-2787df52]{padding-right:0;padding-left:23px}}.total .right-total .bg-blue[data-v-2787df52]{background:#90dafe 0 0 no-repeat padding-box}.total .right-total a[data-v-2787df52]{text-decoration:underline}.table-grid[data-v-2787df52]{min-width:85vw;background:#fff;display:flex;flex-direction:column;justify-content:flex-start}@media (max-width:1000px){.table-grid[data-v-2787df52]{max-width:350px;height:100%}}.table-grid .search[data-v-2787df52]{padding:20px 0}.search[data-v-2787df52]{width:320px;display:flex;justify-content:space-around;margin-left:35px;align-items:center}.search .search-input[data-v-2787df52]{width:180px;border:none;border-bottom:1px solid #e6e8ea}@media (max-width:1000px){.search[data-v-2787df52]{margin-left:0}.search .checkbox[data-v-2787df52]{width:150px}}.name-slot[data-v-2787df52]{width:100%;display:flex;align-items:center}.name-slot img[data-v-2787df52]{margin-right:15px}.name-slot span[data-v-2787df52]{padding-right:5px}.name-slot a[data-v-2787df52]{text-decoration:underline;font-size:14px;color:#788191}",""]),t.exports=e},2771:function(t,e,r){"use strict";r.r(e);r(63),r(32),r(31),r(22),r(55),r(25);var n=r(13),o=(r(64),r(71),r(26)),l=r(41),d=r(1330);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"Price",components:{TransferPopUp:function(){return Promise.resolve().then(r.bind(null,1315))}},head:function(){return{title:this.$t("title_text_try_wallet")}},data:function(){return{data:[],originalData:[],pagination:{pageSize:17},searchInput:null,loading:!1,TotalFiatBalanceInBtc:0,TotalFiatBalanceInTL:0,isMobile:d.isMobile,visible:!1,isSecret:!1,secret:"*******",columns:[{title:this.$t("main_wallet_asset"),dataIndex:"asset",key:"asset",sorter:!0,width:"20%",scopedSlots:{customRender:"asset"}},{title:this.$t("main_wallet_text_available"),dataIndex:"free",key:"free",width:"15%",sorter:!0,scopedSlots:{customRender:"free"}},{title:this.$t("main_wallet_text_used"),dataIndex:"locked",key:"locked",width:"15%",sorter:!0,scopedSlots:{customRender:"locked"}},{title:this.$t("main_wallet_text_total"),dataIndex:"TotalQty",key:"TotalQty",width:"15%",sorter:!0,scopedSlots:{customRender:"TotalQty"}},{title:this.$t("main_wallet_text_btc_amount"),dataIndex:"BtcQty",key:"BtcQty",width:"15%",sorter:!0,scopedSlots:{customRender:"BtcQty"}}],mobileColumns:[{title:this.$t("main_wallet_asset"),dataIndex:"asset",key:"asset",sorter:!0,width:"20%",scopedSlots:{customRender:"asset"}},{title:this.$t("main_wallet_text_total"),dataIndex:"TotalQty",key:"TotalQty",width:"15%",sorter:!0,scopedSlots:{customRender:"TotalQty"}}]}},mounted:function(){this.asyncData()},methods:f(f({changeSecret:function(){this.isSecret=!this.isSecret},showModal:function(){this.visible=!0},resetCoin:function(){this.data=this.originalData}},Object(l.d)({SET_CURRENT_TAB:"wallet/SET_CURRENT_TAB"})),{},{handleTableChange:function(t,e,r){var n=f({},this.pagination);n.current=t.current,this.pagination=n,this.loading=!1},onInputChange:function(t){this.data=this.originalData},onChange:function(t){var e=t.target.checked;this.data=e?filteredData:this.originalData},searchCoin:function(){var t=this,e=this.data.filter((function(element){return element.asset.toLowerCase().includes(t.searchInput.toLowerCase())}));this.data=""===this.searchInput?this.originalData:e},asyncData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={Authorization:"Bearer "+t.$cookies.get("Token")},e.next=4,t.$axios.get(t.$config.FINANCE_API_URL+"/GetUserBalance",{headers:r});case 4:(n=e.sent).data&&(t.loading=!1,t.data=n.data.UserFiatBalance,t.originalData=n.data.UserFiatBalance,t.TotalFiatBalanceInBtc=n.data.TotalFiatBalanceInBtc,t.TotalFiatBalanceInTL=n.data.TotalFiatBalanceInTRY),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()}})},v=(r(2529),r(19)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"price"},[n("h1",[t._v(t._s(t.$t("price_try_wallet")))]),t._v(" "),n("div",{staticClass:"total"},[n("div",{staticClass:"left-total"},[n("p",[t._v(t._s(t.$t("price_approximate_balance")))]),t._v(" "),n("div",{staticClass:"left-total-bottom"},[n("p",{staticClass:"amount"},[t.isSecret?n("span",[t._v(t._s(t.secret))]):n("span",[t._v(t._s(t.TotalFiatBalanceInBtc.toFixed(8)))])]),t._v(" "),n("p",{staticClass:"type"},[t._v("BTC")]),t._v(" "),n("p",{staticClass:"equals"},[t._v("\n          =₺\n          "),t.isSecret?n("span",[t._v(t._s(t.secret))]):n("span",[t._v(t._s(t.TotalFiatBalanceInTL.toFixed(8)))])]),t._v(" "),n("a-button",{on:{click:t.changeSecret}},[n("img",{staticStyle:{"margin-right":"5px"},attrs:{src:r(1290),width:"15"}}),t._v(" "),t.isSecret?n("span",[t._v(t._s(t.$t("text_show_balance")))]):n("span",[t._v(t._s(t.$t("text_hide_balance")))])])],1)]),t._v(" "),n("div",{staticClass:"right-total"},[n("div",{staticClass:"right-total__link"},[n("a",{attrs:{href:"/my/wallet/history"}},[t._v(t._s(t.$t("fiat_wallet_history")))])]),t._v(" "),n("nuxt-link",{attrs:{to:t.localePath("/my/wallet/fiat-wallet/deposit")}},[n("button",{staticClass:"deposit-button cursor-pointer bg-blue"},[t._v("\n          "+t._s(t.$t("text_deposit"))+"\n        ")])]),t._v(" "),n("nuxt-link",{attrs:{to:t.localePath("/my/wallet/fiat-wallet/withdraw")}},[n("button",{staticClass:"deposit-button cursor-pointer"},[t._v("\n          "+t._s(t.$t("text_withdraw"))+"\n        ")])]),t._v(" "),n("button",{staticClass:"deposit-button cursor-pointer",on:{click:t.showModal}},[t._v("\n        Transfer\n        "),n("img",{attrs:{src:r(1323),alt:""}})]),t._v(" "),n("a-modal",{attrs:{title:t.$t("text_transfer"),footer:null},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("TransferPopUp")],1)],1)]),t._v(" "),n("div",{staticClass:"table-grid"},[n("div",{staticClass:"search"},[n("a-input",{directives:[{name:"ant-ref",rawName:"v-ant-ref",value:function(e){return t.searchInput=e?e.stateValue:null},expression:"(c) => (searchInput = c ? c.stateValue : null)"}],staticClass:"search-input",attrs:{placeholder:t.$t("price_search")},on:{pressEnter:t.searchCoin,change:t.onInputChange}}),t._v(" "),n("a-button",{staticStyle:{padding:"0 10px"},attrs:{type:"primary"},on:{click:t.searchCoin}},[t._v("\n        "+t._s(t.$t("price_search"))+"\n      ")]),t._v(" "),n("a",{on:{click:t.resetCoin}},[t._v(t._s(t.$t("price_reset")))])],1),t._v(" "),n("a-table",{staticClass:"table",attrs:{columns:t.isMobile?t.mobileColumns:t.columns,"row-key":function(t,e){return e},pagination:t.pagination,"data-source":t.data,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"asset",fn:function(e,o){return[n("div",{staticClass:"name-slot"},[n("img",{attrs:{width:"20",height:"20",src:r(1271)("./"+o.asset.toLowerCase()+".svg"),alt:o.asset.toLowerCase()}}),t._v(" "),n("span",[t._v(t._s(e))]),t._v(" "),n("a",[t._v(t._s(o.Name))])])]}},{key:"locked",fn:function(e){return[t.isSecret?n("span",[t._v(t._s(t.secret))]):n("span",[t._v(t._s(e.toFixed(8)))])]}},{key:"free",fn:function(e){return[t.isSecret?n("span",[t._v(t._s(t.secret))]):n("span",[t._v(t._s(e.toFixed(8)))])]}},{key:"TotalQty",fn:function(e){return[t.isSecret?n("span",[t._v(t._s(t.secret))]):n("span",[t._v(t._s(e.toFixed(8)))])]}},{key:"BtcQty",fn:function(e){return[t.isSecret?n("span",[t._v(t._s(t.secret))]):n("span",[t._v(t._s(e.toFixed(8)))])]}},{key:"actions",fn:function(e){return[n("nuxt-link",{attrs:{to:t.localePath("/my/wallet/main-wallet/deposit/"+e.asset)}},[t._v(t._s(t.$t("price_deposit_btn")))]),t._v(" "),n("nuxt-link",{attrs:{to:t.localePath("/my/wallet/main-wallet/withdraw/"+e.asset)}},[t._v(t._s(t.$t("price_withdraw_btn")))]),t._v(" "),n("nuxt-link",{attrs:{to:t.localePath("/trade")}},[t._v("Trade")])]}}])})],1)])}),[],!1,null,"2787df52",null);e.default=component.exports;installComponents(component,{TransferPopUp:r(1315).default})}}]);