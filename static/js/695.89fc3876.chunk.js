"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[695],{3695:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var r,a=t(4420),o=t(9869),c=t(4852),i=t(3400),s=t(6259),u=t(890),l=t(7247),d=t(184),m=function(e){var n=e.contact,t=n.id,r=n.name,m=n.number,h=(0,a.I0)();return(0,d.jsx)(c.ZP,{secondaryAction:(0,d.jsx)(i.Z,{edge:"end","aria-label":"delete",onClick:function(){return h((0,o.GK)(t))},children:(0,d.jsx)(l.Z,{})}),children:(0,d.jsx)(s.Z,{primary:(0,d.jsx)(u.Z,{variant:"body1",children:r}),secondary:(0,d.jsxs)(u.Z,{variant:"body2",children:["Tel.: ",m]})})})},h=t(3553),x=function(e){return e.contacts.items},p=function(e){return e.contacts.isLoading},f=function(e){return e.contacts.error},j=(0,h.P1)([x,function(e){return e.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),b=t(2791),g=t(854),Z=t(493),v=function(){var e=(0,a.v9)(j),n=(0,a.v9)(p),t=(0,a.v9)(f),r=(0,a.I0)();return(0,b.useEffect)((function(){r((0,o.yF)())}),[r]),(0,d.jsxs)("div",{children:[n&&(0,d.jsx)(g.Q,{}),t&&(0,d.jsxs)("p",{children:["Error: ",t]}),Boolean(e.length)&&(0,d.jsx)(Z.Z,{sx:{width:"100%",maxWidth:280,bgcolor:"transparent"},children:e.map((function(e){return(0,d.jsx)(m,{contact:e},e.id)}))})]})},y=t(7127),k=t(697),w=t(4901),C=function(){var e=(0,a.I0)();return(0,d.jsx)(k.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1.5,width:"35ch"}},children:(0,d.jsx)(w.Z,{type:"search",name:"filter",label:"Find contacts by name",onChange:function(n){e((0,y.T)(n.target.value))},size:"small"})})},F=t(1413),L=t(9439),T=t(7694),I=t(8096),S=t(4294),_=t(938),z=function(){var e=(0,b.useState)(""),n=(0,L.Z)(e,2),t=n[0],r=n[1],c=(0,b.useState)(""),i=(0,L.Z)(c,2),s=i[0],u=i[1],l=(0,a.v9)(x),m=(0,a.I0)(),h=function(e){var n=e.target.value;"name"===e.target.name?r(n):"number"===e.target.name&&u(n)};return(0,d.jsx)(k.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1.5,minWidth:"360px"}},onSubmit:function(e){if(e.preventDefault(),l.some((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return alert("".concat(t," is already in contacts."));m((0,o.uK)({name:t,number:s})),T.Notify.success("The contact was created"),r(""),u("")},children:(0,d.jsxs)(I.Z,{children:[(0,d.jsx)(w.Z,{type:"text",name:"name",label:"Name",required:!0,placeholder:"Adam Smith",value:t,onChange:h}),(0,d.jsx)(w.Z,{type:"tel",name:"number",label:"Number",required:!0,pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",placeholder:"000-00-00",value:s,onChange:h}),(0,d.jsx)(S.Z,{type:"submit",sx:(0,F.Z)({mt:2},_.Z.palette.button),children:"Add contact"})]})})},A=function(e){var n=e.title,t=e.children;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u.Z,{sx:(0,F.Z)((0,F.Z)({},_.Z.typography.h2),{},{padding:"20px"}),children:n}),t]})},N=t(168),P=t(225).Z.img(r||(r=(0,N.Z)(["\n  position: absolute;\n  z-index: -1;\n  transform: scaleX(-1);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin: 0 auto;\n"]))),q=function(e){var n=e.children;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(P,{src:"https://images.pexels.com/photos/5797904/pexels-photo-5797904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",alt:"Background"}),n]})},B=function(){return(0,d.jsxs)(q,{children:[(0,d.jsx)(A,{title:"Phonebook",children:(0,d.jsx)(z,{})}),(0,d.jsxs)(A,{title:"Contacts",children:[(0,d.jsx)(C,{}),(0,d.jsx)(v,{})]})]})}}}]);
//# sourceMappingURL=695.89fc3876.chunk.js.map