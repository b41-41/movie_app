(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var s=a(2),i=a.n(s),n=a(14),r=a.n(n),c=a(5),o=a.n(c),m=a(15),l=a(16),j=a(17),d=a(20),v=a(19),u=a(18),h=a.n(u),p=a(0);var b=function(e){var t=e.id,a=e.year,s=e.title,i=(e.summary,e.poster),n=e.genres;return Object(p.jsxs)("div",{className:"movie","data-id":t,children:[Object(p.jsxs)("h3",{className:"movie__title",children:[s," ",Object(p.jsx)("span",{className:"movie__title-icon",children:Object(p.jsx)("i",{className:"fas fa-arrow-right"})})]}),Object(p.jsxs)("div",{className:"movie__year",children:[Object(p.jsxs)("h3",{className:"movie__year-title",children:[a,n.map((function(e,t){return Object(p.jsx)("span",{className:"movie__genre",children:e},t)}))]}),Object(p.jsx)("span",{className:"movie__year-hrForm",children:Object(p.jsx)("hr",{className:"movie__year-hr"})})]}),Object(p.jsx)("img",{className:"movie__image",src:i,alt:s,title:s})]})},_=(a(46),function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movie:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=t.sent,s=a.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(p.jsx)("section",{className:"container",children:t?Object(p.jsx)("div",{className:"loader",children:Object(p.jsx)("span",{className:"Loader__text",children:"loading..."})}):Object(p.jsx)("div",{className:"movies",children:a.map((function(e){return Object(p.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),a}(i.a.Component));r.a.render(Object(p.jsx)(_,{}),document.getElementById("potato"))}},[[47,1,2]]]);
//# sourceMappingURL=main.e02994c7.chunk.js.map