<script setup lang="ts">
import { ChevronDownIcon } from "lucide-vue-next";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/components/ui/collapsible";
</script>

<template>
  <Card class="mx-auto w-full max-w-sm" data-component-x-ray="Card">
    <CardContent data-component-x-ray="CardContent">
      <Collapsible class="rounded-md data-[state=open]:bg-muted" data-component-x-ray="Collapsible">
        <CollapsibleTrigger asChild>
          <Button variant="ghost" class="group w-full" data-component-x-ray-trigger="Button">
            Product details
            <ChevronDownIcon class="ml-auto group-data-[state=open]:rotate-180" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent
          class="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm"
          data-component-x-ray="CollapsibleContent"
        >
          <div>This panel can be expanded or collapsed to reveal additional content.</div>
          <Button size="sm">Learn More</Button>
        </CollapsibleContent>
      </Collapsible>
    </CardContent>
  </Card>
</template>
