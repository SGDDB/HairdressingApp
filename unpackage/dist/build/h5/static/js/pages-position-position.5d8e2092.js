(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-position-position"],{"299b":function(e,t,a){var r=a("91c1");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=a("4f06").default;o("7177cca1",r,!0,{sourceMap:!1,shadowMode:!1})},"3fa2":function(e,t,a){"use strict";a.r(t);var r=a("8e58"),o=a.n(r);for(var n in r)"default"!==n&&function(e){a.d(t,e,(function(){return r[e]}))}(n);t["default"]=o.a},7715:function(e,t,a){"use strict";a.r(t);var r=a("e8fc"),o=a("3fa2");for(var n in o)"default"!==n&&function(e){a.d(t,e,(function(){return o[e]}))}(n);a("ace6");var i,d=a("f0c5"),c=Object(d["a"])(o["default"],r["b"],r["c"],!1,null,"9e54c18e",null,!1,r["a"],i);t["default"]=c.exports},"8e58":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{siteList:[]}},onLoad:function(){this.getData()},methods:{getData:function(){this.siteList=[{id:1,name:"徐昕沛",phone:"187****0966",tag:[{tagText:"默认"},{tagText:"家"}],site:"山西省大同市魏都新城 魏都大道66号"},{id:2,name:"徐昕沛",phone:"157****4893",tag:[{tagText:"学校"}],site:"山西省太原市中北大学 学院路3号"}]},toAddSite:function(){uni.navigateTo({url:"../addsite/addsite"})}}};t.default=r},"91c1":function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */.u-line-1[data-v-9e54c18e]{\r\n\r\n\r\noverflow:hidden;white-space:nowrap;text-overflow:ellipsis\n}.u-line-2[data-v-9e54c18e]{\r\n\r\n\r\ndisplay:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important\n}.u-line-3[data-v-9e54c18e]{\r\n\r\n\r\ndisplay:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important\n}.u-line-4[data-v-9e54c18e]{\r\n\r\n\r\ndisplay:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important\n}.u-line-5[data-v-9e54c18e]{\r\n\r\n\r\ndisplay:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important\n}.u-border[data-v-9e54c18e]{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.u-border-top[data-v-9e54c18e]{border-top-width:.5px!important;border-color:#dadbde!important;border-top-style:solid}.u-border-left[data-v-9e54c18e]{border-left-width:.5px!important;border-color:#dadbde!important;border-left-style:solid}.u-border-right[data-v-9e54c18e]{border-right-width:.5px!important;border-color:#dadbde!important;border-right-style:solid}.u-border-bottom[data-v-9e54c18e]{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}.u-border-top-bottom[data-v-9e54c18e]{border-top-width:.5px!important;border-bottom-width:.5px!important;border-color:#dadbde!important;border-top-style:solid;border-bottom-style:solid}.u-reset-button[data-v-9e54c18e]{padding:0;background-color:initial;\r\nfont-size:inherit;line-height:inherit;color:inherit;\n}\n.u-reset-button[data-v-9e54c18e]::after{border:none}\n.u-hover-class[data-v-9e54c18e]{opacity:.7}.u-primary-light[data-v-9e54c18e]{color:#ecf5ff}.u-warning-light[data-v-9e54c18e]{color:#fdf6ec}.u-success-light[data-v-9e54c18e]{color:#f5fff0}.u-error-light[data-v-9e54c18e]{color:#fef0f0}.u-info-light[data-v-9e54c18e]{color:#f4f4f5}.u-primary-light-bg[data-v-9e54c18e]{background-color:#ecf5ff}.u-warning-light-bg[data-v-9e54c18e]{background-color:#fdf6ec}.u-success-light-bg[data-v-9e54c18e]{background-color:#f5fff0}.u-error-light-bg[data-v-9e54c18e]{background-color:#fef0f0}.u-info-light-bg[data-v-9e54c18e]{background-color:#f4f4f5}.u-primary-dark[data-v-9e54c18e]{color:#398ade}.u-warning-dark[data-v-9e54c18e]{color:#f1a532}.u-success-dark[data-v-9e54c18e]{color:#53c21d}.u-error-dark[data-v-9e54c18e]{color:#e45656}.u-info-dark[data-v-9e54c18e]{color:#767a82}.u-primary-dark-bg[data-v-9e54c18e]{background-color:#398ade}.u-warning-dark-bg[data-v-9e54c18e]{background-color:#f1a532}.u-success-dark-bg[data-v-9e54c18e]{background-color:#53c21d}.u-error-dark-bg[data-v-9e54c18e]{background-color:#e45656}.u-info-dark-bg[data-v-9e54c18e]{background-color:#767a82}.u-primary-disabled[data-v-9e54c18e]{color:#9acafc}.u-warning-disabled[data-v-9e54c18e]{color:#f9d39b}.u-success-disabled[data-v-9e54c18e]{color:#a9e08f}.u-error-disabled[data-v-9e54c18e]{color:#f7b2b2}.u-info-disabled[data-v-9e54c18e]{color:#c4c6c9}.u-primary[data-v-9e54c18e]{color:#3c9cff}.u-warning[data-v-9e54c18e]{color:#f9ae3d}.u-success[data-v-9e54c18e]{color:#5ac725}.u-error[data-v-9e54c18e]{color:#f56c6c}.u-info[data-v-9e54c18e]{color:#909399}.u-primary-bg[data-v-9e54c18e]{background-color:#3c9cff}.u-warning-bg[data-v-9e54c18e]{background-color:#f9ae3d}.u-success-bg[data-v-9e54c18e]{background-color:#5ac725}.u-error-bg[data-v-9e54c18e]{background-color:#f56c6c}.u-info-bg[data-v-9e54c18e]{background-color:#909399}.u-main-color[data-v-9e54c18e]{color:#303133}.u-content-color[data-v-9e54c18e]{color:#606266}.u-tips-color[data-v-9e54c18e]{color:#909193}.u-light-color[data-v-9e54c18e]{color:#c0c4cc}\n.u-safe-area-inset-top[data-v-9e54c18e]{padding-top:0;padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.u-safe-area-inset-right[data-v-9e54c18e]{padding-right:0;padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right)}.u-safe-area-inset-bottom[data-v-9e54c18e]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.u-safe-area-inset-left[data-v-9e54c18e]{padding-left:0;padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left)}\nuni-toast[data-v-9e54c18e]{z-index:10090}uni-toast .uni-toast[data-v-9e54c18e]{z-index:10090}\n[data-v-9e54c18e]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.item[data-v-9e54c18e]{padding:%?40?% %?20?%}.item .top[data-v-9e54c18e]{display:flex;font-weight:700;font-size:%?34?%}.item .top .phone[data-v-9e54c18e]{margin-left:%?60?%}.item .top .tag[data-v-9e54c18e]{display:flex;font-weight:400;align-items:center}.item .top .tag uni-text[data-v-9e54c18e]{display:block;width:%?60?%;height:%?34?%;line-height:%?34?%;color:#fff;font-size:%?20?%;border-radius:%?6?%;text-align:center;margin-left:%?30?%;background-color:#3191fd}.item .top .tag .red[data-v-9e54c18e]{background-color:red}.item .bottom[data-v-9e54c18e]{display:flex;margin-top:%?20?%;font-size:%?28?%;justify-content:space-between;color:#999}.addSite[data-v-9e54c18e]{display:flex;justify-content:space-around;width:%?600?%;line-height:%?100?%;position:absolute;bottom:%?30?%;left:%?80?%;background-color:red;border-radius:%?60?%;font-size:%?30?%}.addSite .add[data-v-9e54c18e]{display:flex;align-items:center;color:#fff}.addSite .add .icon[data-v-9e54c18e]{margin-right:%?10?%}',""]),e.exports=t},ace6:function(e,t,a){"use strict";var r=a("299b"),o=a.n(r);o.a},e8fc:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r}));var r={uIcon:a("57e6").default},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[e._l(e.siteList,(function(t,r){return a("v-uni-view",{key:t.id,staticClass:"item"},[a("v-uni-view",{staticClass:"top"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(t.name))]),a("v-uni-view",{staticClass:"phone"},[e._v(e._s(t.phone))]),a("v-uni-view",{staticClass:"tag"},e._l(t.tag,(function(t,r){return a("v-uni-text",{key:r,class:{red:"默认"==t.tagText}},[e._v(e._s(t.tagText))])})),1)],1),a("v-uni-view",{staticClass:"bottom"},[e._v(e._s(t.site)),a("u-icon",{attrs:{name:"edit-pen",size:40,color:"#999999"}})],1)],1)})),a("v-uni-view",{staticClass:"addSite",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toAddSite.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"add"},[a("u-icon",{staticClass:"icon",attrs:{name:"plus",color:"#ffffff",size:30}}),e._v("新建收货地址")],1)],1)],2)},n=[]}}]);