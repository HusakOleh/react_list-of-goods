(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n,r=s(3),o=s.n(r),i=s(4),c=s(5),a=s(8),l=s(6),u=s(7),h=s(1),b=(s(13),s(14),s(0)),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var p=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={isReversed:!1,sortType:n.NONE},t.handleSortAlphabetic=function(){t.setState({sortType:n.ALPHABET})},t.handleSortLength=function(){t.setState({sortType:n.LENGTH})},t.handleSortReverse=function(){t.state.isReversed?t.setState({isReversed:!1}):t.setState({isReversed:!0})},t.handleReset=function(){t.setState({sortType:n.NONE,isReversed:!1})},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isReversed,s=t.sortType,r=function(t,e){var s=e.sortType,r=e.isReversed,o=Object(u.a)(t);return s===n.ALPHABET&&o.sort((function(t,e){return t.localeCompare(e)})),s===n.LENGTH&&o.sort((function(t,e){return t.length-e.length})),r&&o.reverse(),console.log(s,r),o}(d,this.state);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:s===n.ALPHABET?"button is-info":"button is-info is-light",onClick:this.handleSortAlphabetic,children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:s===n.LENGTH?"button is-success":"button is-success is-light",onClick:this.handleSortLength,children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:e?"button is-warning":"button is-warning is-light",onClick:this.handleSortReverse,children:"Reverse"}),(e||!!s)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleReset,children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:r.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(h.Component);o.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cf713504.chunk.js.map