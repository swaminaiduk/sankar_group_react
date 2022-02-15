/*! For license information please see 12.92bfb542.chunk.js.LICENSE.txt */
(this.webpackJsonpSankarGroups=this.webpackJsonpSankarGroups||[]).push([[12],{1297:function(e,t,a){},1724:function(e,t,a){"use strict";a.r(t);var s=a(27),n=a(1),c=a(836),i=a(26),l=a.n(i),o=a(0),r=(a(505),a(1295)),d=a(543),m=a.n(d),u=a(1089),j=a(1026),b=a(1084),p=a(1009),h=a(998),O=a(991),g=a(992),f=a(841),k=a(993),x=a(6),v=function(e){var t=e.query,a=e.tasks,s=e.params,n=(e.setSort,e.dispatch),c=e.getTasks,i=e.setQuery,o=(e.updateTask,e.selectTask),d=e.reOrderTasks,v=(e.handleTaskSidebar,e.handleCommentSidebar),N=e.handleMainSidebar,T=e.getComment,C=function(e){var t={team:"light-primary",low:"light-success",medium:"light-warning",high:"light-danger",update:"light-info"};return e.map((function(e){return Object(x.jsx)(h.a,{className:"text-capitalize",color:t[e],pill:!0,children:e},e)}))};return Object(x.jsxs)("div",{className:"todo-app-list",children:[Object(x.jsxs)("div",{className:"app-fixed-search d-flex align-items-center",children:[Object(x.jsx)("div",{className:"sidebar-toggle cursor-pointer d-block d-lg-none ml-1",onClick:N,children:Object(x.jsx)(b.a,{size:21})}),Object(x.jsx)("div",{className:"d-flex align-content-center justify-content-between w-100",children:Object(x.jsxs)(O.a,{className:"input-group-merge",children:[Object(x.jsx)(g.a,{addonType:"prepend",children:Object(x.jsx)(f.a,{children:Object(x.jsx)(p.a,{className:"text-muted",size:14})})}),Object(x.jsx)(k.a,{placeholder:"Search task",value:t,onChange:function(e){i(e.target.value),n(c(s))}})]})})]}),Object(x.jsx)(m.a,{className:"list-group todo-task-list-wrapper",options:{wheelPropagation:!1},children:a.length?Object(x.jsx)(r.ReactSortable,{tag:"ul",list:a,handle:".drag-icon",className:"todo-task-list media-list",setList:function(e){return n(d(e))},children:a.map((function(e){return Object(x.jsx)("li",{onClick:function(){return n(o(t=e)),n(T(t.id)),void v();var t},className:l()("todo-item",{completed:e.isCompleted}),children:Object(x.jsxs)("div",{className:"todo-title-wrapper",children:[Object(x.jsxs)("div",{className:"todo-title-area",children:[Object(x.jsx)(u.a,{className:"drag-icon"}),Object(x.jsxs)("span",{className:"todo-title bg-warning text-white ",children:[" \xa0 ",e.groupId," \xa0 "]}),Object(x.jsx)("span",{className:"todo-title",children:e.title})]}),Object(x.jsxs)("div",{className:"todo-item-action mt-lg-0 mt-50",children:[e.company_name?Object(x.jsxs)("div",{className:"badge-wrapper text-success mr-1",children:[Object(x.jsx)(j.a,{size:18})," ",e.company_name]}):null,e.tags.length?Object(x.jsx)("div",{className:"badge-wrapper mr-1",children:C(e.tags)}):null,e.dueDate?Object(x.jsxs)("small",{className:"text-nowrap text-muted mr-1",children:[new Date(e.dueDate).toLocaleString("default",{month:"short"})," ",new Date(e.dueDate).getDate().toString().padStart(2,"0")]}):null]})]})},e.id)}))}):Object(x.jsx)("div",{className:"no-results show",children:Object(x.jsx)("h5",{children:"No Items Found"})})})]})},N=a(492),T=a(487),C=a(561),S=a(562),y=a(1e3),w=a(1030),_=function(e){var t,a=e.handleTaskSidebar,s=e.mainSidebar,n=e.dispatch,c=e.getTasks,i=e.params,r=e.user;return Object(x.jsx)("div",{className:l()("sidebar-left",{show:!0===s}),children:Object(x.jsx)("div",{className:"sidebar",children:Object(x.jsx)("div",{className:"sidebar-content todo-sidebar",children:Object(x.jsxs)("div",{className:"todo-app-menu",children:[Object(x.jsx)("div",{className:"add-task",children:"admin"===r.role?Object(x.jsx)(T.a.Ripple,{color:"primary",onClick:function(){a()},block:!0,children:" Add Task "}):""}),Object(x.jsx)(m.a,{className:"sidebar-menu-list",options:{wheelPropagation:!1},children:Object(x.jsxs)(C.a,{tag:"div",className:"list-group-filters",children:[Object(x.jsxs)(S.a,{action:!0,tag:N.b,to:"/apps/todo/",active:""===i.filter&&""===i.tag,onClick:function(){return e="",void n(c(Object(o.a)(Object(o.a)({},i),{},{filter:e})));var e},children:[Object(x.jsx)(y.a,{className:"mr-75",size:18}),Object(x.jsx)("span",{className:"align-middle",children:"My Tasks"})]}),Object(x.jsxs)(S.a,{tag:N.b,to:"/apps/todo/completed",active:(t="completed",!!(i.filter&&i.filter===t||i.tag&&i.tag===t)),onClick:function(){return n(c("completed"))},action:!0,children:[Object(x.jsx)(w.a,{className:"mr-75",size:18}),Object(x.jsx)("span",{className:"align-middle",children:"Completed"})]})]})})]})})})})},D=a(130),A=a(128),E=a(509),z=a.n(E),M=a(1115),I=a(1110),U=a(980),R=a(548),K=a(632),L=a(549),P=a(996),F=a(790),G=a(513),J=a(657),q=a(981),B=a(508),Q=a(517),Y=a(529),H=(a(591),a(536),a(512),a(85)),W=a.n(H),V=a(45),X=function(e){return function(t){return W.a.get("".concat(V.a.app.ApiUrl,"/task"),{params:e}).then((function(a){t({type:"GET_TASKS",tasks:a.data.data,params:e})}))}},Z=function(e){return function(t){return t({type:"REORDER_TASKS",tasks:e})}},$=function(e){return function(t,a){W.a.post("".concat(V.a.app.ApiUrl,"/task/newTask"),e).then((function(e){t({type:"ADD_TASK",task:e.data}),t(X({}))})).then(t(X(a().todo.params)))}},ee=function(e){return function(t,a){W.a.post("".concat(V.a.app.ApiUrl,"/task"),e).then((function(e){t({type:"UPDATE_TASK",task:e.data}),t(X({}))}))}},te=function(e){return function(t,a){W.a.delete("/apps/todo/delete-task",{taskId:e}).then((function(e){t({type:"DELETE_TASK",task:e.data})})).then((function(){return t(X(a().todo.params))}))}},ae=function(e){return function(t,a){W.a.get("".concat(V.a.app.ApiUrl,"/task/comments/").concat(e)).then((function(e){t({type:"SELECTED_COMMENT",comment:e.data.data})})).then((function(){return t(X(a().todo.params))}))}},se=function(e){return console.log(e),function(t,a){W.a.post("".concat(V.a.app.ApiUrl,"/task/comments/"),e).then((function(e){t({type:"NEW_COMMENT",task:e.data})}))}},ne=function(e){return function(t){t({type:"SELECT_TASK",task:e})}},ce=["data"],ie=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},le=function(e){var t=e.children,a=e.store,s=e.handleTaskSidebar,n=e.setDeleted,c=e.deleted,i=e.important,o=e.setImportant,r=e.deleteTask,d=e.dispatch;return Object(x.jsxs)("div",{className:"modal-header d-flex align-items-center justify-content-between mb-1",children:[Object(x.jsx)("h5",{className:"modal-title",children:t}),Object(x.jsxs)("div",{className:"todo-item-action d-flex align-items-center",children:[a&&!Object(Q.e)(a.selectedTask)?Object(x.jsx)(M.a,{className:"cursor-pointer mt-25",size:16,onClick:function(){return n(!c),d(r(a.selectedTask.id)),void s()}}):null,Object(x.jsx)("span",{className:"todo-item-favorite cursor-pointer mx-75",children:Object(x.jsx)(I.a,{size:16,onClick:function(){return o(!i)},className:l()({"text-warning":!0===i})})}),Object(x.jsx)(U.a,{className:"font-weight-normal mt-25",size:16,onClick:s})]})]})},oe=function(e){var t,a=Object(Y.a)(),c=Object(s.a)(a,2),i=c[0],l=(c[1],e.open),r=e.handleTaskSidebar,d=e.store,m=e.dispatch,u=e.updateTask,j=e.selectTask,b=e.addTask,p=e.deleteTask,h=Object(n.useState)(""),O=Object(s.a)(h,2),g=O[0],f=O[1],v=Object(n.useState)([]),N=Object(s.a)(v,2),C=N[0],S=N[1],y=Object(n.useState)(),w=Object(s.a)(y,2),_=w[0],E=w[1],M=Object(n.useState)([]),I=Object(s.a)(M,2),U=I[0],H=I[1],X=Object(n.useState)("<p></p>"),Z=Object(s.a)(X,2),$=Z[0],ee=Z[1],te=Object(n.useState)(!1),ae=Object(s.a)(te,2),se=ae[0],ne=ae[1],oe=Object(n.useState)(!1),re=Object(s.a)(oe,2),de=re[0],me=re[1],ue=Object(n.useState)(!1),je=Object(s.a)(ue,2),be=je[0],pe=je[1],he=Object(n.useState)(new Date),Oe=Object(s.a)(he,2),ge=Oe[0],fe=Oe[1],ke=function(){if(f(d.selectedTask.title),ee(d.selectedTask.description),ne(d.selectedTask.isCompleted),me(d.selectedTask.isImportant),pe(d.selectedTask.isDeleted),fe(d.selectedTask.dueDate),d.selectedTask.assignee.fullName,_.label,d.selectedTask.tags.length){var e=[];d.selectedTask.tags.map((function(t){e.push({value:t,label:ie(t)})})),H(e)}},xe=function(e){var t;S(e),m((t=e,function(e){W.a.get("".concat(V.a.app.ApiUrl,"/group/groupEmployees/").concat(t.id)).then((function(t){e({type:"TASK_GROUP_EMPLOYEES",task_group_employees:t.data.data})}))}))},ve=[];return null===d||void 0===d||null===(t=d.task_group_employees)||void 0===t||t.map((function(e){e.assigned&&ve.push(e)})),Object(x.jsx)(F.a,{isOpen:l,toggle:r,className:"sidebar-lg",contentClassName:"p-0",onOpened:function(){var e=d.selectedTask;if(!Object(Q.e)(e)&&(f(e.title),ne(e.isCompleted),me(e.isImportant),fe(e.dueDate),ee(e.description),e.tags.length)){var t=[];e.tags.map((function(e){t.push({value:e,label:ie(e)})})),H(t)}},onClosed:function(){H([]),S([]),ee(""),f(""),E(),ne(!1),me(!1),fe(new Date),m(j({}))},modalClassName:"modal-slide-in sidebar-todo-modal",children:Object(x.jsxs)(G.a,{id:"form-modal-todo",className:"todo-modal",onSubmit:function(e){return e.preventDefault()},children:[Object(x.jsx)(le,{store:d,deleted:be,dispatch:m,important:de,deleteTask:p,setDeleted:pe,setImportant:me,handleTaskSidebar:r,children:d&&!Object(Q.e)(d.selectedTask)?Object(x.jsx)(T.a.Ripple,{outline:!0,size:"sm",onClick:function(){return ne(!se)},color:!0===se?"success":"secondary",children:!0===se?"Completed":"Mark Complete"}):"Add Task"}),Object(x.jsxs)(J.a,{className:"flex-grow-1 pb-sm-0 pb-3",children:[Object(x.jsxs)(q.a,{children:[Object(x.jsx)(B.a,{className:"form-label",for:"task-title",children:"Title"}),Object(x.jsx)(k.a,{id:"task-title",value:g,placeholder:"Title",className:"new-todo-item-title",onChange:function(e){return f(e.target.value)}})]}),Object(x.jsxs)(q.a,{children:[Object(x.jsx)(B.a,{className:"form-label",for:"task-assignee",children:"Group"}),Object(x.jsx)(L.a,{id:"task-assignee",className:"react-select",classNamePrefix:"select",isClearable:!0,name:"group",options:null===d||void 0===d?void 0:d.task_groups,theme:Q.h,value:C,onChange:function(e){return xe(e)}})]}),Object(x.jsxs)(q.a,{children:[Object(x.jsx)(B.a,{className:"form-label",for:"task-tags",children:"Assign"}),Object(x.jsx)(L.a,{isMulti:!0,id:"task-tags",className:"react-select",classNamePrefix:"select",isClearable:!0,options:ve,theme:Q.h,value:_,onChange:function(e){E(e),E(null!==e?Object(D.a)(e):[])},components:{Option:function(e){var t=e.data,a=Object(A.a)(e,ce);return Object(x.jsx)(K.z.Option,Object(o.a)(Object(o.a)({},a),{},{children:Object(x.jsx)(P.a,{className:"align-items-center",children:Object(x.jsx)(P.a,{body:!0,children:Object(x.jsx)("p",{className:"mb-0",children:t.label})})})}))}}})]}),Object(x.jsxs)(q.a,{children:[Object(x.jsx)(B.a,{className:"form-label",for:"due-date",children:"Due Date"}),Object(x.jsx)(z.a,{id:"due-date",name:"due-date",className:"form-control",onChange:function(e){return fe(e[0])},value:ge,options:{dateFormat:"Y-m-d"}})]}),Object(x.jsxs)(q.a,{children:[Object(x.jsx)(B.a,{className:"form-label",for:"task-tags",children:"Status"}),Object(x.jsx)(L.a,{isMulti:!0,id:"task-tags",className:"react-select",classNamePrefix:"select",isClearable:!1,options:[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}],theme:Q.h,value:U,onChange:function(e){H(null!==e?Object(D.a)(e):[])}})]}),Object(x.jsxs)(q.a,{children:[Object(x.jsx)(B.a,{for:"task-desc",className:"form-label",children:"Description"}),Object(x.jsx)(R.a,{apiKey:"emjshh1tafcjgizkmk6eofcmmcxc2cmugajs9l2ordjyca64",value:$,onEditorChange:function(e){return ee(e)},init:{menubar:!1,toolbar:"bold italic underline aligncenter link",toolbar_location:"bottom",skin:"dark"===i?"dark":void 0,content_css:"dark"===i?"dark":void 0}})]}),Object(x.jsx)(q.a,{className:"my-1",children:function(){var e=[],t=[];U.length&&U.map((function(t){return e.push(t.value)})),(null===_||void 0===_?void 0:_.length)&&_.map((function(e){return t.push(e.value)}));var a=JSON.parse(localStorage.getItem("userData"))[0],s={group:C?C.id:"",title:g,dueDate:ge,tags:e,description:$,isCompleted:se,isDeleted:be,isImportant:de,assignee:t,employee_id:a.id};return d&&!Object(Q.e)(d.selectedTask)?Object(x.jsxs)(n.Fragment,{children:[Object(x.jsx)(T.a,{color:"primary",disabled:!g.length,className:"update-btn update-todo-item mr-1",onClick:function(){m(u(Object(o.a)(Object(o.a)({},s),{},{id:d.selectedTask.id}))),r()},children:"Update"}),Object(x.jsx)(T.a,{color:"secondary",onClick:ke,outline:!0,children:"Reset"})]}):Object(x.jsxs)(n.Fragment,{children:[Object(x.jsx)(T.a,{color:"primary",disabled:!g.length,className:"add-todo-item mr-1",onClick:function(){m(b(s)),r()},children:"Add Task"}),Object(x.jsx)(T.a,{color:"secondary",onClick:r,outline:!0,children:"Cancel"})]})}()})]})]})})},re=(a(592),a(846)),de=a.n(re),me=function(e){var t,a,c,i=e.open,l=e.handleCommentSidebar,r=e.selectedTask,d=e.store,m=e.dispatch,u=e.commentList,j=e.giveTaskComment,b=e.updateTask,p=Object(n.useState)("<p></p>"),h=Object(s.a)(p,2),O=h[0],g=h[1],f=Object(Y.a)(),k=Object(s.a)(f,2),v=k[0],N=(k[1],Object(n.useState)(null===d||void 0===d||null===(t=d.selectedTask)||void 0===t?void 0:t.isCompleted)),C=Object(s.a)(N,2),S=C[0],y=C[1];return Object(x.jsxs)(F.a,{isOpen:i,toggle:l,contentClassName:"p-0",modalClassName:"modal-slide-in sidebar-todo-modal",children:[Object(x.jsxs)("div",{className:"modal-header d-flex align-items-center justify-content-between mb-1",children:[Object(x.jsx)("h5",{className:"modal-title",children:"Comments"}),Object(x.jsxs)("div",{className:"todo-item-action d-flex align-items-center",children:[Object(x.jsx)("span",{className:"todo-item-favorite cursor-pointer mx-75",children:Object(x.jsx)(T.a.Ripple,{outline:!0,size:"sm",onClick:function(){return function(e){var t,a;y(!(null===d||void 0===d||null===(t=d.selectedTask)||void 0===t?void 0:t.isCompleted)),m(b({task_id:e.id,isCompleted:null===d||void 0===d||null===(a=d.selectedTask)||void 0===a?void 0:a.isCompleted})),l()}(r)},color:!0===(null===d||void 0===d||null===(a=d.selectedTask)||void 0===a?void 0:a.isCompleted)?"success":"secondary",children:!0===(null===d||void 0===d||null===(c=d.selectedTask)||void 0===c?void 0:c.isCompleted)?"Completed":"Mark Complete"})}),Object(x.jsx)(U.a,{className:"font-weight-normal mt-25",size:16,onClick:l})]})]}),Object(x.jsx)(G.a,{id:"form-modal-todo",className:"todo-modal",onSubmit:function(e){return e.preventDefault()},children:Object(x.jsxs)(J.a,{className:"flex-grow-1 pb-sm-0 pb-3",children:[Object(x.jsx)(q.a,{children:Object(x.jsx)(R.a,{apiKey:"mbtj8814hosg9is86nec5xx4w6po9wz8ewz5b3nxnt3s0hnm",onEditorChange:function(e){return g(e)},init:{menubar:!1,toolbar:"bold italic underline aligncenter link",toolbar_location:"bottom",skin:"dark"===v?"dark":void 0,content_css:"dark"===v?"dark":void 0}})}),Object(x.jsx)(q.a,{className:"my-1",children:function(){var e=JSON.parse(localStorage.getItem("userData"))[0],t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],i=(a[1],{description:O,isCompleted:S,isImportant:c,employee_id:e.id});if(d)return Object(x.jsx)(n.Fragment,{children:Object(x.jsx)(T.a,{color:"primary",disabled:!O.length,className:"update-btn update-todo-item mr-1",onClick:function(){m(j(Object(o.a)(Object(o.a)({},i),{},{task_id:u[0].task_id})))},children:"Post Comment"})})}()})]})}),Object(x.jsx)("div",{className:"p-1",children:function(e){if(e.length)return e&&(null===e||void 0===e?void 0:e.map((function(e,t){var a=JSON.parse(localStorage.getItem("userData"))[0],s=e.employee_id===a.id?"text-right":"text-left";return Object(x.jsxs)("div",{className:s,children:[de()(e.description),Object(x.jsx)("span",{children:e.createdAt.replace("T"," ").substring(0,e.createdAt.length-8)}),Object(x.jsx)("hr",{})]})})))}(u)})]})},ue=a(129);a(1297),t.default=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(""),r=Object(s.a)(o,2),d=r[0],m=r[1],u=Object(n.useState)(!1),j=Object(s.a)(u,2),b=j[0],p=j[1],h=Object(n.useState)(!1),O=Object(s.a)(h,2),g=O[0],f=O[1],k=Object(n.useState)(!1),N=Object(s.a)(k,2),T=N[0],C=N[1],S=Object(ue.b)(),y=Object(ue.c)((function(e){return e.todo})),w=JSON.parse(localStorage.getItem("userData"))[0],D=Object(c.i)(),A={filter:D.filter||"",q:d||"",sortBy:a||"",tag:D.tag||"",emp_id:w.id},E=function(){return p(!b)},z=function(){return f(!g)},M=function(){return C(!T)};return Object(n.useEffect)((function(){S((function(e){return W.a.get("".concat(V.a.app.ApiUrl,"/group/groupOptions")).then((function(t){e({type:"GET_TASK_GROUPS",task_groups:t.data.data})}))})),S(X({filter:D.filter||"",q:d||"",sortBy:a||"",tag:D.tag||"",emp_id:w.id}))}),[y.tasks.length,D.filter,D.tag,d,a]),Object(x.jsxs)(n.Fragment,{children:[Object(x.jsx)(_,{store:y,params:A,getTasks:X,dispatch:S,mainSidebar:b,urlFilter:D.filter,setMainSidebar:p,handleTaskSidebar:z,handleCommentSidebar:M,getComment:ae,user:w}),Object(x.jsx)("div",{className:"content-right",children:Object(x.jsx)("div",{className:"content-wrapper",children:Object(x.jsxs)("div",{className:"content-body",children:[Object(x.jsx)("div",{className:l()("body-content-overlay",{show:!0===b}),onClick:E}),y?Object(x.jsx)(v,{store:y,tasks:y.tasks,sort:a,query:d,params:A,setSort:i,setQuery:m,dispatch:S,getTasks:X,paramsURL:D,updateTask:ee,selectTask:ne,reOrderTasks:Z,handleMainSidebar:E,handleTaskSidebar:z,handleCommentSidebar:M,getComment:ae}):null,Object(x.jsx)(oe,{store:y,params:A,addTask:$,dispatch:S,open:g,updateTask:ee,selectTask:ne,deleteTask:te,handleTaskSidebar:z}),Object(x.jsx)(me,{store:y,params:A,addTask:$,dispatch:S,open:T,handleCommentSidebar:M,getComment:ae,commentList:null===y||void 0===y?void 0:y.selectedComment,giveTaskComment:se,updateTask:ee,selectedTask:null===y||void 0===y?void 0:y.selectedTask})]})})})]})}},512:function(e,t,a){}}]);
//# sourceMappingURL=12.92bfb542.chunk.js.map