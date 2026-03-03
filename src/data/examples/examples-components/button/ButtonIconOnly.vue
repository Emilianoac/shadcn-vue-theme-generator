<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-vue-next";
</script>

<template>
  <div class="space-y-6 w-full">
    <section>
      <div class="flex flex-wrap gap-2">
        <Button size="icon-sm" variant="default"><ArrowRightIcon /></Button>
        <Button size="icon-sm" variant="secondary"><ArrowRightIcon /></Button>
        <Button size="icon-sm" variant="destructive"><ArrowRightIcon /></Button>
        <Button size="icon-sm" variant="outline"><ArrowRightIcon /></Button>
        <Button size="icon-sm" variant="ghost"><ArrowRightIcon /></Button>
        <Button size="icon-sm" variant="link"><ArrowRightIcon /></Button>
      </div>
    </section>

    <div class="flex flex-wrap gap-2">
      <Button size="icon" variant="default"><ArrowRightIcon /></Button>
      <Button size="icon" variant="secondary"><ArrowRightIcon /></Button>
      <Button size="icon" variant="destructive"><ArrowRightIcon /></Button>
      <Button size="icon" variant="outline"><ArrowRightIcon /></Button>
      <Button size="icon" variant="ghost"><ArrowRightIcon /></Button>
      <Button size="icon" variant="link"><ArrowRightIcon /></Button>
    </div>

    <div class="flex flex-wrap gap-2">
      <Button size="icon-lg" variant="default"><ArrowRightIcon /></Button>
      <Button size="icon-lg" variant="secondary"><ArrowRightIcon /></Button>
      <Button size="icon-lg" variant="destructive"><ArrowRightIcon /></Button>
      <Button size="icon-lg" variant="outline"><ArrowRightIcon /></Button>
      <Button size="icon-lg" variant="ghost"><ArrowRightIcon /></Button>
      <Button size="icon-lg" variant="link"><ArrowRightIcon /></Button>
    </div>
  </div>
</template>
