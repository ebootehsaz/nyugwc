(self.webpackChunkNew_York_University_Girls_Who_Code=self.webpackChunkNew_York_University_Girls_Who_Code||[]).push([[678],{9634:function(e){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var l,o=e.HTMLElement||e.Element,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||s,scrollIntoView:o.prototype.scrollIntoView},a=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,r=(l=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?u.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(i(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):u.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==i(arguments[0])){var e=arguments[0].left,t=arguments[0].top;u.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==i(arguments[0])){var l=d(this),o=l.getBoundingClientRect(),a=this.getBoundingClientRect();l!==t.body?(u.call(this,l,l.scrollLeft+a.left-o.left,l.scrollTop+a.top-o.top),"fixed"!==e.getComputedStyle(l).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:a.left,top:a.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function i(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+r<e.scrollHeight:"X"===t?e.clientWidth+r<e.scrollWidth:void 0}function m(t,l){var o=e.getComputedStyle(t,null)["overflow"+l];return"auto"===o||"scroll"===o}function p(e){var t=c(e,"Y")&&m(e,"Y"),l=c(e,"X")&&m(e,"X");return t||l}function d(e){for(;e!==t.body&&!1===p(e);)e=e.parentNode||e.host;return e}function h(t){var l,o,n,r,s=(a()-t.startTime)/468;r=s=s>1?1:s,l=.5*(1-Math.cos(Math.PI*r)),o=t.startX+(t.x-t.startX)*l,n=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,o,n),o===t.x&&n===t.y||e.requestAnimationFrame(h.bind(e,t))}function u(l,o,r){var i,c,m,p,d=a();l===t.body?(i=e,c=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,p=n.scroll):(i=l,c=l.scrollLeft,m=l.scrollTop,p=s),h({scrollable:i,method:p,startTime:d,startX:c,startY:m,x:o,y:r})}}}}()},5795:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return E}});var o=l(7294),n=l(3656);var a=l(1721),r=l(9634),s=l.n(r),i=function(e){return e.children},c=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}(0,a.Z)(t,e);var l=t.prototype;return l.componentDidMount=function(){s().polyfill()},l.handleClick=function(e){e.preventDefault();var t=0,l=!0,o=this.props,n=o.type,a=o.element,r=o.offset,s=o.timeout;if(n&&a)switch(n){case"class":l=!!(t=document.getElementsByClassName(a)[0]);break;case"id":l=!!(t=document.getElementById(a))}l?this.scrollTo(t,r,s):console.log("Element not found: "+a)},l.scrollTo=function(e,t,l){void 0===t&&(t=0),void 0===l&&(l=null);var o=e?e.getBoundingClientRect().top+window.pageYOffset:0;l?setTimeout((function(){window.scroll({top:o+t,left:0,behavior:"smooth"})}),l):window.scroll({top:o+t,left:0,behavior:"smooth"})},l.render=function(){return o.createElement(i,null,"object"==typeof this.props.children?o.cloneElement(this.props.children,{onClick:this.handleClick}):o.createElement("span",{onClick:this.handleClick},this.props.children))},t}(o.Component),m=l.p+"static/college_loops_logo-935dc1913fb06ecf0c0e2b46a7783a81.jpeg",p=l.p+"static/december_event-979f2873341efa83628e9dfb5365ee8b.jpeg",d=l.p+"static/panel-29631b6660cd5777790f4ba4065b6ca5.jpg",h=l.p+"static/python-2f15c5e35ce3e41f31df0afcaa11ed1b.jpg",u=l(1012),f=l(8423),g=l(1349),v=l.n(g),E=function(){return o.createElement(n.Z,{fullMenu:!0},o.createElement("section",{id:"main"}),o.createElement("section",{id:"banner"},o.createElement("div",{className:"inner"},o.createElement("div",{class:"loader"},o.createElement("h2",null,o.createElement("div",{class:"scanner"},o.createElement("span",null,v().heading)))),o.createElement("p",null,v().subHeading)),o.createElement(c,{type:"id",element:"one"},o.createElement("a",{href:"#one",className:"more"},"Learn More"))),o.createElement("section",{id:"one",className:"wrapper style1 special"},o.createElement("div",{className:"inner"},o.createElement("header",{className:"major",style:{paddingTop:"2em"}},o.createElement("h2",null,"What are College Loops?"),o.createElement("p",null,"Girls Who Code College Loops are university-level networks for college-aged women interested",o.createElement("br",null),"in tech to support one another and help each other persist and succeed in the field.",o.createElement("br",null),o.createElement("br",null),"College Loops build belonging and community through weekly meetings during the school year.")),o.createElement("ul",{className:"icons major"},o.createElement("li",null,o.createElement("span",{className:"icon fa-gem major style2"},o.createElement("span",{className:"label"},"Lorem"))),o.createElement("li",null,o.createElement("span",{className:"icon solid fa-heart major style2"},o.createElement("span",{className:"label"},"Ipsum"))),o.createElement("li",null,o.createElement("span",{className:"icon fa-gem major style2"},o.createElement("span",{className:"label"},"Dolor")))))),o.createElement("div",{className:"smallerImages"},o.createElement("section",{className:"wrapper alt style2",id:"addBorderRadius"},o.createElement("section",{className:"spotlight",style:{paddingTop:"3em"}},o.createElement("div",{className:"image",style:{maxWidth:"400px"}},o.createElement("img",{src:m,alt:""})),o.createElement("div",{className:"content"},o.createElement("h2",null,"What is Girls Who Code?",o.createElement("br",null)),o.createElement("p",null,"Girls Who Code is on a mission to close the gender gap in technology and to change the image of what a programmer looks like and does. Girls Who Code is an organization that values diversity, equity, and inclusion as essential to our mission."))),o.createElement("section",{className:"spotlight"},o.createElement("div",{className:"image",style:{maxWidth:"400px"}},o.createElement("img",{src:p,alt:""})),o.createElement("div",{className:"content"},o.createElement("h2",null,"How does Girls Who Code College Loops support its members?",o.createElement("br",null)),o.createElement("p",null,"College Loops provide a variety of resources and opportunities for members to develop their technical skills, such as coding workshops and guest speaker events.",o.createElement("br",null),"Additionally, members have the opportunity to connect with professionals in the tech industry through networking events and mentorship programs."))),o.createElement("section",{className:"spotlight"},o.createElement("div",{className:"image",style:{maxWidth:"400px"}},o.createElement("img",{src:d,alt:""})),o.createElement("div",{className:"content"},o.createElement("h2",null,"What types of activities do College Loops participate in?",o.createElement("br",null)),o.createElement("p",null,"College Loop members participate in a variety of activities such as coding projects, hackathons, and workshops on topics such as computer science, software engineering, and web development.",o.createElement("br",null),"Additionally, members have the opportunity to attend conferences and events related to technology and entrepreneurship."))),o.createElement("section",{className:"spotlight"},o.createElement("div",{className:"image",style:{maxWidth:"400px"}},o.createElement("img",{src:h,alt:""})),o.createElement("div",{className:"content"},o.createElement("h2",null,"How does Girls Who Code College Loops support the wider community?",o.createElement("br",null)),o.createElement("p",null,"College Loops members have the opportunity to give back to their communities through service projects and volunteering.",o.createElement("br",null),"Additionally, College Loops often partner with local organizations and companies to help promote diversity and inclusion in the tech industry."))),o.createElement("section",{className:"spotlight"},o.createElement("div",{className:"image",style:{maxWidth:"400px"}},o.createElement("img",{src:u.Z,alt:""})),o.createElement("div",{className:"content"},o.createElement("h2",null,"How can someone get involved with Girls Who Code College Loops?",o.createElement("br",null)),o.createElement("p",null,"Anyone who identifies as a college-aged woman and is interested in technology can join a College Loop.",o.createElement("br",null),"To find a College Loop near you, visit the Girls Who Code website and search for a Loop in your area. You can also start your own College Loop by reaching out to Girls Who Code and following their guidelines."))),o.createElement("section",{className:"spotlight"},o.createElement("div",{className:"image",style:{maxWidth:"400px"}},o.createElement("img",{src:f.Z,alt:""})),o.createElement("div",{className:"content"},o.createElement("h2",null,"What are some of the benefits of being a part of Girls Who Code College Loops?",o.createElement("br",null)),o.createElement("p",null,"Members of College Loops have access to a supportive community of like-minded individuals, opportunities to develop their technical skills, and connections to professionals in the tech industry.",o.createElement("br",null),"Additionally, being a part of College Loops can help to build confidence and leadership skills, as well as open up opportunities for internships and job placements."))))),o.createElement("section",{className:"wrapper style1 special"},o.createElement("a",{href:"/involved"},o.createElement("button",{class:"btn"},o.createElement("h2",{style:{margin:0}},"GET INVOLVED")))))}},1012:function(e,t,l){"use strict";t.Z=l.p+"static/pic01-b5237c7a6ee1be59e3104df91131dcad.jpg"},8423:function(e,t,l){"use strict";t.Z=l.p+"static/tech-1ca1a751bbac830b63f59f94ce23b99e.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-3c75eb26f0ac39cfda4b.js.map