"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[543],{7543:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(2791),r=n(9434),s=n(4270),c=n(826),i={button:"ContactListItem_button__SG6H2"},u=n(184),o=function(e){var t=e.contact,n=t.name,a=t.id,s=t.number,o=(0,r.I0)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("li",{className:i.listItem,children:[n,": ",s,(0,u.jsx)("button",{className:i.button,type:"button",onClick:function(){return function(e){console.log(e),o((0,c.zY)(e))}(a)},children:"Delete"})]})})},l=function(e){if(void 0!==e)return e.contacts.contacts},m=function(e){if(void 0!==e)return e.contacts.filter},d=function(e){return e.contacts.isLoading},f="ContactsList_list__mmE3Y",h="ContactsList_contactsHeader__GWrZG",b=function(){var e=(0,r.v9)(l),t=(0,r.v9)(m),n=e.items.filter((function(e){return e.name.includes(t)}));return(0,u.jsxs)("ul",{className:f,children:[(0,u.jsx)("h5",{className:h,children:"PHONEBOOK"}),n.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,u.jsx)(o,{contact:{id:t,name:n,number:a}},t)}))]})},p=n(6382),v={form:"ContactEditor_form__U4ufl",input:"ContactEditor_input__Nbns0",button:"ContactEditor_button__yGZhk"},x=function(){var e=(0,r.v9)(l),t=(0,r.I0)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("form",{className:v.form,onSubmit:function(n){n.preventDefault();var a=n.currentTarget,r=a.elements.name,s=a.elements.number;if(e.items.find((function(e){return e.name===r.value&&e.number===s.value})))alert("".concat(r.value," is already in contacts"));else{var i={name:r.value,number:s.value,id:(0,p.x0)()};t((0,c.el)(i)),a.reset()}},children:[(0,u.jsx)("label",{children:"Name"}),(0,u.jsx)("input",{className:v.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,u.jsx)("label",{children:"Number"}),(0,u.jsx)("input",{className:v.number,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,u.jsx)("button",{className:v.button,children:"Add contact"})]})})},_=n(2007),j=n.n(_),C=n(4808),N="Filter_findContacts__vu63G",g=function(){var e=(0,r.I0)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{className:N,children:"Find contacts by name"}),(0,u.jsx)("input",{type:"text",name:"filter",onChange:function(t){var n=t.target.value.toLowerCase();e((0,C.r)(n))},value:(0,r.v9)(m)})]})};function y(){var e=(0,r.I0)(),t=(0,r.v9)(d);return(0,a.useEffect)((function(){e((0,c.yF)())}),[e]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.q,{children:(0,u.jsx)("title",{children:"Your contacts"})}),(0,u.jsx)(x,{}),(0,u.jsx)("div",{children:t&&"Request in progress..."}),(0,u.jsx)(g,{}),(0,u.jsx)(b,{})]})}g.prototype={filter:j().func.isRequired}}}]);
//# sourceMappingURL=543.ccc0cb59.chunk.js.map