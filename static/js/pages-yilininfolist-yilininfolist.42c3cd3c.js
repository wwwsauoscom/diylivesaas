(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-yilininfolist-yilininfolist"],{"2c5d":function(t,e,i){"use strict";i.r(e);var a=i("6009"),n=i("7050");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("b679");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"5258e491",null,!1,a["a"],r);e["default"]=l.exports},"464a":function(t,e,i){var a=i("24fb"),n=i("1de5"),o=i("6619");e=a(!1);var r=n(o);e.push([t.i,"uni-text[data-v-5258e491]{display:-webkit-box; /*弹性伸缩盒子模型显示*/-webkit-box-orient:vertical; /*排列方式*/-webkit-line-clamp:1; /*显示文本行数(这里控制多少行隐藏)*/overflow:hidden /*溢出隐藏*/}.back-btn[data-v-5258e491]{position:fixed;top:.2rem;left:.2rem;width:.3rem;height:.3rem;background:url("+r+") no-repeat;background-size:100% 100%;z-index:2}.slide-wrap[data-v-5258e491]{padding:.15rem}.title[data-v-5258e491]{padding:0 .15rem;font-size:.16rem;color:#f1f1f1}.list-wrap[data-v-5258e491]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:.2rem .15rem}.live-item[data-v-5258e491]{width:1.66rem;overflow:hidden;position:relative;margin-bottom:.1rem}.live-item .kv[data-v-5258e491]{width:100%;height:.95rem;border-radius:.1rem;overflow:hidden}.live-item .title[data-v-5258e491]{padding:0;height:.3rem;line-height:.3rem}.live-item .time-address[data-v-5258e491]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#ccc}.article-pv[data-v-5258e491]{width:.44rem;float:left}.live-item .time-address .time[data-v-5258e491]{width:1rem;font-size:.14rem}.live-item .time-address .address[data-v-5258e491]{width:.6rem;text-align:right}.live-item .verify[data-v-5258e491]{position:absolute;top:0;right:0;width:.5rem;height:.3rem;line-height:.3rem;text-align:center;background-color:#f5f5f5;border-radius:0 .1rem}.gongkai[data-v-5258e491]{color:#2979ff}.live-fufei[data-v-5258e491]{color:#fa3534}.mima[data-v-5258e491]{color:#f90}.baoming[data-v-5258e491]{color:#71d5a1}",""]),t.exports=e},"4ae9":function(t,e,i){var a=i("464a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4c9cbc32",a,!0,{sourceMap:!1,shadowMode:!1})},"542d":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-swiper-wrap",style:{borderRadius:t.borderRadius+"rpx"}},[i("v-uni-swiper",{style:{height:t.height+"rpx",backgroundColor:t.bgColor},attrs:{current:t.elCurrent,interval:t.interval,circular:t.circular,duration:t.duration,autoplay:t.autoplay,"previous-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0","next-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)}}},t._l(t.list,(function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"u-swiper-item"},[i("v-uni-view",{staticClass:"u-list-image-wrap",class:[t.uCurrent!=a?"u-list-scale":""],style:{borderRadius:t.borderRadius+"rpx",transform:t.effect3d&&t.uCurrent!=a?"scaleY(0.9)":"scaleY(1)",margin:t.effect3d&&t.uCurrent!=a?"0 20rpx":0},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.listClick(a)}}},[i("v-uni-image",{staticClass:"u-swiper-image",attrs:{src:e[t.name]||e,mode:t.imgMode}}),t.title&&e.title?i("v-uni-view",{staticClass:"u-swiper-title u-line-1",style:[{"padding-bottom":t.titlePaddingBottom},t.titleStyle]},[t._v(t._s(e.title))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"u-swiper-indicator",style:{top:"topLeft"==t.indicatorPos||"topCenter"==t.indicatorPos||"topRight"==t.indicatorPos?"12rpx":"auto",bottom:"bottomLeft"==t.indicatorPos||"bottomCenter"==t.indicatorPos||"bottomRight"==t.indicatorPos?"12rpx":"auto",justifyContent:t.justifyContent,padding:"0 "+(t.effect3d?"74rpx":"24rpx")}},["rect"==t.mode?t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"u-indicator-item-rect",class:{"u-indicator-item-rect-active":a==t.uCurrent}})})):t._e(),"dot"==t.mode?t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"u-indicator-item-dot",class:{"u-indicator-item-dot-active":a==t.uCurrent}})})):t._e(),"round"==t.mode?t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"u-indicator-item-round",class:{"u-indicator-item-round-active":a==t.uCurrent}})})):t._e(),"number"==t.mode?[i("v-uni-view",{staticClass:"u-indicator-item-number"},[t._v(t._s(t.uCurrent+1)+"/"+t._s(t.list.length))])]:t._e()],2)],1)},o=[]},6009:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uSwiper:i("da32").default,uImage:i("111d").default,uMask:i("b323").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"page-background",style:"background-image: url("+t.home.backImg+");"}),1==t.home.backSyStatus?i("v-uni-view",{staticClass:"back-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backButton()}}}):t._e(),i("v-uni-scroll-view",{style:"height: "+t.windowHeight+"px;",attrs:{"scroll-y":!0,"lower-threshold":200},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.getLiveProjectList()}}},[i("v-uni-view",[i("v-uni-view",{staticClass:"slide-wrap"},[i("u-swiper",{staticClass:"swiper",attrs:{list:t.slideList,name:"thumb",height:"405"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.slideClick.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v(t._s(t.home.name))])],1),i("v-uni-view",{staticClass:"list-wrap"},t._l(t.liveList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"live-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toLive(e)}}},[i("v-uni-view",{staticClass:"kv"},[1==t.home.homeType?i("u-image",{attrs:{src:e.kvImg,mode:"widthFix"}}):3==t.home.homeType?i("u-image",{attrs:{src:e.kv,mode:"widthFix"}}):4==t.home.homeType?i("u-image",{attrs:{src:e.voteKv,mode:"widthFix"}}):t._e()],1),i("v-uni-view",{staticClass:"info"},[1==t.home.homeType||3==t.home.homeType?i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v(t._s(e.title))])],1):t._e(),4==t.home.homeType?i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v(t._s(e.voteTitle))])],1):t._e(),1==t.home.homeType?i("v-uni-view",{staticClass:"time-address"},[i("v-uni-text",{staticClass:"time"},[t._v(t._s(t.gettime(e.livetime,0)))]),i("v-uni-text",{staticClass:"address"},[t._v(t._s(e.address))])],1):3==t.home.homeType?i("v-uni-view",{staticClass:"time-address"},[i("v-uni-text",{staticClass:"time"},[t._v(t._s(t.gettime(e.releaseCtime,0)))]),i("v-uni-view",{staticClass:"address"})],1):4==t.home.homeType?i("v-uni-view",{staticClass:"time-address"},[i("v-uni-text",{staticClass:"time"},[t._v(t._s(t.gettime(e.voteBeginTime,0)))])],1):t._e()],1),1==t.home.homeType?i("v-uni-view",{staticClass:"verify",class:t.verifyClass(e.verify)},[t._v(t._s(t.verify(e.verify)))]):t._e(),4==t.home.homeType?i("v-uni-view",{staticClass:"verify",class:t.voteClass(e.voteBeginTime,e.voteEndTime)},[t._v(t._s(t.vote(e.voteBeginTime,e.voteEndTime)))]):t._e()],1)})),1)],1)],1),i("u-mask",{attrs:{show:t.pageShow,"custom-style":{background:"#fff"}}})],1)},o=[]},7050:function(t,e,i){"use strict";i.r(e);var a=i("868c"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"80cf":function(t,e,i){"use strict";var a=i("c4c0"),n=i.n(a);n.a},"868c":function(t,e,i){"use strict";i("c975"),i("e25e"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{pageShow:!0,userId:0,homeId:0,slideList:[],home:{},liveList:[],page:1,limit:6,windowHeight:0,listSwitch:!0}},onLoad:function(){this.windowHeight=uni.getSystemInfoSync().windowHeight,this.homeId=location.href.split("/").pop(),this.getSlideList(),this.getHomeInfo(),this.wxShare()},methods:{wxShare:function(){var t=this;this.$u.api.getWxShare({url:location.href,userId:this.vuex_userId,typeId:3,keyId:this.homeId}).then((function(e){if(0==e.code){var i=e.data;t.wxConfig(i)}}))},getSlideList:function(){var t=this;this.$u.api.getSlideList({homeId:this.homeId}).then((function(e){0==e.code&&(t.slideList=e.data)}))},getHomeInfo:function(){var t=this;this.$u.api.getHomeInfo(this.homeId).then((function(e){0==e.code&&(uni.setNavigationBarTitle({title:e.home.name}),t.userId=e.home.userId,t.$u.vuex("vuex_userId",e.home.userId),t.home=e.home,t.getLiveProjectList())}))},slideClick:function(t){null!=this.slideList[t].url&&""!=this.slideList[t].url&&(location.href=-1!=this.slideList[t].url.indexOf("http")?this.slideList[t].url:"//"+this.slideList[t].url)},getLiveProjectList:function(){var t=this;if(!this.listSwitch)return!1;1==this.home.homeType?this.$u.api.getLiveProjectList({homeId:this.homeId,liveType:2,page:this.page,limit:this.limit}).then((function(e){0==e.code&&(t.page>=e.page.totalPage&&(t.listSwitch=!1),t.liveList.push.apply(t.liveList,e.page.list),t.page++)})):3==this.home.homeType?this.$u.api.getArticleList({userId:this.userId,page:this.page,limit:this.limit}).then((function(e){0==e.code&&(t.page>=e.page.totalPage&&(t.listSwitch=!1),t.liveList.push.apply(t.liveList,e.page.list),t.page++)})):4==this.home.homeType&&this.$u.api.getVoteList({userId:this.userId,page:this.page,limit:this.limit}).then((function(e){0==e.code&&(t.page>=e.page.totalPage&&(t.listSwitch=!1),t.liveList.push.apply(t.liveList,e.page.list),t.page++)})),this.pageShow=!1},backButton:function(){uni.navigateTo({url:"/home/"+this.userId})},toLive:function(t){1==this.home.homeType?uni.navigateTo({url:"/live/"+t.liveId}):3==this.home.homeType?uni.navigateTo({url:"/article/"+t.id}):4==this.home.homeType&&uni.navigateTo({url:"/vote/"+t.id})},verify:function(t){return 0==t?"公开":1==t?"付费":2==t?"密码":3==t?"报名":void 0},verifyClass:function(t){return 0==t?"gongkai":1==t?"live-fufei":2==t?"mima":3==t?"baoming":void 0},voteClass:function(t,e){var i=parseInt((new Date).getTime()/1e3);return i<t?"baoming":i>t&&i<e?"gongkai":"live-fufei"},vote:function(t,e){var i=parseInt((new Date).getTime()/1e3);return i<t?"未开始":i>t&&i<e?"进行中":"已结束"}}};e.default=a},8867:function(t,e,i){"use strict";i.r(e);var a=i("abd2"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},abd2:function(t,e,i){"use strict";i("c975"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-swiper",props:{list:{type:Array,default:function(){return[]}},title:{type:Boolean,default:!1},indicator:{type:Object,default:function(){return{}}},borderRadius:{type:[Number,String],default:8},interval:{type:[String,Number],default:3e3},mode:{type:String,default:"round"},height:{type:[Number,String],default:250},indicatorPos:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousMargin:{type:[Number,String],default:50},autoplay:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},circular:{type:Boolean,default:!0},imgMode:{type:String,default:"aspectFill"},name:{type:String,default:"image"},bgColor:{type:String,default:"#f3f4f6"},current:{type:[Number,String],default:0},titleStyle:{type:Object,default:function(){return{}}}},watch:{list:function(t,e){t.length!==e.length&&(this.uCurrent=0)},current:function(t){this.uCurrent=t}},data:function(){return{uCurrent:this.current}},computed:{justifyContent:function(){return"topLeft"==this.indicatorPos||"bottomLeft"==this.indicatorPos?"flex-start":"topCenter"==this.indicatorPos||"bottomCenter"==this.indicatorPos?"center":"topRight"==this.indicatorPos||"bottomRight"==this.indicatorPos?"flex-end":void 0},titlePaddingBottom:function(){var t=0;return"none"==this.mode?"12rpx":(t=["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"==this.mode?"60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"!=this.mode?"40rpx":"12rpx",t)},elCurrent:function(){return Number(this.current)}},methods:{listClick:function(t){this.$emit("click",t)},change:function(t){var e=t.detail.current;this.uCurrent=e,this.$emit("change",e)},animationfinish:function(t){}}};e.default=a},b679:function(t,e,i){"use strict";var a=i("4ae9"),n=i.n(a);n.a},c22d:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-swiper-wrap[data-v-b5a02ffc]{position:relative;overflow:hidden;-webkit-transform:translateY(0);transform:translateY(0)}.u-swiper-image[data-v-b5a02ffc]{width:100%;will-change:transform;height:100%;display:block;pointer-events:none}.u-swiper-indicator[data-v-b5a02ffc]{padding:0 %?24?%;position:absolute;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\nwidth:100%;z-index:1}.u-indicator-item-rect[data-v-b5a02ffc]{width:%?26?%;height:%?8?%;margin:0 %?6?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-rect-active[data-v-b5a02ffc]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-dot[data-v-b5a02ffc]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-dot-active[data-v-b5a02ffc]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-round[data-v-b5a02ffc]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-round-active[data-v-b5a02ffc]{width:%?34?%;background-color:hsla(0,0%,100%,.8)}.u-indicator-item-number[data-v-b5a02ffc]{padding:%?6?% %?16?%;line-height:1;background-color:rgba(0,0,0,.3);border-radius:%?100?%;font-size:%?26?%;color:hsla(0,0%,100%,.8)}.u-list-scale[data-v-b5a02ffc]{-webkit-transform-origin:center center;transform-origin:center center}.u-list-image-wrap[data-v-b5a02ffc]{width:100%;height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-transition:all .5s;transition:all .5s;overflow:hidden;-webkit-box-sizing:content-box;box-sizing:initial;position:relative}.u-swiper-title[data-v-b5a02ffc]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;width:100%;font-size:%?28?%;padding:%?12?% %?24?%;color:hsla(0,0%,100%,.9)}.u-swiper-item[data-v-b5a02ffc]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\noverflow:hidden;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},c4c0:function(t,e,i){var a=i("c22d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("39a71f54",a,!0,{sourceMap:!1,shadowMode:!1})},da32:function(t,e,i){"use strict";i.r(e);var a=i("542d"),n=i("8867");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("80cf");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"b5a02ffc",null,!1,a["a"],r);e["default"]=l.exports}}]);