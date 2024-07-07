(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[144],{2188:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return sn}});var t=r(4420),o=r(296),i=r(7462),a=r(3366),c=r(2791),u=r(3733),s=r(838),l=r(6934),d=r(1402),f=r(5527),p=r(9703),m=r(4657);function v(n){return(0,m.ZP)("MuiCard",n)}(0,p.Z)("MuiCard",["root"]);var x=r(3329),h=["className","raised"],Z=(0,l.ZP)(f.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{overflow:"hidden"}})),g=c.forwardRef((function(n,e){var r=(0,d.Z)({props:n,name:"MuiCard"}),t=r.className,o=r.raised,c=void 0!==o&&o,l=(0,a.Z)(r,h),f=(0,i.Z)({},r,{raised:c}),p=function(n){var e=n.classes;return(0,s.Z)({root:["root"]},v,e)}(f);return(0,x.jsx)(Z,(0,i.Z)({className:(0,u.Z)(p.root,t),elevation:c?8:void 0,ref:e,ownerState:f},l))}));function b(n){return(0,m.ZP)("MuiCardContent",n)}(0,p.Z)("MuiCardContent",["root"]);var w=["className","component"],S=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),j=c.forwardRef((function(n,e){var r=(0,d.Z)({props:n,name:"MuiCardContent"}),t=r.className,o=r.component,c=void 0===o?"div":o,l=(0,a.Z)(r,w),f=(0,i.Z)({},r,{component:c}),p=function(n){var e=n.classes;return(0,s.Z)({root:["root"]},b,e)}(f);return(0,x.jsx)(S,(0,i.Z)({as:c,className:(0,u.Z)(p.root,t),ownerState:f,ref:e},l))})),k=r(697),M=r(890);function y(n){return(0,m.ZP)("MuiCardActions",n)}(0,p.Z)("MuiCardActions",["root","spacing"]);var C=["disableSpacing","className"],N=(0,l.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState;return[e.root,!r.disableSpacing&&e.spacing]}})((function(n){var e=n.ownerState;return(0,i.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})})),P=c.forwardRef((function(n,e){var r=(0,d.Z)({props:n,name:"MuiCardActions"}),t=r.disableSpacing,o=void 0!==t&&t,c=r.className,l=(0,a.Z)(r,C),f=(0,i.Z)({},r,{disableSpacing:o}),p=function(n){var e=n.classes,r={root:["root",!n.disableSpacing&&"spacing"]};return(0,s.Z)(r,y,e)}(f);return(0,x.jsx)(N,(0,i.Z)({className:(0,u.Z)(p.root,c),ownerState:f,ref:e},l))})),W=r(3400),z=r(7247),E=r(1286),R=function(n){var e=n.contact,r=e.id,i=e.name,a=e.number,c=n.onEdit,u=(0,t.I0)();return(0,x.jsx)(g,{variant:"outlined",sx:{mb:2,boxShadow:3,borderRadius:2,bgcolor:"#f9f9f9","@media (max-width: 600px)":{width:"100%"}},children:(0,x.jsxs)(j,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,x.jsxs)(k.Z,{sx:{overflow:"hidden",textOverflow:"ellipsis"},children:[(0,x.jsx)(M.Z,{variant:"h6",component:"div",sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"200px"},children:i}),(0,x.jsxs)(M.Z,{variant:"body2",color:"text.secondary",children:["Tel.: ",a]})]}),(0,x.jsxs)(P,{sx:{marginLeft:"auto",display:"flex",alignItems:"center"},children:[(0,x.jsx)(W.Z,{"aria-label":"edit",onClick:function(){return c(r)},children:(0,x.jsx)(E.Z,{})}),(0,x.jsx)(W.Z,{"aria-label":"delete",onClick:function(){return u((0,o.GK)(r))},children:(0,x.jsx)(z.Z,{})})]})]})})},I=r(6351),_=r(854),T=r(9658),G=function(){var n=(0,t.v9)(I.DI),e=(0,t.v9)(I.xU),r=(0,t.v9)(I.zh),i=(0,t.I0)();(0,c.useEffect)((function(){i((0,o.yF)())}),[i]);var a=function(n){console.log("Edit contact with id:",n)};return(0,x.jsxs)(k.Z,{sx:{padding:2},children:[e&&(0,x.jsx)(_.Q,{}),r&&(0,x.jsxs)(T.Z,{variant:"outlined",severity:"error",children:["Error: ",r]}),!e&&!n.length&&(0,x.jsx)(M.Z,{variant:"body1",color:"textSecondary",align:"center",children:"No contacts found"}),Boolean(n.length)&&(0,x.jsx)(k.Z,{children:n.map((function(n){return(0,x.jsx)(R,{contact:n,onEdit:a},n.id)}))})]})},F=r(7657),O=r(1666),B=function(){var n=(0,t.I0)();return(0,x.jsx)(k.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1.5,width:"35ch"}},children:(0,x.jsx)(O.Z,{type:"search",name:"filter",label:"Find contacts",onChange:function(e){n((0,F.T)(e.target.value))},size:"small"})})},L=r(3433),q=r(4942),A=r(1184),D=r(8519),$=r(3967);var V=c.createContext();function H(n){return(0,m.ZP)("MuiGrid",n)}var K=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],Q=(0,p.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,L.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,L.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,L.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,L.Z)(K.map((function(n){return"grid-xs-".concat(n)}))),(0,L.Z)(K.map((function(n){return"grid-sm-".concat(n)}))),(0,L.Z)(K.map((function(n){return"grid-md-".concat(n)}))),(0,L.Z)(K.map((function(n){return"grid-lg-".concat(n)}))),(0,L.Z)(K.map((function(n){return"grid-xl-".concat(n)}))))),U=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function Y(n){var e=parseFloat(n);return"".concat(e).concat(String(n).replace(String(e),"")||"px")}function J(n){var e=n.breakpoints,r=n.values,t="";Object.keys(r).forEach((function(n){""===t&&0!==r[n]&&(t=n)}));var o=Object.keys(e).sort((function(n,r){return e[n]-e[r]}));return o.slice(0,o.indexOf(t))}var X=(0,l.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState,t=r.container,o=r.direction,i=r.item,a=r.spacing,c=r.wrap,u=r.zeroMinWidth,s=r.breakpoints,l=[];t&&(l=function(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[r["spacing-xs-".concat(String(n))]];var t=[];return e.forEach((function(e){var o=n[e];Number(o)>0&&t.push(r["spacing-".concat(e,"-").concat(String(o))])})),t}(a,s,e));var d=[];return s.forEach((function(n){var t=r[n];t&&d.push(e["grid-".concat(n,"-").concat(String(t))])})),[e.root,t&&e.container,i&&e.item,u&&e.zeroMinWidth].concat((0,L.Z)(l),["row"!==o&&e["direction-xs-".concat(String(o))],"wrap"!==c&&e["wrap-xs-".concat(String(c))]],d)}})((function(n){var e=n.ownerState;return(0,i.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})}),(function(n){var e=n.theme,r=n.ownerState,t=(0,A.P$)({values:r.direction,breakpoints:e.breakpoints.values});return(0,A.k9)({theme:e},t,(function(n){var e={flexDirection:n};return 0===n.indexOf("column")&&(e["& > .".concat(Q.item)]={maxWidth:"none"}),e}))}),(function(n){var e=n.theme,r=n.ownerState,t=r.container,o=r.rowSpacing,i={};if(t&&0!==o){var a,c=(0,A.P$)({values:o,breakpoints:e.breakpoints.values});"object"===typeof c&&(a=J({breakpoints:e.breakpoints.values,values:c})),i=(0,A.k9)({theme:e},c,(function(n,r){var t,o=e.spacing(n);return"0px"!==o?(0,q.Z)({marginTop:"-".concat(Y(o))},"& > .".concat(Q.item),{paddingTop:Y(o)}):null!=(t=a)&&t.includes(r)?{}:(0,q.Z)({marginTop:0},"& > .".concat(Q.item),{paddingTop:0})}))}return i}),(function(n){var e=n.theme,r=n.ownerState,t=r.container,o=r.columnSpacing,i={};if(t&&0!==o){var a,c=(0,A.P$)({values:o,breakpoints:e.breakpoints.values});"object"===typeof c&&(a=J({breakpoints:e.breakpoints.values,values:c})),i=(0,A.k9)({theme:e},c,(function(n,r){var t,o=e.spacing(n);return"0px"!==o?(0,q.Z)({width:"calc(100% + ".concat(Y(o),")"),marginLeft:"-".concat(Y(o))},"& > .".concat(Q.item),{paddingLeft:Y(o)}):null!=(t=a)&&t.includes(r)?{}:(0,q.Z)({width:"100%",marginLeft:0},"& > .".concat(Q.item),{paddingLeft:0})}))}return i}),(function(n){var e,r=n.theme,t=n.ownerState;return r.breakpoints.keys.reduce((function(n,o){var a={};if(t[o]&&(e=t[o]),!e)return n;if(!0===e)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,A.P$)({values:t.columns,breakpoints:r.breakpoints.values}),u="object"===typeof c?c[o]:c;if(void 0===u||null===u)return n;var s="".concat(Math.round(e/u*1e8)/1e6,"%"),l={};if(t.container&&t.item&&0!==t.columnSpacing){var d=r.spacing(t.columnSpacing);if("0px"!==d){var f="calc(".concat(s," + ").concat(Y(d),")");l={flexBasis:f,maxWidth:f}}}a=(0,i.Z)({flexBasis:s,flexGrow:0,maxWidth:s},l)}return 0===r.breakpoints.values[o]?Object.assign(n,a):n[r.breakpoints.up(o)]=a,n}),{})}));var nn=function(n){var e=n.classes,r=n.container,t=n.direction,o=n.item,i=n.spacing,a=n.wrap,c=n.zeroMinWidth,u=n.breakpoints,l=[];r&&(l=function(n,e){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var r=[];return e.forEach((function(e){var t=n[e];if(Number(t)>0){var o="spacing-".concat(e,"-").concat(String(t));r.push(o)}})),r}(i,u));var d=[];u.forEach((function(e){var r=n[e];r&&d.push("grid-".concat(e,"-").concat(String(r)))}));var f={root:["root",r&&"container",o&&"item",c&&"zeroMinWidth"].concat((0,L.Z)(l),["row"!==t&&"direction-xs-".concat(String(t)),"wrap"!==a&&"wrap-xs-".concat(String(a))],d)};return(0,s.Z)(f,H,e)},en=c.forwardRef((function(n,e){var r=(0,d.Z)({props:n,name:"MuiGrid"}),t=(0,$.Z)().breakpoints,o=(0,D.Z)(r),s=o.className,l=o.columns,f=o.columnSpacing,p=o.component,m=void 0===p?"div":p,v=o.container,h=void 0!==v&&v,Z=o.direction,g=void 0===Z?"row":Z,b=o.item,w=void 0!==b&&b,S=o.rowSpacing,j=o.spacing,k=void 0===j?0:j,M=o.wrap,y=void 0===M?"wrap":M,C=o.zeroMinWidth,N=void 0!==C&&C,P=(0,a.Z)(o,U),W=S||k,z=f||k,E=c.useContext(V),R=h?l||12:E,I={},_=(0,i.Z)({},P);t.keys.forEach((function(n){null!=P[n]&&(I[n]=P[n],delete _[n])}));var T=(0,i.Z)({},o,{columns:R,container:h,direction:g,item:w,rowSpacing:W,columnSpacing:z,wrap:y,zeroMinWidth:N,spacing:k},I,{breakpoints:t.keys}),G=nn(T);return(0,x.jsx)(V.Provider,{value:R,children:(0,x.jsx)(X,(0,i.Z)({ownerState:T,className:(0,u.Z)(G.root,s),as:m,ref:e},_))})})),rn=en,tn=r(1413),on=r(7694),an=r(1134),cn=r(4294),un=function(){var n=(0,t.v9)(I.Af),e=(0,t.I0)(),r=(0,an.cI)({defaultValues:{name:"",number:""}}),i=r.register,a=r.handleSubmit,c=r.reset;return(0,x.jsxs)(k.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1.5,minWidth:"280px"}},onSubmit:a((function(r){n.some((function(n){return n.name===r.name}))?on.Notify.failure("You have the contact with this name"):(e((0,o.uK)(r)),c(),on.Notify.success("The contact was created"))})),children:[(0,x.jsx)(O.Z,(0,tn.Z)({label:"Name",required:!0,placeholder:"Adam Smith"},i("name",{required:"This field is required"}))),(0,x.jsx)(O.Z,(0,tn.Z)({label:"Number",required:!0,placeholder:"000-00-00"},i("number",{required:"This field is required",minLength:{value:7,message:"Please, enter the number 000-00-00"},pattern:/^[0-9]{3}-[0-9]{2}-[0-9]{2}$/}))),(0,x.jsx)(cn.Z,{type:"submit",sx:{mt:2},children:"Add contact"})]})},sn=function(){return(0,x.jsx)(k.Z,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:(0,x.jsxs)(rn,{container:!0,spacing:4,direction:{xs:"column",md:"row"},children:[(0,x.jsx)(rn,{item:!0,xs:12,md:6,children:(0,x.jsxs)(f.Z,{elevation:3,sx:{padding:3},children:[(0,x.jsx)(M.Z,{variant:"h4",component:"h2",gutterBottom:!0,children:"Phonebook"}),(0,x.jsx)(un,{})]})}),(0,x.jsx)(rn,{item:!0,xs:12,md:6,children:(0,x.jsxs)(f.Z,{elevation:3,sx:{padding:3},children:[(0,x.jsx)(M.Z,{variant:"h4",component:"h2",gutterBottom:!0,children:"Contacts"}),(0,x.jsx)(B,{}),(0,x.jsx)(G,{})]})})]})})}},7247:function(n,e,r){"use strict";var t=r(4836);e.Z=void 0;var o=t(r(5649)),i=r(3329);e.Z=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},1286:function(n,e,r){"use strict";var t=r(4836);e.Z=void 0;var o=t(r(5649)),i=r(3329);e.Z=(0,o.default)((0,i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},5649:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=r(9353)},9353:function(n,e,r){"use strict";r.r(e),r.d(e,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return a.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return u},isMuiElement:function(){return s.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return p},unstable_ClassNameGenerator:function(){return w},unstable_useEnhancedEffect:function(){return m.Z},unstable_useId:function(){return v},unsupportedProp:function(){return x},useControlled:function(){return h.Z},useEventCallback:function(){return Z.Z},useForkRef:function(){return g.Z},useIsFocusVisible:function(){return b.Z}});var t=r(4925),o=r(4036),i=r(5253).Z,a=r(6189),c=r(3199);var u=function(n,e){return function(){return null}},s=r(5925),l=r(8301),d=r(7602);r(7462);var f=function(n,e){return function(){return null}},p=r(7576).Z,m=r(162),v=r(6046).Z;var x=function(n,e,r,t,o){return null},h=r(9552),Z=r(9683),g=r(2071),b=r(6943),w={configure:function(n){t.Z.configure(n)}}},4836:function(n){n.exports=function(n){return n&&n.__esModule?n:{default:n}},n.exports.__esModule=!0,n.exports.default=n.exports}}]);
//# sourceMappingURL=144.f97b2c93.chunk.js.map