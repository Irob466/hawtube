const BASE_URL = 'https://irob466.github.io/hawtube'

// mst3k silhouette
function mst3k() {
    const silhouette = document.createElement("img");
    silhouette.src = `${BASE_URL}/mst3k.png`
    silhouette.style.position = "absolute";
    silhouette.style.bottom = 0;
    silhouette.style.right = "15px";
    silhouette.style.zIndex = 1;
    document.querySelector("#videowrap").appendChild(silhouette);
}

// jackass intro
function jackass() {
    const audio = new Audio(`${BASE_URL}/jackass.mp3`);
    audio.addEventListener('canplaythrough', e => audio.play());
}

// we'll be right back
function beRightBack() {
    const brb = new Image();
    brb.src = `${BASE_URL}/wellbrb.png`;
    brb.classList.add('brb');
    const brbSound = new Audio(`${BASE_URL}/wellbrb.mp3`);

    const frostedPane = document.createElement('div');
    frostedPane.classList.add('frosted-pane');
    frostedPane.appendChild(brb);

    brbSound.addEventListener('ended', e => {
        setTimeout(() => {
            document.body.removeChild(frostedPane);
            document.body.style.overflow = 'visible';
            frostedPane = null;
            brb = null;
        }, 1000);
    });

    brbSound.addEventListener('play', e => {
        document.body.appendChild(frostedPane);
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
    });

    brbSound.addEventListener('canplaythrough', e => {
        brbSound.play();
    });
}

mst3k();
<<<<<<< HEAD
[jackass, beRightBack][Math.floor(Math.random() * 2)]();

var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e){t.appendChild(e)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function l(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let f;function d(t){f=t}const p=[],h=[],$=[],m=[],g=Promise.resolve();let b=!1;function y(t){$.push(t)}let _=!1;const x=new Set;function v(){if(!_){_=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];d(e),k(e.$$)}for(d(null),p.length=0;h.length;)h.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];x.has(e)||(x.add(e),e())}$.length=0}while(p.length);for(;m.length;)m.pop()();b=!1,_=!1,x.clear()}}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const w=new Set;function j(t,e){-1===t.$$.dirty[0]&&(p.push(t),b||(b=!0,g.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function E(c,u,i,s,l,p,h=[-1]){const $=f;d(c);const m=u.props||{},g=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map($?$.$$.context:[]),callbacks:n(),dirty:h,skip_bound:!1};let b=!1;if(g.ctx=i?i(c,m,((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&l(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),b&&j(c,t)),e})):[],g.update(),b=!0,o(g.before_update),g.fragment=!!s&&s(g.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);g.fragment&&g.fragment.l(t),t.forEach(a)}else g.fragment&&g.fragment.c();u.intro&&((_=c.$$.fragment)&&_.i&&(w.delete(_),_.i(x))),function(t,n,c){const{fragment:u,on_mount:a,on_destroy:i,after_update:s}=t.$$;u&&u.m(n,c),y((()=>{const n=a.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),s.forEach(y)}(c,u.target,u.anchor),v()}var _,x;d($)}function A(e){let n,o,r,c,f,d,p;return{c(){n=i("main"),o=i("h1"),r=s("Hello "),c=s(e[0]),f=s("!"),d=s(" "),p=i("p"),p.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.',l(o,"class","svelte-1tky8bj"),l(n,"class","svelte-1tky8bj")},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),u(n,o),u(o,r),u(o,c),u(o,f),u(n,d),u(n,p)},p(t,[e]){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(c,t[0])},i:t,o:t,d(t){t&&a(n)}}}function S(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),E(this,t,S,A,c,{name:0})}}({target:document.body,props:{name:"world"}})}();
=======
beRightBack();
>>>>>>> parent of 13b4131... random opener
