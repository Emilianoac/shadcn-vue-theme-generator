import{_ as F}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DnoCk-kW.js";import{_ as i}from"./index-CcLcvdvn.js";import{_ as r}from"./FieldLabel.vue_vue_type_script_setup_true_lang-DaLNUdIN.js";import{a as d,_ as g}from"./RadioGroupItem.vue_vue_type_script_setup_true_lang-7Su16kSO.js";import{d as m,o as p,e as c,H as t,D as e,u as a,I as n,A as l,z as R}from"./highlight-DV_B57Hj.js";import{_ as x}from"./FieldContent.vue_vue_type_script_setup_true_lang-DdmB4OAk.js";import{_ as f}from"./FieldDescription.vue_vue_type_script_setup_true_lang-DKlLGon5.js";import{_ as y,a as b}from"./FieldSet.vue_vue_type_script_setup_true_lang-DMt-2p1-.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-CrlOy3bU.js";import"./Label.vue_vue_type_script_setup_true_lang-BLtXXxKJ.js";import"./RovingFocusItem-CIWXJ5zR.js";import"./Collection-BzhLJ3ey.js";import"./usePrimitiveElement-CC4NqMuD.js";import"./utils-B1vU7hCd.js";import"./RovingFocusGroup-BkcohOEU.js";import"./useFormControl-Dw7qtzdV.js";import"./VisuallyHiddenInput-b5QhEy_5.js";import"./ohash.D__AXeF1-C-E83dC9.js";import"./circle-zz5Pgbsy.js";const v=m({__name:"RadioGroupBasic",setup(u){return(s,o)=>(p(),c(a(g),{"default-value":"comfortable","data-component-x-ray":"RadioGroup"},{default:t(()=>[e(a(i),{orientation:"horizontal","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"r1",value:"default","data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"r1",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[0]||(o[0]=[n(" Default ",-1)])]),_:1})]),_:1}),e(a(i),{orientation:"horizontal","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"r2",value:"comfortable","data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"r2",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[1]||(o[1]=[n(" Comfortable ",-1)])]),_:1})]),_:1}),e(a(i),{orientation:"horizontal","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"r3",value:"compact","data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"r3",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[2]||(o[2]=[n(" Compact ",-1)])]),_:1})]),_:1})]),_:1}))}}),G=`<script setup lang="ts">
import { Field, FieldLabel } from "@/shared/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
<\/script>

<template>
  <RadioGroup default-value="comfortable" data-component-x-ray="RadioGroup">
    <Field orientation="horizontal" data-component-x-ray="Field">
      <RadioGroupItem id="r1" value="default" data-component-x-ray-trigger="RadioGroupItem" />
      <FieldLabel for="r1" class="font-normal" data-component-x-ray="FieldLabel">
        Default
      </FieldLabel>
    </Field>
    <Field orientation="horizontal" data-component-x-ray="Field">
      <RadioGroupItem id="r2" value="comfortable" data-component-x-ray-trigger="RadioGroupItem" />
      <FieldLabel for="r2" class="font-normal" data-component-x-ray="FieldLabel">
        Comfortable
      </FieldLabel>
    </Field>
    <Field orientation="horizontal" data-component-x-ray="Field">
      <RadioGroupItem id="r3" value="compact" data-component-x-ray-trigger="RadioGroupItem" />
      <FieldLabel for="r3" class="font-normal" data-component-x-ray="FieldLabel">
        Compact
      </FieldLabel>
    </Field>
  </RadioGroup>
</template>
`,L=m({__name:"RadioGroupWithDescriptions",setup(u){return(s,o)=>(p(),c(a(g),{"default-value":"plus","data-component-x-ray":"RadioGroup"},{default:t(()=>[e(a(r),{for:"plus-plan","data-component-x-ray-trigger":"FieldLabel"},{default:t(()=>[e(a(i),{orientation:"horizontal","data-component-x-ray-trigger":"Field"},{default:t(()=>[e(a(x),{"data-component-x-ray-trigger":"FieldContent"},{default:t(()=>[o[1]||(o[1]=l("div",{class:"font-medium"},"Plus",-1)),e(a(f),{"data-component-x-ray-trigger":"FieldDescription"},{default:t(()=>[...o[0]||(o[0]=[n(" For individuals and small teams ",-1)])]),_:1})]),_:1}),e(a(d),{id:"plus-plan",value:"plus","data-component-x-ray-trigger":"RadioGroupItem"})]),_:1})]),_:1}),e(a(r),{for:"pro-plan","data-component-x-ray-trigger":"FieldLabel"},{default:t(()=>[e(a(i),{orientation:"horizontal","data-component-x-ray-trigger":"Field"},{default:t(()=>[e(a(x),{"data-component-x-ray-trigger":"FieldContent"},{default:t(()=>[o[3]||(o[3]=l("div",{class:"font-medium"},"Pro",-1)),e(a(f),{"data-component-x-ray-trigger":"FieldDescription"},{default:t(()=>[...o[2]||(o[2]=[n(" For growing businesses ",-1)])]),_:1})]),_:1}),e(a(d),{id:"pro-plan",value:"pro","data-component-x-ray-trigger":"RadioGroupItem"})]),_:1})]),_:1}),e(a(r),{for:"enterprise-plan","data-component-x-ray-trigger":"FieldLabel"},{default:t(()=>[e(a(i),{orientation:"horizontal","data-component-x-ray-trigger":"Field"},{default:t(()=>[e(a(x),{"data-component-x-ray-trigger":"FieldContent"},{default:t(()=>[o[5]||(o[5]=l("div",{class:"font-medium"},"Enterprise",-1)),e(a(f),{"data-component-x-ray-trigger":"FieldDescription"},{default:t(()=>[...o[4]||(o[4]=[n(" For large teams and enterprises ",-1)])]),_:1})]),_:1}),e(a(d),{id:"enterprise-plan",value:"enterprise","data-component-x-ray-trigger":"RadioGroupItem"})]),_:1})]),_:1})]),_:1}))}}),_=`<script setup lang="ts">
import { Field, FieldContent, FieldDescription, FieldLabel } from "@/shared/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
<\/script>

<template>
  <RadioGroup default-value="plus" data-component-x-ray="RadioGroup">
    <FieldLabel for="plus-plan" data-component-x-ray-trigger="FieldLabel">
      <Field orientation="horizontal" data-component-x-ray-trigger="Field">
        <FieldContent data-component-x-ray-trigger="FieldContent">
          <div class="font-medium">Plus</div>
          <FieldDescription data-component-x-ray-trigger="FieldDescription">
            For individuals and small teams
          </FieldDescription>
        </FieldContent>
        <RadioGroupItem id="plus-plan" value="plus" data-component-x-ray-trigger="RadioGroupItem" />
      </Field>
    </FieldLabel>
    <FieldLabel for="pro-plan" data-component-x-ray-trigger="FieldLabel">
      <Field orientation="horizontal" data-component-x-ray-trigger="Field">
        <FieldContent data-component-x-ray-trigger="FieldContent">
          <div class="font-medium">Pro</div>
          <FieldDescription data-component-x-ray-trigger="FieldDescription">
            For growing businesses
          </FieldDescription>
        </FieldContent>
        <RadioGroupItem id="pro-plan" value="pro" data-component-x-ray-trigger="RadioGroupItem" />
      </Field>
    </FieldLabel>
    <FieldLabel for="enterprise-plan" data-component-x-ray-trigger="FieldLabel">
      <Field orientation="horizontal" data-component-x-ray-trigger="Field">
        <FieldContent data-component-x-ray-trigger="FieldContent">
          <div class="font-medium">Enterprise</div>
          <FieldDescription data-component-x-ray-trigger="FieldDescription">
            For large teams and enterprises
          </FieldDescription>
        </FieldContent>
        <RadioGroupItem
          id="enterprise-plan"
          value="enterprise"
          data-component-x-ray-trigger="RadioGroupItem"
        />
      </Field>
    </FieldLabel>
  </RadioGroup>
</template>
`,I=m({__name:"RadioGroupWithFieldSet",setup(u){return(s,o)=>(p(),c(a(b),{"data-component-x-ray":"FieldSet"},{default:t(()=>[e(a(y),{"data-component-x-ray":"FieldLegend"},{default:t(()=>[...o[0]||(o[0]=[n("Battery Level",-1)])]),_:1}),e(a(f),{"data-component-x-ray":"FieldDescription"},{default:t(()=>[...o[1]||(o[1]=[n(" Choose your preferred battery level. ",-1)])]),_:1}),e(a(g),{"default-value":"medium","data-component-x-ray":"RadioGroup"},{default:t(()=>[e(a(i),{orientation:"horizontal","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"battery-high",value:"high","data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"battery-high",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[2]||(o[2]=[n(" High ",-1)])]),_:1})]),_:1}),e(a(i),{orientation:"horizontal","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"battery-medium",value:"medium","data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"battery-medium",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[3]||(o[3]=[n(" Medium ",-1)])]),_:1})]),_:1}),e(a(i),{orientation:"horizontal","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"battery-low",value:"low","data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"battery-low",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[4]||(o[4]=[n(" Low ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),z=`<script setup lang="ts">
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/shared/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
<\/script>

<template>
  <FieldSet data-component-x-ray="FieldSet">
    <FieldLegend data-component-x-ray="FieldLegend">Battery Level</FieldLegend>
    <FieldDescription data-component-x-ray="FieldDescription">
      Choose your preferred battery level.
    </FieldDescription>
    <RadioGroup default-value="medium" data-component-x-ray="RadioGroup">
      <Field orientation="horizontal" data-component-x-ray="Field">
        <RadioGroupItem
          id="battery-high"
          value="high"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <FieldLabel for="battery-high" class="font-normal" data-component-x-ray="FieldLabel">
          High
        </FieldLabel>
      </Field>
      <Field orientation="horizontal" data-component-x-ray="Field">
        <RadioGroupItem
          id="battery-medium"
          value="medium"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <FieldLabel for="battery-medium" class="font-normal" data-component-x-ray="FieldLabel">
          Medium
        </FieldLabel>
      </Field>
      <Field orientation="horizontal" data-component-x-ray="Field">
        <RadioGroupItem
          id="battery-low"
          value="low"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <FieldLabel for="battery-low" class="font-normal" data-component-x-ray="FieldLabel">
          Low
        </FieldLabel>
      </Field>
    </RadioGroup>
  </FieldSet>
</template>
`,w=m({__name:"RadioGroupGrid",setup(u){return(s,o)=>(p(),c(a(g),{"default-value":"medium",class:"grid grid-cols-2 gap-2","data-component-x-ray":"RadioGroup"},{default:t(()=>[e(a(r),{for:"size-small","data-component-x-ray-trigger":"FieldLabel"},{default:t(()=>[e(a(i),{orientation:"horizontal","data-component-x-ray-trigger":"Field"},{default:t(()=>[e(a(d),{id:"size-small",value:"small","data-component-x-ray-trigger":"RadioGroupItem"}),o[0]||(o[0]=l("div",{class:"font-medium"},"Small",-1))]),_:1})]),_:1}),e(a(r),{for:"size-medium","data-component-x-ray-trigger":"FieldLabel"},{default:t(()=>[e(a(i),{orientation:"horizontal","data-component-x-ray-trigger":"Field"},{default:t(()=>[e(a(d),{id:"size-medium",value:"medium","data-component-x-ray-trigger":"RadioGroupItem"}),o[1]||(o[1]=l("div",{class:"font-medium"},"Medium",-1))]),_:1})]),_:1}),e(a(r),{for:"size-large","data-component-x-ray-trigger":"FieldLabel"},{default:t(()=>[e(a(i),{orientation:"horizontal","data-component-x-ray-trigger":"Field"},{default:t(()=>[e(a(d),{id:"size-large",value:"large","data-component-x-ray-trigger":"RadioGroupItem"}),o[2]||(o[2]=l("div",{class:"font-medium"},"Large",-1))]),_:1})]),_:1}),e(a(r),{for:"size-xlarge","data-component-x-ray-trigger":"FieldLabel"},{default:t(()=>[e(a(i),{orientation:"horizontal","data-component-x-ray-trigger":"Field"},{default:t(()=>[e(a(d),{id:"size-xlarge",value:"xlarge","data-component-x-ray-trigger":"RadioGroupItem"}),o[3]||(o[3]=l("div",{class:"font-medium"},"X-Large",-1))]),_:1})]),_:1})]),_:1}))}}),D=`<script setup lang="ts">
import { Field, FieldLabel } from "@/shared/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
<\/script>

<template>
  <RadioGroup
    default-value="medium"
    class="grid grid-cols-2 gap-2"
    data-component-x-ray="RadioGroup"
  >
    <FieldLabel for="size-small" data-component-x-ray-trigger="FieldLabel">
      <Field orientation="horizontal" data-component-x-ray-trigger="Field">
        <RadioGroupItem
          id="size-small"
          value="small"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <div class="font-medium">Small</div>
      </Field>
    </FieldLabel>
    <FieldLabel for="size-medium" data-component-x-ray-trigger="FieldLabel">
      <Field orientation="horizontal" data-component-x-ray-trigger="Field">
        <RadioGroupItem
          id="size-medium"
          value="medium"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <div class="font-medium">Medium</div>
      </Field>
    </FieldLabel>
    <FieldLabel for="size-large" data-component-x-ray-trigger="FieldLabel">
      <Field orientation="horizontal" data-component-x-ray-trigger="Field">
        <RadioGroupItem
          id="size-large"
          value="large"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <div class="font-medium">Large</div>
      </Field>
    </FieldLabel>
    <FieldLabel for="size-xlarge" data-component-x-ray-trigger="FieldLabel">
      <Field orientation="horizontal" data-component-x-ray-trigger="Field">
        <RadioGroupItem
          id="size-xlarge"
          value="xlarge"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <div class="font-medium">X-Large</div>
      </Field>
    </FieldLabel>
  </RadioGroup>
</template>
`,h=m({__name:"RadioGroupDisabled",setup(u){return(s,o)=>(p(),c(a(g),{"default-value":"option2",disabled:!0,"data-component-x-ray":"RadioGroup"},{default:t(()=>[e(a(i),{orientation:"horizontal","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"disabled-1",value:"option1","data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"disabled-1",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[0]||(o[0]=[n(" Option 1 ",-1)])]),_:1})]),_:1}),e(a(i),{orientation:"horizontal","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"disabled-2",value:"option2","data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"disabled-2",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[1]||(o[1]=[n(" Option 2 ",-1)])]),_:1})]),_:1}),e(a(i),{orientation:"horizontal","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"disabled-3",value:"option3","data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"disabled-3",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[2]||(o[2]=[n(" Option 3 ",-1)])]),_:1})]),_:1})]),_:1}))}}),C=`<script setup lang="ts">
import { Field, FieldLabel } from "@/shared/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
<\/script>

<template>
  <RadioGroup default-value="option2" :disabled="true" data-component-x-ray="RadioGroup">
    <Field orientation="horizontal" data-component-x-ray="Field">
      <RadioGroupItem
        id="disabled-1"
        value="option1"
        data-component-x-ray-trigger="RadioGroupItem"
      />
      <FieldLabel for="disabled-1" class="font-normal" data-component-x-ray="FieldLabel">
        Option 1
      </FieldLabel>
    </Field>
    <Field orientation="horizontal" data-component-x-ray="Field">
      <RadioGroupItem
        id="disabled-2"
        value="option2"
        data-component-x-ray-trigger="RadioGroupItem"
      />
      <FieldLabel for="disabled-2" class="font-normal" data-component-x-ray="FieldLabel">
        Option 2
      </FieldLabel>
    </Field>
    <Field orientation="horizontal" data-component-x-ray="Field">
      <RadioGroupItem
        id="disabled-3"
        value="option3"
        data-component-x-ray-trigger="RadioGroupItem"
      />
      <FieldLabel for="disabled-3" class="font-normal" data-component-x-ray="FieldLabel">
        Option 3
      </FieldLabel>
    </Field>
  </RadioGroup>
</template>
`,S=m({__name:"RadioGroupInvalid",setup(u){return(s,o)=>(p(),c(a(b),{"data-component-x-ray":"FieldSet"},{default:t(()=>[e(a(y),{"data-component-x-ray":"FieldLegend"},{default:t(()=>[...o[0]||(o[0]=[n("Notification Preferences",-1)])]),_:1}),e(a(f),{"data-component-x-ray":"FieldDescription"},{default:t(()=>[...o[1]||(o[1]=[n(" Choose how you want to receive notifications. ",-1)])]),_:1}),e(a(g),{"default-value":"email","data-component-x-ray":"RadioGroup"},{default:t(()=>[e(a(i),{orientation:"horizontal","data-invalid":"","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"invalid-email",value:"email","aria-invalid":!0,"data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"invalid-email",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[2]||(o[2]=[n(" Email only ",-1)])]),_:1})]),_:1}),e(a(i),{orientation:"horizontal","data-invalid":"","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"invalid-sms",value:"sms","aria-invalid":!0,"data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"invalid-sms",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[3]||(o[3]=[n(" SMS only ",-1)])]),_:1})]),_:1}),e(a(i),{orientation:"horizontal","data-invalid":"","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"invalid-both",value:"both","aria-invalid":!0,"data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"invalid-both",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[4]||(o[4]=[n(" Both Email & SMS ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),$=`<script setup lang="ts">
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/shared/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
<\/script>

<template>
  <FieldSet data-component-x-ray="FieldSet">
    <FieldLegend data-component-x-ray="FieldLegend">Notification Preferences</FieldLegend>
    <FieldDescription data-component-x-ray="FieldDescription">
      Choose how you want to receive notifications.
    </FieldDescription>
    <RadioGroup default-value="email" data-component-x-ray="RadioGroup">
      <Field orientation="horizontal" data-invalid data-component-x-ray="Field">
        <RadioGroupItem
          id="invalid-email"
          value="email"
          :aria-invalid="true"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <FieldLabel for="invalid-email" class="font-normal" data-component-x-ray="FieldLabel">
          Email only
        </FieldLabel>
      </Field>
      <Field orientation="horizontal" data-invalid data-component-x-ray="Field">
        <RadioGroupItem
          id="invalid-sms"
          value="sms"
          :aria-invalid="true"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <FieldLabel for="invalid-sms" class="font-normal" data-component-x-ray="FieldLabel">
          SMS only
        </FieldLabel>
      </Field>
      <Field orientation="horizontal" data-invalid data-component-x-ray="Field">
        <RadioGroupItem
          id="invalid-both"
          value="both"
          :aria-invalid="true"
          data-component-x-ray-trigger="RadioGroupItem"
        />
        <FieldLabel for="invalid-both" class="font-normal" data-component-x-ray="FieldLabel">
          Both Email & SMS
        </FieldLabel>
      </Field>
    </RadioGroup>
  </FieldSet>
</template>
`,B={class:"@container max-w-200 mx-auto"},E={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},aa=m({__name:"_Examples",setup(u){return(s,o)=>(p(),R("div",B,[l("div",E,[e(F,{"raw-component":a(G)},{title:t(()=>[...o[0]||(o[0]=[n(" Basic ",-1)])]),example:t(()=>[e(v)]),_:1},8,["raw-component"]),e(F,{"raw-component":a(_)},{title:t(()=>[...o[1]||(o[1]=[n(" With Descriptions ",-1)])]),example:t(()=>[e(L)]),_:1},8,["raw-component"]),e(F,{"raw-component":a(z)},{title:t(()=>[...o[2]||(o[2]=[n(" With FieldSet ",-1)])]),example:t(()=>[e(I)]),_:1},8,["raw-component"]),e(F,{"raw-component":a(D)},{title:t(()=>[...o[3]||(o[3]=[n(" Grid ",-1)])]),example:t(()=>[e(w)]),_:1},8,["raw-component"]),e(F,{"raw-component":a(C)},{title:t(()=>[...o[4]||(o[4]=[n(" Disabled ",-1)])]),example:t(()=>[e(h)]),_:1},8,["raw-component"]),e(F,{"raw-component":a($)},{title:t(()=>[...o[5]||(o[5]=[n(" Invalid ",-1)])]),example:t(()=>[e(S)]),_:1},8,["raw-component"])])]))}});export{aa as default};
