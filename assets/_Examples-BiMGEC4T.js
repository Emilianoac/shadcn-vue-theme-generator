import{_ as p}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DXWJnCy0.js";import{d as i,o as s,a as c,H as t,D as o,u as n,I as e,A as r,_ as d,z as B}from"./DialogTitle.vue_vue_type_script_setup_true_lang-qm1obxa6.js";import{_ as u,a as C}from"./CardContent.vue_vue_type_script_setup_true_lang-DVW5TESK.js";import{_ as x,a as f}from"./CardTitle.vue_vue_type_script_setup_true_lang-DyhUFS9b.js";import{_ as y}from"./CardFooter.vue_vue_type_script_setup_true_lang-DCTIGEJA.js";import{_ as w}from"./CardHeader.vue_vue_type_script_setup_true_lang-D1qDGYna.js";import{E as b}from"./example-image-CoB8jV9D.js";import{_}from"./CardAction.vue_vue_type_script_setup_true_lang-Bheueflk.js";import{_ as g}from"./Input.vue_vue_type_script_setup_true_lang-BEHxQoyl.js";import{_ as h}from"./Label.vue_vue_type_script_setup_true_lang-DQ8JCBbf.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-BQ5IMRBD.js";import"./TooltipTrigger.vue_vue_type_script_setup_true_lang-B8xttiRE.js";import"./VisuallyHidden-DHKEUU1O.js";const T=i({__name:"CardDefault",setup(l){return(m,a)=>(s(),c(n(C),{class:"w-full max-w-sm mx-auto","data-component-x-ray":"Card"},{default:t(()=>[o(n(w),{"data-component-x-ray":"CardHeader"},{default:t(()=>[o(n(x),{"data-component-x-ray":"CardTitle"},{default:t(()=>[...a[0]||(a[0]=[e(" Default Card ",-1)])]),_:1}),o(n(f),{"data-component-x-ray":"CardDescription"},{default:t(()=>[...a[1]||(a[1]=[e(" This is a default card component. ",-1)])]),_:1})]),_:1}),o(n(u),{"data-component-x-ray":"CardContent"},{default:t(()=>[...a[2]||(a[2]=[r("p",null,"This is the content of the card. You can put any content here, such as text, images.",-1)])]),_:1}),o(n(y),{"data-component-x-ray":"CardFooter"},{default:t(()=>[o(n(d),{variant:"outline",class:"w-full","data-component-x-ray":"Button"},{default:t(()=>[...a[3]||(a[3]=[e(" Action ",-1)])]),_:1})]),_:1})]),_:1}))}}),F=`<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
<\/script>

<template>
  <Card class="w-full max-w-sm mx-auto" data-component-x-ray="Card">
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle"> Default Card </CardTitle>
      <CardDescription data-component-x-ray="CardDescription">
        This is a default card component.
      </CardDescription>
    </CardHeader>
    <CardContent data-component-x-ray="CardContent">
      <p>This is the content of the card. You can put any content here, such as text, images.</p>
    </CardContent>
    <CardFooter data-component-x-ray="CardFooter">
      <Button variant="outline" class="w-full" data-component-x-ray="Button"> Action </Button>
    </CardFooter>
  </Card>
</template>
`,D=i({__name:"CardHeaderWithBorder",setup(l){return(m,a)=>(s(),c(n(C),{class:"w-full max-w-sm mx-auto","data-component-x-ray":"Card"},{default:t(()=>[o(n(w),{class:"border-b","data-component-x-ray":"CardHeader"},{default:t(()=>[o(n(x),{"data-component-x-ray":"CardTitle"},{default:t(()=>[...a[0]||(a[0]=[e("Header with Border",-1)])]),_:1}),o(n(f),{"data-component-x-ray":"CardDescription"},{default:t(()=>[...a[1]||(a[1]=[e(" This is a card with a header that has a bottom border. ",-1)])]),_:1})]),_:1}),o(n(u),{"data-component-x-ray":"CardContent"},{default:t(()=>[...a[2]||(a[2]=[r("p",null," The header has a border-b class applied, creating a visual separation between the header and content sections. ",-1)])]),_:1}),o(n(y),{"data-component-x-ray":"CardFooter"},{default:t(()=>[o(n(d),{variant:"outline",class:"w-full","data-component-x-ray":"Button"},{default:t(()=>[...a[3]||(a[3]=[e(" Action ",-1)])]),_:1})]),_:1})]),_:1}))}}),H=`<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
<\/script>

<template>
  <Card class="w-full max-w-sm mx-auto" data-component-x-ray="Card">
    <CardHeader class="border-b" data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle">Header with Border</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">
        This is a card with a header that has a bottom border.
      </CardDescription>
    </CardHeader>
    <CardContent data-component-x-ray="CardContent">
      <p>
        The header has a border-b class applied, creating a visual separation between the header and
        content sections.
      </p>
    </CardContent>
    <CardFooter data-component-x-ray="CardFooter">
      <Button variant="outline" class="w-full" data-component-x-ray="Button"> Action </Button>
    </CardFooter>
  </Card>
</template>
`,v=i({__name:"CardFooterWithBorder",setup(l){return(m,a)=>(s(),c(n(C),{class:"w-full max-w-sm mx-auto","data-component-x-ray":"Card"},{default:t(()=>[o(n(w),{"data-component-x-ray":"CardHeader"},{default:t(()=>[o(n(x),{"data-component-x-ray":"CardTitle"},{default:t(()=>[...a[0]||(a[0]=[e("Footer with Border",-1)])]),_:1}),o(n(f),{"data-component-x-ray":"CardDescription"},{default:t(()=>[...a[1]||(a[1]=[e(" This is a card with a footer that has a top border. ",-1)])]),_:1})]),_:1}),o(n(u),{"data-component-x-ray":"CardContent"},{default:t(()=>[...a[2]||(a[2]=[r("p",null," The footer has a border-t class applied, creating a visual separation between the content and footer sections. ",-1)])]),_:1}),o(n(y),{class:"border-t","data-component-x-ray":"CardFooter"},{default:t(()=>[o(n(d),{variant:"outline",class:"w-full","data-component-x-ray":"Button"},{default:t(()=>[...a[3]||(a[3]=[e(" Action ",-1)])]),_:1})]),_:1})]),_:1}))}}),A=`<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
<\/script>

<template>
  <Card class="w-full max-w-sm mx-auto" data-component-x-ray="Card">
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle">Footer with Border</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">
        This is a card with a footer that has a top border.
      </CardDescription>
    </CardHeader>
    <CardContent data-component-x-ray="CardContent">
      <p>
        The footer has a border-t class applied, creating a visual separation between the content
        and footer sections.
      </p>
    </CardContent>
    <CardFooter class="border-t" data-component-x-ray="CardFooter">
      <Button variant="outline" class="w-full" data-component-x-ray="Button"> Action </Button>
    </CardFooter>
  </Card>
</template>
`,I=["src"],$=i({__name:"CardWithImage",setup(l){return(m,a)=>(s(),c(n(C),{class:"w-full max-w-sm mx-auto","data-component-x-ray":"Card"},{default:t(()=>[o(n(u),{"data-component-x-ray":"CardContent"},{default:t(()=>[r("img",{src:n(b),class:"w-full h-auto mb-4",alt:"A shiba inu dog sitting on the grass"},null,8,I)]),_:1}),o(n(w),{"data-component-x-ray":"CardHeader"},{default:t(()=>[o(n(x),{"data-component-x-ray":"CardTitle"},{default:t(()=>[...a[0]||(a[0]=[e("Card with Image",-1)])]),_:1}),o(n(f),{"data-component-x-ray":"CardDescription"},{default:t(()=>[...a[1]||(a[1]=[e(" This is a card example that includes an image in the content section. ",-1)])]),_:1})]),_:1}),o(n(y),{"data-component-x-ray":"CardFooter"},{default:t(()=>[o(n(_),{class:"w-full","data-component-x-ray":"CardAction"},{default:t(()=>[o(n(d),{variant:"outline",class:"w-full","data-component-x-ray":"Button"},{default:t(()=>[...a[2]||(a[2]=[e("Action",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),L=`<script setup lang="ts">
import exampleImage from "@/assets/images/example-image.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardAction,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
<\/script>

<template>
  <Card class="w-full max-w-sm mx-auto" data-component-x-ray="Card">
    <CardContent data-component-x-ray="CardContent">
      <img
        :src="exampleImage"
        class="w-full h-auto mb-4"
        alt="A shiba inu dog sitting on the grass"
      />
    </CardContent>
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle">Card with Image</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">
        This is a card example that includes an image in the content section.
      </CardDescription>
    </CardHeader>
    <CardFooter data-component-x-ray="CardFooter">
      <CardAction class="w-full" data-component-x-ray="CardAction">
        <Button variant="outline" class="w-full" data-component-x-ray="Button">Action</Button>
      </CardAction>
    </CardFooter>
  </Card>
</template>
`,W=["src"],E=i({__name:"CardWithImageFullSize",setup(l){return(m,a)=>(s(),c(n(C),{class:"w-full max-w-sm mx-auto pt-0 overflow-hidden","data-component-x-ray":"Card"},{default:t(()=>[o(n(u),{class:"px-0","data-component-x-ray":"CardContent"},{default:t(()=>[r("img",{src:n(b),class:"w-full h-auto mb-4",alt:"A shiba inu dog sitting on the grass"},null,8,W)]),_:1}),o(n(w),{"data-component-x-ray":"CardHeader"},{default:t(()=>[o(n(x),{"data-component-x-ray":"CardTitle"},{default:t(()=>[...a[0]||(a[0]=[e("Card with Image full size",-1)])]),_:1}),o(n(f),{"data-component-x-ray":"CardDescription"},{default:t(()=>[...a[1]||(a[1]=[e(" This is a card example that includes a full-width image in the content section. ",-1)])]),_:1})]),_:1}),o(n(y),{"data-component-x-ray":"CardFooter"},{default:t(()=>[o(n(_),{class:"w-full","data-component-x-ray":"CardAction"},{default:t(()=>[o(n(d),{variant:"outline",class:"w-full","data-component-x-ray":"Button"},{default:t(()=>[...a[2]||(a[2]=[e("Action",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),k=`<script setup lang="ts">
import exampleImage from "@/assets/images/example-image.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardAction,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
<\/script>

<template>
  <Card class="w-full max-w-sm mx-auto pt-0 overflow-hidden" data-component-x-ray="Card">
    <CardContent class="px-0" data-component-x-ray="CardContent">
      <img
        :src="exampleImage"
        class="w-full h-auto mb-4"
        alt="A shiba inu dog sitting on the grass"
      />
    </CardContent>
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle">Card with Image full size</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">
        This is a card example that includes a full-width image in the content section.
      </CardDescription>
    </CardHeader>
    <CardFooter data-component-x-ray="CardFooter">
      <CardAction class="w-full" data-component-x-ray="CardAction">
        <Button variant="outline" class="w-full" data-component-x-ray="Button">Action</Button>
      </CardAction>
    </CardFooter>
  </Card>
</template>
`,R={class:"grid w-full items-center gap-4"},z={class:"flex flex-col space-y-1.5"},S={class:"flex flex-col space-y-1.5"},N={class:"flex items-center"},V=i({__name:"CardLogin",setup(l){return(m,a)=>(s(),c(n(C),{class:"w-full max-w-sm mx-auto","data-component-x-ray":"Card"},{default:t(()=>[o(n(w),{"data-component-x-ray":"CardHeader"},{default:t(()=>[o(n(x),{"data-component-x-ray":"CardTitle"},{default:t(()=>[...a[0]||(a[0]=[e("Login to your account",-1)])]),_:1}),o(n(f),{"data-component-x-ray":"CardDescription"},{default:t(()=>[...a[1]||(a[1]=[e(" Enter your email below to login to your account ",-1)])]),_:1}),o(n(_),{"data-component-x-ray":"CardAction"},{default:t(()=>[o(n(d),{variant:"link"},{default:t(()=>[...a[2]||(a[2]=[e(" Sign Up ",-1)])]),_:1})]),_:1})]),_:1}),o(n(u),{"data-component-x-ray":"CardContent"},{default:t(()=>[r("form",null,[r("div",R,[r("div",z,[o(n(h),{for:"email","data-component-x-ray":"Label"},{default:t(()=>[...a[3]||(a[3]=[e("Email",-1)])]),_:1}),o(n(g),{id:"email",type:"email",placeholder:"m@example.com","data-component-x-ray":"Input"})]),r("div",S,[r("div",N,[o(n(h),{for:"password","data-component-x-ray":"Label"},{default:t(()=>[...a[4]||(a[4]=[e("Password",-1)])]),_:1}),a[5]||(a[5]=r("a",{href:"#",class:"ml-auto inline-block text-sm underline"}," Forgot your password? ",-1))]),o(n(g),{id:"password",type:"password","data-component-x-ray":"Input"})])])])]),_:1}),o(n(y),{class:"flex flex-col gap-2","data-component-x-ray":"CardFooter"},{default:t(()=>[o(n(d),{class:"w-full","data-component-x-ray":"Button"},{default:t(()=>[...a[6]||(a[6]=[e(" Login ",-1)])]),_:1}),o(n(d),{variant:"outline",class:"w-full","data-component-x-ray":"Button"},{default:t(()=>[...a[7]||(a[7]=[e(" Login with Google ",-1)])]),_:1})]),_:1})]),_:1}))}}),j=`<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
<\/script>

<template>
  <Card class="w-full max-w-sm mx-auto" data-component-x-ray="Card">
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle">Login to your account</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">
        Enter your email below to login to your account
      </CardDescription>
      <CardAction data-component-x-ray="CardAction">
        <Button variant="link"> Sign Up </Button>
      </CardAction>
    </CardHeader>
    <CardContent data-component-x-ray="CardContent">
      <form>
        <div class="grid w-full items-center gap-4">
          <div class="flex flex-col space-y-1.5">
            <Label for="email" data-component-x-ray="Label">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              data-component-x-ray="Input"
            />
          </div>
          <div class="flex flex-col space-y-1.5">
            <div class="flex items-center">
              <Label for="password" data-component-x-ray="Label">Password</Label>
              <a href="#" class="ml-auto inline-block text-sm underline"> Forgot your password? </a>
            </div>
            <Input id="password" type="password" data-component-x-ray="Input" />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter class="flex flex-col gap-2" data-component-x-ray="CardFooter">
      <Button class="w-full" data-component-x-ray="Button"> Login </Button>
      <Button variant="outline" class="w-full" data-component-x-ray="Button">
        Login with Google
      </Button>
    </CardFooter>
  </Card>
</template>
`,G={class:"@container max-w-200 mx-auto"},P={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},oa=i({__name:"_Examples",setup(l){return(m,a)=>(s(),B("div",G,[r("div",P,[o(p,{"raw-component":n(F)},{title:t(()=>[...a[0]||(a[0]=[e("Default Card",-1)])]),example:t(()=>[o(T)]),_:1},8,["raw-component"]),o(p,{"raw-component":n(H)},{title:t(()=>[...a[1]||(a[1]=[e("Header with Border",-1)])]),example:t(()=>[o(D)]),_:1},8,["raw-component"]),o(p,{"raw-component":n(A)},{title:t(()=>[...a[2]||(a[2]=[e("Footer with Border",-1)])]),example:t(()=>[o(v)]),_:1},8,["raw-component"]),o(p,{"raw-component":n(L)},{title:t(()=>[...a[3]||(a[3]=[e("With Image",-1)])]),example:t(()=>[o($)]),_:1},8,["raw-component"]),o(p,{"raw-component":n(k)},{title:t(()=>[...a[4]||(a[4]=[e("With Full-Width Image",-1)])]),example:t(()=>[o(E)]),_:1},8,["raw-component"]),o(p,{"raw-component":n(j)},{title:t(()=>[...a[5]||(a[5]=[e("Login Form",-1)])]),example:t(()=>[o(V)]),_:1},8,["raw-component"])])]))}});export{oa as default};
