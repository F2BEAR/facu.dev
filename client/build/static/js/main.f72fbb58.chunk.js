(this["webpackJsonpportfolio-client"]=this["webpackJsonpportfolio-client"]||[]).push([[0],{34:function(e,t,a){e.exports=a(71)},39:function(e,t,a){},40:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a.n(l),o=(a(39),a(40),a(3)),s=a(4),m=a(6),i=a(5),u=a(12),f=a(1),d=a(16),p=a(33),h=function(e){if("undefined"!==typeof window&&window.localStorage){var t=window.localStorage.getItem("color-theme");if("string"===typeof t)return t;if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return"dark"},b=r.a.createContext(),x=function(e){var t=e.initialTheme,a=e.children,n=r.a.useState(h),l=Object(p.a)(n,2),c=l[0],o=l[1],s=function(e){var t=window.document.documentElement,a="dark"===e;t.classList.remove(a?"light":"dark"),t.classList.add(e),localStorage.setItem("color-theme",e)};return t&&s(t),r.a.useEffect((function(e){s(c)}),[c]),r.a.createElement(b.Provider,{value:{theme:c,setTheme:o}},a)},w=function(){var e=r.a.useContext(b),t=e.theme,a=e.setTheme;return r.a.createElement("label",{className:"w-auto ml-0 sm:ml-3"},r.a.createElement("input",{type:"checkbox",checked:"dark"===t,onChange:function(e){return a(e.target.checked?"dark":"light")},className:"invisible"}),"dark"===t?r.a.createElement("span",{className:"w-6 h-6 p-3"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}))):r.a.createElement("span",{className:"w-6 h-6 p-3"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}))))},g=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isOpen:!1},n.openMenu=n.openMenu.bind(Object(d.a)(n)),n}return Object(s.a)(a,[{key:"openMenu",value:function(){this.setState((function(e){return{isOpen:!e.isOpen}}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"w-full flex fixed bg-primary sm:jutify-around sm:items-center md:justify-around justify-between min-h-layout shadow-lg"},r.a.createElement("h1",{className:"p-3 font-bold text-4x1 mt-2 sm:mt-0"},"Facundo Carbonel"),r.a.createElement("div",{className:"mt-2 sm:mt-0"},this.state.isOpen?r.a.createElement("span",{className:"sm:hidden block w-6 h-6 m-3",onClick:function(){return e.openMenu()}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))):r.a.createElement("span",{className:"sm:hidden block w-6 h-6 m-3",onClick:function(){return e.openMenu()}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})))),r.a.createElement("nav",{className:"transition-all sm:transition-none duration-300 ease-in-out flex flex-col sm:flex-row bg-tertiary sm:bg-primary fixed sm:static h-full sm:h-auto w-64 sm:w-auto items-center mr-3 "+(this.state.isOpen?"left-0":"-left-64")},r.a.createElement(u.b,{exact:!0,to:"/",activeClassName:"text-accent",className:"p-3 mt-3 sm:mt-0 w-full sm:w-auto text-center",onClick:function(){return e.openMenu()}},"Home"),r.a.createElement(u.b,{to:"/projects",activeClassName:"text-accent",className:"p-3 w-full sm:w-auto text-center",onClick:function(){return e.openMenu()}},"Projects"),r.a.createElement(u.b,{to:"/about",activeClassName:"text-accent",className:"p-3 w-full sm:w-auto text-center",onClick:function(){return e.openMenu()}},"About Me"),r.a.createElement(u.b,{to:"/contact",activeClassName:"text-accent",className:"p-3 w-full sm:w-auto text-center",onClick:function(){return e.openMenu()}},"Contact"),r.a.createElement(w,null)))}}]),a}(r.a.Component),E=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"w-full flex justify-center bg-primary items-center min-h-layout"},r.a.createElement("p",null,"Facundo Carbonel | All Rights Reserved"))}}]),a}(r.a.Component),y=a(11),v=a.n(y),k=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={techList:[],toolsList:[],academic:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={method:"get",baseURL:"http://localhost:666",headers:{Accept:"*/*"}};v()("knowledge",t).then((function(t){var a=t.data.knowledge[0],n=a.Tech.list,r=a.Tools.list;e.setState((function(){return{techList:n,toolsList:r}}))})).catch((function(e){console.error(e)})),v()("about",t).then((function(t){var a=t.data.about[0].Academic.texts;e.setState((function(){return{academic:a}}))})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"w-full flex px-3 justify-center flex-col items-center text-center bg-primary"},r.a.createElement("p",{className:"font-bold text-xl m-6"},"Academic History "," ",r.a.createElement("span",{role:"img","aria-labelledby":"tools emoji"},"\ud83d\udcda")),r.a.createElement("ul",{className:"rounded-lg bg-secondary p-6 mb-6 w-full sm:max-w-2xl text-center"},this.state.academic.map((function(e){return r.a.createElement("li",{key:e.toString(),className:"text-justify m-3"},e)}))),r.a.createElement("p",{className:"font-bold text-xl mb-6"},"Technologies I work with "," ",r.a.createElement("span",{role:"img","aria-labelledby":"gear emoji"},"\ud83d\udcbb")),r.a.createElement("ul",{className:"rounded-lg bg-secondary p-6 w-full sm:max-w-2xl text-center"},this.state.techList.map((function(e){return r.a.createElement("li",{key:e.toString(),className:"text-justify w-32 sm:w-56 inline-block m-3"},String.fromCharCode("9679")+" "+e)}))),r.a.createElement("p",{className:"font-bold text-xl m-6"},"Tools I use "," ",r.a.createElement("span",{role:"img","aria-labelledby":"tools emoji"},"\ud83e\uddf0")),r.a.createElement("ul",{className:"rounded-lg bg-secondary p-6 mb-6 w-full sm:max-w-2xl text-center"},this.state.toolsList.map((function(e){return r.a.createElement("li",{key:e.toString(),className:"text-justify w-64 inline-block m-3"},String.fromCharCode("9679")+" "+e)}))))}}]),a}(r.a.Component),N=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={data:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;v()({method:"get",url:"https://api.github.com/users/F2BEAR/repos",headers:{Accept:"application/vnd.github.v3+json","Content-Type":"application/json"}}).then((function(t){var a=t.data;e.setState((function(){return{data:a}}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("ul",{className:"w-full bg-primary h-full flex justify-center px-3 flex-col items-center text-primary "},r.a.createElement("p",{className:"font-bold text-xl mb-3"},"Projects"),this.state.data.map((function(e){return r.a.createElement("li",{className:"bg-secondary rounded-lg p-12 m-3 w-full sm:max-w-2xl sm:min-w-2xl",key:e.id},r.a.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"flex w-full justify-center mb-3 text-secondary"},r.a.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{strokeWidth:0,fill:"currentColor",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z"}))),r.a.createElement("p",{className:"font-bold text-xl"},e.name),r.a.createElement("p",null,e.description),r.a.createElement("p",null,"Language:",e.language),r.a.createElement("p",{className:"text-accent text-sm"},e.html_url)))})))}}]),a}(r.a.Component),j=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={data:{},list:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;v()({method:"get",url:"http://localhost:666/contact",headers:{Accept:"*/*"}}).then((function(t){var a=t.data.contact,n=a[0].list;e.setState((function(){return{data:a,list:n}}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"w-full flex justify-center items-center px-3 flex-col text-center"},r.a.createElement("p",{className:"font-bold text-xl mb-3"},"Contact"),r.a.createElement("p",{className:"max-w-xl text-justify m-3"},"If you want to contact me for more information, project proposals or any other inquiry feel free to fill the below form "," ",r.a.createElement("span",{role:"img","aria-labelledby":"sparkle emoji"},"\u2728")),r.a.createElement("form",{id:"contact",className:"mt-3 rounded-lg bg-secondary p-8 felx justify-end w-full sm:max-w-2xl sm:min-w-xl"},r.a.createElement("div",{className:"m-3 flex justify-between"},r.a.createElement("label",{htmlFor:"name",className:"m-3"},"Name"),r.a.createElement("input",{name:"name",type:"text",className:"rounded-lg p-3 w-48 sm:min-w-sm bg-primary",placeholder:"Your Name",required:!0})),r.a.createElement("div",{className:"m-3  flex justify-between"},r.a.createElement("label",{htmlFor:"mail",className:"m-3"},"Email"),r.a.createElement("input",{name:"mail",type:"email",className:"rounded-lg p-3 w-48 sm:min-w-sm bg-primary",placeholder:"example@example.com",required:!0})),r.a.createElement("div",{className:"m-3 flex items-center flex-row justify-between"},r.a.createElement("label",{htmlFor:"message",className:"m-3"},"Message"),r.a.createElement("textarea",{rows:"4",cols:"25",name:"message",form:"contact",className:"rounded-lg p-3 w-48 sm:min-w-sm bg-primary",placeholder:"Enter your message here!",required:!0})),r.a.createElement("button",{type:"submit",className:"py-3 px-8 m-3 rounded-lg bg-primary text-accent hover:bg-tertiary"},"Send")),r.a.createElement("div",{className:"w-auto m-6"},r.a.createElement("p",null,"You can find me on:"),r.a.createElement("ul",{className:"mt-3 rounded-lg bg-secondary p-3"},this.state.list.map((function(e){return r.a.createElement("a",{href:e.url,key:e.name.toString(),className:"m-3 w-auto hover:text-accent",target:"_blank",rel:"noopener noreferrer"},e.name)})))))}}]),a}(r.a.Component),C=a(32),O=a.n(C),M=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={usefulList:[],me:[],listTitle:"",list:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={method:"get",baseURL:"http://localhost:666",headers:{Accept:"*/*"}};v()("about",t).then((function(t){var a=t.data.about[0].Me.texts,n=t.data.about[0].Me.listTitle,r=t.data.about[0].Me.list;e.setState((function(){return{me:a,listTitle:n,list:r}}))})).catch((function(e){console.log(e)})),v()("knowledge",t).then((function(t){var a=t.data.knowledge[0].Useful.list;e.setState((function(){return{usefulList:a}}))})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"w-full flex flex-col items-center bg-primary"},r.a.createElement("div",{className:"text-justify w-auto mx-6"},this.state.me.map((function(e){return r.a.createElement("p",{key:O.a.generate()},e)})),r.a.createElement("p",{className:"mt-3 "},this.state.listTitle),r.a.createElement("ul",{className:"mt-3 rounded-lg bg-secondary p-3"},this.state.list.map((function(e){return r.a.createElement("li",{key:e.toString(),className:"m-3 w-auto"},String.fromCharCode("9679")+" "+e)}))),r.a.createElement("p",{className:"text-md my-3"},"Useful knowledge:"),r.a.createElement("ul",{className:"rounded-lg bg-secondary p-6 w-full sm:max-w-2xl text-center"},this.state.usefulList.map((function(e){return r.a.createElement("li",{key:e.toString(),className:"text-justify w-64 inline-block m-3"},String.fromCharCode("9679")+" "+e)})))))}}]),a}(r.a.Component),L=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"w-full h-full flex flex-col md:flex-row items-center justify-center text-center"},r.a.createElement("div",{className:"flex flex-col justify-center h-auto mx-12 my-12"},r.a.createElement("h1",{className:"font-bold text-primary text-6xl"},"Error 404"),r.a.createElement("p",{className:"font-semibold text-secondary text-3x1"},"Sorry! We couldn't find that!")))}}]),a}(r.a.Component),S=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(x,null,r.a.createElement("div",{className:"h-screen m-0 p-0 flex flex-col justify-between bg-primary text-primary"},r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(g,null),r.a.createElement("div",{className:"mt-24"},r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:M}),r.a.createElement(f.a,{path:"/contact",component:j,className:"content"}),r.a.createElement(f.a,{path:"/about",component:k,className:"content"}),r.a.createElement(f.a,{path:"/projects",component:N}),r.a.createElement(f.a,{component:L,className:"content"}))))),r.a.createElement(E,null)))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.f72fbb58.chunk.js.map