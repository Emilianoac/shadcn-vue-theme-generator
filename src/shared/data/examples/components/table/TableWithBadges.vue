<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
</script>

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
