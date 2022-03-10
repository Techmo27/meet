(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(58)},31:function(e,t,n){},52:function(e,t,n){},55:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),c=n.n(o),s=(n(31),n(2)),i=n(6),u=n(4),l=n(3),m=n(5),h=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={collapsed:!0},n.handleClick=function(){n.setState({collapsed:!n.state.collapsed})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.event,t=this.state.collapsed;return r.a.createElement("div",{className:"event"},r.a.createElement("h2",{className:"summary"},e.summary),r.a.createElement("p",{className:"start-date"},e.start.dateTime," (",e.start.timeZone,")"),r.a.createElement("p",{className:"location"},"@",e.summary," | ",e.location),r.a.createElement("button",{variant:"outline-info",className:"".concat(t?"show":"hide","-details"),onClick:this.handleClick},t?"Show Details":"Hide Details"),!t&&r.a.createElement("div",{className:"extra-details ".concat(this.state.collapsed?"hide":"show")},r.a.createElement("h3",null,"About the event:"),r.a.createElement("a",{href:e.htmlLink,rel:"noreferrer",target:"_blank"},"See details on Google Calendar"),r.a.createElement("p",{className:"event-description"},e.description)))}}]),t}(a.Component),d=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.events;return r.a.createElement("ul",{className:"EventList"},e.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(h,{event:e}))}))}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).getStyle=function(){return{color:n.color}},n.color=null,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),t}(a.Component),p=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).color="blue",n}return Object(m.a)(t,e),t}(f),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).color="red",n}return Object(m.a)(t,e),t}(f),b=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter(function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1});if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e.state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement(p,{text:this.state.infoText}),r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),r.a.createElement("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"}},this.state.suggestions.map(function(t){return r.a.createElement("li",{key:t,onClick:function(){return e.handleItemClicked(t)}},t)}),r.a.createElement("li",{key:"all",onClick:function(){return e.handleItemClicked("all")}},r.a.createElement("b",null,"See all cities"))))}}]),t}(a.Component),g=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={numberOfEvents:32,errorText:""},n.handleInputChanged=function(e){var t=e.target.value;t<1||t>32?n.setState({numberOfEvents:"",errorText:"Please enter a number between 1 and 32"}):n.setState({numberOfEvents:t,errorText:""}),n.props.updateNumberOfEvents(e.target.value)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("label",null,"Number of Events: "),r.a.createElement("input",{type:"text",id:"numberOfEvents__input",value:this.props.numberOfEvents,onChange:function(t){return e.handleInputChanged(t)}}),r.a.createElement(v,{text:this.state.errorText}))}}]),t}(a.Component),w=n(25),y=n(7),k=n.n(y),E=n(8),O=n(12),j=n.n(O),S=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],x=n(11),T=n.n(x),C=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},Z=function(){var e=Object(E.a)(k.a.mark(function e(t){var n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then(function(e){return e.json()}).catch(function(e){return e.json()});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),N=function(e){var t=e.map(function(e){return e.location});return Object(w.a)(new Set(t))},I=function(){var e=Object(E.a)(k.a.mark(function e(){var t,n,a,r;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(T.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return T.a.done(),e.abrupt("return",S);case 4:return e.next=6,M();case 6:if(!(t=e.sent)){e.next=16;break}return C(),n=" https://4mkuo9ekll.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,j.a.get(n);case 12:return(a=e.sent).data&&(r=N(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),T.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(E.a)(k.a.mark(function e(){var t,n,a,r,o,c;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,Z(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,j.a.get("https://4mkuo9ekll.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&q(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(E.a)(k.a.mark(function e(t){var n,a,r;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://4mkuo9ekll.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then(function(e){return e.json()}).catch(function(e){return e});case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),A=(n(52),n(55),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={events:[],locations:[],numberOfEvents:32},n.updateEvents=function(e,t){I().then(function(t){var a="all"===e?t:t.filter(function(t){return t.location===e});n.mounted&&n.setState({events:a.slice(0,n.state.numberOfEvents),currentLocation:e})})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,I().then(function(t){e.mounted&&e.setState({events:t.slice(0,e.state.numberOfEvents),locations:N(t)})})}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Meet App"),r.a.createElement("h3",null,"Choose a city"),r.a.createElement(b,{locations:this.state.locations,updateEvents:this.updateEvents}),r.a.createElement(g,{updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents}),r.a.createElement(d,{events:this.state.events}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,59)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)})};n(24).config("c6fa3e3c42ed455f85317845850ccf1f").install(),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)}),W()}},[[26,3,2]]]);
//# sourceMappingURL=main.f60d41d0.chunk.js.map