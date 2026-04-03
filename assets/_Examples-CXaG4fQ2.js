import{_ as x}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DbPjP-za.js";import{_ as m}from"./Checkbox.vue_vue_type_script_setup_true_lang-D26nC9F4.js";import{_ as p}from"./index-q-LJsFB9.js";import{_ as v}from"./FieldGroup.vue_vue_type_script_setup_true_lang-BSDiRrdM.js";import{_ as f}from"./FieldLabel.vue_vue_type_script_setup_true_lang-DFhQE5-v.js";import{d as h,o,e as s,H as n,D as a,u as e,I as r,z as g,L as w,M as k,J as T,h as u,b as V,A as L}from"./highlight-DXRdThM2.js";import{_ as G}from"./FieldDescription.vue_vue_type_script_setup_true_lang-CGq4oDgo.js";import{_ as $,a as z}from"./FieldSet.vue_vue_type_script_setup_true_lang-qgp590PG.js";import{u as A,F as S,v as D,c as P}from"./utils-BDkSYXDV.js";import{a as B,b as C,c as I,d as M,e as R,_ as U}from"./TableHeader.vue_vue_type_script_setup_true_lang-CTH4KEnK.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-CIXp-aNu.js";import"./isValueEqualOrExist-Cli9G3Za.js";import"./ohash.D__AXeF1-C-E83dC9.js";import"./useFormControl-4XoA_PSt.js";import"./VisuallyHiddenInput-UsrU_XqS.js";import"./usePrimitiveElement-DBla2SSk.js";import"./RovingFocusItem-BYXyurAd.js";import"./Collection-CX6IziOc.js";import"./utils-Cjg6PTZ9.js";import"./RovingFocusGroup-c-SW99X5.js";import"./Label.vue_vue_type_script_setup_true_lang-DEtdywft.js";const N=h({__name:"CheckboxBasic",setup(_){return(b,t)=>(o(),s(e(v),null,{default:n(()=>[a(e(p),{orientation:"horizontal"},{default:n(()=>[a(e(m),{id:"checkbox-basic-example",name:"checkbox-basic-example"}),a(e(f),{for:"checkbox-basic-example"},{default:n(()=>[...t[0]||(t[0]=[r("Accept terms and conditions",-1)])]),_:1})]),_:1})]),_:1}))}}),H=`<script lang="ts" setup>
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/shared/components/ui/field";
<\/script>

<template>
  <FieldGroup>
    <Field orientation="horizontal">
      <Checkbox id="checkbox-basic-example" name="checkbox-basic-example" />
      <FieldLabel for="checkbox-basic-example">Accept terms and conditions</FieldLabel>
    </Field>
  </FieldGroup>
</template>

<style lang="postcss" scoped></style>
`,K=h({__name:"CheckboxDisabled",setup(_){return(b,t)=>(o(),s(e(v),null,{default:n(()=>[a(e(p),{orientation:"horizontal"},{default:n(()=>[a(e(m),{id:"checkbox-disabled-example",name:"checkbox-disabled-example",disabled:""}),a(e(f),{for:"checkbox-disabled-example"},{default:n(()=>[...t[0]||(t[0]=[r("Accept terms and conditions",-1)])]),_:1})]),_:1})]),_:1}))}}),O=`<script lang="ts" setup>
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/shared/components/ui/field";
<\/script>

<template>
  <FieldGroup>
    <Field orientation="horizontal">
      <Checkbox id="checkbox-disabled-example" name="checkbox-disabled-example" disabled />
      <FieldLabel for="checkbox-disabled-example">Accept terms and conditions</FieldLabel>
    </Field>
  </FieldGroup>
</template>

<style lang="postcss" scoped></style>
`,E=h({__name:"CheckboxGroup",setup(_){return(b,t)=>(o(),s(e(z),null,{default:n(()=>[a(e($),null,{default:n(()=>[...t[0]||(t[0]=[r("Choose your favorite fruits",-1)])]),_:1}),a(e(G),null,{default:n(()=>[...t[1]||(t[1]=[r(" Select all the fruits you like from the list below. ",-1)])]),_:1}),a(e(v),{class:"gap-3"},{default:n(()=>[a(e(p),{orientation:"horizontal"},{default:n(()=>[a(e(m),{id:"fruit-apple",name:"fruits",value:"apple"}),a(e(f),{for:"fruit-apple"},{default:n(()=>[...t[2]||(t[2]=[r("Apple",-1)])]),_:1})]),_:1}),a(e(p),{orientation:"horizontal"},{default:n(()=>[a(e(m),{id:"fruit-banana",name:"fruits",value:"banana"}),a(e(f),{for:"fruit-banana"},{default:n(()=>[...t[3]||(t[3]=[r("Banana",-1)])]),_:1})]),_:1}),a(e(p),{orientation:"horizontal"},{default:n(()=>[a(e(m),{id:"fruit-orange",name:"fruits",value:"orange"}),a(e(f),{for:"fruit-orange"},{default:n(()=>[...t[4]||(t[4]=[r("Orange",-1)])]),_:1})]),_:1}),a(e(p),{orientation:"horizontal"},{default:n(()=>[a(e(m),{id:"fruit-grape",name:"fruits",value:"grape"}),a(e(f),{for:"fruit-grape"},{default:n(()=>[...t[5]||(t[5]=[r("Grape",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),j=`<script lang="ts" setup>
import { Checkbox } from "@/shared/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/shared/components/ui/field";
<\/script>

<template>
  <FieldSet>
    <FieldLegend>Choose your favorite fruits</FieldLegend>
    <FieldDescription> Select all the fruits you like from the list below. </FieldDescription>
    <FieldGroup class="gap-3">
      <Field orientation="horizontal">
        <Checkbox id="fruit-apple" name="fruits" value="apple" />
        <FieldLabel for="fruit-apple">Apple</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="fruit-banana" name="fruits" value="banana" />
        <FieldLabel for="fruit-banana">Banana</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="fruit-orange" name="fruits" value="orange" />
        <FieldLabel for="fruit-orange">Orange</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="fruit-grape" name="fruits" value="grape" />
        <FieldLabel for="fruit-grape">Grape</FieldLabel>
      </Field>
    </FieldGroup>
  </FieldSet>
</template>

<style lang="postcss" scoped></style>
`,q=h({name:"CardPayments",__name:"CheckboxTable",setup(_){const b=[{id:"m5gr84i9",amount:316,status:"success",email:"ken99@yahoo.com"},{id:"3u1reuv4",amount:242,status:"success",email:"Abe45@gmail.com"},{id:"derv1ws0",amount:837,status:"processing",email:"Monserrat44@gmail.com"},{id:"5kma53ae",amount:874,status:"success",email:"Silas22@gmail.com"},{id:"bhqecj4p",amount:721,status:"failed",email:"carmella@hotmail.com"}],t=[{id:"select",header:({table:l})=>u(m,{modelValue:l.getIsAllPageRowsSelected()||l.getIsSomePageRowsSelected()&&"indeterminate","onUpdate:modelValue":i=>l.toggleAllPageRowsSelected(!!i),ariaLabel:"Select all"}),cell:({row:l})=>u(m,{modelValue:l.getIsSelected(),"onUpdate:modelValue":i=>l.toggleSelected(!!i),ariaLabel:"Select row"})},{accessorKey:"status",header:"Status",cell:({row:l})=>u("div",{class:"capitalize"},l.getValue("status"))},{accessorKey:"email",header:"Email",cell:({row:l})=>u("div",{class:"lowercase"},l.getValue("email"))},{accessorKey:"amount",header:()=>u("div",{class:"text-right"},"Amount"),cell:({row:l})=>{const i=Number.parseFloat(l.getValue("amount")),d=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(i);return u("div",{class:"text-right font-medium"},d)}}],y=V({}),F=A({data:b,columns:t,getCoreRowModel:P(),onRowSelectionChange:l=>D(l,y),state:{get rowSelection(){return y.value}}});return(l,i)=>(o(),s(e(U),null,{default:n(()=>[a(e(B),null,{default:n(()=>[(o(!0),g(w,null,k(e(F).getHeaderGroups(),d=>(o(),s(e(C),{key:d.id},{default:n(()=>[(o(!0),g(w,null,k(d.headers,c=>(o(),s(e(I),{key:c.id,class:"[&:has([role=checkbox])]:pl-3"},{default:n(()=>[c.isPlaceholder?T("",!0):(o(),s(e(S),{key:0,render:c.column.columnDef.header,props:c.getContext()},null,8,["render","props"]))]),_:2},1024))),128))]),_:2},1024))),128))]),_:1}),a(e(M),null,{default:n(()=>[e(F).getRowModel().rows?.length?(o(!0),g(w,{key:0},k(e(F).getRowModel().rows,d=>(o(),s(e(C),{key:d.id,"data-state":d.getIsSelected()&&"selected"},{default:n(()=>[(o(!0),g(w,null,k(d.getVisibleCells(),c=>(o(),s(e(R),{key:c.id,class:"[&:has([role=checkbox])]:pl-3 p-2"},{default:n(()=>[a(e(S),{render:c.column.columnDef.cell,props:c.getContext()},null,8,["render","props"])]),_:2},1024))),128))]),_:2},1032,["data-state"]))),128)):(o(),s(e(C),{key:1},{default:n(()=>[a(e(R),{colspan:t.length,class:"h-24 text-center"},{default:n(()=>[...i[0]||(i[0]=[r(" No results. ",-1)])]),_:1},8,["colspan"])]),_:1}))]),_:1})]),_:1}))}}),J=`<script setup lang="ts">
import { h, ref } from "vue";
import type { ColumnDef } from "@tanstack/vue-table";
import { FlexRender, getCoreRowModel, useVueTable } from "@tanstack/vue-table";

import { Checkbox } from "@/shared/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { valueUpdater } from "@/shared/components/ui/table/utils";

export interface Payment {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
}

defineOptions({
  name: "CardPayments",
});

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
];

const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) =>
      h(Checkbox, {
        "modelValue":
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate"),
        "onUpdate:modelValue": (value) => table.toggleAllPageRowsSelected(!!value),
        "ariaLabel": "Select all",
      }),
    cell: ({ row }) =>
      h(Checkbox, {
        "modelValue": row.getIsSelected(),
        "onUpdate:modelValue": (value) => row.toggleSelected(!!value),
        "ariaLabel": "Select row",
      }),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => h("div", { class: "capitalize" }, row.getValue("status")),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => h("div", { class: "lowercase" }, row.getValue("email")),
  },
  {
    accessorKey: "amount",
    header: () => h("div", { class: "text-right" }, "Amount"),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return h("div", { class: "text-right font-medium" }, formatted);
    },
  },
];

const rowSelection = ref({});

const table = useVueTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  onRowSelectionChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowSelection),
  state: {
    get rowSelection() {
      return rowSelection.value;
    },
  },
});
<\/script>

<template>
  <Table>
    <TableHeader>
      <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
        <TableHead
          v-for="header in headerGroup.headers"
          :key="header.id"
          class="[&:has([role=checkbox])]:pl-3"
        >
          <FlexRender
            v-if="!header.isPlaceholder"
            :render="header.column.columnDef.header"
            :props="header.getContext()"
          />
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <template v-if="table.getRowModel().rows?.length">
        <TableRow
          v-for="row in table.getRowModel().rows"
          :key="row.id"
          :data-state="row.getIsSelected() && 'selected'"
        >
          <TableCell
            v-for="cell in row.getVisibleCells()"
            :key="cell.id"
            class="[&:has([role=checkbox])]:pl-3 p-2"
          >
            <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
          </TableCell>
        </TableRow>
      </template>

      <TableRow v-else>
        <TableCell :colspan="columns.length" class="h-24 text-center"> No results. </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
`,Q={class:"@container max-w-200 mx-auto"},W={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},_e=h({__name:"_Examples",setup(_){return(b,t)=>(o(),g("div",Q,[L("div",W,[a(x,{"raw-component":e(H)},{title:n(()=>[...t[0]||(t[0]=[r("Basic",-1)])]),example:n(()=>[a(N)]),_:1},8,["raw-component"]),a(x,{"raw-component":e(O)},{title:n(()=>[...t[1]||(t[1]=[r("Disabled",-1)])]),example:n(()=>[a(K)]),_:1},8,["raw-component"]),a(x,{"raw-component":e(j)},{title:n(()=>[...t[2]||(t[2]=[r("Group",-1)])]),example:n(()=>[a(E)]),_:1},8,["raw-component"]),a(x,{"raw-component":e(J)},{title:n(()=>[...t[3]||(t[3]=[r("In table",-1)])]),example:n(()=>[a(q)]),_:1},8,["raw-component"])])]))}});export{_e as default};
