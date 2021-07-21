(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__32KM_",filterInput:"Filter_filterInput__3ghZt"}},15:function(t,e,n){t.exports={list:"ContactsList_list__-UpP9"}},2:function(t,e,n){t.exports={form:"FormContact_form__24gq6",label:"FormContact_label__1KSue",input:"FormContact_input__203UL",button:"FormContact_button__j9jWh",btnText:"FormContact_btnText__31xr5"}},21:function(t,e,n){},3:function(t,e,n){t.exports={listItem:"ContactListItem_listItem__SgcEu",listItemText:"ContactListItem_listItemText__U4NS-",button:"ContactListItem_button__2RUAO"}},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),s=n.n(r),o=(n(21),n(16)),i=n(5),l=n(6),u=n(9),m=n(7),b=n(13),d=n.n(b),h=n(14),j=n(2),f=n.n(j),p=n(8),x=n(0),C=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),t.props.onSubmit(a,c),t.reset()},t}return Object(l.a)(n,[{key:"reset",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){return Object(x.jsxs)("form",{className:f.a.form,onSubmit:this.handleSubmit,children:[Object(x.jsxs)("label",{className:f.a.label,htmlFor:this.nameInputId,children:["Name",Object(x.jsx)("input",{className:f.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:this.state.name,onChange:this.handleChange,title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(x.jsxs)("label",{className:f.a.label,htmlFor:this.numberInputId,children:["Number",Object(x.jsx)("input",{className:f.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:this.state.number,onChange:this.handleChange,title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(x.jsxs)("button",{className:f.a.button,type:"submit",children:[Object(x.jsx)("span",{className:f.a.btnText,children:"Add contact"})," ",Object(x.jsx)(p.a,{size:"20px",color:"rgb(130, 27, 112)"})]})]})}}]),n}(a.Component),O=n(11),_=n.n(O),v=function(t){var e=t.value,n=t.onChange;return Object(x.jsxs)("label",{className:_.a.filterLabel,children:["Find contacts by name",Object(x.jsx)("input",{className:_.a.filterInput,type:"text",value:e,onChange:n})]})},g=n(15),N=n.n(g),I=n(3),S=n.n(I),y=function(t){var e=t.contactName,n=t.contactNumber,a=t.onClickDeleteContact;return Object(x.jsxs)("li",{className:S.a.listItem,children:[Object(x.jsxs)("span",{className:S.a.listItemText,children:[e,":"]}),Object(x.jsx)("span",{className:S.a.listItemText,children:n}),Object(x.jsxs)("button",{className:S.a.button,type:"button",onClick:a,children:["Delete ",Object(x.jsx)(p.b,{size:"15px"})]})]})},k=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(x.jsx)("ul",{className:N.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(x.jsx)(y,{contactName:a,contactNumber:c,onClickDeleteContact:function(){return n(e)}},e)}))})},F=(n(31),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a=t.state.contacts,c={id:d.a.generate(),name:e,number:n};a.find((function(t){return t.name===c.name}))?alert("".concat(c.name," is already in contacts.")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(o.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter;return e.contacts.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t){var e=this.state.contacts;e!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(e))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:"Phonebook"}),Object(x.jsx)(C,{onSubmit:this.addContact}),Object(x.jsx)("h2",{children:"Contants"}),Object(x.jsx)(v,{value:t,onChange:this.changeFilter}),Object(x.jsx)(k,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component));s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.b64e7ec6.chunk.js.map