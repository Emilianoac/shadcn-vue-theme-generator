<script setup lang="ts">
import { Badge } from "@/shared/components/ui/badge";
import { Loader2 } from "lucide-vue-next";
</script>

<template>
  <div class="flex w-full flex-wrap gap-2">
    <Badge variant="default" data-component-x-ray="Badge">
      Default <Loader2 class="animate-spin" />
    </Badge>
    <Badge variant="secondary" data-component-x-ray="Badge">
      Secondary <Loader2 class="animate-spin" />
    </Badge>
    <Badge variant="destructive" data-component-x-ray="Badge">
      Destructive <Loader2 class="animate-spin" />
    </Badge>
    <Badge variant="outline" data-component-x-ray="Badge">
      Outline <Loader2 class="animate-spin" />
    </Badge>
  </div>
</template>
