(this.webpackJsonpmarvel_app=this.webpackJsonpmarvel_app||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(10),s=a.n(c),i=a(2),o=a(3),l=a(5),h=a(4),d=(a(15),a(0)),u=function(){return Object(d.jsxs)("header",{className:"app__header",children:[Object(d.jsx)("h1",{className:"app__title",children:Object(d.jsxs)("a",{href:"#",children:[Object(d.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(d.jsx)("nav",{className:"app__menu",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Comics"})})]})})]})},j=(a(17),a.p+"static/media/mjolnir.61f31e18.png"),m=a(6),b=a.n(m),p=a(7),_=function e(){var t=this;Object(i.a)(this,e),this._baseUrl="https://gateway.marvel.com:443/v1/public/",this._apiKey="apikey=1d84e832d56bee2cc469d294f4e1f0be",this._baseOffset=210,this.getResource=function(){var e=Object(p.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}return e.abrupt("return",new Error("Could not fetch ".concat(t,", status: ").concat(a.status)));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(p.a)(b.a.mark((function e(){var a,n,r=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:t._baseOffset,e.next=3,t.getResource("".concat(t._baseUrl,"characters?limit=9&offset=").concat(a,"&").concat(t._apiKey));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(t._transformCharacter));case 5:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(p.a)(b.a.mark((function e(a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._baseUrl,"characters/").concat(a,"?").concat(t._apiKey));case 2:return n=e.sent,e.abrupt("return",t._transformCharacter(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{id:e.id,name:e.name,description:e.description,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}}},f=(a(19),function(){return Object(d.jsxs)("div",{className:"spinner",children:[Object(d.jsx)("div",{className:"blob top"}),Object(d.jsx)("div",{className:"blob bottom"}),Object(d.jsx)("div",{className:"blob left"}),Object(d.jsx)("div",{className:"blob move-blob"})]})}),O=a.p+"static/media/error.42292aa1.gif",v=function(){return Object(d.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:O,alt:"Error"})},x=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={char:{},loading:!0,error:!1},e.marvelService=new _,e.componentDidMount=function(){e.updateCharacter()},e.componentWillUnmount=function(){},e.onChatLoaded=function(t){e.setState({char:t,loading:!1})},e.onCharLoading=function(){e.setState({loading:!0})},e.onError=function(){e.setState({loading:!1,error:!0})},e.updateCharacter=function(){var t=Math.floor(395*Math.random()+1011005);e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onChatLoaded).catch(e.onError)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,n=e.error,r=a?Object(d.jsx)(f,{}):null,c=n?Object(d.jsx)(v,{}):null,s=a||n?null:Object(d.jsx)(g,{props:t});return Object(d.jsxs)("div",{className:"randomchar",children:[c,r,s,Object(d.jsxs)("div",{className:"randomchar__static",children:[Object(d.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(d.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(d.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(d.jsx)("button",{className:"button button__main",onClick:this.updateCharacter,children:Object(d.jsx)("div",{className:"inner",children:"try it"})}),Object(d.jsx)("img",{src:j,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),a}(n.Component),g=function(e){var t=e.props,a=t.name,n=t.description,r=t.thumbnail,c=t.homepage,s=t.wiki,i=n?n.slice(0,220)+"...":"Information for this character is not available.",o="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r?"randomchar__img randomchar__contain":"randomchar__img";return Object(d.jsxs)("div",{className:"randomchar__block",children:[Object(d.jsx)("img",{src:r,alt:"Random character",className:o}),Object(d.jsxs)("div",{className:"randomchar__info",children:[Object(d.jsx)("p",{className:"randomchar__name",children:a}),Object(d.jsx)("p",{className:"randomchar__descr",children:i}),Object(d.jsxs)("div",{className:"randomchar__btns",children:[Object(d.jsx)("a",{href:c,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:s,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},N=x,C=a(9),k=(a(20),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={charList:[],loading:!0,error:!1,newItemLoading:!1,offset:210,charEnded:!1,isActive:null},e.marvelService=new _,e.componentDidMount=function(){e.onRequest()},e.onRequest=function(t){e.onCharLoading(),e.marvelService.getAllCharacters(t).then(e.onCharactersLoaded).catch(e.onError)},e.onCharLoading=function(){e.setState({newItemLoading:!0})},e.onCharactersLoaded=function(t){var a=!1;t.length<9&&(a=!0),e.setState((function(){return{charList:[].concat(Object(C.a)(e.state.charList),Object(C.a)(t)),loading:!1,newItemLoading:!1,offset:e.state.offset+9,charEnded:a}}))},e.onError=function(){e.setState({loading:!1,error:!0})},e.focusOnItem=function(t){e.setState({isActive:t})},e.renderItems=function(t){var a=t.map((function(t){var a="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail?"char__img char__img_unset":"char__img";return Object(d.jsxs)("li",{className:e.state.isActive===t.id?"char__item char__item_selected":"char__item",onClick:function(){return e.focusOnItem(t.id)},children:[Object(d.jsx)("img",{className:a,src:t.thumbnail,alt:t.name,onClick:function(){return e.props.onCharSelected(t.id)}}),Object(d.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(d.jsx)("ul",{className:"char__grid",children:a})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.charList,n=t.loading,r=t.error,c=t.newItemLoading,s=t.offset,i=t.charEnded,o=this.renderItems(a),l=r?Object(d.jsx)(v,{}):null,h=n?Object(d.jsx)(f,{}):null,u=!(r||n)&&o,j=i?"button_none":"button button__main button__long";return Object(d.jsxs)("div",{className:"char__list",children:[l,h,u,Object(d.jsx)("button",{className:j,disabled:c,onClick:function(){return e.onRequest(s)},children:Object(d.jsx)("div",{className:"inner",children:"load more"})})]})}}]),a}(n.Component)),y=(a(21),a(22),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(d.jsxs)("div",{className:"skeleton",children:[Object(d.jsxs)("div",{className:"pulse skeleton__header",children:[Object(d.jsx)("div",{className:"pulse skeleton__circle"}),Object(d.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"})]})]})}),w=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={char:null,loading:!1,error:!1},e.marvelService=new _,e.updateCharacter=function(){var t=e.props.charId;t&&(e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onChatLoaded).catch(e.onError))},e.onChatLoaded=function(t){e.setState({char:t,loading:!1})},e.onCharLoading=function(){e.setState({loading:!0})},e.onError=function(){e.setState({loading:!1,error:!0})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateCharacter()}},{key:"componentDidUpdate",value:function(e){e.charId!==this.props.charId&&this.updateCharacter()}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,n=e.error,r=n?Object(d.jsx)(v,{}):null,c=a?Object(d.jsx)(f,{}):null,s=t||n||a?null:Object(d.jsx)(y,{}),i=!(n||a||!t)&&Object(d.jsx)(S,{char:t});return Object(d.jsxs)("div",{className:"char__info",children:[r,c,s,i]})}}]),a}(n.Component),S=function(e){var t=e.char,a=t.name,n=t.description,r=t.thumbnail,c=t.homepage,s=t.wiki,i=t.comics,o=n||"Information for this character is not available.",l="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r?"char__image char__image_unset":"char__image",h=i.length?i.slice(0,9).map((function(e,t){return Object(d.jsx)("li",{className:"char__comics-item",children:e.name},t)})):"There is no comics with this character.";return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"char__basics",children:[Object(d.jsx)("img",{className:l,src:r,alt:a}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"char__info-name",children:a}),Object(d.jsxs)("div",{className:"char__btns",children:[Object(d.jsx)("a",{href:c,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:s,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(d.jsx)("div",{className:"char__descr",children:o}),Object(d.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(d.jsx)("ul",{className:"char__comics-list",children:h})]})},L=w,I=a.p+"static/media/vision.067d4ae1.png",E=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(o.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(d.jsx)(v,{}):this.props.children}}]),a}(n.Component),A=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedChar:null},e.onCharSelected=function(t){e.setState({selectedChar:t})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(u,{}),Object(d.jsxs)("main",{children:[Object(d.jsx)(E,{children:Object(d.jsx)(N,{})}),Object(d.jsxs)("div",{className:"char__content",children:[Object(d.jsx)(E,{children:Object(d.jsx)(k,{onCharSelected:this.onCharSelected})}),Object(d.jsx)(E,{children:Object(d.jsx)(L,{charId:this.state.selectedChar})})]}),Object(d.jsx)("img",{className:"bg-decoration",src:I,alt:"vision"})]})]})}}]),a}(n.Component);a(23);s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.7c3024fc.chunk.js.map