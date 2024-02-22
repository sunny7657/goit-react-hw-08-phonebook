"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[621],{621:function(n,e,r){r.r(e),r.d(e,{default:function(){return A}});var t,o=r(4420),a=r(9869),c=r(4852),i=r(3400),s=r(6259),u=r(7247),d=r(184),l=function(n){var e=n.contact,r=e.id,t=e.name,l=e.number,x=(0,o.I0)();return(0,d.jsx)(c.ZP,{secondaryAction:(0,d.jsx)(i.Z,{edge:"end","aria-label":"delete",onClick:function(){return x((0,a.GK)(r))},children:(0,d.jsx)(u.Z,{})}),children:(0,d.jsx)(s.Z,{primary:t,secondary:"Tel.: ".concat(l)})})},x=r(3553),h=function(n){return n.contacts.items},p=function(n){return n.contacts.isLoading},b=function(n){return n.contacts.error},f=(0,x.P1)([h,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),m=r(2791),g=r(854),j=r(493),v=function(){var n=(0,o.v9)(f),e=(0,o.v9)(p),r=(0,o.v9)(b),t=(0,o.I0)();return(0,m.useEffect)((function(){t((0,a.yF)())}),[t]),(0,d.jsxs)("div",{children:[e&&(0,d.jsx)(g.Q,{}),r&&(0,d.jsxs)("p",{children:["Error: ",r]}),Boolean(n.length)&&(0,d.jsx)(j.Z,{sx:{width:"100%",maxWidth:280,bgcolor:"background.paper"},children:n.map((function(n){return(0,d.jsx)(l,{contact:n},n.id)}))})]})},w=r(7127),Z=r(4901),k=function(){var n=(0,o.I0)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(Z.Z,{type:"search",name:"filter",label:"Find contacts by name",onChange:function(e){n((0,w.T)(e.target.value))}})})},y=r(9439),C=r(7694),F=r(697),L=r(8096),I=r(4294),P=function(){var n=(0,m.useState)(""),e=(0,y.Z)(n,2),r=e[0],t=e[1],c=(0,m.useState)(""),i=(0,y.Z)(c,2),s=i[0],u=i[1],l=(0,o.v9)(h),x=(0,o.I0)(),p=function(n){var e=n.target.value;"name"===n.target.name?t(e):"number"===n.target.name&&u(e)};return(0,d.jsx)(F.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,onSubmit:function(n){if(n.preventDefault(),l.some((function(n){return n.name.toLowerCase()===r.toLowerCase()})))return alert("".concat(r," is already in contacts."));x((0,a.uK)({name:r,number:s})),C.Notify.success("The contact was created"),t(""),u("")},children:(0,d.jsxs)(L.Z,{children:[(0,d.jsx)(Z.Z,{type:"text",name:"name",label:"Name",required:!0,placeholder:"Adam Smith",value:r,onChange:p}),(0,d.jsx)(Z.Z,{type:"tel",name:"number",label:"Number",required:!0,pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",placeholder:"000-00-00",value:s,onChange:p}),(0,d.jsx)(I.Z,{type:"submit",color:"inherit",children:"Add contact"})]})})},S=r(168),T=r(7924).ZP.section(t||(t=(0,S.Z)(["\n  /* display: flex;\n  flex-direction: column;\n  padding: 0 15px;\n\n  button {\n    background-color: #e1ecf4;\n    border-radius: 3px;\n    border: 1px solid #7aa7c7;\n    box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;\n    box-sizing: border-box;\n    color: #39739d;\n    cursor: pointer;\n\n    font-weight: 400;\n    line-height: 1.15385;\n\n    button:hover,\n    button:focus {\n      background-color: #b3d3ea;\n      color: #2c5777;\n    }\n  }\n  form {\n    padding: 10px;\n    width: 400px;\n    border-radius: 3px;\n    border: 1px solid #7aa7c7;\n  }\n\n  label {\n    display: block;\n    margin-top: 10px;\n  }\n  input {\n    display: block;\n    padding: 10px;\n    margin-top: 10px;\n    width: 300px;\n    background-color: #e1ecf4;\n    border-radius: 3px;\n    border: 1px solid #7aa7c7;\n    box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;\n  } */\n"]))),_=function(n){var e=n.title,r=n.children;return(0,d.jsxs)(T,{children:[(0,d.jsx)("h2",{children:e}),r]})},A=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(_,{title:"Phonebook",children:(0,d.jsx)(P,{})}),(0,d.jsxs)(_,{title:"Contacts",children:[(0,d.jsx)(k,{}),(0,d.jsx)(v,{})]})]})}}}]);
//# sourceMappingURL=621.e6a204ff.chunk.js.map