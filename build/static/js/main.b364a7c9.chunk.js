(this["webpackJsonpmy-api-project"]=this["webpackJsonpmy-api-project"]||[]).push([[0],{1:function(e,a,t){e.exports={input_wrapper:"search_input_wrapper__3jtoQ",form:"search_form__2czHT",inputLabel:"search_inputLabel__1IUbx",input:"search_input__2-yvg",btn:"search_btn__1AXQX",splash:"search_splash__3NUni"}},12:function(e,a,t){e.exports=t(19)},17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(5),o=t.n(i),l=(t(17),t(3)),s=t.n(l),c=t(6),u=t(7),m=t(8),h=t(10),d=t(9),p=t(11),_={searchYelp:function(e,a,t){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(a,"&sort_by=").concat(t),{headers:{Authorization:"Bearer ".concat("4ddDU7Ljg3dMp4fRLARjCnkYcRbFbcnSnsgKpfZCr_PxuItcmFcV_pHlo6mIpbaKju8__LcwKmu7L7e0QVPDZR1Y2beCwB6n1RZhnZRqVbb5TubnD-KqHEJ-L3PsXHYx")}}).then((function(e){return e.json()})).then((function(e){if(e.businesses)return e.businesses.map((function(e){return{id:e.id,imageSrc:e.image_url,name:e.name,address:e.location.address1,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,category:e.categories[0].title,country:e.location.country,rating:e.rating,reviewCount:e.review_count,url:e.url,alias:e.categories[0].alias}}))}))}},v=function(e){var a=e.onChange,t=e.width,n=e.placeholder,i=e.height,o=e.textTransform,l=e.padding,s=e.margin,c=e.type,u=e.className,m=e.value,h=e.name,d=e.list,p=e.required,_=e.id;return r.a.createElement("input",{style:{width:t||null,height:i||null,textTransform:o||"uppercase"},type:c||"text",value:m||"",name:h||null,padding:l||null,id:_||null,list:d||null,onChange:a,className:u||null,margin:s||null,placeholder:n||null,required:p||null})},b=t(1),w=t.n(b),f=t(2),g=t.n(f),y=function(e){var a=e.foundSearch,t=g.a.view_wrapper,n=g.a.display_view,i=g.a.found_view,o=g.a.img_view,l=a.length?a&&a.map((function(e,a){var t=e.address,n=e.imageSrc,l=e.url,s=e.city,c=e.category;return r.a.createElement("div",{key:a,className:i},r.a.createElement("div",{className:o},r.a.createElement("img",{src:n,alt:c,style:{width:"250px",height:"250px"}})),r.a.createElement("address",null,t),r.a.createElement("cite",null,s),r.a.createElement("br",null),r.a.createElement("a",{href:l},"view in page"))})):r.a.createElement("div",null,null);return r.a.createElement("div",{className:t},r.a.createElement("div",{className:n},l))},E={Alabarna:"Al",Alaska:"AK",Arizona:"AZ",Arkanasas:"AR",California:"CA",Colorado:"CO",Florida:"FL",Georgia:"GA",Hawali:"HI",Idaho:"ID",Illinois:"IL",Indiana:"IN",Iowa:"IA",Kansas:"KS",Kentucky:"KY",Louisiana:"LA",Maine:"ME",Maryland:"MD",Massachusetts:"MA",Michaigan:"MI",Minnesota:"MN",Missouri:"MO",Mississippi:"MS",Montana:"MT",Nebraska:"NE",Nevada:"NV",New_Hampshire:"NH",New_Mexico:"NM",New_York:"NY",North_Carolina:"NC",North_Dakota:"ND",Ohio:"OH",Oklahoma:"OK",Oregon:"OR",Pennsylvania:"PA",Rhode_Island:"RI",South_Dakota:"SD",Tennessee:"TN",Texas:"TX",Utah:"UT",Vermont:"VT",Virginia:"VA",Washington:"WA",West_Virginia:"WV",WisConsin:"WT",Wyoming:"WY"},N=["best_match","rating","review_count"],k=function(e){var a=e.handleChange,t=e.value,n=e.handleSubmit,i=w.a.input_wrapper,o=w.a.form,l=w.a.inputLabel,s=w.a.input,c=w.a.btn,u=t.job_search,m=t.location,h=t.sort_by,d=t.LocationOptions,p=t.sortByOption;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:i},r.a.createElement("form",{onSubmit:n,className:o},r.a.createElement("div",{className:l},r.a.createElement("label",{htmlFor:"job_search"},"what are you looking for"),r.a.createElement(v,{placeholder:"job search",name:"job_search",onChange:a,value:u,id:"job_search",className:s,required:!0})),r.a.createElement("div",{className:l},r.a.createElement("label",{htmlFor:"locations"},"what location are you looking at"),r.a.createElement(v,{placeholder:"location",name:"location",onChange:a,value:m,list:"location",id:"locations",className:s,required:!0})),r.a.createElement("div",{className:l},r.a.createElement("label",{htmlFor:"sort"},"search terms"),r.a.createElement(v,{onChange:a,defaultValue:"best_match",name:"sort_by",value:h,textTransform:"lowerCase",list:"sortBy",id:"sort",className:s,required:!0})),r.a.createElement("datalist",{id:"location"},r.a.createElement("option",{value:E[0]}),E&&d.map((function(e,a){return r.a.createElement("option",{key:a,value:e})}))),r.a.createElement("datalist",{id:"sortBy"},p&&N.map((function(e,a){return r.a.createElement("option",{value:e,key:a})}))),r.a.createElement("div",{className:c},r.a.createElement("button",null,"search"))))))},j=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(h.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={job_search:"",location:"",sort_by:"",LocationOptions:[],sortByOption:N,businessSearch:[]},t.handleChange=function(e){var a=e.target;t.setState(Object(c.a)({},a.name,a.value))},t.handleSubmit=function(e){var a,n,r,i,o,l;return s.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(a=t.state,n=a.location,r=a.sort_by,i=a.job_search,e.preventDefault(),""===n||""===r||""===i){c.next=10;break}return o=Object.values(E[n]).join(""),c.next=6,s.a.awrap(_.searchYelp(i,o,r));case 6:l=c.sent,t.setState({businessSearch:l}),c.next=11;break;case 10:alert("field values are required");case 11:case"end":return c.stop()}}))},t.handleLocationOptions=function(){var e=E&&Object.keys(E);t.setState({LocationOptions:e})},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.setState({sort_by:"best_match"}),this.handleLocationOptions()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,{value:this.state,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),r.a.createElement(y,{foundSearch:this.state.businessSearch}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},2:function(e,a,t){e.exports={view_wrapper:"Found_view_view_wrapper__ME0Qn",display_view:"Found_view_display_view__1I6Jz",found_view:"Found_view_found_view__6Tx0f",img_view:"Found_view_img_view__380zN"}}},[[12,1,2]]]);
//# sourceMappingURL=main.b364a7c9.chunk.js.map