(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{38:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(25),i=a.n(n),r=a(9),o=a(2),j=(a(38),a(1));var l=function(){return Object(j.jsxs)("div",{className:"navBar",children:[Object(j.jsx)("div",{className:"navBar__logo",children:Object(j.jsx)(r.b,{to:"/",children:"Movie App"})}),Object(j.jsx)("div",{className:"navBar__navigation",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/about",children:"About"})})]})}),Object(j.jsx)("div",{className:"navBar__icon"})]})},m=a(15),d=a.n(m),b=a(28),v=a(29),h=a(30),u=a(33),x=a(32),O=a(31),p=a.n(O);var _=function(e){var t=e.id,a=e.year,s=e.title,c=(e.summary,e.poster),n=e.genres;return Object(j.jsxs)("div",{className:"movie","data-id":t,children:[Object(j.jsxs)("h3",{className:"movie__title",children:[s," ",Object(j.jsx)("span",{className:"movie__title-icon",children:Object(j.jsx)("i",{className:"fas fa-arrow-right"})})]}),Object(j.jsxs)("div",{className:"movie__year",children:[Object(j.jsxs)("h3",{className:"movie__year-title",children:[a,n.map((function(e,t){return Object(j.jsx)("span",{className:"movie__genre",children:e},t)}))]}),Object(j.jsx)("span",{className:"movie__year-hrForm",children:Object(j.jsx)("hr",{className:"movie__year-hr"})})]}),Object(j.jsx)("img",{className:"movie__image",src:c,alt:s,title:s})]})},g=(a(65),function(e){Object(u.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(v.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!0,movie:[]},e.getMovies=Object(b.a)(d.a.mark((function t(){var a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=t.sent,s=a.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(j.jsx)("section",{className:"container",children:t?Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("span",{className:"Loader__text",children:"loading..."})}):Object(j.jsx)("div",{className:"movies",children:a.map((function(e){return Object(j.jsx)(_,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),a}(c.a.Component));var f=function(){return Object(j.jsxs)(j.Fragment,{children:[" ",Object(j.jsx)("p",{children:"abc"})," "]})};var N=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(r.a,{children:[Object(j.jsx)(l,{}),Object(j.jsx)(o.a,{path:"/",exact:!0,component:g}),Object(j.jsx)(o.a,{path:"/about",component:f})]}),Object(j.jsx)("footer",{className:"footer",children:"\xa9 2021 B41"})]})};i.a.render(Object(j.jsx)(N,{}),document.getElementById("potato"))}},[[66,1,2]]]);
//# sourceMappingURL=main.e7e851a1.chunk.js.map