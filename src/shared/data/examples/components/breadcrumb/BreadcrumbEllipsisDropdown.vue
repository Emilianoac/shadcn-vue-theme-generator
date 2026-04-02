<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbEllipsis,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
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
          <DropdownMenuTrigger aria-label="Toggle menu" as-child>
            <BreadcrumbEllipsis
              class="size-4 cursor-pointer hover:text-foreground"
              data-component-x-ray-trigger="BreadcrumbEllipsis"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" data-component-x-ray="DropdownMenuContent">
            <DropdownMenuItem as-child data-component-x-ray="DropdownMenuItem">
              <a href="#">Documentation</a>
            </DropdownMenuItem>
            <DropdownMenuItem as-child data-component-x-ray="DropdownMenuItem">
              <a href="#">Themes</a>
            </DropdownMenuItem>
            <DropdownMenuItem as-child data-component-x-ray="DropdownMenuItem">
              <a href="#">Built by</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <BreadcrumbSeparator data-component-x-ray="BreadcrumbSeparator" />
      </BreadcrumbItem>
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbLink href="#" data-component-x-ray="BreadcrumbLink">Components</BreadcrumbLink>
        <BreadcrumbSeparator />
      </BreadcrumbItem>
      <BreadcrumbItem data-component-x-ray="BreadcrumbItem">
        <BreadcrumbPage data-component-x-ray="BreadcrumbPage">Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
