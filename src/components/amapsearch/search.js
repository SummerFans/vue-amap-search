"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var amap_1 = require("../../mixins/amap");
console.log(amap_1.amapmixinApp);
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
        selectType: function(this, val, oldVal){
          this.selectPeriphery(this.selectType,[this.defaultLat,this.defaultLng],'上海', 10)
        },
        defaultLng() {
          this.reInitAmap();
        },
        // defaultLat: {}
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
            default: '北京',
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
        icon: {
          type: String,
          default: 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iLTkgMTAgMjEgMjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTkgMTAgMjEgMjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4gPHN0eWxlIHR5cGU9InRleHQvY3NzIj4gLnN0MHtmaWxsOm5vbmU7fSAuc3Qxe2ZpbGw6IzMzMzMzMztmaWxsLW9wYWNpdHk6MC41O30gLnN0MntmaWxsOiNGRjZGNUM7fSA8L3N0eWxlPiA8Zz4gPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjEuNSIgY3k9IjE4IiByeD0iNC4yMDAwMSIgcnk9IjQiLz4gPHBhdGggY2xhc3M9InN0MSIgZD0iTS0wLjA0ODgzLDI5LjA2MTM0Qy0yLjMzMTU0LDI5LjI0MzktNCwyOS44MTgzNi00LDMwLjVjMCwwLjgyODQzLDIuNDYyNDYsMS41LDUuNSwxLjVTNywzMS4zMjg0Myw3LDMwLjUgYzAtMC42ODE2NC0xLjY2ODQ2LTEuMjU2MS0zLjk1MTE3LTEuNDM4NjZDMi4xMjU0MywyOS42NjQzMSwxLjUwMDA2LDMwLDEuNTAwMDYsMzBTMC44NzQ2MywyOS42NjQzMS0wLjA0ODgzLDI5LjA2MTM0eiIvPiA8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTAuOTUwMDEsMTguNDE0NTVDMTAuOTUwMDEsMTMuNzY3MDksNi43MTk3MywxMCwxLjUwMDA2LDEwYy01LjIxOTc5LDAtOS40NTAwNywzLjc2NzA5LTkuNDUwMDcsOC40MTQ1NSBjMCw0Ljg2NTM2LDUuMjIxODYsOC44OTcyOCw3LjkwMTE4LDEwLjY0Njc5QzAuODc0NjMsMjkuNjY0MzEsMS41MDAwNiwzMCwxLjUwMDA2LDMwczAuNjI1MzctMC4zMzU2OSwxLjU0ODc3LTAuOTM4NjYgQzUuNzI4MDksMjcuMzExODMsMTAuOTUwMDEsMjMuMjc5OTEsMTAuOTUwMDEsMTguNDE0NTV6IE0xLjUsMjJjLTIuMzE5MTUsMC00LjIwMDAxLTEuNzkwNTMtNC4yMDAwMS00Uy0wLjgxOTE1LDE0LDEuNSwxNCBjMi4zMTkwOSwwLDQuMjAwMDEsMS43OTA1Myw0LjIwMDAxLDRDNS43MDAwMSwyMC4yMDk1MywzLjgxOTA5LDIyLDEuNSwyMnoiLz4gPC9nPiA8L3N2Zz4=',
          require:false,
        },
        showSearch: {
          type: Boolean,
        },
        selectType: {
          type: String
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
        useClick: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    methods: {
        setMarkerLocation: function () {
            if (this.autoConfirm == false) {
                this.selectedPoi.isMoved = false;
                var loc = JSON.stringify(this.selectedPoi);
                this.$emit('pickedLocation', JSON.parse(loc));
            }
        },
        createScript(cb) {
          if (!window.amapConfig || !window.amapConfig.key) return console.error('No configuration for amap')          
          let el = document.createElement('script');
          el.src = `http://webapi.amap.com/maps?v=1.3&key=${window.amapConfig.key}`;
          el.onload = function() {
            setTimeout(() => {
              cb()
            }, 100)
          };
          document.head.appendChild(el);
        },
        reInitAmap() {
          this.createScript(() => {
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
        })
        },
    },
    mounted: function () {
        // 初始化 domId
        this.reInitAmap();
    },
    mixins: [amap_1.amapmixinApp],
};
