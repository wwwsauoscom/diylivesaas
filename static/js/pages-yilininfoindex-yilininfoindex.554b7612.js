(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-yilininfoindex-yilininfoindex"],{"0cf6":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=o},"111d":function(t,e,i){"use strict";i.r(e);var o=i("8d5d"),n=i("22f2");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("1a2e");var r,s=i("f0c5"),u=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"885009e8",null,!1,o["a"],r);e["default"]=u.exports},"11ad":function(t,e,i){"use strict";i.r(e);var o=i("ae35"),n=i("a756");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("c837");var r,s=i("f0c5"),u=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"afadb4c2",null,!1,o["a"],r);e["default"]=u.exports},"16dc":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-mask[data-v-97c7ea6a]{position:fixed;top:0;left:0;right:0;bottom:0;opacity:0;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.u-mask-show[data-v-97c7ea6a]{opacity:1}.u-mask-zoom[data-v-97c7ea6a]{-webkit-transform:scale(1.2);transform:scale(1.2)}',""]),t.exports=e},"1a2e":function(t,e,i){"use strict";var o=i("6a3d"),n=i.n(o);n.a},"22f2":function(t,e,i){"use strict";i.r(e);var o=i("0cf6"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},2999:function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-mask",class:{"u-mask-zoom":t.zoom,"u-mask-show":t.show},style:[t.maskStyle,t.zoomStyle],attrs:{"hover-stop-propagation":!0},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),function(){}.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t._t("default")],2)},a=[]},"2dcb":function(t,e,i){var o=i("625b");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("3380dc55",o,!0,{sourceMap:!1,shadowMode:!1})},"345f":function(t,e,i){"use strict";var o=i("4ea4");i("a9e3"),i("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("5530")),a={name:"u-mask",props:{show:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:""},customStyle:{type:Object,default:function(){return{}}},zoom:{type:Boolean,default:!0},duration:{type:[Number,String],default:300},maskClickAble:{type:Boolean,default:!0}},data:function(){return{zoomStyle:{transform:""},scale:"scale(1.2, 1.2)"}},watch:{show:function(t){t&&this.zoom?this.zoomStyle.transform="scale(1, 1)":!t&&this.zoom&&(this.zoomStyle.transform=this.scale)}},computed:{maskStyle:function(){var t={backgroundColor:"rgba(0, 0, 0, 0.6)"};return this.show?t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.mask:t.zIndex=-1,t.transition="all ".concat(this.duration/1e3,"s ease-in-out"),Object.keys(this.customStyle).length&&(t=(0,n.default)((0,n.default)({},t),this.customStyle)),t}},methods:{click:function(){this.maskClickAble&&this.$emit("click")}}};e.default=a},3947:function(t,e,i){"use strict";var o=i("4ea4");i("c975"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=o(i("1da1")),a={data:function(){return{pageShow:!0,userId:0,userInfo:{},userConfig:{},homeList:[]}},onLoad:function(){this.userId=location.href.split("/").pop(),this.$u.vuex("vuex_userId",location.href.split("/").pop()),this.getAppid(),this.getHomeList(),this.wxShare()},methods:{wxShare:function(){var t=this;this.$u.api.getWxShare({url:location.href,userId:this.vuex_userId,typeId:0,keyId:this.userId}).then((function(e){if(0==e.code){var i=e.data;t.wxConfig(i)}}))},getAppid:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$u.api.getUserConfigInfo(t.userId);case 2:i=e.sent,0==i.code&&(sessionStorage.getItem("authCode"),t.$u.vuex("vuex_nowUrl",location.pathname),uni.setNavigationBarTitle({title:i.userInfo.sitename}),1==i.userConfig.h5AnimationStatus&&t.toYilininfo(),t.userInfo=i.userInfo,t.userConfig=i.userConfig);case 4:case"end":return e.stop()}}),e)})))()},toYilininfo:function(){sessionStorage.getItem("yilininfo")||uni.redirectTo({url:"/yilininfo/"+location.href.split("/").pop()})},getHomeList:function(){var t=this;this.$u.api.getHomeList(this.userId).then((function(e){0==e.code&&(t.homeList=e.data,t.pageShow=!1)}))},toListPage:function(t,e,i){0==t?location.href=-1!=i.indexOf("//")?i:"//"+i:uni.navigateTo({url:"/list/"+e})},toWebSite:function(){location.href=-1!=this.userInfo.website.indexOf("//")?this.userInfo.website:"//"+this.userInfo.website}}};e.default=a},"3dbe":function(t,e,i){"use strict";i.r(e);var o=i("345f"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},"625b":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,".top-wrap[data-v-afadb4c2]{height:2.5rem}.project-wrap[data-v-afadb4c2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:0 .175rem .5rem}.img-item[data-v-afadb4c2]{width:.8rem;height:1rem;margin:.25rem 0 0 .25rem}.footer-info[data-v-afadb4c2]{font-size:.12px;color:#fff;position:fixed;bottom:10px;left:0;text-align:center;width:100%}",""]),t.exports=e},"6a3d":function(t,e,i){var o=i("6cf1");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("84ffcf02",o,!0,{sourceMap:!1,shadowMode:!1})},"6cf1":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-image[data-v-885009e8]{position:relative;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.u-image__image[data-v-885009e8]{width:100%;height:100%}.u-image__loading[data-v-885009e8], .u-image__error[data-v-885009e8]{position:absolute;top:0;left:0;width:100%;height:100%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e},"8d5d":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var o={uIcon:i("39af").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():i("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?i("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):i("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?i("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):i("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},a=[]},a756:function(t,e,i){"use strict";i.r(e);var o=i("3947"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},a8b1:function(t,e,i){"use strict";var o=i("c999"),n=i.n(o);n.a},ae35:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var o={uImage:i("111d").default,uMask:i("b323").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"page-background",style:"background-image: url("+t.userInfo.homeBgc+");"}),i("v-uni-view",{staticClass:"top-wrap"}),i("v-uni-view",{staticClass:"project-wrap"},t._l(t.homeList,(function(e,o){return i("v-uni-view",{key:o,staticClass:"img-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toListPage(e.homeType,e.homeId,e.url)}}},[i("u-image",{attrs:{mode:"widthFix",src:e.thumb}})],1)})),1),i("v-uni-view",{staticClass:"footer-info"},[i("v-uni-view",{staticClass:"icpb"},[t._v(t._s(t.userInfo.icpb))]),""!=t.userInfo.copyright?i("v-uni-view",{staticClass:"copy-right"},[t._v("CopyRight"),i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toWebSite()}}},[t._v(t._s(t.userInfo.copyright))]),t._v("版权所有")],1):t._e()],1),i("u-mask",{attrs:{show:t.pageShow,"custom-style":{background:"#fff"}}})],1)},a=[]},b323:function(t,e,i){"use strict";i.r(e);var o=i("2999"),n=i("3dbe");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("a8b1");var r,s=i("f0c5"),u=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"97c7ea6a",null,!1,o["a"],r);e["default"]=u.exports},c837:function(t,e,i){"use strict";var o=i("2dcb"),n=i.n(o);n.a},c999:function(t,e,i){var o=i("16dc");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("2871403c",o,!0,{sourceMap:!1,shadowMode:!1})}}]);