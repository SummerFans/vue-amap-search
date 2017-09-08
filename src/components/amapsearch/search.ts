import {amapType, amapmixinApp, location, poi} from '../../mixins/amap'

import Vue from 'vue'

/**
 * props & data interface
 * 
 * @interface props
 */
interface props{
  defaultLng: number;
  defaultLat: number;
  searchCount: number;
  defaultCity: string;
  width: number;
  height: number;
  autoConfirm: boolean;
  useClick: boolean;
  icon: string;
}

/**
 * methods interface
 * 
 * @interface methods
 */
interface methods{
}

type thisVue = props & Vue & amapType;
// console.log(amapmixinApp);
export default {
  name: 'amapSearch',
  data () {
    return {
      // 高德地图相关的 amapmixin 中使用的 
      autocomplateInput: '',  // 用户输入值
    }
  },
  watch:{
    autocomplateInput: function(this:thisVue, val:any, oldVal:any){
      this.$emit('userInput',val);
    },
    'selectedPoi.location.lat': function selectedPoiLocation(this:thisVue, newVal:location,oldVal:location){
      /**
       * 如果不显示确定按钮, 拖到那里是哪里的话, 
       * searchCount 默认为1
       */
      if(this.autoConfirm){
        this.selectedPoi.isMoved = false;
        let loc = JSON.stringify(this.selectedPoi);
        this.$emit('pickedLocation',JSON.parse(loc));
      }
    }
  },
  props:{
    defaultLng: {
      type: Number,
      default: 39.90923,
      required: false
    },
    defaultLat: {
      type: Number,
      default: 116.397428,
      required: false
    },
    defaultCity:{
      type: String,
      default: '上海',
      required: false
    },
    searchCount:{
      type: Number,
      default: 1,
      required: false
    },
    width:{
      type: [String, Number],
      required: true
    },
    height:{
      type: Number,
      required: true
    },
    autoConfirm:{
      type: Boolean,
      default: false,
      required: false
    },
    icon: {
      type: String,
      default: 'data:image/svg+xml;utf-8,<svg t="1504841519075" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5797" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><defs><style type="text/css"></style></defs><path d="M512 1024s460.8-258.2016 460.8-593.152C972.8 192.8704 766.5152 0 512 0s-460.8 192.8704-460.8 430.848C51.2 765.7984 512 1024 512 1024z m0-409.6a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6z" fill="#FF6F5C" p-id="5798"></path></svg>',
      required: false,
    },
    useClick:{
      type: Boolean,
      default: false,
      required: false
    }
  },
  methods:{
    setMarkerLocation(this:thisVue){
      if(this.autoConfirm == false){
        this.selectedPoi.isMoved = false;
        let loc = JSON.stringify(this.selectedPoi);
        this.$emit('pickedLocation',JSON.parse(loc));
      }
    }
  },
  mounted(this:thisVue){
    // 初始化 domId
    this.initAmap('amap-container',[this.defaultLat, this.defaultLng], this.icon);

    /**
     * 如果不显示确定按钮, 拖到那里是哪里的话, 
     * searchCount 默认为1
     */
    let searchCount = this.autoConfirm ? 1 : this.searchCount;

    /**
     * 如果支持用户点击, 点在哪里是哪里
     * searchCount 默认为1
     */
    if(this.useClick){
      this.initMouseTools();
      searchCount = 1;
    }

    // 初始化 自动完成 domId ''代表默认全国
    this.initAutocomplate("autocomplate-input", searchCount, this.defaultCity );


  },
  mixins:[amapmixinApp],
}