<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-vue-next";
</script>

<template>
  <div class="space-y-6 w-full">
    <section>
      <div class="flex flex-wrap gap-2">
        <Button size="sm" variant="default">Default <ArrowRightIcon /></Button>
        <Button size="sm" variant="secondary">Secondary <ArrowRightIcon /></Button>
        <Button size="sm" variant="destructive">Destructive <ArrowRightIcon /></Button>
        <Button size="sm" variant="outline">Outline <ArrowRightIcon /></Button>
        <Button size="sm" variant="ghost">Ghost <ArrowRightIcon /></Button>
        <Button size="sm" variant="link">Link <ArrowRightIcon /></Button>
      </div>
    </section>

    <div class="flex flex-wrap gap-2">
      <Button size="default" variant="default">Default <ArrowRightIcon /></Button>
      <Button size="default" variant="secondary">Secondary <ArrowRightIcon /></Button>
      <Button size="default" variant="destructive">Destructive <ArrowRightIcon /></Button>
      <Button size="default" variant="outline">Outline <ArrowRightIcon /></Button>
      <Button size="default" variant="ghost">Ghost <ArrowRightIcon /></Button>
      <Button size="default" variant="link">Link <ArrowRightIcon /></Button>
    </div>

    <div class="flex flex-wrap gap-2">
      <Button size="lg" variant="default">Default <ArrowRightIcon /></Button>
      <Button size="lg" variant="secondary">Secondary <ArrowRightIcon /></Button>
      <Button size="lg" variant="destructive">Destructive <ArrowRightIcon /></Button>
      <Button size="lg" variant="outline">Outline <ArrowRightIcon /></Button>
      <Button size="lg" variant="ghost">Ghost <ArrowRightIcon /></Button>
      <Button size="lg" variant="link">Link <ArrowRightIcon /></Button>
    </div>
  </div>
</template>
