(this.webpackJsonpSankarGroups=this.webpackJsonpSankarGroups||[]).push([[112],{1288:function(e,t,a){},1722:function(e,t,a){"use strict";a.r(t);var n=a(27),c=a(1),s=a(18),r=a.n(s),i=a(45),o=a(129),l=a(522),d=a.n(l),u=a(524),p=a(85),j=a.n(p),b=function(e){return function(t){j.a.get("".concat(i.a.app.ApiUrl,"/group/").concat(e)).then((function(e){t({type:"GET_GROUPS",getGroups:e.data.data})}))}},f=function(e){return function(t){j.a.get("".concat(i.a.app.ApiUrl,"/chat/").concat(e.id),e.id).then((function(a){t({type:"SELECTED_GROUP",data:e}),t({type:"SELECT_CHAT",data:a.data.data[0]})}))}},m=function(e){return function(){var t=Object(u.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("".concat(i.a.app.ApiUrl,"/group/groupEmployees/").concat(e)).then((function(e){a({type:"GROUP_STAFF",groupStaff:e.data.data})})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=a(26),O=a.n(h),x=a(543),g=a.n(x),v=a(1057),N=a(995),S=a(1080),y=a(1065),w=a(1097),k=a(976),C=a(1110),G=a(991),A=a(1119),T=a(786),E=a(513),_=a(657),U=(a(592),a(536),a(512),a(6)),P=function(e){var t=e.handleProfile,a=e.children;return Object(U.jsxs)("div",{className:"modal-header d-flex align-items-center justify-content-between mb-1",children:[Object(U.jsx)("h5",{className:"modal-title",children:a}),Object(U.jsx)("div",{className:"todo-item-action d-flex align-items-center",children:Object(U.jsx)(k.a,{className:"font-weight-normal mt-25",size:16,onClick:t})})]})},D=function(e){var t,a=e.isOpen,n=e.groupStaff,c=e.handleProfile,s=e.dispatch,r=e.store,o=null===r||void 0===r?void 0:r.selectedGroup;return Object(U.jsx)(T.a,{isOpen:a,className:"sidebar-lg",contentClassName:"p-0",modalClassName:"modal-slide-in sidebar-todo-modal",children:Object(U.jsxs)(E.a,{id:"form-modal-todo",className:"todo-modal",children:[Object(U.jsxs)(P,{handleProfile:c,children:[Object(U.jsx)(A.a,{})," Group Users"]}),Object(U.jsxs)(_.a,{className:"flex-grow-1 pb-sm-0 pb-3",children:[Object(U.jsx)("ul",{children:(t=n,null===t||void 0===t?void 0:t.map((function(e){if(e.assigned)return Object(U.jsxs)("li",{className:"p-1 style-none",children:[" ",e.label,Object(U.jsx)(C.a,{className:"text-danger pr-0",onClick:function(){s(function(e,t){return function(){var a=Object(u.a)(d.a.mark((function a(n){return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,j.a.delete("".concat(i.a.app.ApiUrl,"/group/").concat(e.id,"/").concat(t)).then((function(t){n({type:"GROUP_STAFF_DELETE",groupStaff:t.data.data}),n(f(e))})).catch((function(e){return console.log(e)}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(o,e.value))}})," "]})})))}),Object(U.jsx)("strong",{children:"Add New"}),Object(U.jsx)("ul",{children:function(e,t){return null===t||void 0===t?void 0:t.map((function(e){if(!(null===e||void 0===e?void 0:e.assigned))return Object(U.jsxs)("li",{className:"p-1 style-none",children:[" ",e.label,Object(U.jsx)(G.a,{className:"text-danger pr-0",onClick:function(){var t;s((t={selectedGroup:o,item:e},function(){var e=Object(u.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("".concat(i.a.app.ApiUrl,"/group/addStaff"),t).then((function(e){a({type:"GROUP_STAFF_DELETE",groupStaff:e.data.data}),a(f(t.selectedGroup))})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}})," "]})}))}(0,n)})]})]})})},I=a(795),L=a(987),F=a(988),z=a(838),R=a(989),B=a(508),J=a(487),M=function(e){var t=e.store,a=e.getGroupStaff,s=(e.removeGroupStaff,t.selectedUser),l=t.selectedGroup,d=Object(c.useRef)(null),u=Object(o.b)(),p=Object(c.useState)(""),b=Object(n.a)(p,2),m=b[0],h=b[1],x=Object(c.useState)(!1),k=Object(n.a)(x,2),C=k[0],G=k[1],A=function(){return G(!C)};Object(c.useEffect)((function(){u(a(null===l||void 0===l?void 0:l.id)),Object.keys(s).length&&(r.a.findDOMNode(d.current).scrollTop=Number.MAX_SAFE_INTEGER)}),[s]);var T=Object(c.useState)(),_=Object(n.a)(T,2),P=(_[0],_[1],function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("userData"))[0];m.length&&(u(function(e,t){return function(a){j.a.post("".concat(i.a.app.ApiUrl,"/chat"),e).then((function(e){a(f(t))}))}}({senderId:t.id,sender_name:t.name,group_id:l.id,message:m},l)),h(""))}),M=function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("userData"))[0],a=new FormData;a.append("image",e.target.files[0]),a.append("senderId",t.id),a.append("sender_name",t.name),a.append("group_id",l.id),a.append("msg",m),u(function(e,t){return function(a){j.a.post("".concat(i.a.app.ApiUrl,"/upload/image/"),e).then((function(e){a(f(t))}))}}(a,l))},H=Object.keys(s).length&&s.chat?g.a:"div";return Object(U.jsx)("div",{className:"chat-app-window",children:Object(U.jsxs)("div",{className:O()("active-chat",{"d-none":null===s}),children:[Object(U.jsx)("div",{className:"chat-navbar",children:Object(U.jsx)("header",{className:"chat-header",children:Object(U.jsx)("div",{className:"d-flex align-items-center",children:Object(U.jsxs)("div",{className:"sidebar-toggle d-block mr-1",children:[Object(U.jsx)(N.a,{size:21,onClick:A})," ",null===l||void 0===l?void 0:l.group]})})})}),Object(U.jsx)(H,{ref:d,className:"user-chats",options:{wheelPropagation:!1},children:s.chat?Object(U.jsx)("div",{className:"chats",children:function(){var e=[];s.chat&&(e=s.chat);var t=[],a=e[0]?e[0].senderId:void 0,n={senderId:a,messages:[]};return e.forEach((function(c,s){a===c.senderId?n.messages.push({msg:c.message,file:c.file,time:c.createdAt}):(a=c.senderId,t.push(n),n={senderId:c.senderId,messages:[{msg:c.message,file:c.file,time:c.createdAt}]}),s===e.length-1&&t.push(n)})),t}().map((function(e,t){var a=JSON.parse(localStorage.getItem("userData"))[0],n=e.senderId===a.id?"chat-right":"chat-left";return Object(U.jsx)("div",{className:n,children:Object(U.jsx)("div",{className:"chat-body",children:e.messages.map((function(e){return Object(U.jsxs)("div",{className:"chat-content",children:[Object(U.jsx)("p",{children:e.msg}),e.file?Object(U.jsx)(I.a,{href:"".concat(i.a.app.serverApi,"/images/").concat(e.file),target:"_blank",title:"View file",children:"jpeg"===e.file.split(".").pop()||"jpg"===e.file.split(".").pop()||"png"===e.file.split(".").pop()?Object(U.jsx)("img",{src:"".concat(i.a.app.serverApi,"/images/").concat(e.file),className:"w-100"}):Object(U.jsx)(v.a,{size:38})}):""]},e.msg)}))})},t)}))}):null}),Object(U.jsxs)(E.a,{className:"chat-app-form",onSubmit:function(e){return P(e)},children:[Object(U.jsxs)(L.a,{className:"input-group-merge mr-1 form-send-message",children:[Object(U.jsx)(F.a,{addonType:"prepend",children:Object(U.jsx)(z.a,{children:Object(U.jsx)(S.a,{className:"cursor-pointer",size:14})})}),Object(U.jsx)(R.a,{value:m,onChange:function(e){return h(e.target.value)},placeholder:"Type your message or use speech to text"}),Object(U.jsx)(F.a,{addonType:"append",children:Object(U.jsx)(z.a,{children:Object(U.jsxs)(B.a,{className:"attachment-icon mb-0",for:"attach-doc",children:[Object(U.jsx)(y.a,{className:"cursor-pointer text-secondary",size:14}),Object(U.jsx)("input",{type:"file",id:"attach-doc",hidden:!0,onChange:function(e){return M(e)}})]})})})]}),Object(U.jsxs)(J.a,{className:"send",color:"primary",children:[Object(U.jsx)(w.a,{size:14,className:"d-lg-none"}),Object(U.jsx)("span",{className:"d-none d-lg-block",children:"Send"})]})]}),Object(U.jsx)(D,{isOpen:C,handleProfile:A,groupStaff:null===t||void 0===t?void 0:t.groupStaff,selectedGroup:l,dispatch:u,store:t})]})})},H=a(505),W=a(1092),Y=a(497),q=function(e){e.handleGroup;var t=e.store,a=e.sidebar,s=e.userSidebarLeft,r=e.handleUserSidebarLeft,i=e.handleTaskSidebar,l=t.userProfile,d=t.getGroups,u=(t.selectedGroup,Object(o.b)()),p=Object(c.useState)({}),j=Object(n.a)(p,2),b=j[0],m=j[1];return t?Object(U.jsx)("div",{className:"sidebar-left",children:Object(U.jsxs)("div",{className:"sidebar",children:[Object(U.jsx)("div",{className:O()("chat-profile-sidebar",{show:s})}),Object(U.jsxs)(Y.a,{className:O()("sidebar-content",{show:!0===a}),children:[Object(U.jsx)("div",{className:"sidebar-close-icon",children:Object(U.jsx)(k.a,{size:14})}),Object(U.jsx)("div",{className:"chat-fixed-search",children:Object(U.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(U.jsx)("div",{className:"sidebar-profile-toggle",onClick:r,children:Object.keys(l).length?Object(U.jsx)(H.a,{className:"avatar-border",img:l.avatar,status:status,imgHeight:"42",imgWidth:"42"}):null}),Object(U.jsx)(L.a,{className:"input-group-merge ml-1 w-100",children:Object(U.jsx)(W.a,{onClick:i})})]})}),Object(U.jsxs)(g.a,{className:"chat-user-list-wrapper list-group",options:{wheelPropagation:!1},children:[Object(U.jsx)("h4",{className:"chat-list-title",children:"Group Chats"}),Object(U.jsx)("ul",{className:"chat-users-list chat-list media-list",children:d.map((function(e){return Object(U.jsx)("li",{className:O()({active:"chat"===b.type&&b.id===e.id}),onClick:function(){return function(e,t){var a=t.id;u(f(t)),m({type:e,id:a})}("chat",e)},children:Object(U.jsx)("div",{className:"chat-info flex-grow-1",children:Object(U.jsxs)("h5",{className:"mb-0",children:[e.group," "]})})},e.id)}))})]})]})]})}):null},V=(a(1288),a(842),a(0)),X=a(128),K=a(992),Q=a(977),Z=a(632),$=a(550),ee=a(517),te=["data"],ae=function(e){var t=e.companyBrandStaff,a=e.open,s=e.handleTaskSidebar,r=e.store,o=e.dispatch,l=e.companyList,p=e.brandOptions,f=e.userData,m=Object(c.useState)({value:"",label:"Select Company"}),h=Object(n.a)(m,2),O=h[0],x=h[1],g=Object(c.useState)({value:"",label:"Select Brand"}),v=Object(n.a)(g,2),N=v[0],S=v[1],y=Object(c.useState)({value:"",label:"Select..."}),w=Object(n.a)(y,2),C=w[0],G=w[1],A=function(e,t){"c"===e&&x(t),"b"===e&&S(t),o(function(e){return function(){var t=Object(u.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.post("".concat(i.a.app.ApiUrl,"/staff/company-brand"),e).then((function(e){a({type:"COMPANY_STAFF",companyBrandStaff:e.data.data})})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}({company:O.value,brand:N.value}))},P=function(e){var t=e.children,a=e.handleTaskSidebar;return Object(U.jsxs)("div",{className:"modal-header d-flex align-items-center justify-content-between mb-1",children:[Object(U.jsx)("h5",{className:"modal-title",children:t}),Object(U.jsx)("div",{className:"todo-item-action d-flex align-items-center",children:Object(U.jsx)(k.a,{className:"font-weight-normal mt-25",size:16,onClick:a})})]})};return Object(U.jsx)(T.a,{isOpen:a,toggle:s,className:"sidebar-lg",contentClassName:"p-0",modalClassName:"modal-slide-in sidebar-todo-modal",children:Object(U.jsxs)(E.a,{id:"form-modal-todo",className:"todo-modal",onSubmit:function(e,t){e.preventDefault(),s();var a={};a.company=O.value,a.brand=N.value,a.group=e.target.group.value,a.assignee=C,a.emp_id=null===f||void 0===f?void 0:f.id,console.log(C),o(function(e){return function(){var t=Object(u.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.post("".concat(i.a.app.ApiUrl,"/group"),e).then((function(t){a({type:"NEW_GROUP",newStaff:t.data}),a(b(e.emp_id))})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(a))},children:[Object(U.jsx)(P,{store:r,dispatch:o}),Object(U.jsxs)(_.a,{className:"flex-grow-1 pb-sm-0 pb-3",children:[Object(U.jsxs)(Q.a,{children:[Object(U.jsx)(B.a,{className:"form-label",for:"due-date",children:"Group Name"}),Object(U.jsx)(R.a,{type:"text",name:"group",id:"group",required:!0})]}),Object(U.jsxs)(Q.a,{children:[Object(U.jsx)(B.a,{className:"form-label",for:"task-title",children:"Company"}),Object(U.jsx)($.a,{name:"company",isClearable:!1,className:"react-select",classNamePrefix:"select",options:l,value:O,onChange:function(e){A("c",e)}})]}),Object(U.jsxs)(Q.a,{children:[Object(U.jsx)(B.a,{className:"form-label",for:"task-title",children:"Brand"}),Object(U.jsx)($.a,{name:"brand",isClearable:!1,className:"react-select",classNamePrefix:"select",options:p,value:N,onChange:function(e){A("b",e)}})]}),Object(U.jsxs)(Q.a,{children:[Object(U.jsx)(B.a,{className:"form-label",for:"task-assignee",children:"Assignee Employee"}),Object(U.jsx)($.a,{isMulti:!0,id:"task-assignee",className:"react-select",classNamePrefix:"select",isClearable:!1,options:t,theme:ee.h,value:C,onChange:function(e){return G(e)},components:{Option:function(e){var t=e.data,a=Object(X.a)(e,te);return Object(U.jsx)(Z.z.Option,Object(V.a)(Object(V.a)({},a),{},{children:Object(U.jsx)(K.a,{className:"align-items-center",children:Object(U.jsx)(K.a,{body:!0,children:Object(U.jsx)("p",{className:"mb-0",children:t.label})})})}))}}})]}),Object(U.jsx)(J.a,{type:"submit",className:"mr-1",color:"primary",children:"Submit"}),Object(U.jsx)(J.a,{type:"reset",color:"secondary",outline:!0,children:"Cancel"})]})]})})};t.default=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.chat})),a=Object(c.useState)(!1),s=Object(n.a)(a,2),r=s[0],l=s[1],p=function(){return l(!r)},f=Object(c.useState)(!1),h=Object(n.a)(f,2),O=h[0],x=h[1],g=function(){return x(!O)},v=JSON.parse(localStorage.getItem("userData"))[0];return Object(c.useEffect)((function(){e(b(v.id)),e(function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat(i.a.app.ApiUrl,"/company/names")).then((function(e){t({type:"GET_COMPANY_LIST",companyList:e.data.data})})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat(i.a.app.ApiUrl,"/brand/names")).then((function(e){t({type:"BRAND_OPTIONS",brandOptions:e.data.data})})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(U.jsxs)(c.Fragment,{children:[Object(U.jsx)(q,{store:t,sidebar:O,handleSidebar:g,handleTaskSidebar:p,userData:v}),Object(U.jsx)("div",{className:"content-right",children:Object(U.jsx)("div",{className:"content-wrapper",children:Object(U.jsxs)("div",{className:"content-body",children:[Object(U.jsx)("div",{onClick:function(){setUserSidebarLeft(!1)}}),Object(U.jsx)(M,{store:t,handleSidebar:g,getGroupStaff:m,selectedGroup:null===t||void 0===t?void 0:t.selectGroup}),Object(U.jsx)(ae,{open:r,handleTaskSidebar:p,companyList:null===t||void 0===t?void 0:t.companyList,brandOptions:null===t||void 0===t?void 0:t.brandOptions,companyBrandStaff:null===t||void 0===t?void 0:t.companyBrandStaff,store:t,userData:v,dispatch:e})]})})})]})}},512:function(e,t,a){},842:function(e,t,a){}}]);
//# sourceMappingURL=112.a38fce76.chunk.js.map