exports.ids = [61];
exports.modules = {

/***/ 1232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c34dc42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(847);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c34dc42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c34dc42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c34dc42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c34dc42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4c34dc42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1233:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".p2p-history-title[data-v-4c34dc42]{text-align:left;font:normal normal normal 32px Roboto;letter-spacing:0;color:#1c2640;opacity:1;margin-top:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/p2p-history/index.vue?vue&type=template&id=4c34dc42&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Roboto-Regular"},[_c('a-col',{attrs:{"offset":"2"}},[_c('div',{staticClass:"p2p-history-title"},[_vm._v("Tüm P2P İşlem Geçmişi")])]),_vm._ssrNode(" "),_c('a-col',{staticClass:"Roboto-Bold",staticStyle:{"margin-top":"20px"},attrs:{"offset":"2"}},[_c('a-table',{staticClass:"components-table-demo-nested",attrs:{"columns":_vm.columns,"data-source":_vm.data},scopedSlots:_vm._u([{key:"Type",fn:function(Type, record){return _c('span',{style:(Type === 'BUY' ? 'color: #5CB56A' : 'color: #FD0D1B')},[_vm._v(_vm._s(Type === 'BUY' ? 'Alıcı' : 'Satıcı'))])}}])},[_vm._v(" "),[_c('a-table',{attrs:{"data-source":_vm.record.OTC_RequestList,"pagination":false}},[_c('a-table-column',{attrs:{"title":"Alıcı / Satıcı","data-index":"P2PRequestUsername"}}),_vm._v(" "),_c('a-table-column',{attrs:{"title":"Miktar","data-index":"Amount"}}),_vm._v(" "),_c('a-table-column',{attrs:{"title":"Toplam","data-index":"FiatPrice"}}),_vm._v(" "),_c('a-table-column',{attrs:{"title":"Tarih","data-index":"UpdatedOn"}}),_vm._v(" "),_c('a-table-column',{attrs:{"title":"Durum","data-index":"Status"}}),_vm._v(" "),_c('a-table-column',{key:"operation",attrs:{"title":"Action","dataIndex":"operation","scopedSlots":{ customRender: 'operation' }}})],1)]],2)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/p2p-history/index.vue?vue&type=template&id=4c34dc42&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/p2p-history/index.vue?vue&type=script&lang=js&
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
const columns = [{
  title: 'Satıcı/Alıcı',
  dataIndex: 'Type',
  scopedSlots: {
    customRender: 'Type'
  }
}, {
  title: 'Miktar',
  dataIndex: 'AssetAmount',
  key: 'AssetAmount'
}, {
  title: 'Fiyat',
  dataIndex: 'Asset',
  key: 'Asset'
}, {
  title: 'Kullanılabilir',
  dataIndex: 'Available',
  key: 'Available'
}, {
  title: 'Durum',
  dataIndex: 'Status',
  key: 'Status'
}, {
  title: 'Talem Sayısı',
  dataIndex: 'OpenRequestNumber',
  key: 'OpenRequestNumber'
}, {
  title: 'İlan Numarası',
  dataIndex: 'OTC_OrderUniqueID',
  key: 'OTC_OrderUniqueID'
}];
/* harmony default export */ var p2p_historyvue_type_script_lang_js_ = ({
  name: 'History',

  head() {
    return {
      title: 'P2P İşlem Geçmişi | Cointral.com'
    };
  },

  data: () => ({
    data: null,
    columns,
    innerData: null
  }),

  async mounted() {
    this.$router.push(this.localeRoute('/soon'));
    await this.getP2POrders();
  },

  methods: {
    async getP2POrders() {
      const {
        $axios,
        $config,
        $cookies
      } = this;
      let authHeader = {
        Authorization: 'Bearer ' + $cookies.get('Token')
      };
      const response = await $axios.get($config.FINANCE_API_URL + '/GetP2PMyOpenOrders', {
        headers: authHeader
      });

      if (response.data.Success) {
        const tempData = [];

        for (let i = 0; i < response.data.OpenOrders.length; i++) {
          if (response.data.OpenOrders[i].Status.toLowerCase() === 'closed' || response.data.OpenOrders[i].Status.toLowerCase() === 'canceled') {
            tempData.push(response.data.OpenOrders[i]);
          }
        }

        this.data = tempData;
      }
    } // async editP2POrder(orderUniqueId) {
    //   const { $axios, $config, $cookies } = this
    //   let authHeader = { Authorization: 'Bearer ' + $cookies.get('Token') }
    //   const response = await $axios.post(
    //     $config.FINANCE_API_URL + '/EditP2POrder', {
    //       'Activate': true,
    //       'OrderUniqueId': orderUniqueId
    //     }, { headers: authHeader })
    //   if (response.data.Success) {
    //     
    //   }
    // }


  }
});
// CONCATENATED MODULE: ./pages/p2p-history/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_p2p_historyvue_type_script_lang_js_ = (p2p_historyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/p2p-history/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1232)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_p2p_historyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4c34dc42",
  "7e501058"
  
)

/* harmony default export */ var p2p_history = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1233);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("071d2b9d", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map