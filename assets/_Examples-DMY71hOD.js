import{_ as s}from"./ExampleCard.vue_vue_type_script_setup_true_lang-Bw_I79uB.js";import{_ as i}from"./Input.vue_vue_type_script_setup_true_lang-Dw7__tN9.js";import{d,o as l,a as c,u as n,H as a,D as e,I as o,z as x,A as y}from"./DialogTitle.vue_vue_type_script_setup_true_lang-DBPyUkvP.js";import{_ as p}from"./index-B4qjL25a.js";import{_ as r}from"./FieldLabel.vue_vue_type_script_setup_true_lang-BcLvcLmX.js";import{_ as F}from"./FieldDescription.vue_vue_type_script_setup_true_lang-Gsnn_ShZ.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-D5HAnf0P.js";import"./Label.vue_vue_type_script_setup_true_lang-B68UebqL.js";const f=d({__name:"InputBasic",setup(m){return(u,t)=>(l(),c(n(i),{type:"email",placeholder:"Email","data-component-x-ray-trigger":"Input"}))}}),_=`<script setup lang="ts">
import { Input } from "@/components/ui/input";
<\/script>

<template>
  <Input type="email" placeholder="Email" data-component-x-ray-trigger="Input" />
</template>
`,b=d({__name:"InputInvalid",setup(m){return(u,t)=>(l(),c(n(i),{type:"text",placeholder:"Error","aria-invalid":!0,"data-component-x-ray-trigger":"Input"}))}}),g=`<script setup lang="ts">
import { Input } from "@/components/ui/input";
<\/script>

<template>
  <Input
    type="text"
    placeholder="Error"
    :aria-invalid="true"
    data-component-x-ray-trigger="Input"
  />
</template>
`,I=d({__name:"InputWithLabel",setup(m){return(u,t)=>(l(),c(n(p),{"data-component-x-ray":"Field"},{default:a(()=>[e(n(r),{for:"input-demo-email","data-component-x-ray":"FieldLabel"},{default:a(()=>[...t[0]||(t[0]=[o(" Email ",-1)])]),_:1}),e(n(i),{id:"input-demo-email",type:"email",placeholder:"name@example.com","data-component-x-ray-trigger":"Input"})]),_:1}))}}),L=`<script setup lang="ts">
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
<\/script>

<template>
  <Field data-component-x-ray="Field">
    <FieldLabel for="input-demo-email" data-component-x-ray="FieldLabel"> Email </FieldLabel>
    <Input
      id="input-demo-email"
      type="email"
      placeholder="name@example.com"
      data-component-x-ray-trigger="Input"
    />
  </Field>
</template>
`,w=d({__name:"InputWithDescription",setup(m){return(u,t)=>(l(),c(n(p),{"data-component-x-ray":"Field"},{default:a(()=>[e(n(r),{for:"input-demo-username","data-component-x-ray":"FieldLabel"},{default:a(()=>[...t[0]||(t[0]=[o(" Username ",-1)])]),_:1}),e(n(i),{id:"input-demo-username",type:"text",placeholder:"Enter your username","data-component-x-ray-trigger":"Input"}),e(n(F),{"data-component-x-ray":"FieldDescription"},{default:a(()=>[...t[1]||(t[1]=[o(" Choose a unique username for your account. ",-1)])]),_:1})]),_:1}))}}),h=`<script setup lang="ts">
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
<\/script>

<template>
  <Field data-component-x-ray="Field">
    <FieldLabel for="input-demo-username" data-component-x-ray="FieldLabel"> Username </FieldLabel>
    <Input
      id="input-demo-username"
      type="text"
      placeholder="Enter your username"
      data-component-x-ray-trigger="Input"
    />
    <FieldDescription data-component-x-ray="FieldDescription">
      Choose a unique username for your account.
    </FieldDescription>
  </Field>
</template>
`,D=d({__name:"InputDisabled",setup(m){return(u,t)=>(l(),c(n(p),{"data-component-x-ray":"Field"},{default:a(()=>[e(n(r),{for:"input-demo-disabled","data-component-x-ray":"FieldLabel"},{default:a(()=>[...t[0]||(t[0]=[o(" Email ",-1)])]),_:1}),e(n(i),{id:"input-demo-disabled",type:"email",placeholder:"Email",disabled:!0,"data-component-x-ray-trigger":"Input"})]),_:1}))}}),E=`<script setup lang="ts">
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
<\/script>

<template>
  <Field data-component-x-ray="Field">
    <FieldLabel for="input-demo-disabled" data-component-x-ray="FieldLabel"> Email </FieldLabel>
    <Input
      id="input-demo-disabled"
      type="email"
      placeholder="Email"
      :disabled="true"
      data-component-x-ray-trigger="Input"
    />
  </Field>
</template>
`,$={class:"flex w-full flex-col gap-6"},v=d({__name:"InputTypes",setup(m){return(u,t)=>(l(),x("div",$,[e(n(p),{"data-component-x-ray":"Field"},{default:a(()=>[e(n(r),{for:"input-demo-password","data-component-x-ray":"FieldLabel"},{default:a(()=>[...t[0]||(t[0]=[o(" Password ",-1)])]),_:1}),e(n(i),{id:"input-demo-password",type:"password",placeholder:"Password","data-component-x-ray-trigger":"Input"})]),_:1}),e(n(p),{"data-component-x-ray":"Field"},{default:a(()=>[e(n(r),{for:"input-demo-tel","data-component-x-ray":"FieldLabel"},{default:a(()=>[...t[1]||(t[1]=[o(" Phone ",-1)])]),_:1}),e(n(i),{id:"input-demo-tel",type:"tel",placeholder:"+1 (555) 123-4567","data-component-x-ray-trigger":"Input"})]),_:1}),e(n(p),{"data-component-x-ray":"Field"},{default:a(()=>[e(n(r),{for:"input-demo-url","data-component-x-ray":"FieldLabel"},{default:a(()=>[...t[2]||(t[2]=[o(" URL ",-1)])]),_:1}),e(n(i),{id:"input-demo-url",type:"url",placeholder:"https://example.com","data-component-x-ray-trigger":"Input"})]),_:1}),e(n(p),{"data-component-x-ray":"Field"},{default:a(()=>[e(n(r),{for:"input-demo-search","data-component-x-ray":"FieldLabel"},{default:a(()=>[...t[3]||(t[3]=[o(" Search ",-1)])]),_:1}),e(n(i),{id:"input-demo-search",type:"search",placeholder:"Search","data-component-x-ray-trigger":"Input"})]),_:1}),e(n(p),{"data-component-x-ray":"Field"},{default:a(()=>[e(n(r),{for:"input-demo-number","data-component-x-ray":"FieldLabel"},{default:a(()=>[...t[4]||(t[4]=[o(" Number ",-1)])]),_:1}),e(n(i),{id:"input-demo-number",type:"number",placeholder:"123","data-component-x-ray-trigger":"Input"})]),_:1}),e(n(p),{"data-component-x-ray":"Field"},{default:a(()=>[e(n(r),{for:"input-demo-date","data-component-x-ray":"FieldLabel"},{default:a(()=>[...t[5]||(t[5]=[o(" Date ",-1)])]),_:1}),e(n(i),{id:"input-demo-date",type:"date","data-component-x-ray-trigger":"Input"})]),_:1}),e(n(p),{"data-component-x-ray":"Field"},{default:a(()=>[e(n(r),{for:"input-demo-time","data-component-x-ray":"FieldLabel"},{default:a(()=>[...t[6]||(t[6]=[o(" Time ",-1)])]),_:1}),e(n(i),{id:"input-demo-time",type:"time","data-component-x-ray-trigger":"Input"})]),_:1}),e(n(p),{"data-component-x-ray":"Field"},{default:a(()=>[e(n(r),{for:"input-demo-file","data-component-x-ray":"FieldLabel"},{default:a(()=>[...t[7]||(t[7]=[o(" File ",-1)])]),_:1}),e(n(i),{id:"input-demo-file",type:"file","data-component-x-ray-trigger":"Input"})]),_:1})]))}}),R=`<script setup lang="ts">
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
<\/script>

<template>
  <div class="flex w-full flex-col gap-6">
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-demo-password" data-component-x-ray="FieldLabel">
        Password
      </FieldLabel>
      <Input
        id="input-demo-password"
        type="password"
        placeholder="Password"
        data-component-x-ray-trigger="Input"
      />
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-demo-tel" data-component-x-ray="FieldLabel"> Phone </FieldLabel>
      <Input
        id="input-demo-tel"
        type="tel"
        placeholder="+1 (555) 123-4567"
        data-component-x-ray-trigger="Input"
      />
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-demo-url" data-component-x-ray="FieldLabel"> URL </FieldLabel>
      <Input
        id="input-demo-url"
        type="url"
        placeholder="https://example.com"
        data-component-x-ray-trigger="Input"
      />
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-demo-search" data-component-x-ray="FieldLabel"> Search </FieldLabel>
      <Input
        id="input-demo-search"
        type="search"
        placeholder="Search"
        data-component-x-ray-trigger="Input"
      />
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-demo-number" data-component-x-ray="FieldLabel"> Number </FieldLabel>
      <Input
        id="input-demo-number"
        type="number"
        placeholder="123"
        data-component-x-ray-trigger="Input"
      />
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-demo-date" data-component-x-ray="FieldLabel"> Date </FieldLabel>
      <Input id="input-demo-date" type="date" data-component-x-ray-trigger="Input" />
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-demo-time" data-component-x-ray="FieldLabel"> Time </FieldLabel>
      <Input id="input-demo-time" type="time" data-component-x-ray-trigger="Input" />
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="input-demo-file" data-component-x-ray="FieldLabel"> File </FieldLabel>
      <Input id="input-demo-file" type="file" data-component-x-ray-trigger="Input" />
    </Field>
  </div>
</template>
`,B={class:"@container max-w-200 mx-auto"},P={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},q=d({__name:"_Examples",setup(m){return(u,t)=>(l(),x("div",B,[y("div",P,[e(s,{"raw-component":n(_)},{title:a(()=>[...t[0]||(t[0]=[o(" Basic ",-1)])]),example:a(()=>[e(f)]),_:1},8,["raw-component"]),e(s,{"raw-component":n(g)},{title:a(()=>[...t[1]||(t[1]=[o(" Invalid ",-1)])]),example:a(()=>[e(b)]),_:1},8,["raw-component"]),e(s,{"raw-component":n(L)},{title:a(()=>[...t[2]||(t[2]=[o(" With Label ",-1)])]),example:a(()=>[e(I)]),_:1},8,["raw-component"]),e(s,{"raw-component":n(h)},{title:a(()=>[...t[3]||(t[3]=[o(" With Description ",-1)])]),example:a(()=>[e(w)]),_:1},8,["raw-component"]),e(s,{"raw-component":n(E)},{title:a(()=>[...t[4]||(t[4]=[o(" Disabled ",-1)])]),example:a(()=>[e(D)]),_:1},8,["raw-component"]),e(s,{"raw-component":n(R)},{title:a(()=>[...t[5]||(t[5]=[o(" Input Types ",-1)])]),example:a(()=>[e(v)]),_:1},8,["raw-component"])])]))}});export{q as default};
