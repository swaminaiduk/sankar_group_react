(this.webpackJsonpSankarGroups=this.webpackJsonpSankarGroups||[]).push([[32],{1535:function(e,a,t){},1736:function(e,a,t){"use strict";t.r(a);var s=t(27),c=t(1),r=t(85),n=t.n(r),l=t(0),i=t(490),o=t(570),d=t.p+"static/media/faq-illustrations.3abcf165.svg",b=t(1006),u=t(1007),j=t(621),m=t(495),p=t(496),O=t(596),f=t(620),g=t(6),h=function(e){var a=e.data,t=[],r=Object(c.useState)("Payment"),n=Object(s.a)(r,2),h=n[0],v=n[1];Object.entries(a).forEach((function(e){var a=Object(s.a)(e,2),c=(a[0],a[1]);t.push(c)}));return Object(g.jsx)("div",{id:"faq-tabs",children:Object(g.jsxs)(m.a,{children:[Object(g.jsx)(p.a,{lg:"3",md:"4",sm:"12",children:Object(g.jsxs)("div",{className:"faq-navigation d-flex justify-content-between flex-column mb-2 mb-md-0",children:[Object(g.jsx)(O.a,{tag:"ul",className:"nav-left",pills:!0,vertical:!0,children:t.map((function(e){var a=i[e.icon];return Object(g.jsx)(b.a,{tag:"li",children:Object(g.jsxs)(u.a,{active:h===e.title,onClick:function(){return a=e.title,v(a);var a},children:[Object(g.jsx)(a,{size:18,className:"mr-1"}),Object(g.jsx)("span",{className:"font-weight-bold",children:e.title})]})},e.title)}))}),Object(g.jsx)("img",{className:"img-fluid d-none d-md-block",src:d,alt:"illustration",style:{transform:"scaleX(1)"}})]})}),Object(g.jsx)(p.a,{lg:"9",md:"8",sm:"12",children:Object(g.jsx)(f.a,{activeTab:h,children:t.map((function(e){var a=i[e.icon];return Object(g.jsxs)(j.a,{tabId:e.title,children:[Object(g.jsxs)("div",{className:"d-flex align-items-center",children:[Object(g.jsx)("div",{className:"avatar avatar-tag bg-light-primary mr-1",children:Object(g.jsx)(a,{size:20})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h4",{className:"mb-0",children:e.title}),Object(g.jsx)("span",{children:e.subtitle})]})]}),Object(g.jsx)(o.a,Object(l.a)({className:"mt-2",type:"margin",data:e.qandA,titleKey:"question",contentKey:"ans",accordion:!0},"Payment"===e.title?{active:1}:{}))]},e.title)}))})})]})})},v=t(1008),x=t(497),N=t(498),y=t(503),T=t(513),M=t(990),P=t(991),w=t(840),C=t(992),E=function(e){var a=e.searchTerm,s=e.setSearchTerm,c=e.getFAQData;return Object(g.jsx)("div",{id:"faq-search-filter",children:Object(g.jsx)(x.a,{className:"faq-search",style:{backgroundImage:"url(".concat(t(784).default,")")},children:Object(g.jsxs)(N.a,{className:"text-center",children:[Object(g.jsx)("h2",{className:"text-primary",children:"Let's answer some questions"}),Object(g.jsx)(y.a,{className:"mb-2",children:"or choose a category to quickly find the help you need"}),Object(g.jsx)(T.a,{className:"faq-search-input",onSubmit:function(e){return e.preventDefault()},children:Object(g.jsxs)(M.a,{className:"input-group-merge",children:[Object(g.jsx)(P.a,{addonType:"prepend",children:Object(g.jsx)(w.a,{children:Object(g.jsx)(v.a,{size:14})})}),Object(g.jsx)(C.a,{value:a,onChange:function(e){return function(e){s(e.target.value),c(e.target.value)}(e)},placeholder:"search faq..."})]})})]})})})},z=t(1092),q=t(999),k=function(){return Object(g.jsx)("div",{id:"faq-contact",children:Object(g.jsxs)(m.a,{className:"mt-5 pt-75",children:[Object(g.jsxs)(p.a,{className:"text-center",sm:"12",children:[Object(g.jsx)("h2",{children:"You still have a question?"}),Object(g.jsx)("p",{className:"mb-3",children:"If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!"})]}),Object(g.jsx)(p.a,{sm:"6",children:Object(g.jsx)(x.a,{className:"text-center bg-light-secondary shadow-none py-1",children:Object(g.jsxs)(N.a,{children:[Object(g.jsx)("div",{className:"avatar avatar-tag bg-light-primary mb-2 mx-auto",children:Object(g.jsx)(z.a,{size:18})}),Object(g.jsx)("h4",{children:"+ (810) 2548 2568"}),Object(g.jsx)("span",{className:"text-body",children:"We are always happy to help!"})]})})}),Object(g.jsx)(p.a,{sm:"6",children:Object(g.jsx)(x.a,{className:"text-center bg-light-secondary shadow-none py-1",children:Object(g.jsxs)(N.a,{children:[Object(g.jsx)("div",{className:"avatar avatar-tag bg-light-primary mb-2 mx-auto",children:Object(g.jsx)(q.a,{size:18})}),Object(g.jsx)("h4",{children:"hello@help.com"}),Object(g.jsx)("span",{className:"text-body",children:"Best way to get answer faster!"})]})})})]})})},R=t(491);t(1535),a.default=function(){var e=Object(c.useState)(null),a=Object(s.a)(e,2),t=a[0],r=a[1],l=Object(c.useState)(""),i=Object(s.a)(l,2),o=i[0],d=i[1],b=function(e){return n.a.get("/faq/data",{params:{q:e}}).then((function(e){r(e.data)}))};return Object(c.useEffect)((function(){b(o)}),[]),Object(g.jsxs)(c.Fragment,{children:[Object(g.jsx)(R.a,{breadCrumbTitle:"FAQ",breadCrumbParent:"Pages",breadCrumbActive:"FAQ"}),Object(g.jsx)(E,{searchTerm:o,setSearchTerm:d,getFAQData:b}),null!==t?Object(g.jsx)(h,{data:t,searchTerm:o,setSearchTerm:d}):null,Object(g.jsx)(k,{})]})}},491:function(e,a,t){"use strict";var s=t(492),c=t(1066),r=t(1e3),n=t(1001),l=t(999),i=t(1026),o=t(500),d=t(501),b=t(504),u=t(1241),j=t(988),m=t(989),p=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,O=e.breadCrumbParent2,f=e.breadCrumbParent3,g=e.breadCrumbActive;return Object(p.jsxs)("div",{className:"content-header row",children:[Object(p.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(p.jsx)("div",{className:"row breadcrumbs-top",children:Object(p.jsxs)("div",{className:"col-12",children:[a?Object(p.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(p.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(p.jsxs)(o.a,{children:[Object(p.jsx)(d.a,{tag:"li",children:Object(p.jsx)(s.b,{to:"/",children:"Home"})}),Object(p.jsx)(d.a,{tag:"li",className:"text-primary",children:t}),O?Object(p.jsx)(d.a,{tag:"li",className:"text-primary",children:O}):"",f?Object(p.jsx)(d.a,{tag:"li",className:"text-primary",children:f}):"",Object(p.jsx)(d.a,{tag:"li",active:!0,children:g})]})})]})})}),Object(p.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(p.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(u.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(p.jsx)(c.a,{size:14})}),Object(p.jsxs)(j.a,{tag:"ul",right:!0,children:[Object(p.jsxs)(m.a,{tag:s.b,to:"/apps/chat",children:[Object(p.jsx)(r.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(p.jsxs)(m.a,{tag:s.b,to:"/apps/chat",children:[Object(p.jsx)(n.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(p.jsxs)(m.a,{tag:s.b,to:"/apps/email",children:[Object(p.jsx)(l.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(p.jsxs)(m.a,{tag:s.b,to:"/apps/calendar",children:[Object(p.jsx)(i.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},493:function(e,a,t){"use strict";var s=t(14),c=t(1),r=t.n(c),n=t(2),l=t.n(n),i=t(499),o={children:l.a.node},d=function(e){return r.a.createElement(i.a,Object(s.a)({group:!0},e))};d.propTypes=o,a.a=d},495:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(26),d=t.n(o),b=t(84),u=i.a.oneOfType([i.a.number,i.a.string]),j={tag:b.tagPropType,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},m={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,l=e.tag,i=e.form,o=e.widths,u=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),j=[];o.forEach((function(a,t){var s=e[a];if(delete u[a],s){var c=!t;j.push(c?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var m=Object(b.mapToCssModules)(d()(a,r?"no-gutters":null,i?"form-row":"row",j),t);return n.a.createElement(l,Object(s.a)({},u,{className:m}))};p.propTypes=j,p.defaultProps=m,a.a=p},496:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(26),d=t.n(o),b=t(84),u=i.a.oneOfType([i.a.number,i.a.string]),j=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:u,offset:u})]),m={tag:b.tagPropType,xs:j,sm:j,md:j,lg:j,xl:j,className:i.a.string,cssModule:i.a.object,widths:i.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},O=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},f=function(e){var a=e.className,t=e.cssModule,r=e.widths,l=e.tag,i=Object(c.a)(e,["className","cssModule","widths","tag"]),o=[];r.forEach((function(a,s){var c=e[a];if(delete i[a],c||""===c){var r=!s;if(Object(b.isObject)(c)){var n,l=r?"-":"-"+a+"-",u=O(r,a,c.size);o.push(Object(b.mapToCssModules)(d()(((n={})[u]=c.size||""===c.size,n["order"+l+c.order]=c.order||0===c.order,n["offset"+l+c.offset]=c.offset||0===c.offset,n)),t))}else{var j=O(r,a,c);o.push(j)}}})),o.length||o.push("col");var u=Object(b.mapToCssModules)(d()(a,o),t);return n.a.createElement(l,Object(s.a)({},i,{className:u}))};f.propTypes=m,f.defaultProps=p,a.a=f},497:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(26),d=t.n(o),b=t(84),u={tag:b.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},j=function(e){var a=e.className,t=e.cssModule,r=e.color,l=e.body,i=e.inverse,o=e.outline,u=e.tag,j=e.innerRef,m=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(b.mapToCssModules)(d()(a,"card",!!i&&"text-white",!!l&&"card-body",!!r&&(o?"border":"bg")+"-"+r),t);return n.a.createElement(u,Object(s.a)({},m,{className:p,ref:j}))};j.propTypes=u,j.defaultProps={tag:"div"},a.a=j},498:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(26),d=t.n(o),b=t(84),u={tag:b.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},j=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,l=e.tag,i=Object(c.a)(e,["className","cssModule","innerRef","tag"]),o=Object(b.mapToCssModules)(d()(a,"card-body"),t);return n.a.createElement(l,Object(s.a)({},i,{className:o,ref:r}))};j.propTypes=u,j.defaultProps={tag:"div"},a.a=j},500:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(26),d=t.n(o),b=t(84),u={tag:b.tagPropType,listTag:b.tagPropType,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},j=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,l=e.children,i=e.tag,o=e.listTag,u=e["aria-label"],j=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),m=Object(b.mapToCssModules)(d()(a),r),p=Object(b.mapToCssModules)(d()("breadcrumb",t),r);return n.a.createElement(i,Object(s.a)({},j,{className:m,"aria-label":u}),n.a.createElement(o,{className:p},l))};j.propTypes=u,j.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=j},501:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(26),d=t.n(o),b=t(84),u={tag:b.tagPropType,active:i.a.bool,className:i.a.string,cssModule:i.a.object},j=function(e){var a=e.className,t=e.cssModule,r=e.active,l=e.tag,i=Object(c.a)(e,["className","cssModule","active","tag"]),o=Object(b.mapToCssModules)(d()(a,!!r&&"active","breadcrumb-item"),t);return n.a.createElement(l,Object(s.a)({},i,{className:o,"aria-current":r?"page":void 0}))};j.propTypes=u,j.defaultProps={tag:"li"},a.a=j},502:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(26),d=t.n(o),b=t(84),u={tag:b.tagPropType,className:i.a.string,cssModule:i.a.object},j=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(b.mapToCssModules)(d()(a,"card-title"),t);return n.a.createElement(r,Object(s.a)({},l,{className:i}))};j.propTypes=u,j.defaultProps={tag:"div"},a.a=j},503:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(26),d=t.n(o),b=t(84),u={tag:b.tagPropType,className:i.a.string,cssModule:i.a.object},j=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(b.mapToCssModules)(d()(a,"card-text"),t);return n.a.createElement(r,Object(s.a)({},l,{className:i}))};j.propTypes=u,j.defaultProps={tag:"p"},a.a=j},504:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var s=t(494),c=t(14),r=t(127),n=t(59),l=t(1),i=t.n(l),o=t(2),d=t.n(o),b=t(493),u=t(84);function j(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}var m=["defaultOpen"],p=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpen:a.defaultOpen||!1},t.toggle=t.toggle.bind(Object(r.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){return i.a.createElement(b.a,Object(c.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(u.omit)(this.props,m)))},a}(l.Component);p.propTypes=function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?j(Object(t),!0).forEach((function(a){Object(s.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({defaultOpen:d.a.bool},b.a.propTypes)},506:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(26),d=t.n(o),b=t(84),u={tag:b.tagPropType,className:i.a.string,cssModule:i.a.object},j=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(b.mapToCssModules)(d()(a,"card-header"),t);return n.a.createElement(r,Object(s.a)({},l,{className:i}))};j.propTypes=u,j.defaultProps={tag:"div"},a.a=j},513:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(127),n=t(59),l=t(1),i=t.n(l),o=t(2),d=t.n(o),b=t(26),u=t.n(b),j=t(84),m={children:d.a.node,inline:d.a.bool,tag:j.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,n=e.tag,l=e.innerRef,o=Object(c.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(j.mapToCssModules)(u()(a,!!r&&"form-inline"),t);return i.a.createElement(n,Object(s.a)({},o,{ref:l,className:d}))},a}(l.Component);p.propTypes=m,p.defaultProps={tag:"form"},a.a=p},524:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var s=t(1),c=t.n(s).a.createContext({})},570:function(e,a,t){"use strict";var s=t(0),c=t(60),r=t(27),n=t(130),l=t(1),i=t(26),o=t.n(i),d=t(1033),b=t(497),u=t(506),j=t(502),m=t(796),p=t(498),O=t(6),f=function(e){var a,t=e.data,i=e.type,f=e.accordion,g=e.active,h=e.toggle,v=e.titleKey,x=e.contentKey,N=e.className,y=Object(l.useState)(f?g:Object(n.a)(g)),T=Object(r.a)(y,2),M=T[0],P=T[1],w=function(e){if(f)P(e===M?null:e);else{var a=M,t=a.indexOf(e);a.includes(e)?(a.splice(t,1),P(Object(n.a)(a))):(a.push(e),P(Object(n.a)(a)))}};return Object(O.jsx)("div",{className:o()("collapse-icon",(a={},Object(c.a)(a,N,N),Object(c.a)(a,"collapse-default",!i),Object(c.a)(a,"collapse-shadow","shadow"===i),Object(c.a)(a,"collapse-border","border"===i),Object(c.a)(a,"collapse-margin","margin"===i),a)),children:t.map((function(e,a){var t,r=v?e[v]:e.title,n=x?e[x]:e.content;return Object(O.jsxs)(b.a,{className:o()("app-collapse",(t={},Object(c.a)(t,e.className,e.className),Object(c.a)(t,"open",f?M===a:M.includes(a)&&"shadow"===i),t)),children:[Object(O.jsxs)(u.a,Object(s.a)(Object(s.a)({className:o()("align-items-center",{collapsed:f?M!==a:!M.includes(a)})},"hover"===h?{onMouseEnter:function(){return w(a)}}:{onClick:function(){return w(a)}}),{},{children:[Object(O.jsx)(j.a,{className:"collapse-title",children:r}),Object(O.jsx)(d.a,{size:14})]})),Object(O.jsx)(m.a,{isOpen:f?M===a:M.includes(a),children:Object(O.jsx)(p.a,{children:n})})]},a)}))})};a.a=f,f.defaultProps={active:[],toggle:"click"}},596:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(26),d=t.n(o),b=t(84),u={tabs:i.a.bool,pills:i.a.bool,vertical:i.a.oneOfType([i.a.bool,i.a.string]),horizontal:i.a.string,justified:i.a.bool,fill:i.a.bool,navbar:i.a.bool,card:i.a.bool,tag:b.tagPropType,className:i.a.string,cssModule:i.a.object},j=function(e){var a=e.className,t=e.cssModule,r=e.tabs,l=e.pills,i=e.vertical,o=e.horizontal,u=e.justified,j=e.fill,m=e.navbar,p=e.card,O=e.tag,f=Object(c.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),g=Object(b.mapToCssModules)(d()(a,m?"navbar-nav":"nav",!!o&&"justify-content-"+o,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(i),{"nav-tabs":r,"card-header-tabs":p&&r,"nav-pills":l,"card-header-pills":p&&l,"nav-justified":u,"nav-fill":j}),t);return n.a.createElement(O,Object(s.a)({},f,{className:g}))};j.propTypes=u,j.defaultProps={tag:"ul",vertical:!1},a.a=j},620:function(e,a,t){"use strict";var s=t(14),c=t(59),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(26),d=t.n(o),b=t(524),u=t(84),j={tag:u.tagPropType,activeTab:i.a.any,className:i.a.string,cssModule:i.a.object},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(c.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.tag,r=Object(u.omit)(this.props,Object.keys(j)),l=Object(u.mapToCssModules)(d()("tab-content",a),t);return n.a.createElement(b.a.Provider,{value:{activeTabId:this.state.activeTab}},n.a.createElement(c,Object(s.a)({},r,{className:l})))},a}(r.Component);a.a=m,m.propTypes=j,m.defaultProps={tag:"div"}},621:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var s=t(14),c=t(15),r=t(1),n=t.n(r),l=t(2),i=t.n(l),o=t(26),d=t.n(o),b=t(524),u=t(84),j={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,tabId:i.a.any};function m(e){var a=e.className,t=e.cssModule,r=e.tabId,l=e.tag,i=Object(c.a)(e,["className","cssModule","tabId","tag"]),o=function(e){return Object(u.mapToCssModules)(d()("tab-pane",a,{active:r===e}),t)};return n.a.createElement(b.a.Consumer,null,(function(e){var a=e.activeTabId;return n.a.createElement(l,Object(s.a)({},i,{className:o(a)}))}))}m.propTypes=j,m.defaultProps={tag:"div"}},784:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/banner.06ea9907.png"}}]);
//# sourceMappingURL=32.38995a8d.chunk.js.map