(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1472:function(t,e,n){var content=n(2381);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("071d2b9d",content,!0,{sourceMap:!1})},2380:function(t,e,n){"use strict";var r=n(1472);n.n(r).a},2381:function(t,e,n){(e=n(53)(!1)).push([t.i,".p2p-history-title[data-v-4c34dc42]{text-align:left;font:normal normal normal 32px Roboto;letter-spacing:0;color:#1c2640;opacity:1;margin-top:20px}",""]),t.exports=e},2745:function(t,e,n){"use strict";n.r(e);n(25);var r=n(14),o=[{title:"Satıcı/Alıcı",dataIndex:"Type",scopedSlots:{customRender:"Type"}},{title:"Miktar",dataIndex:"AssetAmount",key:"AssetAmount"},{title:"Fiyat",dataIndex:"Asset",key:"Asset"},{title:"Kullanılabilir",dataIndex:"Available",key:"Available"},{title:"Durum",dataIndex:"Status",key:"Status"},{title:"Talem Sayısı",dataIndex:"OpenRequestNumber",key:"OpenRequestNumber"},{title:"İlan Numarası",dataIndex:"OTC_OrderUniqueID",key:"OTC_OrderUniqueID"}],l={name:"History",head:function(){return{title:"P2P İşlem Geçmişi | Cointral.com"}},data:function(){return{data:null,columns:o,innerData:null}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$router.push(t.localeRoute("/soon")),e.next=3,t.getP2POrders();case 3:case"end":return e.stop()}}),e)})))()},methods:{getP2POrders:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c,d,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,r=t.$config,o=t.$cookies,l={Authorization:"Bearer "+o.get("Token")},e.next=4,n.get(r.FINANCE_API_URL+"/GetP2PMyOpenOrders",{headers:l});case 4:if((c=e.sent).data.Success){for(d=[],i=0;i<c.data.OpenOrders.length;i++)"closed"!==c.data.OpenOrders[i].Status.toLowerCase()&&"canceled"!==c.data.OpenOrders[i].Status.toLowerCase()||d.push(c.data.OpenOrders[i]);t.data=d}case 6:case"end":return e.stop()}}),e)})))()}}},c=(n(2380),n(19)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Roboto-Regular"},[n("a-col",{attrs:{offset:"2"}},[n("div",{staticClass:"p2p-history-title"},[t._v("Tüm P2P İşlem Geçmişi")])]),t._v(" "),n("a-col",{staticClass:"Roboto-Bold",staticStyle:{"margin-top":"20px"},attrs:{offset:"2"}},[n("a-table",{staticClass:"components-table-demo-nested",attrs:{columns:t.columns,"data-source":t.data},scopedSlots:t._u([{key:"Type",fn:function(e,r){return n("span",{style:"BUY"===e?"color: #5CB56A":"color: #FD0D1B"},[t._v(t._s("BUY"===e?"Alıcı":"Satıcı"))])}}])},[t._v(" "),[n("a-table",{attrs:{"data-source":t.record.OTC_RequestList,pagination:!1}},[n("a-table-column",{attrs:{title:"Alıcı / Satıcı","data-index":"P2PRequestUsername"}}),t._v(" "),n("a-table-column",{attrs:{title:"Miktar","data-index":"Amount"}}),t._v(" "),n("a-table-column",{attrs:{title:"Toplam","data-index":"FiatPrice"}}),t._v(" "),n("a-table-column",{attrs:{title:"Tarih","data-index":"UpdatedOn"}}),t._v(" "),n("a-table-column",{attrs:{title:"Durum","data-index":"Status"}}),t._v(" "),n("a-table-column",{key:"operation",attrs:{title:"Action",dataIndex:"operation",scopedSlots:{customRender:"operation"}}})],1)]],2)],1)],1)}),[],!1,null,"4c34dc42",null);e.default=component.exports}}]);