/*! For license information please see 13.39746c53.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[13],{1365:function(e,t,a){},1717:function(e,t,a){"use strict";a.r(t);var s=a(27),i=a(1),c=a(985),n=a(26),l=a.n(n),r=a(0),o=a(514),d=a(1346),u=a(659),m=a.n(u),j=a(1165),p=a(1160),b=a(1087),h=a(699),O=a(695),g=a(696),f=a(675),x=a(697),k=a(6),v=function(e){var t=e.query,a=e.tasks,s=e.params,i=(e.setSort,e.dispatch),c=e.getTasks,n=e.setQuery,r=(e.updateTask,e.selectTask),u=e.reOrderTasks,v=(e.handleTaskSidebar,e.handleCommentSidebar),A=e.handleMainSidebar,C=e.getComment,S=function(e){var t={team:"light-primary",low:"light-success",medium:"light-warning",high:"light-danger",update:"light-info"};return e.map((function(e){return Object(k.jsx)(h.a,{className:"text-capitalize",color:t[e],pill:!0,children:e},e)}))},N=function(e){var t,a=e.assignee;return void 0===a.avatar||null===a.avatar?Object(k.jsx)(o.a,{img:"data:image/png;base64,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",imgHeight:"32",imgWidth:"32"}):""!==a.avatar?Object(k.jsx)(o.a,{img:a.avatar,imgHeight:"32",imgWidth:"32"}):Object(k.jsx)(o.a,{color:(t=e.tags,t.includes("high")?"light-primary":t.includes("medium")?"light-warning":t.includes("low")?"light-success":"light-primary"),content:a.fullName,initials:!0})};return Object(k.jsxs)("div",{className:"todo-app-list",children:[Object(k.jsxs)("div",{className:"app-fixed-search d-flex align-items-center",children:[Object(k.jsx)("div",{className:"sidebar-toggle cursor-pointer d-block d-lg-none ml-1",onClick:A,children:Object(k.jsx)(p.a,{size:21})}),Object(k.jsx)("div",{className:"d-flex align-content-center justify-content-between w-100",children:Object(k.jsxs)(O.a,{className:"input-group-merge",children:[Object(k.jsx)(g.a,{addonType:"prepend",children:Object(k.jsx)(f.a,{children:Object(k.jsx)(b.a,{className:"text-muted",size:14})})}),Object(k.jsx)(x.a,{placeholder:"Search task",value:t,onChange:function(e){n(e.target.value),i(c(s))}})]})})]}),Object(k.jsx)(m.a,{className:"list-group todo-task-list-wrapper",options:{wheelPropagation:!1},children:a.length?Object(k.jsx)(d.ReactSortable,{tag:"ul",list:a,handle:".drag-icon",className:"todo-task-list media-list",setList:function(e){return i(u(e))},children:a.map((function(e){return Object(k.jsx)("li",{onClick:function(){return i(r(t=e)),i(C(t.id)),void v();var t},className:l()("todo-item",{completed:e.isCompleted}),children:Object(k.jsxs)("div",{className:"todo-title-wrapper",children:[Object(k.jsxs)("div",{className:"todo-title-area",children:[Object(k.jsx)(j.a,{className:"drag-icon"}),Object(k.jsx)("span",{className:"todo-title",children:e.title})]}),Object(k.jsxs)("div",{className:"todo-item-action mt-lg-0 mt-50",children:[e.tags.length?Object(k.jsx)("div",{className:"badge-wrapper mr-1",children:S(e.tags)}):null,e.dueDate?Object(k.jsxs)("small",{className:"text-nowrap text-muted mr-1",children:[new Date(e.dueDate).toLocaleString("default",{month:"short"})," ",new Date(e.dueDate).getDate().toString().padStart(2,"0")]}):null,e.assignee?N(e):null]})]})},e.id)}))}):Object(k.jsx)("div",{className:"no-results show",children:Object(k.jsx)("h5",{children:"No Items Found"})})})]})},A=a(492),C=a(486),S=a(565),N=a(566),T=a(1080),I=a(1107),y=function(e){var t,a=e.handleTaskSidebar,s=e.mainSidebar,i=e.dispatch,c=e.getTasks,n=e.params,o=e.user;return Object(k.jsx)("div",{className:l()("sidebar-left",{show:!0===s}),children:Object(k.jsx)("div",{className:"sidebar",children:Object(k.jsx)("div",{className:"sidebar-content todo-sidebar",children:Object(k.jsxs)("div",{className:"todo-app-menu",children:[Object(k.jsx)("div",{className:"add-task",children:"admin"===o.role?Object(k.jsx)(C.a.Ripple,{color:"primary",onClick:function(){a()},block:!0,children:" Add Task "}):""}),Object(k.jsx)(m.a,{className:"sidebar-menu-list",options:{wheelPropagation:!1},children:Object(k.jsxs)(S.a,{tag:"div",className:"list-group-filters",children:[Object(k.jsxs)(N.a,{action:!0,tag:A.b,to:"/apps/todo/",active:""===n.filter&&""===n.tag,onClick:function(){return e="",void i(c(Object(r.a)(Object(r.a)({},n),{},{filter:e})));var e},children:[Object(k.jsx)(T.a,{className:"mr-75",size:18}),Object(k.jsx)("span",{className:"align-middle",children:"My Tasks"})]}),Object(k.jsxs)(N.a,{tag:A.b,to:"/apps/todo/completed",active:(t="completed",!!(n.filter&&n.filter===t||n.tag&&n.tag===t)),onClick:function(){return i(c("completed"))},action:!0,children:[Object(k.jsx)(I.a,{className:"mr-75",size:18}),Object(k.jsx)("span",{className:"align-middle",children:"Completed"})]})]})})]})})})})},E=a(130),W=a(128),K=a(544),z=a.n(K),w=a(1191),q=a(1186),F=a(1069),D=a(689),U=a(831),X=a(668),Y=a(698),R=a(667),J=a(529),M=a(661),Z=a(691),Q=a(523),B=a(560),L=a(605),P=(a(833),a(660),a(543),a(85)),V=a.n(P),G=a(45),H=function(e){return function(t){return V.a.get("".concat(G.a.app.ApiUrl,"/task"),{params:e}).then((function(a){t({type:"GET_TASKS",tasks:a.data.data,params:e})}))}},_=function(e){return function(t){return t({type:"REORDER_TASKS",tasks:e})}},$=function(e){return function(t,a){V.a.post("".concat(G.a.app.ApiUrl,"/task/newTask"),e).then((function(e){t({type:"ADD_TASK",task:e.data}),t(H({}))})).then(t(H(a().todo.params)))}},ee=function(e){return function(t,a){V.a.post("".concat(G.a.app.ApiUrl,"/task"),e).then((function(e){t({type:"UPDATE_TASK",task:e.data}),t(H({}))}))}},te=function(e){return function(t,a){V.a.delete("/apps/todo/delete-task",{taskId:e}).then((function(e){t({type:"DELETE_TASK",task:e.data})})).then((function(){return t(H(a().todo.params))}))}},ae=function(e){return function(t,a){V.a.get("".concat(G.a.app.ApiUrl,"/task/comments/").concat(e)).then((function(e){t({type:"SELECTED_COMMENT",comment:e.data.data})})).then((function(){return t(H(a().todo.params))}))}},se=function(e){return console.log(e),function(t,a){V.a.post("".concat(G.a.app.ApiUrl,"/task/comments/"),e).then((function(e){t({type:"NEW_COMMENT",task:e.data})}))}},ie=function(e){return function(t){t({type:"SELECT_TASK",task:e})}},ce=["data"],ne=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},le=function(e){var t=e.children,a=e.store,s=e.handleTaskSidebar,i=e.setDeleted,c=e.deleted,n=e.important,r=e.setImportant,o=e.deleteTask,d=e.dispatch;return Object(k.jsxs)("div",{className:"modal-header d-flex align-items-center justify-content-between mb-1",children:[Object(k.jsx)("h5",{className:"modal-title",children:t}),Object(k.jsxs)("div",{className:"todo-item-action d-flex align-items-center",children:[a&&!Object(B.e)(a.selectedTask)?Object(k.jsx)(w.a,{className:"cursor-pointer mt-25",size:16,onClick:function(){return i(!c),d(o(a.selectedTask.id)),void s()}}):null,Object(k.jsx)("span",{className:"todo-item-favorite cursor-pointer mx-75",children:Object(k.jsx)(q.a,{size:16,onClick:function(){return r(!n)},className:l()({"text-warning":!0===n})})}),Object(k.jsx)(F.a,{className:"font-weight-normal mt-25",size:16,onClick:s})]})]})},re=function(e){var t,a=Object(L.a)(),c=Object(s.a)(a,2),n=c[0],l=(c[1],e.open),o=e.handleTaskSidebar,d=e.store,u=e.dispatch,m=e.updateTask,j=e.selectTask,p=e.addTask,b=e.deleteTask,h=Object(i.useState)(""),O=Object(s.a)(h,2),g=O[0],f=O[1],v=Object(i.useState)([]),A=Object(s.a)(v,2),S=A[0],N=A[1],T=Object(i.useState)(),I=Object(s.a)(T,2),y=I[0],K=I[1],w=Object(i.useState)([]),q=Object(s.a)(w,2),F=q[0],P=q[1],H=Object(i.useState)("<p></p>"),_=Object(s.a)(H,2),$=_[0],ee=_[1],te=Object(i.useState)(!1),ae=Object(s.a)(te,2),se=ae[0],ie=ae[1],re=Object(i.useState)(!1),oe=Object(s.a)(re,2),de=oe[0],ue=oe[1],me=Object(i.useState)(!1),je=Object(s.a)(me,2),pe=je[0],be=je[1],he=Object(i.useState)(new Date),Oe=Object(s.a)(he,2),ge=Oe[0],fe=Oe[1],xe=function(){if(f(d.selectedTask.title),ee(d.selectedTask.description),ie(d.selectedTask.isCompleted),ue(d.selectedTask.isImportant),be(d.selectedTask.isDeleted),fe(d.selectedTask.dueDate),d.selectedTask.assignee.fullName,y.label,d.selectedTask.tags.length){var e=[];d.selectedTask.tags.map((function(t){e.push({value:t,label:ne(t)})})),P(e)}},ke=function(e){var t;N(e),u((t=e,function(e){V.a.get("".concat(G.a.app.ApiUrl,"/group/groupEmployees/").concat(t.id)).then((function(t){e({type:"TASK_GROUP_EMPLOYEES",task_group_employees:t.data.data})}))}))},ve=[];return null===d||void 0===d||null===(t=d.task_group_employees)||void 0===t||t.map((function(e){e.assigned&&ve.push(e)})),Object(k.jsx)(R.a,{isOpen:l,toggle:o,className:"sidebar-lg",contentClassName:"p-0",onOpened:function(){var e=d.selectedTask;if(!Object(B.e)(e)&&(f(e.title),ie(e.isCompleted),ue(e.isImportant),fe(e.dueDate),ee(e.description),e.tags.length)){var t=[];e.tags.map((function(e){t.push({value:e,label:ne(e)})})),P(t)}},onClosed:function(){P([]),N([]),ee(""),f(""),K(),ie(!1),ue(!1),fe(new Date),u(j({}))},modalClassName:"modal-slide-in sidebar-todo-modal",children:Object(k.jsxs)(J.a,{id:"form-modal-todo",className:"todo-modal",onSubmit:function(e){return e.preventDefault()},children:[Object(k.jsx)(le,{store:d,deleted:pe,dispatch:u,important:de,deleteTask:b,setDeleted:be,setImportant:ue,handleTaskSidebar:o,children:d&&!Object(B.e)(d.selectedTask)?Object(k.jsx)(C.a.Ripple,{outline:!0,size:"sm",onClick:function(){return ie(!se)},color:!0===se?"success":"secondary",children:!0===se?"Completed":"Mark Complete"}):"Add Task"}),Object(k.jsxs)(M.a,{className:"flex-grow-1 pb-sm-0 pb-3",children:[Object(k.jsxs)(Z.a,{children:[Object(k.jsx)(Q.a,{className:"form-label",for:"task-title",children:"Title"}),Object(k.jsx)(x.a,{id:"task-title",value:g,placeholder:"Title",className:"new-todo-item-title",onChange:function(e){return f(e.target.value)}})]}),Object(k.jsxs)(Z.a,{children:[Object(k.jsx)(Q.a,{className:"form-label",for:"task-assignee",children:"Group"}),Object(k.jsx)(X.a,{id:"task-assignee",className:"react-select",classNamePrefix:"select",isClearable:!0,name:"group",options:null===d||void 0===d?void 0:d.task_groups,theme:B.h,value:S,onChange:function(e){return ke(e)}})]}),Object(k.jsxs)(Z.a,{children:[Object(k.jsx)(Q.a,{className:"form-label",for:"task-tags",children:"Assign"}),Object(k.jsx)(X.a,{isMulti:!0,id:"task-tags",className:"react-select",classNamePrefix:"select",isClearable:!0,options:ve,theme:B.h,value:y,onChange:function(e){K(e),K(null!==e?Object(E.a)(e):[])},components:{Option:function(e){var t=e.data,a=Object(W.a)(e,ce);return Object(k.jsx)(U.z.Option,Object(r.a)(Object(r.a)({},a),{},{children:Object(k.jsx)(Y.a,{className:"align-items-center",children:Object(k.jsx)(Y.a,{body:!0,children:Object(k.jsx)("p",{className:"mb-0",children:t.label})})})}))}}})]}),Object(k.jsxs)(Z.a,{children:[Object(k.jsx)(Q.a,{className:"form-label",for:"due-date",children:"Due Date"}),Object(k.jsx)(z.a,{id:"due-date",name:"due-date",className:"form-control",onChange:function(e){return fe(e[0])},value:ge,options:{dateFormat:"Y-m-d"}})]}),Object(k.jsxs)(Z.a,{children:[Object(k.jsx)(Q.a,{className:"form-label",for:"task-tags",children:"Status"}),Object(k.jsx)(X.a,{isMulti:!0,id:"task-tags",className:"react-select",classNamePrefix:"select",isClearable:!1,options:[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}],theme:B.h,value:F,onChange:function(e){P(null!==e?Object(E.a)(e):[])}})]}),Object(k.jsxs)(Z.a,{children:[Object(k.jsx)(Q.a,{for:"task-desc",className:"form-label",children:"Description"}),Object(k.jsx)(D.a,{apiKey:"emjshh1tafcjgizkmk6eofcmmcxc2cmugajs9l2ordjyca64",value:$,onEditorChange:function(e){return ee(e)},init:{menubar:!1,toolbar:"bold italic underline aligncenter link",toolbar_location:"bottom",skin:"dark"===n?"dark":void 0,content_css:"dark"===n?"dark":void 0}})]}),Object(k.jsx)(Z.a,{className:"my-1",children:function(){var e=[],t=[];F.length&&F.map((function(t){return e.push(t.value)})),(null===y||void 0===y?void 0:y.length)&&y.map((function(e){return t.push(e.value)}));var a=JSON.parse(localStorage.getItem("userData"))[0],s={group:S?S.id:"",title:g,dueDate:ge,tags:e,description:$,isCompleted:se,isDeleted:pe,isImportant:de,assignee:t,employee_id:a.id};return d&&!Object(B.e)(d.selectedTask)?Object(k.jsxs)(i.Fragment,{children:[Object(k.jsx)(C.a,{color:"primary",disabled:!g.length,className:"update-btn update-todo-item mr-1",onClick:function(){u(m(Object(r.a)(Object(r.a)({},s),{},{id:d.selectedTask.id}))),o()},children:"Update"}),Object(k.jsx)(C.a,{color:"secondary",onClick:xe,outline:!0,children:"Reset"})]}):Object(k.jsxs)(i.Fragment,{children:[Object(k.jsx)(C.a,{color:"primary",disabled:!g.length,className:"add-todo-item mr-1",onClick:function(){u(p(s)),o()},children:"Add Task"}),Object(k.jsx)(C.a,{color:"secondary",onClick:o,outline:!0,children:"Cancel"})]})}()})]})]})})},oe=(a(561),a(1349)),de=a.n(oe),ue=function(e){var t,a,c,n=e.open,l=e.handleCommentSidebar,o=e.selectedTask,d=e.store,u=e.dispatch,m=e.commentList,j=e.giveTaskComment,p=e.updateTask,b=Object(i.useState)("<p></p>"),h=Object(s.a)(b,2),O=h[0],g=h[1],f=Object(L.a)(),x=Object(s.a)(f,2),v=x[0],A=(x[1],Object(i.useState)(null===d||void 0===d||null===(t=d.selectedTask)||void 0===t?void 0:t.isCompleted)),S=Object(s.a)(A,2),N=S[0],T=S[1];return Object(k.jsxs)(R.a,{isOpen:n,toggle:l,contentClassName:"p-0",modalClassName:"modal-slide-in sidebar-todo-modal",children:[Object(k.jsxs)("div",{className:"modal-header d-flex align-items-center justify-content-between mb-1",children:[Object(k.jsx)("h5",{className:"modal-title",children:"Comments"}),Object(k.jsxs)("div",{className:"todo-item-action d-flex align-items-center",children:[Object(k.jsx)("span",{className:"todo-item-favorite cursor-pointer mx-75",children:Object(k.jsx)(C.a.Ripple,{outline:!0,size:"sm",onClick:function(){return function(e){var t,a;T(!(null===d||void 0===d||null===(t=d.selectedTask)||void 0===t?void 0:t.isCompleted)),u(p({task_id:e.id,isCompleted:null===d||void 0===d||null===(a=d.selectedTask)||void 0===a?void 0:a.isCompleted})),l()}(o)},color:!0===(null===d||void 0===d||null===(a=d.selectedTask)||void 0===a?void 0:a.isCompleted)?"success":"secondary",children:!0===(null===d||void 0===d||null===(c=d.selectedTask)||void 0===c?void 0:c.isCompleted)?"Completed":"Mark Complete"})}),Object(k.jsx)(F.a,{className:"font-weight-normal mt-25",size:16,onClick:l})]})]}),Object(k.jsx)(J.a,{id:"form-modal-todo",className:"todo-modal",onSubmit:function(e){return e.preventDefault()},children:Object(k.jsxs)(M.a,{className:"flex-grow-1 pb-sm-0 pb-3",children:[Object(k.jsx)(Z.a,{children:Object(k.jsx)(D.a,{apiKey:"emjshh1tafcjgizkmk6eofcmmcxc2cmugajs9l2ordjyca64",value:O,onEditorChange:function(e){return g(e)},init:{menubar:!1,toolbar:"bold italic underline aligncenter link",toolbar_location:"bottom",skin:"dark"===v?"dark":void 0,content_css:"dark"===v?"dark":void 0}})}),Object(k.jsx)(Z.a,{className:"my-1",children:function(){var e=JSON.parse(localStorage.getItem("userData"))[0],t=Object(i.useState)(!1),a=Object(s.a)(t,2),c=a[0],n=(a[1],{description:O,isCompleted:N,isImportant:c,employee_id:e.id});if(d)return Object(k.jsx)(i.Fragment,{children:Object(k.jsx)(C.a,{color:"primary",disabled:!O.length,className:"update-btn update-todo-item mr-1",onClick:function(){u(j(Object(r.a)(Object(r.a)({},n),{},{task_id:m[0].task_id}))),l()},children:"Post Comment"})})}()})]})}),Object(k.jsx)("div",{className:"p-1",children:function(e){if(e.length)return e&&(null===e||void 0===e?void 0:e.map((function(e,t){var a=JSON.parse(localStorage.getItem("userData"))[0],s=e.employee_id===a.id?"text-right":"text-left";return Object(k.jsxs)("div",{className:s,children:[de()(e.description),Object(k.jsx)("span",{children:e.createdAt.replace("T"," ").substring(0,e.createdAt.length-8)})]})})))}(m)})]})},me=a(129);a(1365),t.default=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(i.useState)(""),o=Object(s.a)(r,2),d=o[0],u=o[1],m=Object(i.useState)(!1),j=Object(s.a)(m,2),p=j[0],b=j[1],h=Object(i.useState)(!1),O=Object(s.a)(h,2),g=O[0],f=O[1],x=Object(i.useState)(!1),A=Object(s.a)(x,2),C=A[0],S=A[1],N=Object(me.b)(),T=Object(me.c)((function(e){return e.todo})),I=JSON.parse(localStorage.getItem("userData"))[0],E=Object(c.i)(),W={filter:E.filter||"",q:d||"",sortBy:a||"",tag:E.tag||"",emp_id:I.id},K=function(){return b(!p)},z=function(){return f(!g)},w=function(){return S(!C)};return Object(i.useEffect)((function(){N((function(e){return V.a.get("".concat(G.a.app.ApiUrl,"/group/groupOptions")).then((function(t){e({type:"GET_TASK_GROUPS",task_groups:t.data.data})}))})),N(H({filter:E.filter||"",q:d||"",sortBy:a||"",tag:E.tag||"",emp_id:I.id}))}),[T.tasks.length,E.filter,E.tag,d,a]),Object(k.jsxs)(i.Fragment,{children:[Object(k.jsx)(y,{store:T,params:W,getTasks:H,dispatch:N,mainSidebar:p,urlFilter:E.filter,setMainSidebar:b,handleTaskSidebar:z,handleCommentSidebar:w,getComment:ae,user:I}),Object(k.jsx)("div",{className:"content-right",children:Object(k.jsx)("div",{className:"content-wrapper",children:Object(k.jsxs)("div",{className:"content-body",children:[Object(k.jsx)("div",{className:l()("body-content-overlay",{show:!0===p}),onClick:K}),T?Object(k.jsx)(v,{store:T,tasks:T.tasks,sort:a,query:d,params:W,setSort:n,setQuery:u,dispatch:N,getTasks:H,paramsURL:E,updateTask:ee,selectTask:ie,reOrderTasks:_,handleMainSidebar:K,handleTaskSidebar:z,handleCommentSidebar:w,getComment:ae}):null,Object(k.jsx)(re,{store:T,params:W,addTask:$,dispatch:N,open:g,updateTask:ee,selectTask:ie,deleteTask:te,handleTaskSidebar:z}),Object(k.jsx)(ue,{store:T,params:W,addTask:$,dispatch:N,open:C,handleCommentSidebar:w,getComment:ae,commentList:null===T||void 0===T?void 0:T.selectedComment,giveTaskComment:se,updateTask:ee,selectedTask:null===T||void 0===T?void 0:T.selectedTask})]})})})]})}},543:function(e,t,a){}}]);
//# sourceMappingURL=13.39746c53.chunk.js.map