(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1276:function(t,e,n){"use strict";var r=n(27),o=n(84),l=n(96),c=n(294),d=n(201),f=n(47),m=n(145).f,h=n(203).f,A=n(44).f,v=n(1295).trim,x=r.Number,w=x,_=x.prototype,S="Number"==l(n(202)(_)),E="trim"in String.prototype,C=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=E?e.trim():v(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(S?f((function(){_.valueOf.call(n)})):"Number"!=l(n))?c(new w(C(e)),n,x):C(e)};for(var y,I=n(34)?m(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;I.length>k;k++)o(w,y=I[k])&&!o(x,y)&&A(x,y,h(w,y));x.prototype=_,_.constructor=x,n(48)(r,"Number",x)}},1281:function(t,e,n){"use strict";var r=n(29),o=n(651)(6),l="findIndex",c=!0;l in[]&&Array(1)[l]((function(){c=!1})),r(r.P+r.F*c,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(199)(l)},1295:function(t,e,n){var r=n(29),o=n(95),l=n(47),c=n(1296),d="["+c+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),h=function(t,e,n){var o={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),f=o[t]=d?e(A):c[t];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},A=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=h},1296:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},1496:function(t,e,n){t.exports=n.p+"img/background.9694447.png"},1563:function(t,e,n){var content=n(2612);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("5d6c6cbe",content,!0,{sourceMap:!1})},1564:function(t,e,n){var content=n(2614);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("6ac6b57a",content,!0,{sourceMap:!1})},1565:function(t,e,n){var content=n(2618);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("0616c41a",content,!0,{sourceMap:!1})},1679:function(t,e,n){"use strict";n.r(e);n(25);var r=n(13),o=(n(1276),{props:{visible:{type:Boolean,default:!1},inAsset:{type:String,required:!0},outAsset:{type:String,required:!0},finalAmount:{type:Number,required:!0},inAmount:{type:Number,required:!0}},data:function(){return{loading:!1,buttonName:null,interval:null,countDown:30,notificationMessage:null}},mounted:function(){var t=this;clearInterval(this.interval),this.buttonName="Confirm",this.countDownTimer(),this.interval=setInterval((function(){t.buttonName="Refresh"}),3e4)},methods:{openNotificationWithIcon:function(t){this.$notification[t]({message:"Başarılı",description:this.notificationMessage})},countDownTimer:function(){var t=this;this.countDown>0&&setTimeout((function(){t.countDown-=1,t.countDownTimer()}),1e3)},decideConfirmOrRefresh:function(){"Confirm"===this.buttonName?this.confirmOrSwap():"Refresh"===this.buttonName&&this.refresh()},confirmOrSwap:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.countDown=0,n=t.$axios,r=t.$config,o=t.$cookies,l={Authorization:"Bearer "+o.get("Token")},e.prev=4,e.next=7,n.post(r.FINANCE_API_URL+"/Swap",{inAsset:t.inAsset,OutAsset:t.outAsset,inAmount:t.inAmount},{headers:l});case 7:0===(c=e.sent).data.ErrorCode&&(t.notificationMessage=c.data.Message,t.openNotificationWithIcon("success")),c.data&&(c.data.Success,t.loading=!1,t.$emit("closeModal")),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),t.loading=!1,t.$emit("closeModal");case 16:case"end":return e.stop()}}),e,null,[[4,12]])})))()},refresh:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.buttonName="Confirm",t.countDown=30,t.countDownTimer(),clearInterval(t.interval),t.interval=setInterval((function(){t.buttonName="Refresh"}),3e4),t.$emit("refresh");case 6:case"end":return e.stop()}}),e)})))()},closeModal:function(){this.$emit("closeModal")}}}),l=(n(2611),n(19)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-modal",{staticClass:"ant-modal-title",attrs:{centered:"",title:"Takas İşlemi"},on:{cancel:t.closeModal},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("template",{slot:"footer"},[n("a-button",{staticClass:"ant-modal-button swap-start-button primary-button border-none Roboto-Medium ant-btn ant-btn-primary",attrs:{loading:t.loading},on:{click:t.decideConfirmOrRefresh}},[t._v("\n      "+t._s(0===t.countDown||-1===t.countDown?t.buttonName:t.buttonName+" ("+t.countDown+")")+"\n    ")])],1),t._v(" "),n("a-row",[n("a-col",{attrs:{span:12,align:"start"}},[n("p",{staticClass:"modal-text"},[t._v(t._s(t.$t("swap_change")))])]),t._v(" "),n("a-col",{attrs:{span:12,align:"end"}},[n("p",{staticClass:"modal-values"},[t._v("\n        "+t._s(t.inAmount?t.inAmount:0)+" "+t._s(t.inAsset)+"\n      ")])])],1),t._v(" "),n("a-row",{staticClass:"mt-2"},[n("a-col",{attrs:{span:6,align:"start"}},[n("p",{staticClass:"modal-text"},[t._v(t._s(t.$t("swap_how_much")))])]),t._v(" "),n("a-col",{attrs:{span:18,align:"end"}},[n("p",{staticClass:"modal-values"},[t._v("\n        "+t._s(t.finalAmount/t.inAmount?(t.finalAmount/t.inAmount).toFixed(8):0)+"\n        "+t._s(t.outAsset)+"\n      ")])])],1),t._v(" "),n("hr",{staticClass:"modal-horizontal-line"}),t._v(" "),n("a-row",[n("a-col",{attrs:{span:12,align:"start"}},[n("p",{staticClass:"modal-text"},[t._v(t._s(t.$t("swap_how_much_take")))])]),t._v(" "),n("a-col",{attrs:{span:12,align:"end"}},[n("p",{staticClass:"modal-values"},[t._v(t._s(t.finalAmount)+" "+t._s(t.outAsset))])])],1)],2)}),[],!1,null,null,null);e.default=component.exports},2610:function(t,e,n){t.exports=n.p+"2051ff202367b488b23661e912154d15.svg"},2611:function(t,e,n){"use strict";var r=n(1563);n.n(r).a},2612:function(t,e,n){(e=n(53)(!1)).push([t.i,".ant-modal-title{text-align:center}.ant-modal-button{font-size:16px;margin-top:20px;width:100%;height:40px;background:#90dafe 0 0 no-repeat padding-box;opacity:1}.modal-horizontal-line{height:1px;color:grey;border-width:0;background-color:#f4f4f4}.modal-text{color:#2e4153;font-size:16px;font-weight:700}.modal-values{color:#858e9d;font-size:16px}",""]),t.exports=e},2613:function(t,e,n){"use strict";var r=n(1564);n.n(r).a},2614:function(t,e,n){var r=n(53),o=n(636),l=n(1496),c=n(2615),d=n(2616);e=r(!1);var f=o(l),m=o(c),h=o(d);e.push([t.i,".wrapper[data-v-70eef6ed]{background:transparent linear-gradient(180deg,#fff,#1c2640) 0 0 no-repeat padding-box}.ant-card-head-title[data-v-70eef6ed]{text-align:left;margin:-5px;color:#000;font-size:16px;font-weight:600}.background-image[data-v-70eef6ed]{height:256px;width:100%;background:linear-gradient(180deg,#123966,rgba(28,36,62,.73)),url("+f+")}.rules-image-column img[data-v-70eef6ed]{width:70px}.rules-image-column[data-v-70eef6ed]{display:flex;align-items:center;justify-content:center;height:177px}.rules-image[data-v-70eef6ed]{cursor:pointer;position:relative;right:0;width:18px;float:right;padding:15px;border:1px solid #ffe0e0;border-radius:50%;height:24px;background-image:url("+m+");background-position:50%;background-repeat:no-repeat}.main-background[data-v-70eef6ed]{background-image:url("+h+")}[dir=ltr] .main-card[data-v-70eef6ed]{text-align:left}[dir=rtl] .main-card[data-v-70eef6ed]{text-align:right}.main-card[data-v-70eef6ed]{z-index:5;width:500px;box-shadow:0 0 30px rgba(0,0,0,.12941);opacity:1}[dir=ltr] .main-card-mobile[data-v-70eef6ed]{text-align:left}[dir=rtl] .main-card-mobile[data-v-70eef6ed]{text-align:right}.main-card-mobile[data-v-70eef6ed]{z-index:5;width:100%;box-shadow:0 0 30px rgba(0,0,0,.12941);border-radius:3px;opacity:1}.Selling-field>label[data-v-70eef6ed]{position:absolute;top:0;width:120px;line-height:2;padding:0 10px;font-size:12px;font-weight:600;color:#2d99ce}.Selling-field>input[data-v-70eef6ed]{width:100%;height:47px;font-size:18px;font-weight:700;border-top-left-radius:5px;border-bottom-left-radius:5px;padding:16px 10px 3px;border:1px solid #c8c8c8}[data-v-70eef6ed] .ant-form-item{margin-bottom:0!important}.col-center[data-v-70eef6ed]{height:570px;display:flex;justify-content:center;align-items:center;flex-direction:column}[data-v-70eef6ed] .ant-select-selection--single{height:100%!important}[data-v-70eef6ed] .ant-select{height:46px}.swap-container[data-v-70eef6ed]{display:flex}.card-container[data-v-70eef6ed]{display:flex;flex-direction:column;max-width:1100px}[data-v-70eef6ed] .ant-card{border-radius:11px;border:1px solid #e4e4e4;margin:0 20px}.first-row[data-v-70eef6ed]{width:100%;max-height:356px;padding:24px!important;text-align:left;border-radius:11px;border:none;box-shadow:none!important}.first-row-mobile[data-v-70eef6ed]{width:100%;height:356px;text-align:left}.swap-start-button[data-v-70eef6ed]{font-size:16px;margin-top:20px;width:100%;height:40px;background:#90dafe 0 0 no-repeat padding-box;opacity:1}.second-row[data-v-70eef6ed]{width:50%;height:356px;text-align:center}.second-row-mobile[data-v-70eef6ed]{margin-top:20px;width:100%;height:356px;text-align:center}.second-row-title[data-v-70eef6ed]{font-size:26px;opacity:1;color:#fff;text-align:left;font-weight:700;letter-spacing:0}[data-v-70eef6ed] .ant-select-lg{font-size:19px!important;font-weight:700}.second-row-text[data-v-70eef6ed]{margin-top:21px;text-align:left;color:#fff;font-size:17px;max-width:550px;opacity:1}.centered[data-v-70eef6ed]{color:#fff;font-size:45px;font-family:Roboto-Regular;text-align:left;margin-bottom:30px}[data-v-70eef6ed] .btc-dropdown>div{position:relative;display:block;line-height:48px!important;background:#f2f2f2!important;margin:0!important;padding:0!important;width:100%!important;text-align:center;display:flex;align-items:center;justify-content:center}[data-v-70eef6ed] .ant-select-selection__single{position:relative;height:49px!important}.btc-dropdown .ant-select-selection__rendered[data-v-70eef6ed]{border-top-right-radius:3px;border-bottom-left-radius:3px;display:block;line-height:48px!important;background:#f2f2f2!important;margin:0!important;padding:0 10px!important;width:100%!important}.ant-select-lg .ant-select-selection--single[data-v-70eef6ed]{height:42px}.select-text[data-v-70eef6ed]{font-size:19px;font-weight:700}@media only screen and (max-width:600px){.swap-container[data-v-70eef6ed]{display:flex;flex-direction:column}.ant-card[data-v-70eef6ed]{width:auto;border-radius:11px;border:1px solid #e4e4e4}.ant-card[data-v-70eef6ed],.card-col-2[data-v-70eef6ed]{margin:0 20px}.first-row-mobile[data-v-70eef6ed]{width:100%;height:264px;text-align:left}}",""]),t.exports=e},2615:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAaCAYAAAC6nQw6AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAEqADAAQAAAABAAAAGgAAAACJEduuAAABT0lEQVQ4Ee2UQU7DMBBFZ9ygLpuj9Ag9Qo6Qbokqum1oJVeEZtlFybocoUfIDeAIcANYgmgGGxzLCROHwoYFkaLYM3+exxN7EL75rDY3c0DcKvn0apHctsNE29A9x8j49qu8iNu6E0CN0C+wn4I0tQE7GUREjwTwbPKzsKCRsJks80Ii0QWBmGbp+cHVIODDsYK5EFAiwEj5NAy6MtJ/KASksQupx5vL5L6qYOJkFrEgs1Idx34d2FplKNmtsZGMUcOUWb+dW2PC/CZ2a/4Q3vsP4uviWv9gjaTchul1wV4FN/W+sTgOz8qBgDt18fZ9Yp9fEEFoBLEXhvD0qaMDBwwqwkigbQkaxulg8PIavw2DcZbOSk6gLjqArpHTX6xOtYl1tkikNXgGH7/faQl15/OE8C57jn4LsyC9Thum2q0pMJ9Fr1WfrWW+m/QKHcE7YRBx9BwvbDkAAAAASUVORK5CYII="},2616:function(t,e,n){t.exports=n.p+"img/backgroundImg.4fc1b79.png"},2617:function(t,e,n){"use strict";var r=n(1565);n.n(r).a},2618:function(t,e,n){(e=n(53)(!1)).push([t.i,".swap-start-button[data-v-70eef6ed]:hover{background:#90dafe 0 0 no-repeat padding-box!important;color:#fff!important}.tooltip1[data-v-70eef6ed]{margin-top:5px}",""]),t.exports=e},2784:function(t,e,n){"use strict";n.r(e);n(63),n(32),n(31),n(22),n(55),n(1281),n(64),n(71),n(25);var r=n(13),o=(n(83),n(26)),l=n(41);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={middleware:["auth"],components:{Modal:n(1679).default},head:function(){return{title:"Hızlı Takas | Cointral.com"}},data:function(){return{loading:!1,size:"large",inAsset:"BTC",outAsset:"ETH",inAmount:null,swapPrice:null,isVisible:!1,inAmountSwap:null,finalAmountSwap:null,availabelBalance:null,title:"",isError:!1,message:null,price:null,isErrorInput:!1,isErrorInputMessage:null,isErrorInput2:!1,isErrorInputMessage2:null,isMobile:null,notificationMessage:null,isSwapLoading:!1}},computed:d({},Object(l.c)({ASSETS:"swap/ASSETS",USER_SPOT_BALANCE:"swap/USER_SPOT_BALANCE"})),mounted:function(){var t=this;if(this.isMobile=window.innerWidth<1e3,window.addEventListener("resize",(function(){t.isMobile=window.innerWidth<1e3})),this.$route.params.inout){var e=this.$route.params.inout.split("-");this.inAsset=e[0],this.outAsset=e[1]}this.findTheAvailabelBalance()},methods:d(d({},Object(l.d)({SET_ASSETS:"swap/SET_ASSETS"})),{},{checkInput:function(){this.isErrorInput&&(this.isErrorInput=!1,this.isErrorInputMessage=null),this.getSwapPrice()},writeInput:function(){this.inAmount=this.availabelBalance,this.availabelBalance&&this.getSwapPrice()},closeModal:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isVisible=!1,e.prev=1,n=t.$axios,r=t.$config.FINANCE_API_URL,o=t.$cookies,l=t.$store,c={Authorization:"Bearer "+o.get("Token")},e.next=6,n.get(r+"/GetUserBalance",{headers:c});case 6:(d=e.sent).data&&(l.commit("swap/SET_USER_SPOT_BALANCE",d.data.UserSpotBalance),d.data.UserSpotBalance&&d.data.UserSpotBalance.length>0?d.data.UserSpotBalance.forEach((function(e){e.asset===t.inAsset&&(t.availabelBalance=e.free)})):t.availabelBalance=0),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})))()},changeAssets:function(){this.isErrorInput=!1;var t=this.inAsset;this.inAsset=this.outAsset,this.outAsset=t,this.findTheAvailabelBalance(),this.inAmount&&this.getSwapPrice()},handleInAssetChange:function(t){this.isError&&(this.isError=!1,this.message=null),this.outAsset===t&&("BTC"===this.outAsset?(this.inAsset="BTC",this.outAsset="USDT"):(this.inAsset=t,this.outAsset="BTC")),this.inAsset=t,this.inAmount&&this.getSwapPrice(),this.findTheAvailabelBalance(),this.changeBrowserRoute()},findTheAvailabelBalance:function(){var t=this;this.USER_SPOT_BALANCE&&this.USER_SPOT_BALANCE.length>0?this.USER_SPOT_BALANCE.forEach((function(e){e.asset===t.inAsset&&(t.availabelBalance=e.free)})):this.availabelBalance=0},handleOutAssetChange:function(t){if(this.inAsset===t)return"BTC"===this.inAsset?(this.inAsset="USDT",this.outAsset="BTC"):(this.inAsset="BTC",this.outAsset=t),this.findTheAvailabelBalance(),void this.changeBrowserRoute();this.outAsset=t,this.inAmount&&this.getSwapPrice(),this.changeBrowserRoute()},changeBrowserRoute:function(){var t=this.$route.path.split("/");""!==t[t.length-1]?t[t.length-1]="".concat(this.inAsset,"-").concat(this.outAsset):t[t.length-2]="".concat(this.inAsset,"-").concat(this.outAsset);var e=t.join("/");history.pushState({},null,e)},handleBlur:function(){},handleFocus:function(){},filterOption:function(input,option){return option.componentOptions.children[1].text.toLowerCase().indexOf(input.toLowerCase())>=0},getSwapPrice:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.price=null,n=t.$axios,r=t.$config,o=t.$cookies,l={Authorization:"Bearer "+o.get("Token")},t.isSwapLoading=!0,e.prev=4,e.next=7,n.get(r.FINANCE_API_URL+"/GetSwapPrice",{params:{inAsset:t.inAsset,OutAsset:t.outAsset},headers:l});case 7:(c=e.sent).data&&(d=c.data.Success,1===c.data.ErrorCode||99===c.data.ErrorCode?(t.isErrorInputMessage=c.data.Message,t.isErrorInput=!0):t.message&&""!==t.message?(t.message=c.data.Message,t.isError=!0):d&&(t.swapPrice=c.data.Price,t.inAmount&&(t.price=t.inAmount*t.swapPrice))),t.isSwapLoading=!1,e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),t.isVisible=!1,t.isSwapLoading=!1;case 16:case"end":return e.stop()}}),e,null,[[4,12]])})))()},startSwap:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.inAsset===t.outAsset||!t.inAmount){e.next=18;break}return n=t.$axios,r=t.$config,o=t.$cookies,l={Authorization:"Bearer "+o.get("Token")},t.isSwapLoading=!0,e.prev=4,e.next=7,n.post(r.FINANCE_API_URL+"/GetSwapFinalQuantity",{inAsset:t.inAsset,OutAsset:t.outAsset,InputAmount:t.inAmount,OutputAmount:""},{headers:l});case 7:(c=e.sent).data&&(d=c.data.Success,1===c.data.ErrorCode?(t.isErrorInputMessage=c.data.Message,t.isErrorInput=!0):t.message&&""!==t.message?(t.message=c.data.Message,t.isError=!0):d?(t.inAmountSwap=c.data.InAmount,t.finalAmountSwap=c.data.FinalAmount,t.isVisible=!0):t.isVisible=!1),t.isSwapLoading=!1,e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),t.isVisible=!1,t.isSwapLoading=!1;case 16:e.next=18;break;case 18:case"end":return e.stop()}}),e,null,[[4,12]])})))()}}),watch:{$route:{handler:function(t){},deep:!0}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c,d,f,m,h,data,A,v,x,w,_,S,E,C,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.$axios,o=t.store,l=t.redirect,c=t.$config.FINANCE_API_URL,d=t.params,f=t.$cookies,e.prev=1,d.inout||l(n.localeRoute("/swap/BTC-ETH")),d.inout.includes("-")||l(n.localeRoute("/swap/BTC-ETH")),m={Authorization:"Bearer "+f.get("Token")},e.next=7,r.get(c+"/GetSymbols",{headers:m});case 7:return h=e.sent,data=h.data,A=data.SymbolList,data.Success&&(v=d.inout.toUpperCase().split("-"),x=v[0].toUpperCase(),w=v[1].toUpperCase(),_=A.findIndex((function(t){return t.BaseAsset===x})),S=A.findIndex((function(t){return t.BaseAsset===w})),-1!==_&&-1!==S||l(n.localeRoute("/swap/BTC-ETH"))),e.next=13,r.get(c+"/GetAssetList",{headers:m});case 13:return E=e.sent,e.next=16,r.get(c+"/GetUserBalance",{headers:m});case 16:(C=e.sent).data&&o.commit("swap/SET_USER_SPOT_BALANCE",C.data.UserSpotBalance),E.data&&(y=E.data.Assets,o.commit("swap/SET_ASSETS",y)),e.next=23;break;case 21:e.prev=21,e.t0=e.catch(1);case 23:case"end":return e.stop()}}),e,null,[[1,21]])})))()}},m=(n(2613),n(2617),n(19)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Roboto-Regular main-background"},[t.isVisible?r("Modal",{attrs:{"in-asset":t.inAsset,"out-asset":t.outAsset,"final-amount":t.finalAmountSwap,"in-amount":t.inAmountSwap,visible:t.isVisible},on:{closeModal:t.closeModal,refresh:t.startSwap}}):t._e(),t._v(" "),r("a-col",{staticClass:"col-center",attrs:{align:"center"}},[r("div",{staticClass:"card-container"},[t.isMobile?t._e():r("div",{staticClass:"centered"},[t._v(t._s(t.$t("swap_quick")))]),t._v(" "),r("div",{staticClass:"swap-container"},[r("a-card",{class:t.isMobile?"main-card-mobile":"main-card",attrs:{loading:t.loading}},[r("a-card-grid",{class:t.isMobile?"first-row-mobile":"first-row",attrs:{hoverable:!1}},[t._v("\n            "+t._s()+"\n            "),r("a-row",[r("a-col",{attrs:{xs:16,sm:14,md:14,lg:14,xl:16}},[r("a-form",{staticClass:"Roboto-Regular"},[r("a-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{"validate-status":t.isErrorInput?"error":null,help:t.isErrorInputMessage,"has-feedback":t.isErrorInput}},[r("div",{staticClass:"Selling-field"},[r("label",[t._v(t._s(t.$t("swap_sending_text")))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.inAmount,expression:"inAmount"}],staticStyle:{width:"100%"},attrs:{type:"text",placeholder:t.$t("placeholders_text_amount")},domProps:{value:t.inAmount},on:{keyup:t.checkInput,input:function(e){e.target.composing||(t.inAmount=e.target.value)}}})])])],1)],1),t._v(" "),r("a-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[r("a-form",{staticClass:"Roboto-Regular"},[r("a-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{"validate-status":t.isError?"error":null,help:t.message}},[r("a-select",{staticClass:"btc-dropdown",staticStyle:{width:"100%"},attrs:{id:"first","show-search":"",size:t.size,placeholder:"Seçiniz","default-value":"BTC",value:t.inAsset},on:{change:t.handleInAssetChange,focus:t.handleFocus,blur:t.handleBlur}},t._l(t.ASSETS,(function(e){return r("a-select-option",{key:e.Name,attrs:{value:e.Symbol}},[r("img",{staticStyle:{"margin-bottom":"2px"},attrs:{height:"20",src:n(1271)("./"+e.Symbol.toLowerCase()+".svg"),alt:""}}),t._v(" "),r("span",{staticClass:"select-text"},[t._v("\n                          "+t._s(e.Symbol)+"\n                        ")])])})),1)],1)],1)],1)],1),t._v("\n            "+t._s()+"\n\n            "+t._s()+"\n\n            "),r("a-col",{staticStyle:{"margin-bottom":"20px","z-index":"5",display:"flex","justify-content":"space-around","align-items":"center",width:"100%"},attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[r("div",{staticStyle:{cursor:"pointer","z-index":"5",width:"100%"},on:{click:t.writeInput}},[t._v("\n                "+t._s(t.$t("swap_available_balance"))+"\n                "),r("span",{staticStyle:{color:"#1ba4e8","z-index":"5"}},[t._v("\n                  "+t._s(t.inAsset?parseFloat(t.availabelBalance).toFixed(8)?parseFloat(t.availabelBalance).toFixed(8):"0.0":"")+"\n                  "+t._s(t.inAsset?t.inAsset:"Not availabel")+"\n                ")])]),t._v(" "),r("a-col",{attrs:{align:"center"}},[r("div",{staticClass:"rules-image",on:{click:t.changeAssets}})])],1),t._v("\n            "+t._s()+"\n\n            "+t._s()+"\n            "),r("a-row",[r("a-col",{attrs:{xs:16,sm:14,md:14,lg:14,xl:16}},[r("a-form",{staticClass:"Roboto-Regular"},[r("a-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{"validate-status":t.isErrorInput2?"error":null,help:t.isErrorInputMessage2,"has-feedback":t.isErrorInput2}},[r("div",{staticClass:"Selling-field"},[r("label",[t._v(t._s(t.$t("swap_sending_text2"))+"\n                        "),r("a-tooltip",{staticClass:"tooltip1"},[r("a-icon",{attrs:{type:"info-circle"}}),t._v(" "),r("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("swap_sending_info")))])],1)],1),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticStyle:{width:"100%"},attrs:{type:"text",disabled:"",placeholder:t.$t("placeholders_text_amount")},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})])])],1)],1),t._v(" "),r("a-col",{attrs:{xs:8,sm:8,md:8,lg:8,xl:8}},[r("a-form",{staticClass:"Roboto-Regular"},[r("a-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{"validate-status":t.isError?"error":null,help:t.message}},[r("a-select",{staticClass:"btc-dropdown",staticStyle:{width:"100%"},attrs:{"show-search":"",placeholder:t.$t("placeholders_text_select"),size:t.size,"default-value":"ETH",value:t.outAsset},on:{change:t.handleOutAssetChange}},t._l(t.ASSETS,(function(e){return r("a-select-option",{key:e.Name,attrs:{value:e.Symbol}},[r("img",{staticStyle:{"margin-bottom":"2px"},attrs:{height:"20",src:n(1271)("./"+e.Symbol.toLowerCase()+".svg"),alt:""}}),t._v(" "),r("span",{staticClass:"select-text"},[t._v("\n                          "+t._s(e.Symbol)+"\n                        ")])])})),1)],1)],1)],1)],1),t._v("\n            "+t._s()+"\n\n            "),r("a-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[r("a-button",{staticClass:"swap-start-button primary-button border-none Roboto-Medium",attrs:{loading:t.isSwapLoading,type:"primary"},on:{click:t.startSwap}},[t._v(t._s(t.$t("swap_form_button_text")))])],1)],1)],1),t._v(" "),r("a-row",{staticStyle:{"margin-top":"60px"},attrs:{type:"flex"}},[t.isMobile?t._e():r("a-col",{staticClass:"rules-image-column",attrs:{flex:2}},[r("img",{staticStyle:{position:"relative",top:"0"},attrs:{src:n(2610),alt:""}})]),t._v(" "),r("a-col",{staticClass:"card-col-2",staticStyle:{width:"50%"},attrs:{flex:t.isMobile?5:3}},[r("div",{staticClass:"second-row-title"},[t._v(t._s(t.$t("swap_rules_heading")))]),t._v(" "),r("div",{staticClass:"second-row-text"},[t._v(t._s(t.$t("swap_rule")))])])],1)],1)])])],1)}),[],!1,null,"70eef6ed",null);e.default=component.exports;installComponents(component,{Modal:n(1679).default})}}]);