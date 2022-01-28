(this.webpackJsonpSankarGroups=this.webpackJsonpSankarGroups||[]).push([[83],{1533:function(e,a,t){},1726:function(e,a,t){"use strict";t.r(a);var s=t(27),c=t(1),l=t(85),n=t.n(l),r=t(495),o=t(496),i=t(570),u=t(6),d=function(e){var a=e.data;return Object(u.jsxs)("div",{className:"pricing-faq",children:[Object(u.jsx)("h3",{className:"text-center",children:"FAQ's"}),Object(u.jsx)("p",{className:"text-center",children:"Let us help answer the most common questions."}),Object(u.jsx)(r.a,{className:"my-2",children:Object(u.jsx)(o.a,{className:"mx-auto",sm:"12",lg:{size:10,offset:2},children:Object(u.jsx)(i.a,{type:"margin",data:a,titleKey:"question",contentKey:"ans",accordion:!0})})})]})},j=t(60),b=t(26),m=t.n(b),p=t(497),f=t(498),g=t(994),O=t(503),h=t(562),x=t(563),y=t(487),v=function(e){var a=e.data,t=e.duration;return Object(u.jsx)(r.a,{className:"pricing-card",children:Object(u.jsx)(o.a,{className:"mx-auto",sm:{offset:2,size:10},lg:{offset:2,size:10},md:"12",children:Object(u.jsx)(r.a,{children:a.map((function(e,a){var s,c="yearly"===t?e.yearlyPlan.perMonth:e.monthlyPrice,l="yearly"===t?e.yearlyPlan.totalAnnual:e.monthlyPrice,n="Basic"===e.title?"mb-2 mt-5":"Standard"===e.title?"mb-1":"mb-2";return Object(u.jsx)(o.a,{md:"4",xs:"12",children:Object(u.jsx)(p.a,{className:m()("text-center",(s={},Object(j.a)(s,"".concat(e.title.toLowerCase(),"-pricing"),e.title),Object(j.a)(s,"popular",!0===e.popular),s)),children:Object(u.jsxs)(f.a,{children:[!0===e.popular?Object(u.jsx)("div",{className:"pricing-badge text-right",children:Object(u.jsx)(g.a,{color:"light-primary",pill:!0,children:"Popular"})}):null,Object(u.jsx)("img",{className:n,src:e.img,alt:"pricing svg"}),Object(u.jsx)("h3",{children:e.title}),Object(u.jsx)(O.a,{children:e.subtitle}),Object(u.jsxs)("div",{className:"annual-plan",children:[Object(u.jsxs)("div",{className:"plan-price mt-2",children:[Object(u.jsx)("sup",{className:"font-medium-1 font-weight-bold text-primary mr-25",children:"$"}),Object(u.jsx)("span",{className:"pricing-".concat(e.title.toLowerCase(),"-value font-weight-bolder text-primary"),children:c}),Object(u.jsx)("span",{className:"pricing-duration text-body font-medium-1 font-weight-bold ml-25",children:"/month"})]}),"Basic"!==e.title&&"yearly"===t?Object(u.jsxs)("small",{className:"annual-pricing text-muted",children:["USD ",l," / year"]}):null]}),Object(u.jsx)(h.a,{tag:"ul",className:"list-group-circle text-left mb-2",children:e.planBenefits.map((function(e,a){return Object(u.jsx)(x.a,{tag:"li",children:e},a)}))}),Object(u.jsx)(y.a.Ripple,{color:"Basic"===e.title?"success":"primary",outline:"Standard"!==e.title,block:!0,children:"Basic"===e.title?"Your current plan":"Upgrade"})]})})},a)}))})})})},N=t.p+"static/media/pricing-Illustration.b00baee8.svg",M=function(){return Object(u.jsx)("div",{className:"pricing-free-trial",children:Object(u.jsx)(r.a,{children:Object(u.jsx)(o.a,{className:"mx-auto",lg:{size:10,offset:3},sm:"12",children:Object(u.jsxs)("div",{className:"pricing-trial-content d-flex justify-content-between",children:[Object(u.jsxs)("div",{className:"text-center text-md-left mt-3",children:[Object(u.jsx)("h3",{className:"text-primary",children:"Still not convinced? Start with a 14-day FREE trial!"}),Object(u.jsx)("h5",{children:"You will get full access to with all the features for 14 days."}),Object(u.jsx)("div",{className:"mt-2 mt-lg-3",children:Object(u.jsx)(y.a.Ripple,{color:"primary",children:"Start 14-day FREE trial"})})]}),Object(u.jsx)("img",{className:"pricing-trial-img img-fluid",src:N,alt:"trial svg",style:{transform:"scaleX(1)"}})]})})})})},T=(t(607),t(974)),w=function(e){var a=e.duration,t=e.setDuration;return Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("h1",{className:"mt-5",children:"Pricing Plans"}),Object(u.jsx)("p",{className:"mb-2 pb-75",children:"All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs."}),Object(u.jsxs)("div",{className:"d-flex align-items-center justify-content-center mb-5 pb-50",children:[Object(u.jsx)("h6",{className:"mr-1 mb-0",children:"Monthly"}),Object(u.jsx)(T.a,{id:"plan-switch",type:"switch",checked:"yearly"===a,onChange:function(e){e.target.checked?t("yearly"):t("monthly")}}),Object(u.jsx)("h6",{className:"ml-50 mb-0",children:"Annually"})]})]})};t(1533),a.default=function(){var e=Object(c.useState)(null),a=Object(s.a)(e,2),t=a[0],l=a[1],r=Object(c.useState)(null),o=Object(s.a)(r,2),i=o[0],j=o[1],b=Object(c.useState)("monthly"),m=Object(s.a)(b,2),p=m[0],f=m[1];return Object(c.useEffect)((function(){n.a.get("/pricing/data").then((function(e){var a=[],t=[];Object.entries(e.data).forEach((function(e){var c=Object(s.a)(e,2),n=c[0],r=c[1];"qandA"!==n?(a.push(r),l([].concat(a))):(t.push(r),j(t[0]))}))}))}),[]),Object(u.jsxs)("div",{id:"pricing-table",children:[Object(u.jsx)(w,{duration:p,setDuration:f}),null!==t&&null!==i?Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(v,{data:t,duration:p}),Object(u.jsx)(M,{}),Object(u.jsx)(d,{data:i})]}):null]})}},495:function(e,a,t){"use strict";var s=t(14),c=t(15),l=t(1),n=t.n(l),r=t(2),o=t.n(r),i=t(26),u=t.n(i),d=t(84),j=o.a.oneOfType([o.a.number,o.a.string]),b={tag:d.tagPropType,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:j,sm:j,md:j,lg:j,xl:j},m={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,l=e.noGutters,r=e.tag,o=e.form,i=e.widths,j=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];i.forEach((function(a,t){var s=e[a];if(delete j[a],s){var c=!t;b.push(c?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var m=Object(d.mapToCssModules)(u()(a,l?"no-gutters":null,o?"form-row":"row",b),t);return n.a.createElement(r,Object(s.a)({},j,{className:m}))};p.propTypes=b,p.defaultProps=m,a.a=p},496:function(e,a,t){"use strict";var s=t(14),c=t(15),l=t(1),n=t.n(l),r=t(2),o=t.n(r),i=t(26),u=t.n(i),d=t(84),j=o.a.oneOfType([o.a.number,o.a.string]),b=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:j,offset:j})]),m={tag:d.tagPropType,xs:b,sm:b,md:b,lg:b,xl:b,className:o.a.string,cssModule:o.a.object,widths:o.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,l=e.widths,r=e.tag,o=Object(c.a)(e,["className","cssModule","widths","tag"]),i=[];l.forEach((function(a,s){var c=e[a];if(delete o[a],c||""===c){var l=!s;if(Object(d.isObject)(c)){var n,r=l?"-":"-"+a+"-",j=f(l,a,c.size);i.push(Object(d.mapToCssModules)(u()(((n={})[j]=c.size||""===c.size,n["order"+r+c.order]=c.order||0===c.order,n["offset"+r+c.offset]=c.offset||0===c.offset,n)),t))}else{var b=f(l,a,c);i.push(b)}}})),i.length||i.push("col");var j=Object(d.mapToCssModules)(u()(a,i),t);return n.a.createElement(r,Object(s.a)({},o,{className:j}))};g.propTypes=m,g.defaultProps=p,a.a=g},497:function(e,a,t){"use strict";var s=t(14),c=t(15),l=t(1),n=t.n(l),r=t(2),o=t.n(r),i=t(26),u=t.n(i),d=t(84),j={tag:d.tagPropType,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,l=e.color,r=e.body,o=e.inverse,i=e.outline,j=e.tag,b=e.innerRef,m=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(d.mapToCssModules)(u()(a,"card",!!o&&"text-white",!!r&&"card-body",!!l&&(i?"border":"bg")+"-"+l),t);return n.a.createElement(j,Object(s.a)({},m,{className:p,ref:b}))};b.propTypes=j,b.defaultProps={tag:"div"},a.a=b},498:function(e,a,t){"use strict";var s=t(14),c=t(15),l=t(1),n=t.n(l),r=t(2),o=t.n(r),i=t(26),u=t.n(i),d=t(84),j={tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,l=e.innerRef,r=e.tag,o=Object(c.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.mapToCssModules)(u()(a,"card-body"),t);return n.a.createElement(r,Object(s.a)({},o,{className:i,ref:l}))};b.propTypes=j,b.defaultProps={tag:"div"},a.a=b},502:function(e,a,t){"use strict";var s=t(14),c=t(15),l=t(1),n=t.n(l),r=t(2),o=t.n(r),i=t(26),u=t.n(i),d=t(84),j={tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),o=Object(d.mapToCssModules)(u()(a,"card-title"),t);return n.a.createElement(l,Object(s.a)({},r,{className:o}))};b.propTypes=j,b.defaultProps={tag:"div"},a.a=b},503:function(e,a,t){"use strict";var s=t(14),c=t(15),l=t(1),n=t.n(l),r=t(2),o=t.n(r),i=t(26),u=t.n(i),d=t(84),j={tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),o=Object(d.mapToCssModules)(u()(a,"card-text"),t);return n.a.createElement(l,Object(s.a)({},r,{className:o}))};b.propTypes=j,b.defaultProps={tag:"p"},a.a=b},506:function(e,a,t){"use strict";var s=t(14),c=t(15),l=t(1),n=t.n(l),r=t(2),o=t.n(r),i=t(26),u=t.n(i),d=t(84),j={tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),o=Object(d.mapToCssModules)(u()(a,"card-header"),t);return n.a.createElement(l,Object(s.a)({},r,{className:o}))};b.propTypes=j,b.defaultProps={tag:"div"},a.a=b},562:function(e,a,t){"use strict";var s=t(14),c=t(15),l=t(1),n=t.n(l),r=t(2),o=t.n(r),i=t(26),u=t.n(i),d=t(84),j={tag:d.tagPropType,flush:o.a.bool,className:o.a.string,cssModule:o.a.object,horizontal:o.a.oneOfType([o.a.bool,o.a.string])},b=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=e.flush,o=e.horizontal,i=Object(c.a)(e,["className","cssModule","tag","flush","horizontal"]),j=Object(d.mapToCssModules)(u()(a,"list-group",r?"list-group-flush":function(e){return!1!==e&&(!0===e||"xs"===e?"list-group-horizontal":"list-group-horizontal-"+e)}(o)),t);return n.a.createElement(l,Object(s.a)({},i,{className:j}))};b.propTypes=j,b.defaultProps={tag:"ul",horizontal:!1},a.a=b},563:function(e,a,t){"use strict";var s=t(14),c=t(15),l=t(1),n=t.n(l),r=t(2),o=t.n(r),i=t(26),u=t.n(i),d=t(84),j={tag:d.tagPropType,active:o.a.bool,disabled:o.a.bool,color:o.a.string,action:o.a.bool,className:o.a.any,cssModule:o.a.object},b=function(e){e.preventDefault()},m=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=e.active,o=e.disabled,i=e.action,j=e.color,m=Object(c.a)(e,["className","cssModule","tag","active","disabled","action","color"]),p=Object(d.mapToCssModules)(u()(a,!!r&&"active",!!o&&"disabled",!!i&&"list-group-item-action",!!j&&"list-group-item-"+j,"list-group-item"),t);return o&&(m.onClick=b),n.a.createElement(l,Object(s.a)({},m,{className:p}))};m.propTypes=j,m.defaultProps={tag:"li"},a.a=m},570:function(e,a,t){"use strict";var s=t(0),c=t(60),l=t(27),n=t(130),r=t(1),o=t(26),i=t.n(o),u=t(1029),d=t(497),j=t(506),b=t(502),m=t(793),p=t(498),f=t(6),g=function(e){var a,t=e.data,o=e.type,g=e.accordion,O=e.active,h=e.toggle,x=e.titleKey,y=e.contentKey,v=e.className,N=Object(r.useState)(g?O:Object(n.a)(O)),M=Object(l.a)(N,2),T=M[0],w=M[1],P=function(e){if(g)w(e===T?null:e);else{var a=T,t=a.indexOf(e);a.includes(e)?(a.splice(t,1),w(Object(n.a)(a))):(a.push(e),w(Object(n.a)(a)))}};return Object(f.jsx)("div",{className:i()("collapse-icon",(a={},Object(c.a)(a,v,v),Object(c.a)(a,"collapse-default",!o),Object(c.a)(a,"collapse-shadow","shadow"===o),Object(c.a)(a,"collapse-border","border"===o),Object(c.a)(a,"collapse-margin","margin"===o),a)),children:t.map((function(e,a){var t,l=x?e[x]:e.title,n=y?e[y]:e.content;return Object(f.jsxs)(d.a,{className:i()("app-collapse",(t={},Object(c.a)(t,e.className,e.className),Object(c.a)(t,"open",g?T===a:T.includes(a)&&"shadow"===o),t)),children:[Object(f.jsxs)(j.a,Object(s.a)(Object(s.a)({className:i()("align-items-center",{collapsed:g?T!==a:!T.includes(a)})},"hover"===h?{onMouseEnter:function(){return P(a)}}:{onClick:function(){return P(a)}}),{},{children:[Object(f.jsx)(b.a,{className:"collapse-title",children:l}),Object(f.jsx)(u.a,{size:14})]})),Object(f.jsx)(m.a,{isOpen:g?T===a:T.includes(a),children:Object(f.jsx)(p.a,{children:n})})]},a)}))})};a.a=g,g.defaultProps={active:[],toggle:"click"}}}]);
//# sourceMappingURL=83.85733e51.chunk.js.map