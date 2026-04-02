import{_ as D}from"./ExampleCard.vue_vue_type_script_setup_true_lang-BAay4W22.js";import{d as p,af as Z,ag as S,o as m,e as b,H as t,a4 as M,ah as h,ai as B,u as e,aB as oe,al as Me,am as ge,D as r,an as ue,b as O,ao as se,aq as de,w as fe,c as le,ak as k,a6 as I,ap as H,Q as ce,g as ye,aj as q,a7 as R,A as Q,ar as E,z as ie,T as xe,I as s,r as ee}from"./highlight-mgC1Gizx.js";import{u as W}from"./Collection-BaCW7bG5.js";import{R as _e}from"./RovingFocusGroup-BtOY189e.js";import{w as pe}from"./useTypeahead-DeESezdk.js";import{M as ve,a as Ie,b as Se,c as Ce,d as we}from"./MenuPortal-DcRvuQvn.js";import{M as he}from"./MenuGroup-zJuqgmiy.js";import{M as Be}from"./MenuSeparator-C42rXQga.js";import{R as ke}from"./RovingFocusItem-Bqsu9x9I.js";import{M as Re,a as qe,b as Te,c as Ge,d as Pe}from"./MenuSubTrigger-Cu4P860b.js";import{C as Ve}from"./chevron-right-BGnyeyqv.js";import{M as $e}from"./MenuCheckboxItem-PHIIlKT1.js";import{M as Fe}from"./MenuItemIndicator-Dc-iF8FO.js";import{C as Oe}from"./CoppyButton.vue_vue_type_script_setup_true_lang-BeCgPZJC.js";import{C as Ae}from"./circle-BHN3TkLk.js";import"./usePrimitiveElement-DKACLoT5.js";import"./utils-jFGFItbh.js";import"./useArrowNavigation-D-pctMGk.js";import"./useFocusGuards-QLXtyTTL.js";var Ne=p({__name:"MenubarCheckboxItem",props:{modelValue:{type:[Boolean,String],required:!1},disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["select","update:modelValue"],setup(u,{emit:o}){const a=u,n=Z(o);return S(),(d,l)=>(m(),b(e($e),h(B({...a,...e(n)})),{default:t(()=>[M(d.$slots,"default")]),_:3},16))}}),ze=Ne;const[K,Ue]=se("MenubarRoot");var De=p({__name:"MenubarRoot",props:{modelValue:{type:String,required:!1},defaultValue:{type:String,required:!1},dir:{type:String,required:!1},loop:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(u,{emit:o}){const a=u,i=o,{forwardRef:n}=S(),{CollectionSlot:d}=W({key:"Menubar",isProvider:!0}),l=oe(a,"modelValue",i,{defaultValue:a.defaultValue??"",passive:a.modelValue===void 0}),g=O(null),{dir:c,loop:y}=Me(a),x=ge(c);return Ue({modelValue:l,dir:x,loop:y,onMenuOpen:_=>{l.value=_,g.value=_},onMenuClose:()=>{l.value=""},onMenuToggle:_=>{l.value=l.value?"":_,g.value=_}}),(_,v)=>(m(),b(e(d),null,{default:t(()=>[r(e(_e),{"current-tab-stop-id":g.value,"onUpdate:currentTabStopId":v[0]||(v[0]=T=>g.value=T),orientation:"horizontal",loop:e(y),dir:e(x),"as-child":""},{default:t(()=>[r(e(ue),{ref:e(n),role:"menubar"},{default:t(()=>[M(_.$slots,"default",{modelValue:e(l)})]),_:3},512)]),_:3},8,["current-tab-stop-id","loop","dir"])]),_:3}))}}),Ee=De;const[J,We]=se("MenubarMenu");var Ke=p({__name:"MenubarMenu",props:{value:{type:String,required:!1}},setup(u){const a=de(u.value),i=K();S();const n=O(),d=O(!1),l=le(()=>i.modelValue.value===a);return fe(l,()=>{l.value||(d.value=!1)}),We({value:a,triggerElement:n,triggerId:a,contentId:"",wasKeyboardTriggerOpenRef:d}),(g,c)=>(m(),b(e(ve),{open:l.value,modal:!1,dir:e(i).dir.value,"onUpdate:open":c[0]||(c[0]=y=>{y||e(i).onMenuClose()})},{default:t(()=>[M(g.$slots,"default")]),_:3},8,["open","dir"]))}}),Le=Ke,je=p({__name:"MenubarContent",props:{forceMount:{type:Boolean,required:!1},loop:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1,default:"start"},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","closeAutoFocus"],setup(u,{emit:o}){const n=k(u,o);S();const d=K(),l=J();l.contentId||=de(void 0,"reka-menubar-content");const{getItems:g}=W({key:"Menubar"}),c=O(!1);function y(x){const v=x.target.hasAttribute("data-reka-menubar-subtrigger"),A=(d.dir.value==="rtl"?"ArrowRight":"ArrowLeft")===x.key;if(!A&&v)return;let N=g().filter(j=>j.ref.dataset.disabled!=="").map(j=>j.ref.dataset.value);A&&N.reverse();const X=N.indexOf(l.value);N=d.loop.value?pe(N,X+1):N.slice(X+1);const[Y]=N;Y&&d.onMenuOpen(Y)}return(x,_)=>(m(),b(e(Ie),I(e(n),{id:e(l).contentId,"data-reka-menubar-content":"","aria-labelledby":e(l).triggerId,style:{"--reka-menubar-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-menubar-content-available-width":"var(--reka-popper-available-width)","--reka-menubar-content-available-height":"var(--reka-popper-available-height)","--reka-menubar-trigger-width":"var(--reka-popper-anchor-width)","--reka-menubar-trigger-height":"var(--reka-popper-anchor-height)"},onCloseAutoFocus:_[0]||(_[0]=v=>{!e(d).modelValue.value&&!c.value&&e(l).triggerElement.value?.focus(),c.value=!1,v.preventDefault()}),onFocusOutside:_[1]||(_[1]=v=>{const T=v.target;e(g)().filter(G=>G.ref.dataset.disabled!=="").some(G=>G.ref.contains(T))&&v.preventDefault()}),onInteractOutside:_[2]||(_[2]=v=>{c.value=!0}),onEntryFocus:_[3]||(_[3]=v=>{e(l).wasKeyboardTriggerOpenRef.value||v.preventDefault()}),onKeydown:H(y,["arrow-right","arrow-left"])}),{default:t(()=>[M(x.$slots,"default")]),_:3},16,["id","aria-labelledby"]))}}),Ze=je,He=p({__name:"MenubarGroup",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(u){const o=u;return S(),(a,i)=>(m(),b(e(he),h(B(o)),{default:t(()=>[M(a.$slots,"default")]),_:3},16))}}),Qe=He,Je=p({__name:"MenubarItem",props:{disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["select"],setup(u,{emit:o}){const a=u,n=Z(o);return S(),(d,l)=>(m(),b(e(Se),h(B({...a,...e(n)})),{default:t(()=>[M(d.$slots,"default")]),_:3},16))}}),Xe=Je,Ye=p({__name:"MenubarItemIndicator",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(u){const o=u;return S(),(a,i)=>(m(),b(e(Fe),h(B(o)),{default:t(()=>[M(a.$slots,"default")]),_:3},16))}}),me=Ye,ea=p({__name:"MenubarPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(u){const o=u;return(a,i)=>(m(),b(e(Ce),h(B(o)),{default:t(()=>[M(a.$slots,"default")]),_:3},16))}}),be=ea,aa=p({__name:"MenubarRadioGroup",props:{modelValue:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue"],setup(u,{emit:o}){const a=u,n=Z(o);return S(),(d,l)=>(m(),b(e(Re),h(B({...a,...e(n)})),{default:t(()=>[M(d.$slots,"default")]),_:3},16))}}),ta=aa,ra=p({__name:"MenubarRadioItem",props:{value:{type:null,required:!0},disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["select"],setup(u,{emit:o}){const n=k(u,o);return S(),(d,l)=>(m(),b(e(qe),h(B(e(n))),{default:t(()=>[M(d.$slots,"default")]),_:3},16))}}),na=ra,oa=p({__name:"MenubarSeparator",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(u){const o=u;return S(),(a,i)=>(m(),b(e(Be),h(B(o)),{default:t(()=>[M(a.$slots,"default")]),_:3},16))}}),ua=oa,sa=p({__name:"MenubarSub",props:{defaultOpen:{type:Boolean,required:!1},open:{type:Boolean,required:!1,default:void 0}},emits:["update:open"],setup(u,{emit:o}){const a=u,i=o;S();const n=oe(a,"open",i,{defaultValue:a.defaultOpen??!1,passive:a.open===void 0});return(d,l)=>(m(),b(e(Te),{open:e(n),"onUpdate:open":l[0]||(l[0]=g=>ce(n)?n.value=g:null)},{default:t(()=>[M(d.$slots,"default",{open:e(n)})]),_:3},8,["open"]))}}),da=sa,la=p({__name:"MenubarSubContent",props:{forceMount:{type:Boolean,required:!1},loop:{type:Boolean,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},hideShiftedArrow:{type:Boolean,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus"],setup(u,{emit:o}){const n=k(u,o);S();const{getItems:d}=W({key:"Menubar"}),l=K(),g=J();function c(y){if(y.target.hasAttribute("data-reka-menubar-subtrigger"))return;let v=d().filter(G=>G.ref.dataset.disabled!=="").map(G=>G.ref.dataset.value);const T=v.indexOf(g.value);v=l.loop.value?pe(v,T+1):v.slice(T+1);const[A]=v;A&&l.onMenuOpen(A)}return(y,x)=>(m(),b(e(Ge),I(e(n),{"data-reka-menubar-content":"",style:{"--reka-menubar-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-menubar-content-available-width":"var(--reka-popper-available-width)","--reka-menubar-content-available-height":"var(--reka-popper-available-height)","--reka-menubar-trigger-width":"var(--reka-popper-anchor-width)","--reka-menubar-trigger-height":"var(--reka-popper-anchor-height)"},onKeydown:H(c,["arrow-right"])}),{default:t(()=>[M(y.$slots,"default")]),_:3},16))}}),ia=la,pa=p({__name:"MenubarSubTrigger",props:{disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(u){const o=u;return S(),(a,i)=>(m(),b(e(Pe),I(o,{"data-reka-menubar-subtrigger":""}),{default:t(()=>[M(a.$slots,"default")]),_:3},16))}}),ma=pa,ba=p({__name:"MenubarTrigger",props:{disabled:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(u){const o=K(),a=J(),{forwardRef:i,currentElement:n}=S(),{CollectionItem:d}=W({key:"Menubar"}),l=O(!1),g=le(()=>o.modelValue.value===a.value);return ye(()=>{a.triggerElement=n}),(c,y)=>(m(),b(e(ke),{"as-child":"",focusable:!c.disabled,"tab-stop-id":e(a).value},{default:t(()=>[r(e(d),null,{default:t(()=>[r(e(we),{"as-child":""},{default:t(()=>[r(e(ue),{id:e(a).triggerId,ref:e(i),as:c.as,"as-child":c.asChild,type:c.as==="button"?"button":void 0,role:"menuitem","aria-haspopup":"menu","aria-expanded":g.value,"aria-controls":g.value?e(a).contentId:void 0,"data-highlighted":l.value?"":void 0,"data-state":g.value?"open":"closed","data-disabled":c.disabled?"":void 0,disabled:c.disabled,"data-value":e(a).value,onPointerdown:y[0]||(y[0]=x=>{!c.disabled&&x.button===0&&x.ctrlKey===!1&&(e(o).onMenuOpen(e(a).value),g.value||x.preventDefault())}),onPointerenter:y[1]||(y[1]=()=>{e(o).modelValue.value&&!g.value&&(e(o).onMenuOpen(e(a).value),e(n)?.focus())}),onKeydown:y[2]||(y[2]=H(x=>{c.disabled||(["Enter"," "].includes(x.key)&&e(o).onMenuToggle(e(a).value),x.key==="ArrowDown"&&e(o).onMenuOpen(e(a).value),["Enter"," ","ArrowDown"].includes(x.key)&&(e(a).wasKeyboardTriggerOpenRef.value=!0,x.preventDefault()))},["enter","space","arrow-down"])),onFocus:y[3]||(y[3]=x=>l.value=!0),onBlur:y[4]||(y[4]=x=>l.value=!1)},{default:t(()=>[M(c.$slots,"default")]),_:3},8,["id","as","as-child","type","aria-expanded","aria-controls","data-highlighted","data-state","data-disabled","disabled","data-value"])]),_:3})]),_:3})]),_:3},8,["focusable","tab-stop-id"]))}}),Ma=ba;const L=p({__name:"Menubar",props:{modelValue:{},defaultValue:{},dir:{},loop:{type:Boolean},class:{}},emits:["update:modelValue"],setup(u,{emit:o}){const a=u,i=o,n=q(a,"class"),d=k(n,i);return(l,g)=>(m(),b(e(Ee),I({"data-slot":"menubar"},e(d),{class:e(R)("bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",a.class)}),{default:t(c=>[M(l.$slots,"default",h(B(c)))]),_:3},16,["class"]))}}),ga={class:"pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"},U=p({__name:"MenubarCheckboxItem",props:{modelValue:{type:[Boolean,String]},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{}},emits:["select","update:modelValue"],setup(u,{emit:o}){const a=u,i=o,n=q(a,"class"),d=k(n,i);return(l,g)=>(m(),b(e(ze),I({"data-slot":"menubar-checkbox-item"},e(d),{class:e(R)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",a.class)}),{default:t(()=>[Q("span",ga,[r(e(me),null,{default:t(()=>[M(l.$slots,"indicator-icon",{},()=>[r(e(Oe),{class:"size-4"})])]),_:3})]),M(l.$slots,"default")]),_:3},16,["class"]))}}),P=p({inheritAttrs:!1,__name:"MenubarContent",props:{forceMount:{type:Boolean},loop:{type:Boolean},side:{},sideOffset:{default:8},sideFlip:{type:Boolean},align:{default:"start"},alignOffset:{default:-4},alignFlip:{type:Boolean},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},hideShiftedArrow:{type:Boolean},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{},class:{}},setup(u){const o=u,a=q(o,"class"),i=E(a);return(n,d)=>(m(),b(e(be),null,{default:t(()=>[r(e(Ze),I({"data-slot":"menubar-content"},{...n.$attrs,...e(i)},{class:e(R)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--reka-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",o.class)}),{default:t(()=>[M(n.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),C=p({__name:"MenubarGroup",props:{asChild:{type:Boolean},as:{}},setup(u){const o=u;return(a,i)=>(m(),b(e(Qe),I({"data-slot":"menubar-group"},o),{default:t(()=>[M(a.$slots,"default")]),_:3},16))}}),f=p({__name:"MenubarItem",props:{disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{},inset:{type:Boolean},variant:{}},emits:["select"],setup(u,{emit:o}){const a=u,i=o,n=q(a,"class","inset","variant"),d=k(n,i);return(l,g)=>(m(),b(e(Xe),I({"data-slot":"menubar-item","data-inset":u.inset?"":void 0,"data-variant":u.variant},e(d),{class:e(R)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",a.class)}),{default:t(()=>[M(l.$slots,"default")]),_:3},16,["data-inset","data-variant","class"]))}}),V=p({__name:"MenubarMenu",props:{value:{}},setup(u){const o=u;return(a,i)=>(m(),b(e(Le),I({"data-slot":"menubar-menu"},o),{default:t(()=>[M(a.$slots,"default")]),_:3},16))}}),ae=p({__name:"MenubarRadioGroup",props:{modelValue:{},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(u,{emit:o}){const n=k(u,o);return(d,l)=>(m(),b(e(ta),I({"data-slot":"menubar-radio-group"},e(n)),{default:t(()=>[M(d.$slots,"default")]),_:3},16))}}),fa={class:"pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"},z=p({__name:"MenubarRadioItem",props:{value:{},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{}},emits:["select"],setup(u,{emit:o}){const a=u,i=o,n=q(a,"class"),d=k(n,i);return(l,g)=>(m(),b(e(na),I({"data-slot":"menubar-radio-item"},e(d),{class:e(R)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",a.class)}),{default:t(()=>[Q("span",fa,[r(e(me),null,{default:t(()=>[M(l.$slots,"indicator-icon",{},()=>[r(e(Ae),{class:"size-2 fill-current"})])]),_:3})]),M(l.$slots,"default")]),_:3},16,["class"]))}}),F=p({__name:"MenubarSeparator",props:{asChild:{type:Boolean},as:{},class:{}},setup(u){const o=u,a=q(o,"class"),i=E(a);return(n,d)=>(m(),b(e(ua),I({"data-slot":"menubar-separator",class:e(R)("bg-border -mx-1 my-1 h-px",o.class)},e(i)),null,16,["class"]))}}),w=p({__name:"MenubarShortcut",props:{class:{}},setup(u){const o=u;return(a,i)=>(m(),ie("span",{"data-slot":"menubar-shortcut",class:xe(e(R)("text-muted-foreground ml-auto text-xs tracking-widest",o.class))},[M(a.$slots,"default")],2))}}),te=p({__name:"MenubarSub",props:{defaultOpen:{type:Boolean},open:{type:Boolean}},emits:["update:open"],setup(u,{emit:o}){const n=k(u,o);return(d,l)=>(m(),b(e(da),I({"data-slot":"menubar-sub"},e(n)),{default:t(g=>[M(d.$slots,"default",h(B(g)))]),_:3},16))}}),re=p({inheritAttrs:!1,__name:"MenubarSubContent",props:{forceMount:{type:Boolean},loop:{type:Boolean},sideOffset:{},sideFlip:{type:Boolean},alignOffset:{},alignFlip:{type:Boolean},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},hideShiftedArrow:{type:Boolean},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus"],setup(u,{emit:o}){const a=u,i=o,n=q(a,"class"),d=k(n,i);return(l,g)=>(m(),b(e(be),null,{default:t(()=>[r(e(ia),I({"data-slot":"menubar-sub-content"},{...l.$attrs,...e(d)},{class:e(R)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",a.class)}),{default:t(()=>[M(l.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),ne=p({__name:"MenubarSubTrigger",props:{disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{},inset:{type:Boolean}},setup(u){const o=u,a=q(o,"class","inset"),i=E(a);return(n,d)=>(m(),b(e(ma),I({"data-slot":"menubar-sub-trigger","data-inset":u.inset?"":void 0},e(i),{class:e(R)("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",o.class)}),{default:t(()=>[M(n.$slots,"default"),r(e(Ve),{class:"ml-auto size-4"})]),_:3},16,["data-inset","class"]))}}),$=p({__name:"MenubarTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(u){const o=u,a=q(o,"class"),i=E(a);return(n,d)=>(m(),b(e(Ma),I({"data-slot":"menubar-trigger"},e(i),{class:e(R)("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",o.class)}),{default:t(()=>[M(n.$slots,"default")]),_:3},16,["class"]))}}),ca=p({__name:"MenubarBasic",setup(u){return(o,a)=>(m(),b(e(L),{"data-component-x-ray":"Menubar"},{default:t(()=>[r(e(V),{"data-component-x-ray":"MenubarMenu"},{default:t(()=>[r(e($),{"data-component-x-ray-trigger":"MenubarTrigger"},{default:t(()=>[...a[0]||(a[0]=[s("File",-1)])]),_:1}),r(e(P),{"data-component-x-ray":"MenubarContent"},{default:t(()=>[r(e(C),{"data-component-x-ray":"MenubarGroup"},{default:t(()=>[r(e(f),{"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[a[2]||(a[2]=s(" New Tab ",-1)),r(e(w),{"data-component-x-ray-trigger":"MenubarShortcut"},{default:t(()=>[...a[1]||(a[1]=[s("⌘T",-1)])]),_:1})]),_:1}),r(e(f),{"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[a[4]||(a[4]=s(" New Window ",-1)),r(e(w),{"data-component-x-ray-trigger":"MenubarShortcut"},{default:t(()=>[...a[3]||(a[3]=[s("⌘N",-1)])]),_:1})]),_:1}),r(e(f),{disabled:!0,"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[...a[5]||(a[5]=[s(" New Incognito Window ",-1)])]),_:1})]),_:1}),r(e(F),{"data-component-x-ray":"MenubarSeparator"}),r(e(C),{"data-component-x-ray":"MenubarGroup"},{default:t(()=>[r(e(f),{"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[a[7]||(a[7]=s(" Print... ",-1)),r(e(w),{"data-component-x-ray-trigger":"MenubarShortcut"},{default:t(()=>[...a[6]||(a[6]=[s("⌘P",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),r(e(V),{"data-component-x-ray":"MenubarMenu"},{default:t(()=>[r(e($),{"data-component-x-ray-trigger":"MenubarTrigger"},{default:t(()=>[...a[8]||(a[8]=[s("Edit",-1)])]),_:1}),r(e(P),{"data-component-x-ray":"MenubarContent"},{default:t(()=>[r(e(C),{"data-component-x-ray":"MenubarGroup"},{default:t(()=>[r(e(f),{"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[a[10]||(a[10]=s(" Undo ",-1)),r(e(w),{"data-component-x-ray-trigger":"MenubarShortcut"},{default:t(()=>[...a[9]||(a[9]=[s("⌘Z",-1)])]),_:1})]),_:1}),r(e(f),{"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[a[12]||(a[12]=s(" Redo ",-1)),r(e(w),{"data-component-x-ray-trigger":"MenubarShortcut"},{default:t(()=>[...a[11]||(a[11]=[s("⇧⌘Z",-1)])]),_:1})]),_:1})]),_:1}),r(e(F),{"data-component-x-ray":"MenubarSeparator"}),r(e(C),{"data-component-x-ray":"MenubarGroup"},{default:t(()=>[r(e(f),{"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[...a[13]||(a[13]=[s("Cut",-1)])]),_:1}),r(e(f),{"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[...a[14]||(a[14]=[s("Copy",-1)])]),_:1}),r(e(f),{"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[...a[15]||(a[15]=[s("Paste",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),ya=`<script setup lang="ts">
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/shared/components/ui/menubar";
<\/script>

<template>
  <Menubar data-component-x-ray="Menubar">
    <MenubarMenu data-component-x-ray="MenubarMenu">
      <MenubarTrigger data-component-x-ray-trigger="MenubarTrigger">File</MenubarTrigger>
      <MenubarContent data-component-x-ray="MenubarContent">
        <MenubarGroup data-component-x-ray="MenubarGroup">
          <MenubarItem data-component-x-ray-trigger="MenubarItem">
            New Tab
            <MenubarShortcut data-component-x-ray-trigger="MenubarShortcut">⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem data-component-x-ray-trigger="MenubarItem">
            New Window
            <MenubarShortcut data-component-x-ray-trigger="MenubarShortcut">⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem :disabled="true" data-component-x-ray-trigger="MenubarItem">
            New Incognito Window
          </MenubarItem>
        </MenubarGroup>
        <MenubarSeparator data-component-x-ray="MenubarSeparator" />
        <MenubarGroup data-component-x-ray="MenubarGroup">
          <MenubarItem data-component-x-ray-trigger="MenubarItem">
            Print...
            <MenubarShortcut data-component-x-ray-trigger="MenubarShortcut">⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarGroup>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu data-component-x-ray="MenubarMenu">
      <MenubarTrigger data-component-x-ray-trigger="MenubarTrigger">Edit</MenubarTrigger>
      <MenubarContent data-component-x-ray="MenubarContent">
        <MenubarGroup data-component-x-ray="MenubarGroup">
          <MenubarItem data-component-x-ray-trigger="MenubarItem">
            Undo
            <MenubarShortcut data-component-x-ray-trigger="MenubarShortcut">⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem data-component-x-ray-trigger="MenubarItem">
            Redo
            <MenubarShortcut data-component-x-ray-trigger="MenubarShortcut">⇧⌘Z</MenubarShortcut>
          </MenubarItem>
        </MenubarGroup>
        <MenubarSeparator data-component-x-ray="MenubarSeparator" />
        <MenubarGroup data-component-x-ray="MenubarGroup">
          <MenubarItem data-component-x-ray-trigger="MenubarItem">Cut</MenubarItem>
          <MenubarItem data-component-x-ray-trigger="MenubarItem">Copy</MenubarItem>
          <MenubarItem data-component-x-ray-trigger="MenubarItem">Paste</MenubarItem>
        </MenubarGroup>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
`,xa=p({__name:"MenubarWithSubmenu",setup(u){return(o,a)=>(m(),b(e(L),{"data-component-x-ray":"Menubar"},{default:t(()=>[r(e(V),{"data-component-x-ray":"MenubarMenu"},{default:t(()=>[r(e($),{"data-component-x-ray-trigger":"MenubarTrigger"},{default:t(()=>[...a[0]||(a[0]=[s("File",-1)])]),_:1}),r(e(P),{"data-component-x-ray":"MenubarContent"},{default:t(()=>[r(e(te),{"data-component-x-ray":"MenubarSub"},{default:t(()=>[r(e(ne),{"data-component-x-ray-trigger":"MenubarTrigger"},{default:t(()=>[...a[1]||(a[1]=[s("Share",-1)])]),_:1}),r(e(re),{"data-component-x-ray":"MenubarSubContent"},{default:t(()=>[r(e(C),{"data-component-x-ray":"MenubarGroup"},{default:t(()=>[r(e(f),{"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[...a[2]||(a[2]=[s("Email link",-1)])]),_:1}),r(e(f),{"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[...a[3]||(a[3]=[s("Messages",-1)])]),_:1}),r(e(f),{"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[...a[4]||(a[4]=[s("Notes",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),r(e(F),{"data-component-x-ray":"MenubarSeparator"}),r(e(C),{"data-component-x-ray":"MenubarGroup"},{default:t(()=>[r(e(f),{"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[a[6]||(a[6]=s(" Print... ",-1)),r(e(w),{"data-component-x-ray-trigger":"MenubarShortcut"},{default:t(()=>[...a[5]||(a[5]=[s("⌘P",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),r(e(V),{"data-component-x-ray":"MenubarMenu"},{default:t(()=>[r(e($),{"data-component-x-ray-trigger":"MenubarTrigger"},{default:t(()=>[...a[7]||(a[7]=[s("Edit",-1)])]),_:1}),r(e(P),{"data-component-x-ray":"MenubarContent"},{default:t(()=>[r(e(C),{"data-component-x-ray":"MenubarGroup"},{default:t(()=>[r(e(f),{"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[a[9]||(a[9]=s(" Undo ",-1)),r(e(w),{"data-component-x-ray-trigger":"MenubarShortcut"},{default:t(()=>[...a[8]||(a[8]=[s("⌘Z",-1)])]),_:1})]),_:1}),r(e(f),{"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[a[11]||(a[11]=s(" Redo ",-1)),r(e(w),{"data-component-x-ray-trigger":"MenubarShortcut"},{default:t(()=>[...a[10]||(a[10]=[s("⇧⌘Z",-1)])]),_:1})]),_:1})]),_:1}),r(e(F),{"data-component-x-ray":"MenubarSeparator"}),r(e(te),{"data-component-x-ray":"MenubarSub"},{default:t(()=>[r(e(ne),{"data-component-x-ray-trigger":"MenubarTrigger"},{default:t(()=>[...a[12]||(a[12]=[s("Find",-1)])]),_:1}),r(e(re),{"data-component-x-ray":"MenubarSubContent"},{default:t(()=>[r(e(C),{"data-component-x-ray":"MenubarGroup"},{default:t(()=>[r(e(f),{"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[...a[13]||(a[13]=[s("Find...",-1)])]),_:1}),r(e(f),{"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[...a[14]||(a[14]=[s("Find Next",-1)])]),_:1}),r(e(f),{"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[...a[15]||(a[15]=[s("Find Previous",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),r(e(F),{"data-component-x-ray":"MenubarSeparator"}),r(e(C),{"data-component-x-ray":"MenubarGroup"},{default:t(()=>[r(e(f),{"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[...a[16]||(a[16]=[s("Cut",-1)])]),_:1}),r(e(f),{"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[...a[17]||(a[17]=[s("Copy",-1)])]),_:1}),r(e(f),{"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[...a[18]||(a[18]=[s("Paste",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),_a=`<script setup lang="ts">
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/shared/components/ui/menubar";
<\/script>

<template>
  <Menubar data-component-x-ray="Menubar">
    <MenubarMenu data-component-x-ray="MenubarMenu">
      <MenubarTrigger data-component-x-ray-trigger="MenubarTrigger">File</MenubarTrigger>
      <MenubarContent data-component-x-ray="MenubarContent">
        <MenubarSub data-component-x-ray="MenubarSub">
          <MenubarSubTrigger data-component-x-ray-trigger="MenubarTrigger">Share</MenubarSubTrigger>
          <MenubarSubContent data-component-x-ray="MenubarSubContent">
            <MenubarGroup data-component-x-ray="MenubarGroup">
              <MenubarItem data-component-x-ray-trigger="MenubarItem">Email link</MenubarItem>
              <MenubarItem data-component-x-ray-trigger="MenubarItem">Messages</MenubarItem>
              <MenubarItem data-component-x-ray-trigger="MenubarItem">Notes</MenubarItem>
            </MenubarGroup>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarSeparator data-component-x-ray="MenubarSeparator" />
        <MenubarGroup data-component-x-ray="MenubarGroup">
          <MenubarItem data-component-x-ray-trigger="MenubarItem">
            Print...
            <MenubarShortcut data-component-x-ray-trigger="MenubarShortcut">⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarGroup>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu data-component-x-ray="MenubarMenu">
      <MenubarTrigger data-component-x-ray-trigger="MenubarTrigger">Edit</MenubarTrigger>
      <MenubarContent data-component-x-ray="MenubarContent">
        <MenubarGroup data-component-x-ray="MenubarGroup">
          <MenubarItem data-component-x-ray-trigger="MenubarItem">
            Undo
            <MenubarShortcut data-component-x-ray-trigger="MenubarShortcut">⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem data-component-x-ray-trigger="MenubarItem">
            Redo
            <MenubarShortcut data-component-x-ray-trigger="MenubarShortcut">⇧⌘Z</MenubarShortcut>
          </MenubarItem>
        </MenubarGroup>
        <MenubarSeparator data-component-x-ray="MenubarSeparator" />
        <MenubarSub data-component-x-ray="MenubarSub">
          <MenubarSubTrigger data-component-x-ray-trigger="MenubarTrigger">Find</MenubarSubTrigger>
          <MenubarSubContent data-component-x-ray="MenubarSubContent">
            <MenubarGroup data-component-x-ray="MenubarGroup">
              <MenubarItem data-component-x-ray-trigger="MenubarItem">Find...</MenubarItem>
              <MenubarItem data-component-x-ray-trigger="MenubarItem">Find Next</MenubarItem>
              <MenubarItem data-component-x-ray-trigger="MenubarItem">Find Previous</MenubarItem>
            </MenubarGroup>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarSeparator data-component-x-ray="MenubarSeparator" />
        <MenubarGroup data-component-x-ray="MenubarGroup">
          <MenubarItem data-component-x-ray-trigger="MenubarItem">Cut</MenubarItem>
          <MenubarItem data-component-x-ray-trigger="MenubarItem">Copy</MenubarItem>
          <MenubarItem data-component-x-ray-trigger="MenubarItem">Paste</MenubarItem>
        </MenubarGroup>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
`,va=p({__name:"MenubarWithCheckboxes",setup(u){const o=ee({alwaysShowBookmarksBar:!1,alwaysShowFullUrls:!0}),a=ee({strikethrough:!1,code:!1,superscript:!0});return(i,n)=>(m(),b(e(L),{"data-component-x-ray":"Menubar"},{default:t(()=>[r(e(V),{"data-component-x-ray":"MenubarMenu"},{default:t(()=>[r(e($),{"data-component-x-ray-trigger":"MenuBarTrigger"},{default:t(()=>[...n[5]||(n[5]=[s("View",-1)])]),_:1}),r(e(P),{class:"w-64","data-component-x-ray":"MenubarContent"},{default:t(()=>[r(e(C),{"data-component-x-ray":"MenubarGroup"},{default:t(()=>[r(e(U),{modelValue:o.alwaysShowBookmarksBar,"onUpdate:modelValue":n[0]||(n[0]=d=>o.alwaysShowBookmarksBar=d),"data-component-x-ray-trigger":"MenubarCheckboxItem"},{default:t(()=>[...n[6]||(n[6]=[s(" Always Show Bookmarks Bar ",-1)])]),_:1},8,["modelValue"]),r(e(U),{modelValue:o.alwaysShowFullUrls,"onUpdate:modelValue":n[1]||(n[1]=d=>o.alwaysShowFullUrls=d),"data-component-x-ray-trigger":"MenubarCheckboxItem"},{default:t(()=>[...n[7]||(n[7]=[s(" Always Show Full URLs ",-1)])]),_:1},8,["modelValue"])]),_:1}),r(e(F),{"data-component-x-ray":"MenubarSeparator"}),r(e(C),{"data-component-x-ray":"MenubarGroup"},{default:t(()=>[r(e(f),{inset:!0,"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[n[9]||(n[9]=s(" Reload ",-1)),r(e(w),{"data-component-x-ray-trigger":"MenubarShorcut"},{default:t(()=>[...n[8]||(n[8]=[s("⌘R",-1)])]),_:1})]),_:1}),r(e(f),{disabled:!0,inset:!0,"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[n[11]||(n[11]=s(" Force Reload ",-1)),r(e(w),{"data-component-x-ray-trigger":"MenubarShorcut"},{default:t(()=>[...n[10]||(n[10]=[s("⇧⌘R",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),r(e(V),{"data-component-x-ray":"MenubarMenu"},{default:t(()=>[r(e($),{"data-component-x-ray-trigger":"MenubarTrigger"},{default:t(()=>[...n[12]||(n[12]=[s("Format",-1)])]),_:1}),r(e(P),{"data-component-x-ray":"MenubarContent"},{default:t(()=>[r(e(U),{modelValue:a.strikethrough,"onUpdate:modelValue":n[2]||(n[2]=d=>a.strikethrough=d),"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[...n[13]||(n[13]=[s(" Strikethrough ",-1)])]),_:1},8,["modelValue"]),r(e(U),{modelValue:a.code,"onUpdate:modelValue":n[3]||(n[3]=d=>a.code=d),"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[...n[14]||(n[14]=[s(" Code ",-1)])]),_:1},8,["modelValue"]),r(e(U),{modelValue:a.superscript,"onUpdate:modelValue":n[4]||(n[4]=d=>a.superscript=d),"data-component-x-ray-trigger":"MenubarItem"},{default:t(()=>[...n[15]||(n[15]=[s(" Superscript ",-1)])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}}),Ia=`<script setup lang="ts">
import { reactive } from "vue";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/shared/components/ui/menubar";

const view = reactive({
  alwaysShowBookmarksBar: false,
  alwaysShowFullUrls: true,
});

const format = reactive({
  strikethrough: false,
  code: false,
  superscript: true,
});
<\/script>

<template>
  <Menubar data-component-x-ray="Menubar">
    <MenubarMenu data-component-x-ray="MenubarMenu">
      <MenubarTrigger data-component-x-ray-trigger="MenuBarTrigger">View</MenubarTrigger>
      <MenubarContent class="w-64" data-component-x-ray="MenubarContent">
        <MenubarGroup data-component-x-ray="MenubarGroup">
          <MenubarCheckboxItem
            v-model="view.alwaysShowBookmarksBar"
            data-component-x-ray-trigger="MenubarCheckboxItem"
          >
            Always Show Bookmarks Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            v-model="view.alwaysShowFullUrls"
            data-component-x-ray-trigger="MenubarCheckboxItem"
          >
            Always Show Full URLs
          </MenubarCheckboxItem>
        </MenubarGroup>
        <MenubarSeparator data-component-x-ray="MenubarSeparator" />
        <MenubarGroup data-component-x-ray="MenubarGroup">
          <MenubarItem :inset="true" data-component-x-ray-trigger="MenubarItem">
            Reload
            <MenubarShortcut data-component-x-ray-trigger="MenubarShorcut">⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem :disabled="true" :inset="true" data-component-x-ray-trigger="MenubarItem">
            Force Reload
            <MenubarShortcut data-component-x-ray-trigger="MenubarShorcut">⇧⌘R</MenubarShortcut>
          </MenubarItem>
        </MenubarGroup>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu data-component-x-ray="MenubarMenu">
      <MenubarTrigger data-component-x-ray-trigger="MenubarTrigger">Format</MenubarTrigger>
      <MenubarContent data-component-x-ray="MenubarContent">
        <MenubarCheckboxItem
          v-model="format.strikethrough"
          data-component-x-ray-trigger="MenubarItem"
        >
          Strikethrough
        </MenubarCheckboxItem>
        <MenubarCheckboxItem v-model="format.code" data-component-x-ray-trigger="MenubarItem">
          Code
        </MenubarCheckboxItem>
        <MenubarCheckboxItem
          v-model="format.superscript"
          data-component-x-ray-trigger="MenubarItem"
        >
          Superscript
        </MenubarCheckboxItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
`,Sa=p({__name:"MenubarWithRadio",setup(u){const o=O("benoit"),a=O("system");return(i,n)=>(m(),b(e(L),{"data-component-x-ray":"Menubar"},{default:t(()=>[r(e(V),{"data-component-x-ray":"MenubarMenu"},{default:t(()=>[r(e($),{"data-component-x-ray-trigger":"MenubarTrigger"},{default:t(()=>[...n[2]||(n[2]=[s("Profiles",-1)])]),_:1}),r(e(P),{"data-component-x-ray":"MenubarContent"},{default:t(()=>[r(e(ae),{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=d=>o.value=d),"data-component-x-ray":"MenubarRadioGroup"},{default:t(()=>[r(e(z),{value:"andy","data-component-x-ray-trigger":"MenubarRadioItem"},{default:t(()=>[...n[3]||(n[3]=[s(" Andy ",-1)])]),_:1}),r(e(z),{value:"benoit","data-component-x-ray-trigger":"MenubarRadioItem"},{default:t(()=>[...n[4]||(n[4]=[s(" Benoit ",-1)])]),_:1}),r(e(z),{value:"luis","data-component-x-ray-trigger":"MenubarRadioItem"},{default:t(()=>[...n[5]||(n[5]=[s(" Luis ",-1)])]),_:1})]),_:1},8,["modelValue"]),r(e(F),{"data-component-x-ray":"MenubarSeparator"}),r(e(C),{"data-component-x-ray":"MenubarGroup"},{default:t(()=>[r(e(f),{inset:"","data-component-x-ray-trigger":"MenubarRadioItem"},{default:t(()=>[...n[6]||(n[6]=[s(" Edit... ",-1)])]),_:1}),r(e(f),{inset:"","data-component-x-ray-trigger":"MenubarRadioItem"},{default:t(()=>[...n[7]||(n[7]=[s(" Add Profile... ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),r(e(V),{"data-component-x-ray":"MenubarMenu"},{default:t(()=>[r(e($),{"data-component-x-ray-trigger":"MenubarTrigger"},{default:t(()=>[...n[8]||(n[8]=[s("Theme",-1)])]),_:1}),r(e(P),{"data-component-x-ray":"MenubarContent"},{default:t(()=>[r(e(ae),{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=d=>a.value=d),"data-component-x-ray":"MenubarRadioGroup"},{default:t(()=>[r(e(z),{value:"light","data-component-x-ray-trigger":"MenubarRadioItem"},{default:t(()=>[...n[9]||(n[9]=[s(" Light ",-1)])]),_:1}),r(e(z),{value:"dark","data-component-x-ray-trigger":"MenubarRadioItem"},{default:t(()=>[...n[10]||(n[10]=[s(" Dark ",-1)])]),_:1}),r(e(z),{value:"system","data-component-x-ray-trigger":"MenubarRadioItem"},{default:t(()=>[...n[11]||(n[11]=[s(" System ",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}}),Ca=`<script setup lang="ts">
import { ref } from "vue";
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/shared/components/ui/menubar";

const user = ref("benoit");
const theme = ref("system");
<\/script>

<template>
  <Menubar data-component-x-ray="Menubar">
    <MenubarMenu data-component-x-ray="MenubarMenu">
      <MenubarTrigger data-component-x-ray-trigger="MenubarTrigger">Profiles</MenubarTrigger>
      <MenubarContent data-component-x-ray="MenubarContent">
        <MenubarRadioGroup v-model="user" data-component-x-ray="MenubarRadioGroup">
          <MenubarRadioItem value="andy" data-component-x-ray-trigger="MenubarRadioItem">
            Andy
          </MenubarRadioItem>
          <MenubarRadioItem value="benoit" data-component-x-ray-trigger="MenubarRadioItem">
            Benoit
          </MenubarRadioItem>
          <MenubarRadioItem value="luis" data-component-x-ray-trigger="MenubarRadioItem">
            Luis
          </MenubarRadioItem>
        </MenubarRadioGroup>
        <MenubarSeparator data-component-x-ray="MenubarSeparator" />
        <MenubarGroup data-component-x-ray="MenubarGroup">
          <MenubarItem inset data-component-x-ray-trigger="MenubarRadioItem"> Edit... </MenubarItem>
          <MenubarItem inset data-component-x-ray-trigger="MenubarRadioItem">
            Add Profile...
          </MenubarItem>
        </MenubarGroup>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu data-component-x-ray="MenubarMenu">
      <MenubarTrigger data-component-x-ray-trigger="MenubarTrigger">Theme</MenubarTrigger>
      <MenubarContent data-component-x-ray="MenubarContent">
        <MenubarRadioGroup v-model="theme" data-component-x-ray="MenubarRadioGroup">
          <MenubarRadioItem value="light" data-component-x-ray-trigger="MenubarRadioItem">
            Light
          </MenubarRadioItem>
          <MenubarRadioItem value="dark" data-component-x-ray-trigger="MenubarRadioItem">
            Dark
          </MenubarRadioItem>
          <MenubarRadioItem value="system" data-component-x-ray-trigger="MenubarRadioItem">
            System
          </MenubarRadioItem>
        </MenubarRadioGroup>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
`,wa={class:"@container max-w-200 mx-auto"},ha={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},La=p({__name:"_Examples",setup(u){return(o,a)=>(m(),ie("div",wa,[Q("div",ha,[r(D,{"raw-component":e(ya)},{title:t(()=>[...a[0]||(a[0]=[s(" Basic ",-1)])]),example:t(()=>[r(ca)]),_:1},8,["raw-component"]),r(D,{"raw-component":e(_a)},{title:t(()=>[...a[1]||(a[1]=[s(" With Submenu ",-1)])]),example:t(()=>[r(xa)]),_:1},8,["raw-component"]),r(D,{"raw-component":e(Ia)},{title:t(()=>[...a[2]||(a[2]=[s(" With Checkboxes ",-1)])]),example:t(()=>[r(va)]),_:1},8,["raw-component"]),r(D,{"raw-component":e(Ca)},{title:t(()=>[...a[3]||(a[3]=[s(" With Radio ",-1)])]),example:t(()=>[r(Sa)]),_:1},8,["raw-component"])])]))}});export{La as default};
