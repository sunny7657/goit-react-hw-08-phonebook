"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[948],{4948:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var r,a,i=t(4420),o=t(5523),c=t(4852),s=t(3400),l=t(6259),d=t(890),u=t(7924),h=t(7247),x=t(3329),m=function(n){var e=n.contact,t=e.id,r=e.name,a=e.number,m=(0,i.I0)();return(0,x.jsxs)(c.ZP,{secondaryAction:(0,x.jsx)(s.Z,{edge:"end","aria-label":"delete",onClick:function(){return m((0,o.GK)(t))},children:(0,x.jsx)(h.Z,{})}),children:[(0,x.jsx)(l.Z,{primary:(0,x.jsx)(d.Z,{variant:"body1",children:r}),secondary:(0,x.jsxs)(d.Z,{variant:"body2",children:["Tel.: ",a]})}),(0,x.jsx)(u.Z,{})]})},p=t(6351),f=t(2791),b=t(854),j=t(9658),g=t(493),v=function(){var n=(0,i.v9)(p.DI),e=(0,i.v9)(p.xU),t=(0,i.v9)(p.zh),r=(0,i.I0)();return(0,f.useEffect)((function(){r((0,o.yF)())}),[r]),(0,x.jsxs)("div",{children:[e&&(0,x.jsx)(b.Q,{}),t&&(0,x.jsxs)(j.Z,{variant:"outlined",severity:"error",children:["Error: ",t]}),Boolean(n.length)&&(0,x.jsx)(g.Z,{sx:{width:"100%",maxWidth:280,bgcolor:"transparent"},children:n.map((function(n){return(0,x.jsx)(m,{contact:n},n.id)}))})]})},Z=t(7127),y=t(697),k=t(811),w=function(){var n=(0,i.I0)();return(0,x.jsx)(y.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1.5,width:"35ch"}},children:(0,x.jsx)(k.Z,{type:"search",name:"filter",label:"Find contacts by name",onChange:function(e){n((0,Z.T)(e.target.value))},size:"small"})})},C=t(9439),F=t(7694),I=t(8096),T=t(4294),_=function(){var n=(0,f.useState)(""),e=(0,C.Z)(n,2),t=e[0],r=e[1],a=(0,f.useState)(""),c=(0,C.Z)(a,2),s=c[0],l=c[1],d=(0,i.v9)(p.Af),u=(0,i.I0)(),h=function(n){var e=n.target.value;"name"===n.target.name?r(e):"number"===n.target.name&&l(e)};return(0,x.jsx)(y.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1.5,minWidth:"360px"}},onSubmit:function(n){if(n.preventDefault(),d.some((function(n){return n.name.toLowerCase()===t.toLowerCase()})))return alert("".concat(t," is already in contacts."));u((0,o.uK)({name:t,number:s})),F.Notify.success("The contact was created"),r(""),l("")},children:(0,x.jsxs)(I.Z,{children:[(0,x.jsx)(k.Z,{type:"text",name:"name",label:"Name",required:!0,placeholder:"Adam Smith",value:t,onChange:h}),(0,x.jsx)(k.Z,{type:"tel",name:"number",label:"Number",required:!0,pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",placeholder:"000-00-00",value:s,onChange:h}),(0,x.jsx)(T.Z,{type:"submit",sx:{mt:2},children:"Add contact"})]})})},z=t(1413),A=t(3967),S=function(n){var e=n.title,t=n.children,r=(0,A.Z)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.Z,{sx:(0,z.Z)({},r.typography.h2),children:e}),t]})},N=t(168),q=t(225),D=q.Z.section(r||(r=(0,N.Z)(["\n  padding-top: 40px;\n  padding-bottom: 16px;\n  position: relative;\n  min-height: 100vh;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: linear-gradient(\n        rgb(196 245 186 / 81%),\n        rgb(241 240 201 / 73%)\n      ),\n      url('https://cdn.pixabay.com/photo/2022/03/18/07/05/envelope-7076001_1280.png');\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-attachment: fixed;\n    z-index: -1;\n  }\n"]))),E=q.Z.div(a||(a=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 30px;\n"]))),K=function(){return(0,x.jsxs)(D,{children:[(0,x.jsx)(E,{children:(0,x.jsx)(S,{title:"Phonebook",children:(0,x.jsx)(_,{})})}),(0,x.jsx)(E,{children:(0,x.jsxs)(S,{title:"Contacts",children:[(0,x.jsx)(w,{}),(0,x.jsx)(v,{})]})})]})}}}]);
//# sourceMappingURL=948.ce1c9d58.chunk.js.map