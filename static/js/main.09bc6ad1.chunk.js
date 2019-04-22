(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(20)},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(8),r=a.n(s),i=(a(18),a(7)),c=a(2),m=a(3),l=a(6),u=a(4),h=a(5),d=a(1),b=(a(19),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=Object(i.a)(this.props.rooms).sort(function(e,t){return e.id-t.id});return n.a.createElement("div",{className:"rooms-list"},n.a.createElement("ul",null,n.a.createElement("h3",null,"Your rooms:"),t.map(function(t){var a=e.props.roomId===t.id?" active":"";return n.a.createElement("li",{key:t.id,className:"room"+a},n.a.createElement("a",{onClick:function(){return e.props.subscribeToRoom(t.id)},href:"#"},"# ",t.name," "))})))}}]),t}(n.a.Component));var f=function(e){return console.log(e),n.a.createElement("div",{className:"message"},n.a.createElement("div",{className:"message-username"},e.username),n.a.createElement("div",{className:"message-text"},e.text))},g=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillUpdate",value:function(){var e=r.a.findDOMNode(this);this.shouldScrollToBottom=e.scrollTop+e.clientHeight+100>=e.scrollHeight}},{key:"componentDidUpdate",value:function(){if(this.shouldScrollToBottom){var e=r.a.findDOMNode(this);e.scrollTop=e.scrollHeight}}},{key:"render",value:function(){return this.props.roomId?n.a.createElement("div",{className:"message-list"},this.props.messages.map(function(e,t){return n.a.createElement(f,{key:t,username:e.senderId,text:e.text})})):n.a.createElement("div",{className:"message-list"},n.a.createElement("div",{className:"join-room"},"Join a room! \u2192"))}}]),t}(n.a.Component),p=a(12),v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={textMessage:""},e.handleChange=e.handleChange.bind(Object(d.a)(Object(d.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,o=t.value;this.setState(Object(p.a)({},a,o))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.sendMessage(this.state.textMessage),this.setState({textMessage:""})}},{key:"render",value:function(){return n.a.createElement("form",{className:"send-message-form",onSubmit:this.handleSubmit},n.a.createElement("input",{disabled:this.props.disabled,placeholder:"type your message here and press ENTER",type:"text",name:"textMessage",value:this.state.textMessage,onChange:this.handleChange}))}}]),t}(n.a.Component),j=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={roomName:""},e.handleChange=e.handleChange.bind(Object(d.a)(Object(d.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState({roomName:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.createRoom(this.state.roomName),this.setState({roomName:""})}},{key:"render",value:function(){return n.a.createElement("div",{className:"new-room-form"},n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("input",{value:this.state.roomName,onChange:this.handleChange,type:"text",placeholder:"Create a room",required:!0}),n.a.createElement("button",{id:"create-room-btn",type:"submit"},"+")))}}]),t}(n.a.Component),O=a(9),R=a.n(O),k=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={roomId:null,messages:[],joinableRooms:[],joinedRooms:[]},e.sendMessage=e.sendMessage.bind(Object(d.a)(Object(d.a)(e))),e.subscribeToRoom=e.subscribeToRoom.bind(Object(d.a)(Object(d.a)(e))),e.getRooms=e.getRooms.bind(Object(d.a)(Object(d.a)(e))),e.createRoom=e.createRoom.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;new R.a.ChatManager({instanceLocator:"v1:us1:a781f6d8-0b24-4595-9747-1f433a69991b",userId:"abdallah",tokenProvider:new R.a.TokenProvider({url:"https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a781f6d8-0b24-4595-9747-1f433a69991b/token"})}).connect().then(function(t){e.currentUser=t,e.getRooms()}).catch(function(e){return console.log("error on joinableRooms: ",e)})}},{key:"getRooms",value:function(){var e=this;this.currentUser.getJoinableRooms().then(function(t){e.setState({joinableRooms:t,joinedRooms:e.currentUser.rooms})}).catch(function(e){return console.log("error on joinableRooms: ",e)})}},{key:"subscribeToRoom",value:function(e){var t=this;this.setState({messages:[]}),this.currentUser.subscribeToRoom({roomId:e,messageLimit:20,hooks:{onMessage:function(e){t.setState({messages:[].concat(Object(i.a)(t.state.messages),[e])})}}}).then(function(e){t.setState({roomId:e.id}),t.getRooms()}).catch(function(e){return console.log("error on subscribing to room: ",e)})}},{key:"sendMessage",value:function(e){this.currentUser.sendMessage({text:e,roomId:this.state.roomId})}},{key:"createRoom",value:function(e){var t=this;this.currentUser.createRoom({name:e}).then(function(e){return t.subscribeToRoom(e.id)}).catch(function(e){return console.log("error on createRoom",e)})}},{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement(b,{roomId:this.state.roomId,subscribeToRoom:this.subscribeToRoom,rooms:[].concat(Object(i.a)(this.state.joinableRooms),Object(i.a)(this.state.joinedRooms))}),n.a.createElement(g,{messages:this.state.messages,roomId:this.state.roomId}),n.a.createElement(v,{sendMessage:this.sendMessage,disabled:!this.state.roomId}),n.a.createElement(j,{createRoom:this.createRoom}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.09bc6ad1.chunk.js.map