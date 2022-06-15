"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Components_Products_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Products/Show.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Products/Show.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_Somemixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/Somemixin */ "./resources/js/mixins/Somemixin.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Show",
  data: function data() {
    return {
      products: [],
      cart: []
    };
  },
  mixins: [_mixins_Somemixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  computed: {
    product: function product() {
      var _this = this;

      return this.products.find(function (product) {
        return product.slug === _this.$route.params.slug;
      });
    }
  },
  methods: {
    formatCurrency: function formatCurrency(price) {
      price = price / 100;
      return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    },
    getProducts: function getProducts() {
      var _this2 = this;

      axios.get('/api/products').then(function (response) {
        _this2.updateProduct(response.data);
      })["catch"](function (error) {
        console.log(error.response.data);
      });
    },
    updateProduct: function updateProduct(product) {
      this.products = product;
    },
    addToCart: function addToCart(product) {
      var productInCartIndex = this.cart.findIndex(function (item) {
        return item.slug == product.slug;
      });

      if (productInCartIndex !== -1) {
        this.cart[productInCartIndex].quantity++;
        return;
      }

      product.quantity = 1;
      this.cart.push(product);
    }
  },
  created: function created() {
    this.getProducts();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Products/Show.vue?vue&type=template&id=1d0188ad":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Products/Show.vue?vue&type=template&id=1d0188ad ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "text-gray-700 body-font overflow-hidden"
};
var _hoisted_2 = {
  "class": "container px-12 py-24 mx-auto"
};
var _hoisted_3 = {
  "class": "lg:w-3/5 mx-auto flex flex-wrap"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://dummyimage.com/640",
  alt: "ecommerce img",
  "class": "lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
};
var _hoisted_6 = ["textContent"];
var _hoisted_7 = ["textContent"];
var _hoisted_8 = ["textContent"];
var _hoisted_9 = {
  "class": "flex mt-6 pt-4 border-t-2 border-gray-200"
};
var _hoisted_10 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.product ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.product.categories, function (category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h2", {
      "class": "text-sm title-font text-gray-500 tracking-widest uppercase inline-block mr-2",
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.name)
    }, null, 8
    /* PROPS */
    , _hoisted_6);
  }), 256
  /* UNKEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
    "class": "text-gray-900 text-3xl title-font font-medium mb-2",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.product.name)
  }, null, 8
  /* PROPS */
  , _hoisted_7), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "leading-relaxed",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.product.description)
  }, null, 8
  /* PROPS */
  , _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "title-font font-medium text-2xl text-gray-900",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatCurrency($options.product.price))
  }, null, 8
  /* PROPS */
  , _hoisted_10), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.addToCart($options.product);
    }),
    "class": "flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
  }, "Add to Card")])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./resources/js/mixins/Somemixin.js":
/*!******************************************!*\
  !*** ./resources/js/mixins/Somemixin.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      products: [],
      cart: [],
      order: {}
    };
  },
  methods: {}
});

/***/ }),

/***/ "./resources/js/Components/Products/Show.vue":
/*!***************************************************!*\
  !*** ./resources/js/Components/Products/Show.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_1d0188ad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=1d0188ad */ "./resources/js/Components/Products/Show.vue?vue&type=template&id=1d0188ad");
/* harmony import */ var _Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js */ "./resources/js/Components/Products/Show.vue?vue&type=script&lang=js");
/* harmony import */ var _home_phpdev_Desktop_projects_laravel_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_phpdev_Desktop_projects_laravel_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Show_vue_vue_type_template_id_1d0188ad__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Products/Show.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Products/Show.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/Products/Show.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Products/Show.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Products/Show.vue?vue&type=template&id=1d0188ad":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/Products/Show.vue?vue&type=template&id=1d0188ad ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_1d0188ad__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_1d0188ad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=template&id=1d0188ad */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Products/Show.vue?vue&type=template&id=1d0188ad");


/***/ })

}]);