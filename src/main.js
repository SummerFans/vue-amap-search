"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var vm = new vue_1["default"]({
    el: '#app',
    components: { App },
    render: function (h) { return h(App_vue_1["default"]); }
});
