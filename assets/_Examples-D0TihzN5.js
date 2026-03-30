import{_ as ee}from"./ExampleCard.vue_vue_type_script_setup_true_lang-Bw_I79uB.js";import{d as m,ak as Q,al as te,aA as ae,w as G,n as J,af as b,o as i,a as f,H as p,a3 as _,u as e,A as E,B as k,am as I,r as j,c as g,an as Y,ap as X,a5 as y,I as P,ag as V,ah as q,j as re,k as se,ao as oe,N as le,bh as ne,g as Z,ai as C,aj as pe,a6 as w,aq as B,z as R,D as x,L as ie,M as ue,R as de,J as ce}from"./DialogTitle.vue_vue_type_script_setup_true_lang-DBPyUkvP.js";import{S as fe}from"./Separator-BeOQHuyh.js";import{u as me}from"./useArrowNavigation-D-pctMGk.js";import{u as ve}from"./useKbd-kRIii9yh.js";import{C as _e}from"./credit-card-7p9sJPA_.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-D5HAnf0P.js";const ye={"aria-live":"polite","aria-atomic":"true",role:"status",style:{transform:"translateX(-100%)",position:"absolute",pointerEvents:"none",opacity:0,margin:0}},[F,ge]=Y("StepperRoot");var Se=m({__name:"StepperRoot",props:{defaultValue:{type:Number,required:!1,default:1},orientation:{type:String,required:!1,default:"horizontal"},dir:{type:String,required:!1},modelValue:{type:Number,required:!1},linear:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue"],setup(o,{expose:a,emit:t}){const r=o,s=t,{dir:c,orientation:u,linear:S}=Q(r),h=te(c),l=j(new Set),n=ae(r,"modelValue",s,{defaultValue:r.defaultValue,passive:r.modelValue===void 0}),d=g(()=>Array.from(l.value)),M=g(()=>n.value===1),K=g(()=>n.value===d.value.length),N=g(()=>l.value.size);function $(v){v>N.value||v<1||l.value.size&&d.value[v]&&d.value[v].getAttribute("disabled")||S.value&&v>(n.value??1)+1||(n.value=v)}function z(){$((n.value??1)+1)}function H(){$((n.value??1)-1)}function O(){return(n.value??1)<N.value}function L(){return(n.value??1)>1}const A=j(null),D=j(null),U=g(()=>A.value?A.value.getAttribute("disabled")==="":!0),W=g(()=>D.value?D.value.getAttribute("disabled")==="":!0);return G(n,async()=>{await J(()=>{A.value=d.value.length&&n.value<d.value.length?d.value[n.value]:null,D.value=d.value.length&&n.value>1?d.value[n.value-2]:null})}),G(d,async()=>{await J(()=>{A.value=d.value.length&&n.value<d.value.length?d.value[n.value]:null,D.value=d.value.length&&n.value>1?d.value[n.value-2]:null})}),ge({modelValue:n,changeModelValue:v=>{n.value=v},orientation:u,dir:h,linear:S,totalStepperItems:l}),a({goToStep:$,nextStep:z,prevStep:H,modelValue:n,totalSteps:N,isNextDisabled:U,isPrevDisabled:W,isFirstStep:M,isLastStep:K,hasNext:O,hasPrev:L}),b(),(v,Xe)=>(i(),f(e(I),{role:"group","aria-label":"progress",as:v.as,"as-child":v.asChild,"data-linear":e(S)?"":void 0,"data-orientation":v.orientation},{default:p(()=>[_(v.$slots,"default",{modelValue:e(n),totalSteps:l.value.size,isNextDisabled:U.value,isPrevDisabled:W.value,isFirstStep:M.value,isLastStep:K.value,goToStep:$,nextStep:z,prevStep:H,hasNext:O,hasPrev:L}),E("div",ye," Step "+k(e(n))+" of "+k(l.value.size),1)]),_:3},8,["as","as-child","data-linear","data-orientation"]))}}),he=Se;const[T,xe]=Y("StepperItem");var be=m({__name:"StepperItem",props:{step:{type:Number,required:!0},disabled:{type:Boolean,required:!1,default:!1},completed:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(o){const a=o,{disabled:t,step:r,completed:s}=Q(a),{forwardRef:c}=b(),u=F(),S=X(void 0,"reka-stepper-item-title"),h=X(void 0,"reka-stepper-item-description"),l=g(()=>s.value?"completed":u.modelValue.value===r.value?"active":u.modelValue.value>r.value?"completed":"inactive"),n=g(()=>t.value?!1:u.linear.value?r.value<=u.modelValue.value||r.value===u.modelValue.value+1:!0);return xe({titleId:S,descriptionId:h,state:l,disabled:t,step:r,isFocusable:n}),(d,M)=>(i(),f(e(I),{ref:e(c),as:d.as,"as-child":d.asChild,"aria-current":l.value==="active"?"true":void 0,"data-state":l.value,disabled:e(t)||!n.value?"":void 0,"data-disabled":e(t)||!n.value?"":void 0,"data-orientation":e(u).orientation.value},{default:p(()=>[_(d.$slots,"default",{state:l.value})]),_:3},8,["as","as-child","aria-current","data-state","disabled","data-disabled","data-orientation"]))}}),Ce=be,we=m({__name:"StepperDescription",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"p"}},setup(o){const a=o;b();const t=T();return(r,s)=>(i(),f(e(I),y(a,{id:e(t).descriptionId}),{default:p(()=>[_(r.$slots,"default")]),_:3},16,["id"]))}}),ke=we,Ie=m({__name:"StepperIndicator",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(o){const a=o,t=T();return b(),(r,s)=>(i(),f(e(I),V(q(a)),{default:p(()=>[_(r.$slots,"default",{step:e(t).step.value},()=>[P(" Step "+k(e(t).step.value),1)])]),_:3},16))}}),Be=Ie,Ve=m({__name:"StepperSeparator",props:{orientation:{type:String,required:!1},decorative:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(o){const a=o,t=F(),r=T();return b(),(s,c)=>(i(),f(e(fe),y(a,{decorative:"",orientation:e(t).orientation.value,"data-state":e(r).state.value}),{default:p(()=>[_(s.$slots,"default")]),_:3},16,["orientation","data-state"]))}}),qe=Ve,Te=m({__name:"StepperTitle",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"h4"}},setup(o){const a=o,t=T();return b(),(r,s)=>(i(),f(e(I),y(a,{id:e(t).titleId}),{default:p(()=>[_(r.$slots,"default")]),_:3},16,["id"]))}}),$e=Te,Ae=m({__name:"StepperTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(o){const a=F(),t=T(),r=ve(),s=g(()=>Array.from(a.totalStepperItems.value));function c(l){if(!t.disabled.value){if(a.linear.value){if((t.step.value<=a.modelValue.value||t.step.value===a.modelValue.value+1)&&l.ctrlKey===!1){a.changeModelValue(t.step.value);return}}else if(l.ctrlKey===!1){a.changeModelValue(t.step.value);return}l.preventDefault()}}function u(l){l.preventDefault(),!t.disabled.value&&((l.key===r.ENTER||l.key===r.SPACE)&&!l.ctrlKey&&!l.shiftKey&&a.changeModelValue(t.step.value),[r.ARROW_LEFT,r.ARROW_RIGHT,r.ARROW_UP,r.ARROW_DOWN].includes(l.key)&&me(l,ne(),void 0,{itemsArray:s.value,focus:!0,loop:!1,arrowKeyOptions:a.orientation.value,dir:a.dir.value}))}const{forwardRef:S,currentElement:h}=b();return re(()=>{a.totalStepperItems.value.add(h.value)}),se(()=>{a.totalStepperItems.value.delete(h.value)}),(l,n)=>(i(),f(e(I),{ref:e(S),type:l.as==="button"?"button":void 0,as:l.as,"as-child":l.asChild,"data-state":e(t).state.value,disabled:e(t).disabled.value||!e(t).isFocusable.value?"":void 0,"data-disabled":e(t).disabled.value||!e(t).isFocusable.value?"":void 0,"data-orientation":e(a).orientation.value,tabindex:e(t).isFocusable.value?0:-1,"aria-describedby":e(t).descriptionId,"aria-labelledby":e(t).titleId,onMousedown:le(c,["left"]),onKeydown:oe(u,["enter","space","left","right","up","down"])},{default:p(()=>[_(l.$slots,"default")]),_:3},8,["type","as","as-child","data-state","disabled","data-disabled","data-orientation","tabindex","aria-describedby","aria-labelledby"]))}}),De=Ae;const Re=Z("book-user",[["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}]]);const Pe=Z("truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]),Me=m({__name:"Stepper",props:{defaultValue:{},orientation:{},dir:{},modelValue:{},linear:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["update:modelValue"],setup(o,{emit:a}){const t=o,r=a,s=C(t,"class"),c=pe(s,r);return(u,S)=>(i(),f(e(he),y({class:e(w)("flex gap-2",t.class)},e(c)),{default:p(h=>[_(u.$slots,"default",V(q(h)))]),_:3},16,["class"]))}}),Ne=m({__name:"StepperDescription",props:{asChild:{type:Boolean},as:{},class:{}},setup(o){const a=o,t=C(a,"class"),r=B(t);return(s,c)=>(i(),f(e(ke),y(e(r),{class:e(w)("text-xs text-muted-foreground",a.class)}),{default:p(u=>[_(s.$slots,"default",V(q(u)))]),_:3},16,["class"]))}}),je=m({__name:"StepperIndicator",props:{asChild:{type:Boolean},as:{},class:{}},setup(o){const a=o,t=C(a,"class"),r=B(t);return(s,c)=>(i(),f(e(Be),y(e(r),{class:e(w)("inline-flex items-center justify-center rounded-full text-muted-foreground/50 w-8 h-8","group-data-[disabled]:text-muted-foreground group-data-[disabled]:opacity-50","group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground","group-data-[state=completed]:bg-accent group-data-[state=completed]:text-accent-foreground",a.class)}),{default:p(u=>[_(s.$slots,"default",V(q(u)))]),_:3},16,["class"]))}}),Ee=m({__name:"StepperItem",props:{step:{},disabled:{type:Boolean},completed:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(o){const a=o,t=C(a,"class"),r=B(t);return(s,c)=>(i(),f(e(Ce),y(e(r),{class:e(w)("flex items-center gap-2 group data-[disabled]:pointer-events-none",a.class)}),{default:p(u=>[_(s.$slots,"default",V(q(u)))]),_:3},16,["class"]))}}),Fe=m({__name:"StepperSeparator",props:{orientation:{},decorative:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(o){const a=o,t=C(a,"class"),r=B(t);return(s,c)=>(i(),f(e(qe),y(e(r),{class:e(w)("bg-muted","group-data-[disabled]:bg-muted group-data-[disabled]:opacity-50","group-data-[state=completed]:bg-accent",a.class)}),null,16,["class"]))}}),Ke=m({__name:"StepperTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(o){const a=o,t=C(a,"class"),r=B(t);return(s,c)=>(i(),f(e($e),y(e(r),{class:e(w)("text-md font-semibold whitespace-nowrap",a.class)}),{default:p(()=>[_(s.$slots,"default")]),_:3},16,["class"]))}}),ze=m({__name:"StepperTrigger",props:{asChild:{type:Boolean},as:{},class:{}},setup(o){const a=o,t=C(a,"class"),r=B(t);return(s,c)=>(i(),f(e(De),y(e(r),{class:e(w)("p-1 flex flex-col items-center text-center gap-1 rounded-md",a.class)}),{default:p(()=>[_(s.$slots,"default")]),_:3},16,["class"]))}}),He={class:"flex justify-center"},Oe={key:1},Le={class:"flex flex-col items-center"},Ue=m({__name:"StepperBasic",setup(o){const a=[{step:1,title:"Address",description:"Add your address",icon:Re},{step:2,title:"Shipping",description:"Set your preferred",icon:Pe},{step:3,title:"Payment",description:"Add any payment",icon:_e},{step:4,title:"Checkout",description:"Confirm your order"}];return(t,r)=>(i(),R("div",He,[x(e(Me),{class:"flex w-10/12 items-start gap-2","data-component-x-ray":"Stepper"},{default:p(()=>[(i(),R(ie,null,ue(a,s=>x(e(Ee),{key:s.step,step:s.step,class:"relative flex w-full flex-col items-center justify-center","data-component-x-ray-trigger":"StepperItem"},{default:p(()=>[x(e(ze),{"data-component-x-ray-trigger":"StepperTrigger"},{default:p(()=>[x(e(je),{class:"bg-muted","data-component-x-ray-trigger":"StepperIndicator"},{default:p(({step:c})=>[s.icon?(i(),f(de(s.icon),{key:0,class:"w-4 h-4"})):(i(),R("span",Oe,k(c),1))]),_:2},1024)]),_:2},1024),s.step!==a[a.length-1]?.step?(i(),f(e(Fe),{key:0,class:"absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary","data-component-x-ray":"StepperSeparator"})):ce("",!0),E("div",Le,[x(e(Ke),{"data-component-x-ray":"StepperTitle"},{default:p(()=>[P(k(s.title),1)]),_:2},1024),x(e(Ne),{"data-component-x-ray":"StepperDescription"},{default:p(()=>[P(k(s.description),1)]),_:2},1024)])]),_:2},1032,["step"])),64))]),_:1})]))}}),We=`<script setup lang="ts">
import { BookUser, CreditCard, Truck } from "lucide-vue-next";
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";

const steps = [
  {
    step: 1,
    title: "Address",
    description: "Add your address",
    icon: BookUser,
  },
  {
    step: 2,
    title: "Shipping",
    description: "Set your preferred",
    icon: Truck,
  },
  {
    step: 3,
    title: "Payment",
    description: "Add any payment",
    icon: CreditCard,
  },
  {
    step: 4,
    title: "Checkout",
    description: "Confirm your order",
  },
];
<\/script>

<template>
  <div class="flex justify-center">
    <Stepper class="flex w-10/12 items-start gap-2" data-component-x-ray="Stepper">
      <StepperItem
        v-for="item in steps"
        :key="item.step"
        :step="item.step"
        class="relative flex w-full flex-col items-center justify-center"
        data-component-x-ray-trigger="StepperItem"
      >
        <StepperTrigger data-component-x-ray-trigger="StepperTrigger">
          <StepperIndicator
            v-slot="{ step }"
            class="bg-muted"
            data-component-x-ray-trigger="StepperIndicator"
          >
            <template v-if="item.icon">
              <component :is="item.icon" class="w-4 h-4" />
            </template>
            <span v-else>{{ step }}</span>
          </StepperIndicator>
        </StepperTrigger>
        <StepperSeparator
          v-if="item.step !== steps[steps.length - 1]?.step"
          class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
          data-component-x-ray="StepperSeparator"
        />
        <div class="flex flex-col items-center">
          <StepperTitle data-component-x-ray="StepperTitle">
            {{ item.title }}
          </StepperTitle>
          <StepperDescription data-component-x-ray="StepperDescription">
            {{ item.description }}
          </StepperDescription>
        </div>
      </StepperItem>
    </Stepper>
  </div>
</template>
`,Ge={class:"@container max-w-200 mx-auto"},Je={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},st=m({__name:"_Examples",setup(o){return(a,t)=>(i(),R("div",Ge,[E("div",Je,[x(ee,{"raw-component":e(We),class:"col-span-1 @xl:col-span-2"},{title:p(()=>[...t[0]||(t[0]=[P(" Basic ",-1)])]),example:p(()=>[x(Ue)]),_:1},8,["raw-component"])])]))}});export{st as default};
