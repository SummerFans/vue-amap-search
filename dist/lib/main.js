(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = __webpack_require__(4).default;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "amap-search__container",
    style: ({
      width: _vm.width + 'px',
      height: _vm.height + 'px'
    })
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showSearch),
      expression: "showSearch"
    }],
    staticClass: "amap-search__autocomplate"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.autocomplateInput),
      expression: "autocomplateInput"
    }],
    attrs: {
      "type": "text",
      "id": "autocomplate-input",
      "autocomplete": "off",
      "placeholder": "输入详细地址,越详细定位越精准"
    },
    domProps: {
      "value": (_vm.autocomplateInput)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.searchDefaultSuggestion($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.autocomplateInput = $event.target.value
      }
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "amap-search__search-btn",
    on: {
      "click": _vm.searchDefaultSuggestion
    }
  }, [_vm._v("\n          搜索\n      ")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.selectedPoi.location.lat),
      expression: "selectedPoi.location.lat"
    }],
    ref: "marker-content",
    staticClass: "marker-content"
  }, [_c('div', {
    staticClass: "marker-content-header"
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.selectedPoi.isMoved == false),
      expression: "selectedPoi.isMoved==false"
    }],
    staticClass: "notice-icon"
  }, [_vm._v("⚑")]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.selectedPoi.isMoved == false),
      expression: "selectedPoi.isMoved==false"
    }],
    staticClass: "notice"
  }, [_vm._v("已将坐标定位为")]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.selectedPoi.isMoved),
      expression: "selectedPoi.isMoved"
    }],
    staticClass: "notice"
  }, [_vm._v("坐标定位")])]), _vm._v(" "), _c('div', {
    staticClass: "marker-info"
  }, [_c('div', {
    staticClass: "marker-name"
  }, [_vm._v(_vm._s(_vm.selectedPoi.name))]), _vm._v(" "), _c('div', {
    staticClass: "marker-address"
  }, [_vm._v(_vm._s(_vm.selectedPoi.address))])]), _vm._v(" "), _c('a', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.selectedPoi.isMoved),
      expression: "selectedPoi.isMoved"
    }],
    staticClass: "amap-search__confirm-btn",
    on: {
      "click": function($event) {
        _vm.setMarkerLocation(_vm.selectedPoi)
      }
    }
  }, [_vm._v("确定")])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "amap-container"
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var amap_1 = __webpack_require__(6);
// console.log(amapmixinApp);
exports.default = {
    name: 'amapSearch',
    data: function () {
        return {
            // 高德地图相关的 amapmixin 中使用的 
            autocomplateInput: '',
        };
    },
    watch: {
        autocomplateInput: function (val, oldVal) {
            this.$emit('userInput', val);
        },
        'selectedPoi.location.lat': function selectedPoiLocation(newVal, oldVal) {
            /**
             * 如果不显示确定按钮, 拖到那里是哪里的话,
             * searchCount 默认为1
             */
            if (this.autoConfirm) {
                this.selectedPoi.isMoved = false;
                var loc = JSON.stringify(this.selectedPoi);
                this.$emit('pickedLocation', JSON.parse(loc));
            }
        },
        selectType: function (val, oldVal) {
            console.log('ss');
            this.selectPeriphery(this.selectType, [this.defaultLat, this.defaultLng], '上海', 10);
        }
    },
    props: {
        defaultLng: {
            type: Number,
            default: 31.230489,
            required: false
        },
        defaultLat: {
            type: Number,
            default: 121.473669,
            required: false
        },
        defaultCity: {
            type: String,
            default: '上海',
            required: false
        },
        searchCount: {
            type: Number,
            default: 1,
            required: false
        },
        width: {
            type: [String, Number],
            required: true
        },
        height: {
            type: Number,
            required: true
        },
        autoConfirm: {
            type: Boolean,
            default: false,
            required: false
        },
        icon: {
            type: String,
            default: 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iLTkgMTAgMjEgMjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTkgMTAgMjEgMjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4gPHN0eWxlIHR5cGU9InRleHQvY3NzIj4gLnN0MHtmaWxsOm5vbmU7fSAuc3Qxe2ZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MC41O30gLnN0MntmaWxsOiNGRjZGNUM7fSA8L3N0eWxlPiA8Zz4gPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjEuNSIgY3k9IjE4IiByeD0iNC4yMDAwMSIgcnk9IjQiLz4gPHBhdGggY2xhc3M9InN0MSIgZD0iTS0wLjA0ODgzLDI5LjA2MTM0Qy0yLjMzMTU0LDI5LjI0MzktNCwyOS44MTgzNi00LDMwLjVjMCwwLjgyODQzLDIuNDYyNDYsMS41LDUuNSwxLjVTNywzMS4zMjg0Myw3LDMwLjUgYzAtMC42ODE2NC0xLjY2ODQ2LTEuMjU2MS0zLjk1MTE3LTEuNDM4NjZDMi4xMjU0MywyOS42NjQzMSwxLjUwMDA2LDMwLDEuNTAwMDYsMzBTMC44NzQ2MywyOS42NjQzMS0wLjA0ODgzLDI5LjA2MTM0eiIvPiA8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTAuOTUwMDEsMTguNDE0NTVDMTAuOTUwMDEsMTMuNzY3MDksNi43MTk3MywxMCwxLjUwMDA2LDEwYy01LjIxOTc5LDAtOS40NTAwNywzLjc2NzA5LTkuNDUwMDcsOC40MTQ1NSBjMCw0Ljg2NTM2LDUuMjIxODYsOC44OTcyOCw3LjkwMTE4LDEwLjY0Njc5QzAuODc0NjMsMjkuNjY0MzEsMS41MDAwNiwzMCwxLjUwMDA2LDMwczAuNjI1MzctMC4zMzU2OSwxLjU0ODc3LTAuOTM4NjYgQzUuNzI4MDksMjcuMzExODMsMTAuOTUwMDEsMjMuMjc5OTEsMTAuOTUwMDEsMTguNDE0NTV6IE0xLjUsMjJjLTIuMzE5MTUsMC00LjIwMDAxLTEuNzkwNTMtNC4yMDAwMS00Uy0wLjgxOTE1LDE0LDEuNSwxNCBjMi4zMTkwOSwwLDQuMjAwMDEsMS43OTA1Myw0LjIwMDAxLDRDNS43MDAwMSwyMC4yMDk1MywzLjgxOTA5LDIyLDEuNSwyMnoiLz4gPC9nPiA8L3N2Zz4=',
            required: false,
        },
        useClick: {
            type: Boolean,
            default: false,
            required: false
        },
        showSearch: {
            type: Boolean,
            default: false,
            required: false,
        },
        selectType: {
            type: String,
            default: '',
            required: false,
        }
    },
    methods: {
        setMarkerLocation: function () {
            if (this.autoConfirm == false) {
                this.selectedPoi.isMoved = false;
                var loc = JSON.stringify(this.selectedPoi);
                this.$emit('pickedLocation', JSON.parse(loc));
            }
        }
    },
    mounted: function () {
        // 初始化 domId
        this.initAmap('amap-container', [this.defaultLat, this.defaultLng], this.icon);
        /**
         * 如果不显示确定按钮, 拖到那里是哪里的话,
         * searchCount 默认为1
         */
        var searchCount = this.autoConfirm ? 1 : this.searchCount;
        /**
         * 如果支持用户点击, 点在哪里是哪里
         * searchCount 默认为1
         */
        if (this.useClick) {
            this.initMouseTools();
            searchCount = 1;
        }
        // 初始化 自动完成 domId ''代表默认全国
        this.initAutocomplate("autocomplate-input", searchCount, this.defaultCity);
    },
    mixins: [amap_1.amapmixinApp],
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(0),
  /* template */
  __webpack_require__(3),
  /* scopeId */
  null,
  /* cssModules */
  null
)

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.amapmixinApp = {
    data: function () {
        return {
            map: {},
            autocomplete: {},
            placeSearch: {},
            amapCounty: {},
            geocoder: {},
            selectedPoi: {
                location: {
                    lat: 0,
                    lng: 0
                },
                address: '',
                name: '',
                isMoved: true
            },
            editingPolygon: {},
            mouseTool: {}
        };
    },
    mounted: function () {
        // console.log('amapmixin mounted');
    },
    methods: {
        /**
         * 初始化amap对象
         */
        initAmap: function (domContainer, mapCenter, icon) {
            var vm = this;
            vm.map = new AMap.Map(domContainer, {
                resizeEnable: true,
                zoom: 14,
                center: mapCenter
            });
            vm.marker = new AMap.Marker({
                position: mapCenter,//marker所在的位置
                map: vm.map,//创建时直接赋予map属性
                icon: icon
            });
            vm.marker.setMap(vm.map);
            AMap.plugin(['AMap.Geocoder','AMap.ToolBar', 'AMap.Scale'], function () {
                vm.map.addControl(new AMap.ToolBar());
                vm.map.addControl(new AMap.Scale());
            });
            vm.geocoder = new AMap.Geocoder({
                radius: 1000,
                extensions: "all"
            });
            if (AMap.MouseTool) {
                vm.mouseTool = new AMap.MouseTool(vm.map);
            }
        },
        /**
         * 初始化搜索菜单
         *
         * @param {string} cityname
         */
        initAutocomplate: function (domContainer, pageSize, cityname) {
            // console.log('cityname', cityname);
            var vm = this;
            AMap.plugin(['AMap.Geocoder','AMap.Autocomplete', 'AMap.PlaceSearch'], function () {
                var autoOptions = {
                    city: cityname && '',
                    input: domContainer //使用联想输入的input的id
                };
                vm.autocomplete = new AMap.Autocomplete(autoOptions);
                vm.placeSearch = new AMap.PlaceSearch({
                    city: cityname,
                    map: '',
                    pageSize: pageSize
                });
                AMap.event.addListener(vm.autocomplete, "select", function (e) {
                    //TODO 针对选中的poi实现自己的功能
                    console.log('autocomplate select event');
                    vm.autocomplateInput = e.poi.name;
                    vm.placeSearch.search(e.poi.name, function (status, result) {
                        if (status === 'complete' && result.info === 'OK') {
                            // 清除所有覆盖物
                            vm.map.clearMap();
                            // 绘制自己的坐标点
                            vm.renderSearchMarker(result.poiList.pois);
                            // 地图自适应显示
                            vm.map.setFitView();
                            vm.map.setZoom(14);
                            // 清除搜索结果
                            vm.placeSearch.clear();
                        }
                        else {
                            console.log("没有匹配结果<br>或者结果太多");
                        }
                    });
                });
            });
        },
        /**
         * 地图鼠标单击事件
         */
        initMouseTools: function () {
            var vm = this;
            vm.mouseTool.marker();
            vm.mouseTool.on('draw', function (data) {
                vm.map.clearMap();
                var position = data.obj.getPosition();
                vm.geocoder.getAddress(position, function (status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        console.log(result);
                        var _address = result.regeocode.addressComponent;
                        var poi = {
                            location: position,
                            address: _address.district + _address.street + _address.streetNumber,
                            name: result.regeocode.formattedAddress
                        };
                        vm.renderSearchMarker([poi], true);
                    }
                });
            });
        },
        // 如果有一个结果, 自动设置. 如果没有让用户选择
        searchDefaultSuggestion: function (event) {
            var vm = this;
            // TODO: 如果输入回车 自动blur userInput
            vm.placeSearch.search(this.autocomplateInput, function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    // 清除所有覆盖物
                    vm.map.clearMap();
                    // 绘制自己的坐标点
                    vm.renderSearchMarker(result.poiList.pois);
                    // 地图自适应显示
                    vm.map.setFitView();
                    vm.map.setZoom(14);
                    // 清除搜索结果
                    vm.placeSearch.clear();
                }
                else {
                    console.log("没有匹配结果<br>或者结果太多");
                }
            });
        },
        /**
         * 显示自定义的marker
         */
        renderSearchMarker: function (poiList) {
            var vm = this;
            var infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
            var poiIndex = 0;
            var _loop_1 = function (poi) {
                poiIndex++;
                marker = new AMap.Marker({
                    position: poi.location,
                    map: vm.map,
                    icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_r' + (poiIndex) + '.png',
                    draggable: true
                });
                marker.content = vm.$refs["marker-content"];
                // 默认没有移动过
                marker.setExtData({ isMoved: true, poiIndex: poiIndex });
                marker.on('click', function (e) {
                    //  如果信息有更改
                    vm.selectedPoi.location = poi.location;
                    vm.selectedPoi.address = poi.address;
                    vm.selectedPoi.name = poi.name;
                    vm.selectedPoi.isMoved = this.getExtData().isMoved;
                    infoWindow.setContent(e.target.content);
                    infoWindow.open(vm.map, e.target.getPosition());
                });
                // 触发一次click显示
                marker.emit('click', { target: marker });
                // 因为会自动触发 拖拽之后也会触发 所以在这里做检查
                // vm.setMarkerLocation(poi);
                marker.on('dragstart', function (e) {
                    vm.map.clearInfoWindow();
                });
                marker.on('dragend', function (e) {
                    var that = this;
                    console.log(e.lnglat);
                    that.setExtData({ isMoved: true });
                    var lat = e.lnglat.lat, lng = e.lnglat.lng;
                    that.setPosition(new AMap.LngLat(lng, lat));
                    vm.geocoder.getAddress(e.lnglat, function (status, result) {
                        if (status === 'complete' && result.info === 'OK') {
                            console.log(result);
                            var _address = result.regeocode.addressComponent;
                            vm.selectedPoi.location = e.lnglat;
                            vm.selectedPoi.address = _address.district + _address.street + _address.streetNumber;
                            vm.selectedPoi.name = result.regeocode.formattedAddress;
                            vm.selectedPoi.isMoved = that.getExtData().isMoved;
                            console.log(vm.selectedPoi.name);
                            infoWindow.setContent(e.target.content);
                            infoWindow.open(vm.map, e.target.getPosition());
                        }
                    });
                    // 
                });
            };
            var marker;
            for (var _i = 0, poiList_1 = poiList; _i < poiList_1.length; _i++) {
                var poi = poiList_1[_i];
                _loop_1(poi);
            }
        },
        /**
         * TODO:下一步功能
         * 改变行政区划的时候改变相应的区域
         * 用户选择北京的时候, 直接改变区域中心点
         */
        initAMapDistrictSearch: function (keyword, callback) {
            var vm = this;
            AMap.service('AMap.DistrictSearch', function () {
                var opts = {
                    subdistrict: 1,
                    extensions: 'base',
                    showbiz: false,
                    level: 'district' //查询行政级别为 县
                };
                //实例化DistrictSearch
                var district = new AMap.DistrictSearch(opts);
                //行政区查询
                district.search(keyword, function (status, result) {
                    var county = result.districtList[0];
                    // 设置地图中心点
                    vm.map.setCenter(county.center);
                    vm.map.setZoom(12);
                    callback(county);
                });
            });
        },
        selectPeriphery(selectType, mapCenter, cityname, pageSize){
          console.log('ss');
          const vm = this;
          vm.placeSearch = new AMap.PlaceSearch({
            city: cityname,
            type: selectType,
            map: vm.map,
            pageSize:pageSize || 10
          });
          vm.placeSearch.searchNearBy("", mapCenter, 1000, function(status, result) {
            console.log(result);
            if (status === 'complete' && result.info === 'OK') {
              // 清除所有覆盖物
              vm.map.clearMap();
              // 绘制自己的坐标点
              vm.renderSearchMarker(result.poiList.pois);
              // 地图自适应显示
              vm.map.setFitView();
              vm.map.setZoom(16);
              // 清除搜索结果
              vm.placeSearch.clear();
            }
          });
        },    
    }
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=main.js.map