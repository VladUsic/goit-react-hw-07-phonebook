(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={container:"Container_container__3e1Mh",container__label:"Container_container__label__1-Z_y",container__contacts:"Container_container__contacts__BVr4P"}},20:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__1I-Eb",contactForm__label:"ContactForm_contactForm__label__3Emvt"}},21:function(t,e,n){t.exports={contactList__item:"ContactList_contactList__item__1__8m",contactList__name:"ContactList_contactList__name__3Wc9W",contactList__number:"ContactList_contactList__number__1ukRz"}},34:function(t,e,n){t.exports={filter__input:"Filter_filter__input__1QrFC"}},42:function(t,e,n){},43:function(t,e,n){},89:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),o=n(17),r=n.n(o),i=(n(42),n(43),n(12)),s=n.n(i),u=n(1);function d(t){return Object(u.jsxs)("div",{className:s.a.container,children:[" ",t.children]})}var l=n(8),b=n(91),m=(n(45),n(20)),_=n.n(m),j=function(t){var e=t.onSubmit,n=Object(c.useState)(""),a=Object(l.a)(n,2),o=a[0],r=a[1],i=Object(c.useState)(""),s=Object(l.a)(i,2),d=s[0],m=s[1],j=function(t){var e=t.target;"name"===e.name&&r(e.value),"number"===e.name&&m(e.value)};return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{action:"",onSubmit:function(t){t.preventDefault(),e({name:o,number:d}),r(""),m("")},className:_.a.contactForm,children:[Object(u.jsxs)("label",{className:_.a.contactForm__label,htmlFor:"",children:["Name",Object(u.jsx)("input",{type:"text",name:"name",placeholder:"John Snow",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:o,onChange:j})]}),Object(u.jsxs)("label",{className:_.a.contactForm__label,htmlFor:"",children:["Number",Object(u.jsx)("input",{type:"tel",name:"number",placeholder:"+38(093)9995040",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:d,onChange:j})]}),Object(u.jsx)(b.a,{type:"submit",children:"Add contact"})]})})},f=n(34),h=n.n(f),O=n(5),C=n(2),p=Object(C.b)("contacts/fetchContactRequest"),x=Object(C.b)("contacts/fetchContactSuccess"),g=Object(C.b)("contacts/fetchContactError"),v=Object(C.b)("contacts/addContactRequest"),S=Object(C.b)("contacts/addContactSuccess"),F=Object(C.b)("contacts/addContactError"),L=Object(C.b)("contacts/deleteContactRequest"),y=Object(C.b)("contacts/deleteContactSuccess"),N=Object(C.b)("contacts/deleteContactError"),E=Object(C.b)("contacts/delete"),q={fetchContactRequest:p,fetchContactSuccess:x,fetchContactError:g,addContactRequest:v,addContactSuccess:S,addContactError:F,deleteContactRequest:L,deleteContactSuccess:y,deleteContactError:N,filter:Object(C.b)("contacts/filter"),deleteContact:E};var A=function(){var t=Object(O.b)();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("label",{htmlFor:"",children:["Find contacts by name",Object(u.jsx)("input",{className:h.a.filter__input,type:"text",placeholder:"find by name..",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(e){return t(q.filter(e.target.value))}})]})})},R=n(10),w=Object(R.a)([function(t){return t.contacts.items},function(t){return t.contacts.filter}],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e)}))})),z=n(21),k=n.n(z),I=n(92),Z=n(14),B=n.n(Z);B.a.defaults.baseURL="http://localhost:3000";function J(){var t=Object(O.c)(w),e=Object(O.b)();return Object(u.jsx)("div",{children:t.length>0&&Object(u.jsx)("ul",{children:t.map((function(t){return Object(u.jsxs)("li",{className:k.a.contactList__item,children:[Object(u.jsx)("span",{className:k.a.contactList__name,children:t.name}),Object(u.jsx)("span",{className:k.a.contactList__number,children:t.number}),Object(u.jsx)(b.a,{variant:"danger",onClick:function(){return e((n=t.id,function(t){t(q.deleteContactRequest),B.a.delete("/contacts/".concat(n)).then((function(){return t(q.deleteContactSuccess(n))})).catch((function(e){return t(q.deleteContactError(e))}))}));var n},children:"Delete"})]},t.id)}))})})}var M,P=n(11),D=n.n(P),T=(n(86),n(87),function(){var t=Object(O.b)();return Object(c.useEffect)((function(){t((function(t){t(q.fetchContactRequest),B.a.get("/contacts").then((function(e){var n=e.data;return t(q.fetchContactSuccess(n))})).catch((function(e){return t(q.fetchContactError(e))}))}))}),[t]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(D.a,{}),Object(u.jsxs)(d,{children:[Object(u.jsx)("h1",{className:s.a.container__label,children:"Phonebook"}),Object(u.jsx)(j,{onSubmit:function(e){return t((n=e,function(t){var e={id:Object(I.a)(),name:n.name,number:n.number};t(q.addContactRequest),B.a.post("/contacts",e).then((function(e){var n=e.data;return t(q.addContactSuccess(n))})).catch((function(e){return t(q.deleteContactError(e))}))}));var n}}),Object(u.jsx)("h2",{className:s.a.container__contacts,children:"Contacts"}),Object(u.jsx)(A,{}),Object(u.jsx)(J,{})]})]})}),W=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),o(t),r(t)}))},$=n(19),Q=n(36),U=n.n(Q),V=n(9),G=n(4),H=Object(C.c)([],(M={},Object(V.a)(M,q.fetchContactSuccess,(function(t,e){return e.payload})),Object(V.a)(M,q.addContactSuccess,(function(t,e){return P.store.addNotification({title:"Congratulations!",message:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a",type:"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3,onScreen:!0}}),[].concat(Object($.a)(t),[e.payload])})),Object(V.a)(M,q.deleteContactSuccess,(function(t,e){return P.store.addNotification({title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f!",message:"\u041a\u043e\u043d\u0441\u0442\u0430\u043a\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d",type:"warning",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:2e3,onScreen:!0},touchSlidingExit:{swipe:{duration:400,timingFunction:"ease-out",delay:0},fade:{duration:400,timingFunction:"ease-out",delay:0}}}),t.filter((function(t){return t.id!==e.payload}))})),M)),K=Object(C.c)([],Object(V.a)({},q.filter,(function(t,e){return[e.payload.toLowerCase()]}))),X=Object(G.b)({items:H,filter:K}),Y=[].concat(Object($.a)(Object(C.d)()),[U.a]),tt=Object(C.a)({reducer:{contacts:X},middleware:Y,devTools:!1});r.a.render(Object(u.jsxs)(a.a.StrictMode,{children:[Object(u.jsx)(O.a,{store:tt,children:Object(u.jsx)(T,{})}),";"]}),document.getElementById("root")),W()}},[[89,1,2]]]);
//# sourceMappingURL=main.c0105de3.chunk.js.map