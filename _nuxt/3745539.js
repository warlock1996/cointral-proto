(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1363:function(e,t,r){var content=r(1704);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(54).default)("0fe53e3a",content,!0,{sourceMap:!1})},1701:function(e,t,r){e.exports=r.p+"img/Image42.a5335e4.png"},1702:function(e,t,r){e.exports=r.p+"19669710521aed7e24d9935be9d28db6.svg"},1703:function(e,t,r){"use strict";var o=r(1363);r.n(o).a},1704:function(e,t,r){var o=r(53),n=r(630),c=r(1705);t=o(!1);var d=n(c);t.push([e.i,".corporate-page[data-v-0051032e]{min-height:90vh}.corp-form-card[data-v-0051032e]{height:507px;border-radius:3px}.form-grid[data-v-0051032e]{background-color:#fff;width:85vw;height:507px;display:flex;align-items:center;justify-content:space-around}@media (max-width:1000px){.form-grid[data-v-0051032e]{justify-content:center;margin:0!important;height:307px}.form-grid .form[data-v-0051032e]{padding-left:50px!important}}.form-grid .form[data-v-0051032e]{padding-top:50px}.form-success[data-v-0051032e]{background-image:url("+d+");background-repeat:no-repeat;background-position:10% 50%;background-size:600px;width:85vw;height:507px;background-color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center}.form-success span[data-v-0051032e]{margin-bottom:20px}.form-item[data-v-0051032e]{margin-right:10px;width:100%}.name-row[data-v-0051032e]{display:flex}",""]),e.exports=t},1705:function(e,t,r){e.exports=r.p+"img/Image36.8fc477e.png"},2714:function(e,t,r){"use strict";r.r(t);r(63),r(32),r(31),r(24),r(55);var o=r(26),n=(r(25),r(14)),c=r(1324);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={name:"Corporate",head:function(){return{title:"Kurumsal Başvuru | Cointral.com"}},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,o,n,c,d,m,l,f,v,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,o=e.redirect,n=e.$axios,c=e.$cookies,d=e.$config.FINANCE_API_URL,m={Authorization:"Bearer "+c.get("Token")},t.next=4,n.get(d+"/GetUserInfo",{headers:m});case 4:(l=t.sent).data.Success?(f=l.data,v=f.UserInfo.KYCVerified,_=f.UserInfo.CorporateStatus,v?"CorporateRevision"!==_&&"NoCorporate"!==_&&o(r.localeRoute("/account/dashboard")):o(r.localeRoute("/account/dashboard"))):o(r.localeRoute("/account/dashboard"));case 6:case"end":return t.stop()}}),t)})))()},data:function(){return{form:this.$form.createForm(this,{name:"coordinated"}),formSucces:!1,isMobile:c.isMobile}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,r){e||t.postData(r)}))},postData:function(data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r={Authorization:"Bearer "+e.$cookies.get("Token")},o=m({},data),t.next=5,e.$axios.post(e.$config.FINANCE_API_URL+"/CreateCorporate",o,{headers:r});case 5:t.sent.data.Success&&(e.formSucces=!0,setTimeout((function(){return e.formSucces=!1}),3e3),e.$router.push(e.localeRoute("/account/dashboard"))),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},f=(r(1703),r(19)),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"corporate-page"},[o("h1",[e._v(e._s(e.$t("corporate_header")))]),e._v(" "),e.formSucces?o("div",{staticClass:"form-success"},[o("img",{attrs:{src:r(1702),alt:""}}),e._v(" "),o("span",{staticClass:"succes-text"},[e._v(e._s(e.$t("corporate_text_success")))]),e._v(" "),o("span",[e._v(e._s(e.$t("corporate_text_info")))]),e._v(" "),o("a-button",[e._v(e._s(e.$t("corporate_text_return_home_page")))])],1):o("div",[o("a-card",{staticClass:"corp-form-card border-none"},[o("a-row",{attrs:{gutter:16,type:"flex",align:"middle",justify:"center"}},[o("a-col",{attrs:{span:10}},[o("fieldset",{attrs:{id:"corp-form"}},[o("label",{staticStyle:{"margin-bottom":"15px"},attrs:{for:"corp-form"}},[o("h3",[e._v(e._s(e.$t("corporate_text_title")))])]),e._v(" "),o("a-form",{staticClass:"form",attrs:{form:e.form},on:{submit:e.handleSubmit}},[o("div",{staticClass:"name-row"},[o("a-form-item",{staticClass:"form-item"},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["CompetentsName",{rules:[{required:!0,message:this.$t("text_required_field")}]}],expression:"[\n                      'CompetentsName',\n                      {\n                        rules: [\n                          {\n                            required: true,\n                            message: this.$t('text_required_field'),\n                          },\n                        ],\n                      },\n                    ]"}],staticClass:"w-100",attrs:{size:"large",placeholder:e.$t("corporate_competents_name")}})],1),e._v(" "),o("a-form-item",{staticClass:"form-item"},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["CompetentsSurname",{rules:[{required:!0,message:this.$t("text_required_field")}]}],expression:"[\n                      'CompetentsSurname',\n                      {\n                        rules: [\n                          {\n                            required: true,\n                            message: this.$t('text_required_field'),\n                          },\n                        ],\n                      },\n                    ]"}],staticClass:"w-100",attrs:{size:"large",placeholder:e.$t("corporate_competents_surname")}})],1)],1),e._v(" "),o("div",{staticClass:"name-row"},[o("a-form-item",{staticClass:"form-item"},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["CompanyTitle",{rules:[{required:!0,message:this.$t("text_required_field")}]}],expression:"[\n                      'CompanyTitle',\n                      {\n                        rules: [\n                          {\n                            required: true,\n                            message: this.$t('text_required_field'),\n                          },\n                        ],\n                      },\n                    ]"}],staticClass:"w-100",attrs:{size:"large",placeholder:e.$t("corporate_company_title")}})],1),e._v(" "),o("a-form-item",{staticClass:"form-item"},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Email",{rules:[{required:!0,message:this.$t("text_required_field")}]}],expression:"[\n                      'Email',\n                      {\n                        rules: [\n                          {\n                            required: true,\n                            message: this.$t('text_required_field'),\n                          },\n                        ],\n                      },\n                    ]"}],staticClass:"w-100",attrs:{size:"large",placeholder:e.$t("corporate_email"),type:"email"}})],1)],1),e._v(" "),o("div",{staticClass:"name-row"},[o("a-form-item",{staticClass:"form-item"},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Phone",{rules:[{required:!0,message:this.$t("text_required_field")}]}],expression:"[\n                      'Phone',\n                      {\n                        rules: [\n                          {\n                            required: true,\n                            message: this.$t('text_required_field'),\n                          },\n                        ],\n                      },\n                    ]"}],staticClass:"w-100",attrs:{size:"large",placeholder:e.$t("corporate_phone"),type:"number"}})],1),e._v(" "),o("a-form-item",{staticClass:"form-item"},[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["AreaCode",{rules:[{required:!0,message:this.$t("text_required_field")}]}],expression:"[\n                      'AreaCode',\n                      {\n                        rules: [\n                          {\n                            required: true,\n                            message: this.$t('text_required_field'),\n                          },\n                        ],\n                      },\n                    ]"}],staticClass:"w-100",attrs:{size:"large",placeholder:e.$t("corporate_area_code"),type:"number"}})],1)],1),e._v(" "),o("a-button",{staticClass:"button Roboto-Medium float-right",attrs:{type:"primary",size:"large","html-type":"submit"}},[e._v("\n                "+e._s(e.$t("text_send"))+"\n              ")])],1)],1)]),e._v(" "),o("a-col",{attrs:{offset:2,span:10}},[e.isMobile?e._e():o("img",{attrs:{src:r(1701)}})])],1)],1)],1)])}),[],!1,null,"0051032e",null);t.default=component.exports}}]);