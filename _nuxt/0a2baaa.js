(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1481:function(t,e,n){var content=n(2487);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("03959080",content,!0,{sourceMap:!1})},2486:function(t,e,n){"use strict";var o=n(1481);n.n(o).a},2487:function(t,e,n){(e=n(53)(!1)).push([t.i,".tab-label-active[data-v-fd17d5da]{color:var(--active-tab-text-color)}.tab-label-inactive[data-v-fd17d5da]{color:var(--inactive-tab-text-color)}.tab-label-active[data-v-fd17d5da],.tab-label-inactive[data-v-fd17d5da]{font-size:20px}.bs-breadcumb[data-v-fd17d5da]{margin-bottom:50px}.bs-page-content-wrapper[data-v-fd17d5da]{display:flex;flex-direction:column}.bs-tab-card[data-v-fd17d5da]{margin-bottom:20px;padding:16px 0;box-shadow:0 0 4px rgba(0,0,0,.05098)}.bs-table-card[data-v-fd17d5da]{box-shadow:0 0 3px rgba(0,0,0,.05882)}.BuyingHistoryExpandedRow[data-v-fd17d5da]{padding:16px;display:flex;justify-content:flex-end}.ExpandedRowItem[data-v-fd17d5da]{font-size:14px;margin-right:100px}::ng-deep .color-red.ant-table-row>td[data-v-fd17d5da]:nth-child(5){color:red!important}",""]),t.exports=e},2741:function(t,e,n){"use strict";n.r(e);n(25);var o=n(14),r=n(3),d=n.n(r),c={head:function(){return{title:"Alım - Satım Geçmişi | Cointral.com"}},data:function(){return{tabList:[{key:"Sell",scopedSlots:{tab:"titleSlot"}},{key:"Buy",scopedSlots:{tab:"titleSlot"}}],activeKey:"Sell",SwapHistoryColumns:[{title:"Tarih",key:"Tarih",scopedSlots:{customRender:"Tarih"}},{title:"Çift",key:"ÇİFT",scopedSlots:{customRender:"ÇİFT"}},{title:"Miktar",key:"Miktar",scopedSlots:{customRender:"Miktar"}},{title:"İşlem sonucu",key:"İşlem sonucu",scopedSlots:{customRender:"İşlem sonucu"}},{title:"Fiyat",key:"Fiyat",scopedSlots:{customRender:"Fiyat"}},{title:"İşlem numarası",key:"İşlem numarası",scopedSlots:{customRender:"İşlem numarası"}}],SwapHistoryData:[],SwapHistoryPagination:{current:1,total:0,position:"bottom",pageSize:10},isLoadingSwapHistory:!1,BuyHistoryColumns:[{title:"Tarih",dataIndex:"CreatedOn",key:"CreatedOn"},{title:"Sağlayıcı",dataIndex:"Provider",key:"Sağlayıcı"},{title:"Tutar",key:"Miktar",scopedSlots:{customRender:"Miktar"}},{title:"Gerçekleşen Miktar",key:"Nihai Miktar",scopedSlots:{customRender:"NihaiMiktar"}},{title:"Durum",dataIndex:"Status",key:"Status"},{title:"",dataIndex:"Action",key:"Action"}],BuyHistoryData:[],BuyHistoryPagination:{current:1,total:0,position:"bottom",pageSize:10},BuyingHistoryExpandedRowKeys:[],isLoadingBuyHistory:!1}},created:function(){this.getSwapHistory(),this.getBuyingHistory()},filters:{dateFormat:function(t){return d()(t).format("yyy-mm-DD hh:mm:ss")}},methods:{setRowClassName:function(t){return"NEW"===t.Status?["color-red","Roboto-Medium","expanded-row"]:["","Roboto-Medium","expanded-row"]},getSwapHistory:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,d,c,l,y,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,o=t.$config,r=t.$cookies,d={Authorization:"Bearer "+r.get("Token")},t.isLoadingSwapHistory=!0,e.next=5,n.get(o.FINANCE_API_URL+"/GetSwapHistory",{params:{Offset:10*t.SwapHistoryPagination.current-t.SwapHistoryPagination.pageSize,RowSize:t.SwapHistoryPagination.pageSize},headers:d});case 5:(c=e.sent).data.Success&&(l=c.data,y=l.Str_SwapList,m=l.Max,t.SwapHistoryData=y,t.SwapHistoryPagination.total=m,t.isLoadingSwapHistory=!1);case 7:case"end":return e.stop()}}),e)})))()},getBuyingHistory:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,d,c,l,y,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,o=t.$config,r=t.$cookies,d={Authorization:"Bearer "+r.get("Token")},t.isLoadingBuyHistory=!0,e.next=5,n.get(o.FINANCE_API_URL+"/GetBuyTx",{params:{Offset:10*t.BuyHistoryPagination.current-t.BuyHistoryPagination.pageSize,RowSize:t.BuyHistoryPagination.pageSize},headers:d});case 5:(c=e.sent).data.Success&&(l=c.data,y=l.BuyTx,m=l.Max,t.BuyHistoryData=y,t.BuyHistoryPagination.total=m,t.isLoadingBuyHistory=!1);case 7:case"end":return e.stop()}}),e)})))()},expandIcon:function(t){var e=this.$createElement,n=e("span",[e("svg",{attrs:{id:"Component_3_39","data-name":"Component 3 – 39",xmlns:"http://www.w3.org/2000/svg",width:"9",height:"5",viewBox:"0 0 7 4"}},[e("path",{attrs:{id:"Polygon_5","data-name":"Polygon 5",d:"M3.5,0,7,4H0Z",transform:"translate(7 4) rotate(180)",fill:"#858e9d"}})])]),o=e("span",[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"9",height:"5",viewBox:"0 0 7 4"}},[e("g",{attrs:{id:"Component_24","data-name":"Component 24",transform:"translate(7 4) rotate(180)"}},[e("path",{attrs:{id:"Polygon_5","data-name":"Polygon 5",d:"M3.5,0,7,4H0Z",transform:"translate(7 4) rotate(180)",fill:"#858e9d"}})])])]);return e("a",{class:"expand-row-icon",on:{click:function(e){return t.onExpand(t.record,e)}},style:{color:"blue",cursor:"pointer"}},[t.expanded?o:n])},BuyingHistoryTableChange:function(t){this.BuyHistoryPagination=t,this.getBuyingHistory()},SwapHistoryTableChange:function(t){this.SwapHistoryPagination=t,this.getSwapHistory()},setExpandedRowKeys:function(t,e){this.BuyingHistoryExpandedRowKeys=t?[e.PaymentId]:[]}}},l=(n(2486),n(19)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bs-page-content-container"},[n("div",{staticClass:"bs-page-content-header"},[n("h1",{staticClass:"Roboto-Regular"},[t._v(t._s(t.$t("text_buyingsellinghistory")))])]),t._v(" "),n("div",{staticClass:"bs-page-content-wrapper h-100 w-100"},[n("a-card",{staticClass:"bs-tab-card border-none",attrs:{bordered:!1,tabList:t.tabList,"active-tab-key":t.activeKey},on:{tabChange:function(e){return t.activeKey=e}},scopedSlots:t._u([{key:"titleSlot",fn:function(e){return n("span",{staticClass:"Roboto-Regular",class:{"tab-label-active":e.key===t.activeKey,"tab-label-inactive":e.key!==t.activeKey}},["Buy"===e.key?n("span",[t._v(t._s(t.$t("text_buy")))]):t._e(),t._v(" "),"Sell"===e.key?n("span",[t._v(t._s(t.$t("text_sell")))]):t._e()])}}])}),t._v(" "),"Sell"===t.activeKey?n("a-card",{staticClass:"cointral-card bs-table-card border-none",attrs:{bordered:!1}},[n("a-table",{staticClass:"Roboto-Medium",attrs:{id:"swap-history-table",rowClassName:function(){return["Roboto-Medium","expanded-row"]},loading:t.isLoadingSwapHistory,columns:t.SwapHistoryColumns,"data-source":t.SwapHistoryData,rowKey:function(t){return t.SwapUniqueId},pagination:t.SwapHistoryPagination},on:{change:t.SwapHistoryTableChange},scopedSlots:t._u([{key:"Tarih",fn:function(e){return n("span",{},[t._v("\n          "+t._s(t._f("dateFormat")(e.CreatedOn))+"\n        ")])}},{key:"ÇİFT",fn:function(e){return n("span",{},[t._v("\n          "+t._s(e.InAsset)+" / "+t._s(e.OutAsset)+"\n        ")])}},{key:"Miktar",fn:function(e){return n("span",{},[t._v("\n          "+t._s(e.InAmount)+" "+t._s(e.InAsset)+"\n        ")])}},{key:"İşlem sonucu",fn:function(e){return n("span",{},[t._v("\n          "+t._s(e.OutAmount.toFixed(8))+" "+t._s(e.OutAsset)+"\n        ")])}},{key:"Fiyat",fn:function(e){return n("span",{},[t._v("\n          1 "+t._s(e.InAsset)+" =\n          "+t._s((e.OutAmount/e.InAmount).toFixed(8))+"\n          "+t._s(e.OutAsset)+"\n        ")])}},{key:"İşlem numarası",fn:function(e){return n("span",{},[t._v("\n          "+t._s(e.SwapUniqueId)+"\n        ")])}}],null,!1,3641579611)})],1):t._e(),t._v(" "),"Buy"===t.activeKey?n("a-card",{staticClass:"cointral-card bs-table-card border-none",attrs:{bordered:!1}},[n("a-table",{staticClass:"Roboto-Medium",attrs:{id:"buying-history-table",rowClassName:t.setRowClassName,loading:t.isLoadingBuyHistory,columns:t.BuyHistoryColumns,"data-source":t.BuyHistoryData,rowKey:function(t){return t.PaymentId},pagination:t.BuyHistoryPagination,expandIconColumnIndex:t.BuyHistoryColumns.length-1,expandedRowKeys:t.BuyingHistoryExpandedRowKeys,expandIconAsCell:!1,expandIcon:t.expandIcon},on:{change:t.BuyingHistoryTableChange,expand:t.setExpandedRowKeys},scopedSlots:t._u([{key:"expandedRowRender",fn:function(e){return n("div",{staticClass:"BuyingHistoryExpandedRow"},[n("div",{staticClass:"ExpandedRowItem Roboto-Regular"},[t._v("\n            PaymentId "+t._s(e.PaymentId)+"\n          ")])])}},{key:"Miktar",fn:function(e){return n("span",{},[t._v("\n          "+t._s(e.FiatCurrencyAmount)+" "+t._s(e.FiatCurrency)+"\n        ")])}},{key:"NihaiMiktar",fn:function(e){return n("span",{},[t._v("\n          "+t._s(e.DigitalAssetAmount)+" "+t._s(e.DigitalAsset)+"\n        ")])}},{key:"Durum",fn:function(e){return["NEW"===e.Status?n("span",[n("a-tag",{attrs:{color:"record.StatusColor"}},[t._v("\n              "+t._s(e.Status)+"\n            ")])],1):t._e()]}}],null,!1,374352536)})],1):t._e()],1)])}),[],!1,null,"fd17d5da",null);e.default=component.exports}}]);