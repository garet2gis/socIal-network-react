(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{133:function(e,t,n){},134:function(e,t,n){e.exports={item:"Post_item__2WTmf"}},16:function(e,t,n){e.exports={nav:"Navbar_nav__3hyPE",item:"Navbar_item__mLzkW",activeLink:"Navbar_activeLink__1umXi"}},167:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},29:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs___FYBH",active:"Dialogs_active__3U01P",dialogsItems:"Dialogs_dialogsItems__2olaJ",messages:"Dialogs_messages__2uxeN",writeMessageArea:"Dialogs_writeMessageArea__ZF4Ex",message:"Dialogs_message__31BUG"}},291:function(e,t,n){"use strict";n.r(t),n.d(t,"renderEntireTree",(function(){return Bt}));var r=n(0),s=n(1),a=n.n(s),c=(n(95),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,292)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))}),i=n(62),o=n.n(i),u=n(25),l=n(26),j=n(28),d=n(27),f=(n(167),n(16)),b=n.n(f),p=n(13),O=function(){return Object(r.jsxs)("nav",{className:b.a.nav,children:[Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{to:"/profile",activeClassName:b.a.activeLink,children:"Profile"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{to:"/dialogs",activeClassName:b.a.activeLink,children:"Messages"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{to:"/news",activeClassName:b.a.activeLink,children:"News"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{to:"/music",activeClassName:b.a.activeLink,children:"Music"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{to:"/settings",activeClassName:b.a.activeLink,children:"Settings"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{to:"/users",activeClassName:b.a.activeLink,children:"Users"})})]})},h=(n(172),function(){return Object(r.jsx)("div",{children:"News"})}),g=(n(173),function(){return Object(r.jsx)("div",{children:"Music"})}),m=(n(174),function(){return Object(r.jsx)("div",{children:"Settings"})}),x=n(11),v=n(34),_=n(5),w="ADD-MESSAGE",P={dialogs:[{id:1,name:"Dima"},{id:2,name:"Lolez"},{id:3,name:"Victor"},{id:4,name:"Precol"}],messages:[{id:1,message:"Hi!"},{id:2,message:"Who are you?"},{id:3,message:"You wanna go somewhere?"}]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(_.a)(Object(_.a)({},e),{},{messages:[].concat(Object(v.a)(e.messages),[{id:5,message:t.newMessageBody}])});default:return e}},C=n(29),y=n.n(C),N=function(e){var t="/dialogs/".concat(e.id);return Object(r.jsx)("div",{className:"".concat(y.a.dialog," ").concat(y.a.active),children:Object(r.jsx)(p.b,{to:t,children:e.name})})},k=function(e){return Object(r.jsx)("div",{className:y.a.message,children:e.message})},I=n(125),U=n(126),E=n(136),T=n(51),A=n.n(T),L=function(e){return function(t){var n=t.input,s=t.meta,a=Object(E.a)(t,["input","meta"]),c=s.touched&&s.error;return Object(r.jsxs)("div",{className:A.a.formControl+" "+(c?A.a.error:""),children:[Object(r.jsx)("div",{children:Object(r.jsx)(e,Object(_.a)(Object(_.a)({},n),a))}),c&&Object(r.jsxs)("span",{children:[" ",s.error," "]})]})}},F=function(e){if(!e)return"Field is required"},M=function(e){return function(t){if(!(t.length<=e))return"Max length is ".concat(e)}},D=L("textarea"),z=M(50),B=Object(U.a)({form:"message"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,className:y.a.writeMessageArea,children:[Object(r.jsx)("div",{children:Object(r.jsx)(I.a,{placeholder:"Enter message",name:"message",component:D,validate:[F,z]})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"New message"})})]})})),R=function(e){var t=e.dialogs,n=e.messages,s=e.addMessage,a=t.map((function(e){return Object(r.jsx)(N,{id:e.id,name:e.name},e.id)})),c=n.map((function(e){return Object(r.jsx)(k,{id:e.id,message:e.message},e.id)}));return Object(r.jsxs)("div",{className:y.a.dialogs,children:[Object(r.jsx)("div",{className:y.a.dialogsItems,children:a}),Object(r.jsx)("div",{className:y.a.messages,children:c}),Object(r.jsx)(B,{onSubmit:function(e){s(e.message)}})]})},G=n(10),W=n(7),H=function(e){return{isAuth:e.auth.isAuth}},q=function(e){var t=function(t){Object(j.a)(s,t);var n=Object(d.a)(s);function s(){return Object(u.a)(this,s),n.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return this.props.isAuth?Object(r.jsx)(e,Object(_.a)({},this.props)):Object(r.jsx)(x.a,{to:"/login"})}}]),s}(a.a.Component);return Object(G.b)(H)(t)},J={addMessage:function(e){return{type:w,newMessageBody:e}}},X=Object(W.d)(q,Object(G.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}}),J))(R),Y=n(12),K=n.n(Y),V=n(20),Z=n(130).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"7e127611-be10-4a25-97f0-44bab15fc4c4"}}),Q={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Z.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return Z.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return Z.delete("follow/".concat(e)).then((function(e){return e.data}))}},$=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(_.a)(Object(_.a)({},e),r):e}))},ee="FOLLOW",te="UNFOLLOW",ne="SET_USERS",re="SET_CURRENT_PAGE",se="SET_TOTAL_USER_COUNT",ae="TOGGLE_FETCHING",ce="TOGGLE_FOLLOWING_PROGRESS",ie={users:[],totalUsersCount:0,pageSize:100,currentPage:1,isFetching:!0,followingInProgress:[]},oe=function(e){return{type:ee,userId:e}},ue=function(e){return{type:te,userId:e}},le=function(e){return{type:ne,users:e}},je=function(e){return{type:re,currentPage:e}},de=function(e){return{type:se,totalUsersCount:e}},fe=function(e){return{type:ae,isFetching:e}},be=function(e,t){return{type:ce,isFetching:e,userId:t}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return Object(_.a)(Object(_.a)({},e),{},{users:$(e.users,t.userId,"id",{followed:!0})});case te:return Object(_.a)(Object(_.a)({},e),{},{users:$(e.users,t.userId,"id",{followed:!1})});case ne:return Object(_.a)(Object(_.a)({},e),{},{users:Object(v.a)(t.users)});case re:return Object(_.a)(Object(_.a)({},e),{},{currentPage:t.currentPage});case se:return Object(_.a)(Object(_.a)({},e),{},{totalUsersCount:t.totalUsersCount});case ae:return Object(_.a)(Object(_.a)({},e),{},{isFetching:t.isFetching});case ce:return Object(_.a)(Object(_.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(v.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},Oe=n.p+"static/media/loader.fd8746b8.svg",he=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:Oe,alt:"loader"})})},ge=n(89),me=n.n(ge),xe=n.p+"static/media/userAsset.73a0bc1f.png",ve=function(e){return Object(r.jsxs)("div",{className:me.a.user,children:[Object(r.jsx)("div",{children:Object(r.jsx)(p.b,{to:"/profile/".concat(e.user.id),children:Object(r.jsx)("img",{src:null===e.user.photos.small?xe:e.user.photos.small,className:me.a.avatar,alt:"user"})})}),Object(r.jsx)("div",{children:e.user.followed?Object(r.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.unfollow(e.user.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.follow(e.user.id)},children:"Follow"})}),Object(r.jsx)("div",{children:e.user.name}),Object(r.jsx)("div",{children:e.user.status})]})},_e=n(90),we=n.n(_e),Pe=n(131),Se=n.n(Pe),Ce=function(e){for(var t=e.totalUsersCount,n=e.pageSize,s=e.currentPage,a=e.onPageChanged,c=Math.ceil(t/n),i=[],o=1;o<=c;o++)i.push(o);return Object(r.jsx)("div",{children:i.map((function(e){return Object(r.jsx)("span",{className:Se()(s===e&&we.a.selectedPage,we.a.pageNumber),onClick:function(){a(e)},children:" ".concat(e," ")},e)}))})},ye=function(e){var t=e.users.map((function(t){return Object(r.jsx)(ve,{user:t,follow:e.follow,unfollow:e.unfollow,followingInProgress:e.followingInProgress},t.id)}));return Object(r.jsxs)("div",{children:[e.isFetching?Object(r.jsx)(he,{}):null,Object(r.jsx)(Ce,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),t]})},Ne=n(132),ke=Object(Ne.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Ie=function(e){return e.usersPage.pageSize},Ue=function(e){return e.usersPage.totalUsersCount},Ee=function(e){return e.usersPage.currentPage},Te=function(e){return e.usersPage.isFetching},Ae=function(e){return e.usersPage.followingInProgress},Le=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){var n=e.props;(0,n.requestUsers)(t,n.pageSize)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.requestUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){return Object(r.jsx)(ye,Object(_.a)({onPageChanged:this.onPageChanged},this.props))}}]),n}(a.a.Component),Fe={follow:function(e){return function(){var t=Object(V.a)(K.a.mark((function t(n){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(be(!0,e)),t.next=3,Q.follow(e);case 3:0===t.sent.resultCode&&n(oe(e)),n(be(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(V.a)(K.a.mark((function t(n){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(be(!0,e)),t.next=3,Q.unfollow(e);case 3:0===t.sent.resultCode&&n(ue(e)),n(be(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUsers:le,setCurrentPage:je,setTotalUserCount:de,toggleFetching:fe,requestUsers:function(e,t){return function(){var n=Object(V.a)(K.a.mark((function n(r){var s;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(je(e)),r(fe(!0)),n.next=4,Q.getUsers(e,t);case 4:s=n.sent,r(fe(!1)),r(le(s.items)),r(de(s.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},Me=Object(W.d)(Object(G.b)((function(e){return{users:ke(e),pageSize:Ie(e),totalUsersCount:Ue(e),currentPage:Ee(e),isFetching:Te(e),followingInProgress:Ae(e)}}),Fe))(Le),De=n(133),ze=n.n(De),Be=n(91),Re=n.n(Be),Ge=n(94),We=function(e){var t=Object(s.useState)(!1),n=Object(Ge.a)(t,2),a=n[0],c=n[1],i=Object(s.useState)(e.status),o=Object(Ge.a)(i,2),u=o[0],l=o[1];Object(s.useEffect)((function(){l(e.status)}),[e.status]);return Object(r.jsxs)("div",{children:[!a&&Object(r.jsx)("div",{children:Object(r.jsx)("span",{onDoubleClick:function(){c(!0)},children:e.status||"----"})}),a&&Object(r.jsx)("div",{children:Object(r.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},onBlur:function(){c(!1),e.updateUserStatus(u)},autoFocus:!0,value:u})})]})},He=function(e){return e.profile?Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:Re.a.descriptionBlock,children:[Object(r.jsx)("img",{src:e.profile.photos.large?e.profile.photos.large:xe,className:Re.a.profilePhoto,alt:"avatar"}),Object(r.jsx)(We,{status:e.status,updateUserStatus:e.updateUserStatus}),Object(r.jsx)("div",{children:e.profile.fullName}),Object(r.jsx)("div",{children:e.profile.aboutMe})]})}):Object(r.jsx)(he,{})},qe={getProfile:function(e){return Z.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return Z.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return Z.put("profile/status",{status:e}).then((function(e){return e.data}))}},Je="ADD-POST",Xe="SET_USER_PROFILE",Ye="SET_STATUS",Ke="DELETE_POST",Ve={posts:[{id:1,message:"hey, nibba",likesCount:228},{id:2,message:"get the fuck out",likesCount:9},{id:3,message:"It is my first post",likesCount:3}],profile:null,status:"default status"},Ze=function(e){return{type:Ye,status:e}},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Je:return Object(_.a)(Object(_.a)({},e),{},{posts:[].concat(Object(v.a)(e.posts),[{id:5,message:t.newPostText,likesCount:0}])});case Ke:return Object(_.a)(Object(_.a)({},e),{},{posts:Object(v.a)(e.posts.filter((function(e){return e.id!==t.postId})))});case Xe:return Object(_.a)(Object(_.a)({},e),{},{profile:t.profile});case Ye:return Object(_.a)(Object(_.a)({},e),{},{status:t.status});default:return e}},$e=n(92),et=n.n($e),tt=n(134),nt=n.n(tt),rt=function(e){return Object(r.jsxs)("div",{className:nt.a.item,children:[Object(r.jsx)("img",{src:"https://w7.pngwing.com/pngs/642/857/png-transparent-internet-meme-redemption-white-sticker-meme.png"}),e.message,Object(r.jsx)("div",{children:Object(r.jsxs)("span",{children:["like ",e.likeCount]})})]})},st=M(10),at=L("textarea"),ct=function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(I.a,{placeholder:"Enter post",name:"newPostText",component:at,validate:[F,st]})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Add post"})})]})};ct=Object(U.a)({form:"AddNewPostForm"})(ct);var it=function(e){var t=e.posts.map((function(e){return Object(r.jsx)(rt,{message:e.message,likeCount:e.likesCount},e.id)}));return Object(r.jsxs)("div",{className:et.a.postsBlock,children:[Object(r.jsx)("h3",{children:"My posts"}),Object(r.jsx)(ct,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(r.jsx)("div",{className:et.a.posts,children:t})]})},ot=Object(G.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),{addPost:function(e){return{type:Je,newPostText:e}}})(it),ut=a.a.memo((function(e){return Object(r.jsxs)("div",{className:ze.a.content,children:[Object(r.jsx)(He,Object(_.a)({},e)),Object(r.jsx)(ot,{})]})})),lt=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.match,n=e.authorizedUserId,r=e.history,s=e.getProfile,a=e.setUserStatus,c=t.params.userId;c||(c=n)||r.push("/login"),s(c),a(c)}},{key:"render",value:function(){return Object(r.jsx)(ut,{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus})}}]),n}(a.a.Component),jt=Object(W.d)(Object(G.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,isAuth:e.auth.isAuth,authorizedUserId:e.auth.id}}),{getProfile:function(e){return function(){var t=Object(V.a)(K.a.mark((function t(n){var r;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,qe.getProfile(e);case 2:r=t.sent,n({type:Xe,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUserStatus:function(e){return function(){var t=Object(V.a)(K.a.mark((function t(n){var r;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,qe.getStatus(e);case 2:r=t.sent,n(Ze(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(V.a)(K.a.mark((function t(n){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,qe.updateStatus(e);case 2:0===t.sent.resultCode&&n(Ze(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),x.f)(lt),dt=n(93),ft=n.n(dt),bt=function(e){var t=e.isAuth,n=e.logout,s=e.login;return Object(r.jsxs)("header",{className:ft.a.header,children:[Object(r.jsx)("img",{src:"https://i.pinimg.com/originals/9a/3b/90/9a3b902ff415e1a95368f1bf2b9ecca8.png",alt:"logo"}),Object(r.jsxs)("div",{className:ft.a.loginBlock,children:[t&&Object(r.jsxs)("div",{children:[s," - ",Object(r.jsx)("button",{onClick:n,children:"Logout"})]}),!t&&Object(r.jsx)(p.b,{to:"/login",children:"Login"})]})]})},pt={authMe:function(){return Z.get("auth/me").then((function(e){return e.data}))},login:function(e){return Z.post("auth/login",e).then((function(e){return e.data}))},logout:function(){return Z.delete("auth/login").then((function(e){return e.data}))}},Ot=n(39),ht="SET_USER_AUTH_DATA",gt="DELETE_USER_AUTH_DATA",mt={id:null,login:null,email:null,isAuth:!1},xt=function(e){return{type:ht,data:e}},vt=function(){return function(){var e=Object(V.a)(K.a.mark((function e(t){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pt.authMe();case 2:0===(n=e.sent).resultCode&&t(xt(n.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ht:return Object(_.a)(Object(_.a)(Object(_.a)({},e),t.data),{},{isAuth:!0});case gt:return Object(_.a)(Object(_.a)({},e),{},{id:null,login:null,email:null,isAuth:!1});default:return e}},wt=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(bt,Object(_.a)({},this.props))}}]),n}(a.a.Component),Pt=Object(G.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{logout:function(){return function(){var e=Object(V.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pt.logout();case 2:0===e.sent.resultCode&&t({type:gt});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(wt),St=L("input"),Ct=M(20),yt=Object(U.a)({form:"login"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(I.a,{placeholder:"Email",name:"email",component:St,validate:[F,Ct]})}),Object(r.jsx)("div",{children:Object(r.jsx)(I.a,{placeholder:"Password",name:"password",component:St,type:"password",validate:[F,Ct]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(I.a,{type:"checkbox",name:"rememberMe",component:"input"})," remember me"]}),e.error&&Object(r.jsx)("div",{className:A.a.formSummaryError,children:e.error}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),Nt=Object(G.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e){return function(){var t=Object(V.a)(K.a.mark((function t(n){var r;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,pt.login(e);case 2:0===(r=t.sent).resultCode?n(vt()):n(Object(Ot.a)("login",{_error:r.messages.length>0?r.messages[0]:"Some error"}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){if(e.isAuth)return Object(r.jsx)(x.a,{to:"/Profile"});return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(yt,{onSubmit:function(t){e.login(t)}})]})})),kt="INITIALIZING_SUCCESS",It={isInitialized:!1},Ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case kt:return Object(_.a)(Object(_.a)({},e),{},{isInitialized:!0});default:return e}},Et=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initialize()}},{key:"render",value:function(){return this.props.isInitialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(Pt,{}),Object(r.jsx)(O,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(x.b,{path:"/dialogs",render:function(){return Object(r.jsx)(X,{})}}),Object(r.jsx)(x.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(jt,{})}}),Object(r.jsx)(x.b,{path:"/news",render:function(){return Object(r.jsx)(h,{})}}),Object(r.jsx)(x.b,{path:"/music",render:function(){return Object(r.jsx)(g,{})}}),Object(r.jsx)(x.b,{path:"/settings",render:function(){return Object(r.jsx)(m,{})}}),Object(r.jsx)(x.b,{path:"/users",render:function(){return Object(r.jsx)(Me,{})}}),Object(r.jsx)(x.b,{path:"/login",render:function(){return Object(r.jsx)(Nt,{})}})]})]}):Object(r.jsx)(he,{})}}]),n}(a.a.Component),Tt=Object(W.d)(Object(G.b)((function(e){return{isInitialized:e.app.isInitialized}}),{initialize:function(){return function(e){var t=e(vt());Promise.all([t]).then((function(){e({type:kt})}))}}}))(Et),At=n(127),Lt=n(135),Ft=Object(W.c)({profilePage:Qe,dialogsPage:S,usersPage:pe,auth:_t,form:At.a,app:Ut}),Mt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.d,Dt=Object(W.e)(Ft,Mt(Object(W.a)(Lt.a))),zt=Dt;window.__store__=Dt;var Bt=function(){o.a.render(Object(r.jsx)(p.a,{children:Object(r.jsx)(G.a,{store:zt,children:Object(r.jsx)(Tt,{})})}),document.getElementById("root"))};Bt(),zt.subscribe(Bt),c()},51:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2YQaU",error:"FormsControls_error__3g4FW",formSummaryError:"FormsControls_formSummaryError__PAkJW"}},89:function(e,t,n){e.exports={avatar:"User_avatar__2LoF5",user:"User_user__1f7S8"}},90:function(e,t,n){e.exports={pageNumber:"Pagination_pageNumber__3nXTM",selectedPage:"Pagination_selectedPage__38Dd4"}},91:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__18SIW",profilePhoto:"ProfileInfo_profilePhoto__1Wkiq"}},92:function(e,t,n){e.exports={item:"MyPosts_item__3_JxA",postsBlock:"MyPosts_postsBlock__jJmdn",posts:"MyPosts_posts__owaNI"}},93:function(e,t,n){e.exports={header:"Header_header__3qvaw",loginBlock:"Header_loginBlock__uMNK_"}},95:function(e,t,n){}},[[291,1,2]]]);
//# sourceMappingURL=main.1e89efc1.chunk.js.map