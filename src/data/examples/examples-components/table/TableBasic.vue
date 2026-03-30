<script setup lang="ts">
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
</script>

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
