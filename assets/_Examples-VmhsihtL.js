import{_ as F}from"./ExampleCard.vue_vue_type_script_setup_true_lang-CeNp3otK.js";import{_ as i}from"./index-CVa6A2b7.js";import{_ as r}from"./FieldLabel.vue_vue_type_script_setup_true_lang-CxLdfyZS.js";import{a as d,_ as g}from"./RadioGroupItem.vue_vue_type_script_setup_true_lang-CoSlck9-.js";import{d as m,o as p,a as c,H as t,D as e,u as a,I as n,A as l,z as R}from"./DialogTitle.vue_vue_type_script_setup_true_lang-B-mIWQEK.js";import{_ as x}from"./FieldContent.vue_vue_type_script_setup_true_lang-CFvEtc5S.js";import{_ as f}from"./FieldDescription.vue_vue_type_script_setup_true_lang-BgOETgAQ.js";import{_ as y,a as b}from"./FieldSet.vue_vue_type_script_setup_true_lang-CvfgZixj.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-Cf2txUt2.js";import"./TooltipTrigger.vue_vue_type_script_setup_true_lang-DnIH10oF.js";import"./PopperContent-ClNHsZFH.js";import"./useSize-Hxodz3uf.js";import"./VisuallyHidden-fIfXuLIO.js";import"./defu-cjemX7BB.js";import"./TooltipProvider.vue_vue_type_script_setup_true_lang-DYzeRVuw.js";import"./check-CQT1JKGP.js";import"./Label.vue_vue_type_script_setup_true_lang-D8lI5-mV.js";import"./RovingFocusItem-BFksLdot.js";import"./Collection-_O-VPQsQ.js";import"./usePrimitiveElement-BpSa_wbz.js";import"./utils-CtWPBAxg.js";import"./RovingFocusGroup-v_WEeGqd.js";import"./useFormControl-B-0zwMhs.js";import"./VisuallyHiddenInput-Cp_QWRvj.js";import"./ohash.D__AXeF1-C-E83dC9.js";import"./circle-f7jcPBtV.js";const v=m({__name:"RadioGroupBasic",setup(u){return(s,o)=>(p(),c(a(g),{"default-value":"comfortable","data-component-x-ray":"RadioGroup"},{default:t(()=>[e(a(i),{orientation:"horizontal","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"r1",value:"default","data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"r1",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[0]||(o[0]=[n(" Default ",-1)])]),_:1})]),_:1}),e(a(i),{orientation:"horizontal","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"r2",value:"comfortable","data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"r2",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[1]||(o[1]=[n(" Comfortable ",-1)])]),_:1})]),_:1}),e(a(i),{orientation:"horizontal","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"r3",value:"compact","data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"r3",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[2]||(o[2]=[n(" Compact ",-1)])]),_:1})]),_:1})]),_:1}))}}),G=`<script setup lang="ts">
import { Field, FieldLabel } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
import { Field, FieldContent, FieldDescription, FieldLabel } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
import { Field, FieldDescription, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
import { Field, FieldLabel } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
`,C=m({__name:"RadioGroupDisabled",setup(u){return(s,o)=>(p(),c(a(g),{"default-value":"option2",disabled:!0,"data-component-x-ray":"RadioGroup"},{default:t(()=>[e(a(i),{orientation:"horizontal","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"disabled-1",value:"option1","data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"disabled-1",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[0]||(o[0]=[n(" Option 1 ",-1)])]),_:1})]),_:1}),e(a(i),{orientation:"horizontal","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"disabled-2",value:"option2","data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"disabled-2",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[1]||(o[1]=[n(" Option 2 ",-1)])]),_:1})]),_:1}),e(a(i),{orientation:"horizontal","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"disabled-3",value:"option3","data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"disabled-3",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[2]||(o[2]=[n(" Option 3 ",-1)])]),_:1})]),_:1})]),_:1}))}}),S=`<script setup lang="ts">
import { Field, FieldLabel } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
`,h=m({__name:"RadioGroupInvalid",setup(u){return(s,o)=>(p(),c(a(b),{"data-component-x-ray":"FieldSet"},{default:t(()=>[e(a(y),{"data-component-x-ray":"FieldLegend"},{default:t(()=>[...o[0]||(o[0]=[n("Notification Preferences",-1)])]),_:1}),e(a(f),{"data-component-x-ray":"FieldDescription"},{default:t(()=>[...o[1]||(o[1]=[n(" Choose how you want to receive notifications. ",-1)])]),_:1}),e(a(g),{"default-value":"email","data-component-x-ray":"RadioGroup"},{default:t(()=>[e(a(i),{orientation:"horizontal","data-invalid":"","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"invalid-email",value:"email","aria-invalid":!0,"data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"invalid-email",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[2]||(o[2]=[n(" Email only ",-1)])]),_:1})]),_:1}),e(a(i),{orientation:"horizontal","data-invalid":"","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"invalid-sms",value:"sms","aria-invalid":!0,"data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"invalid-sms",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[3]||(o[3]=[n(" SMS only ",-1)])]),_:1})]),_:1}),e(a(i),{orientation:"horizontal","data-invalid":"","data-component-x-ray":"Field"},{default:t(()=>[e(a(d),{id:"invalid-both",value:"both","aria-invalid":!0,"data-component-x-ray-trigger":"RadioGroupItem"}),e(a(r),{for:"invalid-both",class:"font-normal","data-component-x-ray":"FieldLabel"},{default:t(()=>[...o[4]||(o[4]=[n(" Both Email & SMS ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),$=`<script setup lang="ts">
import { Field, FieldDescription, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
`,B={class:"@container max-w-250 mx-auto"},E={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},da=m({__name:"_Examples",setup(u){return(s,o)=>(p(),R("div",B,[l("div",E,[e(F,{"raw-component":a(G)},{title:t(()=>[...o[0]||(o[0]=[n(" Basic ",-1)])]),example:t(()=>[e(v)]),_:1},8,["raw-component"]),e(F,{"raw-component":a(_)},{title:t(()=>[...o[1]||(o[1]=[n(" With Descriptions ",-1)])]),example:t(()=>[e(L)]),_:1},8,["raw-component"]),e(F,{"raw-component":a(z)},{title:t(()=>[...o[2]||(o[2]=[n(" With FieldSet ",-1)])]),example:t(()=>[e(I)]),_:1},8,["raw-component"]),e(F,{"raw-component":a(D)},{title:t(()=>[...o[3]||(o[3]=[n(" Grid ",-1)])]),example:t(()=>[e(w)]),_:1},8,["raw-component"]),e(F,{"raw-component":a(S)},{title:t(()=>[...o[4]||(o[4]=[n(" Disabled ",-1)])]),example:t(()=>[e(C)]),_:1},8,["raw-component"]),e(F,{"raw-component":a($)},{title:t(()=>[...o[5]||(o[5]=[n(" Invalid ",-1)])]),example:t(()=>[e(h)]),_:1},8,["raw-component"])])]))}});export{da as default};
