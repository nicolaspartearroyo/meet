(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{12:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(22),c=n.n(a),s=(n(29),n(7)),i=n.n(s),u=n(8),l=n(2),h=n(6),d=n(4),f=n(3),p=(n(31),n(0)),m=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={show:!1},e.handleButton=function(){e.setState((function(e){return{show:!e.show}}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(p.jsxs)("ul",{className:"event",children:[Object(p.jsx)("li",{className:"summary",children:t.summary}),Object(p.jsx)("li",{className:"location",children:t.location}),Object(p.jsx)("li",{className:"date",children:t.start.dateTime}),Object(p.jsx)("li",{className:"timeZone",children:t.start.timeZone}),!0===this.state.show&&Object(p.jsx)("p",{className:"details",children:t.description}),!1===this.state.show&&Object(p.jsx)("button",{className:"showMore",onClick:function(){return e.handleButton()},children:"Show more"}),!0===this.state.show&&Object(p.jsx)("button",{className:"showLess",onClick:function(){return e.handleButton()},children:"Show less"})]})}}]),n}(o.Component),v=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(p.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(m,{event:e})},e.id)}))})}}]),n}(o.Component),b=(n(12),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).getStyle=function(){return{color:o.color}},o.color=null,o.position=null,o}return Object(h.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"Alert",children:Object(p.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(o.Component)),g=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).color="blue",o.position="relative",o}return n}(b),j=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).color="red",o.position="relative",o}return n}(b),w=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={locations:e.props.locations,query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var o=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==o.length)return e.setState({query:n,suggestions:o,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1}),e.props.updateEvents(t,e.props.numberOfEvents)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"CitySearch",children:[Object(p.jsx)(g,{text:this.state.infoText}),Object(p.jsx)("p",{children:"Search your city"}),Object(p.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(p.jsx)("div",{children:Object(p.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(p.jsx)("b",{children:"See all cities"})})]})})]})}}]),n}(o.Component),O=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;if(e.props.updateEventCount(t.target.value),!(n.length<=0||n.length>32))return e.setState({numberOfEvents:n,infoText:""});e.setState({infoText:"Select a number from 1 to 32.",numberOfEvents:""})},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"NumberOfEvents",children:[Object(p.jsx)("p",{children:"Number of Events"}),Object(p.jsx)("input",{type:"number",className:"eventNum",value:this.state.numberOfEvents,onChange:this.handleInputChanged}),Object(p.jsx)(j,{text:this.state.infoText})]})}}]),n}(o.Component);n(33);var x=function(e){return e.showWelcomeScreen?Object(p.jsxs)("div",{className:"WelcomeScreen",children:[Object(p.jsx)("h1",{children:"Welcome to the Meet app"}),Object(p.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(p.jsx)("div",{className:"button_cont",align:"center",children:Object(p.jsxs)("div",{class:"google-btn",children:[Object(p.jsx)("div",{class:"google-icon-wrapper",children:Object(p.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log\no.svg",alt:"Google sign-in"})}),Object(p.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(p.jsx)("b",{children:"Sign in with google"})})]})}),Object(p.jsx)("a",{href:"https://nicolaspartearroyo.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},y=n(24),k=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],S=n(11),T=n.n(S),C=n(9),E=n.n(C),N=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},Z=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,o,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://dxchgdtgc1.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return o=e.sent,(r=o.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,o,r,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,N(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return o=new URLSearchParams(window.location.search),e.next=13,o.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,T.a.get("https://dxchgdtgc1.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return a=e.sent,c=a.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&Z(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,o,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return E.a.done(),e.abrupt("return",k);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),E.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,I();case 11:if(!(n=e.sent)){e.next=21;break}return W(),o="https://dxchgdtgc1.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=17,T.a.get(o);case 17:return(r=e.sent).data&&(a=L(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(a))),E.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e){var t=e.map((function(e){return e.location}));return Object(y.a)(new Set(t))},M=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,showWelcomeScreen:void 0},e.updateEvents=function(t){A().then((function(n){var o="all"===t?n:n.filter((function(e){return e.location===t})),r=e.state.numberOfEvents;e.setState({events:o.slice(0,r)})}))},e.updateEventCount=function(t){var n=e.state.currentLocation;e.setState({numberOfEvents:t}),e.updateEvents(n,t)},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,o,r,a=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,N(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,o=new URLSearchParams(window.location.search),r=o.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&A().then((function(e){a.mounted&&a.setState({events:e.slice(0,a.state.numberOfEvents),locations:L(e)})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){this.state.showWelcomeScreen;var e=this.state.numberOfEvents;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Meet App"}),Object(p.jsx)(w,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(p.jsx)(O,{numberOfEvents:e,updateEventCount:this.updateEventCount}),Object(p.jsx)(v,{events:this.state.events}),Object(p.jsx)(x,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){I()}})]})}}]),n}(o.Component),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),o(e),r(e),a(e),c(e)}))};n(23).config("61839cf67d3b4e7e8c1ddf4ff880eef0").install(),c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(M,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");B?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):q(t,e)}))}}(),J()}},[[52,1,2]]]);
//# sourceMappingURL=main.92fca7f0.chunk.js.map