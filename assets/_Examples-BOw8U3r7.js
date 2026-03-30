import{_ as g}from"./ExampleCard.vue_vue_type_script_setup_true_lang-DXWJnCy0.js";import{a as C,b as p,c as d,d as w,e as l,_ as M}from"./TableHeader.vue_vue_type_script_setup_true_lang-tL2V464q.js";import{d as x,o as i,z as f,T as $,u as e,a6 as B,a3 as S,a as c,H as n,D as a,I as o,L as A,M as P,B as T,A as y,_ as D}from"./DialogTitle.vue_vue_type_script_setup_true_lang-qm1obxa6.js";import{_ as H,a as _,b as I,c as u}from"./DropdownMenuTrigger.vue_vue_type_script_setup_true_lang-eD_a5RMT.js";import{_ as v}from"./DropdownMenuSeparator.vue_vue_type_script_setup_true_lang-B-y172b6.js";import{E as R}from"./ellipsis-BVxzk6hC.js";import"./CoppyButton.vue_vue_type_script_setup_true_lang-BQ5IMRBD.js";import"./TooltipTrigger.vue_vue_type_script_setup_true_lang-B8xttiRE.js";import"./VisuallyHidden-DHKEUU1O.js";import"./MenuPortal-Br9QdFv6.js";import"./Collection-sgskq-W2.js";import"./usePrimitiveElement-CYhM1I7-.js";import"./useArrowNavigation-D-pctMGk.js";import"./useFocusGuards-CcO4GPhz.js";import"./useTypeahead-BmI3aVqe.js";import"./RovingFocusGroup-ClOo4t3d.js";import"./utils-Dom-XzsJ.js";import"./MenuSeparator-sxI1G24m.js";const N=x({__name:"TableCaption",props:{class:{}},setup(b){const s=b;return(t,r)=>(i(),f("caption",{"data-slot":"table-caption",class:$(e(B)("text-muted-foreground mt-4 text-sm",s.class))},[S(t.$slots,"default")],2))}}),V=x({__name:"TableFooter",props:{class:{}},setup(b){const s=b;return(t,r)=>(i(),f("tfoot",{"data-slot":"table-footer",class:$(e(B)("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",s.class))},[S(t.$slots,"default")],2))}}),k=x({__name:"TableBasic",setup(b){const s=[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"},{invoice:"INV005",paymentStatus:"Paid",totalAmount:"$550.00",paymentMethod:"PayPal"},{invoice:"INV006",paymentStatus:"Pending",totalAmount:"$200.00",paymentMethod:"Bank Transfer"},{invoice:"INV007",paymentStatus:"Unpaid",totalAmount:"$300.00",paymentMethod:"Credit Card"}];return(t,r)=>(i(),c(e(M),{"data-component-x-ray":"Table"},{default:n(()=>[a(e(N),{"data-component-x-ray":"TableCaption"},{default:n(()=>[...r[0]||(r[0]=[o("A list of your recent invoices.",-1)])]),_:1}),a(e(C),{"data-component-x-ray":"TableHeader"},{default:n(()=>[a(e(p),{"data-component-x-ray":"TableRow"},{default:n(()=>[a(e(d),{class:"w-25","data-component-x-ray":"TableHead"},{default:n(()=>[...r[1]||(r[1]=[o(" Invoice ",-1)])]),_:1}),a(e(d),{"data-component-x-ray":"TableHead"},{default:n(()=>[...r[2]||(r[2]=[o("Status",-1)])]),_:1}),a(e(d),{"data-component-x-ray":"TableHead"},{default:n(()=>[...r[3]||(r[3]=[o("Method",-1)])]),_:1}),a(e(d),{class:"text-right","data-component-x-ray":"TableHead"},{default:n(()=>[...r[4]||(r[4]=[o(" Amount ",-1)])]),_:1})]),_:1})]),_:1}),a(e(w),{"data-component-x-ray":"TableBody"},{default:n(()=>[(i(!0),f(A,null,P(s.slice(0,3),m=>(i(),c(e(p),{key:m.invoice,"data-component-x-ray":"TableRow"},{default:n(()=>[a(e(l),{class:"font-medium","data-component-x-ray":"TableCell"},{default:n(()=>[o(T(m.invoice),1)]),_:2},1024),a(e(l),{"data-component-x-ray":"TableCell"},{default:n(()=>[o(T(m.paymentStatus),1)]),_:2},1024),a(e(l),{"data-component-x-ray":"TableCell"},{default:n(()=>[o(T(m.paymentMethod),1)]),_:2},1024),a(e(l),{class:"text-right","data-component-x-ray":"TableCell"},{default:n(()=>[o(T(m.totalAmount),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}))}}),z=`<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
<\/script>

<template>
  <Table data-component-x-ray="Table">
    <TableCaption data-component-x-ray="TableCaption">A list of your recent invoices.</TableCaption>
    <TableHeader data-component-x-ray="TableHeader">
      <TableRow data-component-x-ray="TableRow">
        <TableHead class="w-25" data-component-x-ray="TableHead"> Invoice </TableHead>
        <TableHead data-component-x-ray="TableHead">Status</TableHead>
        <TableHead data-component-x-ray="TableHead">Method</TableHead>
        <TableHead class="text-right" data-component-x-ray="TableHead"> Amount </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody data-component-x-ray="TableBody">
      <TableRow
        v-for="invoice in invoices.slice(0, 3)"
        :key="invoice.invoice"
        data-component-x-ray="TableRow"
      >
        <TableCell class="font-medium" data-component-x-ray="TableCell">
          {{ invoice.invoice }}
        </TableCell>
        <TableCell data-component-x-ray="TableCell">{{ invoice.paymentStatus }}</TableCell>
        <TableCell data-component-x-ray="TableCell">{{ invoice.paymentMethod }}</TableCell>
        <TableCell class="text-right" data-component-x-ray="TableCell">
          {{ invoice.totalAmount }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
`,W=x({__name:"TableWithFooter",setup(b){const s=[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"},{invoice:"INV005",paymentStatus:"Paid",totalAmount:"$550.00",paymentMethod:"PayPal"},{invoice:"INV006",paymentStatus:"Pending",totalAmount:"$200.00",paymentMethod:"Bank Transfer"},{invoice:"INV007",paymentStatus:"Unpaid",totalAmount:"$300.00",paymentMethod:"Credit Card"}];return(t,r)=>(i(),c(e(M),{"data-component-x-ray":"Table"},{default:n(()=>[a(e(N),{"data-component-x-ray":"TableCaption"},{default:n(()=>[...r[0]||(r[0]=[o("A list of your recent invoices.",-1)])]),_:1}),a(e(C),{"data-component-x-ray":"TableHeader"},{default:n(()=>[a(e(p),{"data-component-x-ray":"TableRow"},{default:n(()=>[a(e(d),{class:"w-25","data-component-x-ray":"TableHead"},{default:n(()=>[...r[1]||(r[1]=[o(" Invoice ",-1)])]),_:1}),a(e(d),{"data-component-x-ray":"TableHead"},{default:n(()=>[...r[2]||(r[2]=[o("Status",-1)])]),_:1}),a(e(d),{"data-component-x-ray":"TableHead"},{default:n(()=>[...r[3]||(r[3]=[o("Method",-1)])]),_:1}),a(e(d),{class:"text-right","data-component-x-ray":"TableHead"},{default:n(()=>[...r[4]||(r[4]=[o(" Amount ",-1)])]),_:1})]),_:1})]),_:1}),a(e(w),{"data-component-x-ray":"TableBody"},{default:n(()=>[(i(!0),f(A,null,P(s.slice(0,3),m=>(i(),c(e(p),{key:m.invoice,"data-component-x-ray":"TableRow"},{default:n(()=>[a(e(l),{class:"font-medium","data-component-x-ray":"TableCell"},{default:n(()=>[o(T(m.invoice),1)]),_:2},1024),a(e(l),{"data-component-x-ray":"TableCell"},{default:n(()=>[o(T(m.paymentStatus),1)]),_:2},1024),a(e(l),{"data-component-x-ray":"TableCell"},{default:n(()=>[o(T(m.paymentMethod),1)]),_:2},1024),a(e(l),{class:"text-right","data-component-x-ray":"TableCell"},{default:n(()=>[o(T(m.totalAmount),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),a(e(V),{"data-component-x-ray":"TableFooter"},{default:n(()=>[a(e(p),{"data-component-x-ray":"TableRow"},{default:n(()=>[a(e(l),{colspan:"3","data-component-x-ray":"TableCell"},{default:n(()=>[...r[5]||(r[5]=[o(" Total ",-1)])]),_:1}),a(e(l),{class:"text-right","data-component-x-ray":"TableCell"},{default:n(()=>[...r[6]||(r[6]=[o(" $2,500.00 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),E=`<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
<\/script>

<template>
  <Table data-component-x-ray="Table">
    <TableCaption data-component-x-ray="TableCaption">A list of your recent invoices.</TableCaption>
    <TableHeader data-component-x-ray="TableHeader">
      <TableRow data-component-x-ray="TableRow">
        <TableHead class="w-25" data-component-x-ray="TableHead"> Invoice </TableHead>
        <TableHead data-component-x-ray="TableHead">Status</TableHead>
        <TableHead data-component-x-ray="TableHead">Method</TableHead>
        <TableHead class="text-right" data-component-x-ray="TableHead"> Amount </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody data-component-x-ray="TableBody">
      <TableRow
        v-for="invoice in invoices.slice(0, 3)"
        :key="invoice.invoice"
        data-component-x-ray="TableRow"
      >
        <TableCell class="font-medium" data-component-x-ray="TableCell">
          {{ invoice.invoice }}
        </TableCell>
        <TableCell data-component-x-ray="TableCell">{{ invoice.paymentStatus }}</TableCell>
        <TableCell data-component-x-ray="TableCell">{{ invoice.paymentMethod }}</TableCell>
        <TableCell class="text-right" data-component-x-ray="TableCell">
          {{ invoice.totalAmount }}
        </TableCell>
      </TableRow>
    </TableBody>
    <TableFooter data-component-x-ray="TableFooter">
      <TableRow data-component-x-ray="TableRow">
        <TableCell colspan="3" data-component-x-ray="TableCell"> Total </TableCell>
        <TableCell class="text-right" data-component-x-ray="TableCell"> $2,500.00 </TableCell>
      </TableRow>
    </TableFooter>
  </Table>
</template>
`,F=x({__name:"TableWithBadges",setup(b){return(s,t)=>(i(),c(e(M),{"data-component-x-ray":"Table"},{default:n(()=>[a(e(C),{"data-component-x-ray":"TableHeader"},{default:n(()=>[a(e(p),{"data-component-x-ray":"TableRow"},{default:n(()=>[a(e(d),{"data-component-x-ray":"TableHead"},{default:n(()=>[...t[0]||(t[0]=[o("Task",-1)])]),_:1}),a(e(d),{"data-component-x-ray":"TableHead"},{default:n(()=>[...t[1]||(t[1]=[o("Status",-1)])]),_:1}),a(e(d),{class:"text-right","data-component-x-ray":"TableHead"},{default:n(()=>[...t[2]||(t[2]=[o(" Priority ",-1)])]),_:1})]),_:1})]),_:1}),a(e(w),{"data-component-x-ray":"TableBody"},{default:n(()=>[a(e(p),{"data-component-x-ray":"TableRow"},{default:n(()=>[a(e(l),{class:"font-medium","data-component-x-ray":"TableCell"},{default:n(()=>[...t[3]||(t[3]=[o(" Design homepage ",-1)])]),_:1}),a(e(l),{"data-component-x-ray":"TableCell"},{default:n(()=>[...t[4]||(t[4]=[y("span",{class:"inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400"}," Completed ",-1)])]),_:1}),a(e(l),{class:"text-right","data-component-x-ray":"TableCell"},{default:n(()=>[...t[5]||(t[5]=[y("span",{class:"inline-flex items-center rounded-full bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-400"}," High ",-1)])]),_:1})]),_:1}),a(e(p),{"data-component-x-ray":"TableRow"},{default:n(()=>[a(e(l),{class:"font-medium","data-component-x-ray":"TableCell"},{default:n(()=>[...t[6]||(t[6]=[o(" Implement API ",-1)])]),_:1}),a(e(l),null,{default:n(()=>[...t[7]||(t[7]=[y("span",{class:"inline-flex items-center rounded-full bg-yellow-500/10 px-2 py-1 text-xs font-medium text-yellow-700 dark:text-yellow-400"}," In Progress ",-1)])]),_:1}),a(e(l),{class:"text-right","data-component-x-ray":"TableCell"},{default:n(()=>[...t[8]||(t[8]=[y("span",{class:"inline-flex items-center rounded-full bg-gray-500/10 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-400"}," Medium ",-1)])]),_:1})]),_:1}),a(e(p),{"data-component-x-ray":"TableRow"},{default:n(()=>[a(e(l),{class:"font-medium","data-component-x-ray":"TableCell"},{default:n(()=>[...t[9]||(t[9]=[o(" Write tests ",-1)])]),_:1}),a(e(l),{"data-component-x-ray":"TableCell"},{default:n(()=>[...t[10]||(t[10]=[y("span",{class:"inline-flex items-center rounded-full bg-gray-500/10 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-400"}," Pending ",-1)])]),_:1}),a(e(l),{class:"text-right","data-component-x-ray":"TableCell"},{default:n(()=>[...t[11]||(t[11]=[y("span",{class:"inline-flex items-center rounded-full bg-gray-500/10 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-400"}," Low ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))}}),U=`<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
<\/script>

<template>
  <Table data-component-x-ray="Table">
    <TableHeader data-component-x-ray="TableHeader">
      <TableRow data-component-x-ray="TableRow">
        <TableHead data-component-x-ray="TableHead">Task</TableHead>
        <TableHead data-component-x-ray="TableHead">Status</TableHead>
        <TableHead class="text-right" data-component-x-ray="TableHead"> Priority </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody data-component-x-ray="TableBody">
      <TableRow data-component-x-ray="TableRow">
        <TableCell class="font-medium" data-component-x-ray="TableCell">
          Design homepage
        </TableCell>
        <TableCell data-component-x-ray="TableCell">
          <span
            class="inline-flex items-center rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400"
          >
            Completed
          </span>
        </TableCell>
        <TableCell class="text-right" data-component-x-ray="TableCell">
          <span
            class="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-400"
          >
            High
          </span>
        </TableCell>
      </TableRow>
      <TableRow data-component-x-ray="TableRow">
        <TableCell class="font-medium" data-component-x-ray="TableCell"> Implement API </TableCell>
        <TableCell>
          <span
            class="inline-flex items-center rounded-full bg-yellow-500/10 px-2 py-1 text-xs font-medium text-yellow-700 dark:text-yellow-400"
          >
            In Progress
          </span>
        </TableCell>
        <TableCell class="text-right" data-component-x-ray="TableCell">
          <span
            class="inline-flex items-center rounded-full bg-gray-500/10 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-400"
          >
            Medium
          </span>
        </TableCell>
      </TableRow>
      <TableRow data-component-x-ray="TableRow">
        <TableCell class="font-medium" data-component-x-ray="TableCell"> Write tests </TableCell>
        <TableCell data-component-x-ray="TableCell">
          <span
            class="inline-flex items-center rounded-full bg-gray-500/10 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-400"
          >
            Pending
          </span>
        </TableCell>
        <TableCell class="text-right" data-component-x-ray="TableCell">
          <span
            class="inline-flex items-center rounded-full bg-gray-500/10 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-400"
          >
            Low
          </span>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
`,h=x({__name:"TableWithActions",setup(b){return(s,t)=>(i(),c(e(M),{"data-component-x-ray":"Table"},{default:n(()=>[a(e(C),{"data-component-x-ray":"TableHeader"},{default:n(()=>[a(e(p),{"data-component-x-ray":"TableRow"},{default:n(()=>[a(e(d),{"data-component-x-ray":"TableHead"},{default:n(()=>[...t[0]||(t[0]=[o("Product",-1)])]),_:1}),a(e(d),{"data-component-x-ray":"TableHead"},{default:n(()=>[...t[1]||(t[1]=[o("Price",-1)])]),_:1}),a(e(d),{class:"text-right","data-component-x-ray":"TableHead"},{default:n(()=>[...t[2]||(t[2]=[o(" Actions ",-1)])]),_:1})]),_:1})]),_:1}),a(e(w),null,{default:n(()=>[a(e(p),{"data-component-x-ray":"TableRow"},{default:n(()=>[a(e(l),{class:"font-medium","data-component-x-ray":"TableCell"},{default:n(()=>[...t[3]||(t[3]=[o(" Wireless Mouse ",-1)])]),_:1}),a(e(l),{"data-component-x-ray":"TableCell"},{default:n(()=>[...t[4]||(t[4]=[o("$29.99",-1)])]),_:1}),a(e(l),{class:"text-right","data-component-x-ray":"TableCell"},{default:n(()=>[a(e(H),{"data-component-x-ray":"DropdownMenu"},{default:n(()=>[a(e(_),{"as-child":!0},{default:n(()=>[a(e(D),{variant:"ghost",size:"icon",class:"size-8","aria-label":"Open menu","data-component-x-ray-trigger":"Button"},{default:n(()=>[a(e(R))]),_:1})]),_:1}),a(e(I),{align:"end","data-component-x-ray":"DropdownMenuContent"},{default:n(()=>[a(e(u),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:n(()=>[...t[5]||(t[5]=[o(" Edit ",-1)])]),_:1}),a(e(u),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:n(()=>[...t[6]||(t[6]=[o(" Duplicate ",-1)])]),_:1}),a(e(v),{"data-component-x-ray":"DropdownMenuSeparator"}),a(e(u),{variant:"destructive","data-component-x-ray-trigger":"DropdownMenuItem"},{default:n(()=>[...t[7]||(t[7]=[o(" Delete ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(e(p),{"data-component-x-ray":"TableRow"},{default:n(()=>[a(e(l),{class:"font-medium","data-component-x-ray":"TableCell"},{default:n(()=>[...t[8]||(t[8]=[o(" Mechanical Keyboard ",-1)])]),_:1}),a(e(l),{"data-component-x-ray":"TableCell"},{default:n(()=>[...t[9]||(t[9]=[o("$129.99",-1)])]),_:1}),a(e(l),{class:"text-right","data-component-x-ray":"TableCell"},{default:n(()=>[a(e(H),{"data-component-x-ray":"DropdownMenu"},{default:n(()=>[a(e(_),{"as-child":!0},{default:n(()=>[a(e(D),{variant:"ghost",size:"icon",class:"size-8","aria-label":"Open menu","data-component-x-ray-trigger":"Button"},{default:n(()=>[a(e(R))]),_:1})]),_:1}),a(e(I),{align:"end","data-component-x-ray":"DropdownMenuContent"},{default:n(()=>[a(e(u),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:n(()=>[...t[10]||(t[10]=[o(" Edit ",-1)])]),_:1}),a(e(u),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:n(()=>[...t[11]||(t[11]=[o(" Duplicate ",-1)])]),_:1}),a(e(v),{"data-component-x-ray":"DropdownMenuSeparator"}),a(e(u),{variant:"destructive","data-component-x-ray-trigger":"DropdownMenuItem"},{default:n(()=>[...t[12]||(t[12]=[o(" Delete ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(e(p),{"data-component-x-ray":"TableRow"},{default:n(()=>[a(e(l),{class:"font-medium","data-component-x-ray":"TableCell"},{default:n(()=>[...t[13]||(t[13]=[o(" USB-C Hub ",-1)])]),_:1}),a(e(l),{"data-component-x-ray":"TableCell"},{default:n(()=>[...t[14]||(t[14]=[o("$49.99",-1)])]),_:1}),a(e(l),{class:"text-right","data-component-x-ray":"TableCell"},{default:n(()=>[a(e(H),{"data-component-x-ray":"DropdownMenu"},{default:n(()=>[a(e(_),{"as-child":!0},{default:n(()=>[a(e(D),{variant:"ghost",size:"icon",class:"size-8","aria-label":"Open menu","data-component-x-ray-trigger":"Button"},{default:n(()=>[a(e(R))]),_:1})]),_:1}),a(e(I),{align:"end","data-component-x-ray":"DropdownMenuContent"},{default:n(()=>[a(e(u),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:n(()=>[...t[15]||(t[15]=[o(" Edit ",-1)])]),_:1}),a(e(u),{"data-component-x-ray-trigger":"DropdownMenuItem"},{default:n(()=>[...t[16]||(t[16]=[o(" Duplicate ",-1)])]),_:1}),a(e(v),{"data-component-x-ray":"DropdownMenuSeparator"}),a(e(u),{variant:"destructive","data-component-x-ray-trigger":"DropdownMenuItem"},{default:n(()=>[...t[17]||(t[17]=[o(" Delete ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),O=`<script setup lang="ts">
import { MoreHorizontalIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
<\/script>

<template>
  <Table data-component-x-ray="Table">
    <TableHeader data-component-x-ray="TableHeader">
      <TableRow data-component-x-ray="TableRow">
        <TableHead data-component-x-ray="TableHead">Product</TableHead>
        <TableHead data-component-x-ray="TableHead">Price</TableHead>
        <TableHead class="text-right" data-component-x-ray="TableHead"> Actions </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow data-component-x-ray="TableRow">
        <TableCell class="font-medium" data-component-x-ray="TableCell"> Wireless Mouse </TableCell>
        <TableCell data-component-x-ray="TableCell">$29.99</TableCell>
        <TableCell class="text-right" data-component-x-ray="TableCell">
          <DropdownMenu data-component-x-ray="DropdownMenu">
            <DropdownMenuTrigger :as-child="true">
              <Button
                variant="ghost"
                size="icon"
                class="size-8"
                aria-label="Open menu"
                data-component-x-ray-trigger="Button"
              >
                <MoreHorizontalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" data-component-x-ray="DropdownMenuContent">
              <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuSeparator data-component-x-ray="DropdownMenuSeparator" />
              <DropdownMenuItem
                variant="destructive"
                data-component-x-ray-trigger="DropdownMenuItem"
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
      <TableRow data-component-x-ray="TableRow">
        <TableCell class="font-medium" data-component-x-ray="TableCell">
          Mechanical Keyboard
        </TableCell>
        <TableCell data-component-x-ray="TableCell">$129.99</TableCell>
        <TableCell class="text-right" data-component-x-ray="TableCell">
          <DropdownMenu data-component-x-ray="DropdownMenu">
            <DropdownMenuTrigger :as-child="true">
              <Button
                variant="ghost"
                size="icon"
                class="size-8"
                aria-label="Open menu"
                data-component-x-ray-trigger="Button"
              >
                <MoreHorizontalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" data-component-x-ray="DropdownMenuContent">
              <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuSeparator data-component-x-ray="DropdownMenuSeparator" />
              <DropdownMenuItem
                variant="destructive"
                data-component-x-ray-trigger="DropdownMenuItem"
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
      <TableRow data-component-x-ray="TableRow">
        <TableCell class="font-medium" data-component-x-ray="TableCell"> USB-C Hub </TableCell>
        <TableCell data-component-x-ray="TableCell">$49.99</TableCell>
        <TableCell class="text-right" data-component-x-ray="TableCell">
          <DropdownMenu data-component-x-ray="DropdownMenu">
            <DropdownMenuTrigger :as-child="true">
              <Button
                variant="ghost"
                size="icon"
                class="size-8"
                aria-label="Open menu"
                data-component-x-ray-trigger="Button"
              >
                <MoreHorizontalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" data-component-x-ray="DropdownMenuContent">
              <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem data-component-x-ray-trigger="DropdownMenuItem">
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuSeparator data-component-x-ray="DropdownMenuSeparator" />
              <DropdownMenuItem
                variant="destructive"
                data-component-x-ray-trigger="DropdownMenuItem"
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
`,L={class:"@container max-w-250 mx-auto"},K={class:"grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto"},ie=x({__name:"_Examples",setup(b){return(s,t)=>(i(),f("div",L,[y("div",K,[a(g,{"raw-component":e(z)},{title:n(()=>[...t[0]||(t[0]=[o(" Basic ",-1)])]),example:n(()=>[a(k)]),_:1},8,["raw-component"]),a(g,{"raw-component":e(E)},{title:n(()=>[...t[1]||(t[1]=[o(" With Footer ",-1)])]),example:n(()=>[a(W)]),_:1},8,["raw-component"]),a(g,{"raw-component":e(U)},{title:n(()=>[...t[2]||(t[2]=[o(" With Badges ",-1)])]),example:n(()=>[a(F)]),_:1},8,["raw-component"]),a(g,{"raw-component":e(O)},{title:n(()=>[...t[3]||(t[3]=[o(" With Actions ",-1)])]),example:n(()=>[a(h)]),_:1},8,["raw-component"])])]))}});export{ie as default};
