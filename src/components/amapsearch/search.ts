import {amapType, amapmixinApp, location} from '../../mixins/amap'

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
}

/**
 * methods interface
 * 
 * @interface methods
 */
interface methods{
}

type thisVue = props & Vue & amapType;
console.log(amapmixinApp);
export default {
  name: 'amapSearch',
  data () {
    return {
      // 高德地图相关的 amapmixin 中使用的 
      autocomplateInput: '',  // 用户输入值
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
      default: '北京',
      required: false
    },
    searchCount:{
      type: Number,
      default: 1,
      required: false
    }
  },
  methods:{
    setMarkerLocation(location:location){
      this.$emit('setMarker',location);
      console.log(location.lng, location.lat);
    }
  },
  mounted(this:thisVue){
    console.log(this.searchCount);
    // // 初始化 domId
    this.initAmap('amap-container',[this.defaultLat, this.defaultLng]);
    // // 自动完成 ''代表默认全国
    this.initAutocomplate("autocomplate-input", this.searchCount, this.defaultCity );
  },
  mixins:[amapmixinApp],
}