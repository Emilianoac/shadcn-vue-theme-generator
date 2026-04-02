<script setup lang="ts">
import { Button } from "@/shared/components/ui/button";
import { ArrowRightIcon } from "lucide-vue-next";
</script>

<template>
  <div class="space-y-6 w-full">
    <section>
      <div class="flex flex-wrap gap-2">
        <Button size="sm" variant="default" data-component-x-ray="Button">
          Default
          <ArrowRightIcon />
        </Button>
        <Button size="sm" variant="secondary" data-component-x-ray="Button">
          Secondary <ArrowRightIcon />
        </Button>
        <Button size="sm" variant="destructive" data-component-x-ray="Button">
          Destructive <ArrowRightIcon />
        </Button>
        <Button size="sm" variant="outline" data-component-x-ray="Button">
          Outline <ArrowRightIcon />
        </Button>
        <Button size="sm" variant="ghost" data-component-x-ray="Button">
          Ghost <ArrowRightIcon />
        </Button>
        <Button size="sm" variant="link" data-component-x-ray="Button">
          Link <ArrowRightIcon />
        </Button>
      </div>
    </section>

    <div class="flex flex-wrap gap-2">
      <Button size="default" variant="default" data-component-x-ray="Button">
        Default <ArrowRightIcon />
      </Button>
      <Button size="default" variant="secondary" data-component-x-ray="Button">
        Secondary <ArrowRightIcon />
      </Button>
      <Button size="default" variant="destructive" data-component-x-ray="Button">
        Destructive <ArrowRightIcon />
      </Button>
      <Button size="default" variant="outline" data-component-x-ray="Button">
        Outline <ArrowRightIcon />
      </Button>
      <Button size="default" variant="ghost" data-component-x-ray="Button">
        Ghost <ArrowRightIcon />
      </Button>
      <Button size="default" variant="link" data-component-x-ray="Button">
        Link <ArrowRightIcon />
      </Button>
    </div>

    <div class="flex flex-wrap gap-2">
      <Button size="lg" variant="default" data-component-x-ray="Button">
        Default <ArrowRightIcon />
      </Button>
      <Button size="lg" variant="secondary" data-component-x-ray="Button">
        Secondary <ArrowRightIcon />
      </Button>
      <Button size="lg" variant="destructive" data-component-x-ray="Button">
        Destructive <ArrowRightIcon />
      </Button>
      <Button size="lg" variant="outline" data-component-x-ray="Button">
        Outline <ArrowRightIcon />
      </Button>
      <Button size="lg" variant="ghost" data-component-x-ray="Button">
        Ghost <ArrowRightIcon />
      </Button>
      <Button size="lg" variant="link" data-component-x-ray="Button">
        Link <ArrowRightIcon />
      </Button>
    </div>
  </div>
</template>
