(this.webpackJsonpmonster=this.webpackJsonpmonster||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),s=n.n(r),o=(n(13),n(5)),i=n(6),u=n(8),d=n(7),l=(n(14),n(0)),h=function(e){return Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsx)("img",{alt:"props.data.name",src:"https://robohash.org/".concat(e.data.id,"?set=set2&size=180x180")}),Object(l.jsx)("h2",{children:e.data.name}),Object(l.jsx)("p",{children:e.data.email})]})},j=(n(3),function(e){return Object(l.jsx)("div",{className:"card-list",children:e.data.map((function(e){return Object(l.jsx)(h,{data:e},e.id)}))})}),p=function(e){var t=e.placeholder,n=e.Handle;return Object(l.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})},f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={monster:[],searchFiled:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monster:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monster,c=t.searchFiled,a=n.filter((function(e){return e.name.toLowerCase().includes(c.toLocaleLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(p,{placeholder:"search Monster",Handle:function(t){return e.setState({searchFiled:t.target.value})}}),Object(l.jsx)(j,{data:a})]})}}]),n}(c.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),b()},3:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.95e7cde8.chunk.js.map