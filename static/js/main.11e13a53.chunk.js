(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{45:function(e,s,t){},46:function(e,s,t){"use strict";t.r(s);var a=t(0),c=t(1),l=t.n(c),r=t(29),i=t.n(r);var n=function(){return Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("h6",{id:"footer",children:["Welcome to Mihir's ToDo App",Object(a.jsx)("i",{className:"fas fa-heart",style:{color:"red"}})]})})},o=t(30),d=t(31),j=t(18),m=t(35),b=t(34),h=t(22),u=t(2),p=t(13),O=t(4),x=function(e){var s={};return e.userEmail||(s.userEmail="Required"),/^[a-z0-9._%+-]+@[a-z]+\.[a-z\.]+$/i.test(e.userEmail)||(s.userEmail="Invalid Email"),10!==e.phnum.length&&(s.phnum="Enter valid phone number"),/[0-9]+/.test(e.userName)&&(s.userName="Enter a valid name"),e.password.length<8&&(s.password="Password must be at least 8 characters long"),e.password!==e.password2&&(s.password2="Passwords do not match"),s},f=l.a.useState;var N=function(e){e.props;var s=e.func,t=f(!1),c=Object(p.a)(t,2),l=c[0],r=c[1];return Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsx)(O.d,{initialValues:{userName:"",userEmail:"",phnum:"",password:"",password2:""},validate:x,onSubmit:function(e,t){!function(e,s,t){setTimeout((function(){alert("Form successfully submitted"),t(e),s(!1)}),500)}(e,t.setSubmitting,s),r(!0)},children:Object(a.jsxs)(O.c,{children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"form-label",htmlFor:"userName",children:"Name"}),Object(a.jsx)(O.b,{className:"form-control",id:"userName",type:"text",name:"userName",placeholder:"Mihir"}),Object(a.jsx)("small",{style:{color:"red"},children:Object(a.jsx)(O.a,{className:"form-text",name:"userName"})})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"form-label",htmlFor:"userEmail",children:"Email"}),Object(a.jsx)(O.b,{className:"form-control",id:"userEmail",type:"email",name:"userEmail",placeholder:"mihir123@gmail.com"}),Object(a.jsx)("small",{style:{color:"red"},children:Object(a.jsx)(O.a,{className:"form-text",name:"userEmail"})})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"form-label",htmlFor:"phnum",children:"Phone Number"}),Object(a.jsx)(O.b,{className:"form-control",id:"phnum",name:"phnum",placeholder:"1234567890"}),Object(a.jsx)("small",{style:{color:"red"},children:Object(a.jsx)(O.a,{className:"form-text",name:"phnum"})})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"form-label",htmlFor:"password",children:"Password"}),Object(a.jsx)(O.b,{className:"form-control",id:"password",name:"password",type:"password",placeholder:""}),Object(a.jsx)("small",{style:{color:"red"},children:Object(a.jsx)(O.a,{className:"form-text",name:"password"})})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"form-label",htmlFor:"password2",children:"Retype Password"}),Object(a.jsx)(O.b,{className:"form-control",id:"password2",name:"password2",type:"password",placeholder:""}),Object(a.jsx)("small",{style:{color:"red"},children:Object(a.jsx)(O.a,{className:"form-text",name:"password2"})})]}),Object(a.jsx)("div",{className:"row justify-content-center",children:Object(a.jsx)("button",{className:"btn",id:"submit-button",type:"submit",style:{display:l?"none":""},children:"Register Profile"})}),Object(a.jsx)("div",{className:"row justify-content-center",children:Object(a.jsxs)(h.b,{to:"/todolist",className:"btn",id:"link-button",style:{display:l?"":"none"},children:["Proceed to To-Do App",Object(a.jsx)("i",{className:"fas fa-clipboard-list"})]})})]})})})},v=t(14);var g=function(e,s,t){var a={task:e.task,priority:e.priority};t([].concat(Object(v.a)(s),[a]))},y=function(e){var s={};return 0===e.task.length&&(s.task="Enter name of task"),""===e.priority&&(s.priority="Choose Priority"),s};var w=function(e){var s=e.pendingItems,t=e.setPendingItems,c=e.newItem,l=e.defaultvalues,r=e.setdefaultvalues;return Object(a.jsx)("div",{children:Object(a.jsx)(O.d,{initialValues:{task:l.task,priority:l.priority},validate:y,onSubmit:function(e){g(e,s,t),c(!1),r({task:"",priority:""})},children:Object(a.jsxs)(O.c,{children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"form-label",htmlFor:"task",children:"Task"}),Object(a.jsx)(O.b,{className:"form-control",id:"task",type:"text",name:"task",placeholder:"buy eggs"}),Object(a.jsx)("small",{style:{color:"red"},children:Object(a.jsx)(O.a,{className:"form-text",name:"task"})})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"form-label",htmlFor:"priority",children:"Priority"}),Object(a.jsxs)(O.b,{className:"form-control",id:"priority",as:"select",name:"priority",children:[Object(a.jsx)("option",{value:"",selected:!0,disabled:!0,hidden:!0,children:"Select-priority"}),Object(a.jsx)("option",{value:"low",children:"low"}),Object(a.jsx)("option",{value:"moderate",children:"moderate"}),Object(a.jsx)("option",{value:"high",children:"high"}),Object(a.jsx)("option",{value:"very high",children:"very high"})]}),Object(a.jsx)("small",{style:{color:"red"},children:Object(a.jsx)(O.a,{className:"form-text",name:"priority"})})]}),Object(a.jsx)("button",{className:"btn btn-light",type:"submit",children:" Add new To-Do"})]})})})};var k=function(e,s,t){s.splice(e,1),t(Object(v.a)(s))};var I=function(e){var s=e.pendingItems,t=e.setPendingItems,c=e.completedItems,l=e.setCompletedItems,r=e.setNewItem,i=e.setdefaultvalues,n=0,o=s.map((function(e){var o=n;return Object(a.jsx)("li",{className:"list-group-item",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-2 col-2",children:Object(a.jsx)("button",{className:"list-icons done",onClick:function(){!function(e,s,t,a){a([].concat(Object(v.a)(t),[s[e-1]]))}(o+1,s,c,l),k(o,s,t)},children:Object(a.jsx)("i",{className:"fas fa-check"})})}),Object(a.jsxs)("div",{className:"col-lg-6 col-6",children:[Object(a.jsx)("h6",{children:e.task.toUpperCase()}),e.priority]}),Object(a.jsx)("div",{className:"col-lg-2 col-2",children:Object(a.jsx)("button",{className:"list-icons edit",onClick:function(){r(!0),i({task:s[o].task,priority:s[o].priority}),k(o,s,t)},children:Object(a.jsx)("i",{className:"far fa-edit"})})}),Object(a.jsx)("div",{className:"col-lg-2 col-2",children:Object(a.jsx)("button",{className:"list-icons delete",onClick:function(){k(o,s,t)},children:Object(a.jsx)("i",{className:"fas fa-times"})})})]})},++n)}));return Object(a.jsx)("ul",{className:"list-group",children:o})};var C=function(e){var s=e.completedItems,t=e.setCompletedItems,c=e.pendingItems,l=e.setPendingItems,r=0,i=s.map((function(e){var i=r;return Object(a.jsx)("li",{className:"list-group-item",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-8 col-8 finished",children:Object(a.jsx)("h6",{children:e.task.toUpperCase()})}),Object(a.jsx)("div",{className:"col-lg-2 col-2",children:Object(a.jsx)("button",{className:"list-icons",onClick:function(){g(s[i],c,l),k(i,s,t)},children:Object(a.jsx)("i",{className:"fas fa-redo"})})}),Object(a.jsx)("div",{className:"col-lg-2 col-2",children:Object(a.jsx)("button",{className:"list-icons delete",onClick:function(){k(i,s,t)},children:Object(a.jsx)("i",{className:"fas fa-times"})})})]})},++r)}));return Object(a.jsx)("ul",{className:"list-group",children:i})};var E=function(e){var s=e.name;return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{id:"heading1",children:Object(a.jsxs)("h3",{children:[Object(a.jsx)("i",{className:"fas fa-clipboard-list"})," To-Do App"]})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("h5",{children:["Welcome ",s.toUpperCase()]})})]})},P=l.a.useState;var F=function(e){var s=e.props,t=P([]),c=Object(p.a)(t,2),l=c[0],r=c[1],i=P([]),n=Object(p.a)(i,2),o=n[0],d=n[1],j=P(!1),m=Object(p.a)(j,2),b=m[0],h=m[1],u=P({task:"",priority:""}),O=Object(p.a)(u,2),x=O[0],f=O[1],N=s.userName;return Object(a.jsxs)("div",{children:[Object(a.jsx)(E,{name:N}),!0===b?Object(a.jsx)("div",{id:"input-data",children:Object(a.jsx)(w,{pendingItems:l,setPendingItems:r,newItem:h,defaultvalues:x,setdefaultvalues:f})}):"",Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-6 col-xs-12",children:Object(a.jsxs)("div",{id:"pending-items",children:[Object(a.jsx)("h2",{children:"Pending tasks"}),0===l.length?Object(a.jsx)("label",{className:"no-tasks",children:"No tasks pending"}):Object(a.jsx)(I,{pendingItems:l,setPendingItems:r,completedItems:o,setCompletedItems:d,setNewItem:h,setdefaultvalues:f})]})}),Object(a.jsx)("div",{className:"col-lg-6 col-xs-12",children:Object(a.jsxs)("div",{id:"completed-items",children:[Object(a.jsx)("h2",{children:"Completed tasks"}),0===o.length?Object(a.jsx)("label",{className:"no-tasks",children:"No tasks completed"}):Object(a.jsx)(C,{completedItems:o,setCompletedItems:d,pendingItems:l,setPendingItems:r})]})})]}),Object(a.jsx)("div",{className:"row justify-content-center",children:Object(a.jsxs)("button",{className:"btn",id:"add-item",onClick:function(){h(!0)},children:[" ",Object(a.jsxs)("h6",{children:["Add new Item".toUpperCase(),Object(a.jsx)("i",{className:"fas fa-pen-square"})]})]})})]})};var S=function(){return Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("h3",{id:"heading1",children:[Object(a.jsx)("i",{className:"far fa-user-circle"})," Registration Page"]})})},T=function(e){Object(m.a)(t,e);var s=Object(b.a)(t);function t(){var e;return Object(o.a)(this,t),(e=s.call(this)).state={userName:"",userEmail:"",phnum:"",password:""},e.handleChange=e.handleChange.bind(Object(j.a)(e)),e}return Object(d.a)(t,[{key:"handleChange",value:function(e){this.setState({userName:e.userName,userEmail:e.userEmail,phnum:e.phnum,password:e.password})}},{key:"render",value:function(){var e=this.state,s=e.userName,t=e.userEmail,c=e.phnum,l=e.password;return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(h.a,{children:Object(a.jsxs)(u.c,{children:[Object(a.jsx)(u.a,{exact:!0,path:"/",children:Object(a.jsxs)("div",{className:"row justify-content-center",children:[Object(a.jsx)(S,{}),Object(a.jsx)("div",{className:" col-lg-5 col-12",id:"signup-page",children:Object(a.jsx)(N,{props:{userName:s,userEmail:t,phnum:c,password:l},func:this.handleChange})})]})}),Object(a.jsx)(u.a,{path:"/todolist",children:Object(a.jsx)("div",{className:"col-12 col-lg-12",id:"todo-page",children:Object(a.jsx)(F,{props:{userName:s,userEmail:t,phnum:c,password:l}})})})]})})})}}]),t}(c.Component);var A=function(){return Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsx)(T,{id:"MainPage"}),Object(a.jsx)(n,{})]})};t(45);i.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.11e13a53.chunk.js.map