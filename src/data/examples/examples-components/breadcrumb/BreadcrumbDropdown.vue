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
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
        <BreadcrumbSeparator />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <DropdownMenu>
          <DropdownMenuTrigger class="flex items-center gap-1 cursor-pointer hover:text-foreground">
            Components
            <ChevronDown class="size-3" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem as-child>
              <a href="#">Documentation</a>
            </DropdownMenuItem>
            <DropdownMenuItem as-child>
              <a href="#">Themes</a>
            </DropdownMenuItem>
            <DropdownMenuItem as-child>
              <a href="#">GitHub</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <BreadcrumbSeparator />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
