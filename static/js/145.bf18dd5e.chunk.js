(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[145],{1005:function(e,a,t){},1386:function(e,a,t){},1801:function(e,a,t){"use strict";t.r(a);var n=t(27),c=t(1),s=t(18),r=t.n(s),i=t(45),l=t(129),o=t(601),d=t.n(o),u=t(615),j=t(85),b=t.n(j),p=function(e){return console.log(e),function(a){b.a.get("".concat(i.a.app.ApiUrl,"/group/").concat(e)).then((function(e){a({type:"GET_GROUPS",getGroups:e.data.data})}))}},h=function(e){return function(a){b.a.get("".concat(i.a.app.ApiUrl,"/chat/").concat(e),e).then((function(t){a({type:"SELECTED_GROUP",data:e}),a({type:"SELECT_CHAT",data:t.data.data[0]})}))}},m=t(26),f=t.n(m),O=t(663),x=t.n(O),g=t(1170),v=t(1193),N=t(1194),S=t(1178),y=t(1212),w=t(612),k=t(522),C=t(701),A=t(702),T=t(680),I=t(703),U=t(523),_=t(486),E=t(6),D=function(e){e.handleUser,e.handleUserSidebarRight;var a=e.handleSidebar,t=e.store,s=(e.userSidebarLeft,t.selectedUser),o=t.selectedGroup,d=Object(c.useRef)(null),u=Object(l.b)(),j=Object(c.useState)(""),p=Object(n.a)(j,2),m=p[0],O=p[1];Object(c.useEffect)((function(){Object.keys(s).length&&(r.a.findDOMNode(d.current).scrollTop=Number.MAX_SAFE_INTEGER)}),[s]);var D=Object(c.useState)(),L=Object(n.a)(D,2),P=(L[0],L[1],function(e){e.preventDefault();var a,t=JSON.parse(localStorage.getItem("userData"))[0];m.length&&(u((a={senderId:t.id,sender_name:t.name,group_id:o,message:m},function(e){b.a.post("".concat(i.a.app.ApiUrl,"/chat"),a).then((function(t){e(h(a.group_id))}))})),O(""))}),G=function(e){e.preventDefault();var a=JSON.parse(localStorage.getItem("userData"))[0],t=new FormData;t.append("image",e.target.files[0]),t.append("senderId",a.id),t.append("sender_name",a.name),t.append("group_id",o),t.append("msg",m),u(function(e,a){return function(t){b.a.post("".concat(i.a.app.ApiUrl,"/upload/image/"),e).then((function(e){t(h(a))}))}}(t,o))},z=Object.keys(s).length&&s.chat?x.a:"div";return Object(E.jsx)("div",{className:"chat-app-window",children:Object(E.jsxs)("div",{className:f()("active-chat",{"d-none":null===s}),children:[Object(E.jsx)("div",{className:"chat-navbar",children:Object(E.jsx)("header",{className:"chat-header",children:Object(E.jsx)("div",{className:"d-flex align-items-center",children:Object(E.jsxs)("div",{className:"sidebar-toggle d-block d-lg-none mr-1",onClick:a,children:[Object(E.jsx)(v.a,{size:21}),Object(E.jsx)("h1",{children:"Test"})]})})})}),Object(E.jsx)(z,{ref:d,className:"user-chats",options:{wheelPropagation:!1},children:s.chat?Object(E.jsx)("div",{className:"chats",children:function(){var e=[];s.chat&&(e=s.chat);var a=[],t=e[0]?e[0].senderId:void 0,n={senderId:t,messages:[]};return e.forEach((function(c,s){t===c.senderId?n.messages.push({msg:c.message,file:c.file,time:c.createdAt}):(t=c.senderId,a.push(n),n={senderId:c.senderId,messages:[{msg:c.message,file:c.file,time:c.createdAt}]}),s===e.length-1&&a.push(n)})),a}().map((function(e,a){var t=JSON.parse(localStorage.getItem("userData"))[0],n=e.senderId===t.id?"chat-right":"chat-left";return Object(E.jsx)("div",{className:n,children:Object(E.jsx)("div",{className:"chat-body",children:e.messages.map((function(e){return Object(E.jsxs)("div",{className:"chat-content",children:[Object(E.jsx)("p",{children:e.msg}),e.file?Object(E.jsx)(w.a,{href:"".concat(i.a.app.serverApi,"/images/").concat(e.file),target:"_blank",title:"View file",children:"jpeg"===e.file.split(".").pop()||"jpg"===e.file.split(".").pop()||"png"===e.file.split(".").pop()?Object(E.jsx)("img",{src:"".concat(i.a.app.serverApi,"/images/").concat(e.file),className:"w-100"}):Object(E.jsx)(g.a,{size:38})}):""]},e.msg)}))})},a)}))}):null}),Object(E.jsxs)(k.a,{className:"chat-app-form",onSubmit:function(e){return P(e)},children:[Object(E.jsxs)(C.a,{className:"input-group-merge mr-1 form-send-message",children:[Object(E.jsx)(A.a,{addonType:"prepend",children:Object(E.jsx)(T.a,{children:Object(E.jsx)(N.a,{className:"cursor-pointer",size:14})})}),Object(E.jsx)(I.a,{value:m,onChange:function(e){return O(e.target.value)},placeholder:"Type your message or use speech to text"}),Object(E.jsx)(A.a,{addonType:"append",children:Object(E.jsx)(T.a,{children:Object(E.jsxs)(U.a,{className:"attachment-icon mb-0",for:"attach-doc",children:[Object(E.jsx)(S.a,{className:"cursor-pointer text-secondary",size:14}),Object(E.jsx)("input",{type:"file",id:"attach-doc",hidden:!0,onChange:function(e){return G(e)}})]})})})]}),Object(E.jsxs)(_.a,{className:"send",color:"primary",children:[Object(E.jsx)(y.a,{size:14,className:"d-lg-none"}),Object(E.jsx)("span",{className:"d-none d-lg-block",children:"Send"})]})]})]})})},L=t(509),P=t(1096),G=t(1207),z=t(497),R=function(e){e.setMainSidebar;var a=e.store,t=e.sidebar,s=e.handleSidebar,r=e.userSidebarLeft,i=e.handleUserSidebarLeft,o=e.handleTaskSidebar,d=e.userData,u=a.userProfile,j=a.getGroups,b=Object(l.b)(),p=Object(c.useState)({}),m=Object(n.a)(p,2),O=m[0],g=m[1];return a?Object(E.jsx)("div",{className:"sidebar-left",children:Object(E.jsxs)("div",{className:"sidebar",children:[Object(E.jsx)("div",{className:f()("chat-profile-sidebar",{show:r})}),Object(E.jsxs)(z.a,{className:f()("sidebar-content",{show:!0===t}),children:[Object(E.jsx)("div",{className:"sidebar-close-icon",onClick:s,children:Object(E.jsx)(P.a,{size:14})}),Object(E.jsx)("div",{className:"chat-fixed-search",children:Object(E.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(E.jsx)("div",{className:"sidebar-profile-toggle",onClick:i,children:Object.keys(u).length?Object(E.jsx)(L.a,{className:"avatar-border",img:u.avatar,status:status,imgHeight:"42",imgWidth:"42"}):null}),Object(E.jsx)(C.a,{className:"input-group-merge ml-1 w-100",children:"admin"===d.role?Object(E.jsx)(G.a,{onClick:o}):""})]})}),Object(E.jsxs)(x.a,{className:"chat-user-list-wrapper list-group",options:{wheelPropagation:!1},children:[Object(E.jsx)("h4",{className:"chat-list-title",children:"Group Chats"}),Object(E.jsx)("ul",{className:"chat-users-list chat-list media-list",children:j.map((function(e){return Object(E.jsx)("li",{className:f()({active:"chat"===O.type&&O.id===e.id}),onClick:function(){return a="chat",n=e.id,b(h(n)),g({type:a,id:n}),void(!0===t&&s());var a,n},children:Object(E.jsx)("div",{className:"chat-info flex-grow-1",children:Object(E.jsxs)("h5",{className:"mb-0",children:[e.group," "]})})},e.id)}))})]})]})]})}):null},B=(t(1386),t(1005),t(0)),M=t(128),J=t(704),F=t(670),H=t(664),W=t(697),Y=t(842),q=t(672),V=t(561),X=["data"],K=function(e){var a=e.companyBrandStaff,t=e.open,s=e.handleTaskSidebar,r=e.store,l=e.dispatch,o=e.companyList,j=e.brandOptions,h=Object(c.useState)({value:"",label:"Select Company"}),m=Object(n.a)(h,2),f=m[0],O=m[1],x=Object(c.useState)({value:"",label:"Select Brand"}),g=Object(n.a)(x,2),v=g[0],N=g[1],S=Object(c.useState)({value:"",label:""}),y=Object(n.a)(S,2),w=y[0],C=y[1],A=function(e){var a;l((a={company:f.value,brand:v.value},function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("".concat(i.a.app.ApiUrl,"/staff/company-brand"),a).then((function(e){t({type:"COMPANY_STAFF",companyBrandStaff:e.data.data})})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()))},T=function(e){var a=e.children,t=(e.store,e.handleTaskSidebar);e.important,e.setImportant,e.dispatch;return Object(E.jsxs)("div",{className:"modal-header d-flex align-items-center justify-content-between mb-1",children:[Object(E.jsx)("h5",{className:"modal-title",children:a}),Object(E.jsx)("div",{className:"todo-item-action d-flex align-items-center",children:Object(E.jsx)(P.a,{className:"font-weight-normal mt-25",size:16,onClick:t})})]})};return Object(E.jsx)(F.a,{isOpen:t,toggle:s,className:"sidebar-lg",contentClassName:"p-0",modalClassName:"modal-slide-in sidebar-todo-modal",children:Object(E.jsxs)(k.a,{id:"form-modal-todo",className:"todo-modal",onSubmit:function(e,a){e.preventDefault(),s();var t={};t.company=f.value,t.brand=v.value,t.group=e.target.group.value,t.assignee=w,l(function(e){return function(){var a=Object(u.a)(d.a.mark((function a(t){return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.post("".concat(i.a.app.ApiUrl,"/group"),e).then((function(e){t({type:"NEW_GROUP",newStaff:e.data}),t(p())})).catch((function(e){return console.log(e)}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(t))},children:[Object(E.jsx)(T,{store:r,dispatch:l}),Object(E.jsxs)(H.a,{className:"flex-grow-1 pb-sm-0 pb-3",children:[Object(E.jsxs)(W.a,{children:[Object(E.jsx)(U.a,{className:"form-label",for:"due-date",children:"Group Name"}),Object(E.jsx)(I.a,{type:"text",name:"group",id:"group",required:!0})]}),Object(E.jsxs)(W.a,{children:[Object(E.jsx)(U.a,{className:"form-label",for:"task-title",children:"Company"}),Object(E.jsx)(q.a,{name:"company",isClearable:!1,className:"react-select",classNamePrefix:"select",options:o,value:f,onChange:function(e){O(e),A()}})]}),Object(E.jsxs)(W.a,{children:[Object(E.jsx)(U.a,{className:"form-label",for:"task-title",children:"Brand"}),Object(E.jsx)(q.a,{name:"brand",isClearable:!1,className:"react-select",classNamePrefix:"select",options:j,value:v,onChange:function(e){N(e),A()}})]}),Object(E.jsxs)(W.a,{children:[Object(E.jsx)(U.a,{className:"form-label",for:"task-assignee",children:"Assignee Employee"}),Object(E.jsx)(q.a,{isMulti:!0,id:"task-assignee",className:"react-select",classNamePrefix:"select",isClearable:!1,options:a,theme:V.h,value:w,onChange:function(e){return C(e)},components:{Option:function(e){var a=e.data,t=Object(M.a)(e,X);return Object(E.jsx)(Y.z.Option,Object(B.a)(Object(B.a)({},t),{},{children:Object(E.jsx)(J.a,{className:"align-items-center",children:Object(E.jsx)(J.a,{body:!0,children:Object(E.jsx)("p",{className:"mb-0",children:a.label})})})}))}}})]}),Object(E.jsx)(_.a,{type:"submit",className:"mr-1",color:"primary",children:"Submit"}),Object(E.jsx)(_.a,{type:"reset",color:"secondary",outline:!0,children:"Cancel"})]})]})})};a.default=function(){var e=Object(l.b)(),a=Object(l.c)((function(e){return e.chat})),t=Object(c.useState)(!1),s=Object(n.a)(t,2),r=s[0],o=s[1],j=function(){return o(!r)},h=Object(c.useState)({}),m=Object(n.a)(h,2),O=(m[0],m[1]),x=Object(c.useState)(!1),g=Object(n.a)(x,2),v=g[0],N=g[1],S=Object(c.useState)(!1),y=Object(n.a)(S,2),w=y[0],k=y[1],C=Object(c.useState)(!1),A=Object(n.a)(C,2),T=A[0],I=A[1],U=function(){return N(!v)},_=JSON.parse(localStorage.getItem("userData"))[0];return Object(c.useEffect)((function(){e(p(_.id)),e(function(){var e=Object(u.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(i.a.app.ApiUrl,"/company/names")).then((function(e){a({type:"GET_COMPANY_LIST",companyList:e.data.data})})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),e(function(){var e=Object(u.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(i.a.app.ApiUrl,"/brand/names")).then((function(e){a({type:"BRAND_OPTIONS",brandOptions:e.data.data})})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}),[e]),Object(E.jsxs)(c.Fragment,{children:[Object(E.jsx)(R,{store:a,sidebar:v,handleSidebar:U,userSidebarLeft:T,handleTaskSidebar:j,setMainSidebar:function(){return I(!T)},userData:_}),Object(E.jsx)("div",{className:"content-right",children:Object(E.jsx)("div",{className:"content-wrapper",children:Object(E.jsxs)("div",{className:"content-body",children:[Object(E.jsx)("div",{className:f()("body-content-overlay",{show:!0===w||!0===v||!0===T}),onClick:function(){I(!1)}}),Object(E.jsx)(D,{store:a,handleUser:function(e){return O(e)},handleSidebar:U,userSidebarLeft:T,handleUserSidebarRight:function(){return k(!w)}}),Object(E.jsx)(K,{open:r,handleTaskSidebar:j,companyList:null===a||void 0===a?void 0:a.companyList,brandOptions:null===a||void 0===a?void 0:a.brandOptions,companyBrandStaff:null===a||void 0===a?void 0:a.companyBrandStaff,store:a,dispatch:e})]})})})]})}}}]);
//# sourceMappingURL=145.bf18dd5e.chunk.js.map