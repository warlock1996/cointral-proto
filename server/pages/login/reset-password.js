exports.ids = [37];
exports.modules = {

/***/ 1003:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login/ResetPasswordContent.vue?vue&type=template&id=5aaac100&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-card',{staticClass:"border-none",attrs:{"bordered":false,"tabList":_vm.tabList,"active-tab-key":_vm.activeKey},on:{"tabChange":function (key) { return (_vm.activeKey = key); }},scopedSlots:_vm._u([{key:"titleSlot",fn:function(item){return _c('span',{class:{
      'login-tab-title-active': item.key === _vm.activeKey,
      'login-tab-title-inactive': item.key !== _vm.activeKey,
    }},[_vm._v("\n    "+_vm._s(item.key)+"\n  ")])}}])},[_vm._v(" "),(_vm.activeKey === 'Email')?_c('div',[_c('a-form-model',{attrs:{"layout":"vertical","model":_vm.resetPassword,"rules":_vm.resetPasswordRules},on:{"submit":function($event){$event.preventDefault();return _vm.emitResetPassword($event)}}},[_c('a-form-model-item',{attrs:{"label":_vm.$t('login_text_email_info'),"has-feedback":"","prop":"Email"}},[_c('a-input',{staticClass:"Roboto-Regular",attrs:{"type":"email","size":"large"},model:{value:(_vm.resetPassword.Email),callback:function ($$v) {_vm.$set(_vm.resetPassword, "Email", $$v)},expression:"resetPassword.Email"}})],1),_vm._v(" "),_c('a-form-model-item',[_c('a-button',{staticClass:"login-button border-none Roboto-Medium",attrs:{"loading":_vm.isResetPasswordLoading,"disabled":!_vm.emailRegex.test(_vm.resetPassword.Email),"type":"primary","size":"large","block":""},on:{"click":_vm.emitResetPassword}},[_vm._v(_vm._s(_vm.$t('login_text_reset_password')))])],1)],1)],1):_vm._e(),_vm._v(" "),(_vm.activeKey === 'Mobile')?_c('div',[_c('a-form-model',{attrs:{"layout":"vertical"},on:{"submit":function($event){$event.preventDefault();return _vm.emitResetPassword($event)}}},[_c('a-form-model-item',{attrs:{"label":_vm.$t('login_text_phone_info')}},[_c('vue-tel-input',{class:{ invalidPhoneNo: !_vm.isValidPhoneNo },attrs:{"inputClasses":"ant-input ant-input-lg","dynamicPlaceholder":true},on:{"validate":_vm.validateMobileNumber},model:{value:(_vm.resetPassword.PhoneNumber),callback:function ($$v) {_vm.$set(_vm.resetPassword, "PhoneNumber", $$v)},expression:"resetPassword.PhoneNumber"}}),_vm._v(" "),(!_vm.isValidPhoneNo)?_c('span',{style:({ color: 'red' })},[_vm._v("\n          "+_vm._s(_vm.$t('login_text_invalid_phone'))+"\n        ")]):_vm._e()],1),_vm._v(" "),_c('a-form-model-item',[_c('a-button',{staticClass:"login-button border-none Roboto-Medium",attrs:{"loading":_vm.isResetPasswordLoading,"disabled":!_vm.isValidPhoneNo,"type":"primary","size":"large","block":""},on:{"click":_vm.emitResetPassword}},[_vm._v(_vm._s(_vm.$t('login_text_reset_password')))])],1)],1)],1):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Login/ResetPasswordContent.vue?vue&type=template&id=5aaac100&scoped=true&

// EXTERNAL MODULE: external "vue-tel-input"
var external_vue_tel_input_ = __webpack_require__(134);

// EXTERNAL MODULE: ./Mixins/authMixin.js
var authMixin = __webpack_require__(656);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login/ResetPasswordContent.vue?vue&type=script&lang=js&
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


/* harmony default export */ var ResetPasswordContentvue_type_script_lang_js_ = ({
  // loads validator and auth utils
  mixins: [authMixin["a" /* default */]],
  props: {
    isResetPasswordLoading: {
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
      resetPassword: {
        Email: '',
        PhoneNumber: '',
        AreaCode: ''
      },
      resetPasswordRules: {
        Email: [{
          validator: this.EmailValidator,
          trigger: 'change'
        }]
      },
      isValidPhoneNo: false
    };
  },

  methods: {
    emitResetPassword() {
      const {
        Email,
        PhoneNumber,
        AreaCode
      } = this.resetPassword;

      if (this.activeKey === 'Email') {
        this.$emit('resetPassword', {
          Email
        });
      } else {
        let _PhoneNumber = PhoneNumber.slice(1).replace(AreaCode, '').split(' ').join('');

        this.$emit('resetPassword', {
          PhoneNumber: _PhoneNumber,
          AreaCode
        });
      }
    },

    validateMobileNumber(payload) {
      this.isValidPhoneNo = payload.isValid;
      this.resetPassword.AreaCode = payload.country.dialCode;
    }

  }
});
// CONCATENATED MODULE: ./components/Login/ResetPasswordContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var Login_ResetPasswordContentvue_type_script_lang_js_ = (ResetPasswordContentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Login/ResetPasswordContent.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1259)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Login_ResetPasswordContentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5aaac100",
  "588561ad"
  
)

/* harmony default export */ var ResetPasswordContent = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordContent_vue_vue_type_style_index_0_id_5aaac100_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(857);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordContent_vue_vue_type_style_index_0_id_5aaac100_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordContent_vue_vue_type_style_index_0_id_5aaac100_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordContent_vue_vue_type_style_index_0_id_5aaac100_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordContent_vue_vue_type_style_index_0_id_5aaac100_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordContent_vue_vue_type_style_index_0_id_5aaac100_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1260:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".login-button[data-v-5aaac100]{background-color:var(--login-button-bg-color);color:var(--login-button-text-color)}.login-tab-title-inactive[data-v-5aaac100]{color:var(--login-tab-title-inactive-color)}.login-tab-title-active[data-v-5aaac100]{color:var(--login-tab-title-active-color)}.invalidPhoneNo.vue-tel-input[data-v-5aaac100]{border:1px solid red!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/reset-password.vue?vue&type=template&id=e3d5ded8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Index',[_c('template',{slot:"auth-card-header"},[_c('h2',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.$t('reset_password')))])]),_vm._v(" "),_c('template',{slot:"auth-card-feedback"},[(_vm.showError)?_c('a-alert',{attrs:{"message":_vm.$t('warning_title'),"description":_vm.errorMsg,"type":"warning","closable":""},on:{"close":function (e) { return (_vm.showError = false); }}}):_vm._e()],1),_vm._v(" "),_c('template',{slot:"auth-card-content"},[_c('ResetPasswordContent',{attrs:{"isResetPasswordLoading":_vm.isResetPasswordLoading},on:{"resetPassword":_vm.resetPassword}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/reset-password.vue?vue&type=template&id=e3d5ded8&scoped=true&

// EXTERNAL MODULE: ./components/Login/Index.vue + 4 modules
var Index = __webpack_require__(648);

// EXTERNAL MODULE: ./components/Login/ResetPasswordContent.vue + 4 modules
var ResetPasswordContent = __webpack_require__(1003);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/reset-password.vue?vue&type=script&lang=js&
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


/* harmony default export */ var reset_passwordvue_type_script_lang_js_ = ({
  middleware: ['public'],
  layout: 'login',
  components: {
    Index: Index["default"],
    ResetPasswordContent: ResetPasswordContent["default"]
  },

  head() {
    return {
      title: 'Parola Sıfırla | Cointral.com'
    };
  },

  data() {
    return {
      isResetPasswordLoading: false,
      showError: false,
      errorMsg: ''
    };
  },

  methods: {
    async resetPassword(payload) {
      try {
        this.isResetPasswordLoading = true;
        const {
          $axios,
          $cookies,
          $config: {
            FINANCE_API_URL
          },
          $store,
          $router
        } = this;
        const {
          data: {
            Success,
            Message,
            RequiredSecurityVerification,
            ResetVerificationToken
          }
        } = await $axios.post(FINANCE_API_URL + '/ResetPassword', payload);

        if (Success) {
          if (RequiredSecurityVerification) {
            $store.commit('auth/setVerficationData', {
              status: true,
              redirectURI: '/login',
              SecurityVerificationToken: ResetVerificationToken
            });
            $router.push(this.localeRoute('/security-verification'));
          }
        } else {
          this.showError = true;
          this.errorMsg = Message;
        }
      } catch (e) {
        if (e.response) {
          const {
            Message
          } = response.data;
          this.showError = true;
          this.errorMsg = Message;
        }

        console.error(e);
      } finally {
        this.isResetPasswordLoading = false;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/reset-password.vue?vue&type=script&lang=js&
 /* harmony default export */ var login_reset_passwordvue_type_script_lang_js_ = (reset_passwordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/reset-password.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  login_reset_passwordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e3d5ded8",
  "6f712a4f"
  
)

/* harmony default export */ var reset_password = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ResetPasswordContent: __webpack_require__(1003).default,Index: __webpack_require__(648).default})


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

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1260);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("a9791300", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=reset-password.js.map