(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"08aa":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("Header"),t.loading?a("div",{staticClass:"loader",attrs:{align:"center"}},[t._v(" Getting prize... ")]):t._e(),t.loading&&!t.prize?a("div",{staticClass:"loader",attrs:{align:"center"}},[t._v(" No data found ")]):t._e(),!t.loading&&t.prize?a("div",{staticClass:"container"},[a("div",{staticClass:"row prize-details"},[a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"prize-details-img"},[a("img",{attrs:{src:t.getImage(t.prize.image_url),alt:""}})])]),a("div",{staticClass:"col-12 col-md-6"},[a("div",{staticClass:"prize-details-desc"},[a("h4",[t._v(t._s(t.prize.name))]),a("div",{staticClass:"prize-details-desc-action"},[a("button",{staticClass:"btn",attrs:{type:"button","data-toggle":"modal","data-target":"#redeem",disabled:t.prize.quantity<=0},on:{click:function(e){t.modal.open=!0}}},[t._v(" Redeem ")])]),a("div",{staticClass:"prize-details-desc-stock"},[t._v(" "+t._s(t.prize.quantity)+" left in stock ")])])])]),a("hr"),a("div",{staticClass:"row description"},[a("div",{staticClass:"col-2 title"},[t._v("Description")]),a("div",{staticClass:"col-10 note"},[t._v(t._s(t.prize.description))])])]):t._e(),t.modal.open&&t.prize.quantity>0?a("Modal",{attrs:{prize:t.prize},on:{close:function(e){t.modal.open=!1,t.getDetail()}}}):t._e(),a("Footer")],1)},i=[],s=a("96c7"),r=a("9ef1"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"prize-modal"},[null===t.apiCallStatus?n("div",{staticClass:"prize-modal-content"},[n("h4",[t._v(" Are you sure? ")]),n("img",{staticClass:"prize-modal-content-image",attrs:{src:a("1752"),alt:""}}),n("h3",[t._v("Redeem for "+t._s(t.prize.name)+"?")]),n("div",{staticClass:"prize-modal-content-actions"},[n("button",{staticClass:"btn no-caret",attrs:{type:"button"},on:{click:t.redeem}},[t._v(" Yes ")]),n("button",{staticClass:"btn no-caret light",attrs:{type:"button"},on:{click:t.close}},[t._v(" Cancel ")])])]):t._e(),!0===t.apiCallStatus?n("div",{staticClass:"prize-modal-content success"},[n("h4",[t._v(" Congratulations! ")]),n("h3",[t._v("You redeem "),n("br"),t._v(t._s(t.prize.name)+".")]),n("div",{staticClass:"prize-modal-content-actions"},[n("router-link",{attrs:{to:{name:"Home"}}},[n("button",{staticClass:"btn no-caret",attrs:{type:"button"}},[t._v(" More Prizes ")])])],1)]):t._e(),!1===t.apiCallStatus?n("div",{staticClass:"prize-modal-content"},[n("h4",[t._v(" Error Occured ")]),n("div",{staticClass:"prize-modal-content-actions"},[n("button",{staticClass:"btn no-caret light",attrs:{type:"button"},on:{click:t.close}},[t._v(" Close ")])])]):t._e()])},c=[],l=a("bc3a"),u=a.n(l),p={props:{method:{type:Function},prize:Object},data:function(){return{loading:!1,apiCallStatus:null}},methods:{close:function(){this.$emit("close")},redeem:function(){var t=this,e="https://secret-hamlet-52217.herokuapp.com";u.a.post(e+"/prizes/"+this.$route.params.id).then((function(){t.apiCallStatus=!0,t.loading=!1})).catch((function(){t.apiCallStatus=!1,t.loading=!1}))}}},d=p,m=a("2877"),f=Object(m["a"])(d,o,c,!1,null,null,null),v=f.exports,g={components:{Header:s["a"],Footer:r["a"],Modal:v},data:function(){return{modal:{open:!1},prize:null,loading:!0}},mounted:function(){this.getDetail()},methods:{getImage:function(t){return a("7584")("./"+t)},getDetail:function(){var t=this,e="https://secret-hamlet-52217.herokuapp.com";u.a.get(e+"/prizes/"+this.$route.params.id).then((function(e){t.prize=e.data,t.loading=!1})).catch((function(){t.loading=!1}))}}},h=g,_=Object(m["a"])(h,n,i,!1,null,null,null);e["a"]=_.exports},1752:function(t,e,a){t.exports=a.p+"img/sample.d6c0cb99.png"},"3dfd":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],s=a("2877"),r={},o=Object(s["a"])(r,n,i,!1,null,null,null);e["a"]=o.exports},"42d0":function(t,e,a){t.exports=a.p+"img/img-4.66c9ab51.png"},"56d7":function(t,e,a){"use strict";a.r(e),function(t){a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("a026"),n=a("8c4f"),i=(a("4989"),a("ab8b"),a("c1c3"),a("3dfd")),s=a("57da"),r=a("08aa");e["a"].use(n["a"]),e["a"].config.productionTip=!1;var o=[{path:"/",name:"Home",component:s["a"]},{path:"/detail/:id",name:"Detail",component:r["a"]}],c=new n["a"]({base:t,routes:o,template:i["a"]});new e["a"]({router:c,template:'\n    <div id="app">\n      <router-view class="view"></router-view>\n    </div>\n  '}).$mount("#app")}.call(this,"/")},"57da":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("Header"),a("div",{staticClass:"container"},[a("h4",{staticClass:"header-title"},[t._v(" Here is the full list of prizes that you can win. ")]),t.loading?a("div",{staticClass:"loader",attrs:{align:"center"}},[t._v(" Getting prizes... ")]):t._e(),t.loading?t._e():a("div",{staticClass:"row prizes"},t._l(t.prizes,(function(e,n){return a("div",{key:n,staticClass:"col-12 col-sm-6 col-md-4"},[a("div",{staticClass:"prizes-item"},[a("div",{staticClass:"prizes-item-img"},[a("img",{attrs:{src:t.getImage(e.image_url),alt:""}})]),a("div",{staticClass:"prizes-item-desc"},[a("h3",[t._v(t._s(e.name))]),a("router-link",{attrs:{to:{name:"Detail",params:{id:e._id}}}},[a("button",{staticClass:"btn",attrs:{type:"button"}},[t._v(" Redeem ")])])],1)])])})),0)]),a("Footer")],1)},i=[],s=a("96c7"),r=a("9ef1"),o=a("bc3a"),c=a.n(o),l={components:{Header:s["a"],Footer:r["a"]},data:function(){return{prizes:[],loading:!0}},mounted:function(){var t=this,e="https://secret-hamlet-52217.herokuapp.com";c.a.get(e+"/prizes").then((function(e){t.prizes=e.data,t.loading=!1}))},methods:{getImage:function(t){return a("7584")("./"+t)}}},u=l,p=a("2877"),d=Object(p["a"])(u,n,i,!1,null,null,null);e["a"]=d.exports},"5d90":function(t,e,a){t.exports=a.p+"img/img-1.e6e76a26.png"},"67e5":function(t,e,a){t.exports=a.p+"img/women-1.01057290.jpeg"},"71be":function(t,e,a){t.exports=a.p+"img/img-2.085c2b84.png"},7584:function(t,e,a){var n={"./img-1.png":"5d90","./img-2.png":"71be","./img-3.png":"f48d","./img-4.png":"42d0","./img-5.png":"816d","./img-6.png":"7c2d","./sample.png":"1752","./women-1.jpeg":"67e5"};function i(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=s,t.exports=i,i.id="7584"},"7c2d":function(t,e,a){t.exports=a.p+"img/img-6.e47c2d79.png"},"816d":function(t,e,a){t.exports=a.p+"img/img-5.e1a42361.png"},"96c7":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"navigation"},[a("ul",{staticClass:"nav justify-content-between"},[a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:{name:"Home"}}},[t._v("LOGO")])],1),t._m(0)])]),a("div",{staticClass:"banner"},[t._v(" Rewards ")])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item right profile-nav"},[n("img",{staticClass:"avatar",attrs:{src:a("67e5"),alt:""}}),n("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("John Smith")])])}],s=a("2877"),r={},o=Object(s["a"])(r,n,i,!1,null,null,null);e["a"]=o.exports},"9ef1":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"container"},[a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Terms and Conditions")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Privacy Policy")])])])])])}],s=a("2877"),r={},o=Object(s["a"])(r,n,i,!1,null,null,null);e["a"]=o.exports},c1c3:function(t,e,a){},f48d:function(t,e,a){t.exports=a.p+"img/img-3.edaaa182.png"}});
//# sourceMappingURL=app.729ccbbc.js.map