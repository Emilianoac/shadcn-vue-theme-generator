import{_ as y}from"./ExampleCard.vue_vue_type_script_setup_true_lang-RODFUHo8.js";import{g,d as p,o as m,z as u,T as x,u as e,a7 as f,a3 as v,ar as T,D as n,H as a,I as r,A}from"./DialogTitle.vue_vue_type_script_setup_true_lang-BO6eI9T0.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-JhfpkWUQ.js";import"./TooltipTrigger.vue_vue_type_script_setup_true_lang-BTii5kdN.js";import"./PopperContent-8PHJ-kTl.js";import"./useSize-s3pOCBPt.js";import"./VisuallyHidden-DM3OMqDx.js";import"./defu-cjemX7BB.js";import"./TooltipProvider.vue_vue_type_script_setup_true_lang-ah-oNQF4.js";import"./check-BIt67cX5.js";const c=g("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),i=p({__name:"Alert",props:{class:{},variant:{}},setup(l){const s=l;return(t,h)=>(m(),u("div",{"data-slot":"alert",class:x(e(f)(e(_)({variant:l.variant}),s.class)),role:"alert"},[v(t.$slots,"default")],2))}}),d=p({__name:"AlertDescription",props:{class:{}},setup(l){const s=l;return(t,h)=>(m(),u("div",{"data-slot":"alert-description",class:x(e(f)("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",s.class))},[v(t.$slots,"default")],2))}}),o=p({__name:"AlertTitle",props:{class:{}},setup(l){const s=l;return(t,h)=>(m(),u("div",{"data-slot":"alert-title",class:x(e(f)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",s.class))},[v(t.$slots,"default")],2))}}),_=T("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"}},defaultVariants:{variant:"default"}}),w={class:"space-y-5"},D=p({__name:"AlertBasic",setup(l){return(s,t)=>(m(),u("div",w,[n(e(i),{variant:"default","data-component-x-ray":"Alert"},{default:a(()=>[n(e(o),{"data-component-x-ray":"AlertTitle"},{default:a(()=>[...t[0]||(t[0]=[r(" Success! Your changes have been saved ",-1)])]),_:1})]),_:1}),n(e(i),{variant:"default","data-component-x-ray":"Alert"},{default:a(()=>[n(e(o),{"data-component-x-ray":"AlertTitle"},{default:a(()=>[...t[1]||(t[1]=[r(" Success! Your changes have been saved ",-1)])]),_:1}),n(e(d),{"data-component-x-ray":"AlertDescription"},{default:a(()=>[...t[2]||(t[2]=[r(" This is an alert with title and description ",-1)])]),_:1})]),_:1}),n(e(i),{variant:"default","data-component-x-ray":"Alert"},{default:a(()=>[n(e(d),{"data-component-x-ray":"AlertDescription"},{default:a(()=>[...t[3]||(t[3]=[r(" This one has a description only. No title. No icon. ",-1)])]),_:1})]),_:1})]))}}),b=`<script lang="ts" setup>
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
<\/script>

<template>
  <div class="space-y-5">
    <Alert variant="default" data-component-x-ray="Alert">
      <AlertTitle data-component-x-ray="AlertTitle">
        Success! Your changes have been saved
      </AlertTitle>
    </Alert>
    <Alert variant="default" data-component-x-ray="Alert">
      <AlertTitle data-component-x-ray="AlertTitle">
        Success! Your changes have been saved
      </AlertTitle>
      <AlertDescription data-component-x-ray="AlertDescription">
        This is an alert with title and description
      </AlertDescription>
    </Alert>
    <Alert variant="default" data-component-x-ray="Alert">
      <AlertDescription data-component-x-ray="AlertDescription">
        This one has a description only. No title. No icon.
      </AlertDescription>
    </Alert>
  </div>
</template>

<style lang="postcss" scoped></style>
`,I={class:"space-y-5"},C=p({__name:"AlertIcons",setup(l){return(s,t)=>(m(),u("div",I,[n(e(i),{variant:"default","data-component-x-ray":"Alert"},{default:a(()=>[n(e(c)),n(e(o),{"data-component-x-ray":"AlertTitle"},{default:a(()=>[...t[0]||(t[0]=[r(" Let's try one with icon, title and a ",-1),A("a",{href:"#",class:"underline underline-offset-2"},"link",-1),r(". ",-1)])]),_:1})]),_:1}),n(e(i),{variant:"default","data-component-x-ray":"Alert"},{default:a(()=>[n(e(c)),n(e(o),{"data-component-x-ray":"AlertTitle"},{default:a(()=>[...t[1]||(t[1]=[r(" Success! Your changes have been saved ",-1)])]),_:1}),n(e(d),{"data-component-x-ray":"AlertDescription"},{default:a(()=>[...t[2]||(t[2]=[r(" This is an alert with icon, title and description. ",-1)])]),_:1})]),_:1}),n(e(i),{variant:"default","data-component-x-ray":"Alert"},{default:a(()=>[n(e(c)),n(e(o),{"data-component-x-ray":"AlertTitle"},{default:a(()=>[...t[3]||(t[3]=[r(" This is a very long alert title that demonstrates how the component handles extended text content and potentially wraps across multiple lines ",-1)])]),_:1})]),_:1}),n(e(i),{variant:"default","data-component-x-ray":"Alert"},{default:a(()=>[n(e(c)),n(e(d),{"data-component-x-ray":"AlertDescription"},{default:a(()=>[...t[4]||(t[4]=[r(" This is a very long alert description that demonstrates how the component handles extended text content and potentially wraps across multiple lines ",-1)])]),_:1})]),_:1}),n(e(i),{variant:"default","data-component-x-ray":"Alert"},{default:a(()=>[n(e(c)),n(e(o),{"data-component-x-ray":"AlertTitle"},{default:a(()=>[...t[5]||(t[5]=[r(" This is an extremely long alert title that spans multiple lines to demonstrate how the component handles very lengthy headings while maintaining readability and proper text wrapping behavior ",-1)])]),_:1}),n(e(d),{"data-component-x-ray":"AlertDescription"},{default:a(()=>[...t[6]||(t[6]=[r(" This is an equally long description that contains detailed information about the alert. It shows how the component can accommodate extensive content while preserving proper spacing, alignment, and readability across different screen sizes and viewport widths. This helps ensure the user experience remains consistent regardless of the content length. ",-1)])]),_:1})]),_:1})]))}}),$=`<script lang="ts" setup>
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-vue-next";
<\/script>

<template>
  <div class="space-y-5">
    <Alert variant="default" data-component-x-ray="Alert">
      <AlertCircleIcon />
      <AlertTitle data-component-x-ray="AlertTitle">
        Let's try one with icon, title and a
        <a href="#" class="underline underline-offset-2">link</a>.
      </AlertTitle>
    </Alert>

    <Alert variant="default" data-component-x-ray="Alert">
      <AlertCircleIcon />
      <AlertTitle data-component-x-ray="AlertTitle">
        Success! Your changes have been saved
      </AlertTitle>
      <AlertDescription data-component-x-ray="AlertDescription">
        This is an alert with icon, title and description.
      </AlertDescription>
    </Alert>

    <Alert variant="default" data-component-x-ray="Alert">
      <AlertCircleIcon />
      <AlertTitle data-component-x-ray="AlertTitle">
        This is a very long alert title that demonstrates how the component handles extended text
        content and potentially wraps across multiple lines
      </AlertTitle>
    </Alert>

    <Alert variant="default" data-component-x-ray="Alert">
      <AlertCircleIcon />
      <AlertDescription data-component-x-ray="AlertDescription">
        This is a very long alert description that demonstrates how the component handles extended
        text content and potentially wraps across multiple lines
      </AlertDescription>
    </Alert>

    <Alert variant="default" data-component-x-ray="Alert">
      <AlertCircleIcon />
      <AlertTitle data-component-x-ray="AlertTitle">
        This is an extremely long alert title that spans multiple lines to demonstrate how the
        component handles very lengthy headings while maintaining readability and proper text
        wrapping behavior
      </AlertTitle>
      <AlertDescription data-component-x-ray="AlertDescription">
        This is an equally long description that contains detailed information about the alert. It
        shows how the component can accommodate extensive content while preserving proper spacing,
        alignment, and readability across different screen sizes and viewport widths. This helps
        ensure the user experience remains consistent regardless of the content length.
      </AlertDescription>
    </Alert>
  </div>
</template>

<style lang="postcss" scoped></style>
`,k={class:"max-w-150 mx-auto space-y-6"},S=p({__name:"AlertDestructive",setup(l){return(s,t)=>(m(),u("div",k,[n(e(i),{variant:"destructive","data-component-x-ray":"Alert"},{default:a(()=>[n(e(c)),n(e(o),{"data-component-x-ray":"AlertTitle"},{default:a(()=>[...t[0]||(t[0]=[r(" Something went wrong! ",-1)])]),_:1}),n(e(d),{"data-component-x-ray":"AlertDescription"},{default:a(()=>[...t[1]||(t[1]=[r(" Your session has expired. Please log in again. ",-1)])]),_:1})]),_:1}),n(e(i),{variant:"destructive","data-component-x-ray":"Alert"},{default:a(()=>[n(e(c)),n(e(o),{"data-component-x-ray":"AlertTitle"},{default:a(()=>[...t[2]||(t[2]=[r(" Unable to process your payment. ",-1)])]),_:1}),n(e(d),{"data-component-x-ray":"AlertDescription"},{default:a(()=>[...t[3]||(t[3]=[A("p",null,"Please verify your billing information and try again.",-1),A("ul",{class:"mt-2 list-inside list-disc space-y-1"},[A("li",null,"Check your card details"),A("li",null,"Ensure sufficient funds"),A("li",null,"Verify billing address")],-1)])]),_:1})]),_:1})]))}}),Y=`<script lang="ts" setup>
import { AlertCircleIcon } from "lucide-vue-next";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
<\/script>

<template>
  <div class="max-w-150 mx-auto space-y-6">
    <Alert variant="destructive" data-component-x-ray="Alert">
      <AlertCircleIcon />
      <AlertTitle data-component-x-ray="AlertTitle"> Something went wrong! </AlertTitle>
      <AlertDescription data-component-x-ray="AlertDescription">
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
    <Alert variant="destructive" data-component-x-ray="Alert">
      <AlertCircleIcon />
      <AlertTitle data-component-x-ray="AlertTitle"> Unable to process your payment. </AlertTitle>
      <AlertDescription data-component-x-ray="AlertDescription">
        <p>Please verify your billing information and try again.</p>
        <ul class="mt-2 list-inside list-disc space-y-1">
          <li>Check your card details</li>
          <li>Ensure sufficient funds</li>
          <li>Verify billing address</li>
        </ul>
      </AlertDescription>
    </Alert>
  </div>
</template>

<style lang="postcss" scoped></style>
`,N={class:"max-w-150 mx-auto space-y-6"},H=p({__name:"AlertExamples",setup(l){return(s,t)=>(m(),u("div",N,[n(y,{"raw-component":e(b)},{title:a(()=>[...t[0]||(t[0]=[r("Basic",-1)])]),example:a(()=>[n(D)]),_:1},8,["raw-component"]),n(y,{"raw-component":e($)},{title:a(()=>[...t[1]||(t[1]=[r("With Icons",-1)])]),example:a(()=>[n(C)]),_:1},8,["raw-component"]),n(y,{"raw-component":e(Y)},{title:a(()=>[...t[2]||(t[2]=[r("Destructive",-1)])]),example:a(()=>[n(S)]),_:1},8,["raw-component"])]))}});export{H as default};
