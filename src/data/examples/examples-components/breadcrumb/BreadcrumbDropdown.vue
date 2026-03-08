<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-vue-next";
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList data-component-x-ray="BreadcrumbList">
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbLink href="#" data-component-x-ray="BreadcrumbLink">Home</BreadcrumbLink>
        <BreadcrumbSeparator />
      </BreadcrumbItem>
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <DropdownMenu>
          <DropdownMenuTrigger
            class="flex items-center gap-1 cursor-pointer hover:text-foreground"
            data-component-x-ray-trigger="DropdownMenuTrigger"
          >
            Components
            <ChevronDown class="size-3" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" data-component-x-ray="DropdownMenuContent">
            <DropdownMenuItem as-child data-component-x-ray="DropdownMenuItem">
              <a href="#">Documentation</a>
            </DropdownMenuItem>
            <DropdownMenuItem as-child data-component-x-ray="DropdownMenuItem">
              <a href="#">Themes</a>
            </DropdownMenuItem>
            <DropdownMenuItem as-child data-component-x-ray="DropdownMenuItem">
              <a href="#">GitHub</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <BreadcrumbSeparator data-component-x-ray="BreadcrumbSeparator" />
      </BreadcrumbItem>
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbPage data-component-x-ray="BreadcrumbPage">Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
