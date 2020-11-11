exports.ids = [67];
exports.modules = {

/***/ 1006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/StatusBar.vue?vue&type=template&id=cb497f00&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"status-bar",class:("status-bar-" + _vm.getTheme)},[_vm._ssrNode("<div class=\"container status-bar-container\">","</div>",[_c('a-row',{staticClass:"h-100"},[_c('a-col',{staticClass:"status-col h-100",attrs:{"span":5}},[_c('a-row',{attrs:{"type":"flex","align":"middle"}},[_c('h2',{staticClass:"currency-title Roboto-Medium"},[_vm._v("\n            "+_vm._s(_vm.getSymbolData.BaseAsset)+"\n          ")]),_vm._v(" "),_c('span',{staticClass:"currency-subtitle Roboto-Medium"},[_vm._v("/ "+_vm._s(_vm.getSymbolData.QuatoAsset))])]),_vm._v(" "),_c('div',[_c('span',{staticClass:"currency-text Roboto-Regular"},[_vm._v(_vm._s(_vm.getSymbolData.BaseAssetName))])])],1),_vm._v(" "),_c('a-col',{staticClass:"statistics h-100",attrs:{"span":14}},[_c('a-row',{staticClass:"h-100",attrs:{"gutter":20}},[_c('a-col',{staticClass:"statistics-col",attrs:{"span":4}},[_c('span',{staticClass:"statistics-label Roboto-Medium"},[_vm._v(_vm._s(_vm.$t('exchange_last_price')))]),_vm._v(" "),_c('span',{staticClass:"statistics-value Roboto-Medium"},[_vm._v(_vm._s(_vm.formatPrice(_vm.statistics.last)))])]),_vm._v(" "),_c('a-col',{staticClass:"statistics-col",attrs:{"span":4}},[_c('span',{staticClass:"statistics-label Roboto-Medium"},[_vm._v(_vm._s(_vm.$t('exchange_24h_change')))]),_vm._v(" "),_c('div',{staticClass:"statistics-value",class:("statistics-value-" + (_vm.statistics.P < 0 ? 'danger' : 'success'))},[_c('span',{staticStyle:{"padding-right":"8px"}},[_vm._v(_vm._s(_vm.formatPrice(_vm.statistics.period)))]),_vm._v(" "),(_vm.statistics.P)?_c('span',{staticClass:"statistics-small Roboto-Medium"},[_vm._v(_vm._s(_vm.statistics.P ? _vm.format(_vm.statistics.P) : '')+" %")]):_vm._e()])]),_vm._v(" "),_c('a-col',{staticClass:"statistics-col",attrs:{"span":4}},[_c('span',{staticClass:"statistics-label Roboto-Medium"},[_vm._v(_vm._s(_vm.$t('exchange_24h_high')))]),_vm._v(" "),_c('span',{staticClass:"statistics-value Roboto-Medium"},[_vm._v(_vm._s(_vm.formatPrice(_vm.statistics.high)))])]),_vm._v(" "),_c('a-col',{staticClass:"statistics-col",attrs:{"span":4}},[_c('span',{staticClass:"statistics-label Roboto-Medium"},[_vm._v(_vm._s(_vm.$t('exchange_24h_low')))]),_vm._v(" "),_c('span',{staticClass:"statistics-value Roboto-Medium"},[_vm._v(_vm._s(_vm.formatPrice(_vm.statistics.low)))])]),_vm._v(" "),_c('a-col',{staticClass:"statistics-col",attrs:{"span":7}},[_c('span',{staticClass:"statistics-label Roboto-Medium"},[_vm._v(_vm._s(_vm.$t('exchange_24h_volume'))+"\n              "),(_vm.getSymbolData.QuatoAsset !== 'TRY')?_c('a-tooltip',[_c('a-icon',{attrs:{"type":"info-circle"}}),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v(_vm._s(_vm.$t('exchange_text_status_volume_info')))])],1):_vm._e(),_vm._v(" "),(_vm.getSymbolData.QuatoAsset == 'TRY')?_c('a-tooltip',[_c('a-icon',{attrs:{"type":"info-circle"}}),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v(_vm._s(_vm.$t('exchange_text_try_status_volume_info')))])],1):_vm._e()],1),_vm._v(" "),_c('span',{staticClass:"statistics-value Roboto-Medium"},[_vm._v(_vm._s(_vm.statistics.volume &&
                ((_vm.formatTotal(_vm.statistics.volume)) + " " + (_vm.getSymbolData.QuatoAsset)))+"\n            ")])])],1)],1),_vm._v(" "),_c('a-col',{staticClass:"h-100",attrs:{"span":5}},[_c('a-row',{staticClass:"h-100",attrs:{"type":"flex","justify":"end","align":"middle","gutter":10}},[_c('a-col',{staticClass:"d-flex"},[_c('SunIcon',{staticClass:"status-bar-theme-icon",staticStyle:{"width":"17px"}})],1),_vm._v(" "),_c('a-col',{staticClass:"d-flex"},[_c('a-switch',{attrs:{"size":"small"},model:{value:(_vm.theme),callback:function ($$v) {_vm.theme=$$v},expression:"theme"}})],1),_vm._v(" "),_c('a-col',{staticClass:"d-flex"},[_c('NightIcon',{staticClass:"status-bar-theme-icon",staticStyle:{"width":"14px"}})],1)],1)],1)],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/StatusBar.vue?vue&type=template&id=cb497f00&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./assets/icons/sun-icon.svg?inline
var sun_iconinline = __webpack_require__(984);
var sun_iconinline_default = /*#__PURE__*/__webpack_require__.n(sun_iconinline);

// EXTERNAL MODULE: ./assets/icons/night-icon.svg?inline
var night_iconinline = __webpack_require__(985);
var night_iconinline_default = /*#__PURE__*/__webpack_require__.n(night_iconinline);

// EXTERNAL MODULE: ./Mixins/formatter.js
var formatter = __webpack_require__(691);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/StatusBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var StatusBarvue_type_script_lang_js_ = ({
  mixins: [formatter["a" /* default */]],
  components: {
    SunIcon: sun_iconinline_default.a,
    NightIcon: night_iconinline_default.a
  },
  props: {
    statistics: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      theme: false
    };
  },

  computed: {
    get24HourChangeState() {
      return this.statistics.length && this.statistics.P[0] !== '-' || '';
    },

    ...Object(external_vuex_["mapGetters"])({
      getSymbolData: 'symbol/getSymbolData',
      getTheme: 'common/getTheme'
    })
  },
  watch: {
    theme(v) {
      if (v) {
        this.$store.commit('common/updateTheme', 'dark');
        this.$cookies.set('theme', 'dark');
      } else {
        this.$store.commit('common/updateTheme', 'light');
        this.$cookies.set('theme', 'light');
      }
    }

  },

  created() {
    this.theme = this.getTheme === 'dark' && true;
  },

  methods: {
    format(v) {
      if (!v) return '';
      return new Intl.NumberFormat().format(Number(v).toFixed(2));
    }

  }
});
// CONCATENATED MODULE: ./components/Exchange/StatusBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Exchange_StatusBarvue_type_script_lang_js_ = (StatusBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/StatusBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1353)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Exchange_StatusBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "97baf9da"
  
)

/* harmony default export */ var StatusBar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1007:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/Chart.vue?vue&type=template&id=6cc53973&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"chart-container"},[_vm._ssrNode("<iframe title frameborder=\"0\" width=\"100%\" height=\"100%\""+(_vm._ssrAttr("src",_vm.getUrl))+"></iframe>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/Chart.vue?vue&type=template&id=6cc53973&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/Chart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Chartvue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapGetters"])({
      theme: 'common/getTheme',
      getSymbolData: 'symbol/getSymbolData'
    }),

    getParam() {
      return this.getSymbolData.QuatoAsset === 'TRY' ? 'BITFINEX:' + this.getSymbolData.Symbol : 'BINANCE:' + this.getSymbolData.Symbol;
    },

    getUrl() {
      return `https://s.tradingview.com/widgetembed/?frameElementId=tradingview_5d94b&symbol=${this.getParam}&interval=60&hidelegend=1&symboledit=0&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&theme=${this.theme}&style=1&timezone=auto&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=tr&utm_source=www.cointral.com&utm_medium=widget&utm_campaign=chart`;
    }

  }
});
// CONCATENATED MODULE: ./components/Exchange/Chart.vue?vue&type=script&lang=js&
 /* harmony default export */ var Exchange_Chartvue_type_script_lang_js_ = (Chartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/Chart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1355)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Exchange_Chartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6df9dab0"
  
)

/* harmony default export */ var Chart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/LastTransactions.vue?vue&type=template&id=702a733d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"last-transactions h-100",class:("last-transactions-" + _vm.getTheme)},[_c('a-card',{staticClass:"h-100"},[_c('span',{staticClass:"last-transactions-title Roboto-Regular",attrs:{"slot":"title"},slot:"title"},[_vm._v(_vm._s(_vm.$t('exchange_trade_history')))]),_vm._v(" "),_c('div',{staticClass:"exchange-table"},[_c('div',{staticClass:"exchange-table__head"},[_c('div',{staticClass:"exchange-table__head-item Roboto-Medium"},[_vm._v("\n          "+_vm._s(_vm.$t('exchange_date'))+"\n        ")]),_vm._v(" "),_c('div',{staticClass:"exchange-table__head-item Roboto-Medium"},[_vm._v("\n          "+_vm._s(_vm.$t('exchange_amount'))+" ("+_vm._s(_vm.getSymbolData.BaseAsset)+")\n        ")]),_vm._v(" "),_c('div',{staticClass:"exchange-table__head-item Roboto-Medium"},[_vm._v("\n          "+_vm._s(_vm.$t('exchange_price'))+"\n        ")])]),_vm._v(" "),_c('div',{staticClass:"table-overlay"},[_c('table',{staticClass:"Roboto-Medium"},[_c('tbody',_vm._l((_vm.LastTransactionsData),function(item,index){return _c('tr',{key:index},[_c('td',[_vm._v("\n                "+_vm._s(_vm.computeTime(
                    item.Time,
                    _vm.getSymbolData.QuatoAsset == 'TRY' ? true : false
                  ))+"\n              ")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.formatAmount(item.Qty)))]),_vm._v(" "),_c('td',{class:item.IsBuyerMaker ? 'text-success' : 'text-danger'},[_vm._v("\n                "+_vm._s(_vm.formatPrice(item.Price))+"\n              ")])])}),0)])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/LastTransactions.vue?vue&type=template&id=702a733d&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./Mixins/formatter.js
var formatter = __webpack_require__(691);

// EXTERNAL MODULE: ./Mixins/dateFormatMixin.js
var dateFormatMixin = __webpack_require__(986);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(42);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "ant-design-vue/lib/back-top"
var back_top_ = __webpack_require__(140);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/LastTransactions.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var LastTransactionsvue_type_script_lang_js_ = ({
  mixins: [formatter["a" /* default */], dateFormatMixin["a" /* default */]],
  props: {
    LastTransactionsData: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      list: []
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      getTheme: 'common/getTheme'
    })
  },
  methods: {
    computeTime(v, b) {
      if (b) {
        v = new Date(v).getTime();
        return external_moment_default()(new Date(Math.trunc(v * 1000))).format('HH:mm:ss');
      } else {
        v = new Date(v).getTime();
        return external_moment_default()(new Date(Math.round(v))).format('HH:mm:ss');
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Exchange/LastTransactions.vue?vue&type=script&lang=js&
 /* harmony default export */ var Exchange_LastTransactionsvue_type_script_lang_js_ = (LastTransactionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/LastTransactions.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1357)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Exchange_LastTransactionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "40561ca9"
  
)

/* harmony default export */ var LastTransactions = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1009:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/Favorites.vue?vue&type=template&id=925175e6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-card',{staticClass:"mb-15 favorites",class:("favorites-" + _vm.getTheme)},[_c('div',{staticClass:"tabs"},[_c('div',{staticClass:"tab Roboto-Medium",class:_vm.isActive('F'),on:{"click":function($event){return _vm.setTab('F')}}},[_c('StarIcon')],1),_vm._v(" "),_c('div',{staticClass:"tab Roboto-Medium",class:_vm.isActive('BTC'),on:{"click":function($event){return _vm.setTab('BTC')}}},[_vm._v("\n      BTC\n    ")]),_vm._v(" "),_c('div',{staticClass:"tab Roboto-Medium",class:_vm.isActive('ETH'),on:{"click":function($event){return _vm.setTab('ETH')}}},[_vm._v("\n      ETH\n    ")]),_vm._v(" "),_c('div',{staticClass:"tab Roboto-Medium",class:_vm.isActive('USDT'),on:{"click":function($event){return _vm.setTab('USDT')}}},[_vm._v("\n      USDT\n    ")]),_vm._v(" "),_c('div',{staticClass:"tab Roboto-Medium",class:_vm.isActive('TRY'),on:{"click":function($event){return _vm.setTab('TRY')}}},[_vm._v("\n      TRY\n    ")]),_vm._v(" "),_c('div',{staticClass:"tab Roboto-Medium",class:_vm.isActive('ALL'),on:{"click":function($event){return _vm.setTab('ALL')}}},[_vm._v("\n      "+_vm._s(_vm.$t('text_all'))+"\n    ")])]),_vm._v(" "),_c('div',{staticClass:"search-box"},[_c('a-input-search',{staticClass:"no-focus-shadow",attrs:{"type":"text","placeholder":_vm.$t('placeholders_text_search')},on:{"input":_vm.onSearch},model:{value:(_vm.searchValue),callback:function ($$v) {_vm.searchValue=$$v},expression:"searchValue"}})],1),_vm._v(" "),_c('div',{staticClass:"exchange-table mt-15"},[_c('div',{staticClass:"exchange-table__head"},[_c('div',{staticClass:"exchange-table__head-item Roboto-Regular"},[_vm._v("\n        "+_vm._s(_vm.$t('exchange_pair'))+"\n      ")]),_vm._v(" "),_c('div',{staticClass:"exchange-table__head-item Roboto-Regular"},[_vm._v("\n        "+_vm._s(_vm.$t('exchange_price'))+"\n      ")]),_vm._v(" "),_c('div',{staticClass:"exchange-table__head-item Roboto-Regular clickable",on:{"click":function($event){return _vm.sortByChangePercentage()}}},[_vm._v("\n        "+_vm._s(_vm.$t('exchange_change'))+"\n      ")])]),_vm._v(" "),_c('div',{staticClass:"table-overlay"},[_c('table',{staticStyle:{"table-layout":"fixed"}},[_c('tbody',{staticClass:"Roboto-Medium"},_vm._l((_vm.tabFilteredSymbolList),function(item,index){return _c('tr',{key:index,staticClass:"cursor-pointer",on:{"click":function($event){return _vm.selectSymbol(item)}}},[_c('td',[_c('div',[(_vm.isLoggedIn)?_c('div',{staticClass:"c-pointer",on:{"click":function($event){$event.stopPropagation();return _vm.setFavSymbol(item, index, item.Favorite)}}},[(item.Favorite)?_c('StarIcon'):_c('StarOutlineIcon')],1):_vm._e(),_vm._v("\n                "+_vm._s(item.BaseAsset)+"/"+_vm._s(item.QuatoAsset)+"\n              ")])]),_vm._v(" "),_c('td',[_vm._v("\n              "+_vm._s(new Intl.NumberFormat('en', {
                  minimumFractionDigits: item.SymbolPriceDecimalLenght,
                }).format(item.LastPrice))+"\n            ")]),_vm._v(" "),_c('td',{class:("text-" + (String(item.ChangePercent24H)[0] == '-' ? 'danger' : 'success'))},[_vm._v("\n              %"+_vm._s(item.ChangePercent24H.toFixed(2))+"\n            ")])])}),0)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/Favorites.vue?vue&type=template&id=925175e6&

// EXTERNAL MODULE: external "fuse.js"
var external_fuse_js_ = __webpack_require__(137);
var external_fuse_js_default = /*#__PURE__*/__webpack_require__.n(external_fuse_js_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./assets/icons/star.svg?inline
var starinline = __webpack_require__(987);
var starinline_default = /*#__PURE__*/__webpack_require__.n(starinline);

// EXTERNAL MODULE: ./assets/icons/star-outline.svg?inline
var star_outlineinline = __webpack_require__(988);
var star_outlineinline_default = /*#__PURE__*/__webpack_require__.n(star_outlineinline);

// EXTERNAL MODULE: ./Mixins/formatter.js
var formatter = __webpack_require__(691);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/Favorites.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const defaultSearchOptions = {
  keys: ['BaseAsset', 'QuatoAsset']
};
/* harmony default export */ var Favoritesvue_type_script_lang_js_ = ({
  mixins: [formatter["a" /* default */]],
  components: {
    StarIcon: starinline_default.a,
    StarOutlineIcon: star_outlineinline_default.a
  },

  data() {
    return {
      tabs: ['F', 'ETH', 'BTC', 'USDT', 'TRY', 'ALL'],
      activeTab: 'ALL',
      tabSymbolList: [],
      tabFilteredSymbolList: [],
      searchValue: '',
      sortBy: ''
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      getTheme: 'common/getTheme',
      getSymbols: 'symbol/getSymbols'
    }),

    isLoggedIn() {
      return !!this.$cookies.get('Token');
    }

  },

  mounted() {
    const symbolTab = localStorage.getItem('symbolTab');

    if (!!symbolTab) {
      this.activeTab = symbolTab;
    }

    const symbolSearch = localStorage.getItem('symbolSearch');

    if (!!symbolSearch) {
      this.searchValue = symbolSearch;
    }

    this.setFilteredList();
  },

  watch: {
    activeTab(val) {
      this.setFilteredList();
      this.search(this.searchValue, {
        threshold: 0
      });
      localStorage.setItem('symbolTab', val);
    }

  },
  methods: {
    setTab(v) {
      this.activeTab = v;
    },

    isActive(v) {
      return v === this.activeTab && 'active';
    },

    onSearch(e) {
      localStorage.setItem('symbolSearch', e.target.value);
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.search(e.target.value, {
          threshold: 0
        });
      }, 300);
    },

    selectSymbol(item) {
      this.$store.dispatch('symbol/updateData', [item.BaseAsset, item.QuatoAsset]);
      this.$store.commit('transactions/updateActionPrice', item.LastPrice);
    },

    setFilteredList() {
      const {
        activeTab
      } = this;

      if (activeTab === 'ALL') {
        this.tabFilteredSymbolList = this.getSymbols;
        this.tabSymbolList = this.getSymbols;
        return;
      }

      if (activeTab === 'F') {
        const filtered = this.getSymbols.filter(s => s.Favorite);
        this.tabFilteredSymbolList = filtered;
        this.tabSymbolList = filtered;
        return;
      }

      const fuse = new external_fuse_js_default.a(this.getSymbols, { ...defaultSearchOptions,
        useExtendedSearch: true,
        threshold: 0
      });
      const result = fuse.search(`=${activeTab}`);
      const newData = this.getWithoutWrapList(result);
      this.tabSymbolList = newData;
      this.tabFilteredSymbolList = newData;
    },

    search(value = '', extraOptions) {
      if (!value.length) return this.tabFilteredSymbolList = this.tabSymbolList;
      const fuse = new external_fuse_js_default.a(this.tabSymbolList, { ...defaultSearchOptions,
        ...extraOptions
      });
      const result = fuse.search(`${value}`);
      const newData = this.getWithoutWrapList(result);
      this.tabFilteredSymbolList = newData;
    },

    getWithoutWrapList(result) {
      return result.map(v => v.item);
    },

    async setFavSymbol(item, index, favorite) {
      const {
        $axios,
        $store,
        $cookies,
        $config: {
          FINANCE_API_URL
        }
      } = this;
      let authHeaders = {
        Authorization: 'Bearer ' + $cookies.get('Token')
      };
      const response = await $axios.post(FINANCE_API_URL + '/ToggleFavoriteSymbol', {
        Symbol: item.Symbol
      }, {
        headers: authHeaders
      });

      if (response.data.Success) {
        item.Favorite = item.Favorite ? false : true;
        this.$set(this.tabFilteredSymbolList, index, item);
        const symbolsResponse = await $axios.get(FINANCE_API_URL + '/GetSymbols', {
          headers: authHeaders
        });

        if (symbolsResponse.data.Success) {
          $store.commit('symbol/updateList', symbolsResponse.data.SymbolList);
          this.setFilteredList();
        }
      }
    },

    sortByChangePercentage() {
      let compareFn;

      if (this.tabFilteredSymbolList[0].ChangePercent24H > this.tabFilteredSymbolList[1].ChangePercent24H) {
        compareFn = (a, b) => a.ChangePercent24H - b.ChangePercent24H;
      }

      if (this.tabFilteredSymbolList[0].ChangePercent24H < this.tabFilteredSymbolList[1].ChangePercent24H) {
        compareFn = (a, b) => b.ChangePercent24H - a.ChangePercent24H;
      }

      this.tabFilteredSymbolList = this.tabFilteredSymbolList.slice().sort(compareFn);
    }

  }
});
// CONCATENATED MODULE: ./components/Exchange/Favorites.vue?vue&type=script&lang=js&
 /* harmony default export */ var Exchange_Favoritesvue_type_script_lang_js_ = (Favoritesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/Favorites.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1359)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Exchange_Favoritesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "06df5ba9"
  
)

/* harmony default export */ var Favorites = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/Actions.vue?vue&type=template&id=193af3fd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"actions"},[_c('a-tabs',{attrs:{"type":"card","animated":false}},[_c('a-tab-pane',{key:"1",attrs:{"tab":"Limit"}},[_c('ActionTab',{attrs:{"UserBalance":_vm.UserBalance,"Type":"LIMIT"},on:{"tradeUpdate":function (payload) { return _vm.$emit('tradeUpdate', payload); }}})],1),_vm._v(" "),_c('a-tab-pane',{key:"2",attrs:{"tab":"Piyasa"}},[_c('ActionTab',{attrs:{"UserBalance":_vm.UserBalance,"Type":"MARKET","is-total-show":false},on:{"tradeUpdate":function (payload) { return _vm.$emit('tradeUpdate', payload); }}})],1),_vm._v(" "),_c('a-tab-pane',{key:"3",attrs:{"tab":"Stop-Limit"}},[_c('ActionTab',{attrs:{"UserBalance":_vm.UserBalance,"Type":"STOP-LIMIT","show-stop":true,"show-limit":false,"show-price":true},on:{"tradeUpdate":function (payload) { return _vm.$emit('tradeUpdate', payload); }}})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/Actions.vue?vue&type=template&id=193af3fd&

// EXTERNAL MODULE: ./components/Exchange/ActionTab.vue + 4 modules
var ActionTab = __webpack_require__(1013);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/Actions.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Actionsvue_type_script_lang_js_ = ({
  props: {
    UserBalance: {
      require: true,
      type: Object
    }
  },
  components: {
    ActionTab: ActionTab["default"]
  },
  methods: {}
});
// CONCATENATED MODULE: ./components/Exchange/Actions.vue?vue&type=script&lang=js&
 /* harmony default export */ var Exchange_Actionsvue_type_script_lang_js_ = (Actionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/Actions.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1365)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Exchange_Actionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b3688462"
  
)

/* harmony default export */ var Actions = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ActionTab: __webpack_require__(1013).default})


/***/ }),

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/StatusBarMobile.vue?vue&type=template&id=5bac1644&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"status-bar-mobile",class:("status-bar-mobile-" + _vm.getTheme),staticStyle:{"position":"relative"}},[_vm._ssrNode("<div class=\"container status-bar-mobile-container\">","</div>",[_c('a-row',{staticStyle:{"margin":"15px auto"},attrs:{"gutter":16,"type":"flex","align":"middle"}},[_c('a-col',{attrs:{"span":8}},[_c('div',{staticStyle:{"display":"flex","flex-direction":"column","align-items":"flex-start","justify-content":"center"}},[_c('a-dropdown',{on:{"click":function($event){_vm.symbolsDropDown = true}},model:{value:(_vm.symbolsDropDown),callback:function ($$v) {_vm.symbolsDropDown=$$v},expression:"symbolsDropDown"}},[_c('div',{staticClass:"currency-title"},[_vm._v("\n            "+_vm._s(_vm.getSymbolData.BaseAsset)+" /  "),_c('span',{staticClass:"currency-title"},[_vm._v("\n              "+_vm._s(_vm.getSymbolData.QuatoAsset)+"\n            ")]),_vm._v(" "),_c('a-icon',{attrs:{"type":"down"}})],1),_vm._v(" "),_c('SymbolsMobile',{style:({ width: _vm.overlayWidth, background: '#0C121E'}),attrs:{"slot":"overlay"},slot:"overlay"})],1),_vm._v(" "),_c('div',{staticClass:"currency-last-price"},[_vm._v("\n          "+_vm._s(_vm.formatPrice(_vm.statistics.last))+"\n        ")])],1)]),_vm._v(" "),_c('a-col',{staticStyle:{"text-align":"right"},attrs:{"span":16}},[_c('a-row',{attrs:{"gutter":8}},[_c('a-col',{attrs:{"span":12}},[_c('div',{staticClass:"statistics-label Roboto-Regular"},[_vm._v("24 Saatlik Değişim")])]),_vm._v(" "),_c('a-col',{attrs:{"span":12}},[_c('div',{staticClass:"statistics-value Roboto-Regular",class:("statistics-value-" + (_vm.get24HourChangeState ? 'success' : 'danger'))},[_vm._v(_vm._s(_vm.formatPrice(_vm.statistics.period)))])])],1),_vm._v(" "),_c('a-row',{attrs:{"gutter":8}},[_c('a-col',{attrs:{"span":12}},[_c('div',{staticClass:"statistics-label Roboto-Regular"},[_vm._v("24S En Yüksek")])]),_vm._v(" "),_c('a-col',{attrs:{"span":12}},[_c('div',{staticClass:"statistics-value Roboto-Regular"},[_vm._v(_vm._s(_vm.formatPrice(_vm.statistics.high)))])])],1),_vm._v(" "),_c('a-row',{attrs:{"gutter":8}},[_c('a-col',{attrs:{"span":12}},[_c('div',{staticClass:"statistics-label Roboto-Regular"},[_vm._v("24S En Düşük")])]),_vm._v(" "),_c('a-col',{attrs:{"span":12}},[_c('div',{staticClass:"statistics-value Roboto-Regular"},[_vm._v(_vm._s(_vm.formatPrice(_vm.statistics.low)))])])],1),_vm._v(" "),_c('a-row',{attrs:{"gutter":8}},[_c('a-col',{attrs:{"span":12}},[_c('div',{staticClass:"statistics-label Roboto-Regular"},[_vm._v("24S Hacim ("+_vm._s(_vm.getSymbolData.BaseAsset)+")")])]),_vm._v(" "),_c('a-col',{attrs:{"span":12}},[_c('div',{staticClass:"statistics-value Roboto-Regular"},[_vm._v(_vm._s(_vm.statistics.volume &&
            ("" + (_vm.format(_vm.statistics.volume)))))])])],1)],1)],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/StatusBarMobile.vue?vue&type=template&id=5bac1644&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./assets/icons/sun-icon.svg?inline
var sun_iconinline = __webpack_require__(984);
var sun_iconinline_default = /*#__PURE__*/__webpack_require__.n(sun_iconinline);

// EXTERNAL MODULE: ./assets/icons/night-icon.svg?inline
var night_iconinline = __webpack_require__(985);
var night_iconinline_default = /*#__PURE__*/__webpack_require__.n(night_iconinline);

// EXTERNAL MODULE: ./components/Exchange/ExchangeMobile/SymbolsMobile.vue + 4 modules
var SymbolsMobile = __webpack_require__(1016);

// EXTERNAL MODULE: ./Mixins/formatter.js
var formatter = __webpack_require__(691);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/StatusBarMobile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var StatusBarMobilevue_type_script_lang_js_ = ({
  mixins: [formatter["a" /* default */]],
  components: {
    SunIcon: sun_iconinline_default.a,
    NightIcon: night_iconinline_default.a,
    SymbolsMobile: SymbolsMobile["default"]
  },
  props: {
    statistics: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      theme: false,
      symbolsDropDown: false,
      overlayWidth: '100px'
    };
  },

  computed: {
    get24HourChangeState() {
      return this.statistics.length && this.statistics.P[0] !== '-' || '';
    },

    ...Object(external_vuex_["mapGetters"])({
      getSymbolData: 'symbol/getSymbolData',
      getTheme: 'common/getTheme'
    })
  },
  watch: {
    theme(v) {
      if (v) {
        this.$store.commit('common/updateTheme', 'dark');
        this.$cookies.set('theme', 'dark');
      } else {
        this.$store.commit('common/updateTheme', 'light');
        this.$cookies.set('theme', 'light');
      }
    }

  },

  created() {
    this.theme = this.getTheme === 'dark' && true;
    this.overlayWidth = window.innerWidth;

    window.onresize = e => this.overlayWidth = e.target.innerWidth;
  },

  methods: {
    format(v) {
      if (!v) return;
      return new Intl.NumberFormat().format(v);
    }

  }
});
// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/StatusBarMobile.vue?vue&type=script&lang=js&
 /* harmony default export */ var ExchangeMobile_StatusBarMobilevue_type_script_lang_js_ = (StatusBarMobilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/StatusBarMobile.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1379)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ExchangeMobile_StatusBarMobilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4e9f100a"
  
)

/* harmony default export */ var StatusBarMobile = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SymbolsMobile: __webpack_require__(1016).default})


/***/ }),

/***/ 1012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/MobileTabs.vue?vue&type=template&id=02960944&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mobile-tabs-container"},[_c('a-tabs',{attrs:{"forceRender":true,"tabBarStyle":{ borderBottom: '1px solid #2B2E35' }},model:{value:(_vm.activeMobileTab),callback:function ($$v) {_vm.activeMobileTab=$$v},expression:"activeMobileTab"}},_vm._l((_vm.MobileTabs),function(tab){return _c('a-tab-pane',{key:tab.key,staticClass:"Roboto-Medium"},[(tab.key === 'Grafik')?_c('span',{class:{
          'tab-label-active-mobile': tab.key === _vm.activeMobileTab,
          'tab-label-inactive-mobile': tab.key !== _vm.activeMobileTab,
        },attrs:{"slot":"tab"},slot:"tab"},[_vm._v("\n        "+_vm._s(tab.key)+"\n      ")]):_vm._e(),_vm._v(" "),(tab.key === 'Emir Defteri')?_c('span',{class:{
          'tab-label-active-mobile': tab.key === _vm.activeMobileTab,
          'tab-label-inactive-mobile': tab.key !== _vm.activeMobileTab,
        },attrs:{"slot":"tab"},slot:"tab"},[_vm._v("\n        "+_vm._s(tab.key)+"\n      ")]):_vm._e(),_vm._v(" "),(tab.key === 'Alim Satimlar')?_c('span',{class:{
          'tab-label-active-mobile': tab.key === _vm.activeMobileTab,
          'tab-label-inactive-mobile': tab.key !== _vm.activeMobileTab,
        },attrs:{"slot":"tab"},slot:"tab"},[_vm._v("\n        "+_vm._s(tab.key)+"\n      ")]):_vm._e(),_vm._v(" "),(_vm.activeMobileTab === 'Grafik')?_c('div',[_c('MobileChart'),_vm._v(" "),_c('OrderTabsMobile',{attrs:{"isOpenOrdersLoading":_vm.isOpenOrdersLoading,"openOrdersData":_vm.openOrdersData,"last24HoursData":_vm.last24HoursData},on:{"cancelOpenOrder":function (e) { return _vm.$emit('cancelOpenOrder', e); }}}),_vm._v(" "),_c('TradeDrawer',{attrs:{"UserBalance":_vm.UserBalance}})],1):_vm._e(),_vm._v(" "),(_vm.activeMobileTab === 'Emir Defteri')?_c('div',[_c('MobileOrderBook',{attrs:{"transactions":_vm.transactions,"last-price":_vm.lastPrice}}),_vm._v(" "),_c('TradeDrawer',{attrs:{"UserBalance":_vm.UserBalance}})],1):_vm._e(),_vm._v(" "),(_vm.activeMobileTab === 'Alim Satimlar')?_c('div',[_c('TradesMobile',{attrs:{"LastTransactionsData":_vm.LastTransactionsData}}),_vm._v(" "),_c('TradeDrawer',{attrs:{"UserBalance":_vm.UserBalance}})],1):_vm._e()])}),1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/MobileTabs.vue?vue&type=template&id=02960944&scoped=true&

// EXTERNAL MODULE: ./components/Exchange/ExchangeMobile/MobileChart.vue + 4 modules
var MobileChart = __webpack_require__(1017);

// EXTERNAL MODULE: ./components/Exchange/ExchangeMobile/OrderTabsMobile.vue + 4 modules
var OrderTabsMobile = __webpack_require__(1018);

// EXTERNAL MODULE: ./components/Exchange/ExchangeMobile/MobileOrderBook.vue + 4 modules
var MobileOrderBook = __webpack_require__(1019);

// EXTERNAL MODULE: ./components/Exchange/ExchangeMobile/TradesMobile.vue + 4 modules
var TradesMobile = __webpack_require__(1020);

// EXTERNAL MODULE: ./components/Exchange/ExchangeMobile/TradeDrawer.vue + 4 modules
var TradeDrawer = __webpack_require__(1021);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/MobileTabs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var MobileTabsvue_type_script_lang_js_ = ({
  props: {
    transactions: {
      type: Object,
      default: () => {}
    },
    lastPrice: {
      type: String,
      default: ''
    },
    LastTransactionsData: {
      type: Array,
      required: true
    },
    UserBalance: {
      required: true,
      type: Object
    },
    openOrdersData: {
      required: true,
      type: Array
    },
    last24HoursData: {
      required: true,
      type: Array
    },
    isOpenOrdersLoading: {
      required: false,
      type: Boolean
    }
  },
  components: {
    MobileChart: MobileChart["default"],
    MobileOrderBook: MobileOrderBook["default"],
    TradesMobile: TradesMobile["default"],
    OrderTabsMobile: OrderTabsMobile["default"],
    TradeDrawer: TradeDrawer["default"]
  },

  data() {
    return {
      activeMobileTab: 'Grafik',
      MobileTabs: [{
        key: 'Grafik',
        scopedSlots: {
          tab: 'titleSlot'
        }
      }, {
        key: 'Emir Defteri',
        scopedSlots: {
          tab: 'titleSlot'
        }
      }, {
        key: 'Alim Satimlar',
        scopedSlots: {
          tab: 'titleSlot'
        }
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/MobileTabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var ExchangeMobile_MobileTabsvue_type_script_lang_js_ = (MobileTabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/MobileTabs.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1397)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ExchangeMobile_MobileTabsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "02960944",
  "791a9049"
  
)

/* harmony default export */ var MobileTabs = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MobileChart: __webpack_require__(1017).default,OrderTabsMobile: __webpack_require__(1018).default,TradeDrawer: __webpack_require__(1021).default,MobileOrderBook: __webpack_require__(1019).default,TradesMobile: __webpack_require__(1020).default})


/***/ }),

/***/ 1013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ActionTab.vue?vue&type=template&id=3e6428c5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"h-100"},[(_vm.err.show)?_c('a-alert',{staticStyle:{"margin":"10px auto"},attrs:{"description":_vm.err.msg,"type":"error","closable":""},on:{"close":function (e) { return (_vm.err.show = false); }}}):_vm._e(),_vm._ssrNode(" "),_c('a-card',{staticClass:"action-card h-100"},[_c('div',{staticClass:"action-col"},[_c('div',{staticClass:"action-col__head"},[_c('h3',{staticClass:"action-col__head-title Roboto-Bold"},[_vm._v("\n          "+_vm._s(_vm.$t('text_buy_asset', { asset: _vm.getSymbolData.BaseAsset }))+"\n        ")]),_vm._v(" "),_c('div',[_c('img',{attrs:{"src":__webpack_require__(148),"alt":"wallet"}}),_vm._v(" "),_c('span',{staticClass:"action-col__head-value Roboto-Regular"},[_vm._v("\n            "+_vm._s(parseFloat(_vm.getSymbolData.QuatoAssetBalance).toFixed(8))+"\n            "+_vm._s(_vm.getSymbolData.QuatoAsset))])])]),_vm._v(" "),_c('div',{staticClass:"action-col__body"},[(_vm.ShowStop)?_c('div',{staticClass:"action-col__body-item",attrs:{"data-title":_vm.getSymbolData.QuatoAsset,"id":"buyStopLimit"}},[_c('label',{staticClass:"Roboto-Regular"},[_vm._v("Stop:")]),_vm._v(" "),_c('a-input-number',{staticClass:"no-focus-shadow Roboto-Regular",class:{ 'invalid-input': _vm.buyForm.Stop <= 0 },model:{value:(_vm.buyForm.Stop),callback:function ($$v) {_vm.$set(_vm.buyForm, "Stop", $$v)},expression:"buyForm.Stop"}})],1):_vm._e(),_vm._v(" "),(_vm.ShowLimit)?_c('div',{staticClass:"action-col__body-item",attrs:{"data-title":_vm.getSymbolData.QuatoAsset}},[_c('label',{staticClass:"Roboto-Regular"},[_vm._v("Limit:")]),_vm._v(" "),_c('a-input-number',{staticClass:"no-focus-shadow Roboto-Regular",model:{value:(_vm.buyForm.Limit),callback:function ($$v) {_vm.$set(_vm.buyForm, "Limit", $$v)},expression:"buyForm.Limit"}})],1):_vm._e(),_vm._v(" "),(_vm.ShowPrice)?_c('div',{staticClass:"action-col__body-item",attrs:{"data-title":_vm.getSymbolData.QuatoAsset,"id":"buyPrice"}},[_c('label',{staticClass:"Roboto-Regular"},[_vm._v(_vm._s(_vm.Type === 'MARKET' ? 'Fiyat' : _vm.$t('exchange_price'))+":")]),_vm._v(" "),_c('a-input-number',{staticClass:"no-focus-shadow Roboto-Regular",class:{ 'invalid-input': _vm.buyForm.Price < 0 },attrs:{"disabled":_vm.Type === 'MARKET',"placeholder":_vm.Type === 'MARKET' ? 'Piyasa' : ''},model:{value:(_vm.buyForm.Price),callback:function ($$v) {_vm.$set(_vm.buyForm, "Price", $$v)},expression:"buyForm.Price"}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"action-col__body-item",attrs:{"data-title":_vm.getSymbolData.BaseAsset,"id":"buyAmount"}},[_c('label',{staticClass:"Roboto-Regular"},[_vm._v(_vm._s(_vm.$t('exchange_amount'))+":")]),_vm._v(" "),_c('a-input-number',{staticClass:"no-focus-shadow Roboto-Regular",class:{ 'invalid-input': _vm.isInvalidBuyAmount },model:{value:(_vm.buyForm.Quantity),callback:function ($$v) {_vm.$set(_vm.buyForm, "Quantity", $$v)},expression:"buyForm.Quantity"}})],1),_vm._v(" "),(_vm.isTotalShow)?_c('div',{staticClass:"action-col__body-item",attrs:{"data-title":_vm.getSymbolData.QuatoAsset}},[_c('label',[_vm._v(_vm._s(_vm.$t('exchange_total'))+":")]),_vm._v(" "),_c('a-input',{staticClass:"no-focus-shadow",model:{value:(_vm.buyForm.Total),callback:function ($$v) {_vm.$set(_vm.buyForm, "Total", $$v)},expression:"buyForm.Total"}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"action-col__body-item"},[_c('label',{staticClass:"Roboto-Regular"}),_vm._v(" "),_c('div',{staticClass:"percentage Roboto-Regular"},[_c('span',{staticClass:"percentage__item",class:{ percentage__item_active: _vm.activeBuyPercent === 25 },on:{"click":function($event){return _vm.calculatePercent(25, 'BUY')}}},[_vm._v("25%")]),_vm._v(" "),_c('span',{staticClass:"percentage__item",class:{ percentage__item_active: _vm.activeBuyPercent === 50 },on:{"click":function($event){return _vm.calculatePercent(50, 'BUY')}}},[_vm._v("50%")]),_vm._v(" "),_c('span',{staticClass:"percentage__item",class:{ percentage__item_active: _vm.activeBuyPercent === 75 },on:{"click":function($event){return _vm.calculatePercent(75, 'BUY')}}},[_vm._v("75%")]),_vm._v(" "),_c('span',{staticClass:"percentage__item",class:{ percentage__item_active: _vm.activeBuyPercent === 100 },on:{"click":function($event){return _vm.calculatePercent(100, 'BUY')}}},[_vm._v("100%")])])])]),_vm._v(" "),(!_vm.isLoggedIn)?_c('div',{staticClass:"login-warning"},[_c('div',[_c('nuxt-link',{attrs:{"to":_vm.localePath('/login')}},[_vm._v(" "+_vm._s(_vm.$t('exchange_text_login'))+" ")]),_vm._v("\n          "+_vm._s(_vm.$t('exchange_text_or'))+"\n          "),_c('nuxt-link',{attrs:{"to":_vm.localePath('/signup')}},[_vm._v("\n            "+_vm._s(_vm.$t('exchange_text_signup'))+"\n          ")]),_vm._v("\n          "+_vm._s(_vm.$t('exchange_text_create'))+"\n        ")],1)]):_vm._e(),_vm._v(" "),(_vm.isLoggedIn)?_c('div',[_c('a-button',{staticClass:"w-100 action_buttons Roboto-Medium",staticStyle:{"height":"41px"},attrs:{"type":"success"},on:{"click":function($event){return _vm.trade('BUY')}}},[_vm._v(_vm._s(_vm.$t('text_buy_asset', { asset: _vm.getSymbolData.BaseAsset }))+"\n          \n        ")])],1):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"action-col"},[_c('div',{staticClass:"action-col__head"},[_c('h3',{staticClass:"action-col__head-title Roboto-Bold"},[_vm._v("\n          "+_vm._s(_vm.$t('text_sell_asset', { asset: _vm.getSymbolData.BaseAsset }))+"\n        ")]),_vm._v(" "),_c('div',[_c('img',{attrs:{"src":__webpack_require__(148),"alt":""}}),_vm._v(" "),_c('span',{staticClass:"action-col__head-value Roboto-Regular"},[_vm._v("\n            "+_vm._s(parseFloat(_vm.getSymbolData.BaseAssetBalance).toFixed(8))+"\n            "+_vm._s(_vm.getSymbolData.BaseAsset))])])]),_vm._v(" "),_c('div',{staticClass:"action-col__body"},[(_vm.ShowStop)?_c('div',{staticClass:"action-col__body-item",attrs:{"data-title":_vm.getSymbolData.QuatoAsset,"id":"sellStopLimit"}},[_c('label',{staticClass:"Roboto-Regular"},[_vm._v("Stop:")]),_vm._v(" "),_c('a-input-number',{staticClass:"no-focus-shadow Roboto-Regular",class:{ 'invalid-input': _vm.sellForm.Stop <= 0 },model:{value:(_vm.sellForm.Stop),callback:function ($$v) {_vm.$set(_vm.sellForm, "Stop", $$v)},expression:"sellForm.Stop"}})],1):_vm._e(),_vm._v(" "),(_vm.ShowLimit)?_c('div',{staticClass:"action-col__body-item",attrs:{"data-title":_vm.getSymbolData.QuatoAsset}},[_c('label',{staticClass:"Roboto-Regular"},[_vm._v("Limit:")]),_vm._v(" "),_c('a-input-number',{staticClass:"no-focus-shadow Roboto-Regular",model:{value:(_vm.sellForm.Limit),callback:function ($$v) {_vm.$set(_vm.sellForm, "Limit", $$v)},expression:"sellForm.Limit"}})],1):_vm._e(),_vm._v(" "),(_vm.ShowPrice)?_c('div',{staticClass:"action-col__body-item",attrs:{"data-title":_vm.getSymbolData.QuatoAsset,"id":"sellPrice"}},[_c('label',{staticClass:"Roboto-Regular"},[_vm._v(_vm._s(_vm.Type === 'MARKET' ? 'Fiyat' : _vm.$t('exchange_price'))+":")]),_vm._v(" "),_c('a-input-number',{staticClass:"no-focus-shadow Roboto-Regular",class:{ 'invalid-input': _vm.sellForm.Price < 0 },attrs:{"disabled":_vm.Type === 'MARKET',"placeholder":_vm.Type === 'MARKET' ? 'Piyasa' : ''},model:{value:(_vm.sellForm.Price),callback:function ($$v) {_vm.$set(_vm.sellForm, "Price", $$v)},expression:"sellForm.Price"}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"action-col__body-item",attrs:{"data-title":_vm.getSymbolData.BaseAsset,"id":"sellAmount"}},[_c('label',{staticClass:"Roboto-Regular"},[_vm._v(_vm._s(_vm.$t('exchange_amount'))+":")]),_vm._v(" "),_c('a-input-number',{staticClass:"no-focus-shadow Roboto-Regular",class:{ 'invalid-input': _vm.isInvalidSellAmount },model:{value:(_vm.sellForm.Quantity),callback:function ($$v) {_vm.$set(_vm.sellForm, "Quantity", $$v)},expression:"sellForm.Quantity"}})],1),_vm._v(" "),(_vm.isTotalShow)?_c('div',{staticClass:"action-col__body-item",attrs:{"data-title":_vm.getSymbolData.QuatoAsset}},[_c('label',{staticClass:"Roboto-Regular"},[_vm._v(_vm._s(_vm.$t('exchange_total'))+":")]),_vm._v(" "),_c('a-input',{staticClass:"no-focus-shadow Roboto-Regular",model:{value:(_vm.sellForm.Total),callback:function ($$v) {_vm.$set(_vm.sellForm, "Total", $$v)},expression:"sellForm.Total"}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"action-col__body-item"},[_c('label',{staticClass:"Roboto-Regular"}),_vm._v(" "),_c('div',{staticClass:"percentage Roboto-Regular"},[_c('span',{staticClass:"percentage__item",class:{ percentage__item_active: _vm.activeSellPercent === 25 },on:{"click":function($event){return _vm.calculatePercent(25, 'SELL')}}},[_vm._v("25%")]),_vm._v(" "),_c('span',{staticClass:"percentage__item",class:{ percentage__item_active: _vm.activeSellPercent === 50 },on:{"click":function($event){return _vm.calculatePercent(50, 'SELL')}}},[_vm._v("50%")]),_vm._v(" "),_c('span',{staticClass:"percentage__item",class:{ percentage__item_active: _vm.activeSellPercent === 75 },on:{"click":function($event){return _vm.calculatePercent(75, 'SELL')}}},[_vm._v("75%")]),_vm._v(" "),_c('span',{staticClass:"percentage__item",class:{ percentage__item_active: _vm.activeSellPercent === 100 },on:{"click":function($event){return _vm.calculatePercent(100, 'SELL')}}},[_vm._v("100%")])])])]),_vm._v(" "),(!_vm.isLoggedIn)?_c('div',{staticClass:"login-warning"},[_c('div',[_c('nuxt-link',{attrs:{"to":_vm.localePath('/login')}},[_vm._v("\n            "+_vm._s(_vm.$t('exchange_text_login'))+"\n          ")]),_vm._v("\n          "+_vm._s(_vm.$t('exchange_text_or'))+"\n          "),_c('nuxt-link',{attrs:{"to":_vm.localePath('/signup')}},[_vm._v("\n            "+_vm._s(_vm.$t('exchange_text_signup'))+"\n          ")]),_vm._v("\n          "+_vm._s(_vm.$t('exchange_text_create'))+"\n        ")],1)]):_vm._e(),_vm._v(" "),(_vm.isLoggedIn)?_c('div',[_c('a-button',{staticClass:"action_buttons Roboto-Medium w-100",staticStyle:{"height":"41px"},attrs:{"type":"danger"},on:{"click":function($event){return _vm.trade('SELL')}}},[_vm._v("\n          "+_vm._s(_vm.$t('text_sell_asset', { asset: _vm.getSymbolData.BaseAsset }))+"\n        ")])],1):_vm._e()])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/ActionTab.vue?vue&type=template&id=3e6428c5&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ActionTab.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ActionTabvue_type_script_lang_js_ = ({
  props: {
    UserBalance: {
      require: true,
      type: Object
    },
    isTotalShow: {
      type: Boolean,
      default: true
    },
    ShowPrice: {
      type: Boolean,
      default: true
    },
    ShowStop: {
      type: Boolean,
      default: false
    },
    ShowLimit: {
      type: Boolean,
      default: false
    },
    Type: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      buyForm: {
        Stop: '',
        Price: '',
        Quantity: '',
        Total: ''
      },
      sellForm: {
        Stop: '',
        Price: '',
        Quantity: '',
        Total: ''
      },
      activeBuyPercent: "",
      activeSellPercent: "",
      err: {
        show: false,
        msg: ''
      }
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      getSymbolData: 'symbol/getSymbolData',
      getActionPrice: 'transactions/getActionPrice',
      getActionBuyTotal: 'transactions/getActionBuyTotal',
      getActionSellQuantity: 'transactions/getActionSellQuantity'
    }),

    isLoggedIn() {
      return !!this.$cookies.get('Token');
    },

    // activeBuyPercent () {
    //   const { QuatoAssetBalance } = this.getSymbolData
    //   const { Total } = this.buyForm
    //   if (Total === ((25 / 100) * QuatoAssetBalance)) {
    //     return 25  
    //   } else if (Total === ((50 / 100) * QuatoAssetBalance)) {
    //     return 50
    //   } else if (Total === ((75 / 100) * QuatoAssetBalance)) {
    //     return 75
    //   } else if (Total === ((100 / 100) * QuatoAssetBalance)) {
    //     return 100
    //   } else {
    //     return 0
    //   }
    // },
    // activeSellPercent () {
    //   const { BaseAssetBalance } = this.getSymbolData
    //   const { Quantity, Total ,Price } = this.sellForm
    //   if (Quantity === ((25 / 100) * BaseAssetBalance) && Quantity === Price * Total) {
    //     return 25  
    //   } else if (Quantity === ((50 / 100) * BaseAssetBalance)) {
    //     return 50
    //   } else if (Quantity === ((75 / 100) * BaseAssetBalance)) {
    //     return 75
    //   } else if (Quantity === ((100 / 100) * BaseAssetBalance)) {
    //     return 100
    //   } else {
    //     return 75
    //   }
    // },
    isInvalidBuyAmount() {
      const {
        QuatoAssetBalance,
        LastPrice
      } = this.getSymbolData;

      if (QuatoAssetBalance === 0) {
        return false;
      }

      return Number(this.buyForm.Quantity) > QuatoAssetBalance / LastPrice;
    },

    invalidBuyAmountMessage() {
      const {
        QuatoAssetBalance,
        LastPrice
      } = this.getSymbolData;

      if (this.buyForm.Quantity > QuatoAssetBalance / LastPrice && QuatoAssetBalance !== 0) {
        return `Max amount ${QuatoAssetBalance / LastPrice}`;
      }
    },

    isInvalidSellAmount() {
      const {
        BaseAssetBalance
      } = this.getSymbolData;

      if (BaseAssetBalance === 0) {
        return false;
      }

      return Number(this.sellForm.Quantity) > BaseAssetBalance;
    },

    invalidSellAmountMessage() {
      const {
        BaseAssetBalance
      } = this.getSymbolData;

      if (BaseAssetBalance < this.sellForm.Quantity && BaseAssetBalance !== 0) {
        return `Max amount ${BaseAssetBalance}`;
      }
    },

    isValidBuyForm() {
      if (this.Type === 'LIMIT') {
        if (this.buyForm.Price <= 0 || this.isInvalidBuyAmount) {
          return true;
        } else {
          return false;
        }
      }

      if (this.Type === 'MARKET') {
        this.buyForm.isInvalidBuyAmount ? true : false;
      }

      if (this.Type === 'STOP-LIMIT') {
        if (this.buyForm.Price <= 0 || this.buyForm.Stop <= 0 || this.isInvalidBuyAmount) {
          return true;
        } else {
          return false;
        }
      }
    },

    isValidSellForm() {
      if (this.Type === 'LIMIT') {
        if (this.sellForm.Price <= 0 || this.isInvalidSellAmount) {
          return true;
        } else {
          return false;
        }
      }

      if (this.Type === 'MARKET') {
        this.sellForm.isInvalidSellAmount ? true : false;
      }

      if (this.Type === 'STOP-LIMIT') {
        if (this.sellForm.Price <= 0 || this.sellForm.Stop <= 0 || this.isInvalidSellAmount) {
          return true;
        } else {
          return false;
        }
      }
    }

  },

  mounted() {
    if (this.Type !== 'MARKET') {
      const {
        LastPrice
      } = this.getSymbolData;
      this.buyForm.Price = this.sellForm.Price = LastPrice;
    } else {
      const {
        QuatoAssetBalance,
        BaseAssetBalance,
        LastPrice
      } = this.getSymbolData;
      console.log(QuatoAssetBalance, LastPrice);
      this.buyForm.Quantity = QuatoAssetBalance / LastPrice;
      this.sellForm.Quantity = BaseAssetBalance * LastPrice;
    }
  },

  methods: {
    getContainer(id) {
      return document.querySelector(id);
    },

    async trade(side) {
      try {
        const {
          Symbol,
          LastPrice
        } = this.getSymbolData;
        let payload;

        if (side === 'BUY') {
          payload = { ...this.buyForm,
            Type: this.Type,
            Side: side,
            Symbol: Symbol
          };
        }

        if (side === 'SELL') {
          payload = { ...this.sellForm,
            Type: this.Type,
            Side: side,
            Symbol: Symbol
          };
        }

        const {
          $axios,
          $cookies,
          $config: {
            FINANCE_API_URL
          }
        } = this;
        const authHeaders = {
          Authorization: 'Bearer ' + $cookies.get('Token')
        };
        const {
          data: {
            Success,
            Message,
            Order
          }
        } = await $axios.post(FINANCE_API_URL + '/Trade', payload, {
          headers: authHeaders
        });

        if (Success) {
          this.$notification.open({
            message: 'Success',
            description: 'Successfull !'
          });

          if (side === 'BUY') {
            this.buyForm.Quantity = this.buyForm.Total = '';
          }

          if (side === 'SELL') {
            this.sellForm.Quantity = this.sellForm.Total = '';
          }

          if (Order.Status !== 'FILLED') {
            this.$emit('tradeUpdate', Order);
          }
        } else {
          this.$notification.open({
            message: 'Failed !',
            description: Message
          });
        }
      } catch (e) {
        if ('response' in e) {
          const {
            Message
          } = e.response.data;
          this.$notification.open({
            message: 'Failed !',
            description: Message
          });
        }
      }
    },

    calculatePercent(percent, type) {
      const {
        QuatoAssetBalance,
        BaseAssetBalance,
        LastPrice,
        SymbolStepSize
      } = this.getSymbolData;

      if (type === 'BUY') {
        this.activeBuyPercent = percent;

        if (this.Type !== 'MARKET') {
          this.buyForm.Total = percent / 100 * QuatoAssetBalance;
          this.buyForm.Quantity = this.buyForm.Total / this.buyForm.Price;
        } else {
          this.buyForm.Quantity = percent / 100 * QuatoAssetBalance / LastPrice;
        }
      }

      if (type === 'SELL') {
        this.activeSellPercent = percent;

        if (this.Type !== 'MARKET') {
          if (percent === 100) {
            const outputDecimal = Math.trunc(BaseAssetBalance * Math.pow(10, SymbolStepSize)) / Math.pow(10, SymbolStepSize);
            this.sellForm.Quantity = outputDecimal;
          } else {
            this.sellForm.Quantity = percent / 100 * BaseAssetBalance;
          }

          this.sellForm.Total = this.sellForm.Quantity * this.sellForm.Price;
        } else {
          this.sellForm.Quantity = percent / 100 * BaseAssetBalance / LastPrice;
        }
      }
    }

  },
  watch: {
    'buyForm.Price': {
      handler(Price) {
        this.buyForm.Total = Price * this.buyForm.Quantity;
      }

    },
    'buyForm.Quantity': {
      handler(Quantity) {
        const {
          SymbolStepSize
        } = this.getSymbolData;
        this.buyForm.Quantity = parseFloat(Quantity).toFixed(SymbolStepSize);

        if (this.buyForm.Quantity !== Quantity) {
          this.buyForm.Total = this.buyForm.Price * Quantity;
        }
      }

    },
    'buyForm.Total': {
      handler(Total) {
        const {
          SymbolStepSize,
          QuatoAssetBalance
        } = this.getSymbolData;

        if (this.buyForm.Price) {
          this.buyForm.Quantity = (Total / this.buyForm.Price).toFixed(SymbolStepSize);
        }

        if (!Total) {
          this.activeBuyPercent = "";
        }
      }

    },
    'sellForm.Price': {
      handler(Price) {
        this.sellForm.Total = Price * this.sellForm.Quantity;
      }

    },
    'sellForm.Quantity': {
      handler(Quantity) {
        const {
          SymbolStepSize
        } = this.getSymbolData;
        this.sellForm.Quantity = parseFloat(Quantity).toFixed(SymbolStepSize);

        if (this.sellForm.Quantity !== Quantity) {
          this.sellForm.Total = this.sellForm.Price * Quantity;
        }
      }

    },
    'sellForm.Total': {
      handler(Total) {
        if (this.sellForm.Price) {
          const {
            SymbolStepSize
          } = this.getSymbolData;
          this.sellForm.Quantity = (Total / this.sellForm.Price).toFixed(SymbolStepSize);
        }

        if (!Total) {
          this.activeSellPercent = "";
        }
      }

    },

    getActionPrice(v) {
      if (this.Type !== 'MARKET') {
        this.buyForm.Price = v;
        this.sellForm.Price = v;
      }

      this.buyForm.Quantity = '';
      this.buyForm.Total = '';
      this.sellForm.Quantity = '';
      this.sellForm.Total = '';
    },

    getActionBuyTotal(v) {
      this.buyForm.Total = v;
    },

    getActionSellQuantity(v) {
      if (this.Type !== 'MARKET') {
        this.sellForm.Quantity = v;
      }
    },

    getSymbolData() {
      Object.keys(this.buyForm).forEach(key => {
        if (key !== 'Price') {
          this.buyForm[key] = 0;
        }
      });
      Object.keys(this.sellForm).forEach(key => {
        if (key !== 'Price') {
          this.sellForm[key] = 0;
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./components/Exchange/ActionTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var Exchange_ActionTabvue_type_script_lang_js_ = (ActionTabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/ActionTab.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1363)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Exchange_ActionTabvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "303fb2d1"
  
)

/* harmony default export */ var ActionTab = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/SideTransactions/TransacitonTypeCard.vue?vue&type=template&id=3801a703&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('a-card',{staticClass:"mb-15 types"},[_c('div',{staticClass:"types-content"},[_c('div',{staticClass:"types-content__item",class:_vm.activeTab == 1 && 'types-content__item-active',on:{"click":function($event){return _vm.setTab(1)}}},[_c('img',{staticClass:"img-fluid",attrs:{"src":__webpack_require__(989),"alt":"transactions"}})]),_vm._v(" "),_c('div',{staticClass:"types-content__item",class:_vm.activeTab == 2 && 'types-content__item-active',on:{"click":function($event){return _vm.setTab(2)}}},[_c('img',{staticClass:"img-fluid",attrs:{"src":__webpack_require__(990),"alt":"transaction"}})]),_vm._v(" "),_c('div',{staticClass:"types-content__item",class:_vm.activeTab == 3 && 'types-content__item-active',on:{"click":function($event){return _vm.setTab(3)}}},[_c('img',{staticClass:"img-fluid",attrs:{"src":__webpack_require__(991),"alt":"transaction"}})])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/SideTransactions/TransacitonTypeCard.vue?vue&type=template&id=3801a703&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/SideTransactions/TransacitonTypeCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TransacitonTypeCardvue_type_script_lang_js_ = ({
  props: {
    activeTab: {
      default: 1,
      type: Number
    }
  },
  methods: {
    setTab(i) {
      this.$emit('change', i);
    }

  }
});
// CONCATENATED MODULE: ./components/Exchange/SideTransactions/TransacitonTypeCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var SideTransactions_TransacitonTypeCardvue_type_script_lang_js_ = (TransacitonTypeCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/SideTransactions/TransacitonTypeCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1367)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SideTransactions_TransacitonTypeCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "76b491e8"
  
)

/* harmony default export */ var TransacitonTypeCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/SideTransactions/ValueCard.vue?vue&type=template&id=f4fe59fa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-card',{staticClass:"value-card"},[_c('h2',{staticClass:"value-card-title"},[_vm._v("\n    "+_vm._s(_vm.formatPrice(_vm.value))+"\n  ")])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/SideTransactions/ValueCard.vue?vue&type=template&id=f4fe59fa&

// EXTERNAL MODULE: ./Mixins/formatter.js
var formatter = __webpack_require__(691);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/SideTransactions/ValueCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var ValueCardvue_type_script_lang_js_ = ({
  mixins: [formatter["a" /* default */]],
  props: {
    value: {
      type: String,
      default: 0
    }
  }
});
// CONCATENATED MODULE: ./components/Exchange/SideTransactions/ValueCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var SideTransactions_ValueCardvue_type_script_lang_js_ = (ValueCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/SideTransactions/ValueCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1369)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SideTransactions_ValueCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4f6a18e2"
  
)

/* harmony default export */ var ValueCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/SymbolsMobile.vue?vue&type=template&id=8185bd20&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mobile-symbols-container"},[_c('a-row',[_c('a-col',{attrs:{"span":24}},[_c('SymbolsListMobile')],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/SymbolsMobile.vue?vue&type=template&id=8185bd20&scoped=true&

// EXTERNAL MODULE: ./components/Exchange/ExchangeMobile/SymbolsListMobile.vue + 4 modules
var SymbolsListMobile = __webpack_require__(1022);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/SymbolsMobile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SymbolsMobilevue_type_script_lang_js_ = ({
  components: {
    SymbolsListMobile: SymbolsListMobile["default"]
  }
});
// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/SymbolsMobile.vue?vue&type=script&lang=js&
 /* harmony default export */ var ExchangeMobile_SymbolsMobilevue_type_script_lang_js_ = (SymbolsMobilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/SymbolsMobile.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1377)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ExchangeMobile_SymbolsMobilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8185bd20",
  "112d1e64"
  
)

/* harmony default export */ var SymbolsMobile = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SymbolsListMobile: __webpack_require__(1022).default})


/***/ }),

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/MobileChart.vue?vue&type=template&id=71d099a9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"margin-bottom":"10px"}},[_vm._ssrNode("<iframe frameborder=\"0\" width=\"100%\" height=\"400\""+(_vm._ssrAttr("src",_vm.getUrl))+"></iframe>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/MobileChart.vue?vue&type=template&id=71d099a9&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/MobileChart.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var MobileChartvue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapGetters"])({
      theme: 'common/getTheme'
    }),

    getParam() {
      return this.$route.params.symbol.split('_').join('');
    },

    getUrl() {
      return `https://s.tradingview.com/widgetembed/?frameElementId=tradingview_5d94b&symbol=BINANCE:${this.getParam}&interval=30&hidelegend=1&symboledit=0&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=auto&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=tr&utm_source=www.cointral.com&utm_medium=widget&utm_campaign=chart`;
    }

  }
});
// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/MobileChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var ExchangeMobile_MobileChartvue_type_script_lang_js_ = (MobileChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/MobileChart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ExchangeMobile_MobileChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "75f2f8a3"
  
)

/* harmony default export */ var MobileChart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/OrderTabsMobile.vue?vue&type=template&id=612c223c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-tabs',{model:{value:(_vm.activeMobileOrderTab),callback:function ($$v) {_vm.activeMobileOrderTab=$$v},expression:"activeMobileOrderTab"}},_vm._l((_vm.mobileOrderTabs),function(ot,index){return _c('a-tab-pane',{key:ot.key},[(ot.key === 'openOrders')?_c('span',{staticClass:"Roboto-Medium",class:{
        'tab-label-active-mobile': ot.key === _vm.activeMobileOrderTab,
        'tab-label-inactive-mobile': ot.key !== _vm.activeMobileOrderTab,
      },attrs:{"slot":"tab"},slot:"tab"},[_vm._v("\n      "+_vm._s(_vm.$t('text_open_orders'))+" ("+_vm._s(_vm.openOrdersData.length)+")\n    ")]):_vm._e(),_vm._v(" "),(ot.key === 'last24HOrders')?_c('span',{staticClass:"Roboto-Medium",class:{
        'tab-label-active-mobile': ot.key === _vm.activeMobileOrderTab,
        'tab-label-inactive-mobile': ot.key !== _vm.activeMobileOrderTab,
      },attrs:{"slot":"tab"},slot:"tab"},[_vm._v("\n      "+_vm._s(_vm.$t('history_title'))+"\n    ")]):_vm._e(),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.activeMobileOrderTab === 'openOrders'),expression:"activeMobileOrderTab === 'openOrders'"}],staticClass:"order-list-container"},[_c('a-spin',{attrs:{"spinning":_vm.isOpenOrdersLoading}},[_c('a-list',{attrs:{"item-layout":"horizontal","data-source":_vm.openOrdersData},scopedSlots:_vm._u([{key:"renderItem",fn:function(item, index){return _c('a-list-item',{},[_c('a-list-item-meta',[_c('div',{staticStyle:{"display":"flex","justify-content":"space-between","align-items":"center"},attrs:{"slot":"title"},slot:"title"},[_c('div',{staticClass:"order-list-item-title Roboto-Regular"},[_vm._v("\n                  "+_vm._s(item.Symbol)+"\n                  "),_c('span',{class:{
                      'order-buy': item.Side === 'BUY',
                      'order-sell': item.Side === 'SELL',
                    }},[_c('span',{staticClass:"order-list-item-side Roboto-Regular"},[_vm._v("\n                      "+_vm._s(item.Side)+"\n                    ")]),_vm._v(" "),_c('span',{staticClass:"order-list-item-type Roboto-Regular"},[_vm._v("\n                      "+_vm._s(item.Type)+"\n                    ")]),_vm._v(" "),_c('span',{staticClass:"order-list-item-status Roboto-Regular order-status"},[_vm._v("\n                      "+_vm._s(item.Status)+"\n                    ")])])]),_vm._v(" "),_c('div',{staticClass:"order-list-item-title Roboto-Regular"},[_c('a-button',{attrs:{"size":"small","type":"secondary"},on:{"click":function($event){return _vm.$emit('cancelOpenOrder', item)}}},[_vm._v("iptal")])],1)]),_vm._v(" "),_c('div',{attrs:{"slot":"description"},slot:"description"},[_c('a-row',{attrs:{"gutter":16}},[_c('a-col',{staticClass:"text-left",attrs:{"span":12}},[_c('span',{staticClass:"order-list-desc-label Roboto-Regular"},[_vm._v("Gerçekleştirilen / Miktar")])]),_vm._v(" "),_c('a-col',{staticClass:"text-right",attrs:{"span":12}},[_c('span',{staticClass:"order-list-desc-value Roboto-Regular"},[_vm._v("\n                      "+_vm._s(item.ExecutedBaseQuantity)+"/"+_vm._s(item.BaseQuantity))])])],1),_vm._v(" "),_c('a-row',{attrs:{"gutter":16}},[_c('a-col',{staticClass:"text-left",attrs:{"span":12}},[_c('span',{staticClass:"order-list-desc-label Roboto-Regular"},[_vm._v("Ortalama / Fiyat")])]),_vm._v(" "),_c('a-col',{staticClass:"text-right",attrs:{"span":12}},[_c('span',{staticClass:"order-list-desc-value Roboto-Regular"},[_vm._v("\n                      "+_vm._s(item.AveragePrice)+"/"+_vm._s(item.Price))])])],1),_vm._v(" "),_c('a-row',{attrs:{"gutter":16}},[_c('a-col',{staticClass:"text-left",attrs:{"span":12}},[_c('span',{staticClass:"order-list-desc-label Roboto-Regular"},[_vm._v("Toplam")])]),_vm._v(" "),_c('a-col',{staticClass:"text-right",attrs:{"span":12}},[_c('span',{staticClass:"order-list-desc-value Roboto-Regular"},[_vm._v("\n                      "+_vm._s(item.QuatoQuantity))])])],1)],1)])],1)}}],null,true)})],1)],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.activeMobileOrderTab === 'last24HOrders'),expression:"activeMobileOrderTab === 'last24HOrders'"}],staticClass:"order-list-container"},[_c('a-list',{attrs:{"item-layout":"horizontal","data-source":_vm.last24HoursData},scopedSlots:_vm._u([{key:"renderItem",fn:function(item, index){return _c('a-list-item',{},[_c('a-list-item-meta',[_c('div',{attrs:{"slot":"title"},slot:"title"},[_c('div',{staticClass:"order-list-item-title"},[_vm._v("\n                "+_vm._s(item.Symbol)+"\n                "),_c('span',{class:{
                    'order-buy': item.Side === 'BUY',
                    'order-sell': item.Side === 'SELL',
                  }},[_c('span',{staticClass:"order-list-item-side"},[_vm._v("\n                    "+_vm._s(item.Side)+"\n                  ")]),_vm._v(" "),_c('span',{staticClass:"order-list-item-type"},[_vm._v("\n                    "+_vm._s(item.Type)+"\n                  ")]),_vm._v(" "),_c('span',{staticClass:"order-list-item-status Roboto-Regular order-status"},[_vm._v("\n                    "+_vm._s(item.Status)+"\n                  ")])])])]),_vm._v(" "),_c('div',{attrs:{"slot":"description"},slot:"description"},[_c('a-row',{attrs:{"gutter":16}},[_c('a-col',{staticClass:"text-left",attrs:{"span":12}},[_c('span',{staticClass:"order-list-desc-label Roboto-Regular"},[_vm._v("Gerçekleştirilen / Miktar")])]),_vm._v(" "),_c('a-col',{staticClass:"text-right",attrs:{"span":12}},[_c('span',{staticClass:"order-list-desc-value Roboto-Regular"},[_vm._v("\n                    "+_vm._s(item.ExecutedBaseQuantity)+"/"+_vm._s(item.BaseQuantity))])])],1),_vm._v(" "),_c('a-row',{attrs:{"gutter":16}},[_c('a-col',{staticClass:"text-left",attrs:{"span":12}},[_c('span',{staticClass:"order-list-desc-label Roboto-Regular"},[_vm._v("Ortalama / Fiyat")])]),_vm._v(" "),_c('a-col',{staticClass:"text-right",attrs:{"span":12}},[_c('span',{staticClass:"order-list-desc-value Roboto-Regular"},[_vm._v("\n                    "+_vm._s(item.AveragePrice)+"/"+_vm._s(item.Price))])])],1),_vm._v(" "),_c('a-row',{attrs:{"gutter":16}},[_c('a-col',{staticClass:"text-left",attrs:{"span":12}},[_c('span',{staticClass:"order-list-desc-label Roboto-Regular"},[_vm._v("Toplam")])]),_vm._v(" "),_c('a-col',{staticClass:"text-right",attrs:{"span":12}},[_c('span',{staticClass:"order-list-desc-value Roboto-Regular"},[_vm._v("\n                    "+_vm._s(item.QuatoQuantity))])])],1)],1)])],1)}}],null,true)})],1)])}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/OrderTabsMobile.vue?vue&type=template&id=612c223c&scoped=true&

// EXTERNAL MODULE: ./Mixins/formatter.js
var formatter = __webpack_require__(691);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/OrderTabsMobile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var OrderTabsMobilevue_type_script_lang_js_ = ({
  mixins: [formatter["a" /* default */]],
  props: {
    openOrdersData: {
      required: true,
      type: Array
    },
    last24HoursData: {
      required: true,
      type: Array
    },
    isOpenOrdersLoading: {
      required: false,
      type: Boolean
    }
  },

  data() {
    return {
      mobileOrderTabs: [{
        key: 'openOrders',
        scopedSlots: {
          tab: 'titleSlot'
        }
      }, {
        key: 'last24HOrders',
        scopedSlots: {
          tab: 'titleSlot'
        }
      }],
      activeMobileOrderTab: 'openOrders'
    };
  }

});
// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/OrderTabsMobile.vue?vue&type=script&lang=js&
 /* harmony default export */ var ExchangeMobile_OrderTabsMobilevue_type_script_lang_js_ = (OrderTabsMobilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/OrderTabsMobile.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1381)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ExchangeMobile_OrderTabsMobilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "612c223c",
  "6049d775"
  
)

/* harmony default export */ var OrderTabsMobile = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/MobileOrderBook.vue?vue&type=template&id=1d50cf18&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mobile-order-book-container"},[_c('TransactionTypeCardMobile',{attrs:{"activeTab":_vm.type},on:{"change":function (e) { return (_vm.type = e); }}}),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrStyle({"display":"flex"},null, { display: (_vm.type === 1) ? '' : 'none' }))+" data-v-1d50cf18>","</div>",[_c('TransactionMobile',{attrs:{"list":_vm.getBids,"value-col-class":"text-success"}}),_vm._ssrNode(" <div style=\"width: 10px\" data-v-1d50cf18></div> "),_c('TransactionMobile',{attrs:{"list":_vm.getAsks,"value-col-class":"text-danger"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrStyle({"display":"flex"},null, { display: (_vm.type === 2) ? '' : 'none' }))+" data-v-1d50cf18>","</div>",[_c('TransactionMobile',{attrs:{"list":_vm.getBids,"show-total":true,"value-col-class":"text-success"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrStyle({"display":"flex"},null, { display: (_vm.type === 3) ? '' : 'none' }))+" data-v-1d50cf18>","</div>",[_c('TransactionMobile',{attrs:{"list":_vm.getAsks,"show-total":true,"value-col-class":"text-danger"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/MobileOrderBook.vue?vue&type=template&id=1d50cf18&scoped=true&

// EXTERNAL MODULE: ./components/Exchange/ExchangeMobile/TransactionTypeCardMobile.vue + 4 modules
var TransactionTypeCardMobile = __webpack_require__(1023);

// EXTERNAL MODULE: ./components/Exchange/ExchangeMobile/TransactionMobile.vue + 4 modules
var TransactionMobile = __webpack_require__(1024);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/MobileOrderBook.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var MobileOrderBookvue_type_script_lang_js_ = ({
  props: {
    transactions: {
      type: Object,
      default: () => {}
    },
    lastPrice: {
      type: String,
      default: ''
    }
  },
  components: {
    TransactionTypeCardMobile: TransactionTypeCardMobile["default"],
    TransactionMobile: TransactionMobile["default"]
  },

  data() {
    return {
      type: 1
    };
  },

  computed: {
    getBids() {
      return this.transactions.bids;
    },

    getAsks() {
      return this.transactions.asks;
    }

  }
});
// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/MobileOrderBook.vue?vue&type=script&lang=js&
 /* harmony default export */ var ExchangeMobile_MobileOrderBookvue_type_script_lang_js_ = (MobileOrderBookvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/MobileOrderBook.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ExchangeMobile_MobileOrderBookvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1d50cf18",
  "27a93d1c"
  
)

/* harmony default export */ var MobileOrderBook = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TransactionTypeCardMobile: __webpack_require__(1023).default,TransactionMobile: __webpack_require__(1024).default})


/***/ }),

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/TradesMobile.vue?vue&type=template&id=7d862c51&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"trades-table-wrapper"},[_vm._ssrNode("<table class=\"w-100 trades-table Roboto-Regular\" data-v-7d862c51><thead class=\"Roboto-Regular\" data-v-7d862c51><tr class=\"trades-table-header\" data-v-7d862c51><th class=\"text-left font-normal\" data-v-7d862c51>"+_vm._ssrEscape("\n          Fiyat ("+_vm._s(_vm.getSymbolData.QuatoAsset)+")\n        ")+"</th> <th class=\"font-normal\" data-v-7d862c51>Miktar</th> <th class=\"text-right font-normal\" data-v-7d862c51>Saat</th></tr></thead> <tbody class=\"Roboto-Regular\" data-v-7d862c51>"+(_vm._ssrList((_vm.LastTransactionsData),function(item,index){return ("<tr data-v-7d862c51><td"+(_vm._ssrClass("font-normal",item.IsBuyerMaker ? 'text-success' : 'text-danger'))+" data-v-7d862c51>"+_vm._ssrEscape("\n          "+_vm._s(_vm.formatPrice(item.Price))+"\n        ")+"</td> <td class=\"text-white font-normal\" data-v-7d862c51>"+_vm._ssrEscape("\n          "+_vm._s(_vm.formatAmount(item.Qty))+"\n        ")+"</td> <td class=\"text-white text-right font-normal\" data-v-7d862c51>"+_vm._ssrEscape("\n          "+_vm._s(_vm.computeTime(item.Time))+"\n        ")+"</td></tr>")}))+"</tbody></table>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/TradesMobile.vue?vue&type=template&id=7d862c51&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./Mixins/formatter.js
var formatter = __webpack_require__(691);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(42);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/TradesMobile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var TradesMobilevue_type_script_lang_js_ = ({
  mixins: [formatter["a" /* default */]],
  props: {
    LastTransactionsData: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      list: []
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      getTheme: 'common/getTheme',
      getSymbolData: 'symbol/getSymbolData'
    })
  },
  methods: {
    computeTime(v) {
      return external_moment_default()(new Date(Math.round(v * 1000))).format('H:mm:ss');
    }

  }
});
// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/TradesMobile.vue?vue&type=script&lang=js&
 /* harmony default export */ var ExchangeMobile_TradesMobilevue_type_script_lang_js_ = (TradesMobilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/TradesMobile.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1387)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ExchangeMobile_TradesMobilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7d862c51",
  "020a3d4c"
  
)

/* harmony default export */ var TradesMobile = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/TradeDrawer.vue?vue&type=template&id=467e065e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"position":"relative"},attrs:{"id":"tradeDrawerContainer"}},[(_vm.isLoggedIn)?_c('a-row',{staticClass:"w-100",staticStyle:{"margin":"10px auto"},attrs:{"gutter":16}},[_c('a-col',{attrs:{"span":12}},[_c('a-button',{staticClass:"action-mobile-drawer-button isBuy",attrs:{"size":"large","block":""},on:{"click":function($event){return _vm.showDrawer('BUY', true)}}},[_vm._v("Al")])],1),_vm._v(" "),_c('a-col',{attrs:{"span":12}},[_c('a-button',{staticClass:"action-mobile-drawer-button isSell",attrs:{"size":"large","block":""},on:{"click":function($event){return _vm.showDrawer('SELL', true)}}},[_vm._v("Sat")])],1)],1):_vm._e(),_vm._ssrNode(" "),(!_vm.isLoggedIn)?_c('a-row',{staticStyle:{"margin":"25px auto"}},[_c('a-col',{attrs:{"span":24}},[(!_vm.isLoggedIn)?_c('div',{staticClass:"login-warning"},[_c('div',{staticClass:"text-center text-white"},[_c('nuxt-link',{attrs:{"to":_vm.localePath('/login')}},[_vm._v(" Giriş yapın ")]),_vm._v("\n          veya\n          "),_c('nuxt-link',{attrs:{"to":_vm.localePath('/signup')}},[_vm._v(" Yeni Üyelik ")]),_vm._v("\n          oluşturun.\n        ")],1)]):_vm._e()])],1):_vm._e(),_vm._ssrNode(" "),_c('a-drawer',{directives:[{name:"show",rawName:"v-show",value:(_vm.containerState),expression:"containerState"}],attrs:{"placement":"bottom","get-container":false,"closable":false,"visible":_vm.containerState,"wrap-style":{ position: 'absolute' },"header-style":{
      backgroundColor: '#1E2025',
      color: '#ffffff',
      borderBottom: '0',
      padding: '12px',
    },"body-style":{
      backgroundColor: '#1E2025',
      padding: '12px',
      height: 'fit-content',
    },"drawer-style":{ backgroundColor: '#1E2025' }},on:{"close":function($event){_vm.containerState = false}}},[_c('div',{staticClass:"drawer-header text-white Roboto-Regular",attrs:{"slot":"title"},slot:"title"},[_c('span',[_vm._v(" Emir oluştur ")]),_vm._v(" "),_c('span',[_c('a-icon',{attrs:{"type":"menu"},on:{"click":function($event){_vm.containerState = false}}}),_vm._v(" "),_c('a-icon',{attrs:{"type":"close"},on:{"click":function($event){_vm.containerState = false}}})],1)]),_vm._v(" "),_c('div',{staticClass:"drawer-content"},[_c('ActionMobile',{attrs:{"ActionType":_vm.drawerType,"UserBalance":_vm.UserBalance},on:{"update:ActionType":function($event){_vm.drawerType=$event},"update:action-type":function($event){_vm.drawerType=$event}}})],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/TradeDrawer.vue?vue&type=template&id=467e065e&scoped=true&

// EXTERNAL MODULE: ./components/Exchange/ExchangeMobile/ActionMobile.vue + 4 modules
var ActionMobile = __webpack_require__(1025);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/TradeDrawer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TradeDrawervue_type_script_lang_js_ = ({
  props: {
    UserBalance: {
      require: true,
      type: Object
    }
  },
  components: {
    ActionMobile: ActionMobile["default"]
  },

  data() {
    return {
      containerState: false,
      drawerType: 'BUY',
      showTest: false
    };
  },

  computed: {
    isLoggedIn() {
      return !!this.$cookies.get('Token');
    }

  },
  methods: {
    showDrawer(type, state) {
      this.drawerType = type;
      this.containerState = state;
      this.showTest = state; // alert(type)
    }

  }
});
// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/TradeDrawer.vue?vue&type=script&lang=js&
 /* harmony default export */ var ExchangeMobile_TradeDrawervue_type_script_lang_js_ = (TradeDrawervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/TradeDrawer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1393)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(1395)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ExchangeMobile_TradeDrawervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "467e065e",
  "7a82d988"
  
)

/* harmony default export */ var TradeDrawer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ActionMobile: __webpack_require__(1025).default})


/***/ }),

/***/ 1022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/SymbolsListMobile.vue?vue&type=template&id=134d19a0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-card',{staticClass:"mb-15 mobile-symbols border-none"},[_c('a-row',{attrs:{"type":"flex"}},[_c('a-col',{attrs:{"span":12}},[_c('div',{staticClass:"tabs-mobile"},[_c('div',{staticClass:"tab-mobile Roboto-Regular",class:_vm.isActive('BTC'),on:{"click":function($event){return _vm.setTab('BTC')}}},[_vm._v("\n          BTC\n        ")]),_vm._v(" "),_c('div',{staticClass:"tab-mobile Roboto-Regular",class:_vm.isActive('ETH'),on:{"click":function($event){return _vm.setTab('ETH')}}},[_vm._v("\n          ETH\n        ")]),_vm._v(" "),_c('div',{staticClass:"tab-mobile Roboto-Regular",class:_vm.isActive('USDT'),on:{"click":function($event){return _vm.setTab('USDT')}}},[_vm._v("\n          USDT\n        ")]),_vm._v(" "),_c('div',{staticClass:"tab-mobile Roboto-Regular",class:_vm.isActive('TRY'),on:{"click":function($event){return _vm.setTab('TRY')}}},[_vm._v("\n          TRY\n        ")]),_vm._v(" "),_c('div',{staticClass:"tab-mobile Roboto-Regular",class:_vm.isActive('ALL'),on:{"click":function($event){return _vm.setTab('ALL')}}},[_vm._v("\n          Tümü\n        ")]),_vm._v(" "),_c('div',{staticClass:"Roboto-Regular",class:_vm.isActive('F'),staticStyle:{"font-size":"11px"},on:{"click":function($event){return _vm.setTab('F')}}},[_c('StarIcon')],1)])])],1),_vm._v(" "),_c('a-row',{attrs:{"type":"flex","align":"middle","gutter":8}},[_c('a-col',{attrs:{"span":14}},[_c('a-input',{staticClass:"symbol-search",attrs:{"placeholder":_vm.$t('placeholders_text_search')},on:{"input":_vm.onSearch},model:{value:(_vm.searchValue),callback:function ($$v) {_vm.searchValue=$$v},expression:"searchValue"}})],1),_vm._v(" "),_c('a-col',{attrs:{"span":10}},[_c('a-radio',{on:{"click":function($event){_vm.changeValue = !_vm.changeValue}},model:{value:(_vm.changeValue),callback:function ($$v) {_vm.changeValue=$$v},expression:"changeValue"}},[_c('span',{staticClass:"Roboto-Regular",staticStyle:{"color":"#9199a3"}},[_vm._v("\n          "+_vm._s(_vm.$t('symbol_list_mobile_text_change'))+"\n        ")])])],1)],1),_vm._v(" "),_c('a-row',[_c('a-col',{attrs:{"span":24}},[_c('div',{staticClass:"exchange-table mt-15"},[_c('div',{staticClass:"exchange-table__head"},[_c('div',{staticClass:"exchange-table__head-item Roboto-Regular"},[_vm._v("\n            "+_vm._s(_vm.$t('symbol_list_mobile_text_pair'))+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"exchange-table__head-item Roboto-Regular"},[_vm._v("\n            "+_vm._s(_vm.$t('symbol_list_mobile_text_last_price'))+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"exchange-table__head-item Roboto-Regular clickable",on:{"click":function($event){return _vm.sortByChangePercentage()}}},[_vm._v("\n            "+_vm._s(_vm.$t('symbol_list_mobile_text_changing'))+"\n          ")])]),_vm._v(" "),_c('div',{staticClass:"table-overlay"},[_c('table',{staticStyle:{"table-layout":"fixed"}},[_c('tbody',{staticClass:"Roboto-Medium"},_vm._l((_vm.tabFilteredSymbolList),function(item,index){return _c('tr',{key:index,staticClass:"cursor-pointer",on:{"click":function($event){return _vm.selectSymbol(item)}}},[_c('td',[_c('div',[(_vm.isLoggedIn)?_c('div',{staticClass:"c-pointer",on:{"click":function($event){$event.stopPropagation();return _vm.setFavSymbol(item)}}},[(item.Favorite)?_c('StarIcon'):_c('StarOutlineIcon')],1):_vm._e(),_vm._v(" "),_c('n-link',{staticClass:"asset-link",attrs:{"to":("/trade/" + (item.BaseAsset) + "_" + (item.QuatoAsset))}},[_c('span',{staticClass:"Roboto-Regular",staticStyle:{"color":"#ffffff"}},[_vm._v("\n                        "+_vm._s(item.BaseAsset)+"\n                      ")]),_vm._v(" "),_c('span',{staticClass:"Roboto-Regular",staticStyle:{"color":"#929aa6"}},[_vm._v("\n                        /"+_vm._s(item.QuatoAsset)+"\n                      ")])])],1)]),_vm._v(" "),_c('td',[_c('span',{staticStyle:{"color":"#ffffff"}},[_vm._v("\n                    "+_vm._s(_vm.formatPrice(item.LastPrice))+"\n                  ")])]),_vm._v(" "),_c('td',{class:("text-" + (String(item.ChangePercent24H)[0] == '-'
                      ? 'danger'
                      : 'success'))},[_vm._v("\n                  %"+_vm._s(item.ChangePercent24H.toFixed(2))+"\n                ")])])}),0)])])])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/SymbolsListMobile.vue?vue&type=template&id=134d19a0&

// EXTERNAL MODULE: external "fuse.js"
var external_fuse_js_ = __webpack_require__(137);
var external_fuse_js_default = /*#__PURE__*/__webpack_require__.n(external_fuse_js_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./assets/icons/star.svg?inline
var starinline = __webpack_require__(987);
var starinline_default = /*#__PURE__*/__webpack_require__.n(starinline);

// EXTERNAL MODULE: ./assets/icons/star-outline.svg?inline
var star_outlineinline = __webpack_require__(988);
var star_outlineinline_default = /*#__PURE__*/__webpack_require__.n(star_outlineinline);

// EXTERNAL MODULE: ./Mixins/formatter.js
var formatter = __webpack_require__(691);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/SymbolsListMobile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const defaultSearchOptions = {
  keys: ['BaseAsset', 'QuatoAsset']
};
/* harmony default export */ var SymbolsListMobilevue_type_script_lang_js_ = ({
  mixins: [formatter["a" /* default */]],
  components: {
    StarIcon: starinline_default.a,
    StarOutlineIcon: star_outlineinline_default.a
  },

  data() {
    return {
      tabs: ['F', 'ETH', 'BTC', 'USDT', 'TRY', 'ALL'],
      activeTab: 'ALL',
      tabSymbolList: [],
      tabFilteredSymbolList: [],
      searchValue: '',
      sortBy: '',
      changeValue: false
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      getTheme: 'common/getTheme',
      getSymbols: 'symbol/getSymbols'
    }),

    isLoggedIn() {
      return !!this.$cookies.get('Token');
    }

  },

  mounted() {
    const symbolTab = localStorage.getItem('symbolTab');

    if (!!symbolTab) {
      this.activeTab = symbolTab;
    }

    const symbolSearch = localStorage.getItem('symbolSearch');

    if (!!symbolSearch) {
      this.searchValue = symbolSearch;
    }

    this.setFilteredList();
  },

  watch: {
    activeTab(val) {
      this.setFilteredList();
      this.search(this.searchValue, {
        threshold: 0
      });
      localStorage.setItem('symbolTab', val);
    },

    changeValue() {
      this.sortByChangePercentage();
    }

  },
  methods: {
    setTab(v) {
      this.activeTab = v;
    },

    isActive(v) {
      return v === this.activeTab && 'active';
    },

    onSearch(e) {
      localStorage.setItem('symbolSearch', e.target.value);
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.search(e.target.value, {
          threshold: 0
        });
      }, 300);
    },

    selectSymbol(item) {
      this.$store.dispatch('symbol/updateData', [item.BaseAsset, item.QuatoAsset]);
      this.$store.commit('transactions/updateActionPrice', item.LastPrice);
    },

    setFilteredList() {
      const {
        activeTab
      } = this;

      if (activeTab === 'ALL') {
        this.tabFilteredSymbolList = this.getSymbols;
        this.tabSymbolList = this.getSymbols;
        return;
      }

      if (activeTab === 'F') {
        const filtered = this.getSymbols.filter(s => s.Favorite);
        this.tabFilteredSymbolList = filtered;
        this.tabSymbolList = filtered;
        return;
      }

      const fuse = new external_fuse_js_default.a(this.getSymbols, { ...defaultSearchOptions,
        useExtendedSearch: true,
        threshold: 0
      });
      const result = fuse.search(`=${activeTab}`);
      const newData = this.getWithoutWrapList(result);
      this.tabSymbolList = newData;
      this.tabFilteredSymbolList = newData;
    },

    search(value = '', extraOptions) {
      if (!value.length) return this.tabFilteredSymbolList = this.tabSymbolList;
      const fuse = new external_fuse_js_default.a(this.tabSymbolList, { ...defaultSearchOptions,
        ...extraOptions
      });
      const result = fuse.search(`${value}`);
      const newData = this.getWithoutWrapList(result);
      this.tabFilteredSymbolList = newData;
    },

    getWithoutWrapList(result) {
      return result.map(v => v.item);
    },

    async setFavSymbol(item) {
      const {
        $axios,
        $store,
        $cookies,
        $config: {
          FINANCE_API_URL
        }
      } = this;
      let authHeaders = {
        Authorization: 'Bearer ' + $cookies.get('Token')
      };
      const response = await $axios.post(FINANCE_API_URL + '/ToggleFavoriteSymbol', {
        Symbol: item.Symbol
      }, {
        headers: authHeaders
      });

      if (response.data.Success) {
        const symbolsResponse = await $axios.get(FINANCE_API_URL + '/GetSymbols', {
          headers: authHeaders
        });

        if (symbolsResponse.data.Success) {
          $store.commit('symbol/updateList', symbolsResponse.data.SymbolList);
          this.setFilteredList();
        }
      }
    },

    sortByChangePercentage() {
      let compareFn;

      if (this.tabFilteredSymbolList[0].ChangePercent24H > this.tabFilteredSymbolList[1].ChangePercent24H) {
        compareFn = (a, b) => a.ChangePercent24H - b.ChangePercent24H;
      }

      if (this.tabFilteredSymbolList[0].ChangePercent24H < this.tabFilteredSymbolList[1].ChangePercent24H) {
        compareFn = (a, b) => b.ChangePercent24H - a.ChangePercent24H;
      }

      this.tabFilteredSymbolList = this.tabFilteredSymbolList.slice().sort(compareFn);
    }

  }
});
// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/SymbolsListMobile.vue?vue&type=script&lang=js&
 /* harmony default export */ var ExchangeMobile_SymbolsListMobilevue_type_script_lang_js_ = (SymbolsListMobilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/SymbolsListMobile.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1375)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ExchangeMobile_SymbolsListMobilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5f2dd8a2"
  
)

/* harmony default export */ var SymbolsListMobile = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/TransactionTypeCardMobile.vue?vue&type=template&id=5208c8af&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-row',{attrs:{"gutter":6}},[_c('a-col',{attrs:{"span":6}},[_c('div',{staticClass:"typeItem",class:{active: _vm.activeTab === 1},on:{"click":function($event){return _vm.setTab(1)}}},[_c('img',{staticClass:"img-fluid",attrs:{"src":__webpack_require__(989),"alt":""}})])]),_vm._v(" "),_c('a-col',{attrs:{"span":6}},[_c('div',{staticClass:"typeItem",class:{active: _vm.activeTab === 2},on:{"click":function($event){return _vm.setTab(2)}}},[_c('img',{staticClass:"img-fluid",attrs:{"src":__webpack_require__(990),"alt":""}})])]),_vm._v(" "),_c('a-col',{attrs:{"span":6}},[_c('div',{staticClass:"typeItem",class:{active: _vm.activeTab === 3},on:{"click":function($event){return _vm.setTab(3)}}},[_c('img',{staticClass:"img-fluid",attrs:{"src":__webpack_require__(991),"alt":""}})])]),_vm._v(" "),_c('a-col',{attrs:{"span":6}},[_c('a-select',{staticClass:"w-100",attrs:{"dropdownClassName":"dark-select"}},[_c('a-select-option',{attrs:{"value":"0.01"}},[_vm._v(" 0.01")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/TransactionTypeCardMobile.vue?vue&type=template&id=5208c8af&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/TransactionTypeCardMobile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TransactionTypeCardMobilevue_type_script_lang_js_ = ({
  props: {
    activeTab: {
      default: 1,
      type: Number
    }
  },
  methods: {
    setTab(i) {
      this.$emit('change', i);
    }

  }
});
// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/TransactionTypeCardMobile.vue?vue&type=script&lang=js&
 /* harmony default export */ var ExchangeMobile_TransactionTypeCardMobilevue_type_script_lang_js_ = (TransactionTypeCardMobilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/TransactionTypeCardMobile.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1383)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ExchangeMobile_TransactionTypeCardMobilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "dedc9f9e"
  
)

/* harmony default export */ var TransactionTypeCardMobile = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/TransactionMobile.vue?vue&type=template&id=c65cbc20&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"transaction-mobile-wrapper w-100"},[_vm._ssrNode("<table class=\"w-100 transactions-table Roboto-Regular\" data-v-c65cbc20><thead class=\"Roboto-Regular\" data-v-c65cbc20><tr class=\"transactions-table-header\" data-v-c65cbc20><th class=\"text-left font-normal\" data-v-c65cbc20>Fiyat</th> <th class=\"text-right font-normal\" data-v-c65cbc20>Miktar</th> "+((_vm.showTotal)?("<th class=\"text-right font-normal\" data-v-c65cbc20>Toplam</th>"):"<!---->")+"</tr></thead> <tbody class=\"Roboto-Regular\" data-v-c65cbc20>"+(_vm._ssrList((_vm.list),function(item,index){return ("<tr class=\"cursor-pointer\" data-v-c65cbc20><td"+(_vm._ssrClass("text-left font-normal",_vm.valueColClass))+" data-v-c65cbc20>"+_vm._ssrEscape("\n          "+_vm._s(_vm.formatPrice(item[0]))+"\n        ")+"</td> <td class=\"text-white text-right font-normal\" data-v-c65cbc20>"+_vm._ssrEscape("\n          "+_vm._s(_vm.formatAmount(item[1]))+"\n        ")+"</td> "+((_vm.showTotal)?("<td class=\"text-right text-white font-normal\" data-v-c65cbc20>"+_vm._ssrEscape("\n          "+_vm._s(_vm.formatTotal(item[0] * item[1]))+"\n        ")+"</td>"):"<!---->")+"</tr>")}))+"</tbody></table>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/TransactionMobile.vue?vue&type=template&id=c65cbc20&scoped=true&

// EXTERNAL MODULE: ./Mixins/formatter.js
var formatter = __webpack_require__(691);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/TransactionMobile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TransactionMobilevue_type_script_lang_js_ = ({
  mixins: [formatter["a" /* default */]],
  props: {
    list: {
      default: () => [],
      type: Array
    },
    valueColClass: {
      type: String,
      default: ''
    },
    limit: {
      type: Number,
      default: 9
    },
    styles: {
      type: Object,
      required: false
    },
    showTotal: {
      type: Boolean,
      required: false,
      defaut: false
    }
  },
  methods: {
    updateActionPrice(v) {
      this.$store.commit('transactions/updateActionPrice', v);
    }

  },
  computed: {
    listLimit() {
      const {
        list
      } = this;
      if (list.length === 0) return;
      return new Array(this.limit).fill(0).map((v, i) => {
        return list[i];
      });
    }

  }
});
// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/TransactionMobile.vue?vue&type=script&lang=js&
 /* harmony default export */ var ExchangeMobile_TransactionMobilevue_type_script_lang_js_ = (TransactionMobilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/TransactionMobile.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1385)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ExchangeMobile_TransactionMobilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c65cbc20",
  "4b64fc27"
  
)

/* harmony default export */ var TransactionMobile = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/ActionMobile.vue?vue&type=template&id=5caa86f9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-row',{attrs:{"gutter":[8, 8]}},[_c('a-col',[_c('a-button-group',{staticClass:"w-100",attrs:{"size":"large"}},[_c('a-button',{staticClass:"w-50 action-mobile-header-button",class:{isBuy: _vm.ActionType === 'BUY' },on:{"click":function($event){_vm.ActionType = 'BUY'}}},[_vm._v("AL")]),_vm._v(" "),_c('a-button',{staticClass:"w-50 action-mobile-header-button",class:{isSell: _vm.ActionType === 'SELL' },on:{"click":function($event){_vm.ActionType = 'SELL'}}},[_vm._v("SAT")])],1)],1),_vm._v(" "),_c('a-col',[_c('a-tabs',{attrs:{"forceRender":true,"tabBarStyle":{borderBottom: '1px solid #2B2E35'}},model:{value:(_vm.actionActiveKey),callback:function ($$v) {_vm.actionActiveKey=$$v},expression:"actionActiveKey"}},_vm._l((_vm.actionTabs),function(act,index){return _c('a-tab-pane',{key:act.key,staticClass:"Roboto-Medium"},[(act.key === 'Limit')?_c('span',{class:{
          'tab-label-action-active': act.key === _vm.actionActiveKey,
          'tab-label-action-inactive': act.key !== _vm.actionActiveKey,
        },attrs:{"slot":"tab"},slot:"tab"},[_vm._v("\n           Limit\n        ")]):_vm._e(),_vm._v(" "),(act.key === 'Market')?_c('span',{class:{
            'tab-label-action-active': act.key === _vm.actionActiveKey,
            'tab-label-action-inactive': act.key !== _vm.actionActiveKey,
          },attrs:{"slot":"tab"},slot:"tab"},[_vm._v("\n          Market\n        ")]):_vm._e(),_vm._v(" "),(act.key === 'Stop-Limit')?_c('span',{class:{
            'tab-label-action-active': act.key === _vm.actionActiveKey,
            'tab-label-action-inactive': act.key !== _vm.actionActiveKey,
          },attrs:{"slot":"tab"},slot:"tab"},[_vm._v("\n          Stop-Limit\n        ")]):_vm._e(),_vm._v(" "),(_vm.actionActiveKey === 'Limit')?_c('div',[_c('ActionTabMobile',{attrs:{"ActionType":_vm.ActionType,"UserBalance":_vm.UserBalance,"Type":"LIMIT"},on:{"tradeUpdate":function (payload) { return _vm.$emit('tradeUpdate', payload); }}})],1):_vm._e(),_vm._v(" "),(_vm.actionActiveKey === 'Market')?_c('div',[_c('ActionTabMobile',{attrs:{"ActionType":_vm.ActionType,"UserBalance":_vm.UserBalance,"Type":"MARKET","is-total-show":false},on:{"tradeUpdate":function (payload) { return _vm.$emit('tradeUpdate', payload); }}})],1):_vm._e(),_vm._v(" "),(_vm.actionActiveKey === 'Stop-Limit')?_c('div',[_c('ActionTabMobile',{attrs:{"ActionType":_vm.ActionType,"UserBalance":_vm.UserBalance,"Type":"STOP-LIMIT","show-stop":true,"show-limit":false,"show-price":true},on:{"tradeUpdate":function (payload) { return _vm.$emit('tradeUpdate', payload); }}})],1):_vm._e()])}),1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/ActionMobile.vue?vue&type=template&id=5caa86f9&scoped=true&

// EXTERNAL MODULE: ./components/Exchange/ExchangeMobile/ActionTabMobile.vue + 4 modules
var ActionTabMobile = __webpack_require__(1026);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/ActionMobile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ActionMobilevue_type_script_lang_js_ = ({
  props: {
    UserBalance: {
      required: true,
      type: Object
    },
    ActionType: {
      required: true,
      type: String,
      default: 'BUY'
    }
  },
  components: {
    ActionTabMobile: ActionTabMobile["default"]
  },

  data() {
    return {
      actionTabs: [{
        key: 'Limit',
        scopedSlots: {
          tab: 'titleSlot'
        }
      }, {
        key: 'Market',
        scopedSlots: {
          tab: 'titleSlot'
        }
      }, {
        key: 'Stop-Limit',
        scopedSlots: {
          tab: 'titleSlot'
        }
      }],
      actionActiveKey: 'Limit'
    };
  }

});
// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/ActionMobile.vue?vue&type=script&lang=js&
 /* harmony default export */ var ExchangeMobile_ActionMobilevue_type_script_lang_js_ = (ActionMobilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/ActionMobile.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1391)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ExchangeMobile_ActionMobilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5caa86f9",
  "646b817e"
  
)

/* harmony default export */ var ActionMobile = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ActionTabMobile: __webpack_require__(1026).default})


/***/ }),

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/ActionTabMobile.vue?vue&type=template&id=23b644e7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.err.show)?_c('a-alert',{staticStyle:{"margin":"10px auto"},attrs:{"description":_vm.err.msg,"type":"error","closable":""},on:{"close":function (e) { return (_vm.err.show = false); }}}):_vm._e(),_vm._ssrNode(" "),(_vm.ActionType === 'BUY')?_c('a-card',{staticClass:"trade-form-card-mobile h-100 w-100 border-none",attrs:{"body-style":{ padding: '0' }}},[_c('div',{staticClass:"trade-form-card-mobile-head"},[_c('img',{staticClass:"trade-form-card-mobile-head-item",attrs:{"src":__webpack_require__(148),"alt":"wallet"}}),_vm._v(" "),_c('span',{staticClass:"trade-form-card-mobile-head-item Roboto-Regular"},[_vm._v("\n        "+_vm._s(_vm.getSymbolData.QuatoAssetBalance)+"\n        "+_vm._s(_vm.getSymbolData.QuatoAsset)+"\n      ")])]),_vm._v(" "),_c('div',{staticClass:"trade-form-card-mobile-content"},[_c('a-row',{attrs:{"gutter":[6, 6]}},[_c('a-col',[(_vm.ShowStop)?_c('a-input',{staticClass:"Roboto-Regular w-100 trade-form-card-mobile-input",attrs:{"placeholder":_vm.$t('placeholders_text_stop')},model:{value:(_vm.buyForm.Stop),callback:function ($$v) {_vm.$set(_vm.buyForm, "Stop", $$v)},expression:"buyForm.Stop"}}):_vm._e()],1),_vm._v(" "),_c('a-col',[(_vm.ShowLimit)?_c('a-input',{staticClass:"Roboto-Regular w-100 trade-form-card-mobile-input",attrs:{"placeholder":_vm.$t('placeholders_text_limit')},model:{value:(_vm.buyForm.Limit),callback:function ($$v) {_vm.$set(_vm.buyForm, "Limit", $$v)},expression:"buyForm.Limit"}}):_vm._e()],1),_vm._v(" "),_c('a-col',[(_vm.ShowPrice)?_c('a-input',{staticClass:"Roboto-Regular w-100 trade-form-card-mobile-input",attrs:{"disabled":_vm.Type === 'MARKET',"placeholder":_vm.$t('placeholders_text_price')},model:{value:(_vm.buyForm.Price),callback:function ($$v) {_vm.$set(_vm.buyForm, "Price", $$v)},expression:"buyForm.Price"}}):_vm._e()],1),_vm._v(" "),_c('a-col',[_c('a-input',{staticClass:"Roboto-Regular w-100 trade-form-card-mobile-input",attrs:{"placeholder":_vm.$t('placeholders_text_amount')},model:{value:(_vm.buyForm.Quantity),callback:function ($$v) {_vm.$set(_vm.buyForm, "Quantity", $$v)},expression:"buyForm.Quantity"}})],1),_vm._v(" "),_c('a-col',[_c('a-row',{attrs:{"gutter":6}},[_c('a-col',{attrs:{"span":6}},[_c('a-button',{staticClass:"trade-form-card-button",attrs:{"block":""},on:{"click":function($event){return _vm.calculatePercent(25, 'BUY')}}},[_vm._v("25%")])],1),_vm._v(" "),_c('a-col',{attrs:{"span":6}},[_c('a-button',{staticClass:"trade-form-card-button",attrs:{"block":""},on:{"click":function($event){return _vm.calculatePercent(50, 'BUY')}}},[_vm._v("50%")])],1),_vm._v(" "),_c('a-col',{attrs:{"span":6}},[_c('a-button',{staticClass:"trade-form-card-button",attrs:{"block":""},on:{"click":function($event){return _vm.calculatePercent(75, 'BUY')}}},[_vm._v("75%")])],1),_vm._v(" "),_c('a-col',{attrs:{"span":6}},[_c('a-button',{staticClass:"trade-form-card-button",attrs:{"block":""},on:{"click":function($event){return _vm.calculatePercent(100, 'BUY')}}},[_vm._v("100%")])],1)],1)],1),_vm._v(" "),_c('a-col',[(_vm.isTotalShow)?_c('a-input',{staticClass:"Roboto-Regular w-100 trade-form-card-mobile-input",attrs:{"placeholder":_vm.$t('placeholders_text_total')},model:{value:(_vm.buyForm.Total),callback:function ($$v) {_vm.$set(_vm.buyForm, "Total", $$v)},expression:"buyForm.Total"}}):_vm._e()],1),_vm._v(" "),_c('a-col',[(_vm.isLoggedIn)?_c('a-button',{staticClass:"trade-form-card-button isBuy w-100",staticStyle:{"margin":"10px auto"},attrs:{"size":"large"},on:{"click":function($event){return _vm.trade('BUY')}}},[_vm._v("\n            "+_vm._s(_vm.$t('text_buy_asset', { asset: _vm.getSymbolData.BaseAsset }))+"\n            ")]):_vm._e()],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"trade-form-card-mobile-footer"},[(!_vm.isLoggedIn)?_c('div',{staticClass:"login-warning"},[_c('div',{staticClass:"text-center"},[_c('nuxt-link',{attrs:{"to":_vm.localePath('/login')}},[_vm._v("\n            "+_vm._s(_vm.$t('exchange_text_login'))+"\n          ")]),_vm._v("\n          "+_vm._s(_vm.$t('exchange_text_or'))+"\n          "),_c('nuxt-link',{attrs:{"to":_vm.localePath('/signup')}},[_vm._v("\n            "+_vm._s(_vm.$t('exchange_text_signup'))+"\n          ")]),_vm._v("\n          "+_vm._s(_vm.$t('exchange_text_create'))+"\n        ")],1)]):_vm._e()])]):_vm._e(),_vm._ssrNode(" "),(_vm.ActionType === 'SELL')?_c('a-card',{staticClass:"trade-form-card-mobile h-100 w-100 border-none",attrs:{"body-style":{ padding: '0' }}},[_c('div',{staticClass:"trade-form-card-mobile-head"},[_c('img',{staticClass:"trade-form-card-mobile-head-item",attrs:{"src":__webpack_require__(148),"alt":"wallet"}}),_vm._v(" "),_c('span',{staticClass:"trade-form-card-mobile-head-item Roboto-Regular"},[_vm._v("\n        "+_vm._s(_vm.getSymbolData.BaseAssetBalance)+"\n        "+_vm._s(_vm.getSymbolData.QuatoAsset)+"\n      ")])]),_vm._v(" "),_c('div',{staticClass:"trade-form-card-mobile-content"},[_c('a-row',{attrs:{"gutter":[6, 6]}},[_c('a-col',[(_vm.ShowStop)?_c('a-input',{staticClass:"Roboto-Regular w-100 trade-form-card-mobile-input",attrs:{"placeholder":_vm.$t('placeholders_text_stop')},model:{value:(_vm.sellForm.Stop),callback:function ($$v) {_vm.$set(_vm.sellForm, "Stop", $$v)},expression:"sellForm.Stop"}}):_vm._e()],1),_vm._v(" "),_c('a-col',[(_vm.ShowLimit)?_c('a-input',{staticClass:"Roboto-Regular w-100 trade-form-card-mobile-input",attrs:{"placeholder":_vm.$t('placeholders_text_limit')},model:{value:(_vm.sellForm.Limit),callback:function ($$v) {_vm.$set(_vm.sellForm, "Limit", $$v)},expression:"sellForm.Limit"}}):_vm._e()],1),_vm._v(" "),_c('a-col',[(_vm.ShowPrice)?_c('a-input',{staticClass:"Roboto-Regular w-100 trade-form-card-mobile-input",attrs:{"placeholder":_vm.$t('placeholders_text_price'),"disabled":_vm.Type === 'MARKET'},model:{value:(_vm.sellForm.Price),callback:function ($$v) {_vm.$set(_vm.sellForm, "Price", $$v)},expression:"sellForm.Price"}}):_vm._e()],1),_vm._v(" "),_c('a-col',[_c('a-input',{staticClass:"Roboto-Regular w-100 trade-form-card-mobile-input",attrs:{"placeholder":_vm.$t('placeholders_text_amount')},model:{value:(_vm.sellForm.Quantity),callback:function ($$v) {_vm.$set(_vm.sellForm, "Quantity", $$v)},expression:"sellForm.Quantity"}})],1),_vm._v(" "),_c('a-col',[_c('a-row',{attrs:{"gutter":6}},[_c('a-col',{attrs:{"span":6}},[_c('a-button',{staticClass:"trade-form-card-button",attrs:{"block":""},on:{"click":function($event){return _vm.calculatePercent(25, 'SELL')}}},[_vm._v("25%")])],1),_vm._v(" "),_c('a-col',{attrs:{"span":6}},[_c('a-button',{staticClass:"trade-form-card-button",attrs:{"block":""},on:{"click":function($event){return _vm.calculatePercent(50, 'SELL')}}},[_vm._v("50%")])],1),_vm._v(" "),_c('a-col',{attrs:{"span":6}},[_c('a-button',{staticClass:"trade-form-card-button",attrs:{"block":""},on:{"click":function($event){return _vm.calculatePercent(75, 'SELL')}}},[_vm._v("75%")])],1),_vm._v(" "),_c('a-col',{attrs:{"span":6}},[_c('a-button',{staticClass:"trade-form-card-button",attrs:{"block":""},on:{"click":function($event){return _vm.calculatePercent(100, 'SELL')}}},[_vm._v("100%")])],1)],1)],1),_vm._v(" "),_c('a-col',[(_vm.isTotalShow)?_c('a-input',{staticClass:"Roboto-Regular w-100 trade-form-card-mobile-input",attrs:{"placeholder":_vm.$t('placeholders_text_total')},model:{value:(_vm.sellForm.Total),callback:function ($$v) {_vm.$set(_vm.sellForm, "Total", $$v)},expression:"sellForm.Total"}}):_vm._e()],1),_vm._v(" "),_c('a-col',[(_vm.isLoggedIn)?_c('a-button',{staticClass:"trade-form-card-button isSell w-100",staticStyle:{"margin":"10px auto"},attrs:{"size":"large"},on:{"click":function($event){return _vm.trade('SELL')}}},[_vm._v(_vm._s(_vm.$t('text_sell_asset', { asset: _vm.getSymbolData.BaseAsset }))+"\n          ")]):_vm._e()],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"trade-form-card-mobile-footer"},[(!_vm.isLoggedIn)?_c('div',{staticClass:"login-warning"},[_c('div',{staticClass:"text-center"},[_c('nuxt-link',{attrs:{"to":_vm.localePath('/login')}},[_vm._v("\n            "+_vm._s(_vm.$t('exchange_text_login'))+"\n          ")]),_vm._v("\n          "+_vm._s(_vm.$t('exchange_text_or'))+"\n          "),_c('nuxt-link',{attrs:{"to":_vm.localePath('/signup')}},[_vm._v("\n            "+_vm._s(_vm.$t('exchange_text_signup'))+"\n          ")]),_vm._v("\n          "+_vm._s(_vm.$t('exchange_text_create'))+"\n        ")],1)]):_vm._e()])]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/ActionTabMobile.vue?vue&type=template&id=23b644e7&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/ExchangeMobile/ActionTabMobile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ActionTabMobilevue_type_script_lang_js_ = ({
  props: {
    UserBalance: {
      require: true,
      type: Object
    },
    isTotalShow: {
      type: Boolean,
      default: true
    },
    ShowPrice: {
      type: Boolean,
      default: true
    },
    ShowStop: {
      type: Boolean,
      default: false
    },
    ShowLimit: {
      type: Boolean,
      default: false
    },
    Type: {
      type: String,
      required: true
    },
    ActionType: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      buyForm: {
        Stop: '',
        Price: '',
        Quantity: '',
        Total: ''
      },
      sellForm: {
        Stop: '',
        Price: '',
        Quantity: '',
        Total: ''
      },
      err: {
        show: false,
        msg: ''
      }
    };
  },

  mounted() {
    const {
      LastPrice
    } = this.getSymbolData;
    this.buyForm.Price = this.sellForm.Price = LastPrice;
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      getSymbolData: 'symbol/getSymbolData',
      getActionPrice: 'transactions/getActionPrice'
    }),

    getTotalBalanceBySymbol() {
      if (this.UserBalance) {
        const {
          BaseAsset,
          QuatoAsset
        } = this.getSymbolData;

        if (QuatoAsset === 'TRY') {
          let index = this.UserBalance.UserFiatBalance.findIndex(item => item.asset === BaseAsset);
          return this.UserBalance.UserFiatBalance[index]['TotalTRY'];
        } else {
          let index = this.UserBalance.UserSpotBalance.findIndex(item => item.asset === BaseAsset);
          return this.UserBalance.UserSpotBalance[index]['TotalUSD'];
        }
      } else {
        return 0;
      }
    },

    isLoggedIn() {
      return !!this.$cookies.get('Token');
    }

  },
  methods: {
    async trade(side) {
      try {
        const {
          Symbol,
          LastPrice
        } = this.getSymbolData;
        let payload;

        if (side === 'BUY') {
          payload = { ...this.buyForm,
            Type: this.Type,
            Side: side,
            Symbol: Symbol
          };
        }

        if (side === 'SELL') {
          payload = { ...this.sellForm,
            Type: this.Type,
            Side: side,
            Symbol: Symbol
          };
        }

        const {
          $axios,
          $cookies,
          $config: {
            FINANCE_API_URL
          }
        } = this;
        const authHeaders = {
          Authorization: 'Bearer ' + $cookies.get('Token')
        };
        const response = await $axios.post(FINANCE_API_URL + '/Trade', payload, {
          headers: authHeaders
        });

        if (response.data.Success) {
          const {
            Order
          } = response.data;

          if (Order.status !== 'FILLED') {
            this.$emit('tradeUpdate', Order);
          }
        }
      } catch (e) {
        if ('response' in e) {
          const {
            Message
          } = e.response.data;
          this.err.show = true;
          this.err.msg = Message;
        }
      }
    },

    calculatePercent(percent, type) {
      const {
        QuatoAssetBalance,
        BaseAssetBalance
      } = this.getSymbolData;

      if (type === 'BUY') {
        this.buyForm.Total = percent / 100 * QuatoAssetBalance;
        this.buyForm.Quantity = this.buyForm.Total / this.buyForm.Price;
      }

      if (type === 'SELL') {
        this.sellForm.Quantity = percent / 100 * BaseAssetBalance;
        this.sellForm.Total = this.sellForm.Quantity * this.sellForm.Price;
      }
    },

    getActiveItem(percent, type) {
      if (type === 'BUY') {
        const {
          QuatoAssetBalance
        } = this.getSymbolData;

        if (QuatoAssetBalance) {
          return this.buyForm.Total === percent / 100 * QuatoAssetBalance;
        } else {
          return false;
        }
      }

      if (type === 'SELL') {
        const {
          BaseAssetBalance
        } = this.getSymbolData;

        if (BaseAssetBalance) {
          return this.sellForm.Total === percent / 100 * BaseAssetBalance;
        } else {
          return false;
        }
      }
    }

  },
  watch: {
    'buyForm.Price': {
      handler(Price) {
        this.buyForm.Total = Price * this.buyForm.Quantity;
      }

    },
    'buyForm.Quantity': {
      handler(Quantity) {
        const {
          SymbolStepSize
        } = this.getSymbolData;
        this.buyForm.Quantity = parseFloat(Quantity).toFixed(SymbolStepSize);

        if (this.buyForm.Quantity !== Quantity) {
          this.buyForm.Total = this.buyForm.Price * Quantity;
        }
      }

    },
    'buyForm.Total': {
      handler(Total) {
        if (this.buyForm.Price) {
          const {
            SymbolStepSize
          } = this.getSymbolData;
          this.buyForm.Quantity = (Total / this.buyForm.Price).toFixed(SymbolStepSize);
        }
      }

    },
    'sellForm.Price': {
      handler(Price) {
        this.sellForm.Total = Price * this.sellForm.Quantity;
      }

    },
    'sellForm.Quantity': {
      handler(Quantity) {
        const {
          SymbolStepSize
        } = this.getSymbolData;
        this.sellForm.Quantity = parseFloat(Quantity).toFixed(SymbolStepSize);

        if (this.sellForm.Quantity !== Quantity) {
          this.sellForm.Total = this.sellForm.Price * Quantity;
        }
      }

    },
    'sellForm.Total': {
      handler(Total) {
        if (this.sellForm.Price) {
          const {
            SymbolStepSize
          } = this.getSymbolData;
          this.sellForm.Quantity = (Total / this.sellForm.Price).toFixed(SymbolStepSize);
        }
      }

    },

    getActionPrice(v) {
      this.buyForm.Price = v;
      this.sellForm.Price = v;
    }

  }
});
// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/ActionTabMobile.vue?vue&type=script&lang=js&
 /* harmony default export */ var ExchangeMobile_ActionTabMobilevue_type_script_lang_js_ = (ActionTabMobilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/ExchangeMobile/ActionTabMobile.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1389)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ExchangeMobile_ActionTabMobilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "23b644e7",
  "08bcf948"
  
)

/* harmony default export */ var ActionTabMobile = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusBar_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(919);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusBar_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusBar_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusBar_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusBar_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusBar_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1354:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".status-bar{width:100%;background:var(--status-bar-bg);height:80px;padding:12px 0}.status-bar-dark .status-bar-theme-icon *{color:#fff}.status-bar .status-bar-theme-icon *{fill:var(--text-color)}.status-bar-container{height:100%}.status-bar-container .status-col{display:flex;justify-content:space-between;flex-direction:column}.status-bar-container .status-col .currency-title{color:var(--status-bar-currency-title-color);font-size:1.65rem;font-weight:400;margin:0;padding-right:5px;line-height:1}.status-bar-container .status-col .currency-subtitle{color:var(--status-bar-currency-subtitle-color);margin-bottom:-4px;display:block;font-size:16px;font-weight:500}.status-bar-container .status-col .currency-text{font-size:16px;color:var(--status-bar-currency-title-color)}.status-bar-container .statistics{font-size:14px}.status-bar-container .statistics-small{font-size:11px}.status-bar-container .statistics-col{display:flex;justify-content:center;align-items:flex-end;flex-direction:column;height:100%}.status-bar-container .statistics-value{font-weight:500;height:20px;font-size:15px;color:var(--status-bar-statistics-value-color)}.status-bar-container .statistics-value-success{color:#5cb56a}.status-bar-container .statistics-value-danger{color:var(--danger-color)}.status-bar-container .statistics-label{color:var(--status-bar-statistics-label-color)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(920);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1356:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".chart-container{flex-grow:0.999;-webkit-flex-grow:0.999;margin-bottom:16px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LastTransactions_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(921);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LastTransactions_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LastTransactions_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LastTransactions_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LastTransactions_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LastTransactions_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1358:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".last-transactions-light .ant-card-head-title{color:#1ba4e8}.last-transactions .exchange-table__head{padding:10px 0 0}.last-transactions .exchange-table__head-item{color:#b1b2b2}.last-transactions .ant-card{display:flex;flex-direction:column}.last-transactions .ant-card-head{padding-left:16px}.last-transactions .ant-card-body{height:100%;padding:0 16px 16px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorites_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(922);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorites_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorites_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorites_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorites_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorites_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1360:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".favorites .exchange-table table tbody tr td:first-child{width:40%;vertical-align:middle;text-align:left;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.favorites .exchange-table table tbody tr td:first-child>div{width:100%;height:100%;display:flex;justify-content:flex-start;align-items:center}.favorites .exchange-table table tbody tr td:first-child>div svg{cursor:pointer;width:12px!important}.favorites .exchange-table table tbody tr td:first-child>div .asset-link{margin-left:6px}.favorites-dark input{color:#fff;background:#0c121e!important}.favorites .asset-link{color:var(--text-color);overflow:hidden;text-overflow:ellipsis}.favorites .tabs{display:flex;width:100%;margin-bottom:15px;border-bottom:1px solid #50c5fd}.favorites .tabs .tab{cursor:pointer;flex:1;display:flex;justify-content:center;align-items:center;padding:5px 0;font-size:11px}.favorites .tabs .tab svg{width:16px}.favorites .tabs .tab:first-child{padding-left:0}.favorites .tabs .tab.active{background:#1ba4e8;border-radius:3px 3px 0 0;color:#fff}.favorites .tabs .tab.active svg *{fill:#fff}.favorites .ant-card-body{padding:16px}.favorites .search-box svg{font-size:14px;fill:#b5b9bc!important}.favorites .search-box input{background:#efefef;border:0}.favorites .search-box input::-moz-placeholder{color:#b9b9b9}.favorites .search-box input:-ms-input-placeholder{color:#b9b9b9}.favorites .search-box input::placeholder{color:#b9b9b9}.clickable{cursor:pointer}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_style_index_0_id_164c0a6c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(923);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_style_index_0_id_164c0a6c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_style_index_0_id_164c0a6c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_style_index_0_id_164c0a6c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_style_index_0_id_164c0a6c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_style_index_0_id_164c0a6c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1362:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".open-transactions__head[data-v-164c0a6c]{height:50px;display:flex;justify-content:flex-start;align-items:center;font-size:18px;color:#1ba4e8}.open-transactions table[data-v-164c0a6c]{width:100%;position:relative}.open-transactions table thead[data-v-164c0a6c]{padding:8px 0}.open-transactions table thead th[data-v-164c0a6c]{position:-webkit-sticky;position:sticky;top:0;color:#1ba4e8;font-weight:400;font-size:16px}.open-transactions table tbody td[data-v-164c0a6c]{padding:8px 0;font-size:16px}.open-transactions .empty-data[data-v-164c0a6c]{min-height:300px;display:flex;justify-content:center;align-items:center;flex-direction:column;color:#9daeca}.open-transactions .empty-data .empty-dot-box[data-v-164c0a6c]{border:2px dashed #9caecd;width:80px;height:120px;border-radius:6px;margin-bottom:30px}.table-container[data-v-164c0a6c]{max-height:400px;overflow-y:scroll}.table-container[data-v-164c0a6c]::-webkit-scrollbar{display:none}.btn-cancel-open-order[data-v-164c0a6c]{color:var(--cancel-button-color);background-color:transparent;border:1px solid var(--cancel-button-border-color)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionTab_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(924);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionTab_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionTab_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionTab_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionTab_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionTab_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1364:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".action-card{background:var(--action-card-bg)}.action-card,.action-card input{font-size:11px}.action-card .action-col__head-title{font-size:18px}.action-card .action-col__head-value{font-size:14px}.action-card .action-col__body-item input,.action-card .action-col__body-item label{font-size:15px}.action-card .action_buttons{font-size:17px}.action-card .ant-card-body{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:48px;gap:48px;padding:38px 24px}.action-card .ant-card-body:after,.action-card .ant-card-body:before{display:none}.action-card .action-col{position:relative}.action-card .action-col:first-child:before{position:absolute;right:-24px;height:100%;width:1px;background:var(--action-card-mid-border-color);display:block;content:\"\"}.action-card .action-col__head{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}.action-card .action-col__head-title{margin:0;color:var(--action-card-heading-color)}.action-card .action-col__head-value{color:#b5b9bc}.action-card .action-col__head div:last-child img{margin-right:5px}.action-card .action-col__body{margin-bottom:40px}.action-card .action-col__body-item{display:flex;align-items:center;margin-bottom:10px;position:relative}.action-card .action-col__body-item[data-title]:before{content:attr(data-title);display:flex;align-items:center;position:absolute;right:10px;padding-left:5px;height:calc(100% - 2px);z-index:10;color:#cfcfcf}.action-card .action-col__body-item label{width:100px}.action-card .action-col__body-item .ant-input-number{width:100%;border:none!important;background:transparent!important;height:auto}.action-card .action-col__body-item .invalid-input{border:1px solid red!important}.action-card .action-col__body-item .ant-input-number-handler-wrap{display:none}.action-card .action-col__body-item input{width:100%;color:var(--action-card-input-color);background:transparent;border:1px solid var(--action-card-input-border-color)!important;position:relative}.action-card .action-col .percentage{display:flex;width:100%;grid-gap:10px;gap:10px}.action-card .action-col .percentage__item{font-size:15px;height:26px;width:25%;border:1px solid var(--percentage-item-border-color);display:flex;justify-content:center;align-items:center;border-radius:4px;cursor:pointer}.action-card .action-col .percentage__item_active{background:#50c5fd;color:#12161d;border:none}.action-card .action-col .login-warning{border:1px solid var(--login-warning-border-color);background-color:var(--login-warning-bg);border-radius:4px;text-align:center;padding:10px;white-space:nowrap;font-weight:600;color:var(--login-warning-text-color)}.action-card .action-col .login-warning a{color:var(--login-warning-link-color)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actions_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(925);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actions_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actions_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actions_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actions_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actions_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1366:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".actions .ant-tabs .ant-tabs-content{height:100%}.actions .ant-tabs-bar{border-bottom:0}.actions .ant-tabs-bar .ant-tabs-nav{width:100%;display:flex}.actions .ant-tabs-bar .ant-tabs-nav>div{flex:1;display:flex}.actions .ant-tabs-bar .ant-tabs-nav .ant-tabs-tab{flex:1;background:transparent;color:var(--action-tabs-item-text-color);border:1px solid var(--action-tabs-item-border-color);border-radius:6px;font-family:Roboto-Medium;transition:none;text-align:center;margin-right:2px;margin-left:2px}.actions .ant-tabs-bar .ant-tabs-nav .ant-tabs-tab-active{color:#161b22;background:#90dafe;font-weight:400;border:none}.ant-tabs-ink-bar{display:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransacitonTypeCard_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(926);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransacitonTypeCard_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransacitonTypeCard_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransacitonTypeCard_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransacitonTypeCard_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransacitonTypeCard_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1368:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".types{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.types .ant-card-body{padding:1rem}.types-content{display:flex;align-items:center}.types-content__item{width:30px;height:30px;display:grid;align-items:center;justify-items:center;place-items:center;border-radius:4px;margin-right:8px;cursor:pointer}.types-content__item-active{border:1px solid #1ba4e8}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(927);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1370:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".value-card{display:flex;justify-content:center;align-items:center}.value-card .ant-card-body{padding:0 1rem}.value-card-title{color:var(--value-card-color);margin:0;height:31.5px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(928);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transactions_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1372:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cardHeight{height:100%!important}.transactions .exchange-table__head-item{color:#b1b2b2}.transactions .table-overlay{overflow-y:scroll!important;padding:0 3px}.transactions .table-overlay table tbody tr td:first-child{cursor:pointer}.transactions .ant-card{display:flex;flex-direction:column}.transactions .ant-card-body{height:100%;padding:16px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(929);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1374:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".side-transaction-container{display:flex;flex-direction:column;height:100%}.side-flex{display:flex;flex-direction:column;flex-grow:1}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SymbolsListMobile_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SymbolsListMobile_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SymbolsListMobile_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SymbolsListMobile_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SymbolsListMobile_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SymbolsListMobile_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1376:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".mobile-symbols{background:#0c121e}.mobile-symbols .exchange-table__head-item{color:#929aa6}.mobile-symbols .exchange-table table tbody tr td:first-child{width:40%;vertical-align:middle;text-align:left;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mobile-symbols .exchange-table table tbody tr td:first-child>div{width:100%;height:100%;display:flex;justify-content:flex-start;align-items:center}.mobile-symbols .exchange-table table tbody tr td:first-child>div svg{cursor:pointer;width:12px!important}.mobile-symbols .exchange-table table tbody tr td:first-child>div .asset-link{margin-left:6px}.mobile-symbols-dark input{color:#fff;background:#242931!important}.mobile-symbols .asset-link{color:var(--text-color);overflow:hidden;text-overflow:ellipsis}.mobile-symbols .tabs-mobile{display:flex;width:100%;margin-bottom:15px}.mobile-symbols .tabs-mobile .tab-mobile{cursor:pointer;flex:1;display:flex;justify-content:center;align-items:center;padding:5px 1px;font-size:11px;color:#9199a3}.mobile-symbols .tabs-mobile .tab-mobile svg{width:16px}.mobile-symbols .tabs-mobile .tab-mobile:first-child{padding-left:0}.mobile-symbols .tabs-mobile .tab-mobile.active{font-family:\"Roboto-Regular\";background:#2b3037;border-radius:2px;color:#fff}.mobile-symbols .tabs-mobile .tab-mobile.active svg *{fill:#fff}.mobile-symbols .ant-card-body{padding:16px}.mobile-symbols .search-box svg{font-size:14px;fill:#b5b9bc!important}.mobile-symbols .search-box input{background:#efefef;border:0}.mobile-symbols .search-box input::-moz-placeholder{color:#b9b9b9}.mobile-symbols .search-box input:-ms-input-placeholder{color:#b9b9b9}.mobile-symbols .search-box input::placeholder{color:#b9b9b9}.clickable{cursor:pointer}.symbol-search{box-shadow:none;outline:none;background:transparent;border-radius:0;border:none;border-bottom:1px solid #474e56;color:#9399a4;font-family:\"Roboto-Regular\"}.symbol-search:active,.symbol-search:focus{outline:none;border-bottom:1px solid #474e56}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SymbolsMobile_vue_vue_type_style_index_0_id_8185bd20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(931);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SymbolsMobile_vue_vue_type_style_index_0_id_8185bd20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SymbolsMobile_vue_vue_type_style_index_0_id_8185bd20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SymbolsMobile_vue_vue_type_style_index_0_id_8185bd20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SymbolsMobile_vue_vue_type_style_index_0_id_8185bd20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SymbolsMobile_vue_vue_type_style_index_0_id_8185bd20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1378:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".mobile-symbols-container[data-v-8185bd20]{background:#0c121e;color:#9199a3;font-family:\"Roboto-Regular\"}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusBarMobile_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(932);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusBarMobile_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusBarMobile_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusBarMobile_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusBarMobile_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusBarMobile_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1380:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".status-bar-mobile{width:100%;background:#000;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:12px 0}.status-bar-mobile-dark .status-bar-theme-icon *{color:#fff}.status-bar-mobile .status-bar-theme-icon *{fill:var(--text-color)}.status-bar-mobile-container{height:100%}.status-bar-mobile-container .status-col{display:flex;justify-content:space-between;flex-direction:column}.status-bar-mobile-container .statistics{font-size:16px}.status-bar-mobile-container .statistics-small{font-size:11px}.status-bar-mobile-container .statistics-col{display:flex;justify-content:center;align-items:flex-end;flex-direction:column;height:100%}.status-bar-mobile-container .statistics-value{font-weight:500;height:20px;font-size:12px;color:#fff}.status-bar-mobile-container .statistics-value-success{color:#5cb56a}.status-bar-mobile-container .statistics-value-danger{color:var(--danger-color)}.status-bar-mobile-container .statistics-label{color:var(--status-bar-statistics-label-color)}.currency-title{color:#fff;font-size:12px;padding-right:5px}.currency-last-price{font-size:18px;color:#56bd7c}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTabsMobile_vue_vue_type_style_index_0_id_612c223c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(933);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTabsMobile_vue_vue_type_style_index_0_id_612c223c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTabsMobile_vue_vue_type_style_index_0_id_612c223c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTabsMobile_vue_vue_type_style_index_0_id_612c223c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTabsMobile_vue_vue_type_style_index_0_id_612c223c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTabsMobile_vue_vue_type_style_index_0_id_612c223c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1382:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".order-list-container[data-v-612c223c]{max-height:500px;overflow-y:scroll}.order-list-container[data-v-612c223c]::-webkit-scrollbar{display:none}.order-list-item-title[data-v-612c223c]{font-size:14px;color:#fff}.order-list-desc-label[data-v-612c223c]{color:#9399a4}.order-list-desc-value[data-v-612c223c]{color:#fff}.order-buy[data-v-612c223c]{color:#56bd8b}.order-sell[data-v-612c223c]{color:#e35663}.order-status[data-v-612c223c]{background-color:#1a342e;padding:5px;border-radius:3px}.tab-label-active-mobile[data-v-612c223c]{color:#fff!important;font-size:14px}.tab-label-inactive-mobile[data-v-612c223c]{color:#868d9a!important;font-size:14px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionTypeCardMobile_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(934);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionTypeCardMobile_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionTypeCardMobile_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionTypeCardMobile_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionTypeCardMobile_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionTypeCardMobile_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1384:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".typeItem{width:100%;height:30px;display:grid;align-items:center;justify-items:center;place-items:center;border-radius:2px;cursor:pointer}.active{background-color:#2b2e35}.dark-select{background:#000}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionMobile_vue_vue_type_style_index_0_id_c65cbc20_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(935);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionMobile_vue_vue_type_style_index_0_id_c65cbc20_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionMobile_vue_vue_type_style_index_0_id_c65cbc20_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionMobile_vue_vue_type_style_index_0_id_c65cbc20_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionMobile_vue_vue_type_style_index_0_id_c65cbc20_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionMobile_vue_vue_type_style_index_0_id_c65cbc20_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1386:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".transaction-mobile-wrapper[data-v-c65cbc20]{max-height:600px;overflow-y:scroll}.transactions-table thead[data-v-c65cbc20]{position:relative}.transactions-table thead tr th[data-v-c65cbc20]{position:-webkit-sticky;position:sticky;top:0}.transactions-table[data-v-c65cbc20]{font-size:12px}.font-normal[data-v-c65cbc20]{font-weight:400!important}.text-left[data-v-c65cbc20]{text-align:left}.text-right[data-v-c65cbc20]{text-align:right}.text-white[data-v-c65cbc20]{color:#fff}.transactions-table-header[data-v-c65cbc20]{color:#9399a4}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TradesMobile_vue_vue_type_style_index_0_id_7d862c51_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(936);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TradesMobile_vue_vue_type_style_index_0_id_7d862c51_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TradesMobile_vue_vue_type_style_index_0_id_7d862c51_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TradesMobile_vue_vue_type_style_index_0_id_7d862c51_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TradesMobile_vue_vue_type_style_index_0_id_7d862c51_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TradesMobile_vue_vue_type_style_index_0_id_7d862c51_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1388:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".trades-table-wrapper[data-v-7d862c51]{max-height:600px;overflow-y:scroll}.trades-table thead[data-v-7d862c51]{position:relative}.trades-table thead tr th[data-v-7d862c51]{position:-webkit-sticky;position:sticky;top:0;background-color:#141519}.trades-table[data-v-7d862c51]{font-size:12px}.font-normal[data-v-7d862c51]{font-weight:400!important}.text-left[data-v-7d862c51]{text-align:left}.text-right[data-v-7d862c51]{text-align:right}.text-white[data-v-7d862c51]{color:#fff}.trades-table-header[data-v-7d862c51]{color:#9399a4}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionTabMobile_vue_vue_type_style_index_0_id_23b644e7_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(937);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionTabMobile_vue_vue_type_style_index_0_id_23b644e7_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionTabMobile_vue_vue_type_style_index_0_id_23b644e7_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionTabMobile_vue_vue_type_style_index_0_id_23b644e7_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionTabMobile_vue_vue_type_style_index_0_id_23b644e7_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionTabMobile_vue_vue_type_style_index_0_id_23b644e7_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1390:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".trade-form-card-mobile[data-v-23b644e7]{background:transparent;border:1px solid red;color:#9399a4}.trade-form-card-mobile-head[data-v-23b644e7]{display:flex;justify-content:flex-start;align-items:center}.trade-form-card-mobile-head-item[data-v-23b644e7]:first-child{margin-right:5px}.trade-form-card-mobile-input[data-v-23b644e7]{background:transparent;color:#9399a4;font-family:\"Roboto-Regular\";border-color:#484c56}.trade-form-card-mobile-input[data-v-23b644e7]:active,.trade-form-card-mobile-input[data-v-23b644e7]:focus{box-shadow:none;border-color:#484c56}.trade-form-card-mobile .trade-form-card-button[data-v-23b644e7]{box-shadow:none;background:transparent;border-color:#484c56;color:#9399a4;font-family:\"Roboto-Regular\"}.trade-form-card-mobile .isBuy[data-v-23b644e7]{color:#fff;background-color:#51b375}.trade-form-card-mobile .isSell[data-v-23b644e7]{color:#fff;background-color:#e55764}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionMobile_vue_vue_type_style_index_0_id_5caa86f9_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(938);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionMobile_vue_vue_type_style_index_0_id_5caa86f9_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionMobile_vue_vue_type_style_index_0_id_5caa86f9_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionMobile_vue_vue_type_style_index_0_id_5caa86f9_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionMobile_vue_vue_type_style_index_0_id_5caa86f9_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionMobile_vue_vue_type_style_index_0_id_5caa86f9_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1392:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tab-label-action-active[data-v-5caa86f9]{color:#fff}.tab-label-action-inactive[data-v-5caa86f9]{color:#9399a4}.action-mobile-header-button[data-v-5caa86f9]{box-shadow:none;background:transparent;border-color:#484c56;color:#9399a4;font-family:\"Roboto-Regular\"}.isBuy[data-v-5caa86f9]{color:#fff;background-color:#51b375}.isSell[data-v-5caa86f9]{color:#fff;background-color:#e55764}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TradeDrawer_vue_vue_type_style_index_0_id_467e065e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(939);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TradeDrawer_vue_vue_type_style_index_0_id_467e065e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TradeDrawer_vue_vue_type_style_index_0_id_467e065e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TradeDrawer_vue_vue_type_style_index_0_id_467e065e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TradeDrawer_vue_vue_type_style_index_0_id_467e065e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TradeDrawer_vue_vue_type_style_index_0_id_467e065e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1394:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-white[data-v-467e065e]{color:#fff!important}.drawer-header[data-v-467e065e]{display:flex;justify-content:space-between;align-items:center}.action-mobile-drawer-button[data-v-467e065e]{box-shadow:none;background:transparent;border-color:#484c56;color:#9399a4;font-family:\"Roboto-Regular\"}.isBuy[data-v-467e065e]{color:#fff;background-color:#51b375}.isSell[data-v-467e065e]{color:#fff;background-color:#e55764}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TradeDrawer_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(940);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TradeDrawer_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TradeDrawer_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TradeDrawer_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TradeDrawer_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TradeDrawer_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1396:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ant-drawer-content-wrapper{height:unset!important;max-height:100vh}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileTabs_vue_vue_type_style_index_0_id_02960944_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(941);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileTabs_vue_vue_type_style_index_0_id_02960944_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileTabs_vue_vue_type_style_index_0_id_02960944_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileTabs_vue_vue_type_style_index_0_id_02960944_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileTabs_vue_vue_type_style_index_0_id_02960944_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileTabs_vue_vue_type_style_index_0_id_02960944_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1398:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".mobile-tabs-container[data-v-02960944]{background:#141519;min-height:600px;padding:10px}.tab-label-active-mobile[data-v-02960944]{color:#fff!important}.tab-label-inactive-mobile[data-v-02960944]{color:#868d9a!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_symbol_vue_vue_type_style_index_0_id_360ec5a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(942);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_symbol_vue_vue_type_style_index_0_id_360ec5a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_symbol_vue_vue_type_style_index_0_id_360ec5a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_symbol_vue_vue_type_style_index_0_id_360ec5a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_symbol_vue_vue_type_style_index_0_id_360ec5a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_symbol_vue_vue_type_style_index_0_id_360ec5a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1400:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".exchange-wrapper .content[data-v-360ec5a4]{margin-top:20px}.symbols-column[data-v-360ec5a4],.trade-column[data-v-360ec5a4]{display:flex;flex-direction:column}.order-type-title[data-v-360ec5a4]{font-weight:400;font-size:16px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8b9fcff752d5ea136b05adfc83d3f750.svg";

/***/ }),

/***/ 1515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/trade/_symbol.vue?vue&type=template&id=360ec5a4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"exchange-wrapper"},[(_vm.isMobile)?_vm._ssrNode("<div data-v-360ec5a4>","</div>",[_c('StatusBarMobile',{attrs:{"statistics":_vm.fiatTicker}}),_vm._ssrNode(" "),_c('MobileTabs',{attrs:{"isOpenOrdersLoading":_vm.isOpenOrdersLoading,"UserBalance":_vm.UserBalance,"transactions":_vm.fiatTransactions,"last-price":_vm.fiatTicker.last,"LastTransactionsData":_vm.lastTransactionsData,"openOrdersData":_vm.openOrdersList,"last24HoursData":_vm.ordersLast24Hour},on:{"cancelOpenOrder":_vm.cancelOrder}})],2):_vm._e(),_vm._ssrNode(" "),(!_vm.isMobile)?_vm._ssrNode("<div data-v-360ec5a4>","</div>",[_c('StatusBar',{attrs:{"statistics":_vm.fiatTicker}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container content\" data-v-360ec5a4>","</div>",[_c('a-row',{attrs:{"type":"flex","gutter":15}},[_c('a-col',{attrs:{"span":5}},[_c('SideTransactions',{attrs:{"transactions":_vm.fiatTransactions,"last-price":_vm.fiatTicker.last}})],1),_vm._v(" "),_c('a-col',{attrs:{"span":14}},[_c('div',{staticClass:"trade-column h-100"},[_c('Chart'),_vm._v(" "),_c('Actions',{attrs:{"UserBalance":_vm.UserBalance},on:{"tradeUpdate":_vm.tradeUpdate}})],1)]),_vm._v(" "),_c('a-col',{attrs:{"span":5}},[_c('div',{staticClass:"symbols-column h-100"},[_c('Favorites'),_vm._v(" "),_c('LastTransactions',{attrs:{"LastTransactionsData":_vm.lastTransactionsData}})],1)])],1),_vm._ssrNode(" "),_c('a-row',{staticStyle:{"margin":"30px auto"}},[_c('a-col',{attrs:{"span":24}},[_c('a-tabs',{attrs:{"animated":false},model:{value:(_vm.activeOrderTypeKey),callback:function ($$v) {_vm.activeOrderTypeKey=$$v},expression:"activeOrderTypeKey"}},_vm._l((_vm.orderTypes),function(ord){return _c('a-tab-pane',{key:ord.key,staticClass:"Roboto-Medium"},[(ord.key === 'Open Orders')?_c('span',{staticClass:"order-type-title Roboto-Medium",class:{
                  'tab-label-active': _vm.activeOrderTypeKey === 'Open Orders',
                  'tab-label-inactive': _vm.activeOrderTypeKey !== 'Open Orders',
                },attrs:{"slot":"tab"},slot:"tab"},[_vm._v("\n                Açık İşlemler\n              ")]):_vm._e(),_vm._v(" "),(ord.key === 'last24HOrders')?_c('span',{staticClass:"order-type-title Roboto-Medium",class:{
                  'tab-label-active': _vm.activeOrderTypeKey === 'last24HOrders',
                  'tab-label-inactive':
                    _vm.activeOrderTypeKey !== 'last24HOrders',
                },attrs:{"slot":"tab"},slot:"tab"},[_vm._v("\n                Son 24 Saatteki İşlemler\n              ")]):_vm._e(),_vm._v(" "),_c('Transactions',{directives:[{name:"show",rawName:"v-show",value:(ord.key === 'Open Orders'),expression:"ord.key === 'Open Orders'"}],attrs:{"title":"Açık İşlemler","orders":_vm.openOrdersList,"show-cancel-button":true,"is-loading":_vm.isOpenOrdersLoading},on:{"cancelOpenOrder":_vm.cancelOrder,"cancelAllOpenOrder":_vm.cancelAllOrder}}),_vm._v(" "),_c('Transactions',{directives:[{name:"show",rawName:"v-show",value:(ord.key === 'last24HOrders'),expression:"ord.key === 'last24HOrders'"}],attrs:{"title":"Son 24 Saatteki İşlemler","orders":_vm.ordersLast24Hour}})],1)}),1)],1)],1)],2)],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/trade/_symbol.vue?vue&type=template&id=360ec5a4&scoped=true&

// EXTERNAL MODULE: ./components/Exchange/StatusBar.vue + 4 modules
var StatusBar = __webpack_require__(1006);

// EXTERNAL MODULE: ./components/Exchange/Chart.vue + 4 modules
var Chart = __webpack_require__(1007);

// EXTERNAL MODULE: ./components/Exchange/LastTransactions.vue + 4 modules
var LastTransactions = __webpack_require__(1008);

// EXTERNAL MODULE: ./components/Exchange/Favorites.vue + 4 modules
var Favorites = __webpack_require__(1009);

// EXTERNAL MODULE: ./components/Exchange/Transactions.vue + 4 modules
var Transactions = __webpack_require__(967);

// EXTERNAL MODULE: ./components/Exchange/Actions.vue + 4 modules
var Actions = __webpack_require__(1010);

// EXTERNAL MODULE: ./components/Exchange/SideTransactions/index.vue + 9 modules
var SideTransactions = __webpack_require__(992);

// EXTERNAL MODULE: ./components/Exchange/ExchangeMobile/StatusBarMobile.vue + 4 modules
var StatusBarMobile = __webpack_require__(1011);

// EXTERNAL MODULE: ./components/Exchange/ExchangeMobile/MobileTabs.vue + 4 modules
var MobileTabs = __webpack_require__(1012);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(21);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(42);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/trade/_symbol.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ var _symbolvue_type_script_lang_js_ = ({
  middleware: ['auth'],
  components: {
    StatusBar: StatusBar["default"],
    Chart: Chart["default"],
    LastTransactions: LastTransactions["default"],
    Transactions: Transactions["default"],
    Actions: Actions["default"],
    SideTransactions: SideTransactions["default"],
    Favorites: Favorites["default"],
    MobileTabs: MobileTabs["default"],
    // mobile components
    StatusBarMobile: StatusBarMobile["default"] // ExchangeMobile: () => import('~/components/Exchange/ExchangeMobile/index'),

  },

  head() {
    return {
      title: 'Al - Sat | Cointral.com',
      meta: [{
        hid: 'trade_screen',
        name: 'description',
        content: 'Bitcoin Al - Sat'
      }]
    };
  },

  data() {
    return {
      orderTypes: [{
        key: 'Open Orders'
      }, {
        key: 'last24HOrders'
      }],
      activeOrderTypeKey: 'Open Orders',
      sideTransactions: {},
      ticker: {},
      fiatTicker: {},
      fiatTransactions: {},
      lastTransactionsData: [],
      connection: null,
      fiatWsCon: null,
      fiatAuthCon: null,
      FiatWalletListenKey: null,
      binanceListenKey: null,
      isMobile: null,
      openOrdersList: [],
      isOpenOrdersLoading: false,
      ordersLast24Hour: [],
      UserBalance: {},
      isFirstDealsResponse: true
    };
  },

  mounted() {
    try {
      this.$zendesk.hide();
    } catch (e) {
      this.$zendesk.$on('loaded', event => {
        this.$zendesk.hide();
      });
    }

    this.isMobile = window.innerWidth < 1000;
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 1000;
    });
  },

  destroyed() {
    this.$zendesk.show();
  },

  created() {
    if (false) {}
  },

  methods: {
    setupFiatWS() {
      this.fiatWsCon = new WebSocket(this.$config.FIAT_WALLET_SOCKET_URL);
      const {
        Symbol
      } = this.getSymbolData;

      this.fiatWsCon.onopen = () => {
        this.startFiatPing();
        this.fiatWsCon.send(JSON.stringify({
          method: 'state.subscribe',
          params: [Symbol],
          id: 101
        }));
        this.fiatWsCon.send(JSON.stringify({
          method: 'depth.subscribe',
          params: [Symbol, 20, '0'],
          id: 102
        }));
        this.fiatWsCon.send(JSON.stringify({
          method: 'deals.subscribe',
          params: [Symbol],
          id: 103
        }));
      }; // listen to stream


      this.fiatWsCon.onmessage = this.updateFiatStream;
    },

    startFiatPing() {
      setInterval(() => {
        this.fiatWsCon.send(JSON.stringify({
          method: 'server.ping',
          params: [],
          id: 111
        }));
      }, 60000);
    },

    async getListenKey() {
      const {
        $axios,
        $cookies,
        $config: {
          FINANCE_API_URL
        }
      } = this;
      const authHeaders = {
        Authorization: 'Bearer ' + $cookies.get('Token')
      };
      const response = await $axios.get(FINANCE_API_URL + '/GetListenKey', {
        headers: authHeaders
      });

      if (response.data.Success) {
        const {
          ListenKey,
          FiatWalletListenKey
        } = response.data;
        this.FiatWalletListenKey = FiatWalletListenKey;
        this.binanceListenKey = ListenKey;
        const {
          QuatoAsset
        } = this.getSymbolData;

        if (QuatoAsset === 'TRY') {} else {
          this.closeConnection();
          this.makeConnection();
        }
      }
    },

    updateFiatStream(stream) {
      if (this.isLoggedIn && this.FiatWalletListenKey !== null) {
        this.fiatWsCon.send(JSON.stringify({
          method: 'server.auth',
          params: [this.FiatWalletListenKey, 'web'],
          id: 150
        }));
        this.FiatWalletListenKey = null;
      }

      const {
        Symbol,
        BaseAsset,
        QuatoAsset
      } = this.getSymbolData;
      let payload = JSON.parse(stream.data);

      if ('id' in payload && payload.id === 150) {
        this.fiatWsCon.send(JSON.stringify({
          method: 'order.subscribe',
          params: ['BTCTRY', 'ETHTRY', 'XRPTRY', 'USDTTRY'],
          id: 110
        }));
        this.fiatWsCon.send(JSON.stringify({
          method: 'asset.subscribe',
          params: [BaseAsset, QuatoAsset],
          id: 120
        }));
      }

      const {
        method,
        params
      } = JSON.parse(stream.data);

      if (method === 'state.update') {
        params[1]['volume'] = params[1]['deal'];
        this.fiatTicker = params[1];
        params[1]['volume'] = params[1]['deal'];
        this.fiatTicker.period = params[1]['close'] - params[1]['open'];
        this.fiatTicker.P = params[1]['open'] == 0 ? 0 : this.fiatTicker.period * 100 / params[1]['open'];
      } else if (method === 'depth.update') {
        this.updateFiatOrderBook(params);
      } else if (method === 'deals.update') {
        console.table('deals', params[1]);

        if (Array.isArray(params[1])) {
          if (!this.isFirstDealsResponse) {
            let dealsUpdate = params[1];
            dealsUpdate.forEach(deal => {
              this.lastTransactionsData.unshift({
                Time: deal.time,
                Qty: deal.amount,
                Price: deal.price,
                IsBuyerMaker: deal.type
              });
              this.lastTransactionsData.pop();
            });
            this.lastTransactionsData = this.lastTransactionsData.sort((a, b) => external_moment_default()(a.Time).isBefore(b.Time) ? 1 : -1);
            console.log('sorted table', this.lastTransactionsData);
          }
        } else {
          let dealUpdate = {
            Time: params[1]['time'],
            Qty: params[1]['amount'],
            Price: params[1]['price'],
            IsBuyerMaker: params[1]['type']
          };
          this.lastTransactionsData.unshift(dealUpdate);
          this.lastTransactionsData.pop(); // this.lastTransactionsData = _.orderBy(
          //   this.lastTransactionsData,
          //   ['Time'],
          //   ['desc']
          // )

          this.lastTransactionsData = this.lastTransactionsData.sort((a, b) => external_moment_default()(a.Time).isBefore(b.Time) ? 1 : -1);
          console.log('sorted table', this.lastTransactionsData);
        }

        this.isFirstDealsResponse = false;
      } else if (method === 'order.update') {
        this.updateOpenOrder(params);
      } else if (method === 'asset.update') {
        const {
          BaseAsset,
          QuatoAsset
        } = this.getSymbolData;
        const {
          $store
        } = this;
        const balances = Object.entries(params[0]);
        balances.forEach(([asset, details]) => {
          if (asset === BaseAsset) {
            $store.commit('symbol/updateBaseBalance', details.available);
          }

          if (asset === QuatoAsset) {
            $store.commit('symbol/updateQuatoBalance', details.available);
          }
        });
      }
    },

    updateOpenOrder(params) {
      const code = params[0];
      const data = params[1];
      const index = this.openOrdersList.findIndex(order => order.OrderID == data.id);
      let type;

      if (data.type === 1) {
        type = 'LIMIT';
      }

      if (data.type === 2) {
        type = 'MARKET';
      }

      let side;

      if (data.side === 1) {
        side = 'SELL';
      }

      if (data.side === 2) {
        side = 'BUY';
      }

      const order = {
        OrderID: data.id,
        Time: Math.trunc(data.ctime * 1000),
        Symbol: data.market,
        Type: type,
        Side: side,
        Price: data.price,
        BaseQuantity: data.amount,
        ExecutedBaseQuantity: data.deal_stock,
        ExecutedQuatoQuantity: data.deal_money,
        Status: data.deal_stock == 0 ? 'NEW' : data.deal_stock == data.amount ? 'FILLED' : 'PARTIALLY_FILLED'
      };

      if (index !== -1) {
        //update
        if (code === 2) {
          this.$set(this.openOrdersList, index, order); //this.openOrdersList[index] = order
          //this.openOrdersList.push()
        } // finish


        if (code === 3) {
          if (order.ExecutedBaseQuantity == 0) {
            order.Status = 'CANCELED';
          }

          this.$delete(this.openOrdersList, index);
          this.ordersLast24Hour.unshift(order);
        }
      } else {
        if (code == 1 || code == 2) {
          this.openOrdersList.unshift(order);
        } else if (code == 3) {
          if (order.ExecutedBaseQuantity == 0) {
            order.Status = 'CANCELED';
          }

          this.ordersLast24Hour.unshift(order);
        }
      }
    },

    updateFiatOrderBook(params) {
      if (params[0]) {
        this.fiatTransactions = params[1];
        this.fiatTransactions.asks = this.fiatTransactions.asks.sort(([price1, amount1], [price2, amount2]) => price2 - price1);
      } else {
        if (Object.keys(params[1]).includes('asks')) {
          let asks = params[1]['asks'];
          asks.forEach(([oldAsk, newAsk]) => {
            if (newAsk === '0') {
              this.fiatTransactions.asks = this.fiatTransactions.asks.filter(([oldval, newval]) => oldval !== oldAsk);
            } else {
              const index = this.fiatTransactions.asks.findIndex(([oldval, newval]) => oldval === oldAsk);

              if (index === -1) {
                this.fiatTransactions.asks.unshift([oldAsk, newAsk]); // sorting asks by price

                this.fiatTransactions.asks = this.fiatTransactions.asks.sort(([price1, amount1], [price2, amount2]) => price2 - price1);
              } else {
                this.$set(this.fiatTransactions.asks, index, [oldAsk, newAsk]);
              }
            }
          });
        }

        if (Object.keys(params[1]).includes('bids')) {
          let bids = params[1]['bids'];
          bids.forEach(([oldBid, newBid]) => {
            if (newBid === '0') {
              this.fiatTransactions.bids = this.fiatTransactions.bids.filter(([oldval, newval]) => oldval !== oldBid);
            } else {
              const index = this.fiatTransactions.bids.findIndex(([oldval, newval]) => oldval === oldBid);

              if (index === -1) {
                this.fiatTransactions.bids.unshift([oldBid, newBid]); // sorting bids by price

                this.fiatTransactions.bids = this.fiatTransactions.bids.sort(([price1, amount1], [price2, amount2]) => price2 - price1);
              } else {
                this.$set(this.fiatTransactions.bids, index, [oldBid, newBid]);
              }
            }
          });
        }
      }
    },

    makeConnection() {
      this.connection = new WebSocket(this.binanceWSURL);
      this.connection.onmessage = this.update;
    },

    closeConnection() {
      this.connection.close();
    },

    update(response) {
      const data = JSON.parse(response.data);

      if ('lastUpdateId' in data) {
        this.fiatTransactions = {
          asks: data.asks,
          bids: data.bids
        };
        this.fiatTransactions.asks = this.fiatTransactions.asks.sort(([price1, amount1], [price2, amount2]) => price2 - price1);
        this.fiatTransactions.bids = this.fiatTransactions.bids.sort(([price1, amount1], [price2, amount2]) => price2 - price1);
      }

      if (data.e === '24hrTicker') {
        let tickerData = {
          period: data.p,
          P: data.P,
          high: data.h,
          low: data.l,
          last: data.c,
          volume: data.q
        };
        this.fiatTicker = tickerData;
      }

      if (data.e === 'aggTrade') {
        const tradeData = {
          Time: data.T,
          Qty: data.q,
          Price: data.p,
          IsBuyerMaker: data.m
        };
        this.lastTransactionsData.pop();
        this.lastTransactionsData.unshift(tradeData);
      }

      if (data.e === 'outboundAccountPosition') {
        const {
          BaseAsset,
          QuatoAsset
        } = this.getSymbolData;

        if (QuatoAsset !== 'TRY') {
          const {
            $store
          } = this;
          const balances = data.B;
          balances.forEach(b => {
            if (b.a === BaseAsset) {
              $store.commit('symbol/updateBaseBalance', b.f);
            }

            if (b.a === QuatoAsset) {
              $store.commit('symbol/updateQuatoBalance', b.f);
            }
          });
        }
      }

      if (data.e === 'executionReport') {
        const order = {
          Time: data.T,
          OrderID: data.i,
          Symbol: data.s,
          Type: data.o,
          Side: data.S,
          Price: data.p,
          BaseQuantity: data.q,
          ExecutedBaseQuantity: data.l,
          ExecutedQuatoQuantity: data.z,
          Status: data.X
        };
        const {
          status,
          index
        } = this.existsInOpenOrders(data.i);
        const {
          status2,
          index2
        } = this.existsIn24HOrders(data.i);

        if (data.X === 'NEW') {
          if (!status) {
            this.openOrdersList.unshift(order);
          }
        }

        if (data.X === 'FILLED') {
          if (status) {
            this.$delete(this.openOrdersList, index);
          }

          if (!status2) {
            this.ordersLast24Hour.unshift(order);
          }
        }

        if (data.X === 'PARTIALLY_FILLED') {
          if (status) {
            this.$set(this.openOrdersList, index, order);
          } else {
            this.openOrdersList.unshift(order);
          }
        }

        if (data.X === 'CANCELED' || data.X === 'PENDING_CANCEL' || data.X === 'REJECTED' || data.X === 'EXPIRED') {
          if (status) {
            this.openOrdersList.splice(index, 1);

            if (!status2) {
              this.ordersLast24Hour.unshift(order);
            }
          }
        }
      }
    },

    existsInOpenOrders(id) {
      const index = this.openOrdersList.findIndex(o => o.OrderID === id);
      return index === -1 ? {
        status: false,
        index: -1
      } : {
        status: true,
        index
      };
    },

    existsIn24HOrders(id) {
      const index = this.ordersLast24Hour.findIndex(o => o.OrderID === id);
      return index === -1 ? {
        status: false,
        index: -1
      } : {
        status: true,
        index
      };
    },

    async cancelOrder(order) {
      // api requesst to cancel order
      let {
        $axios,
        $config: {
          FINANCE_API_URL
        },
        $cookies
      } = this;
      let token = $cookies.get('Token');
      this.isOpenOrdersLoading = true;

      try {
        const response = await $axios({
          method: 'delete',
          url: FINANCE_API_URL + '/CancelOrder',
          data: {
            Symbol: order.Symbol,
            OrderId: order.OrderID
          },
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        });
        this.isOpenOrdersLoading = false;

        if (response.data.Success) {
          this.getOpenOrders();
        }
      } catch (e) {
        console.error('Failed !', e);
        this.isOpenOrdersLoading = false;
      }
    },

    async cancelAllOrder(order) {
      // api requesst to cancel All order
      let {
        $axios,
        $config: {
          FINANCE_API_URL
        },
        $cookies
      } = this;
      let token = $cookies.get('Token');
      this.isOpenOrdersLoading = true;

      try {
        const response = await $axios({
          method: 'delete',
          url: FINANCE_API_URL + '/CancelAllOrders',
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        });
        this.isOpenOrdersLoading = false;

        if (response.data.Success) {
          this.openNotificationWithIcon('success', 'Success');
          this.getOpenOrders();
        }
      } catch (e) {
        this.openNotificationWithIcon('error', 'Error occured');
        console.error('Failed !', e);
        this.isOpenOrdersLoading = false;
      }
    },

    openNotificationWithIcon(type, msg) {
      this.$notification[type]({
        message: msg,
        description: this.errorMessage
      });
    },

    async getOpenOrders() {
      const {
        $axios,
        $cookies,
        $config: {
          FINANCE_API_URL
        }
      } = this;
      let token = $cookies.get('Token');
      let authHeaders = {
        Authorization: 'Bearer ' + token
      };
      this.isOpenOrdersLoading = true;
      const response = await $axios.get(FINANCE_API_URL + '/GetOpenOrders', {
        headers: authHeaders
      });

      if (response.data.Success) {
        const {
          OpenOrdersList
        } = response.data;
        this.openOrdersList = OpenOrdersList;
      }

      this.isOpenOrdersLoading = false;
    },

    tradeUpdate(payload) {// this.openOrdersList.unshift(payload)
    }

  },

  async asyncData({
    app,
    $axios,
    store,
    redirect,
    $config: {
      FINANCE_API_URL
    },
    params,
    $cookies
  }) {
    if (!params.symbol) {
      redirect(app.localeRoute('/trade/BTC_USDT'));
    }

    try {
      let symbolresponse;

      if (store.state.auth.isLoggedIn) {
        const token = $cookies.get('Token');
        let authHeaders = {
          Authorization: 'Bearer ' + token
        };
        symbolresponse = await $axios.get(FINANCE_API_URL + '/GetSymbols', {
          headers: authHeaders
        });
      } else {
        symbolresponse = await $axios.get(FINANCE_API_URL + '/GetSymbols');
      }

      store.commit('symbol/updateList', symbolresponse.data.SymbolList);
      store.dispatch('symbol/updateData', params.symbol.split('_'));

      if (!store.state.symbol.data) {
        throw new Error('Symbol not found.');
      }

      const {
        Symbol
      } = store.state.symbol.data; // Get last Orders

      const lastTrades = await $axios.get(FINANCE_API_URL + '/GetLastTrades', {
        params: {
          Symbol: Symbol
        }
      });
      const {
        Trades
      } = lastTrades.data;
      const token = $cookies.get('Token');

      if (!!token) {
        let authHeaders = {
          Authorization: 'Bearer ' + token
        }; // Get Open Orders

        const openOrdersResponse = await $axios.get(FINANCE_API_URL + '/GetOpenOrders', {
          headers: authHeaders
        }); // Get 24 Hours Orders

        const _24HOrdersResponse = await $axios.get(FINANCE_API_URL + '/Get24HOrders', {
          headers: authHeaders
        });

        if (openOrdersResponse.data.Success && _24HOrdersResponse.data.Success) {
          const {
            OpenOrdersList
          } = openOrdersResponse.data;
          const {
            OrderList
          } = _24HOrdersResponse.data;
          const {
            Trades
          } = lastTrades.data;
          return {
            openOrdersList: OpenOrdersList,
            ordersLast24Hour: OrderList,
            lastTransactionsData: Trades
          };
        }
      } else {
        return {
          lastTransactionsData: Trades
        };
      }
    } catch (e) {
      if ('response' in e) {
        console.error(e.response);
      } else {
        console.error(e);
      }
    }
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      getSymbolData: 'symbol/getSymbolData',
      isLoggedIn: 'auth/isLoggedIn'
    }),

    binanceWSURL() {
      const {
        Symbol
      } = this.getSymbolData;

      if (this.binanceListenKey !== null) {
        return this.$config.SOCKET_CONNECTION_URL + '/' + Symbol.toLowerCase() + '@aggTrade/' + Symbol.toLowerCase() + '@ticker/' + Symbol.toLowerCase() + '@depth20@1000ms/' + this.binanceListenKey;
      } else {
        return this.$config.SOCKET_CONNECTION_URL + '/' + Symbol.toLowerCase() + '@aggTrade/' + Symbol.toLowerCase() + '@ticker/' + Symbol.toLowerCase() + '@depth20@1000ms';
      }
    }

  },
  watch: {
    getSymbolData(newVal, oldVal) {
      if (this.fiatWsCon) this.fiatWsCon.close();
      if (this.connection) this.closeConnection();
      const {
        BaseAsset,
        QuatoAsset
      } = this.getSymbolData;
      let prefix = this.$cookies.get('i18n_redirected');
      window.history.pushState({}, null, '/' + prefix + '/trade/' + BaseAsset.toString().concat('_', QuatoAsset.toString())); // reset all data

      this.lastTransactionsData = [];
      this.fiatTransactions = {};
      const {
        $cookies,
        $store
      } = this;

      if (this.isLoggedIn) {
        this.getListenKey();
      }

      if (QuatoAsset === 'TRY') {
        // create fiat websocket connection
        this.setupFiatWS();
      } else {
        // create binance connection
        this.makeConnection();
      }

      const {
        Symbol
      } = this.getSymbolData;
      const {
        $axios,
        $config: {
          FINANCE_API_URL
        }
      } = this;
      $axios.get(FINANCE_API_URL + '/GetLastTrades', {
        params: {
          Symbol
        }
      }).then(response => {
        const {
          Trades
        } = response.data;
        this.lastTransactionsData = Trades;
      }).catch(e => {});
    }

  }
});
// CONCATENATED MODULE: ./pages/trade/_symbol.vue?vue&type=script&lang=js&
 /* harmony default export */ var trade_symbolvue_type_script_lang_js_ = (_symbolvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/trade/_symbol.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1399)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  trade_symbolvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "360ec5a4",
  "d359e3a8"
  
)

/* harmony default export */ var _symbol = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {StatusBarMobile: __webpack_require__(1011).default,MobileTabs: __webpack_require__(1012).default,StatusBar: __webpack_require__(1006).default,SideTransactions: __webpack_require__(992).default,Chart: __webpack_require__(1007).default,Actions: __webpack_require__(1010).default,Favorites: __webpack_require__(1009).default,LastTransactions: __webpack_require__(1008).default,Transactions: __webpack_require__(967).default})


/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      SymbolPriceDecimalLenght: null,
      SymbolQuantityDecimalLenght: null,
      SymbolTotalDecimalLenght: null
    };
  },

  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
      getSymbolData: 'symbol/getSymbolData'
    })
  },

  mounted() {
    let {
      SymbolPriceDecimalLenght,
      SymbolQuantityDecimalLenght,
      SymbolTotalDecimalLenght
    } = this.getSymbolData;
    this.SymbolPriceDecimalLenght = SymbolPriceDecimalLenght;
    this.SymbolQuantityDecimalLenght = SymbolQuantityDecimalLenght;
    this.SymbolTotalDecimalLenght = SymbolTotalDecimalLenght;
  },

  methods: {
    formatPrice(val) {
      return new Intl.NumberFormat('en', {
        minimumFractionDigits: this.getSymbolData.SymbolPriceDecimalLenght
      }).format(val);
    },

    formatAmount(val) {
      return new Intl.NumberFormat('en', {
        minimumFractionDigits: this.getSymbolData.SymbolQuantityDecimalLenght
      }).format(val);
    },

    formatTotal(val) {
      return new Intl.NumberFormat('en', {
        minimumFractionDigits: this.getSymbolData.SymbolTotalDecimalLenght
      }).format(val);
    }

  },
  filters: {
    formatDate(val) {
      moment__WEBPACK_IMPORTED_MODULE_1___default()(val).format('hh:mm:ss');
    }

  }
});

/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1354);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("378ac2ad", content, true, context)
};

/***/ }),

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1356);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0b5e24d1", content, true, context)
};

/***/ }),

/***/ 921:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1358);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("633e82d6", content, true, context)
};

/***/ }),

/***/ 922:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1360);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("03b8ff4e", content, true, context)
};

/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1362);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("10c2fa18", content, true, context)
};

/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1364);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5ca21ca9", content, true, context)
};

/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1366);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("37260bb6", content, true, context)
};

/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1368);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("98874d58", content, true, context)
};

/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1370);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("08412f4c", content, true, context)
};

/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1372);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("474490d2", content, true, context)
};

/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1374);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("df116b8c", content, true, context)
};

/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1376);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0c2c12cd", content, true, context)
};

/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1378);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2ba262f2", content, true, context)
};

/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1380);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1cb3f2cd", content, true, context)
};

/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1382);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5ee2873a", content, true, context)
};

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1384);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7e3d23ad", content, true, context)
};

/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1386);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("44f916de", content, true, context)
};

/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1388);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5891e9d0", content, true, context)
};

/***/ }),

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1390);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5ca602c5", content, true, context)
};

/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1392);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("581fe497", content, true, context)
};

/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1394);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("286825b8", content, true, context)
};

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1396);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("f8487f46", content, true, context)
};

/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1398);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3fd91af7", content, true, context)
};

/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1400);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("cc3b7c0c", content, true, context)
};

/***/ }),

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/Transactions.vue?vue&type=template&id=164c0a6c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"open-transactions mb-15"},[_vm._ssrNode("<div class=\"table-container\" data-v-164c0a6c>","</div>",[_c('a-spin',{attrs:{"spinning":_vm.isLoading}},[_c('table',{staticClass:"Roboto-Medium"},[_c('thead',[_c('tr',[_c('th',{attrs:{"scope":"col"}},[_vm._v(_vm._s(_vm.$t('exchange_date')))]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v(_vm._s(_vm.$t('exchange_pair')))]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v(_vm._s(_vm.$t('exchange_type')))]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v(_vm._s(_vm.$t('exchange_side')))]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v(_vm._s(_vm.$t('exchange_price')))]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v(_vm._s(_vm.$t('exchange_amount')))]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v(_vm._s(_vm.$t('exchange_filled')))]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v(_vm._s(_vm.$t('exchange_total')))]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v(_vm._s(_vm.$t('exchange_status')))]),_vm._v(" "),(_vm.showCancelButton)?_c('th',{attrs:{"scope":"col"}},[_c('a-button',{ref:"index",staticClass:"Roboto-Regular btn-cancel-open-order",attrs:{"type":"secondary"},on:{"click":function($event){return _vm.$emit('cancelAllOpenOrder', '')}}},[_vm._v(_vm._s(_vm.$t('exchange_button_cancel_All')))])],1):_vm._e()])]),_vm._v(" "),_c('tbody',_vm._l((_vm.orders),function(o,index){return _c('tr',{key:index},[_c('td',[_vm._v(_vm._s(_vm._f("dateFormat")(Number(o.Time))))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(o.Symbol))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.$t(o.Type)))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(o.Side))]),_vm._v(" "),(o.Type === 'MARKET')?_c('td',[_vm._v(_vm._s(_vm.$t(o.Type)))]):_c('td',[_vm._v(_vm._s(o.Price))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(o.BaseQuantity))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(o.ExecutedBaseQuantity))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(o.ExecutedQuatoQuantity))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.$t(o.Status)))]),_vm._v(" "),(_vm.showCancelButton)?_c('td',[_c('a-button',{ref:"index",refInFor:true,staticClass:"Roboto-Regular btn-cancel-open-order",attrs:{"type":"secondary"},on:{"click":function($event){return _vm.$emit('cancelOpenOrder', o)}}},[_vm._v(_vm._s(_vm.$t('exchange_button_cancel')))])],1):_vm._e()])}),0)])])],1),_vm._ssrNode(" "+((!_vm.orders.length)?("<div class=\"empty-data\" data-v-164c0a6c><div class=\"empty-dot-box\" data-v-164c0a6c></div> <span class=\"font-weight-600\" data-v-164c0a6c>"+_vm._ssrEscape(_vm._s(_vm.$t('exchange_text_norecords')))+"</span></div>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/Transactions.vue?vue&type=template&id=164c0a6c&scoped=true&

// EXTERNAL MODULE: ./Mixins/dateFormatMixin.js
var dateFormatMixin = __webpack_require__(986);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/Transactions.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Transactionsvue_type_script_lang_js_ = ({
  mixins: [dateFormatMixin["a" /* default */]],
  props: {
    title: {
      type: String,
      default: ''
    },
    orders: {
      type: Array,
      default: () => []
    },
    showCancelButton: {
      type: Boolean,
      required: false,
      default: false
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/Exchange/Transactions.vue?vue&type=script&lang=js&
 /* harmony default export */ var Exchange_Transactionsvue_type_script_lang_js_ = (Transactionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/Transactions.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1361)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Exchange_Transactionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "164c0a6c",
  "787f361a"
  
)

/* harmony default export */ var Transactions = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 984:
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"20.079","height":"20.004","viewBox":"0 0 20.079 20.004"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"id":"sun","d":"M9.878.186a.833.833,0,0,0-.729.833V2.686a.833.833,0,1,0,1.667,0V1.019A.833.833,0,0,0,9.878.186ZM3.317,2.842A.833.833,0,0,0,2.9,4.274L4.072,5.446A.833.833,0,1,0,5.243,4.274L4.072,3.1a.833.833,0,0,0-.6-.26q-.039,0-.078,0t-.078,0Zm13.071,0a.833.833,0,0,0-.495.26L14.721,4.274a.833.833,0,1,0,1.172,1.172l1.172-1.172a.833.833,0,0,0-.6-1.432q-.039,0-.078,0ZM9.982,4.352a5.833,5.833,0,1,0,5.833,5.833A5.855,5.855,0,0,0,9.982,4.352Zm0,1.666a4.166,4.166,0,1,1-4.166,4.166A4.173,4.173,0,0,1,9.982,6.019ZM.661,9.352a.837.837,0,1,0,.156,1.666H2.483a.833.833,0,1,0,0-1.667H.817q-.039,0-.078,0t-.078,0Zm16.664,0a.837.837,0,0,0,.156,1.666h1.666a.833.833,0,1,0,0-1.667H17.481q-.039,0-.078,0t-.078,0ZM4.54,14.689a.833.833,0,0,0-.469.26L2.9,16.1a.838.838,0,1,0,1.172,1.2l1.172-1.172a.833.833,0,0,0-.7-1.432Zm10.6,0a.833.833,0,0,0-.417,1.432l1.172,1.172a.838.838,0,1,0,1.172-1.2L15.893,14.95a.833.833,0,0,0-.677-.26q-.039,0-.078,0Zm-5.26,2.161a.833.833,0,0,0-.729.833V19.35a.833.833,0,1,0,1.667,0V17.684a.833.833,0,0,0-.937-.833Z","transform":"translate(0.098 -0.18)","fill":"#fff"}})])
          )
        }
      }
    

/***/ }),

/***/ 985:
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"15.141","height":"15.055","viewBox":"0 0 15.141 15.055"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"id":"Fog_Night-595b40b65ba036ed117d1c77","data-name":"Fog Night-595b40b65ba036ed117d1c77","d":"M15.212,4.116c-4.368.065-8,3.357-8,7.452,0,.008,1.52.175,1.52.168a5.932,5.932,0,0,1,4.843-5.985c0-.023-.011,0,0,0-.257,3.679.435,7.211,7.075,7.052.02.008.013,0,0,0a5.946,5.946,0,0,1-5.841,4.843c-6.367-.522-6.078-5.91-6.078-5.91l-1.52-.168s-.436,6.809,7.6,7.6a7.358,7.358,0,0,0,7.535-7.748h0c.009-.013-.016-.035,0,0-2.527,0-9.123.63-7.13-7.3Z","transform":"translate(-7.205 -4.116)","fill":"#fff"}})])
          )
        }
      }
    

/***/ }),

/***/ 986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ({
  filters: {
    dateFormat(val) {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(val).format('yyyy-MM-DD hh:mm:ss');
    }

  }
});

/***/ }),

/***/ 987:
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"18.845","height":"18.047","viewBox":"0 0 18.845 18.047"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M638.85,19904.006l-5.316-.775-2.656-4.619-.414-.623h-.771l-.488.438-2.988,4.672-4.967.908-.724,1.273.2.447,3.967,3.916v.7l-.952,4.877.5.508.457.17h.667l4.513-2.42.855.367,4.1,2.191h.673l.53-.816.232-.344-.99-5.232,3.852-3.8.249-.566Z","transform":"translate(-620.524 -19897.988)","fill":"#1ba4e8"}})])
          )
        }
      }
    

/***/ }),

/***/ 988:
/***/ (function(module, exports) {


      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"16.488","height":"15.833","viewBox":"0 0 16.488 15.833"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M15.126,7.76a1.109,1.109,0,0,0-.615-1.891l-3.744-.544a.489.489,0,0,1-.368-.268L8.725,1.665a1.109,1.109,0,0,0-1.989,0L5.063,5.057a.489.489,0,0,1-.369.268L.95,5.869A1.109,1.109,0,0,0,.336,7.76L3.044,10.4a.49.49,0,0,1,.141.433l-.639,3.728a1.109,1.109,0,0,0,1.609,1.169L7.5,13.971a.49.49,0,0,1,.456,0l3.348,1.76a1.109,1.109,0,0,0,1.609-1.169l-.64-3.728a.49.49,0,0,1,.141-.433Zm-3.46,3.179.639,3.728a.49.49,0,0,1-.71.516L8.247,13.423a1.109,1.109,0,0,0-1.032,0l-3.348,1.76a.49.49,0,0,1-.711-.516L3.8,10.939a1.109,1.109,0,0,0-.319-.981L.768,7.317a.49.49,0,0,1,.271-.835l3.743-.544a1.107,1.107,0,0,0,.835-.607L7.291,1.939a.49.49,0,0,1,.878,0L9.844,5.331a1.107,1.107,0,0,0,.835.607l3.744.544a.49.49,0,0,1,.271.835l-2.709,2.64A1.108,1.108,0,0,0,11.666,10.939Z","transform":"translate(0.513 -0.547)","fill":"#1ba4e8","stroke":"#1ba4e8","stroke-width":"1"}})])
          )
        }
      }
    

/***/ }),

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "07f7f4ad4310f8b0692b60ead07d7a42.svg";

/***/ }),

/***/ 990:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b2fe3d69f9335cff283234d529c5767f.svg";

/***/ }),

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7b4014e7d1b20b4019e6d1ae52f08381.svg";

/***/ }),

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/SideTransactions/index.vue?vue&type=template&id=5567ea82&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"side-transaction-container"},[_c('TransacitonTypeCard',{attrs:{"active-tab":_vm.type},on:{"change":function (e) { return (_vm.type = e); }}}),_vm._ssrNode(" "),(_vm.isActiveTab(1))?_vm._ssrNode("<div class=\"side-flex\">","</div>",[_c('Transactions',{attrs:{"list":_vm.getAsks,"tab":1,"styles":{ borderBottom: 0 },"scrollPos":"bottom","type":"asks","value-col-class":"text-danger"}}),_vm._ssrNode(" "),_c('ValueCard',{staticStyle:{"border-top":"0px","border-bottom":"0px"},attrs:{"value":_vm.lastPrice}}),_vm._ssrNode(" "),_c('Transactions',{attrs:{"show-table-headers":false,"list":_vm.getBids,"tab":1,"styles":{ borderTop: 0 },"type":"bids","value-col-class":"text-success"}})],2):_vm._e(),_vm._ssrNode(" "),(_vm.isActiveTab(2))?_vm._ssrNode("<div class=\"side-flex\">","</div>",[_c('ValueCard',{attrs:{"value":_vm.lastPrice}}),_vm._ssrNode(" "),_c('Transactions',{staticClass:"bids-table",attrs:{"list":_vm.getBids,"tab":2,"styles":{ borderTop: 0 },"value-col-class":"text-success","type":"bids","limit":20}})],2):_vm._e(),_vm._ssrNode(" "),(_vm.isActiveTab(3))?_vm._ssrNode("<div class=\"side-flex\">","</div>",[_c('Transactions',{staticClass:"bids-table",attrs:{"styles":{ borderBottom: 0 },"list":_vm.getAsks,"tab":3,"value-col-class":"text-danger","type":"asks","limit":20}}),_vm._ssrNode(" "),_c('ValueCard',{attrs:{"value":_vm.lastPrice}})],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/SideTransactions/index.vue?vue&type=template&id=5567ea82&

// EXTERNAL MODULE: ./components/Exchange/SideTransactions/TransacitonTypeCard.vue + 4 modules
var TransacitonTypeCard = __webpack_require__(1014);

// EXTERNAL MODULE: ./components/Exchange/SideTransactions/ValueCard.vue + 4 modules
var ValueCard = __webpack_require__(1015);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/SideTransactions/Transactions.vue?vue&type=template&id=62ad2188&
var Transactionsvue_type_template_id_62ad2188_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"transactions h-100"},[_c('a-card',{staticClass:"h-100",style:(_vm.styles)},[_c('div',{staticClass:"exchange-table"},[(_vm.showTableHeaders)?_c('div',{staticClass:"exchange-table__head"},[_c('div',{staticClass:"exchange-table__head-item Roboto-Regular"},[_vm._v("\n          "+_vm._s(_vm.$t('exchange_price'))+" ("+_vm._s(_vm.getSymbolData.QuatoAsset)+")\n        ")]),_vm._v(" "),_c('div',{staticClass:"exchange-table__head-item Roboto-Regular"},[_vm._v("\n          "+_vm._s(_vm.$t('exchange_amount'))+" ("+_vm._s(_vm.getSymbolData.BaseAsset)+")\n        ")]),_vm._v(" "),_c('div',{staticClass:"exchange-table__head-item Roboto-Regular"},[_vm._v("\n          "+_vm._s(_vm.$t('exchange_total'))+" ("+_vm._s(_vm.getSymbolData.QuatoAsset)+")\n        ")])]):_vm._e(),_vm._v(" "),_c('div',{ref:"dataTable",staticClass:"table-overlay",class:{cardHeight: _vm.tab===2 || _vm.tab===3},attrs:{"id":"dataTable"}},[_c('table',{staticClass:"no-even-bg"},[_c('tbody',{staticClass:"Roboto-Medium"},_vm._l((_vm.list),function(item,index){return _c('tr',{key:index,staticClass:"cursor-pointer",on:{"click":function($event){return _vm.updateActionItems(item)}}},[_c('td',{class:_vm.valueColClass},[_vm._v("\n                "+_vm._s(_vm.formatPrice(item[0]))+"\n              ")]),_vm._v(" "),_c('td',{staticStyle:{"text-align":"right"}},[_vm._v("\n                "+_vm._s(_vm.formatAmount(item[1]))+"\n              ")]),_vm._v(" "),_c('td',{staticStyle:{"text-align":"right"}},[_vm._v("\n                "+_vm._s(_vm.formatTotal(Number(item[0]) * Number(item[1])))+"\n              ")])])}),0)])])])])],1)}
var Transactionsvue_type_template_id_62ad2188_staticRenderFns = []


// CONCATENATED MODULE: ./components/Exchange/SideTransactions/Transactions.vue?vue&type=template&id=62ad2188&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./Mixins/formatter.js
var formatter = __webpack_require__(691);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/SideTransactions/Transactions.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Transactionsvue_type_script_lang_js_ = ({
  mixins: [formatter["a" /* default */]],
  props: {
    type: {
      type: String,
      default: 'asks'
    },
    list: {
      default: () => [],
      type: Array
    },
    tab: {
      type: Number
    },
    valueColClass: {
      type: String,
      default: ''
    },
    limit: {
      type: Number,
      default: 9
    },
    styles: {
      type: Object,
      required: false
    },
    showTableHeaders: {
      required: false,
      default: true
    },
    scrollPos: {
      type: String,
      default: 'top'
    }
  },
  methods: {
    updateActionItems(v) {
      this.$store.commit('transactions/updateActionPrice', v[0]);

      if (this.type === 'asks') {
        this.$store.commit('transactions/updateActionBuyTotal', v[0] * v[1]);
      }

      if (this.type === 'bids') {
        this.$store.commit('transactions/updateActionSellQuantity', v[1]);
      }
    }

  },
  computed: { ...Object(external_vuex_["mapGetters"])({
      getSymbolData: 'symbol/getSymbolData'
    }),

    listLimit() {
      const {
        list
      } = this;
      if (list.length === 0) return;
      return new Array(this.limit).fill(0).map((v, i) => {
        return list[i];
      });
    }

  },
  watch: {
    list: {
      handler() {
        if (this.scrollPos === 'bottom') {
          const container = this.$el.querySelector('#dataTable');
          container.scrollTop = container.scrollHeight;
        }
      },

      deep: true
    }
  },

  mounted() {
    if (false) {}
  }

});
// CONCATENATED MODULE: ./components/Exchange/SideTransactions/Transactions.vue?vue&type=script&lang=js&
 /* harmony default export */ var SideTransactions_Transactionsvue_type_script_lang_js_ = (Transactionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Exchange/SideTransactions/Transactions.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1371)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SideTransactions_Transactionsvue_type_script_lang_js_,
  Transactionsvue_type_template_id_62ad2188_render,
  Transactionsvue_type_template_id_62ad2188_staticRenderFns,
  false,
  injectStyles,
  null,
  "e7c1af52"
  
)

/* harmony default export */ var Transactions = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Exchange/SideTransactions/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SideTransactionsvue_type_script_lang_js_ = ({
  components: {
    TransacitonTypeCard: TransacitonTypeCard["default"],
    ValueCard: ValueCard["default"],
    Transactions: Transactions
  },
  props: {
    transactions: {
      type: Object,
      default: () => {}
    },
    lastPrice: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      type: 1
    };
  },

  computed: {
    getBids() {
      return this.transactions.bids;
    },

    getAsks() {
      return this.transactions.asks;
    }

  },
  methods: {
    isActiveTab(v) {
      return this.type === v;
    }

  }
});
// CONCATENATED MODULE: ./components/Exchange/SideTransactions/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Exchange_SideTransactionsvue_type_script_lang_js_ = (SideTransactionsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Exchange/SideTransactions/index.vue



function SideTransactions_injectStyles (context) {
  
  var style0 = __webpack_require__(1373)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SideTransactions_component = Object(componentNormalizer["a" /* default */])(
  Exchange_SideTransactionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  SideTransactions_injectStyles,
  null,
  "5877f6e0"
  
)

/* harmony default export */ var SideTransactions = __webpack_exports__["default"] = (SideTransactions_component.exports);

/* nuxt-component-imports */
installComponents(SideTransactions_component, {TransacitonTypeCard: __webpack_require__(1014).default,Transactions: __webpack_require__(967).default,ValueCard: __webpack_require__(1015).default})


/***/ })

};;
//# sourceMappingURL=_symbol.js.map