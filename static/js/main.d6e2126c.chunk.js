(this.webpackJsonpoauth=this.webpackJsonpoauth||[]).push([[0],{66:function(e,t,a){e.exports=a(79)},71:function(e,t,a){},72:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(9),l=a.n(c),r=(a(71),a(72),a(36)),i=a(37),s=a(23),u=a(45),h=a(44),d=a(117),m=a(121),p=a(122),v=a(127),b=a(130),k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={domainURL:"",clientID:"",scope:"",redirectURI:""},n.generateAccessToken=n.generateAccessToken.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"generateAccessToken",value:function(){var e=this.state.domainURL+"/oauth/v2/auth?client_id="+this.state.clientID+"&response_type=token&scope="+this.state.scope+"&redirect_uri="+this.state.redirectURI;window.open(e)}},{key:"render",value:function(){var e=this,t={margin:"3vmin",width:"35ch"};return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(d.a,{variant:"elevation"},o.a.createElement(m.a,{style:{minWidth:275}},o.a.createElement("form",{noValidate:!0,autoComplete:"off"},o.a.createElement(v.a,{id:"domain-url",select:!0,label:"Domain URl",value:this.state.domainURL,onChange:function(t){return e.setState({domainURL:t.target.value})},style:t},[{value:"https://accounts.zoho.com",label:"https://accounts.zoho.com"},{value:"https://accounts.localzoho.com",label:"https://accounts.localzoho.com"},{value:"https://accounts.csez.zohocorpin.com",label:"https://accounts.csez.zohocorpin.com"}].map((function(e){return o.a.createElement(b.a,{key:e.value,value:e.value},e.label)}))),o.a.createElement("div",null),o.a.createElement(v.a,{id:"client-id",label:"Client ID",onChange:function(t){return e.setState({clientID:t.target.value})},style:t}),o.a.createElement("div",null),o.a.createElement(v.a,{id:"redirect-uri",label:"Redirect URI",onChange:function(t){return e.setState({redirectURI:t.target.value})},style:t})),o.a.createElement(p.a,{style:{fontSize:"2vmin"},onClick:this.generateAccessToken,size:"small",variant:"contained",color:"primary"},"Generate Access token")))))}}]),a}(n.Component),E=a(47),f=a(10),y=a(129),C=a(126),g=a(124),O=a(125),j=a(123),w=a(55),A=a.n(w),R=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={open:!0,accessToken:n.props.accesstoken},n.handleClickOpen=n.handleClickOpen.bind(Object(s.a)(n)),n.handleClose=n.handleClose.bind(Object(s.a)(n)),n.copyToClipboard=n.copyToClipboard.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"handleClickOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"copyToClipboard",value:function(){A()(this.state.accessToken)}},{key:"render",value:function(){var e,t=o.a.createElement(y.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},o.a.createElement(j.a,{id:"alert-dialog-title"},"Generated Access token"),o.a.createElement(g.a,null,o.a.createElement(O.a,{id:"alert-dialog-description"},this.state.accessToken)),o.a.createElement(C.a,null,o.a.createElement(p.a,{onClick:this.handleClose,variant:"contained",color:"primary"},"Close"),o.a.createElement(p.a,{onClick:this.copyToClipboard,variant:"contained",color:"primary"},"Copy")));return e=this.state.open?t:o.a.createElement(f.a,{to:"/OAuthGenerator"}),o.a.createElement("div",null,e)}}]),a}(n.Component);function T(){var e=new URLSearchParams(Object(f.g)().hash).get("access_token");return console.log(e),o.a.createElement(R,{accesstoken:e})}var z=function(){return o.a.createElement(E.a,null,o.a.createElement(f.d,null,o.a.createElement(f.b,{path:"/OAuthGenerator/token"},o.a.createElement(T,null)),o.a.createElement(f.b,{path:"/OAuthGenerator"},o.a.createElement(k,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.d6e2126c.chunk.js.map