exports.ids = [36];
exports.modules = {

/***/ 1002:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login/LoginFormContent.vue?vue&type=template&id=e41157b4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-card',{staticClass:"border-none",attrs:{"bordered":false,"tabList":_vm.tabList,"active-tab-key":_vm.activeKey},on:{"tabChange":function (key) { return (_vm.activeKey = key); }},scopedSlots:_vm._u([{key:"titleSlot",fn:function(item){return _c('span',{staticClass:"Roboto-Medium",class:{
      'tab-label-active': item.key === _vm.activeKey,
      'tab-label-inactive': item.key !== _vm.activeKey,
    }},[(item.key === 'Email')?_c('span',{attrs:{"slot":"tab"},slot:"tab"},[_vm._v("\n      "+_vm._s(_vm.$t('login_tab_email'))+"\n    ")]):_vm._e(),_vm._v(" "),(item.key === 'Mobile')?_c('span',{attrs:{"slot":"tab"},slot:"tab"},[_vm._v("\n      "+_vm._s(_vm.$t('login_tab_mobile'))+"\n    ")]):_vm._e()])}}])},[_vm._v(" "),(_vm.activeKey === 'Email')?_c('div',[_c('a-form-model',{ref:"emailLoginFormRef",attrs:{"model":_vm.user,"rules":_vm.emailLoginRules,"layout":"vertical"}},[_c('a-form-model-item',{attrs:{"has-feedback":"","prop":"Username"},on:{"submit":function($event){$event.preventDefault();return _vm.emitUsernameLogin($event)}}},[_c('template',{slot:"label"},[_c('span',{staticClass:"input-label Roboto-Regular"},[_vm._v(_vm._s(_vm.$t('text_email')))])]),_vm._v(" "),_c('a-input',{staticClass:"Roboto-Regular",attrs:{"type":"email","size":"large"},model:{value:(_vm.user.Username),callback:function ($$v) {_vm.$set(_vm.user, "Username", $$v)},expression:"user.Username"}})],2),_vm._v(" "),_c('a-form-model-item',{attrs:{"has-feedback":"","prop":"Password"}},[_c('template',{slot:"label"},[_c('span',{staticClass:"input-label Roboto-Regular"},[_vm._v(_vm._s(_vm.$t('text_password')))])]),_vm._v(" "),_c('a-input-password',{staticClass:"Roboto-Regular",attrs:{"size":"large"},model:{value:(_vm.user.Password),callback:function ($$v) {_vm.$set(_vm.user, "Password", $$v)},expression:"user.Password"}})],2),_vm._v(" "),_c('a-form-model-item',[_c('a-button',{staticClass:"primary-button border-none Roboto-Medium",attrs:{"loading":_vm.isLoginLoading,"type":"primary","size":"large","block":""},on:{"click":_vm.emitUsernameLogin}},[_vm._v(_vm._s(_vm.$t('login_text')))])],1)],1)],1):_vm._e(),_vm._v(" "),(_vm.activeKey === 'Mobile')?_c('div',[_c('a-form-model',{ref:"mobileLoginFormRef",attrs:{"model":_vm.userMobile,"rules":_vm.mobileLoginRules,"layout":"vertical"}},[_c('a-form-model-item',{attrs:{"prop":"PhoneNumber"},on:{"submit":function($event){$event.preventDefault();return _vm.emitMobileLogin($event)}}},[_c('template',{slot:"label"},[_c('span',{staticClass:"input-label"},[_vm._v(_vm._s(_vm.$t('text_mobile')))])]),_vm._v(" "),_c('vue-tel-input',{class:{ invalidPhoneNo: !_vm.isValidPhoneNo },attrs:{"inputClasses":"ant-input ant-input-lg","dynamicPlaceholder":true},on:{"validate":_vm.validateMobileNumber},model:{value:(_vm.userMobile.PhoneNumber),callback:function ($$v) {_vm.$set(_vm.userMobile, "PhoneNumber", $$v)},expression:"userMobile.PhoneNumber"}}),_vm._v(" "),(!_vm.isValidPhoneNo)?_c('span',{style:({ color: 'red' })},[_vm._v("\n          "+_vm._s(_vm.$t('login_text_invalid_phone'))+"\n        ")]):_vm._e()],2),_vm._v(" "),_c('a-form-model-item',{attrs:{"has-feedback":"","prop":"Password"}},[_c('template',{slot:"label"},[_c('span',{staticClass:"input-label"},[_vm._v(_vm._s(_vm.$t('text_password')))])]),_vm._v(" "),_c('a-input-password',{attrs:{"size":"large"},model:{value:(_vm.userMobile.Password),callback:function ($$v) {_vm.$set(_vm.userMobile, "Password", $$v)},expression:"userMobile.Password"}})],2),_vm._v(" "),_c('a-form-model-item',[_c('a-button',{staticClass:"primary-button border-none Roboto-Medium",attrs:{"loading":_vm.isLoginLoading,"type":"primary","size":"large","block":""},on:{"click":_vm.emitMobileLogin}},[_vm._v(_vm._s(_vm.$t('login_text')))])],1)],1)],1):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Login/LoginFormContent.vue?vue&type=template&id=e41157b4&scoped=true&

// EXTERNAL MODULE: external "vue-tel-input"
var external_vue_tel_input_ = __webpack_require__(134);

// EXTERNAL MODULE: ./Mixins/authMixin.js
var authMixin = __webpack_require__(656);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login/LoginFormContent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var LoginFormContentvue_type_script_lang_js_ = ({
  // loads validator and auth utils
  mixins: [authMixin["a" /* default */]],
  props: {
    isLoginLoading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    VueTelInput: external_vue_tel_input_["VueTelInput"]
  },

  data() {
    return {
      tabList: [{
        key: 'Email',
        scopedSlots: {
          tab: 'titleSlot'
        }
      }, {
        key: 'Mobile',
        scopedSlots: {
          tab: 'titleSlot'
        }
      }],
      activeKey: 'Email',
      // model data
      user: {
        Username: '',
        Password: '',
        DeviceId: ''
      },
      userMobile: {
        PhoneNumber: '',
        Password: '',
        DeviceId: ''
      },
      isValidPhoneNo: true,
      PhoneNoDetails: {},
      emailLoginRules: {
        Username: [{
          validator: this.EmailValidator,
          trigger: 'change'
        }]
      },
      mobileLoginRules: {}
    };
  },

  mounted() {
    document.addEventListener('keyup', this.CTA_LOGIN);
    this.setDeviceId();
  },

  destroyed() {
    document.removeEventListener('keyup', this.CTA_LOGIN);
  },

  methods: {
    CTA_LOGIN(e) {
      const activeKey = this.activeKey;

      if (e.keyCode === 13) {
        switch (activeKey) {
          case 'Email':
            this.emitUsernameLogin();
            break;

          case 'Mobile':
            this.emitMobileLogin();
            break;
        }
      }
    },

    async setDeviceId() {
      let vue = this;
      this.$fingerPrint2.get({
        canvas: true,
        ie_activex: true,
        screen_resolution: true
      }, function (components) {
        var values = components.map(function (component) {
          return component.value;
        });
        var murmur = vue.$fingerPrint2.x64hash128(values.join(''), 31);
        vue.user.DeviceId = murmur;
        vue.userMobile.DeviceId = murmur;
      });
    },

    emitUsernameLogin() {
      this.$refs.emailLoginFormRef.validate(valid => {
        if (valid) {
          this.$emit('loginBtnClick', this.user);
        }
      });
    },

    emitMobileLogin() {
      const {
        PhoneNumber
      } = this.userMobile;

      let _PhoneNumber;

      if (PhoneNumber.startsWith('+')) {
        _PhoneNumber = PhoneNumber.slice(1).split(' ').join('');
      } else {
        _PhoneNumber = this.PhoneNoDetails.country.dialCode + PhoneNumber.slice(1).split(' ').join('');
      }

      this.$refs.mobileLoginFormRef.validate(valid => {
        if (valid && this.isValidPhoneNo) {
          this.$emit('mobileLoginClick', { ...this.userMobile,
            PhoneNumber: _PhoneNumber
          });
        }
      });
    },

    validateMobileNumber(payload) {
      this.PhoneNoDetails = payload;
      this.isValidPhoneNo = payload.isValid;
    }

  },
  watch: {
    'userMobile.PhoneNumber': function () {
      if (this.userMobile.PhoneNumber === '') {
        this.isValidPhoneNo = true;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/Login/LoginFormContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var Login_LoginFormContentvue_type_script_lang_js_ = (LoginFormContentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Login/LoginFormContent.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1192)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Login_LoginFormContentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e41157b4",
  "28ae93ec"
  
)

/* harmony default export */ var LoginFormContent = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFormContent_vue_vue_type_style_index_0_id_e41157b4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(803);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFormContent_vue_vue_type_style_index_0_id_e41157b4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFormContent_vue_vue_type_style_index_0_id_e41157b4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFormContent_vue_vue_type_style_index_0_id_e41157b4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFormContent_vue_vue_type_style_index_0_id_e41157b4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFormContent_vue_vue_type_style_index_0_id_e41157b4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1193:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".invalidPhoneNo.vue-tel-input[data-v-e41157b4]{border:1px solid red!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=06910930&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Index',{class:{ 'block-pointer': _vm.isLoginLoading }},[_c('template',{slot:"auth-card-header"},[_c('LoginFormHeader')],1),_vm._v(" "),_c('template',{slot:"auth-card-feedback"},[(_vm.showError)?_c('a-alert',{attrs:{"message":_vm.$t('warning_title'),"description":_vm.errorMsg,"type":"warning","closable":""},on:{"close":function (e) { return (_vm.showError = false); }}}):_vm._e()],1),_vm._v(" "),_c('template',{slot:"auth-card-content"},[_c('LoginFormContent',{attrs:{"isLoginLoading":_vm.isLoginLoading},on:{"loginBtnClick":_vm.login,"mobileLoginClick":_vm.login}})],1),_vm._v(" "),_c('template',{slot:"auth-card-actions"},[_c('LoginFormFooter')],1)],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=06910930&

// EXTERNAL MODULE: ./components/Login/Index.vue + 4 modules
var Index = __webpack_require__(648);

// EXTERNAL MODULE: ./components/Login/LoginFormHeader.vue + 4 modules
var LoginFormHeader = __webpack_require__(742);

// EXTERNAL MODULE: ./components/Login/LoginFormContent.vue + 4 modules
var LoginFormContent = __webpack_require__(1002);

// EXTERNAL MODULE: ./components/Login/LoginFormFooter.vue + 4 modules
var LoginFormFooter = __webpack_require__(743);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  layout: 'login',
  components: {
    Index: Index["default"],
    LoginFormHeader: LoginFormHeader["default"],
    LoginFormContent: LoginFormContent["default"],
    LoginFormFooter: LoginFormFooter["default"]
  },

  head() {
    return {
      title: 'Giriş Yap | Cointral.com'
    };
  },

  middleware: ['public'],

  asyncData({
    store
  }) {
    store.commit('auth/flushVerificationData');
  },

  data: () => ({
    isLoginLoading: false,
    showError: false,
    errorMsg: ''
  }),
  methods: {
    async login(payload) {
      try {
        this.isLoginLoading = true;
        const {
          $axios,
          $config,
          $cookies,
          $router,
          $store
        } = this;
        const {
          data,
          status
        } = await $axios.post($config.AUTH_API_URL + '/Login', payload);

        if (data.Success) {
          if ('Token' in data && !!data.Token) {
            const {
              Token,
              RefreshToken
            } = data;
            $cookies.set('Token', Token);
            $cookies.set('RefreshToken', RefreshToken);
            $router.push(this.localeRoute('/'));
          }

          if ('RequiredSecurityVerification' in data && data.RequiredSecurityVerification) {
            const {
              RequiredSecurityVerification,
              SecurityVerificationToken
            } = data;

            if (RequiredSecurityVerification === true) {
              $store.commit('auth/setVerficationData', {
                SecurityVerificationToken,
                status: true,
                redirectURI: '/'
              });
              $router.push(this.localeRoute('/security-verification'));
            }
          }
        } else {
          this.showError = true;
          this.errorMsg = data.Message;
          this.isLoginLoading = false;
        }
      } catch (e) {
        if (e.response) {
          const {
            data
          } = e.response;
          this.showError = true;
          this.errorMsg = data.Message;
        } else {
          console.error(e);
        }
      } finally {
        this.isLoginLoading = false;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "23fbadcc"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoginFormHeader: __webpack_require__(742).default,LoginFormContent: __webpack_require__(1002).default,LoginFormFooter: __webpack_require__(743).default,Index: __webpack_require__(648).default})


/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login/Index.vue?vue&type=template&id=31318a41&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"margin":"50px 0"}},[_c('a-row',{attrs:{"type":"flex","justify":"center","align":"middle"}},[_c('a-col',{attrs:{"xs":!_vm.isMobile ? 20 : 24,"md":8}},[_c('a-card',{staticClass:"card-box-shadow border-none",attrs:{"bordered":false}},[_vm._t("auth-card-header"),_vm._v(" "),_c('div',{staticClass:"my-20"},[_vm._t("auth-card-feedback")],2),_vm._v(" "),_vm._t("auth-card-content"),_vm._v(" "),_vm._t("auth-card-actions")],2)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Login/Index.vue?vue&type=template&id=31318a41&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login/Index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Indexvue_type_script_lang_js_ = ({
  layout: 'login',
  data: () => ({
    isMobile: null
  }),

  mounted() {
    this.isMobile = window.innerWidth < 1000;
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 1000;
    });
  }

});
// CONCATENATED MODULE: ./components/Login/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Login_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Login/Index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Login_Indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d9026eb8"
  
)

/* harmony default export */ var Index = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    /* eslint-disable */
    return {
      emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      passwordRegex: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/
    };
  },

  methods: {
    EmailValidator(rule, value, callback) {
      if (value === '') {
        callback(new Error('Please enter your E-mail'));
      } else if (!this.emailRegex.test(value.toString().toLowerCase())) {
        callback(new Error('Please Enter a Valid Email Address'));
      }

      callback();
    },

    PasswordValidator(rule, value, callback) {
      if (value === '') {
        callback(new Error('Please Enter Your Password'));
      } else if (!this.passwordRegex.test(value.toString())) {
        callback(new Error('Password must be at least 8 characters with 1 upper case letter, 1 lower case letter and 1 number.'));
      } else {
        callback();
      }
    },

    PasswordValidatorEmail(rule, value, callback) {
      if (value === '') {
        callback(new Error('Please Enter Your Password'));
      } else if (!this.passwordRegex.test(value.toString())) {
        callback(new Error('Password must be at least 8 characters with 1 upper case letter, 1 lower case letter and 1 number.'));
      } else {
        if (this.signUpEmail.confirmPassword !== '') {
          this.$refs.signUpEmailFormRef.validateField('confirmPassword');
        }

        callback();
      }
    },

    PasswordValidatorMobile(rule, value, callback) {
      if (value === '') {
        callback(new Error('Please Enter Your Password'));
      } else if (!this.passwordRegex.test(value.toString())) {
        callback(new Error('Password must be at least 8 characters with 1 upper case letter, 1 lower case letter and 1 number.'));
      } else {
        if (this.signUpMobile.confirmPassword !== '') {
          this.$refs.signUpMobileFormRef.validateField('confirmPassword');
        }

        callback();
      }
    },

    confirmPasswordValidatorEmail(rule, value, callback) {
      if (value === '') {
        callback(new Error('Please Re-Enter Your Password'));
      } else if (value !== this.signUpEmail.Password) {
        callback(new Error('Passwords do not match'));
      } else {
        callback();
      }
    },

    confirmPasswordValidatorMobile(rule, value, callback) {
      if (value === '') {
        callback(new Error('Please Re-Enter Your Password'));
      } else if (value !== this.signUpMobile.Password) {
        callback(new Error('Passwords do not match'));
      } else {
        callback();
      }
    },

    ResetPasswordValidator(rule, value, callback) {
      if (value === '') {
        callback(new Error('Please Enter Your Password'));
      } else if (!this.passwordRegex.test(value.toString())) {
        callback(new Error('Password must be at least 8 characters with 1 upper case letter, 1 lower case letter and 1 number.'));
      } else {
        if (this.resetPasswords.ConfirmPassword !== '') {
          this.$refs.resetPasswordsRef.validateField('ConfirmPassword');
        }

        callback();
      }
    },

    ConfirmResetPasswordValidator(rule, value, callback) {
      if (value === '') {
        callback(new Error('Please Re-Enter Your Password'));
      } else if (value !== this.resetPasswords.NewPassword) {
        callback(new Error('Passwords do not match'));
      } else {
        callback();
      }
    },

    DocumentTypeValidator(rule, value, callback) {
      if (value === '' || value === null || !value) {
        callback(new Error('Document Type is required'));
      } else {
        callback();
      }
    }

  }
});

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(802);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("d7920db0", content, true, context)
};

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(805);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0bf4b584", content, true, context)
};

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login/LoginFormHeader.vue?vue&type=template&id=c8d63044&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-center"},[_vm._ssrNode("<h2 class=\"Roboto-Medium\" data-v-c8d63044>"+_vm._ssrEscape(_vm._s(_vm.$t('login_text')))+"</h2> <p class=\"login-card-subtitle Roboto-Regular\" data-v-c8d63044>"+_vm._ssrEscape(_vm._s(_vm.$t('login_text_info')))+"</p> <h4 class=\"cointral-url Roboto-Regular\" data-v-c8d63044><span class=\"cointral-url-protocol\" data-v-c8d63044>https://</span>www.cointral.com\n  </h4>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Login/LoginFormHeader.vue?vue&type=template&id=c8d63044&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login/LoginFormHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LoginFormHeadervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Login/LoginFormHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var Login_LoginFormHeadervue_type_script_lang_js_ = (LoginFormHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Login/LoginFormHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(801)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Login_LoginFormHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c8d63044",
  "2351000c"
  
)

/* harmony default export */ var LoginFormHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login/LoginFormFooter.vue?vue&type=template&id=77ba5721&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login-form-footer d-flex w-100 flex-wrap justify-content-between"},[(_vm.showForgotPassword)?_c('Nuxt-Link',{staticClass:"flex-grow link",attrs:{"to":_vm.localePath('/login/reset-password')}},[_c('p',{staticClass:"login-bottom-links Roboto-Regular"},[_vm._v("\n      "+_vm._s(_vm.$t('login_text_forgot_password'))+"\n    ")])]):_vm._e(),_vm._ssrNode(" "+((!_vm.showForgotPassword)?("<span class=\"flex-grow\" data-v-77ba5721></span>"):"<!---->")+" "),_c('Nuxt-Link',{attrs:{"to":_vm.localePath('/signup')}},[_c('p',{staticClass:"pr-2 login-bottom-links Roboto-Regular"},[_vm._v("\n      "+_vm._s(_vm.$t('login_text_register'))+"\n    ")])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Login/LoginFormFooter.vue?vue&type=template&id=77ba5721&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login/LoginFormFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LoginFormFootervue_type_script_lang_js_ = ({
  props: {
    showForgotPassword: {
      type: Boolean,
      default: true
    }
  }
});
// CONCATENATED MODULE: ./components/Login/LoginFormFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var Login_LoginFormFootervue_type_script_lang_js_ = (LoginFormFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Login/LoginFormFooter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(804)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Login_LoginFormFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "77ba5721",
  "021e9c1a"
  
)

/* harmony default export */ var LoginFormFooter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFormHeader_vue_vue_type_style_index_0_id_c8d63044_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(698);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFormHeader_vue_vue_type_style_index_0_id_c8d63044_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFormHeader_vue_vue_type_style_index_0_id_c8d63044_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFormHeader_vue_vue_type_style_index_0_id_c8d63044_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFormHeader_vue_vue_type_style_index_0_id_c8d63044_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFormHeader_vue_vue_type_style_index_0_id_c8d63044_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".login-card-subtitle[data-v-c8d63044]{color:#9aa0ac}.cointral-url[data-v-c8d63044]{margin:auto;width:70%;padding:10px 8px;font-weight:600;border:1px solid #f5f5f5;border-radius:18px}.cointral-url .cointral-url-protocol[data-v-c8d63044]{color:#1dc077}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1193);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("56ee7271", content, true, context)
};

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFormFooter_vue_vue_type_style_index_0_id_77ba5721_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(699);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFormFooter_vue_vue_type_style_index_0_id_77ba5721_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFormFooter_vue_vue_type_style_index_0_id_77ba5721_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFormFooter_vue_vue_type_style_index_0_id_77ba5721_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFormFooter_vue_vue_type_style_index_0_id_77ba5721_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginFormFooter_vue_vue_type_style_index_0_id_77ba5721_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 805:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".login-form-footer[data-v-77ba5721]{padding:0 24px}.login-bottom-links[data-v-77ba5721]{color:var(--login-bottom-links-color)}.link[data-v-77ba5721]{text-decoration:underline}", ""]);
// Exports
module.exports = exports;


/***/ })

};;
//# sourceMappingURL=index.js.map