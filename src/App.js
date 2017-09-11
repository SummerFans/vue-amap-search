"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * dev 使用, 直接修改源文件
 */
var search_vue_1 = require("./components/amapsearch/search.vue");
var MrRight = {
    name: 'Mr. Right'
};
exports.default = {
    name: 'app',
    data: function () {
        return {
            msg: 'Welcome to Your Vue.js App --- ' + MrRight.name,
            userInput: '',
            pickedLocation: {
                location: {}
            },
            selectType:''
        };
    },
    mounted() {
      setTimeout(()=>{
        this.selectType = '交通'
      },3000)
    },
    methods: {
        handleUserInput: function (_input) {
            this.userInput = _input;
        },
        handlePickedLocation: function (location) {
            this.pickedLocation = location;
        },
        clickSelect(v){
          this.selectType = v;
        }
    },
    components: {
        amapSearch: search_vue_1.default
    }
};
