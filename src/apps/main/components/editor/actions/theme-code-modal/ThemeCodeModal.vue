<script setup lang="ts">
import { Code2Icon } from "lucide-vue-next";
import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";
import { Badge } from "@/shared/components/ui/badge";
import ThemeCodeModalCode from "./ThemeCodeModalCode.vue";
</script>

<template>
  <div class="flex justify-center">
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <DialogTrigger as-child>
              <Button variant="ghost" class="ml-2"> <Code2Icon class="w-4 h-4" /> Code </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>View the code for this theme</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent class="sm:max-w-200">
        <DialogHeader>
          <DialogTitle>Theme Code</DialogTitle>
          <DialogDescription> Below is the generated CSS code for your theme. </DialogDescription>
        </DialogHeader>
        <Badge variant="outline"> Tailwind 4</Badge>
        <ThemeCodeModalCode />
      </DialogContent>
    </Dialog>
  </div>
</template>
