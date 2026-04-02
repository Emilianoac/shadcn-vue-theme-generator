<script setup lang="ts">
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
</script>

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
