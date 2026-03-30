<script setup lang="ts">
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
</script>

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
