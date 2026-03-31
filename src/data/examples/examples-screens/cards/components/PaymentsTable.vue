<script setup lang="ts">
import { h, ref, defineComponent } from "vue";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-vue-next";
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/vue-table";
import {
  FlexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from "@tanstack/vue-table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { valueUpdater } from "@/components/ui/table/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export interface Payment {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
}

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

// This component is defined here for demo purposes, but in a real app it would likely be defined in its own file.
const ActionMenuComponent = defineComponent({
  name: "ActionMenuComponent",

  props: {
    payment: {
      type: Object as () => { id: string },
      required: true,
    },
  },

  emits: ["expand"],

  setup(props, { emit }) {
    function copy(id: string) {
      navigator.clipboard.writeText(id);
    }

    return () =>
      h(
        DropdownMenu,
        {},
        {
          default: () => [
            h(
              DropdownMenuTrigger,
              { asChild: true },
              {
                default: () =>
                  h(
                    Button,
                    {
                      "variant": "ghost",
                      "class": "h-8 w-8 p-0",
                      "aria-label": "Open menu",
                      "data-component-x-ray-trigger": "Button",
                    },
                    {
                      default: () => h(MoreHorizontal, { class: "h-4 w-4" }),
                    },
                  ),
              },
            ),

            h(
              DropdownMenuContent,
              {
                "align": "end",
                "data-component-x-ray": "DropdownMenuContent",
              },
              {
                default: () => [
                  h(
                    DropdownMenuLabel,
                    {
                      "data-component-x-ray": "DropdownMenuLabel",
                      "class": "text-xs text-muted-foreground",
                    },
                    () => "Actions",
                  ),

                  h(
                    DropdownMenuItem,
                    {
                      "onClick": () => copy(props.payment.id),
                      "data-component-x-ray-trigger": "DropdownMenuItem",
                    },
                    () => "Copy payment ID",
                  ),

                  h(
                    DropdownMenuItem,
                    {
                      "onClick": () => emit("expand"),
                      "data-component-x-ray-trigger": "DropdownMenuItem",
                    },
                    () => "Expand",
                  ),

                  h(DropdownMenuSeparator, {
                    "data-component-x-ray": "DropdownMenuSeparator",
                  }),

                  h(
                    DropdownMenuItem,
                    {
                      "data-component-x-ray-trigger": "DropdownMenuItem",
                    },
                    () => "View customer",
                  ),
                  h(
                    DropdownMenuItem,
                    {
                      "data-component-x-ray-trigger": "DropdownMenuItem",
                    },
                    () => "View payment details",
                  ),
                ],
              },
            ),
          ],
        },
      );
  },
});

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
        "data-component-x-ray-trigger": "Checkbox",
      }),
    cell: ({ row }) =>
      h(Checkbox, {
        "modelValue": row.getIsSelected(),
        "onUpdate:modelValue": (value) => row.toggleSelected(!!value),
        "ariaLabel": "Select row",
        "data-component-x-ray-trigger": "Checkbox",
      }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => h("div", { class: "capitalize" }, row.getValue("status")),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return h(
        Button,
        {
          "variant": "ghost",
          "onClick": () => column.toggleSorting(column.getIsSorted() === "asc"),
          "data-component-x-ray-trigger": "Button",
        },
        () => ["Email", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })],
      );
    },
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
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return h(ActionMenuComponent, {
        payment,
      });
    },
  },
];

const sorting = ref<SortingState>([]);
const columnFilters = ref<ColumnFiltersState>([]);
const columnVisibility = ref<VisibilityState>({});
const rowSelection = ref({});

const table = useVueTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
  onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFilters),
  onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibility),
  onRowSelectionChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowSelection),
  state: {
    get sorting() {
      return sorting.value;
    },
    get columnFilters() {
      return columnFilters.value;
    },
    get columnVisibility() {
      return columnVisibility.value;
    },
    get rowSelection() {
      return rowSelection.value;
    },
  },
});
</script>

<template>
  <Card data-component-x-ray="Card">
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle">Payments</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">
        Manage your payments.
      </CardDescription>
    </CardHeader>
    <CardContent data-component-x-ray="CardContent">
      <div class="w-full">
        <div class="mb-4 flex items-center gap-4">
          <Input
            class="max-w-sm"
            placeholder="Filter emails..."
            :model-value="table.getColumn('email')?.getFilterValue() as string"
            @update:model-value="table.getColumn('email')?.setFilterValue($event)"
            data-component-x-ray-trigger="Input"
          />
          <DropdownMenu data-component-x-ray="DropdownMenu">
            <DropdownMenuTrigger as-child>
              <Button variant="outline" class="ml-auto" data-component-x-ray-trigger="Button">
                Columns <ChevronDown class="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" data-component-x-ray="DropdownMenuContent">
              <DropdownMenuCheckboxItem
                v-for="column in table.getAllColumns().filter((column) => column.getCanHide())"
                :key="column.id"
                class="capitalize"
                :model-value="column.getIsVisible()"
                @update:model-value="
                  (value) => {
                    column.toggleVisibility(!!value);
                  }
                "
                data-component-x-ray-trigger="DropdownMenuCheckboxItem"
              >
                {{ column.id }}
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div class="rounded-md border">
          <Table data-component-x-ray="Table">
            <TableHeader data-component-x-ray="TableHeader">
              <TableRow
                v-for="headerGroup in table.getHeaderGroups()"
                :key="headerGroup.id"
                data-component-x-ray="TableRow"
              >
                <TableHead
                  v-for="header in headerGroup.headers"
                  :key="header.id"
                  class="[&:has([role=checkbox])]:pl-3"
                  data-component-x-ray="TableHead"
                >
                  <FlexRender
                    v-if="!header.isPlaceholder"
                    :render="header.column.columnDef.header"
                    :props="header.getContext()"
                  />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody data-component-x-ray="TableBody">
              <template v-if="table.getRowModel().rows?.length">
                <TableRow
                  v-for="row in table.getRowModel().rows"
                  :key="row.id"
                  :data-state="row.getIsSelected() && 'selected'"
                  data-component-x-ray="TableRow"
                >
                  <TableCell
                    v-for="cell in row.getVisibleCells()"
                    :key="cell.id"
                    class="[&:has([role=checkbox])]:pl-3"
                    data-component-x-ray="TableCell"
                  >
                    <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                  </TableCell>
                </TableRow>
              </template>

              <TableRow v-else data-component-x-ray="TableRow">
                <TableCell
                  :colspan="columns.length"
                  class="h-24 text-center"
                  data-component-x-ray="TableCell"
                >
                  No results.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div class="flex items-center justify-end space-x-2 py-4">
          <div class="flex-1 text-sm text-muted-foreground">
            {{ table.getFilteredSelectedRowModel().rows.length }} of
            {{ table.getFilteredRowModel().rows.length }} row(s) selected.
          </div>
          <div class="space-x-2">
            <Button
              variant="outline"
              size="sm"
              :disabled="!table.getCanPreviousPage()"
              @click="table.previousPage()"
              data-component-x-ray-trigger="Button"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              :disabled="!table.getCanNextPage()"
              @click="table.nextPage()"
              data-component-x-ray-trigger="Button"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
