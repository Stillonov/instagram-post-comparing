(this["webpackJsonpinstagram-posts-comparing"]=this["webpackJsonpinstagram-posts-comparing"]||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var a=s(0),n=s(1),c=s.n(n),r=s(7),o=s.n(r),i=(s(14),s(3)),l=s.n(i),u=s(4),p=s(6),h=s.n(p),d=s(8),j=s(2),b=s.n(j),_=function(){var t=Object(d.a)(h.a.mark((function t(e){var s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://graph.facebook.com/v8.0/instagram_oembed?url=".concat(e,"&access_token=").concat("722246511978459","|").concat("87a7cd3f13b5d943b63456262f0074e3"));case 2:if(!(s=t.sent).ok){t.next=9;break}return t.next=6,s.json();case 6:return t.abrupt("return",t.sent);case 9:console.log("\u041e\u0448\u0438\u0431\u043a\u0430 HTTP: ".concat(s.status));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(n.useState)(""),e=Object(u.a)(t,2),s=e[0],c=e[1],r=Object(n.useState)(null),o=Object(u.a)(r,2),i=o[0],l=o[1],p=Object(n.useState)(!1),h=Object(u.a)(p,2),d=h[0],j=h[1];return Object(n.useEffect)((function(){s&&s.trim()&&_(s).then((function(t){j(!1),l({width:t.thumbnail_width,height:t.thumbnail_height,url:t.thumbnail_url})})).catch((function(){j(!0)}))}),[s]),Object(a.jsxs)("div",{className:b.a.Post,children:[Object(a.jsxs)("div",{className:b.a.PostHeader,children:[Object(a.jsx)("input",{className:"".concat(b.a.PostTextField," ").concat(d?b.a.PostTextFieldError:""),name:"url",placeholder:"Insert the Instagram post link",value:s,onChange:function(t){c(t.target.value)}}),!d&&i&&i.width&&i.height&&Object(a.jsxs)("div",{className:b.a.PostMeta,children:[Object(a.jsxs)("p",{children:["size: ",i.width," x ",i.height]}),Object(a.jsxs)("p",{children:["ratio: ",(i.width/i.height).toFixed(3)]})]})]}),!d&&i&&i.url&&Object(a.jsx)("img",{alt:"",className:b.a.PostThumbnail,src:i.url})]})},x=function(){return Object(a.jsxs)("div",{className:l.a.App,children:[Object(a.jsx)("div",{className:l.a.AppHeader,children:Object(a.jsx)("h1",{children:"Instagram. Posts\xa0Comparing"})}),Object(a.jsxs)("div",{className:l.a.AppPosts,children:[Object(a.jsx)(m,{}),Object(a.jsx)(m,{}),Object(a.jsx)(m,{})]})]})};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))},2:function(t,e,s){t.exports={Post:"Post_Post__2uao7",PostHeader:"Post_PostHeader__2DZit",PostTextField:"Post_PostTextField__2ezc_",PostTextFieldError:"Post_PostTextFieldError__VfHIU",PostMeta:"Post_PostMeta__1lPrZ",PostThumbnail:"Post_PostThumbnail__1tK9f"}},3:function(t,e,s){t.exports={App:"App_App__2htTF",AppHeader:"App_AppHeader__2GlIR",AppPosts:"App_AppPosts__27Q0L"}}},[[16,1,2]]]);
//# sourceMappingURL=main.4a06d2ce.chunk.js.map