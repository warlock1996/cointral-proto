(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1268:function(t,o,e){t.exports=e.p+"78c246c15bd6b556c227d61c2c2dd31c.svg"},1297:function(t,o,e){t.exports=e.p+"9cc232c36e13eff3478cfd30bf9acb9f.svg"},1298:function(t,o,e){t.exports=e.p+"bd63776bfce8d57ddc6ed10326fb5b97.svg"},1310:function(t,o,e){t.exports=e.p+"06f6f91fd3849d8cd5586ca66088d0db.svg"},1323:function(t,o,e){t.exports=e.p+"cee6a6dfd58d6f321306141e7ad955ea.svg"},1382:function(t,o,e){var content=e(1741);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(54).default)("56735eaf",content,!0,{sourceMap:!1})},1740:function(t,o,e){"use strict";var r=e(1382);e.n(r).a},1741:function(t,o,e){(o=e(53)(!1)).push([t.i,".btn-primary-outline[data-v-668fe64f]{min-width:80px;border:1px solid var(--primary-button-bg);background-color:transparent!important;color:var(--primary-button-bg)}.confirmed[data-v-668fe64f]{border:1px solid #5cb56a;color:#5cb56a;pointer-events:none}.mb-common[data-v-668fe64f]{margin-bottom:20px}.list-title[data-v-668fe64f]{color:#1e2026;margin-bottom:0}.list-desc[data-v-668fe64f]{color:#778090}.auth-type-list-item[data-v-668fe64f]:first-child{border-bottom:0}.security-settings-header[data-v-668fe64f]{margin-top:-15px;margin-left:-15px}.security-setting-card[data-v-668fe64f]{box-shadow:0 0 2px rgba(0,0,0,.05098);border-radius:3px}.security-settings-list-item-icon[data-v-668fe64f]{margin-right:5px;width:20px;height:20px}.security-settings-list-item[data-v-668fe64f]{text-align:left;text-decoration:underline}.security-settings-list-item .ant-list-item[data-v-668fe64f]{margin-bottom:0}.icon-2fa[data-v-668fe64f]{background-color:#a9a9a9;border-radius:50%}.totalVrfs[data-v-668fe64f]{color:var(--text-primary)}",""]),t.exports=o},2718:function(t,o,e){"use strict";e.r(o);e(25);var r=e(14),n={data:function(){return{UserInfo:{}}},head:function(){return{title:"Güvenlik | Cointral.com"}},beforeMount:function(){this.getUserInfo()},methods:{getUserInfo:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var e,r,n,c,l,d;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.$axios,r=t.$cookies,n=t.$config.FINANCE_API_URL,c={Authorization:"Bearer "+r.get("Token")},o.next=4,e.get(n+"/GetUserInfo",{headers:c});case 4:(l=o.sent).data.Success&&(d=l.data.UserInfo,t.UserInfo=d);case 6:case"end":return o.stop()}}),o)})))()},disable2fa:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var e,r,n,c,l,d,m,v;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.$store,r=t.$router,n=t.$config.FINANCE_API_URL,c=t.$axios,l=t.$cookies,d={Authorization:"Bearer "+l.get("Token")},o.next=4,c.get(n+"/DisableTwoFA",{headers:d});case 4:(m=o.sent).data.Success&&(v=m.data.SecurityVerificationToken,e.commit("auth/setVerficationData",{SecurityVerificationToken:v,status:!0,redirectURI:"/account"}),r.push(t.localeRoute("/security-verification")));case 6:case"end":return o.stop()}}),o)})))()},disableSms:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var e,r,n,c,l,d,m,v;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.$store,r=t.$router,n=t.$config.FINANCE_API_URL,c=t.$axios,l=t.$cookies,d={Authorization:"Bearer "+l.get("Token")},o.next=4,c.get(n+"/DisableSMS",{headers:d});case 4:(m=o.sent).data.Success&&(v=m.data.SecurityVerificationToken,e.commit("auth/setVerficationData",{SecurityVerificationToken:v,status:!0,redirectURI:"/account"}),r.push(t.localeRoute("/security-verification")));case 6:case"end":return o.stop()}}),o)})))()}},computed:{totalVerifications:function(){var t=0;return t+=this.UserInfo.KYCVerified?1:0,t+=this.UserInfo.Enable2FAVerify||this.UserInfo.EnableSMSVerify?1:0,t+=this.UserInfo.IsExistAntiphishingCode?1:0}}},c=(e(1740),e(19)),component=Object(c.a)(n,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"security-settings-page"},[r("a-row",{staticClass:"mb-common security-settings-header"},[r("a-col",{attrs:{span:24}},[r("a-card",{staticClass:"security-setting-card border-none"},[r("h2",{staticClass:"Roboto-Medium"},[t._v("\n          Hesabınızın Güvenliğini Artırın (\n          "),r("span",{staticClass:"totalVrfs"},[t._v(t._s(t.totalVerifications))]),t._v("\n          / 3 )\n        ")]),t._v(" "),r("div",{staticClass:"security-links"},[r("a-list",{staticClass:"security-list",attrs:{grid:{gutter:24,column:6},loading:!1}},[r("a-list-item",{staticClass:"security-settings-list-item Roboto-Medium"},[r("a-list-item-meta",{attrs:{title:"2FA | İki Faktörlü Doğrulama"}},[t.UserInfo.Enable2FAVerify||t.UserInfo.EnableSMSVerify?r("img",{staticClass:"security-settings-list-item-icon",attrs:{slot:"avatar",src:e(1297)},slot:"avatar"}):r("img",{staticClass:"security-settings-list-item-icon",attrs:{slot:"avatar",src:e(1298)},slot:"avatar"})])],1),t._v(" "),r("a-list-item",{staticClass:"security-settings-list-item Roboto-Medium"},[r("a-list-item-meta",{attrs:{title:"Kimlik Doğrulaması"}},[t.UserInfo.KYCVerified?r("img",{staticClass:"security-settings-list-item-icon",attrs:{slot:"avatar",src:e(1297)},slot:"avatar"}):r("img",{staticClass:"security-settings-list-item-icon",attrs:{slot:"avatar",src:e(1298)},slot:"avatar"})])],1),t._v(" "),r("a-list-item",{staticClass:"security-settings-list-item Roboto-Medium"},[r("a-list-item-meta",{attrs:{title:"Anti-Phishing Kodu"}},[t.UserInfo.IsExistAntiphishingCode?r("img",{staticClass:"security-settings-list-item-icon",attrs:{slot:"avatar",src:e(1297)},slot:"avatar"}):r("img",{staticClass:"security-settings-list-item-icon",attrs:{slot:"avatar",src:e(1298),s:""},slot:"avatar"})])],1)],1)],1)])],1)],1),t._v(" "),r("a-row",{staticClass:"mb-common",attrs:{gutter:16}},[r("a-col",{attrs:{span:12}},[r("a-card",{staticClass:"security-setting-card border-none mb-common"},[r("a-list",{staticClass:"auth-type-list",attrs:{loading:!1}},[r("a-list-item",{staticClass:"Roboto-Medium auth-type-list-item"},[r("a-list-item-meta",[r("img",{attrs:{slot:"avatar",src:e(1323),alt:""},slot:"avatar"}),t._v(" "),r("p",{staticClass:"list-title Roboto-Medium",attrs:{slot:"title"},slot:"title"},[t._v("\n                "+t._s(t.$t("text_email_authentication"))+"\n              ")]),t._v(" "),r("span",{staticClass:"list-desc Roboto-Medium",attrs:{slot:"description"},slot:"description"},[t._v(t._s(t.$t("text_used_for")))])]),t._v(" "),t.UserInfo.EmailVerified?r("div",[r("a-button",{staticClass:"Roboto-Medium btn-primary-outline confirmed",attrs:{slot:"actions",type:"primary",block:"",icon:"check"},slot:"actions"},[t._v(t._s(t.$t("text_verified")))])],1):r("div",[r("a-button",{staticClass:"Roboto-Medium btn-primary-outline",attrs:{slot:"actions",type:"primary",block:""},slot:"actions"},[t._v(t._s(t.$t("text_not_verified")))])],1)],1),t._v(" "),r("a-list-item",{staticClass:"Roboto-Medium auth-type-list-item"},[r("a-list-item-meta",[r("img",{attrs:{slot:"avatar",src:e(1268),alt:""},slot:"avatar"}),t._v(" "),r("p",{staticClass:"list-title Roboto-Medium",attrs:{slot:"title"},slot:"title"},[t._v("\n                "+t._s(t.$t("text_sms_authentication"))+"\n              ")]),t._v(" "),r("span",{staticClass:"list-desc Roboto-Medium",attrs:{slot:"description"},slot:"description"},[t._v(t._s(t.$t("text_used_for")))])]),t._v(" "),t.UserInfo.EnableSMSVerify?r("div",[r("a-button",{staticClass:"Roboto-Medium",attrs:{slot:"actions",type:"secondary",block:""},on:{click:t.disableSms},slot:"actions"},[t._v(t._s(t.$t("text_disable")))])],1):r("div",[t.UserInfo.EnableSMSVerify?t._e():r("a-button",{staticClass:"Roboto-Medium btn-primary-outline",attrs:{slot:"actions",type:"primary",block:""},on:{click:function(o){t.$router.push(t.localeRoute("/account/security/enable-sms-authenticator"))}},slot:"actions"},[t._v(t._s(t.$t("text_activate")))])],1)],1),t._v(" "),r("a-list-item",{staticClass:"Roboto-Medium auth-type-list-item"},[r("a-list-item-meta",[r("img",{staticClass:"icon-2fa",attrs:{slot:"avatar",src:e(1310),alt:""},slot:"avatar"}),t._v(" "),r("p",{staticClass:"list-title Roboto-Medium",attrs:{slot:"title"},slot:"title"},[t._v("\n                "+t._s(t.$t("text_google_authentication"))+"\n              ")]),t._v(" "),r("span",{staticClass:"list-desc Roboto-Medium",attrs:{slot:"description"},slot:"description"},[t._v(t._s(t.$t("text_used_for")))])]),t._v(" "),t.UserInfo.Enable2FAVerify?r("div",[r("a-button",{staticClass:"Roboto-Medium",attrs:{slot:"actions",type:"secondary",block:""},on:{click:t.disable2fa},slot:"actions"},[t._v(t._s(t.$t("text_disable")))])],1):r("div",[r("a-button",{staticClass:"Roboto-Medium btn-primary-outline",attrs:{slot:"actions",type:"primary",block:""},on:{click:function(o){t.$router.push(t.localeRoute("/account/security/enable-google-authenticator"))}},slot:"actions"},[t._v(t._s(t.$t("text_activate")))])],1),t._v(" "),t.UserInfo.Enable2FAVerify?r("div",[r("nuxt-link",{attrs:{to:t.localePath("/account/security/enable-google-authenticator")}},[r("a-button",{staticClass:"Roboto-Medium btn-primary-outline",attrs:{slot:"actions",type:"primary",block:""},slot:"actions"},[t._v(t._s(t.$t("text_activate")))])],1)],1):t._e()],1)],1)],1),t._v(" "),r("a-card",{staticClass:"security-setting-card security-setting-card-small border-none mb-common"},[r("a-list",{attrs:{loading:!1}},[r("a-list-item",{staticClass:"Roboto-Medium"},[r("a-list-item-meta",[r("a-icon",{attrs:{slot:"avatar",type:"close-circle"},slot:"avatar"}),t._v(" "),r("h3",{staticClass:"list-title Roboto-Medium",attrs:{slot:"title"},slot:"title"},[t._v("\n                "+t._s(t.$t("text_device_management"))+"\n              ")])],1),t._v(" "),r("a-button",{staticClass:"Roboto-Medium",attrs:{slot:"actions",type:"secondary",block:""},on:{click:function(o){t.$router.push(t.localeRoute("/account/security/device-management/"))}},slot:"actions"},[t._v(t._s(t.$t("text_change")))])],1)],1)],1),t._v(" "),r("a-card",{staticClass:"security-setting-card security-setting-card-small border-none mb-common"},[r("a-list",{attrs:{loading:!1}},[r("a-list-item",{staticClass:"Roboto-Medium"},[r("a-list-item-meta",[r("a-icon",{attrs:{slot:"avatar",type:"close-circle"},slot:"avatar"}),t._v(" "),r("h3",{staticClass:"list-title Roboto-Medium",attrs:{slot:"title"},slot:"title"},[t._v("\n                "+t._s(t.$t("text_login_password"))+"\n              ")])],1),t._v(" "),r("a-button",{staticClass:"Roboto-Medium",attrs:{slot:"actions",type:"secondary",block:""},on:{click:function(o){t.$router.push(t.localeRoute("/account/security/password"))}},slot:"actions"},[t._v(t._s(t.$t("text_change")))])],1)],1)],1)],1),t._v(" "),r("a-col",{attrs:{span:12}},[!0===t.UserInfo.KYCVerified?r("a-card",{staticClass:"security-setting-card security-setting-card-small border-none mb-common"},[r("a-list",{attrs:{loading:!1}},[r("a-list-item",{staticClass:"Roboto-Medium"},[r("a-list-item-meta",[r("a-icon",{attrs:{slot:"avatar",type:"close-circle"},slot:"avatar"}),t._v(" "),r("h3",{staticClass:"list-title Roboto-Medium",attrs:{slot:"title"},slot:"title"},[t._v("\n                Kurumsal Hesap\n              ")])],1),t._v(" "),r("div",{staticClass:"text-right"},["NoCorporate"===t.UserInfo.CorporateStatus||"CorporateRevision"===t.UserInfo.CorporateStatus?r("a-button",{staticClass:"Roboto-Medium btn-primary-outline",attrs:{slot:"actions",type:"primary",block:""},slot:"actions"},[r("nuxt-link",{attrs:{to:t.localePath("/account/corporate")}},[r("span",[t._v("\n                    "+t._s(t.UserInfo.CorporateStatusLabel)+"\n                  ")])])],1):"CorporateInProgress"===t.UserInfo.CorporateStatus?r("a-button",{staticClass:"Roboto-Medium btn-secondary-outline",attrs:{slot:"actions",type:"secondary",block:""},slot:"actions"},[r("span",[t._v("\n                  "+t._s(t.UserInfo.CorporateStatusLabel)+"\n                ")])]):r("a-button",{staticClass:"Roboto-Medium btn-primary-outline confirmed",attrs:{slot:"actions",type:"primary",block:""},slot:"actions"},[r("nuxt-link",{attrs:{to:t.localePath("/account/corporate")}},["CorporateInProgress"===t.UserInfo.CorporateStatus?r("span",[t._v("\n                    İnceleniyor\n                  ")]):"CorporateRevision"===t.UserInfo.CorporateStatus?r("span",[t._v("\n                    Yeniden Başvur\n                  ")]):"CorporateDone"===t.UserInfo.CorporateStatus?r("span",[t._v("\n                    Onaylandı\n                  ")]):t._e()])],1)],1)],1)],1)],1):t._e(),t._v(" "),r("a-card",{staticClass:"security-setting-card security-setting-card-small border-none mb-common"},[r("a-list",{attrs:{loading:!1}},[r("a-list-item",{staticClass:"Roboto-Medium"},[r("a-list-item-meta",[r("a-icon",{attrs:{slot:"avatar",type:"close-circle"},slot:"avatar"}),t._v(" "),r("h3",{staticClass:"list-title Roboto-Medium",attrs:{slot:"title"},slot:"title"},[t._v("\n                "+t._s(t.$t("text_authentication"))+"\n              ")])],1),t._v(" "),"NoKYC"===t.UserInfo.KYCStatus||"InProgress"===t.UserInfo.KYCStatus||"Revision"===t.UserInfo.KYCStatus?r("a-button",{staticClass:"Roboto-Medium btn-primary-outline",attrs:{slot:"actions",type:"primary",block:""},slot:"actions"},[r("nuxt-link",{attrs:{to:t.localePath("/account/kyc")}},["Revision"===t.UserInfo.KYCStatus||"NoKYC"===t.UserInfo.KYCStatus?r("span",[t._v(t._s(t.$t("text_confirm")))]):"InProgress"===t.UserInfo.KYCStatus?r("span",[t._v(t._s(t.$t("text_inprogress")))]):t._e()])],1):r("a-button",{staticClass:"Roboto-Medium btn-primary-outline confirmed",attrs:{slot:"actions",type:"primary",block:"",icon:"check"},slot:"actions"},[t._v(t._s(t.$t("text_verified")))])],1)],1)],1),t._v(" "),r("a-card",{staticClass:"security-setting-card security-setting-card-small border-none mb-common"},[r("a-list",{attrs:{loading:!1}},[r("a-list-item",{staticClass:"Roboto-Medium"},[r("a-list-item-meta",[r("a-icon",{attrs:{slot:"avatar",type:"close-circle"},slot:"avatar"}),t._v(" "),r("h3",{staticClass:"list-title Roboto-Medium",attrs:{slot:"title"},slot:"title"},[t._v("\n                "+t._s(t.$t("text_phishing_block_code"))+"\n              ")]),t._v(" "),r("span",{attrs:{slot:"description"},slot:"description"},[t._v(t._s(t.$t("text_phishing_desc")))])],1),t._v(" "),""===t.UserInfo.AntiphishingCode?r("a-button",{staticClass:"Roboto-Medium btn-primary-outline",attrs:{slot:"actions",type:"primary",block:""},on:{click:function(o){t.$router.push(t.localeRoute("/account/security/anti-phishing-code"))}},slot:"actions"},[t._v(t._s(t.$t("text_activate")))]):r("a-button",{staticClass:"Roboto-Medium",attrs:{slot:"actions",type:"secondary",block:""},on:{click:function(o){t.$router.push(t.localeRoute("/account/security/anti-phishing-code"))}},slot:"actions"},[t._v(t._s(t.$t("text_change")))])],1)],1)],1),t._v(" "),r("a-card",{staticClass:"security-setting-card security-setting-card-small border-none mb-common"},[r("a-list",{attrs:{loading:!1}},[r("a-list-item",{staticClass:"Roboto-Medium"},[r("a-list-item-meta",[r("a-icon",{attrs:{slot:"avatar",type:"close-circle"},slot:"avatar"}),t._v(" "),r("h3",{staticClass:"list-title Roboto-Medium",attrs:{slot:"title"},slot:"title"},[t._v("\n                "+t._s(t.$t("text_account_mobility"))+"\n              ")]),t._v(" "),r("span",{attrs:{slot:"description"},slot:"description"},[t._v(t._s(t.$t("text_last_login"))+" : "+t._s(t.UserInfo.LastLogin))])],1),t._v(" "),r("a-button",{staticClass:"Roboto-Medium",attrs:{slot:"actions",type:"secondary",block:""},on:{click:function(o){t.$router.push(t.localeRoute("/account/activity"))}},slot:"actions"},[t._v(t._s(t.$t("text_continue")))])],1),t._v(" "),r("a-list-item",{staticClass:"Roboto-Medium"},[r("a-list-item-meta",[r("a-icon",{attrs:{slot:"avatar",type:"close-circle"},slot:"avatar"}),t._v(" "),r("p",{staticClass:"list-title Roboto-Medium",attrs:{slot:"title"},slot:"title"},[t._v("\n                "+t._s(t.$t("text_suspicious_activity"))+"\n                "),r("a",{on:{click:function(o){o.preventDefault(),t.$router.push(t.localeRoute("/account/froze"))}}},[t._v("\n                  "+t._s(t.$t("text_deactivate_account"))+"\n                ")])])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"668fe64f",null);o.default=component.exports}}]);