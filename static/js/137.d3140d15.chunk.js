(this.webpackJsonpSankarGroups=this.webpackJsonpSankarGroups||[]).push([[137],{1761:function(e,c,a){"use strict";a.r(c);var s=a(1),t=a(491),r=a(0),n=a(27),l=a(26),i=a.n(l),d=a(931),j=a(1030),o=a(979),b=a(1098),h=a(796),O=a(640),m=a(497),x=a(506),p=a(502),u=(a(1626),a(6)),g=function(e){var c=e.title,a=e.actions,t=e.children,l=e.collapseIcon,g=e.reloadIcon,N=e.removeIcon,f=e.endReload,v=Object(s.useState)(!1),C=Object(n.a)(v,2),y=C[0],z=C[1],k=Object(s.useState)(!0),w=Object(n.a)(k,2),R=w[0],A=w[1],T=Object(s.useState)(!0),S=Object(n.a)(T,2),I=S[0],P=S[1],F={collapse:l||j.a,remove:N||o.a,reload:g||b.a},E=function(e){switch(e){case"collapse":return A(!R);case"remove":return P(!1);case"reload":return z(!0)}},G=function(){z(!1)};Object(s.useEffect)((function(){y&&f(G)}));var J="collapse"===a||a.includes("collapse")?h.a:s.Fragment,Y="reload"===a||a.includes("reload")?d.a:s.Fragment;return Object(u.jsx)(Y,Object(r.a)(Object(r.a)({},"reload"===a||a.includes("reload")?{blocking:y,className:"reload-wrapper",loader:Object(u.jsx)(O.a,{color:"primary",className:"reload-spinner"})}:{}),{},{children:Object(u.jsxs)(m.a,{className:i()("card-action",{"d-none":!I}),children:[Object(u.jsxs)(x.a,{children:[Object(u.jsx)(p.a,{tag:"h4",children:c}),Object(u.jsx)("div",{className:"action-icons",children:function(){if(Array.isArray(a))return a.map((function(e,c){var s=F[e];return Object(u.jsx)(s,{className:i()("cursor-pointer",{"mr-50":c<a.length-1}),size:15,onClick:function(){return E(e)}},c)}));var e=F[a];return Object(u.jsx)(e,{className:"cursor-pointer",size:15,onClick:function(){return E(a)}})}()})]}),Object(u.jsx)(J,Object(r.a)(Object(r.a)({},"collapse"===a||a.includes("collapse")?{isOpen:R}:{}),{},{children:t}))]})}))},N=a(495),f=a(496),v=a(498),C=a(576),y=a(503);c.default=function(){return Object(u.jsxs)(s.Fragment,{children:[Object(u.jsx)(t.a,{breadCrumbTitle:"Card Actions",breadCrumbParent:"Card",breadCrumbActive:"Card Actions"}),Object(u.jsx)(N.a,{children:Object(u.jsx)(f.a,{sm:"12",children:Object(u.jsx)(g,{title:"Card Actions",actions:["collapse","reload","remove"],endReload:function(e){setTimeout((function(){return e()}),2e3)},children:Object(u.jsx)(v.a,{className:"pt-0",children:Object(u.jsxs)(C.a,{responsive:!0,bordered:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Action"}),Object(u.jsx)("th",{children:"Icon"}),Object(u.jsx)("th",{children:"Details"})]})}),Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Collapse"}),Object(u.jsx)("td",{className:"text-center",children:Object(u.jsx)(j.a,{className:"collapse-icon",size:15})}),Object(u.jsx)("td",{children:" Collapse card content using collapse action."})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Refresh Content"}),Object(u.jsx)("td",{className:"text-center",children:Object(u.jsx)(b.a,{size:15})}),Object(u.jsx)("td",{children:"Refresh your card content using refresh action."})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Remove Card"}),Object(u.jsx)("td",{className:"text-center",children:Object(u.jsx)(o.a,{size:15})}),Object(u.jsx)("td",{children:" Remove card from page using remove card action"})]})]})]})})})})}),Object(u.jsxs)(N.a,{children:[Object(u.jsx)(f.a,{md:"6",sm:"12",children:Object(u.jsx)(g,{title:"Collapse",actions:"collapse",children:Object(u.jsxs)(v.a,{className:"pt-0",children:[Object(u.jsxs)(y.a,{children:["You can create a collapsible content by using our",Object(u.jsx)("code",{children:"CardAction"})," component and by passing prop",Object(u.jsx)("code",{children:"actions='collapse'"}),"."]}),Object(u.jsxs)(y.a,{className:"mb-0",children:["Click on ",Object(u.jsx)(j.a,{size:15})," to see card collapse in action"]})]})})}),Object(u.jsx)(f.a,{md:"6",sm:"12",children:Object(u.jsx)(g,{title:"Reload",actions:"reload",endReload:function(e){setTimeout((function(){return e()}),2e3)},children:Object(u.jsxs)(v.a,{className:"pt-0",children:[Object(u.jsxs)(y.a,{children:["To create a re-loadable card pass prop",Object(u.jsx)("code",{children:"actions='reload'"})," and pass prop ",Object(u.jsx)("code",{children:"endReload"}),"to end the loading."]}),Object(u.jsxs)(y.a,{className:"mb-0",children:["Click on ",Object(u.jsx)(b.a,{size:15})," to see card refresh in action"]})]})})}),Object(u.jsx)(f.a,{md:"6",sm:"12",children:Object(u.jsx)(g,{title:"Remove",actions:"remove",children:Object(u.jsxs)(v.a,{className:"pt-0",children:[Object(u.jsxs)(y.a,{children:["You can add refresh content action to card by adding class",Object(u.jsx)("code",{children:".card-reload"})," with your card tag, and add conditional spinner into card body to show when card is refreshing."]}),Object(u.jsxs)(y.a,{className:"mb-0",children:["Click on ",Object(u.jsx)(b.a,{size:15})," to see card refresh in action"]})]})})})]})]})}},491:function(e,c,a){"use strict";var s=a(492),t=a(1066),r=a(1e3),n=a(1001),l=a(999),i=a(1026),d=a(500),j=a(501),o=a(504),b=a(1241),h=a(988),O=a(989),m=a(6);c.a=function(e){var c=e.breadCrumbTitle,a=e.breadCrumbParent,x=e.breadCrumbParent2,p=e.breadCrumbParent3,u=e.breadCrumbActive;return Object(m.jsxs)("div",{className:"content-header row",children:[Object(m.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(m.jsx)("div",{className:"row breadcrumbs-top",children:Object(m.jsxs)("div",{className:"col-12",children:[c?Object(m.jsx)("h2",{className:"content-header-title float-left mb-0",children:c}):"",Object(m.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)(j.a,{tag:"li",children:Object(m.jsx)(s.b,{to:"/",children:"Home"})}),Object(m.jsx)(j.a,{tag:"li",className:"text-primary",children:a}),x?Object(m.jsx)(j.a,{tag:"li",className:"text-primary",children:x}):"",p?Object(m.jsx)(j.a,{tag:"li",className:"text-primary",children:p}):"",Object(m.jsx)(j.a,{tag:"li",active:!0,children:u})]})})]})})}),Object(m.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(m.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(b.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(m.jsx)(t.a,{size:14})}),Object(m.jsxs)(h.a,{tag:"ul",right:!0,children:[Object(m.jsxs)(O.a,{tag:s.b,to:"/apps/chat",children:[Object(m.jsx)(r.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(m.jsxs)(O.a,{tag:s.b,to:"/apps/chat",children:[Object(m.jsx)(n.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(m.jsxs)(O.a,{tag:s.b,to:"/apps/email",children:[Object(m.jsx)(l.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(m.jsxs)(O.a,{tag:s.b,to:"/apps/calendar",children:[Object(m.jsx)(i.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}}}]);
//# sourceMappingURL=137.d3140d15.chunk.js.map