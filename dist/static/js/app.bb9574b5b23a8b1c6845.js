webpackJsonp([1],{"8LHI":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n=i("zL8q"),s=i.n(n),l=(i("tvR6"),{render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("div",{staticClass:"login-box"},[i("div",[i("el-row",[i("el-col",{attrs:{span:14}},[i("p",[t._v("疯狂会计狮记账管理系统")]),t._v(" "),i("p",[t._v("一个神奇的记账系统-爱用不用")])]),t._v(" "),i("el-col",{attrs:{span:10}},[i("div",{staticClass:"login"},[i("div",[i("p",[t._v("密码登录")]),t._v(" "),i("div",{staticClass:"radio-box"},[i("el-radio",{attrs:{label:"1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("普通用户")]),t._v(" "),i("el-radio",{attrs:{label:"2"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("系统管理员")])],1)]),t._v(" "),i("el-input",{staticClass:"login-input",attrs:{placeholder:"请输入用户名","suffix-icon":"el-icon-user"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),t._v(" "),i("el-input",{staticClass:"login-input",attrs:{placeholder:"请输入密码","suffix-icon":"el-icon-lock","show-password":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),i("el-button",{staticClass:"submit-btn",attrs:{type:"primary"},on:{click:function(e){return t.submitForm()}}},[t._v("提交")]),t._v(" "),i("div",{staticClass:"login-link"},[i("el-link",{staticClass:"pdr10",attrs:{underline:!1}},[t._v("忘记密码")]),t._v(" "),i("el-link",{attrs:{underline:!1}},[t._v("注册")])],1)],1)])],1)],1)])])},staticRenderFns:[]});var o=i("VU/8")({data:function(){return{userName:"",password:"",radio:"1"}},methods:{submitForm:function(){this.$store.dispatch("setLoginState",!1)}}},l,!1,function(t){i("XHX4")},"data-v-2d942fba",null).exports,r=[{title:"工作台",tag:"#"},{title:"账户管理",tag:"",children:[{title:"固定账户",tag:"/"},{title:"虚拟账户",tag:"123"},{title:"投资账户",tag:"321"},{title:"负债账户",tag:"111"},{title:"固定收入",tag:"222"},{title:"固定支出",tag:"333"}]},{title:"记账管理",tag:"",children:[{title:"收入",tag:""},{title:"支出",tag:""}]},{title:"用户设置",tag:"",children:[{title:"个人信息",tag:""},{title:"个性化怕配置",tag:""}]},{title:"报表",tag:"",children:[{title:"账户报表",tag:""},{title:"支出报表",tag:""}]},{title:"系统管理",tag:"",children:[{title:"消息通知",tag:""},{title:"用户权限",tag:""},{title:"操作日志",tag:""},{title:"账单备份",tag:""},{title:"邮件发送",tag:""}]},{title:"数据配置",tag:"",children:[{title:"数据字典",tag:""},{title:"模板",tag:""},{title:"用户参数配置",tag:""},{title:"记账参数配置",tag:""}]}],c={data:function(){return{navList:r,curLocation:""}},methods:{go:function(t){this.curLocation!==t&&(this.$router.push(t),this.curLocation=t)}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"scrol"},[i("el-scrollbar",{staticClass:"menu"},[i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"unique-opened":!0,"default-active":"0"}},t._l(t.navList,function(e,a){return i("div",{key:a},[e.children?i("el-submenu",{attrs:{index:String(a)}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-location"}),t._v(" "),i("span",[t._v(t._s(e.title))])]),t._v(" "),i("el-menu-item-group",{staticClass:"mgt-16"},t._l(e.children,function(e,n){return i("div",{key:n},[i("el-menu-item",{attrs:{index:String(a)+String(n)},on:{click:function(i){return t.go(e.tag)}}},[i("i",{staticClass:"el-icon-setting"}),t._v(" "),i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])],1)}),0)],2):i("el-menu-item",{attrs:{index:String(a)}},[i("i",{staticClass:"el-icon-setting"}),t._v(" "),i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])],1)}),0)],1)],1)},staticRenderFns:[]};var u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal"}},[e("el-menu-item",{staticClass:"title"},[this._v("疯狂会计狮")]),this._v(" "),e("el-menu-item",{staticClass:"float-right",on:{click:this.goToLogin}},[this._v("退出")]),this._v(" "),e("el-menu-item",{staticClass:"float-right"},[this._v("处理中心")]),this._v(" "),e("el-menu-item",{staticClass:"float-right"},[e("el-avatar",{attrs:{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}})],1)],1)},staticRenderFns:[]};var d={name:"App",components:{NavMenu:i("VU/8")(c,v,!1,function(t){i("odZF")},"data-v-5ae6dea7",null).exports,HeaderMenu:i("VU/8")({methods:{goToLogin:function(){this.$store.dispatch("setLoginState",!0)}}},u,!1,function(t){i("8LHI")},"data-v-feda3aa2",null).exports,Login:o},computed:{loginState:function(){return this.$store.getters.getLoginState}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.loginState,expression:"loginState"}],staticClass:"login"},[e("login")],1),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.loginState,expression:"!loginState"}],staticClass:"content"},[e("header-menu"),this._v(" "),e("el-row",[e("el-col",{attrs:{span:5}},[e("nav-menu")],1),this._v(" "),e("el-col",{attrs:{span:19}},[e("div",{staticClass:"con-view"},[e("router-view")],1)])],1)],1)])},staticRenderFns:[]};var g=i("VU/8")(d,_,!1,function(t){i("RI2y")},"data-v-5d6f6b45",null).exports,m=i("48sp");a.default.use(m.a);var p=new m.a.Store({state:{loginState:!0},mutations:{SET_LOGIN_STATE:function(t,e){t.loginState=e}},getters:{getLoginState:function(t){return t.loginState}},actions:{setLoginState:function(t,e){t.commit("SET_LOGIN_STATE",e)}}}),f=i("/ocq"),h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[t._v("123")]),t._v(" "),i("div",[t._v("123")]),t._v(" "),i("div",[t._v("123")]),t._v(" "),i("div",[t._v("123")]),t._v(" "),i("div",[t._v("123")]),t._v(" "),i("div",[t._v("123")]),t._v(" "),i("div",[t._v("123")]),t._v(" "),i("div",[t._v("123")]),t._v(" "),i("div",[t._v("123")]),t._v(" "),i("div",[t._v("123")]),t._v(" "),i("div",[t._v("123")]),t._v(" "),i("div",[t._v("123")]),t._v(" "),i("div",[t._v("123")]),t._v(" "),i("div",[t._v("123")]),t._v(" "),i("div",[t._v("123")])])}]},C=i("VU/8")(null,h,!1,null,null,null).exports;a.default.use(f.a);var b=new f.a({mode:"hash",routes:[{path:"/",name:"login",component:C}]});a.default.use(s.a),a.default.use(m.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:b,store:p,components:{App:g},template:"<App/>"})},RI2y:function(t,e){},XHX4:function(t,e){},odZF:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bb9574b5b23a8b1c6845.js.map