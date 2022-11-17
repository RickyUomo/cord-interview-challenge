(this["webpackJsonpcord-frontend-challenge"]=this["webpackJsonpcord-frontend-challenge"]||[]).push([[0],{72:function(e,n,t){},73:function(e,n,t){},74:function(e,n,t){},75:function(e,n,t){},76:function(e,n,t){},77:function(e,n,t){"use strict";t.r(n);var a,i,r,c,s,o,u,l,d,b=t(1),j=t.n(b),h=t(36),p=t.n(h),m=t(4),O=t(5),g=t(6),A=t(8),f=t(7),v=t(3),x=t(12),w=t(16),y=t(37),k=t(38),N=t(0),C="#001e2d",R=t(2),S=(j.a.Component,v.b.div(a||(a=Object(m.a)(["\n  z-index: 9;\n  width: 250px;\n  height: 100%;\n  background-color: ",";\n  display:flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  left: ",";\n  transition: 400ms;\n\n  @media(max-width: 600px){\n    width: 100%;\n    left: ",";\n  }\n"])),C,(function(e){return e.isOpen?"0":"-100%"}),(function(e){return e.isClicked?"-100%":"0"}))),F=Object(v.b)(w.a)(i||(i=Object(m.a)(["\n  position: relative;\n  display: block;\n  padding: 25px 35px;\n  font-size: 1.6em;\n  font-weight: 700;\n  color: white;\n  text-align: center;\n\n  &:hover{\n    color: #DFDFDF;\n  }\n"]))),U=v.b.div(r||(r=Object(m.a)(["\n  position: absolute;\n  left: 10%;\n  top: 30%;\n\n  @media(max-width: 600px){\n    left: 20%;\n  }\n  \n"]))),B=v.b.div(c||(c=Object(m.a)(["\n  text-align: center;\n  font-size: 1.3rem;\n  margin-top: 0.7rem;\n"]))),E=v.b.div(s||(s=Object(m.a)(["\n\n"]))),M=Object(v.b)(w.a)(o||(o=Object(m.a)(["\n  display: block;\n  color: white;\n  text-align: center;\n  margin-top: 0.3rem;\n\n  &:hover{\n    color: #DFDFDF;\n  }\n"]))),I=v.b.div(u||(u=Object(m.a)(["\n  position: fixed;\n  top: 0;\n  width: 250px;\n  z-index: 9;\n  background-color: ",";\n  height: 80px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  @media (max-width: 600px){\n    width: 100%;\n  }\n"])),C),Q=Object(v.b)(w.a)(l||(l=Object(m.a)(["\n  margin-left: 2rem;\n  font-size: 2rem;\n  height: 80px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"]))),D=t(11),G=t.n(D),W=t(19),z=t(20),L=t.n(z),H="393cf5b38d4a5f8e7d1a4ceae325255c",T="https://api.themoviedb.org/3",J=function(){var e=Object(W.a)(G.a.mark((function e(){var n,t,a,i=arguments;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:"Harry",t=i.length>1?i[1]:void 0,e.next=4,L.a.get("".concat(T,"/search/movie?api_key=").concat(H,"&language=en-US&query=").concat(n,"&primary_release_year=").concat(t)).then((function(e){return e.data.results}));case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(W.a)(G.a.mark((function e(){var n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("".concat(T,"/movie/popular?api_key=").concat(H,"&language=en-US")).then((function(e){return e.data.results}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(W.a)(G.a.mark((function e(){var n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("".concat(T,"/genre/movie/list?api_key=").concat(H,"&language=en-US")).then((function(e){return e.data.genres}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=(t(72),t(73),function(e){Object(A.a)(t,e);var n=Object(f.a)(t);function t(e){var a;return Object(O.a)(this,t),(a=n.call(this,e)).state={width:window.innerWidth},a.updateWidth=a.updateWidth.bind(Object(x.a)(a)),a}return Object(g.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWidth)}},{key:"updateWidth",value:function(){this.setState({width:window.innerWidth})}},{key:"render",value:function(){var e=this.props,n=e.title,t=e.filter,a=this.state.width;return Object(R.jsxs)(P,{children:[Object(R.jsx)("h3",{children:n}),Object(R.jsx)("div",{className:"checkContainer",children:t.map((function(e){return Object(R.jsx)("div",{className:"checkItem",children:Object(R.jsxs)("label",{className:"checkLabel",children:[Object(R.jsx)("input",{type:"checkbox"}),a<=900?Object(R.jsx)("br",{}):"",e.name]})},e.id)}))})]})}}]),t}(j.a.Component)),P=v.b.div(d||(d=Object(m.a)(["\n  position: relative;\n"]))),q=function(e){Object(A.a)(t,e);var n=Object(f.a)(t);function t(e){var a;return Object(O.a)(this,t),(a=n.call(this,e)).state={filtersShown:!1},a}return Object(g.a)(t,[{key:"render",value:function(){var e=this,n=this.props,t=n.genres,a=n.ratings,i=n.languages,r=this.state.filtersShown;return Object(R.jsxs)("div",{className:"expandWrapper",children:[Object(R.jsx)("img",{className:"filterIcon",onClick:function(){return e.setState({filtersShown:!r})},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAAXNSR0IArs4c6QAAALhJREFUWIXtljEOwjAMRb/hJCkLvRgco2HjBHC0stDcg8UMDAiRtrFbUyr5jVFaPcnRkwHHkUGSy22qIoAjMW2Z+FKHLi4i06YqEqh5n/CDgXMduqb/K6XMLe14+Crj2z13Jmcf7gQAm8l/mpH/HFOh0ImAA14P+DqniONomB6JESTVNpWR5kBQYA1l1V53gTWox2Qo5NV2zOh9wNb7brHMLxapQZnPAtvtuznWU+DFx5QR8nI6joQnUotyFuz+rJoAAAAASUVORK5CYII="}),Object(R.jsxs)("div",{className:"collapase ".concat(r?"show":"hide"),children:[Object(R.jsx)(Y,{title:"GENRES",filter:t}),Object(R.jsx)(Y,{title:"RATING",filter:a}),Object(R.jsx)(Y,{title:"LANGUAGES",filter:i})]})]})}}]),t}(j.a.Component),K=t(17),X=t(25),_=t(18);t(74);function $(e,n){var t=Object(b.useState)(e),a=Object(_.a)(t,2),i=a[0],r=a[1];return Object(b.useEffect)((function(){var t=setTimeout((function(){r(e)}),n);return function(){clearTimeout(t)}}),[e]),i}var ee;function ne(e){var n=Object(b.useState)({keyword:"",year:""}),t=Object(_.a)(n,2),a=t[0],i=t[1],r=$(a.keyword,500),c=$(a.year,500);Object(b.useEffect)((function(){(r||c)&&e.searchMovies(a.keyword,a.year)}),[r,c]);var s=function(e){var n=e.target,t=n.value,r=n.name;i(Object(X.a)(Object(X.a)({},a),{},Object(K.a)({},r,t)))};return Object(R.jsx)(me,{children:Object(R.jsxs)("form",{children:[Object(R.jsxs)("div",{className:"searchWrapper",children:[Object(R.jsx)("img",{className:"searchIcon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAY9JREFUeNrUlt9NwzAQxutM0BHCE49kgzYT0A2aTMAICRMUJoiZoGGClAkIjzzhETICZ+mzdLJix3FNJU6yLLdX/3x//LmbzQ1NhDp+q7ucphzL8T7/mZLCCLCn6UjjQGNrfa1o9DReCayiYQTRG59p7NnHOpIR0ML6yTMB29UwAumNBhaJxOlHy09H+8QOJMmnDoYhok/URm9e25CZw1U0dSHAzFp3DFQugbSRj468xLJCxH4YmsE41mu6jXwvum5YnkIiO7JUjBHX6AVNlLui4zBT6LeYC4tMSCx3S7CcpSTWPjAXThjUIYV565whGnULbcwc6hFrhS9CDjO1OlwB21m1c8LeMTcxFMicOWi/BJPsnrQRPC5ZygvDPTG61kDzQiLa0uhQr4kpSZDq6x9WLB1O6YLEnVhj1NDKVe9Za9VOb/AFgTZq8zhzeSefgIuFV7qxHtA5k0jdmaVyFihWdNkDe1AV2rs3Kcb9HHxAkVIhloAitST5gFlqGNJasj9Hg1Mb/wB4rd7+A/sVYACAOKWwy2MgTQAAAABJRU5ErkJggg=="}),Object(R.jsx)("input",{className:"searchInput",type:"text",name:"keyword",placeholder:"Harry Potter",onChange:s,value:a.keyword})]}),Object(R.jsxs)("div",{className:"searchWrapper",children:[Object(R.jsx)("img",{className:"searchIcon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAYAAAAV1F8QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAG1JREFUeNpiYBgs4OYDxfMgTKkaFiLsMqCGGiZ6hQwjehAQ6QNiwQV1hfuG2HxkQGWPGOCNI6ArGKmQiP4PSBzRzSIWQvmDxHiDR/7g9BEu1w3qOBq1aNSiQZKP0AtEWvjoApXNv8AwbAFAgAEAigMfZNd9YtsAAAAASUVORK5CYII="}),Object(R.jsx)("input",{className:"searchInput",type:"number",name:"year",placeholder:"Year",onChange:s,value:a.year})]})]})})}var te,ae,ie,re,ce,se,oe,ue,le,de,be,je,he,pe,me=v.b.div(ee||(ee=Object(m.a)(["\n\n"]))),Oe=function(e){Object(A.a)(t,e);var n=Object(f.a)(t);function t(){return Object(O.a)(this,t),n.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){var e=this.props,n=e.genres,t=e.ratings,a=e.languages,i=e.searchMovies;return Object(R.jsxs)(ge,{children:[Object(R.jsx)(Ae,{className:"search_inputs_cont",marginBottom:!0,children:Object(R.jsx)(ne,{searchMovies:i})}),Object(R.jsxs)(Ae,{children:[Object(R.jsx)(fe,{children:"Movies"}),Object(R.jsx)(q,{genres:n,ratings:t,languages:a})]})]})}}]),t}(j.a.Component),ge=v.b.div(te||(te=Object(m.a)(["\n  position: relative;\n\n"]))),Ae=v.b.div(ae||(ae=Object(m.a)(["\n  background-color: white;\n  padding: 20px;\n  border-radius: 3px;\n  transition: all .3s ease-in-out;\n  ","\n\n  ","\n  \n  ","\n"])),"","",(function(e){return e.marginBottom&&Object(v.a)(ie||(ie=Object(m.a)(["\n    margin-bottom: 15px;\n  "])))})),fe=v.b.div(re||(re=Object(m.a)(["\n  font-weight: 900;\n  font-size: 2rem;\n"]))),ve=(t(75),function(e){Object(A.a)(t,e);var n=Object(f.a)(t);function t(){return Object(O.a)(this,t),n.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){var e=this.props.movies;return Object(R.jsx)(xe,{className:"wrapper",children:Object(R.jsx)(we,{children:e.map((function(e){return Object(R.jsxs)("div",{className:"movieItem",children:[Object(R.jsx)("img",{className:"movieImg",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(e.poster_path)}),Object(R.jsx)("h3",{className:"movieTitle",children:e.title}),Object(R.jsxs)("p",{className:"movieRelease",children:["RELEASE DATE: ",e.release_date]}),Object(R.jsx)("p",{className:"movieOverview",children:e.overview})]},e.id)}))})})}}]),t}(j.a.Component)),xe=v.b.div(ce||(ce=Object(m.a)(["\n  position: relative;\n  background-color: white;\n  border-radius: 3px;\n  margin-top: 2rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n"]))),we=v.b.div(se||(se=Object(m.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n\n  @media(max-width: 1125px){\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n"]))),ye=function(e){Object(A.a)(t,e);var n=Object(f.a)(t);function t(){return Object(O.a)(this,t),n.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){var e=this.props,n=e.movies,t=e.genres;return Object(R.jsx)(ke,{children:Object(R.jsx)(ve,{movies:n,genres:t})})}}]),t}(j.a.Component),ke=v.b.div(oe||(oe=Object(m.a)(["\n  position: relative;\n"]))),Ne=function(e){Object(A.a)(t,e);var n=Object(f.a)(t);function t(e){var a;return Object(O.a)(this,t),(a=n.call(this,e)).state={keyword:"",year:0,results:[],totalCount:0,genreOptions:[],ratingOptions:[{id:7.5,name:7.5},{id:8,name:8},{id:8.5,name:8.5},{id:9,name:9},{id:9.5,name:9.5},{id:10,name:10}],languageOptions:[{id:"GR",name:"Greek"},{id:"EN",name:"English"},{id:"RU",name:"Russian"},{id:"PO",name:"Polish"}]},a}return Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this;Z().then((function(n){e.setState({results:n,totalCount:n.length})})),V().then((function(n){return e.setState({genreOptions:n})}))}},{key:"searchMovies",value:function(e,n){var t=this;J(e,n).then((function(e){return t.setState({results:e,totalCount:e.length})}))}},{key:"render",value:function(){var e=this,n=this.state,t=n.genreOptions,a=n.languageOptions,i=n.ratingOptions,r=n.totalCount,c=n.results;return Object(R.jsxs)(Ce,{children:[Object(R.jsx)(Ue,{children:"Discover"})," ",Object(R.jsx)(Fe,{children:Object(R.jsx)(Oe,{genres:t,ratings:i,languages:a,searchMovies:function(n,t){return e.searchMovies(n,t)}})}),Object(R.jsxs)(Se,{children:[r>0?Object(R.jsxs)(Re,{children:[r," results"]}):Object(R.jsx)(Re,{children:"0 results"}),Object(R.jsx)(ye,{movies:c||[],genres:t||[]})]})]})}}]),t}(j.a.Component),Ce=v.b.main(ue||(ue=Object(m.a)(["\n  padding: 60px 35px;\n"]))),Re=v.b.div(le||(le=Object(m.a)(["\n  font-weight: 900;\n  font-size: 1.5rem;\n  padding-left: 1.5rem;\n  ","\n"])),""),Se=v.b.div(de||(de=Object(m.a)(["\n  margin-top: 2rem;\n"]))),Fe=v.b.div(be||(be=Object(m.a)(["\n\n"]))),Ue=v.b.header(je||(je=Object(m.a)(["\n  visibility: hidden;\n  font-size: 1.8rem;\n  font-weight: 800;\n  padding-left: 1.5rem;\n  margin-bottom: 1rem;\n\n  @media (max-width: 600px){\n    visibility: visible;\n    margin-top: 2.5rem;\n  }\n"]))),Be=(t(76),function(e){Object(A.a)(t,e);var n=Object(f.a)(t);function t(){return Object(O.a)(this,t),n.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(Ne,{})})}}]),t}(j.a.Component));v.b.main(he||(he=Object(m.a)(["\n  padding-left: 280px;\n\n  @media(max-width: 600px){\n    padding: 0;\n  }\n"]))),v.b.main(pe||(pe=Object(m.a)(["\n  overflow-x: hidden;\n"])));p.a.render(Object(R.jsx)(Be,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.cc0196a1.chunk.js.map