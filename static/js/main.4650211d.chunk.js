(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(4),r=n.n(o),s=(n(15),n(5)),i=n(6),b=n(7),d=n(10),u=n(9),l=n(0),j=function(e){var t=e.title,n=e.children;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{children:t}),n]})},h=n(3),v=n.n(h),x=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(l.jsx)("div",{className:v.a.buttonBox,children:t.map((function(e){return Object(l.jsx)("button",{type:"button",name:e,onClick:n,className:v.a.button,children:e},e)}))})},p=n(8),O=n.n(p),f=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positivePercentage;return Object(l.jsxs)("div",{className:O.a.statBox,children:[Object(l.jsxs)("p",{children:["Good: ",t]}),Object(l.jsxs)("p",{children:["Neutral: ",n]}),Object(l.jsxs)("p",{children:["Bad: ",a]}),Object(l.jsxs)("p",{children:["Total: ",c]}),Object(l.jsxs)("p",{children:["Positive feedback: ",o,"%"]})]})},k=function(e){var t=e.message;return Object(l.jsx)("p",{children:t})},g=(n(17),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.countTotalFeedback();return n>0?Math.round(t/n*100):0},e.onLeaveFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(s.a)({},n,e[n]+1)}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(),o=this.countPositiveFeedbackPercentage(),r=this.onLeaveFeedback;return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{title:"Please leave feedback",children:Object(l.jsx)(x,{options:["good","neutral","bad"],onLeaveFeedback:r})}),c>0?Object(l.jsx)(j,{title:"Statistics",children:Object(l.jsx)(f,{good:t,neutral:n,bad:a,total:c,positivePercentage:o})}):Object(l.jsx)(k,{message:"No feedback given"})]})}}]),n}(a.Component));n(18);r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={buttonBox:"FeedbackOptions_buttonBox__3xHH-",button:"FeedbackOptions_button__1_1oS"}},8:function(e,t,n){e.exports={statBox:"Statistics_statBox__21vFB"}}},[[19,1,2]]]);
//# sourceMappingURL=main.4650211d.chunk.js.map