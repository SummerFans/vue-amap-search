import { amapType, amapmixinApp, location, poi } from '../../mixins/amap'

import Vue from 'vue'

/**
 * props & data interface
 * 
 * @interface props
 */
interface props {
  defaultLng: number;
  defaultLat: number;
  searchCount: number;
  defaultCity: string;
  width: number;
  height: number;
  autoConfirm: boolean;
  useClick: boolean;
  icon: string;
  showSearch: boolean;
  selectType: String;
  initMap: Function;
}

/**
 * methods interface
 * 
 * @interface methods
 */
interface methods {
  createScript: Function,
  reInitAmap: Function
}

type thisVue = props & methods & Vue & amapType;
// console.log(amapmixinApp);
export default {
  name: 'amapSearch',
  data() {
    return {
      // 高德地图相关的 amapmixin 中使用的 
      autocomplateInput: '',  // 用户输入值
    }
  },
  watch: {
    autocomplateInput: function (this: thisVue, val: any, oldVal: any) {
      this.$emit('userInput', val);
    },
    'selectedPoi.location.lat': function selectedPoiLocation(this: thisVue, newVal: location, oldVal: location) {
      /**
       * 如果不显示确定按钮, 拖到那里是哪里的话, 
       * searchCount 默认为1
       */
      if (this.autoConfirm) {
        this.selectedPoi.isMoved = false;
        let loc = JSON.stringify(this.selectedPoi);
        this.$emit('pickedLocation', JSON.parse(loc));
      }
    },
    selectType: function (this: thisVue, val: any, oldVal: any) {
      if(!this.defaultLat || !this.defaultLng) return;
      this.selectPeriphery(this.selectType, [this.defaultLat, this.defaultLng], '上海', 10);
    },
    defaultLng() {
      this.initMap();
    },
    defaultLat() {
      this.initMap();
    }
  },
  props: {
    defaultLng: {
      type: Number,
      // default: 31.230489,
      required: false
    },
    defaultLat: {
      type: Number,
      // default: 121.473669, //[31.230489,121.473669]
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
    setMarkerLocation(this: thisVue) {
      if (this.autoConfirm == false) {
        this.selectedPoi.isMoved = false;
        let loc = JSON.stringify(this.selectedPoi);
        this.$emit('pickedLocation', JSON.parse(loc));
      }
    },
    createScript(cb: Function) {
      if (!window['amapConfig'] || !window['amapConfig']['key']) return console.error('No configuration for amap')
      let el = document.createElement('script');
      el.src = `http://webapi.amap.com/maps?v=1.3&key=${window['amapConfig']['key']}`;
      el.onload = function () {
        cb()
      };
      document.head.appendChild(el);
    },
    initMap() {
      if (!this.defaultLng || !this.defaultLat) return;
      this.initAmap('amap-container', [this.defaultLat, this.defaultLng], this.icon);
      /**
       * 如果不显示确定按钮, 拖到那里是哪里的话, 
       * searchCount 默认为1
       */
      let searchCount = this.autoConfirm ? 1 : this.searchCount;

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

    }
  },
  mounted(this: thisVue) {
    // 初始化 domId
    this.createScript(() => {
      this.initMap();
    })
  },
  mixins: [amapmixinApp],
}