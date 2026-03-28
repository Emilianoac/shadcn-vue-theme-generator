import{_ as G}from"./ExampleCard.vue_vue_type_script_setup_true_lang-CeNp3otK.js";import{i as A,_ as u,b as s,a as l}from"./index-Baqvd1E8.js";import{g as I,d as c,o as i,a as h,H as o,a3 as B,T as g,u as n,a7 as y,_ as T,z as m,D as t,I as a,A as b}from"./DialogTitle.vue_vue_type_script_setup_true_lang-B-mIWQEK.js";import{S as w}from"./search-CEbpIdEk.js";import{C as v}from"./CoppyButton.vue_vue_type_script_setup_true_lang-Cf2txUt2.js";import{_ as C}from"./Textarea.vue_vue_type_script_setup_true_lang-BE28UUP-.js";import{C as z}from"./code-DncIn0Sy.js";import{S as k}from"./send-iorMdXKF.js";import"./Input.vue_vue_type_script_setup_true_lang-Bt30ug1V.js";import"./TooltipTrigger.vue_vue_type_script_setup_true_lang-DnIH10oF.js";import"./PopperContent-ClNHsZFH.js";import"./useSize-Hxodz3uf.js";import"./VisuallyHidden-fIfXuLIO.js";import"./defu-cjemX7BB.js";import"./TooltipProvider.vue_vue_type_script_setup_true_lang-DYzeRVuw.js";import"./check-CQT1JKGP.js";const $=I("corner-down-left",[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]]);const S=I("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);const M=I("message-square",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]);const L=I("refresh-ccw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]),d=c({__name:"InputGroupButton",props:{variant:{default:"ghost"},size:{default:"xs"},class:{}},setup(e){const r=e;return(p,f)=>(i(),h(n(T),{"data-size":r.size,variant:r.variant,class:g(n(y)(n(A)({size:r.size}),r.class))},{default:o(()=>[B(p.$slots,"default")]),_:3},8,["data-size","variant","class"]))}}),_=c({__name:"InputGroupText",props:{class:{}},setup(e){const r=e;return(p,f)=>(i(),m("span",{class:g(n(y)("text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",r.class))},[B(p.$slots,"default")],2))}}),x=c({__name:"InputGroupTextarea",props:{class:{}},setup(e){const r=e;return(p,f)=>(i(),h(n(C),{"data-slot":"input-group-control",class:g(n(y)("flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",r.class))},null,8,["class"]))}}),q={class:"space-y-4"},R=c({__name:"InputGroupBasic",setup(e){return(r,p)=>(i(),m("div",q,[t(n(u),{"data-component-x-ray":"InputGroup"},{default:o(()=>[t(n(s),{align:"inline-start","data-component-x-ray-trigger":"InputGroupAddon"},{default:o(()=>[t(n(S))]),_:1}),t(n(l),{type:"email",placeholder:"Email","data-component-x-ray-trigger":"InputGroupInput"})]),_:1}),t(n(u),{"data-component-x-ray":"InputGroup"},{default:o(()=>[t(n(l),{type:"text",placeholder:"Username","data-component-x-ray-trigger":"InputGroupInput"}),t(n(s),{align:"inline-end","data-component-x-ray-trigger":"InputGroupAddon"},{default:o(()=>[...p[0]||(p[0]=[a(" @example.com ",-1)])]),_:1})]),_:1}),t(n(u),{"data-component-x-ray":"InputGroup"},{default:o(()=>[t(n(s),{align:"inline-start","data-component-x-ray-trigger":"InputGroupAddon"},{default:o(()=>[...p[1]||(p[1]=[a(" https:// ",-1)])]),_:1}),t(n(l),{type:"text",placeholder:"example.com","data-component-x-ray-trigger":"InputGroupInput"})]),_:1})]))}}),W=`<script setup lang="ts">
import { MailIcon } from "lucide-vue-next";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
<\/script>

<template>
  <div class="space-y-4">
    <InputGroup data-component-x-ray="InputGroup">
      <InputGroupAddon align="inline-start" data-component-x-ray-trigger="InputGroupAddon">
        <MailIcon />
      </InputGroupAddon>
      <InputGroupInput
        type="email"
        placeholder="Email"
        data-component-x-ray-trigger="InputGroupInput"
      />
    </InputGroup>

    <InputGroup data-component-x-ray="InputGroup">
      <InputGroupInput
        type="text"
        placeholder="Username"
        data-component-x-ray-trigger="InputGroupInput"
      />
      <InputGroupAddon align="inline-end" data-component-x-ray-trigger="InputGroupAddon">
        @example.com
      </InputGroupAddon>
    </InputGroup>

    <InputGroup data-component-x-ray="InputGroup">
      <InputGroupAddon align="inline-start" data-component-x-ray-trigger="InputGroupAddon">
        https://
      </InputGroupAddon>
      <InputGroupInput
        type="text"
        placeholder="example.com"
        data-component-x-ray-trigger="InputGroupInput"
      />
    </InputGroup>
  </div>
</template>
`,H={class:"space-y-4"},V=c({__name:"InputGroupWithButton",setup(e){return(r,p)=>(i(),m("div",H,[t(n(u),{"data-component-x-ray":"InputGroup"},{default:o(()=>[t(n(l),{type:"text",placeholder:"Search...","data-component-x-ray-trigger":"InputGroupInput"}),t(n(d),{"data-component-x-ray-trigger":"InputGroupButton"},{default:o(()=>[t(n(w))]),_:1})]),_:1}),t(n(u),{"data-component-x-ray":"InputGroup"},{default:o(()=>[t(n(d),{"data-component-x-ray-trigger":"InputGroupButton"},{default:o(()=>[t(n(v))]),_:1}),t(n(l),{type:"text",placeholder:"Copy this text","data-component-x-ray-trigger":"InputGroupInput"})]),_:1}),t(n(u),{"data-component-x-ray":"InputGroup"},{default:o(()=>[t(n(d),{"data-component-x-ray-trigger":"InputGroupButton"},{default:o(()=>[...p[0]||(p[0]=[a(" - ",-1)])]),_:1}),t(n(l),{type:"number",placeholder:"0","data-component-x-ray-trigger":"InputGroupInput"}),t(n(d),{"data-component-x-ray-trigger":"InputGroupButton"},{default:o(()=>[...p[1]||(p[1]=[a(" + ",-1)])]),_:1})]),_:1})]))}}),D=`<script setup lang="ts">
import { SearchIcon, CopyIcon } from "lucide-vue-next";
import { InputGroup, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
<\/script>

<template>
  <div class="space-y-4">
    <InputGroup data-component-x-ray="InputGroup">
      <InputGroupInput
        type="text"
        placeholder="Search..."
        data-component-x-ray-trigger="InputGroupInput"
      />
      <InputGroupButton data-component-x-ray-trigger="InputGroupButton">
        <SearchIcon />
      </InputGroupButton>
    </InputGroup>

    <InputGroup data-component-x-ray="InputGroup">
      <InputGroupButton data-component-x-ray-trigger="InputGroupButton">
        <CopyIcon />
      </InputGroupButton>
      <InputGroupInput
        type="text"
        placeholder="Copy this text"
        data-component-x-ray-trigger="InputGroupInput"
      />
    </InputGroup>

    <InputGroup data-component-x-ray="InputGroup">
      <InputGroupButton data-component-x-ray-trigger="InputGroupButton"> - </InputGroupButton>
      <InputGroupInput
        type="number"
        placeholder="0"
        data-component-x-ray-trigger="InputGroupInput"
      />
      <InputGroupButton data-component-x-ray-trigger="InputGroupButton"> + </InputGroupButton>
    </InputGroup>
  </div>
</template>
`,E={class:"space-y-4"},N=c({__name:"InputGroupWithTextarea",setup(e){return(r,p)=>(i(),m("div",E,[t(n(u),{"data-component-x-ray":"InputGroup"},{default:o(()=>[t(n(s),{align:"block-start",class:"border-b","data-component-x-ray":"InputGroupAddon"},{default:o(()=>[t(n(_),{class:"font-mono font-medium","data-component-x-ray":"InputGroupText"},{default:o(()=>[t(n(z)),p[0]||(p[0]=a(" script.js ",-1))]),_:1}),t(n(d),{class:"ml-auto",size:"icon-xs","data-component-x-ray-trigger":"InputGroupButton"},{default:o(()=>[t(n(L))]),_:1}),t(n(d),{variant:"ghost",size:"icon-xs","data-component-x-ray-trigger":"InputGroupButton"},{default:o(()=>[t(n(v))]),_:1})]),_:1}),t(n(x),{id:"textarea-code-32",placeholder:"console.log('Hello, world!');",class:"min-h-50 focus-visible:ring-offset-0","data-component-x-ray-trigger":"InputGroupTextarea"}),t(n(s),{align:"block-end",class:"border-t","data-component-x-ray":"InputGroupAddon"},{default:o(()=>[t(n(_),{"data-component-x-ray":"InputGroupText"},{default:o(()=>[...p[1]||(p[1]=[a("Line 1, Column 1",-1)])]),_:1}),t(n(d),{size:"sm",class:"ml-auto",variant:"default","data-component-x-ray-trigger":"InputGroupButton"},{default:o(()=>[p[2]||(p[2]=a(" Run ",-1)),t(n($))]),_:1})]),_:1})]),_:1}),t(n(u),{"data-component-x-ray":"InputGroup"},{default:o(()=>[t(n(s),{align:"inline-start","data-component-x-ray":"InputGroupAddon"},{default:o(()=>[t(n(M))]),_:1}),t(n(x),{placeholder:"Type your message here...",class:"focus-visible:ring-offset-0","data-component-x-ray-trigger":"InputGroupTextarea"})]),_:1}),t(n(u),{"data-component-x-ray":"InputGroup"},{default:o(()=>[t(n(x),{placeholder:"Add a comment...",rows:"4",class:"focus-visible:ring-offset-0","data-component-x-ray-trigger":"InputGroupTextarea"}),t(n(s),{align:"inline-end","data-component-x-ray":"InputGroupAddon"},{default:o(()=>[t(n(k))]),_:1})]),_:1})]))}}),j=`<script setup lang="ts">
import {
  MessageSquareIcon,
  SendIcon,
  CodeIcon,
  CornerDownLeftIcon,
  CopyIcon,
  RefreshCcwIcon,
} from "lucide-vue-next";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
  InputGroupButton,
  InputGroupText,
} from "@/components/ui/input-group";
<\/script>

<template>
  <div class="space-y-4">
    <InputGroup data-component-x-ray="InputGroup">
      <InputGroupAddon align="block-start" class="border-b" data-component-x-ray="InputGroupAddon">
        <InputGroupText class="font-mono font-medium" data-component-x-ray="InputGroupText">
          <CodeIcon />
          script.js
        </InputGroupText>
        <InputGroupButton
          class="ml-auto"
          size="icon-xs"
          data-component-x-ray-trigger="InputGroupButton"
        >
          <RefreshCcwIcon />
        </InputGroupButton>
        <InputGroupButton
          variant="ghost"
          size="icon-xs"
          data-component-x-ray-trigger="InputGroupButton"
        >
          <CopyIcon />
        </InputGroupButton>
      </InputGroupAddon>
      <InputGroupTextarea
        id="textarea-code-32"
        placeholder="console.log('Hello, world!');"
        class="min-h-50 focus-visible:ring-offset-0"
        data-component-x-ray-trigger="InputGroupTextarea"
      />
      <InputGroupAddon align="block-end" class="border-t" data-component-x-ray="InputGroupAddon">
        <InputGroupText data-component-x-ray="InputGroupText">Line 1, Column 1</InputGroupText>
        <InputGroupButton
          size="sm"
          class="ml-auto"
          variant="default"
          data-component-x-ray-trigger="InputGroupButton"
        >
          Run <CornerDownLeftIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>

    <InputGroup data-component-x-ray="InputGroup">
      <InputGroupAddon align="inline-start" data-component-x-ray="InputGroupAddon">
        <MessageSquareIcon />
      </InputGroupAddon>
      <InputGroupTextarea
        placeholder="Type your message here..."
        class="focus-visible:ring-offset-0"
        data-component-x-ray-trigger="InputGroupTextarea"
      />
    </InputGroup>

    <InputGroup data-component-x-ray="InputGroup">
      <InputGroupTextarea
        placeholder="Add a comment..."
        rows="4"
        class="focus-visible:ring-offset-0"
        data-component-x-ray-trigger="InputGroupTextarea"
      />
      <InputGroupAddon align="inline-end" data-component-x-ray="InputGroupAddon">
        <SendIcon />
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
`,U={class:"@container max-w-250 mx-auto"},F={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},sn=c({__name:"_Examples",setup(e){return(r,p)=>(i(),m("div",U,[b("div",F,[t(G,{"raw-component":n(W)},{title:o(()=>[...p[0]||(p[0]=[a(" Basic ",-1)])]),example:o(()=>[t(R)]),_:1},8,["raw-component"]),t(G,{"raw-component":n(D)},{title:o(()=>[...p[1]||(p[1]=[a(" With Button ",-1)])]),example:o(()=>[t(V)]),_:1},8,["raw-component"]),t(G,{"raw-component":n(j)},{title:o(()=>[...p[2]||(p[2]=[a(" With Textarea ",-1)])]),example:o(()=>[t(N)]),_:1},8,["raw-component"])])]))}});export{sn as default};
