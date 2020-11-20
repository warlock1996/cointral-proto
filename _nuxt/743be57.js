(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1377:function(t,e,o){var content=o(1720);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("62295efa",content,!0,{sourceMap:!1})},1719:function(t,e,o){"use strict";var n=o(1377);o.n(n).a},1720:function(t,e,o){(e=o(53)(!1)).push([t.i,"#login-activity-table[data-v-403456ed],#security-activity-table[data-v-403456ed]{margin:20px auto}.activity-table-row[data-v-403456ed]{color:#8d8e91}.select-box[data-v-403456ed]{display:flex}.select-box fieldset[data-v-403456ed]{margin-right:8px}.select-box legend[data-v-403456ed]{font-size:14px;color:#414141;margin-bottom:0}",""]),t.exports=e},2741:function(t,e,o){"use strict";o.r(e);o(63),o(32),o(31),o(22),o(55);var n=o(26),c=(o(25),o(13)),r=o(3),l=o.n(r);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={head:function(){return{title:this.$t("title_text_account_activities")}},data:function(){var t=this;return{isMobile:null,tabList:[{key:"Login Activity",scopedSlots:{tab:"titleSlot"}},{key:"Security Activity",scopedSlots:{tab:"titleSlot"}}],activeKey:"Login Activity",LoginActivityColumns:[{title:this.$t("text_description"),key:"Description",dataIndex:"Description"},{title:this.$t("text_date"),key:"Tarih",dataIndex:"CreatedOn"},{title:this.$t("text_type"),key:"Kaynak",dataIndex:"Browser"},{title:this.$t("text_ip_address"),key:"IP Adresi",dataIndex:"IP_Address"}],LoginActivityData:[],LoginActivityFilters:{From:"",To:""},LoginActivityPagination:{current:1,total:0,position:"bottom",pageSize:10,onChange:function(e){t.LoginActivityPagination.current=e,t.getLoginActivities()}},isLoadingLoginActivity:!1,LoginActivityFilter:"day",SecurityActivityColumns:[{title:this.$t("text_description"),key:"Description",dataIndex:"Description"},{title:this.$t("text_date"),key:"Tarih",dataIndex:"CreatedOn"},{title:this.$t("text_type"),key:"Kaynak",dataIndex:"Browser"},{title:this.$t("text_ip_address"),key:"IP Adresi",dataIndex:"IP_Address"}],SecurityActivityData:[],SecurityActivityFilters:{From:"",To:""},SecurityActivityPagination:{current:1,total:0,position:"bottom",pageSize:10,onChange:function(e){t.SecurityActivityPagination.current=e,t.getSecurityActivities()}},SecurityActivityFilter:"day",isLoadingSecurityActivity:!1}},mounted:function(){var t=this;this.isMobile=window.innerWidth<1e3,window.addEventListener("resize",(function(){t.isMobile=window.innerWidth<1e3}))},methods:{getLoginActivities:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var o,n,c,r,l,v,_,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,n=t.$config,c=t.$cookies,r={Authorization:"Bearer "+c.get("Token")},t.isLoadingLoginActivity=!0,e.next=5,o.get(n.FINANCE_API_URL+"/GetAccountLoginActivities",{params:y({Offset:10*t.LoginActivityPagination.current-t.LoginActivityPagination.pageSize,PageSize:t.LoginActivityPagination.pageSize},t.LoginActivityFilters),headers:r});case 5:(l=e.sent).data.Success&&(v=l.data,_=v.AccountHistory,d=v.Max,t.LoginActivityData=_,t.LoginActivityPagination.total=d,t.isLoadingLoginActivity=!1);case 7:case"end":return e.stop()}}),e)})))()},getSecurityActivities:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var o,n,c,r,l,v,_,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,n=t.$config,c=t.$cookies,r={Authorization:"Bearer "+c.get("Token")},t.isLoadingSecurityActivity=!0,e.next=5,o.get(n.FINANCE_API_URL+"/GetAccountSecurityActivities",{params:y({Offset:10*t.SecurityActivityPagination.current-t.SecurityActivityPagination.pageSize,PageSize:t.SecurityActivityPagination.pageSize},t.SecurityActivityFilters),headers:r});case 5:(l=e.sent).data.Success&&(v=l.data,_=v.AccountHistory,d=v.Max,t.SecurityActivityData=_,t.SecurityActivityPagination.total=d,t.isLoadingSecurityActivity=!1);case 7:case"end":return e.stop()}}),e)})))()},LoginActivityTableChange:function(t){},SecurityActivityTableChange:function(t){}},watch:{LoginActivityFilter:{handler:function(t){this.LoginActivityFilters.From=l()(new Date).subtract(1,t).format("YYYY-MM-DD"),this.LoginActivityFilters.To=l()(new Date).format("YYYY-MM-DD"),this.getLoginActivities()},immediate:!0},SecurityActivityFilter:{handler:function(t){this.SecurityActivityFilters.From=l()(new Date).subtract(1,t).format("YYYY-MM-DD"),this.SecurityActivityFilters.To=l()(new Date).format("YYYY-MM-DD"),this.getSecurityActivities()},immediate:!0}}},d=(o(1719),o(19)),component=Object(d.a)(_,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"activity-view-page"},[t.isMobile?t._e():o("a-row",{staticStyle:{"margin-bottom":"50px"}},[o("a-col",{attrs:{span:24}},[o("a-breadcrumb",{staticClass:"activity-breadcumb Roboto-Regular"},[o("nuxt-link",{attrs:{to:t.localeRoute("/account/security")}},[o("a-breadcrumb-item",[t._v(t._s(t.$t("text_security")))])],1),t._v(" "),o("a-breadcrumb-item",[t._v(t._s(t.$t("text_account_activities")))])],1)],1)],1),t._v(" "),t.isMobile?t._e():o("a-row",{staticClass:"security-row"},[o("a-col",{attrs:{span:24}},[o("h1",{staticClass:"Roboto-Medium"},[t._v("\n        "+t._s(t.$t("text_past_account_activity_record"))+"\n      ")])])],1),t._v(" "),t.isMobile?t._e():o("a-row",[o("a-col",{attrs:{span:24}},[o("a-card",{staticClass:"bs-tab-card border-none",attrs:{bordered:!1,tabList:t.tabList,"active-tab-key":t.activeKey},on:{tabChange:function(e){return t.activeKey=e}},scopedSlots:t._u([{key:"titleSlot",fn:function(e){return o("span",{staticClass:"Roboto-Regular",class:{"tab-label-active":e.key===t.activeKey,"tab-label-inactive":e.key!==t.activeKey}},["Login Activity"===e.key?o("span",[t._v("\n            "+t._s(t.$t("text_login_activities"))+"\n          ")]):t._e(),t._v(" "),"Security Activity"===e.key?o("span",[t._v(t._s(t.$t("text_security_activity")))]):t._e()])}}],null,!1,3711444814)},[t._v(" "),o("div",{staticClass:"select-box"},["Login Activity"===t.activeKey?o("fieldset",[o("legend",{staticClass:"Roboto-Regular"},[t._v(t._s(t.$t("text_hour")))]),t._v(" "),o("a-select",{staticStyle:{width:"150px"},model:{value:t.LoginActivityFilter,callback:function(e){t.LoginActivityFilter=e},expression:"LoginActivityFilter"}},[o("a-select-option",{attrs:{value:"day"}},[t._v("\n                "+t._s(t.$t("text_one_day")))]),t._v(" "),o("a-select-option",{attrs:{value:"week"}},[t._v("\n                "+t._s(t.$t("text_one_week")))]),t._v(" "),o("a-select-option",{attrs:{value:"month"}},[t._v("\n                "+t._s(t.$t("text_one_month")))])],1)],1):t._e(),t._v(" "),"Security Activity"===t.activeKey?o("fieldset",[o("legend",{staticClass:"Roboto-Regular"},[t._v(t._s(t.$t("text_hour")))]),t._v(" "),o("a-select",{staticStyle:{width:"150px"},model:{value:t.SecurityActivityFilter,callback:function(e){t.SecurityActivityFilter=e},expression:"SecurityActivityFilter"}},[o("a-select-option",{attrs:{value:"day"}},[t._v("\n                "+t._s(t.$t("text_one_day")))]),t._v(" "),o("a-select-option",{attrs:{value:"week"}},[t._v("\n                "+t._s(t.$t("text_one_week")))]),t._v(" "),o("a-select-option",{attrs:{value:"month"}},[t._v("\n                "+t._s(t.$t("text_one_month")))])],1)],1):t._e()]),t._v(" "),"Login Activity"===t.activeKey?o("div",[o("a-table",{staticClass:"Roboto-Medium",attrs:{id:"login-activity-table",rowClassName:function(){return["Roboto-Regular","activity-table-row"]},loading:t.isLoadingLoginActivity,columns:t.LoginActivityColumns,"data-source":t.LoginActivityData,pagination:t.LoginActivityPagination},on:{change:t.LoginActivityTableChange}})],1):t._e(),t._v(" "),"Security Activity"===t.activeKey?o("div",[o("a-table",{staticClass:"Roboto-Medium",attrs:{id:"security-activity-table",rowClassName:function(){return["Roboto-Regular","activity-table-row"]},loading:t.isLoadingSecurityActivity,columns:t.SecurityActivityColumns,"data-source":t.SecurityActivityData,pagination:t.SecurityActivityPagination},on:{change:t.SecurityActivityTableChange}})],1):t._e()])],1)],1),t._v(" "),t.isMobile?o("div",{staticStyle:{padding:"10px"}},[o("a-row",[o("a-col",[o("a-breadcrumb",{staticClass:"activity-breadcumb Roboto-Regular"},[o("nuxt-link",{attrs:{to:t.localeRoute("/account/security")}},[o("a-breadcrumb-item",[t._v(t._s(t.$t("text_security")))])],1),t._v(" "),o("a-breadcrumb-item",[t._v(t._s(t.$t("text_account_activities")))])],1)],1)],1),t._v(" "),o("a-divider",{staticStyle:{margin:"6px auto"},attrs:{type:"horizontal"}}),t._v(" "),o("a-row",[o("a-col",[o("h2",{staticClass:"Roboto-Medium"},[t._v("\n          "+t._s(t.$t("text_past_account_activity_record"))+"\n        ")])])],1),t._v(" "),o("a-divider",{staticStyle:{margin:"6px auto"},attrs:{type:"horizontal"}}),t._v(" "),t.isMobile?o("a-row",[o("a-col",{attrs:{span:24}},[o("a-card",{staticClass:"bs-tab-card border-none",attrs:{bordered:!1,tabList:t.tabList,"active-tab-key":t.activeKey,"head-style":{padding:0}},on:{tabChange:function(e){return t.activeKey=e}},scopedSlots:t._u([{key:"titleSlot",fn:function(e){return o("span",{staticClass:"Roboto-Regular",class:{"tab-label-active":e.key===t.activeKey,"tab-label-inactive":e.key!==t.activeKey}},["Login Activity"===e.key?o("span",[t._v("\n              "+t._s(t.$t("text_login_activities"))+"\n            ")]):t._e(),t._v(" "),"Security Activity"===e.key?o("span",[t._v(t._s(t.$t("text_security_activity")))]):t._e()])}}],null,!1,1613555406)},[t._v(" "),o("div",{staticClass:"select-box"},["Login Activity"===t.activeKey?o("fieldset",[o("legend",{staticClass:"Roboto-Regular"},[t._v(t._s(t.$t("text_hour")))]),t._v(" "),o("a-select",{staticStyle:{width:"150px"},model:{value:t.LoginActivityFilter,callback:function(e){t.LoginActivityFilter=e},expression:"LoginActivityFilter"}},[o("a-select-option",{attrs:{value:"day"}},[t._v("\n                  "+t._s(t.$t("text_one_day")))]),t._v(" "),o("a-select-option",{attrs:{value:"week"}},[t._v("\n                  "+t._s(t.$t("text_one_week")))]),t._v(" "),o("a-select-option",{attrs:{value:"month"}},[t._v("\n                  "+t._s(t.$t("text_one_month")))])],1)],1):t._e(),t._v(" "),"Security Activity"===t.activeKey?o("fieldset",[o("legend",{staticClass:"Roboto-Regular"},[t._v(t._s(t.$t("text_hour")))]),t._v(" "),o("a-select",{staticStyle:{width:"150px"},model:{value:t.SecurityActivityFilter,callback:function(e){t.SecurityActivityFilter=e},expression:"SecurityActivityFilter"}},[o("a-select-option",{attrs:{value:"day"}},[t._v("\n                  "+t._s(t.$t("text_one_day")))]),t._v(" "),o("a-select-option",{attrs:{value:"week"}},[t._v("\n                  "+t._s(t.$t("text_one_week")))]),t._v(" "),o("a-select-option",{attrs:{value:"month"}},[t._v("\n                  "+t._s(t.$t("text_one_month")))])],1)],1):t._e()]),t._v(" "),"Login Activity"===t.activeKey?o("div",[o("a-list",{attrs:{"item-layout":"horizontal","data-source":t.LoginActivityData,pagination:t.LoginActivityPagination,loading:t.isLoadingLoginActivity},scopedSlots:t._u([{key:"renderItem",fn:function(e,n){return o("a-list-item",{},[o("a-list-item-meta",[o("div",{attrs:{slot:"description"},slot:"description"},[o("a-row",{attrs:{gutter:16}},[o("a-col",{staticClass:"text-left",attrs:{span:12}},[o("span",{staticClass:"Roboto-Regular"},[t._v("Tarih")])]),t._v(" "),o("a-col",{staticClass:"text-right",attrs:{span:12}},[o("span",{staticClass:"Roboto-Regular"},[t._v("\n                          "+t._s(e.CreatedOn)+"\n                        ")])])],1),t._v(" "),o("a-row",{attrs:{gutter:16}},[o("a-col",{staticClass:"text-left",attrs:{span:12}},[o("span",{staticClass:"Roboto-Regular"},[t._v("Kaynak")])]),t._v(" "),o("a-col",{staticClass:"text-right",attrs:{span:12}},[o("span",{staticClass:"Roboto-Regular"},[t._v("\n                          "+t._s(e.Browser)+"\n                        ")])])],1),t._v(" "),o("a-row",{attrs:{gutter:16}},[o("a-col",{staticClass:"text-left",attrs:{span:12}},[o("span",{staticClass:"Roboto-Regular"},[t._v("Durum")])]),t._v(" "),o("a-col",{staticClass:"text-right",attrs:{span:12}},[o("span",{staticClass:"Roboto-Regular"},[t._v("\n                          "+t._s(e.Description)+"\n                        ")])])],1),t._v(" "),o("a-row",{attrs:{gutter:16}},[o("a-col",{staticClass:"text-left",attrs:{span:12}},[o("span",{staticClass:"Roboto-Regular"},[t._v("IP Adresi")])]),t._v(" "),o("a-col",{staticClass:"text-right",attrs:{span:12}},[o("span",{staticClass:"Roboto-Regular"},[t._v("\n                          "+t._s(e.IP_Address)+"\n                        ")])])],1)],1)])],1)}}],null,!1,1863599075)})],1):t._e(),t._v(" "),"Security Activity"===t.activeKey?o("div",[o("a-list",{attrs:{"item-layout":"horizontal","data-source":t.SecurityActivityData,pagination:t.SecurityActivityPagination,loading:t.isLoadingSecurityActivity},scopedSlots:t._u([{key:"renderItem",fn:function(e,n){return o("a-list-item",{},[o("a-list-item-meta",[o("div",{attrs:{slot:"description"},slot:"description"},[o("a-row",{attrs:{gutter:16}},[o("a-col",{staticClass:"text-left",attrs:{span:12}},[o("span",{staticClass:"Roboto-Regular"},[t._v("Tarih")])]),t._v(" "),o("a-col",{staticClass:"text-right",attrs:{span:12}},[o("span",{staticClass:"Roboto-Regular"},[t._v("\n                          "+t._s(e.CreatedOn)+"\n                        ")])])],1),t._v(" "),o("a-row",{attrs:{gutter:16}},[o("a-col",{staticClass:"text-left",attrs:{span:12}},[o("span",{staticClass:"Roboto-Regular"},[t._v("Kaynak")])]),t._v(" "),o("a-col",{staticClass:"text-right",attrs:{span:12}},[o("span",{staticClass:"Roboto-Regular"},[t._v("\n                          "+t._s(e.Browser)+"\n                        ")])])],1),t._v(" "),o("a-row",{attrs:{gutter:16}},[o("a-col",{staticClass:"text-left",attrs:{span:12}},[o("span",{staticClass:"Roboto-Regular"},[t._v("Durum")])]),t._v(" "),o("a-col",{staticClass:"text-right",attrs:{span:12}},[o("span",{staticClass:"Roboto-Regular"},[t._v("\n                          "+t._s(e.Type)+"\n                        ")])])],1),t._v(" "),o("a-row",{attrs:{gutter:16}},[o("a-col",{staticClass:"text-left",attrs:{span:12}},[o("span",{staticClass:"Roboto-Regular"},[t._v("IP Adresi")])]),t._v(" "),o("a-col",{staticClass:"text-right",attrs:{span:12}},[o("span",{staticClass:"Roboto-Regular"},[t._v("\n                          "+t._s(e.IP_Address)+"\n                        ")])])],1)],1)])],1)}}],null,!1,2795216573)})],1):t._e()])],1)],1):t._e()],1):t._e()],1)}),[],!1,null,"403456ed",null);e.default=component.exports}}]);