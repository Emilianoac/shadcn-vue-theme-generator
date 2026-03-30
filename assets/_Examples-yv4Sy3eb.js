import{_ as m}from"./ExampleCard.vue_vue_type_script_setup_true_lang-Bw_I79uB.js";import{_ as d}from"./Textarea.vue_vue_type_script_setup_true_lang-CIPJUNA8.js";import{d as o,o as s,a as l,u as r,H as a,D as t,I as n,z as _,A as u}from"./DialogTitle.vue_vue_type_script_setup_true_lang-DBPyUkvP.js";import{_ as c}from"./index-B4qjL25a.js";import{_ as x}from"./FieldLabel.vue_vue_type_script_setup_true_lang-BcLvcLmX.js";import{_ as g}from"./FieldDescription.vue_vue_type_script_setup_true_lang-Gsnn_ShZ.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-D5HAnf0P.js";import"./Label.vue_vue_type_script_setup_true_lang-B68UebqL.js";const y=o({__name:"TextareaBasic",setup(i){return(p,e)=>(s(),l(r(d),{placeholder:"Type your message here.","data-component-x-ray-trigger":"Textarea"}))}}),f=`<script setup lang="ts">
import { Textarea } from "@/components/ui/textarea";
<\/script>

<template>
  <Textarea placeholder="Type your message here." data-component-x-ray-trigger="Textarea" />
</template>
`,T=o({__name:"TextareaInvalid",setup(i){return(p,e)=>(s(),l(r(d),{placeholder:"Type your message here.","aria-invalid":!0,"data-component-x-ray-trigger":"Textarea"}))}}),F=`<script setup lang="ts">
import { Textarea } from "@/components/ui/textarea";
<\/script>

<template>
  <Textarea
    placeholder="Type your message here."
    :aria-invalid="true"
    data-component-x-ray-trigger="Textarea"
  />
</template>
`,b=o({__name:"TextareaWithLabel",setup(i){return(p,e)=>(s(),l(r(c),{"data-component-x-ray":"Field"},{default:a(()=>[t(r(x),{for:"textarea-demo-message","data-component-x-ray":"FieldLabel"},{default:a(()=>[...e[0]||(e[0]=[n(" Message ",-1)])]),_:1}),t(r(d),{id:"textarea-demo-message",placeholder:"Type your message here.",rows:6,"data-component-x-ray-trigger":"Textarea"})]),_:1}))}}),w=`<script setup lang="ts">
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
<\/script>

<template>
  <Field data-component-x-ray="Field">
    <FieldLabel for="textarea-demo-message" data-component-x-ray="FieldLabel"> Message </FieldLabel>
    <Textarea
      id="textarea-demo-message"
      placeholder="Type your message here."
      :rows="6"
      data-component-x-ray-trigger="Textarea"
    />
  </Field>
</template>
`,L=o({__name:"TextareaWithDescription",setup(i){return(p,e)=>(s(),l(r(c),{"data-component-x-ray":"Field"},{default:a(()=>[t(r(x),{for:"textarea-demo-message-2","data-component-x-ray":"FieldLabel"},{default:a(()=>[...e[0]||(e[0]=[n(" Message ",-1)])]),_:1}),t(r(d),{id:"textarea-demo-message-2",placeholder:"Type your message here.",rows:6,"data-component-x-ray-trigger":"Textarea"}),t(r(g),{"data-component-x-ray":"FieldDescription"},{default:a(()=>[...e[1]||(e[1]=[n(" Type your message and press enter to send. ",-1)])]),_:1})]),_:1}))}}),h=`<script setup lang="ts">
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
<\/script>

<template>
  <Field data-component-x-ray="Field">
    <FieldLabel for="textarea-demo-message-2" data-component-x-ray="FieldLabel">
      Message
    </FieldLabel>
    <Textarea
      id="textarea-demo-message-2"
      placeholder="Type your message here."
      :rows="6"
      data-component-x-ray-trigger="Textarea"
    />
    <FieldDescription data-component-x-ray="FieldDescription">
      Type your message and press enter to send.
    </FieldDescription>
  </Field>
</template>
`,D=o({__name:"TextareaDisabled",setup(i){return(p,e)=>(s(),l(r(c),{"data-component-x-ray":"Field"},{default:a(()=>[t(r(x),{for:"textarea-demo-disabled","data-component-x-ray":"FieldLabel"},{default:a(()=>[...e[0]||(e[0]=[n(" Message ",-1)])]),_:1}),t(r(d),{id:"textarea-demo-disabled",placeholder:"Type your message here.",disabled:!0,"data-component-x-ray-trigger":"Textarea"})]),_:1}))}}),$=`<script setup lang="ts">
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
<\/script>

<template>
  <Field data-component-x-ray="Field">
    <FieldLabel for="textarea-demo-disabled" data-component-x-ray="FieldLabel">
      Message
    </FieldLabel>
    <Textarea
      id="textarea-demo-disabled"
      placeholder="Type your message here."
      :disabled="true"
      data-component-x-ray-trigger="Textarea"
    />
  </Field>
</template>
`,v={class:"@container max-w-200 mx-auto"},B={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},E=o({__name:"_Examples",setup(i){return(p,e)=>(s(),_("div",v,[u("div",B,[t(m,{"raw-component":r(f)},{title:a(()=>[...e[0]||(e[0]=[n(" Basic ",-1)])]),example:a(()=>[t(y)]),_:1},8,["raw-component"]),t(m,{"raw-component":r(F)},{title:a(()=>[...e[1]||(e[1]=[n(" Invalid ",-1)])]),example:a(()=>[t(T)]),_:1},8,["raw-component"]),t(m,{"raw-component":r(w)},{title:a(()=>[...e[2]||(e[2]=[n(" With Label ",-1)])]),example:a(()=>[t(b)]),_:1},8,["raw-component"]),t(m,{"raw-component":r(h)},{title:a(()=>[...e[3]||(e[3]=[n(" With Description ",-1)])]),example:a(()=>[t(L)]),_:1},8,["raw-component"]),t(m,{"raw-component":r($)},{title:a(()=>[...e[4]||(e[4]=[n(" Disabled ",-1)])]),example:a(()=>[t(D)]),_:1},8,["raw-component"])])]))}});export{E as default};
