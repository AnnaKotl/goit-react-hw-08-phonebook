"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[257],{33:function(n,e,t){t.d(e,{Dx:function(){return u},Fy:function(){return p},Gq:function(){return x},Sn:function(){return f},n5:function(){return l}});var r,o,a,i,s,d=t(168),c=t(7745),l=c.zo.div(r||(r=(0,d.Z)(["\n  width: 520px;\n  margin: 20px auto 0;\n  padding: 10px;\n"]))),u=c.zo.h1(o||(o=(0,d.Z)(["\n  font-size: 24px;\n  text-align: center;\n"]))),x=c.zo.form(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  gap: 20px;\n  padding: 20px;\n  margin-bottom: 40px;\n  background-color: #f2d044;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,\n    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;\n"]))),p=c.zo.input(i||(i=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 10px;\n  margin: 0 auto;\n  font-size: 16px;\n  border: none;\n  outline: 1px transparent;\n  border-radius: 4px;\n  width: 320px;\n  height: 46px;\n  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease,\n    outline 0.3s ease;\n\n  &:hover {\n    border: 1px solid #a8890d;\n  }\n\n  &:focus {\n    outline: none;\n    border: 1px solid #a8890d;\n    box-shadow: 0 0 0 2px #a8890d;\n  }\n"]))),f=c.zo.button(s||(s=(0,d.Z)(["\n  min-width: 120px;\n  margin: 10px auto;\n  padding: 10px;\n  font-size: 16px;\n  background-color: #4caf50;\n  font-weight: bold;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease,\n    outline 0.3s ease;\n  max-width: 80px;\n  align-self: center;\n\n  &:hover {\n    transform: scale(1.02);\n    box-shadow: 0 8px 16px #355936;\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px #355936;\n  }\n\n  &:active {\n    transform: scale(0.95);\n  }\n"])))},8257:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,o,a,i,s,d=t(4942),c=t(1413),l=t(9439),u=t(9434),x=t(354),p=t(2791),f=t(3634),h=t(6916),b=function(n){return n.contacts.items},g=function(n){return n.filter},m=function(n){return n.contacts.isLoading},v=function(n){return n.contacts.error},w=(0,h.P1)([g,b],(function(n,e){var t=n.toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(t)}))})),j=((0,h.P1)([b,function(n,e){return e}],(function(n,e){return n.find((function(n){return n.id===e}))||null})),t(168)),y=t(7745),z=y.zo.div(r||(r=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: 0 auto 40px;\n  padding: 20px;\n  width: 500px;\n  background-color: #f2d044;\n\n  box-shadow: rgba(0, 0, 0, 0.1) 0px -20px 25px -5px,\n    rgba(0, 0, 0, 0.04) 0px -10px 10px -5px;\n"]))),X=y.zo.li(o||(o=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  max-width: 500px;\n  margin-bottom: 5px;\n  border-radius: 5px;\n  flex-wrap: wrap;\n  margin: 0 auto;\n"]))),Z=y.zo.p(a||(a=(0,j.Z)(["\n  margin: 0;\n  font-weight: 500;\n  font-size: large;\n"]))),k=y.zo.button(i||(i=(0,j.Z)(["\n  margin: 4px;\n  padding: 8px;\n  font-size: 12px;\n  background-color: #e63c22;\n  font-weight: bold;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: transform 0.3s ease, box-shadow 0.3s ease,\n    background-color 0.3s ease;\n  width: 60px;\n  align-self: center;\n\n  &:hover {\n    transform: scale(1.01);\n    box-shadow: 0 8px 16px #662d24;\n    background-color: #b32d19;\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px #662d24;\n  }\n\n  &:active {\n    transform: scale(0.95);\n  }\n"]))),C=y.zo.div(s||(s=(0,j.Z)(["\n  display: flex;\n  gap: 5px;\n"]))),F=t(3329);var _,S=function(){var n=(0,u.I0)(),e=(0,u.v9)(b),t=(0,u.v9)(m),r=(0,u.v9)(v),o=(0,u.v9)(w),a=(0,p.useState)({}),i=(0,l.Z)(a,2),s=i[0],h=i[1],g=function(e){var t=e.currentTarget.value;s[t]||(h((function(n){return(0,c.Z)((0,c.Z)({},n),{},(0,d.Z)({},t,!0))})),n((0,f.GK)(t)))};return(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(z,{children:(0,F.jsxs)("ul",{children:[r&&(0,F.jsx)("p",{style:{color:"red",fontSize:18},children:r}),t&&0===e.length?(0,F.jsx)(x.Rf,{color:"#4fa94d",width:"100",visible:!0,ariaLabel:"falling-lines-loading"}):o.map((function(n){return(0,F.jsxs)(X,{children:[(0,F.jsxs)(C,{children:[" ",(0,F.jsxs)(Z,{children:[n.name,":"]}),(0,F.jsx)(Z,{children:n.number})]}),(0,F.jsxs)(k,{type:"button",name:"delete",value:n.id,disabled:s[n.id],onClick:g,children:[" ",s[n.id]&&(0,F.jsx)(x.NB,{visible:!0,height:"18",width:"18"})," ","Delete"]})]},n.id)}))]})})})},D=t(33),I=t(4808),q=y.zo.div(_||(_=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: 0 auto 40px;\n  padding: 20px;\n  width: 500px;\n  background-color: #f2d044;\n\n  box-shadow: rgba(0, 0, 0, 0.1) 0px -20px 25px -5px,\n    rgba(0, 0, 0, 0.04) 0px -10px 10px -5px;\n"]))),A=t(3459);var L=function(){var n=(0,u.v9)(g),e=(0,u.I0)();return(0,F.jsxs)(q,{children:[(0,F.jsx)(A.ae,{children:"Contacts"}),(0,F.jsx)("label",{children:(0,F.jsx)(D.Fy,{type:"text",name:"filter",value:n,onChange:function(n){e((0,I.T)(n.currentTarget.value))},placeholder:"Find contacts by name"})})]})},E=t(4211);var G=function(){var n=(0,u.v9)(b),e=(0,u.I0)(),t=(0,u.v9)(m),r=(0,p.useState)(""),o=(0,l.Z)(r,2),a=o[0],i=o[1],s=(0,p.useState)(""),d=(0,l.Z)(s,2),c=d[0],x=d[1],h=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":i(r);break;case"number":x(r);break;default:return}},g=function(){i(""),x("")};return(0,F.jsx)(D.n5,{children:(0,F.jsxs)(D.Gq,{onSubmit:function(t){if(t.preventDefault(),n.find((function(n){return n.name===a.trim()})))return alert(a+" is already in contacts!"),void g();!function(n,t){var r={name:n.trim(),number:t.trim()};e((0,f.uK)(r))}(a,c),g()},children:[(0,F.jsx)(D.Dx,{children:"Create a new contact:"}),(0,F.jsx)("label",{children:(0,F.jsx)(D.Fy,{value:a,onChange:h,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0406\u0456\u0407\u0457\u0490\u0491' \\-\\u0400-\\u04FF]+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter name",required:!0})}),(0,F.jsx)("label",{children:(0,F.jsx)(D.Fy,{value:c,onChange:h,type:"tel",name:"number",title:"Phone number must be +380XXXXXXXXX or 0XXXXXXXXX",placeholder:"Enter number",required:!0})}),(0,F.jsxs)(D.Sn,{type:"submit",disabled:t,children:[" ",t&&0!==n.length?(0,F.jsx)(E.D,{isIndeterminate:!0,color:"green.300"}):"Add"]})]})})},P=function(){var n=(0,u.I0)();return(0,p.useEffect)((function(){n((0,f.yF)())}),[n]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(G,{}),(0,F.jsx)(L,{}),(0,F.jsx)(S,{})]})}}}]);
//# sourceMappingURL=257.68fc678b.chunk.js.map