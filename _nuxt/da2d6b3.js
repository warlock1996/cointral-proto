(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1293:function(e,t,n){e.exports=n.p+"35e299a2bd0cac60992558ee9ac1101f.svg"},1394:function(e,t,n){var content=n(1755);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("1f36f6ee",content,!0,{sourceMap:!1})},1395:function(e,t,n){var r=n(29),o=n(47),c=n(95),d=/"/g,f=function(e,t,n,r){var o=String(c(e)),f="<"+t;return""!==n&&(f+=" "+n+'="'+String(r).replace(d,"&quot;")+'"'),f+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(f),r(r.P+r.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},1396:function(e,t,n){var content=n(1759);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("30596a43",content,!0,{sourceMap:!1})},1754:function(e,t,n){"use strict";var r=n(1394);n.n(r).a},1755:function(e,t,n){var r=n(53),o=n(636),c=n(1756);t=r(!1);var d=o(c);t.push([e.i,".reference[data-v-3cde2975]{background-color:#f5f6f7}.header[data-v-3cde2975]{position:relative;display:flex;justify-content:center;align-items:center;width:100%;height:328px;color:#fff;background:url("+d+");background-color:#1b5092;background-position:50%;background-repeat:no-repeat;background-size:cover;border:none;margin-top:-1px}.header h1[data-v-3cde2975]{color:#fff!important}@media (max-width:1000px){.header[data-v-3cde2975]{padding:23px;margin-bottom:200px}}.infos[data-v-3cde2975]{position:relative;margin-bottom:10px;background-color:#fff}@media (max-width:989px){.reference[data-v-3cde2975]{margin-top:-17px}}@media (max-width:768px){.header[data-v-3cde2975]{margin-bottom:250px}}@media (max-width:600px){.table-responsive>div[data-v-3cde2975]{width:600px}.referenceHistory[data-v-3cde2975]{margin-top:130px!important}}",""]),e.exports=t},1756:function(e,t,n){e.exports=n.p+"img/referral-banner.56b5dc9.png"},1757:function(e,t,n){"use strict";n(1395)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},1758:function(e,t,n){"use strict";var r=n(1396);n.n(r).a},1759:function(e,t,n){(t=n(53)(!1)).push([e.i,".copy-icon{padding:0 10px 10px 5px}.infos-body,.link-container{display:flex}.infos-body{height:480px;justify-content:center}.infos-body .send-reference{width:721px;min-height:476px;background-color:#fff;box-shadow:0 0 20px rgba(0,0,0,.10196);border-radius:3px;padding:30px;display:flex;flex-direction:column;justify-content:space-around;margin-right:50px;position:relative;top:-100px}.infos-body .send-reference .invite h1{margin:0}.infos-body .send-reference .invite div span,.infos-body .send-reference .reference-code-area span{font-size:14px;letter-spacing:0;color:#848e9c}.infos-body .send-reference .reference-code-area .reference-code-copy span{font-size:32px;letter-spacing:0;color:#212833}.infos-body .send-reference .default-link-area{display:flex}.infos-body .send-reference .default-link-area p{padding-right:5px;letter-spacing:0;color:#848e9c;font-size:14px}.infos-body .send-reference .default-link-area div span{font-size:14px;letter-spacing:0;color:#212833}.infos-body .send-reference .percentages{display:flex;background:#fafafa 0 0 no-repeat padding-box;max-width:300px;height:79px;border-radius:3px;align-items:center}.infos-body .send-reference .percentages .divider{width:1px;height:47px;background:#eaecef 0 0 no-repeat padding-box}.infos-body .send-reference .percentages .percentage{min-width:320px;display:flex;flex-direction:column;justify-content:center;padding-left:15px}.infos-body .send-reference .percentages .percentage p{margin:0}.infos-body .send-reference .sendButton{width:641px}.infos-body .reference-account{margin-top:120px;height:350px;display:flex;flex-direction:column;justify-content:space-around;position:relative;top:-100px}.infos-body .reference-account h4{letter-spacing:0;color:#525965;font-size:14px}.infos-body .reference-account span{letter-spacing:0;color:#212833;font-size:34px}@media (max-width:1000px){.infos-body{height:480px;display:flex;justify-content:center;flex-direction:column}.infos-body .send-reference,.infos-body .send-reference .percentages,.infos-body .send-reference .sendButton{width:100%}.infos-body .reference-account{background-color:#fff;margin-top:30px;min-height:400px;padding:30px}}@media (max-width:600px){.infos-body .send-reference .default-link-area{display:flex;flex-direction:column}}",""]),e.exports=t},2699:function(e,t,n){"use strict";n.r(t);n(25);var r=n(13),o=(n(1757),{name:"infos",data:function(){return{visible:!1,referenceDetail:{},link:"",isError:!1,errorMessage:""}},mounted:function(){this.getReferencePageDetail()},methods:{hide:function(){this.visible=!1},show:function(){this.visible=!0},copyText:function(e){var t=document.getElementById(e),n=window.getSelection(),r=document.createRange();r.selectNodeContents(t),n.removeAllRanges(),n.addRange(r),document.execCommand("Copy"),n.removeAllRanges()},updateLink:function(e){this.link=e},getReferencePageDetail:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={Authorization:"Bearer "+e.$cookies.get("Token")},e.$cookies.get("Userkey"),t.next=5,e.$axios.get(e.$config.FINANCE_API_URL+"/GetReferencePageDetail?Offset=0&RowSize=10",{headers:n});case 5:(r=t.sent).data&&(e.referenceDetail=r.data),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()},updateUserLink:function(link){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={Authorization:"Bearer "+e.$cookies.get("Token")},r={UserKey:link},t.next=5,e.$axios.post(e.$config.FINANCE_API_URL+"/CreateReferenceURL",r,{headers:n});case 5:(o=t.sent).data&&(!1===o.data.Success?(e.errorMessage=o.data.Message,e.isError=!0,setTimeout((function(){e.isError=!1}),3e3)):e.referenceDetail.ReferenceLink=o.data.ShortURL),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),(c=t.t0.response).data&&"99"===c.data.ErrorCode&&(e.errorMessage=c.data.Message,e.isError=!0,setTimeout((function(){e.isError=!1}),3e3));case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}}),c=(n(1758),n(19)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"infos-body"},[r("div",{staticClass:"send-reference"},[r("div",{staticClass:"invite"},[r("h1",[e._v(e._s(e.$t("reference_text_invite")))]),e._v(" "),r("span",[e._v(e._s(e.$t("reference_text_description")))])]),e._v(" "),r("div",{staticClass:"reference-code-area"},[r("span",[e._v(e._s(e.$t("reference_text_reference_code")))]),e._v(" "),r("div",{staticClass:"reference-code-copy"},[r("span",{attrs:{id:"reference-code"}},[e._v(" "+e._s(e.referenceDetail.ReferralCode))]),e._v(" "),r("a-tooltip",[r("template",{slot:"title"},[e._v(e._s(e.$t("otc_copied")))]),e._v(" "),r("img",{staticClass:"copy-icon",attrs:{src:n(1293)},on:{click:function(t){return e.copyText("reference-code")}}})],2)],1)]),e._v(" "),r("div",{staticClass:"default-link-area"},[r("p",[e._v(e._s(e.$t("reference_text_customized_link")))]),e._v(" "),r("div",{staticClass:"link-container"},[r("span",{attrs:{id:"default-link"}},[e._v(" "+e._s(e.referenceDetail.ReferenceLink)+" ")]),e._v(" "),r("a-tooltip",[r("template",{slot:"title"},[e._v(e._s(e.$t("otc_copied")))]),e._v(" "),r("img",{staticClass:"copy-icon",attrs:{src:n(1293)},on:{click:function(t){return e.copyText("default-link")}}})],2)],1),e._v(" "),r("a-popover",{attrs:{title:e.$t("reference_text_customize"),trigger:"click"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("a-input",{attrs:{placeholder:"Link"},model:{value:e.link,callback:function(t){e.link=t},expression:"link"}}),e._v(" "),r("a-button",{on:{click:function(t){return e.updateUserLink(e.link)}}},[e._v(e._s(e.$t("reference_text_reference_create")))]),e._v(" "),e.isError?r("a-alert",{attrs:{message:e.errorMessage,banner:"",closable:""}}):e._e()],1),e._v(" "),r("a",{on:{click:e.show}},[e._v(e._s(e.$t("reference_text_customize_link")))])])],1),e._v(" "),r("div",{staticClass:"percentages"},[r("div",{staticClass:"percentage"},[r("p",[e._v(e._s(e.$t("reference_text_reference_rate")))]),e._v(" "),r("span",[e._v(e._s(e.referenceDetail.CommissionRate)+"%")])])]),e._v(" "),r("a-button",{staticClass:"sendButton",attrs:{type:"primary",block:""}},[e._v(e._s(e.$t("reference_text_invite")))])],1),e._v(" "),r("div",{staticClass:"reference-account"},[r("h1",[e._v(e._s(e.$t("reference_text_reference_account")))]),e._v(" "),r("div",[r("h4",[e._v(e._s(e.$t("reference_text_reference_rate"))+":")]),e._v(" "),r("span",[e._v("25%")])]),e._v(" "),r("div",[r("h4",[e._v(e._s(e.$t("reference_text_reference_income"))+":")]),e._v(" "),r("span",[e._v(e._s(e.referenceDetail.TotalBTCAmount)+" BTC")])]),e._v(" "),r("div",[r("h4",[e._v(e._s(e.$t("reference_text_reference_count")))]),e._v(" "),r("span",[e._v(e._s(e.referenceDetail.TotalFriends))])])])])])}),[],!1,null,null,null);t.default=component.exports},2742:function(e,t,n){"use strict";n.r(t);var r={name:"Reference",head:function(){return{title:"Referans | Cointral.com"}},components:{infos:function(){return Promise.resolve().then(n.bind(null,2699))},reference:function(){return n.e(87).then(n.bind(null,2789))}}},o=(n(1754),n(19)),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"reference"},[this._m(0),this._v(" "),t("infos",{staticClass:"infos"}),this._v(" "),t("reference")],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header"},[t("div",[t("h1",[this._v("Arkadaşlarınızı Davet Edin. Birlikte - Kazanın")]),this._v(" "),t("span",[this._v("\n        Arkadaşlarınız her alım satım yaptığında %25 referans geliri kazanın.\n      ")])])])}],!1,null,"3cde2975",null);t.default=component.exports;installComponents(component,{Infos:n(2699).default})}}]);