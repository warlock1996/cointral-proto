(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1278:function(t,e,r){"use strict";var n=r(29),o=r(648)(6),c="findIndex",l=!0;c in[]&&Array(1)[c]((function(){l=!1})),n(n.P+n.F*l,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(199)(c)},1523:function(t,e,r){var content=r(2473);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("16dc4afc",content,!0,{sourceMap:!1})},1524:function(t,e,r){var content=r(2475);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("96ee5272",content,!0,{sourceMap:!1})},2471:function(t,e,r){t.exports=r.p+"c00da2d30c0aec8b12b4ef83ef09b655.svg"},2472:function(t,e,r){"use strict";var n=r(1523);r.n(n).a},2473:function(t,e,r){(e=r(53)(!1)).push([t.i,".create-p2p-page[data-v-d5553f88]{background-color:#fafafa;min-height:100vh;padding:20px 50px}.create-p2p-page .breadcrumbs[data-v-d5553f88]{margin-bottom:30px}.content-row[data-v-d5553f88]{background:#fff;border-radius:6px;padding:25px}.create-p2p-card[data-v-d5553f88]{box-shadow:0 0 5px rgba(0,0,0,.05882);border-radius:10px}.whatiscointralimg[data-v-d5553f88]{margin:20px auto}.whatiscointralbtn[data-v-d5553f88]{border:none;box-shadow:0 3px 6px rgba(0,0,0,.16078);border-radius:6px}",""]),t.exports=e},2474:function(t,e,r){"use strict";var n=r(1524);r.n(n).a},2475:function(t,e,r){(e=r(53)(!1)).push([t.i,'.p2p-text[data-v-ba88149e]{font-size:14px;font-family:"Roboto-Medium";color:#bcc3ca}.P2POrderForm input[data-v-ba88149e]::-moz-placeholder{font-size:14px;font-family:"Roboto-Medium";color:#334150}.P2POrderForm input[data-v-ba88149e]:-ms-input-placeholder{font-size:14px;font-family:"Roboto-Medium";color:#334150}.P2POrderForm input[data-v-ba88149e]::placeholder{font-size:14px;font-family:"Roboto-Medium";color:#334150}.P2POrderForm input[data-v-ba88149e]{font-family:"Roboto-Regular"}.rounded-input[data-v-ba88149e]{pointer-events:none}.rounded-input[data-v-ba88149e] .ant-input{border-radius:50px}',""]),t.exports=e},2689:function(t,e,r){"use strict";r.r(e);r(25);var n=r(14),o=(r(1278),r(26)),c={props:{P2PType:{required:!0,type:String},FiatList:{required:!0,type:Array}},data:function(){var t;return{P2POrder:{FiatCurrency:void 0,FiatPrice:0,Asset:void 0,AssetAmount:"",Min:"",Partially:!0,Type:this.P2PType,UserBankUniqueID:void 0},P2POrderRules:(t={Asset:[{validator:this.required,trigger:"change"}],FiatCurrency:[{validator:this.required,trigger:"change"}],FiatPrice:[{validator:this.required,trigger:"change"}]},Object(o.a)(t,"Asset",[{validator:this.required,trigger:"change"}]),Object(o.a)(t,"AssetAmount",[{validator:this.required,trigger:"change"}]),Object(o.a)(t,"Min",[{validator:this.required,trigger:"change"}]),Object(o.a)(t,"Type",[{validator:this.required,trigger:"change"}]),Object(o.a)(t,"UserBankUniqueID",[{validator:this.required,trigger:"change"}]),t),SymbolList:[],bankAccountList:[],P2PSpinner:!1,P2PBtnLoader:!1}},computed:{_AssetFiatPrice:function(){var t=this,e=this.SymbolList.findIndex((function(e){return e.Symbol===t.P2POrder.Asset}));if(e>=0)return this.SymbolList[e].Price},_AssetMaxPriceInMarket:function(){var t=this,e=this.SymbolList.findIndex((function(e){return e.Symbol===t.P2POrder.Asset}));if(e>=0)return this.SymbolList[e].MaxPriceInMarket}},watch:{"P2POrder.Partially":{handler:function(t){t||(this.P2POrder.Min="")}}},created:function(){this.GetP2PDataList()},methods:{getAssetIcon:function(symbol){try{return r(1268)("./".concat(symbol.toLowerCase(),".svg"))}catch(t){return r(634)}},GetP2PDataList:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l,data,d,P;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.P2PSpinner=!0,r=t.$cookies,n=t.$config,o=t.$axios,c={Authorization:"Bearer "+r.get("Token")},e.next=6,o.get(n.FINANCE_API_URL+"/GetP2PDataList",{headers:c});case 6:l=e.sent,(data=l.data).Success&&(d=data.BankAccountList,P=data.AssetList,t.bankAccountList=d,t.SymbolList=P),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:return e.prev=14,t.P2PSpinner=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))()},ValidateP2PForm:function(){var t=this;this.$refs.P2POrderFormRef.validate((function(e){e&&t.CreateP2POrder()}))},CreateP2POrder:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l,data,d,P;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.P2PSpinner=!0,t.P2PBtnLoader=!0,r=t.$cookies,n=t.$axios,o=t.$config,c={Authorization:"Bearer "+r.get("Token")},e.next=7,n.post(o.FINANCE_API_URL+"/CreateP2POrder",t.P2POrder,{headers:c});case 7:l=e.sent,data=l.data,d=data.Success,P=data.Message,data.ErrorCode,d?(t.P2POrder.FiatCurrency=void 0,t.P2POrder.FiatPrice=0,t.P2POrder.Asset=void 0,t.P2POrder.AssetAmount="",t.P2POrder.Min="",t.P2POrder.Partially=!0,t.P2POrder.UserBankUniqueID=void 0,t.$notification.success({message:"P2P Order",description:P})):t.$notification.error({message:"P2P Order",description:P}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),e.t0.response?t.$notification.error({message:"P2P Order",description:e.t0.response.data.Message}):console.error(e.t0);case 16:return e.prev=16,t.P2PSpinner=!1,t.P2PBtnLoader=!1,e.finish(16);case 20:case"end":return e.stop()}}),e,null,[[0,13,16,20]])})))()},required:function(t,e,r){""!==e&&null!==e&&e?r():r(new Error("Required !"))}}},l=(r(2474),r(19)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-spin",{attrs:{spinning:t.P2PSpinner}},[r("a-form-model",{ref:"P2POrderFormRef",staticClass:"P2POrderForm",attrs:{rules:t.P2POrderRules,model:t.P2POrder}},[r("a-row",{attrs:{gutter:[12,12]}},[r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{prop:"FiatCurrency","has-feedback":""}},[r("a-select",{attrs:{"show-search":"",size:"large",placeholder:"para birim"},model:{value:t.P2POrder.FiatCurrency,callback:function(e){t.$set(t.P2POrder,"FiatCurrency",e)},expression:"P2POrder.FiatCurrency"}},t._l(t.FiatList,(function(e){return r("a-select-option",{key:e.Name,staticStyle:{"background-color":"white"},attrs:{value:e.Symbol}},[r("img",{staticStyle:{"margin-bottom":"2px"},attrs:{height:"20",src:t.getAssetIcon(e.Symbol),alt:""}}),t._v("\n              "+t._s(e.Symbol)+" - "+t._s(e.Name)+"\n            ")])})),1)],1)],1),t._v(" "),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{prop:"Asset","has-feedback":""}},[r("a-select",{attrs:{"show-search":"",size:"large",placeholder:t.$t("placeholders_text_select")},model:{value:t.P2POrder.Asset,callback:function(e){t.$set(t.P2POrder,"Asset",e)},expression:"P2POrder.Asset"}},t._l(t.SymbolList,(function(e){return r("a-select-option",{key:e.Name,staticStyle:{"background-color":"white"},attrs:{value:e.Symbol}},[r("img",{staticStyle:{"margin-bottom":"2px"},attrs:{height:"20",src:t.getAssetIcon(e.Symbol),alt:""}}),t._v("\n              "+t._s(e.Symbol)+" - "+t._s(e.Name)+"\n            ")])})),1)],1)],1)],1),t._v(" "),r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{span:5}},[r("a-form-model-item",[r("p",{staticClass:"m-0 p2p-text"},[t._v("Fiayatiniz")]),t._v(" "),r("h3",[r("b",[t._v("\n              "+t._s(this.P2POrder.FiatPrice)+" "+t._s(this.P2POrder.FiatCurrency)+"\n            ")])])])],1),t._v(" "),r("a-col",{attrs:{span:5}},[r("a-form-model-item",[r("p",{staticClass:"m-0 p2p-text"},[t._v("En Yuksek")]),t._v(" "),r("h3",[r("b",[t._v(" "+t._s(t._AssetMaxPriceInMarket)+" "+t._s(this.P2POrder.Asset)+" ")])])])],1)],1),t._v(" "),r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{prop:"FiatPrice",colon:!1,"has-feedback":""}},[r("span",{staticClass:"p2p-text",attrs:{slot:"label"},slot:"label"},[t._v("Fiyat Alanı Örneği")]),t._v(" "),r("a-input",{staticClass:"text-center",attrs:{size:"large"},model:{value:t.P2POrder.FiatPrice,callback:function(e){t.$set(t.P2POrder,"FiatPrice",e)},expression:"P2POrder.FiatPrice"}},[r("div",{attrs:{slot:"prefix"},slot:"prefix"},[r("a-button",{attrs:{size:"small",icon:"minus"},on:{click:function(e){t.P2POrder.FiatPrice-=1}}})],1),t._v(" "),r("div",{attrs:{slot:"suffix"},slot:"suffix"},[r("a-button",{attrs:{size:"small",icon:"plus"},on:{click:function(e){t.P2POrder.FiatPrice+=1}}})],1)])],1)],1)],1),t._v(" "),r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{span:16}},[r("a-form-model-item",{attrs:{prop:"AssetAmount","has-feedback":""}},[r("a-input",{attrs:{size:"large",placeholder:t.$t("placeholders_text_amount")},model:{value:t.P2POrder.AssetAmount,callback:function(e){t.$set(t.P2POrder,"AssetAmount",e)},expression:"P2POrder.AssetAmount"}})],1)],1)],1),t._v(" "),r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{span:16}},[r("a-form-model-item",{attrs:{prop:"Partially","has-feedback":""}},[r("a-input",{staticClass:"rounded-input",staticStyle:{"border-radius":"50px"},attrs:{size:"large",placeholder:"Parçalı İstek"}},[r("div",{attrs:{slot:"suffix"},slot:"suffix"},[r("a-switch",{staticStyle:{"pointer-events":"all"},model:{value:t.P2POrder.Partially,callback:function(e){t.$set(t.P2POrder,"Partially",e)},expression:"P2POrder.Partially"}})],1)])],1)],1)],1),t._v(" "),t.P2POrder.Partially?r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{prop:"Min","has-feedback":""}},[r("a-input",{attrs:{size:"large",placeholder:"Min"},model:{value:t.P2POrder.Min,callback:function(e){t.$set(t.P2POrder,"Min",e)},expression:"P2POrder.Min"}})],1)],1),t._v(" "),r("a-col",{attrs:{span:6}},[r("a-form-model-item",{attrs:{"has-feedback":""}},[r("a-input",{attrs:{size:"large",placeholder:"Maks"}})],1)],1)],1):t._e(),t._v(" "),"SELL"===t.P2PType?r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{prop:"UserBankUniqueID","has-feedback":""}},[r("a-select",{attrs:{size:"large",placeholder:"Bank Hesabi Sezniniz"},model:{value:t.P2POrder.UserBankUniqueID,callback:function(e){t.$set(t.P2POrder,"UserBankUniqueID",e)},expression:"P2POrder.UserBankUniqueID"}},t._l(t.bankAccountList,(function(e,n){return r("a-select-option",{key:e.BankAccountId,attrs:{value:e.BankAccountId}},[t._v("\n              "+t._s(e.FriendlyName)+"\n            ")])})),1)],1)],1)],1):t._e(),t._v(" "),r("a-row",[r("a-col",[r("a-form-model-item",[r("a-button",{staticClass:"Roboto-Medium",attrs:{loading:t.P2PBtnLoader,type:"primary",block:"",size:"large"},on:{click:t.ValidateP2PForm}},[t._v("\n            İlan Oluştur\n          ")])],1)],1)],1),t._v(" "),r("a-row",[r("a-col",[r("a-form-model-item",[r("a-alert",{staticClass:"border-none",attrs:{"show-icon":"",type:"info"}},[r("span",{staticClass:"Roboto-Regular",attrs:{slot:"description"},slot:"description"},[t._v("\n              dolor in reprehenderit in voluptate velit esse cillum dolore eu\n              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n              proident, sunt in culpa qui officia deserunt mollit anim id est\n              laborum.\n            ")])])],1)],1)],1)],1)],1)}),[],!1,null,"ba88149e",null);e.default=component.exports},2766:function(t,e,r){"use strict";r.r(e);r(25);var n=r(14),o={middleware:["auth"],head:function(){return{title:"İlan Oluştur | Cointral.com"}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l,d,data,P,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=t.$axios,o=t.$cookies,c=t.$config,l={Authorization:"Bearer "+o.get("Token")},e.next=4,n.get(c.FINANCE_API_URL+"/GetP2PDataList",{params:{RequestId:r.id},headers:l});case 4:if(d=e.sent,data=d.data,P=data.Success,data.Message,m=data.FiatList,data.ErrorCode,!P){e.next=9;break}return e.abrupt("return",{FiatList:m});case 9:case"end":return e.stop()}}),e)})))()},mounted:function(){this.$router.push(this.localeRoute("/soon"))},data:function(){return{FiatList:[],ActiveP2PTab:"BUY",P2PTabList:[{key:"BUY",scopedSlots:{tab:"titleSlot"}},{key:"SELL",scopedSlots:{tab:"titleSlot"}}]}}},c=(r(2472),r(19)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"create-p2p-page"},[n("a-row",[n("a-col",{attrs:{span:24}},[n("a-breadcrumb",{staticClass:"breadcrumbs text-left Roboto-Regular"},[n("a-breadcrumb-item",[t._v("İşlemler")]),t._v(" "),n("a-breadcrumb-item",[t._v("P2P İşlemleri")]),t._v(" "),n("a-breadcrumb-item",[t._v("İlan Yayınla")])],1)],1)],1),t._v(" "),n("a-row",{attrs:{type:"flex",align:"bottom"}},[n("a-col",{attrs:{span:24}},[n("span",[n("h1",{staticClass:"Roboto-Regular m-0 d-inline"},[t._v("İlan Yayınla")]),t._v(" "),n("h4",{staticClass:"Roboto-Regular d-inline"},[t._v("\n          BTC, ETH, USDT ticaretine başlamak için USD, EURO ve TL ile ödeme\n          yöntemini seçerek ilan oluşturabilirsiniz.\n        ")])])])],1),t._v(" "),n("a-row",{staticClass:"content-row",attrs:{type:"flex",align:"middle"}},[n("a-col",{attrs:{span:12}},[n("a-card",{staticClass:"create-p2p-card border-none",attrs:{"active-tab-key":t.ActiveP2PTab,"tab-list":t.P2PTabList},on:{tabChange:function(e){return t.ActiveP2PTab=e}},scopedSlots:t._u([{key:"titleSlot",fn:function(e){return n("span",{},[t._v("\n          "+t._s("BUY"===e.key?"Alış İlanı":"Satış İlanı"))])}}])},[t._v(" "),n("div",{staticClass:"card-content"},[n("P2PCreateCard",{key:t.ActiveP2PTab,attrs:{P2PType:t.ActiveP2PTab,FiatList:t.FiatList}})],1)])],1),t._v(" "),n("a-col",{attrs:{span:12}},[n("div",{staticClass:"what-is-cointral-content mx-auto",staticStyle:{"max-width":"300px"}},[n("div",{staticClass:"whatiscointralimg text-center"},[n("img",{attrs:{src:r(2471),alt:"whatiscointral"}})]),t._v(" "),n("h2",{staticClass:"Roboto-Regular text-center"},[t._v("Cointral P2P Nedir?")]),t._v(" "),n("ul",{staticClass:"text-left Roboto-Regular"},[n("li",[n("h4",[t._v("\n              Güvenlik Anahtarı eşleşmeniz yalnızca https://www.cointral.com\n              için geçerlidir.\n            ")])]),t._v(" "),n("li",[n("h4",[t._v("\n              Güvenlik Anahtarı doğrulaması etkinleştirildiğinde, çekim\n              taleplerinizi yalnızca Güvenlik Anahtarı’ınız aracılığıyla\n              doğrulayabilirsiniz\n            ")])])]),t._v(" "),n("a-button",{staticClass:"text-center whatiscointralbtn Roboto-Medium",attrs:{size:"large",block:"",type:"secondary"}},[t._v("\n          Detaylı Öğren\n        ")])],1)])],1)],1)}),[],!1,null,"d5553f88",null);e.default=component.exports;installComponents(component,{P2PCreateCard:r(2689).default})}}]);