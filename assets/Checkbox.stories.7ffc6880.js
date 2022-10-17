var j=Object.defineProperty;var l=(e,t)=>j(e,"name",{value:t,configurable:!0});import{a as R,_ as y,b as z}from"./index.module.47ea1ede.js";import{r as o}from"./index.88702d97.js";import{r as W}from"./index.29f83cd9.js";import{j as p,F as N,a as F}from"./jsx-runtime.16ecadfd.js";import{I as V,r as q}from"./IconBase.esm.c44909eb.js";import{T as K}from"./Text.ff1319f8.js";import"./iframe.878e84e3.js";import"./clsx.m.256e9345.js";function H(e,t=[]){let n=[];function r(c,a){const i=o.exports.createContext(a),u=n.length;n=[...n,a];function d(f){const{scope:h,children:x,...$}=f,g=(h==null?void 0:h[e][u])||i,b=o.exports.useMemo(()=>$,Object.values($));return o.exports.createElement(g.Provider,{value:b},x)}l(d,"Provider");function m(f,h){const x=(h==null?void 0:h[e][u])||i,$=o.exports.useContext(x);if($)return $;if(a!==void 0)return a;throw new Error(`\`${f}\` must be used within \`${c}\``)}return l(m,"useContext"),d.displayName=c+"Provider",[d,m]}l(r,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const s=l(()=>{const c=n.map(a=>o.exports.createContext(a));return l(function(i){const u=(i==null?void 0:i[e])||c;return o.exports.useMemo(()=>({[`__scope${e}`]:{...i,[e]:u}}),[i,u])},"useScope")},"createScope");return s.scopeName=e,[r,X(s,...t)]}l(H,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function X(...e){const t=e[0];if(e.length===1)return t;const n=l(()=>{const r=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return l(function(c){const a=r.reduce((i,{useScope:u,scopeName:d})=>{const f=u(c)[`__scope${d}`];return{...i,...f}},{});return o.exports.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}l(X,"$c512c27ab02ef895$var$composeContextScopes");function O(e,t,{checkForDefaultPrevented:n=!0}={}){return l(function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)},"handleEvent")}l(O,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function w(e){const t=o.exports.useRef(e);return o.exports.useEffect(()=>{t.current=e}),o.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}l(w,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function Y({prop:e,defaultProp:t,onChange:n=l(()=>{},"onChange")}){const[r,s]=Z({defaultProp:t,onChange:n}),c=e!==void 0,a=c?e:r,i=w(n),u=o.exports.useCallback(d=>{if(c){const f=typeof d=="function"?d(e):d;f!==e&&i(f)}else s(d)},[c,e,s,i]);return[a,u]}l(Y,"$71cd76cc60e0454e$export$6f32135080cb4c3");function Z({defaultProp:e,onChange:t}){const n=o.exports.useState(e),[r]=n,s=o.exports.useRef(r),c=w(t);return o.exports.useEffect(()=>{s.current!==r&&(c(r),s.current=r)},[r,s,c]),n}l(Z,"$71cd76cc60e0454e$var$useUncontrolledState");function G(e){const t=o.exports.useRef({value:e,previous:e});return o.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}l(G,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const P=Boolean(globalThis==null?void 0:globalThis.document)?o.exports.useLayoutEffect:()=>{};function J(e){const[t,n]=o.exports.useState(void 0);return P(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const c=s[0];let a,i;if("borderBoxSize"in c){const u=c.borderBoxSize,d=Array.isArray(u)?u[0]:u;a=d.inlineSize,i=d.blockSize}else a=e.offsetWidth,i=e.offsetHeight;n({width:a,height:i})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}l(J,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function Q(e,t){return o.exports.useReducer((n,r)=>{const s=t[n][r];return s!=null?s:n},e)}l(Q,"$fe963b355347cc68$export$3e6543de14f8614f");const M=l(e=>{const{present:t,children:n}=e,r=ee(t),s=typeof n=="function"?n({present:r.isPresent}):o.exports.Children.only(n),c=R(r.ref,s.ref);return typeof n=="function"||r.isPresent?o.exports.cloneElement(s,{ref:c}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");M.displayName="Presence";function ee(e){const[t,n]=o.exports.useState(),r=o.exports.useRef({}),s=o.exports.useRef(e),c=o.exports.useRef("none"),a=e?"mounted":"unmounted",[i,u]=Q(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.exports.useEffect(()=>{const d=E(r.current);c.current=i==="mounted"?d:"none"},[i]),P(()=>{const d=r.current,m=s.current;if(m!==e){const h=c.current,x=E(d);e?u("MOUNT"):x==="none"||(d==null?void 0:d.display)==="none"?u("UNMOUNT"):u(m&&h!==x?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,u]),P(()=>{if(t){const d=l(f=>{const x=E(r.current).includes(f.animationName);f.target===t&&x&&W.exports.flushSync(()=>u("ANIMATION_END"))},"handleAnimationEnd"),m=l(f=>{f.target===t&&(c.current=E(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:o.exports.useCallback(d=>{d&&(r.current=getComputedStyle(d)),n(d)},[])}}l(ee,"$921a889cee6df7e8$var$usePresence");function E(e){return(e==null?void 0:e.animationName)||"none"}l(E,"$921a889cee6df7e8$var$getAnimationName");const T=o.exports.forwardRef((e,t)=>{const{children:n,...r}=e,s=o.exports.Children.toArray(n),c=s.find(ne);if(c){const a=c.props.children,i=s.map(u=>u===c?o.exports.Children.count(a)>1?o.exports.Children.only(null):o.exports.isValidElement(a)?a.props.children:null:u);return o.exports.createElement(_,y({},r,{ref:t}),o.exports.isValidElement(a)?o.exports.cloneElement(a,void 0,i):null)}return o.exports.createElement(_,y({},r,{ref:t}),n)});T.displayName="Slot";const _=o.exports.forwardRef((e,t)=>{const{children:n,...r}=e;return o.exports.isValidElement(n)?o.exports.cloneElement(n,{...oe(r,n.props),ref:z(t,n.ref)}):o.exports.Children.count(n)>1?o.exports.Children.only(null):null});_.displayName="SlotClone";const te=l(({children:e})=>o.exports.createElement(o.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function ne(e){return o.exports.isValidElement(e)&&e.type===te}l(ne,"$5e63c961fc1ce211$var$isSlottable");function oe(e,t){const n={...t};for(const r in t){const s=e[r],c=t[r];/^on[A-Z]/.test(r)?s&&c?n[r]=(...i)=>{c(...i),s(...i)}:s&&(n[r]=s):r==="style"?n[r]={...s,...c}:r==="className"&&(n[r]=[s,c].filter(Boolean).join(" "))}return{...e,...n}}l(oe,"$5e63c961fc1ce211$var$mergeProps");const re=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],I=re.reduce((e,t)=>{const n=o.exports.forwardRef((r,s)=>{const{asChild:c,...a}=r,i=c?T:t;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(i,y({},a,{ref:s}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),L="Checkbox",[se,Ee]=H(L),[ce,ie]=se(L),ae=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:r,checked:s,defaultChecked:c,required:a,disabled:i,value:u="on",onCheckedChange:d,...m}=e,[f,h]=o.exports.useState(null),x=R(t,v=>h(v)),$=o.exports.useRef(!1),g=f?Boolean(f.closest("form")):!0,[b=!1,U]=Y({prop:s,defaultProp:c,onChange:d});return o.exports.createElement(ce,{scope:n,state:b,disabled:i},o.exports.createElement(I.button,y({type:"button",role:"checkbox","aria-checked":C(b)?"mixed":b,"aria-required":a,"data-state":B(b),"data-disabled":i?"":void 0,disabled:i,value:u},m,{ref:x,onKeyDown:O(e.onKeyDown,v=>{v.key==="Enter"&&v.preventDefault()}),onClick:O(e.onClick,v=>{U(A=>C(A)?!0:!A),g&&($.current=v.isPropagationStopped(),$.current||v.stopPropagation())})})),g&&o.exports.createElement(le,{control:f,bubbles:!$.current,name:r,value:u,checked:b,required:a,disabled:i,style:{transform:"translateX(-100%)"}}))}),ue="CheckboxIndicator",de=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...s}=e,c=ie(ue,n);return o.exports.createElement(M,{present:r||C(c.state)||c.state===!0},o.exports.createElement(I.span,y({"data-state":B(c.state),"data-disabled":c.disabled?"":void 0},s,{ref:t,style:{pointerEvents:"none",...e.style}})))}),le=l(e=>{const{control:t,checked:n,bubbles:r=!0,...s}=e,c=o.exports.useRef(null),a=G(n),i=J(t);return o.exports.useEffect(()=>{const u=c.current,d=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(d,"checked").set;if(a!==n&&f){const h=new Event("click",{bubbles:r});u.indeterminate=C(n),f.call(u,C(n)?!1:n),u.dispatchEvent(h)}},[a,n,r]),o.exports.createElement("input",y({type:"checkbox","aria-hidden":!0,defaultChecked:C(n)?!1:n},s,{tabIndex:-1,ref:c,style:{...e.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function C(e){return e==="indeterminate"}l(C,"$e698a72e93240346$var$isIndeterminate");function B(e){return C(e)?"indeterminate":e?"checked":"unchecked"}l(B,"$e698a72e93240346$var$getState");const fe=ae,pe=de;var k=new Map;k.set("bold",function(e){return p(N,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});k.set("duotone",function(e){return p(N,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});k.set("fill",function(){return p(N,{children:p("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});k.set("light",function(e){return p(N,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});k.set("thin",function(e){return p(N,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});k.set("regular",function(e){return p(N,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var he=l(function(t,n){return q(t,n,k)},"renderPath"),D=o.exports.forwardRef(function(e,t){return p(V,{...Object.assign({ref:t},e,{renderPath:he})})});D.displayName="Check";const me=D;function S(e){return p(fe,{className:"w-6 h-6 bg-gray-800 rounded p-[2px]",...e,children:p(pe,{asChild:!0,children:p(me,{weight:"bold",className:"text-cyan-300 h-5 w-5"})})})}l(S,"Checkbox");try{S.displayName="Checkbox",S.__docgenInfo={description:"",displayName:"Checkbox",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox.tsx#Checkbox"]={docgenInfo:S.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox.tsx#Checkbox"})}catch{}const Se={title:"Components/Checkbox",component:S,args:{},argTypes:{},decorators:[e=>F("div",{className:"flex items-center gap-2",children:[e(),p(K,{size:"md",children:"Lembrar de mim por 30 dias"})]})]},Pe={},_e=["Default"];export{Pe as Default,_e as __namedExportsOrder,Se as default};
//# sourceMappingURL=Checkbox.stories.7ffc6880.js.map