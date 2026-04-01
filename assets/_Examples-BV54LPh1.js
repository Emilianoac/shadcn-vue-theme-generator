import{_ as p}from"./ExampleCard.vue_vue_type_script_setup_true_lang-Dv0Lwgv7.js";import{a as m,b as o,_ as d,c as b}from"./TabsTrigger.vue_vue_type_script_setup_true_lang-DOqvYpJX.js";import{g as l,d as s,o as i,a as u,H as t,D as e,u as n,I as r,A as c,z as f}from"./DialogTitle.vue_vue_type_script_setup_true_lang-CaMH5FGq.js";import{C as x}from"./code-Dy2iF65o.js";import{H as v}from"./house-CitZr2uh.js";import{S as y}from"./search-DuPPz_-4.js";import{S as _}from"./settings-Dra5_812.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-DIiXhJ1v.js";import"./RovingFocusGroup-Bi3Xtifz.js";import"./Collection-C_HKjXdo.js";import"./usePrimitiveElement-30gr_7Mg.js";import"./utils-4E3j8qzr.js";import"./RovingFocusItem-B9lNSBnj.js";const w=l("app-window",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]),L=s({__name:"TabsBasic",setup(g){return(T,a)=>(i(),u(n(d),{"default-value":"home","data-component-x-ray":"Tabs"},{default:t(()=>[e(n(m),{"data-component-x-ray":"TabsList"},{default:t(()=>[e(n(o),{value:"home","data-component-x-ray-trigger":"TabsTrigger"},{default:t(()=>[...a[0]||(a[0]=[r(" Home ",-1)])]),_:1}),e(n(o),{value:"settings","data-component-x-ray-trigger":"TabsTrigger"},{default:t(()=>[...a[1]||(a[1]=[r(" Settings ",-1)])]),_:1})]),_:1})]),_:1}))}}),C=`<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
<\/script>

<template>
  <Tabs default-value="home" data-component-x-ray="Tabs">
    <TabsList data-component-x-ray="TabsList">
      <TabsTrigger value="home" data-component-x-ray-trigger="TabsTrigger"> Home </TabsTrigger>
      <TabsTrigger value="settings" data-component-x-ray-trigger="TabsTrigger">
        Settings
      </TabsTrigger>
    </TabsList>
  </Tabs>
</template>
`,I=s({__name:"TabsLineDisabled",setup(g){return(T,a)=>(i(),u(n(d),{"default-value":"overview","data-component-x-ray":"Tabs"},{default:t(()=>[e(n(m),{variant:"line","data-component-x-ray":"TabsList"},{default:t(()=>[e(n(o),{value:"overview","data-component-x-ray-trigger":"TabsTrigger"},{default:t(()=>[...a[0]||(a[0]=[r(" Overview ",-1)])]),_:1}),e(n(o),{value:"analytics","data-component-x-ray-trigger":"TabsTrigger"},{default:t(()=>[...a[1]||(a[1]=[r(" Analytics ",-1)])]),_:1}),e(n(o),{value:"reports",disabled:!0,"data-component-x-ray-trigger":"TabsTrigger"},{default:t(()=>[...a[2]||(a[2]=[r(" Reports ",-1)])]),_:1})]),_:1})]),_:1}))}}),$=`<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
<\/script>

<template>
  <Tabs default-value="overview" data-component-x-ray="Tabs">
    <TabsList variant="line" data-component-x-ray="TabsList">
      <TabsTrigger value="overview" data-component-x-ray-trigger="TabsTrigger">
        Overview
      </TabsTrigger>
      <TabsTrigger value="analytics" data-component-x-ray-trigger="TabsTrigger">
        Analytics
      </TabsTrigger>
      <TabsTrigger value="reports" :disabled="true" data-component-x-ray-trigger="TabsTrigger">
        Reports
      </TabsTrigger>
    </TabsList>
  </Tabs>
</template>
`,S=s({__name:"TabsWithIcons",setup(g){return(T,a)=>(i(),u(n(d),{"default-value":"preview","data-component-x-ray":"Tabs"},{default:t(()=>[e(n(m),{"data-component-x-ray":"TabsList"},{default:t(()=>[e(n(o),{value:"preview","data-component-x-ray-trigger":"TabsTrigger"},{default:t(()=>[e(n(w)),a[0]||(a[0]=r(" Preview ",-1))]),_:1}),e(n(o),{value:"code","data-component-x-ray-trigger":"TabsTrigger"},{default:t(()=>[e(n(x)),a[1]||(a[1]=r(" Code ",-1))]),_:1})]),_:1})]),_:1}))}}),k=`<script setup lang="ts">
import { AppWindowIcon, CodeIcon } from "lucide-vue-next";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
<\/script>

<template>
  <Tabs default-value="preview" data-component-x-ray="Tabs">
    <TabsList data-component-x-ray="TabsList">
      <TabsTrigger value="preview" data-component-x-ray-trigger="TabsTrigger">
        <AppWindowIcon />
        Preview
      </TabsTrigger>
      <TabsTrigger value="code" data-component-x-ray-trigger="TabsTrigger">
        <CodeIcon />
        Code
      </TabsTrigger>
    </TabsList>
  </Tabs>
</template>
`,W=s({__name:"TabsIconOnly",setup(g){return(T,a)=>(i(),u(n(d),{"default-value":"home","data-component-x-ray":"Tabs"},{default:t(()=>[e(n(m),{"data-component-x-ray":"TabsList"},{default:t(()=>[e(n(o),{value:"home","data-component-x-ray-trigger":"TabsTrigger"},{default:t(()=>[e(n(v))]),_:1}),e(n(o),{value:"search","data-component-x-ray-trigger":"TabsTrigger"},{default:t(()=>[e(n(y))]),_:1}),e(n(o),{value:"settings","data-component-x-ray-trigger":"TabsTrigger"},{default:t(()=>[e(n(_))]),_:1})]),_:1})]),_:1}))}}),A=`<script setup lang="ts">
import { HomeIcon, SearchIcon, SettingsIcon } from "lucide-vue-next";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
<\/script>

<template>
  <Tabs default-value="home" data-component-x-ray="Tabs">
    <TabsList data-component-x-ray="TabsList">
      <TabsTrigger value="home" data-component-x-ray-trigger="TabsTrigger">
        <HomeIcon />
      </TabsTrigger>
      <TabsTrigger value="search" data-component-x-ray-trigger="TabsTrigger">
        <SearchIcon />
      </TabsTrigger>
      <TabsTrigger value="settings" data-component-x-ray-trigger="TabsTrigger">
        <SettingsIcon />
      </TabsTrigger>
    </TabsList>
  </Tabs>
</template>
`,B={class:"p-4 rounded-md border"},H=s({__name:"TabsWithContent",setup(g){return(T,a)=>(i(),u(n(d),{"default-value":"account","data-component-x-ray":"Tabs"},{default:t(()=>[e(n(m),{"data-component-x-ray":"TabsList"},{default:t(()=>[e(n(o),{value:"account","data-component-x-ray-trigger":"TabsTrigger"},{default:t(()=>[...a[0]||(a[0]=[r(" Account ",-1)])]),_:1}),e(n(o),{value:"password","data-component-x-ray-trigger":"TabsTrigger"},{default:t(()=>[...a[1]||(a[1]=[r(" Password ",-1)])]),_:1}),e(n(o),{value:"notifications","data-component-x-ray-trigger":"TabsTrigger"},{default:t(()=>[...a[2]||(a[2]=[r(" Notifications ",-1)])]),_:1})]),_:1}),c("div",B,[e(n(b),{value:"account","data-component-x-ray":"TabsContent"},{default:t(()=>[...a[3]||(a[3]=[r(" Manage your account preferences and profile information. ",-1)])]),_:1}),e(n(b),{value:"password","data-component-x-ray":"TabsContent"},{default:t(()=>[...a[4]||(a[4]=[r(" Update your password to keep your account secure. ",-1)])]),_:1}),e(n(b),{value:"notifications","data-component-x-ray":"TabsContent"},{default:t(()=>[...a[5]||(a[5]=[r(" Configure how you receive notifications and alerts. ",-1)])]),_:1})])]),_:1}))}}),R=`<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
<\/script>

<template>
  <Tabs default-value="account" data-component-x-ray="Tabs">
    <TabsList data-component-x-ray="TabsList">
      <TabsTrigger value="account" data-component-x-ray-trigger="TabsTrigger">
        Account
      </TabsTrigger>
      <TabsTrigger value="password" data-component-x-ray-trigger="TabsTrigger">
        Password
      </TabsTrigger>
      <TabsTrigger value="notifications" data-component-x-ray-trigger="TabsTrigger">
        Notifications
      </TabsTrigger>
    </TabsList>
    <div class="p-4 rounded-md border">
      <TabsContent value="account" data-component-x-ray="TabsContent">
        Manage your account preferences and profile information.
      </TabsContent>
      <TabsContent value="password" data-component-x-ray="TabsContent">
        Update your password to keep your account secure.
      </TabsContent>
      <TabsContent value="notifications" data-component-x-ray="TabsContent">
        Configure how you receive notifications and alerts.
      </TabsContent>
    </div>
  </Tabs>
</template>
`,M={class:"@container max-w-250 mx-auto"},N={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},K=s({__name:"_Examples",setup(g){return(T,a)=>(i(),f("div",M,[c("div",N,[e(p,{"raw-component":n(C)},{title:t(()=>[...a[0]||(a[0]=[r(" Basic ",-1)])]),example:t(()=>[e(L)]),_:1},8,["raw-component"]),e(p,{"raw-component":n($)},{title:t(()=>[...a[1]||(a[1]=[r(" Disabled ",-1)])]),example:t(()=>[e(I)]),_:1},8,["raw-component"]),e(p,{"raw-component":n(k)},{title:t(()=>[...a[2]||(a[2]=[r(" With Icons ",-1)])]),example:t(()=>[e(S)]),_:1},8,["raw-component"]),e(p,{"raw-component":n(A)},{title:t(()=>[...a[3]||(a[3]=[r(" Icon Only ",-1)])]),example:t(()=>[e(W)]),_:1},8,["raw-component"]),e(p,{"raw-component":n(R)},{title:t(()=>[...a[4]||(a[4]=[r(" With Content ",-1)])]),example:t(()=>[e(H)]),_:1},8,["raw-component"])])]))}});export{K as default};
