(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1480:function(t,e,o){var content=o(2396);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("328876a9",content,!0,{sourceMap:!1})},2395:function(t,e,o){"use strict";var n=o(1480);o.n(n).a},2396:function(t,e,o){(e=o(53)(!1)).push([t.i,".notifications-page[data-v-1c46f856]{min-height:100vh;margin:50px auto;display:flex;justify-content:center;align-items:center}.all-notifications-card[data-v-1c46f856]{width:1000px}.all-notifications-card-header[data-v-1c46f856]{display:flex;flex-direction:column;padding-bottom:10px;border-bottom:1px solid #e8e8e8}.all-notifications-list-desc[data-v-1c46f856],.all-notifications-list-title[data-v-1c46f856]{margin-bottom:0}.all-notifications-list-title[data-v-1c46f856]{font-size:16px;color:#1e2026}.all-notifications-list-desc[data-v-1c46f856]{width:700px;font-size:12px;color:#858e9d}.all-notifications-list-date[data-v-1c46f856]{color:#566788}.notification-list-item-extra[data-v-1c46f856]{display:flex;flex-direction:column;align-items:flex-end}.notifications-list-item[data-v-1c46f856]{cursor:pointer}.new-notifications-total-text[data-v-1c46f856]{font-size:18px}.mark-all-as-read[data-v-1c46f856]{color:#1ba4e8}.delete-all[data-v-1c46f856]{color:red}.notification-dot[data-v-1c46f856]{margin-top:5px}.notification-dot[data-v-1c46f856],.notification-dot-mobile[data-v-1c46f856]{width:8px;height:8px;border-radius:50px}.viewed[data-v-1c46f856]{background-color:#bebebe}.notViewed[data-v-1c46f856]{background-color:#1dc088}.notification-list-avatar[data-v-1c46f856]{display:flex;margin-top:5px}.mobile-row[data-v-1c46f856]{margin-top:10px}",""]),t.exports=e},2749:function(t,e,o){"use strict";o.r(e);o(25);var n=o(14),l={middleware:["auth"],head:function(){return{title:"Bildirimler | Cointral.com"}},data:function(){return{AllUserNotifications:[],showUnRead:!1,isMobile:null}},mounted:function(){var t=this;this.getUserNotifications(),this.isMobile=window.innerWidth<1e3,window.addEventListener("resize",(function(){t.isMobile=window.innerWidth<1e3}))},methods:{getUserNotifications:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,l,r,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,n=t.$cookies,l=t.$config.FINANCE_API_URL,r={Authorization:"Bearer "+n.get("Token")},e.next=4,o.get(l+"/GetUserNotifications",{headers:r});case 4:(c=e.sent).data.Success&&(d=c.data.NotificationList,t.AllUserNotifications=d);case 6:case"end":return e.stop()}}),e)})))()},getUnreadNotifications:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,l,r,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,n=t.$cookies,l=t.$config.FINANCE_API_URL,r={Authorization:"Bearer "+n.get("Token")},e.next=4,o.get(l+"/GetUserNewNotifications",{headers:r});case 4:(c=e.sent).data.Success&&(d=c.data.NotificatinsList,t.AllUserNotifications=d);case 6:case"end":return e.stop()}}),e)})))()},readAllNotifications:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,l,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,n=t.$cookies,l=t.$config.FINANCE_API_URL,r={Authorization:"Bearer "+n.get("Token")},e.next=4,o.post(l+"/ReadAllNotifications",null,{headers:r});case 4:e.sent.data.Success&&(t.AllUserNotifications=[]);case 6:case"end":return e.stop()}}),e)})))()},onDeleteAll:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,l,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,n=t.$cookies,l=t.$config.FINANCE_API_URL,r={Authorization:"Bearer "+n.get("Token")},e.next=4,o.post(l+"/ClearAllNotifications",null,{headers:r});case 4:e.sent.data.Success&&t.getUserNotifications();case 6:case"end":return e.stop()}}),e)})))()}},watch:{showUnRead:function(t){t?this.getUnreadNotifications():this.getUserNotifications()}}},r=(o(2395),o(19)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.isMobile?null:"notifications-page"},[t.isMobile?t._e():n("div",[n("a-card",{staticClass:"all-notifications-card border-none"},[n("div",{staticClass:"notifications-card-body"},[n("div",{staticClass:"all-notifications-card-header",attrs:{slot:"title"},slot:"title"},[n("h1",{staticClass:"Roboto-Medium"},[t._v(t._s(t.$t("text_notification")))]),t._v(" "),n("a-row",{attrs:{type:"flex",align:"middle"}},[n("a-col",{attrs:{span:9}},[n("span",{staticClass:"new-notifications-total-text Roboto-Medium"},[t._v("\n                "+t._s(t.$t("text_all_notifications"))+"\n                ("+t._s(t.AllUserNotifications.length)+")\n              ")])]),t._v(" "),n("a-col",{attrs:{span:5}},[n("a-checkbox",{attrs:{size:"large"},model:{value:t.showUnRead,callback:function(e){t.showUnRead=e},expression:"showUnRead"}}),t._v(" "),n("span",{staticClass:"Roboto-Medium"},[t._v(t._s(t.$t("text_hide_read_notifications")))])],1),t._v(" "),n("a-col",{attrs:{span:4}},[n("a-button",{staticClass:"Roboto-Medium delete-all",on:{click:t.onDeleteAll}},[t._v(t._s(t.$t("text_delete_all")))]),t._v(" "),n("a-button",{staticClass:"Roboto-Medium",attrs:{slot:"actions",type:"secondary",block:""},on:{click:function(e){t.$router.push(t.localeRoute("/account/settings/preferences"))}},slot:"actions"},[n("a-icon",{attrs:{type:"setting"}})],1)],1)],1)],1),t._v(" "),0==t.AllUserNotifications.length?n("a-list",{attrs:{pagination:!1,size:"large","data-source":t.AllUserNotifications}}):n("a-list",{attrs:{pagination:!0,size:"large","data-source":t.AllUserNotifications},scopedSlots:t._u([{key:"renderItem",fn:function(e){return n("a-list-item",{key:e.NotificationUniqueId,staticClass:"notifications-list-item"},[n("nuxt-link",{attrs:{to:t.localePath("/account/notifications/"+e.NotificationUniqueId)}},[n("a-list-item-meta",{staticClass:"all-notifications-list-meta"},[n("div",{staticClass:"notification-list-avatar",attrs:{slot:"avatar"},slot:"avatar"},[n("div",{staticClass:"notification-dot",class:{viewed:e.Viewed,notViewed:!e.Viewed},staticStyle:{margin:"auto 10px"}}),t._v(" "),n("img",{attrs:{src:o(650),alt:"message"}})]),t._v(" "),n("p",{staticClass:"all-notifications-list-title Roboto-Medium",attrs:{slot:"title"},slot:"title"},[t._v("\n                  "+t._s(e.NotificationTitle)+"\n                ")]),t._v(" "),n("div",{staticClass:"all-notifications-list-description-flex",attrs:{slot:"description"},slot:"description"},[n("p",{staticClass:"all-notifications-list-desc Roboto-Regular"},[t._v("\n                    "+t._s(e.NotificationText)+"\n                  ")])])])],1),t._v(" "),n("div",{staticClass:"notification-list-item-extra",attrs:{slot:"extra"},slot:"extra"},[n("span",{staticClass:"all-notifications-list-date Roboto-Regular"},[t._v(t._s(e.CreatedOn))])])],1)}}],null,!1,1997308881)})],1)])],1),t._v(" "),t.isMobile?n("div",[n("a-card",{staticClass:"border-none"},[n("a-row",[n("a-col",{attrs:{span:2}},[n("a-button",{staticClass:"Roboto-Medium",on:{click:function(e){t.$router.push(t.localeRoute("/account/settings/preferences"))}}},[n("a-icon",{attrs:{type:"setting"}})],1)],1),t._v(" "),n("a-col",{attrs:{span:15,align:"middle"}},[n("a-button",{staticClass:"mark-all-as-read Roboto-Medium",on:{click:t.readAllNotifications}},[t._v(t._s(t.$t("text_mark_all_as_read")))])],1),t._v(" "),n("a-col",{attrs:{span:7,align:"right"}},[n("a-button",{staticClass:"Roboto-Medium delete-all"},[t._v(t._s(t.$t("text_delete_all")))])],1)],1),t._v(" "),n("a-divider",{attrs:{type:"horizontal"}}),t._v(" "),n("a-row",[n("a-col",{attrs:{span:24}},[n("span",{staticClass:"Roboto-Medium"},[t._v("\n            "+t._s(t.$t("text_all_notifications"))+"\n            ("+t._s(t.AllUserNotifications.length)+")\n          ")])])],1),t._v(" "),n("a-divider",{attrs:{type:"horizontal"}}),t._v(" "),n("a-col",{attrs:{span:24}},t._l(t.AllUserNotifications,(function(e,l){return n("div",{key:l,staticClass:"Roboto-Regular"},[n("a-col",{attrs:{span:24}},[n("a-col",{staticClass:"Roboto-Bold",attrs:{span:12}},[n("div",{staticClass:"notification-dot-mobile",class:{viewed:e.Viewed,notViewed:!e.Viewed}})]),t._v(" "),n("a-col",{staticStyle:{color:"gray"},attrs:{span:12,align:"right"}},[t._v(t._s(e.UpdatedOn))])],1),t._v(" "),n("a-col",{staticClass:"mobile-row",staticStyle:{"margin-bottom":"20px"},attrs:{span:24}},[n("a-col",{staticClass:"Roboto-Bold",attrs:{span:2}},[n("img",{attrs:{src:o(650),alt:"message"}})]),t._v(" "),n("a-col",{attrs:{span:22,align:"left"}},[t._v(t._s(e.NotificationText))])],1),t._v(" "),n("a-divider",{staticClass:"mobile-row",attrs:{type:"horizontal"}})],1)})),0)],1)],1):t._e()])}),[],!1,null,"1c46f856",null);e.default=component.exports}}]);