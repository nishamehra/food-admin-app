(this["webpackJsonpfood-admin-app"]=this["webpackJsonpfood-admin-app"]||[]).push([[0],{542:function(e,t){},566:function(e,t,a){},567:function(e,t,a){},812:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(20),c=a.n(r),i=a(106),s=(a(566),a.p,a(567),a(35)),o=a(12),j=a(41),b=a(34),l=a(66),d=a(156),u=a(831),O=a(302),f=a(107),h=a(420),x=a(421),p=a(422),m=a(201);a(568),a(813);m.a.initializeApp({apiKey:"AIzaSyDQLyJwc3IJ81-y06teA4V3A-QZORTdr-U",authDomain:"food-admin-app-96e7d.firebaseapp.com",projectId:"food-admin-app-96e7d",storageBucket:"food-admin-app-96e7d.appspot.com",messagingSenderId:"684297712808",appId:"1:684297712808:web:04020b44b80e4668cf3e9d",measurementId:"G-YRGPN3YSPE"});var g=m.a.auth(),w=m.a.firestore(),y=(m.a,a.p+"static/media/Admin.e3892302.png"),v=a(8),C=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(o.a)({},e.target.name,e.target.value))},n.login=function(){var e=!0;n.state.email_error=null,n.state.password_error=null,""===n.state.email&&(n.state.email_error="email id required",e=!1),""===n.state.password&&(n.state.password_error="password required",e=!1),e&&(n.state.show_progress=!0),n.setState({update:!0}),e&&w.collection("USERS").where("email","==",n.state.email).where("IsAdmin","==",!0).get().then((function(e){e.empty?(n.state.email_error="Not Allowed!",n.setState({show_progress:!1})):g.signInWithEmailAndPassword(n.state.email,n.state.password).then((function(e){n.props.history.replace("/")})).catch((function(e){"auth/wrong-password"===e.code&&(n.state.password_error="Incorrect Password!"),n.setState({show_progress:!1})}))}))},n.state={email:"",password:"",show_progress:!1},n.handleChange=n.handleChange.bind(),n.login=n.login.bind(),n}return Object(b.a)(a,[{key:"render",value:function(){return Object(v.jsx)(u.a,{maxWidth:"xs",children:Object(v.jsxs)(O.a,{bgcolor:"white",boxShadow:"2",borderRadius:"13px",textAlign:"center",padding:"24px",marginTop:"50px",children:[Object(v.jsx)("img",{src:y,height:"50px"}),Object(v.jsx)(f.a,{variant:"h5",color:"textSecondary",children:"ADMIN"}),Object(v.jsx)(h.a,{label:"Email",id:"outlined-size-small",variant:"outlined",fullWidth:!0,name:"email",error:null!=this.state.email_error,helperText:this.state.email_error,onChange:this.handleChange,margin:"normal",size:"small"}),Object(v.jsx)(h.a,{label:"Password",id:"outlined-size-small",type:"password",name:"password",error:null!=this.state.password_error,helperText:this.state.password_error,onChange:this.handleChange,variant:"outlined",fullWidth:!0,margin:"normal",size:"small"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),this.state.show_progress?Object(v.jsx)(x.a,{size:25,thickness:6,color:"Primary"}):null,Object(v.jsx)("br",{}),Object(v.jsx)(p.a,{disableElevation:!0,variant:"contained",onClick:this.login,color:"primary",fullWidth:!0,children:"Login"})]})})}}]),a}(n.Component),R=a(21),S=a(437),I=a(78),N=a(842),_=a(843),k=a(426),A=a(822),T=a(844),P=a(823),D=a(845),E=a(441),L=a(846),U=a(847),q=a(848),W=a(849),z=a(27),B=a(19),F=a(358),H=a.n(F),J=a(529),V=a.n(J),G=a(539),M=a.n(G),Q=a(530),X=a.n(Q),Y=a(537),K=a.n(Y),Z=a(362),$=a.n(Z),ee=a(361),te=a.n(ee),ae=a(531),ne=a.n(ae),re=a(532),ce=a.n(re),ie=a(534),se=a.n(ie),oe=a(535),je=a.n(oe),be=a(536),le=a.n(be),de=a(540),ue=a.n(de),Oe=a(533),fe=a.n(Oe),he=a(538),xe=a.n(he),pe=a(541),me=a.n(pe),ge={Add:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(V.a,Object(B.a)(Object(B.a)({},e),{},{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(X.a,Object(B.a)(Object(B.a)({},e),{},{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(te.a,Object(B.a)(Object(B.a)({},e),{},{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(ne.a,Object(B.a)(Object(B.a)({},e),{},{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return Object(v.jsx)($.a,Object(B.a)(Object(B.a)({},e),{},{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(ce.a,Object(B.a)(Object(B.a)({},e),{},{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(fe.a,Object(B.a)(Object(B.a)({},e),{},{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(se.a,Object(B.a)(Object(B.a)({},e),{},{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(je.a,Object(B.a)(Object(B.a)({},e),{},{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(le.a,Object(B.a)(Object(B.a)({},e),{},{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return Object(v.jsx)($.a,Object(B.a)(Object(B.a)({},e),{},{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(K.a,Object(B.a)(Object(B.a)({},e),{},{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(te.a,Object(B.a)(Object(B.a)({},e),{},{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(xe.a,Object(B.a)(Object(B.a)({},e),{},{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(M.a,Object(B.a)(Object(B.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(ue.a,Object(B.a)(Object(B.a)({},e),{},{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(me.a,Object(B.a)(Object(B.a)({},e),{},{ref:t}))}))},we=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={columns:[{title:"Name",field:"name"},{title:"Qty(g)",field:"qty",type:"numeric"},{title:"Protiens(g)",field:"protein",type:"numeric"},{title:"Carbs(g)",field:"carbs",type:"numeric"},{title:"Fats(g)",field:"fat",type:"numeric"},{title:"Calories(kcal)",field:"calories",type:"numeric"}],data:[{name:"Cooked Rice",qty:100,protein:2,carbs:28,fat:0,calories:130},{name:"Chapati",protein:7,qty:100,carbs:38,fat:2,calories:192},{name:"Buttermilk Bread",qty:100,protein:10,carbs:48,fat:3,calories:267},{name:"Can Chicken",qty:100,protein:25,carbs:0,fat:8,calories:185},{name:"Boiled Egg",qty:100,protein:12,carbs:1,fat:10,calories:155},{name:"Ice Cream",qty:100,protein:3,carbs:23,fat:11,calories:207},{name:"Cheese",qty:100,protein:24,carbs:1,fat:38,calories:406},{name:"Cooked Rice",qty:100,protein:2,carbs:28,fat:0,calories:130}]},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){null===this.props.nutrition&&this.props.getNutrition()}},{key:"render",value:function(){var e=this;return Object(v.jsx)("div",{children:Object(v.jsx)(u.a,{maxWidth:"md",fixed:!0,children:Object(v.jsx)(H.a,{icons:ge,title:"Nutrition",columns:this.state.columns,data:this.state.data,editable:{onRowAdd:function(t){return new Promise((function(a,n){setTimeout((function(){a(),e.setState((function(e){var a=Object(z.a)(e.data);return a.push(t),Object(B.a)(Object(B.a)({},e),{},{data:a})}))}),600)}))},onRowUpdate:function(t,a){return new Promise((function(n,r){setTimeout((function(){n(),a&&e.setState((function(e){var n=Object(z.a)(e.data);return n[n.indexOf(a)]=t,Object(B.a)(Object(B.a)({},e),{},{data:n})})),n()}),600)}))},onRowDelete:function(t){return new Promise((function(a,n){setTimeout((function(){a(),e.setState((function(e){var a=Object(z.a)(e.data);return a.splice(a.indexOf(t),1),Object(B.a)(Object(B.a)({},e),{},{data:a})})),a()}),600)}))}}})})})}}]),a}(n.Component),ye=Object(i.b)((function(e){return{nutrition:e.nutrition}}),(function(e){return{getNutrition:function(t,a,n){return e(function(e,t,a){return function(n,r){w.collection("NUTRITION").doc(e.name.toUpperCase()).set(e).then((function(a){n({type:"ADD_NUTRITION",payload:e}),t()})).catch((function(e){console.log(e),a()}))}}(t,a,n))}}}))(we),ve=a(851),Ce=a(850),Re=a(841),Se=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){n.setStateset({Value:t})},n.state={value:0},n}return Object(b.a)(a,[{key:"render",value:function(){return Object(v.jsx)(u.a,{maxWidth:"md",fixed:!0,children:Object(v.jsx)(N.a,{position:"static",color:"black",children:Object(v.jsxs)(Ce.a,{value:this.state.value,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example",children:[Object(v.jsx)(Re.a,{icon:Object(v.jsx)(Ie,{})}),Object(v.jsx)(Re.a,{icon:Object(v.jsx)(Ie,{})}),Object(v.jsx)(Re.a,{icon:Object(v.jsx)(Ie,{})}),Object(v.jsx)(Re.a,{icon:Object(v.jsx)(Ie,{})}),Object(v.jsx)(Re.a,{icon:Object(v.jsx)(Ie,{})}),Object(v.jsx)(Re.a,{icon:Object(v.jsx)(Ie,{})}),Object(v.jsx)(Re.a,{icon:Object(v.jsx)(Ie,{})}),Object(v.jsx)(Re.a,{icon:Object(v.jsx)(Ie,{})})]})})})}}]),a}(n.Component),Ie=function(){return Object(v.jsxs)(O.a,{children:[Object(v.jsx)(ve.a,{alt:"Remy Sharp",variant:"square",src:"/static/images/avatar/1.jpg"}),Object(v.jsx)(f.a,{variant:"body2",children:"Title"})]})},Ne=Se,_e=a(542),ke=a.n(_e),Ae=a.p+"static/media/food.1789ee1c.png",Te=Object(S.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerContainer:{overflow:"auto"},content:{flexGrow:1,padding:e.spacing(3)}}}));var Pe=function(){var e=Te(),t=Object(n.useState)("Home"),a=Object(R.a)(t,2),r=a[0],c=a[1];return Object(v.jsxs)("div",{className:e.root,children:[Object(v.jsx)(_.a,{}),Object(v.jsx)(N.a,{position:"fixed",className:e.appBar,children:Object(v.jsxs)(k.a,{children:[Object(v.jsx)(f.a,{variant:"h6",noWrap:!0,children:Object(v.jsx)("img",{src:Ae,height:"50px"})}),Object(v.jsx)(f.a,{variant:"h5",noWrap:!0,children:Object(v.jsx)(O.a,{marginLeft:"10px",children:" Nutrition"})})]})}),Object(v.jsxs)(I.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper},children:[Object(v.jsx)(k.a,{}),Object(v.jsxs)("div",{className:e.drawerContainer,children:[Object(v.jsxs)(A.a,{children:[Object(v.jsxs)(P.a,{button:!0,onClick:function(e){return c("Home")},children:[Object(v.jsx)(D.a,{children:Object(v.jsx)(L.a,{})}),Object(v.jsx)(E.a,{primary:"Home"})]}),Object(v.jsxs)(P.a,{button:!0,onClick:function(e){return c("Admin")},children:[Object(v.jsx)(D.a,{children:Object(v.jsx)(U.a,{})}),Object(v.jsx)(E.a,{primary:"Admin"})]}),Object(v.jsxs)(P.a,{button:!0,onClick:function(e){return c("User")},children:[Object(v.jsx)(D.a,{children:Object(v.jsx)(q.a,{})}),Object(v.jsx)(E.a,{primary:"User"})]})]}),Object(v.jsx)(T.a,{}),Object(v.jsxs)(P.a,{button:!0,children:[Object(v.jsx)(D.a,{children:Object(v.jsx)(W.a,{})}),Object(v.jsx)(E.a,{primary:"Logout"})]})]})]}),Object(v.jsxs)("main",{className:e.content,children:[Object(v.jsx)(k.a,{}),function(){switch(r){case"Home":return Object(v.jsx)(Ne,{});case"Admin":return Object(v.jsx)(ye,{});case"User":return Object(v.jsx)(ke.a,{})}}()]})]})},De=function(e){var t=Object(n.useState)(null),a=Object(R.a)(t,2),r=a[0],c=a[1];if(g.onAuthStateChanged((function(e){c(!!e)})),e.nonAuthenticated){if(null==r)return"Loading...";if(!r)return e.children;if(r)return Object(v.jsx)(s.a,{to:"/"})}else{if(null==r)return"Loading...";if(r)return e.children;if(!r)return Object(v.jsx)(s.a,{to:"/login"})}};var Ee=function(){return Object(v.jsxs)(s.d,{children:[Object(v.jsx)(s.b,{exact:!0,path:"/"}),Object(v.jsx)(Pe,{}),Object(v.jsx)(s.b,{exact:!0,path:"/login",children:Object(v.jsx)(De,{nonAuthenticated:!0,children:Object(v.jsx)(C,{})})}),Object(v.jsx)(s.b,{path:"*",render:function(){return"404 not found"}})]})},Le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,853)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},Ue=a(543),qe=a(69),We=a(145),ze=a(835),Be={},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_NUTRITION":e=t.payload;break;case"ADD_NUTRITION":e=[].concat(Object(z.a)(e),[t.payload])}return e},He=(a(448),Object(qe.c)({DEFAULT:function(e,t){return{key:"HELLO WORLD"}},nutrition:Fe})),Je=a(143),Ve=a(443),Ge=(a(780),window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__||qe.d),Me=Object(qe.e)(He,Ge(Object(qe.a)(Ue.a))),Qe=Object(We.a)({palette:{primary:{main:"#c6ff00"},secondary:Ve.a}});c.a.render(Object(v.jsxs)(i.a,{store:Me,children:[Object(v.jsx)(ze.a,{theme:Qe,children:Object(v.jsx)(Je.a,{children:Object(v.jsx)(Ee,{})})}),","]}),document.getElementById("root")),Le()}},[[812,1,2]]]);
//# sourceMappingURL=main.8737e50a.chunk.js.map