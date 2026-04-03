<script setup lang="ts">
import { ref } from "vue";
import { useStorage } from "@vueuse/core";
import { RotateCcw } from "lucide-vue-next";
import { Button } from "@/shared/components/ui/button";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/shared/components/ui/field";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/shared/components/ui/tooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/shared/components/ui/alert-dialog";
import { useTheme } from "@/shared/composables/useTheme";

const { isCustomTheme, resetTheme } = useTheme();
const showAlert = useStorage("reset-theme-alert", true);
const dontShowAgain = ref(false);

function handleSubmit() {
  if (dontShowAgain.value) {
    showAlert.value = false;
  }
  resetTheme();
}
</script>

<template>
  <TooltipProvider :disabled="!isCustomTheme">
    <Tooltip>
      <TooltipTrigger class="w-full">
        <Button v-if="!showAlert" :disabled="!isCustomTheme" variant="ghost" @click="resetTheme">
          <RotateCcw class="w-4 h-4" />
          Reset
        </Button>

        <AlertDialog v-else>
          <AlertDialogTrigger as-child>
            <Button :disabled="!isCustomTheme" variant="ghost">
              <RotateCcw class="w-4 h-4" />
              Reset
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent class="max-w-xs sm:max-w-xs">
            <AlertDialogHeader>
              <AlertDialogTitle class="text-center"> Reset theme </AlertDialogTitle>
              <AlertDialogDescription class="text-center">
                Are you sure you want to reset your theme? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <FieldGroup>
              <Field orientation="horizontal">
                <Checkbox id="dont-show-again" v-model="dontShowAgain" />
                <FieldLabel for="dont-show-again" class="font-normal">
                  Don't show this again
                </FieldLabel>
              </Field>
            </FieldGroup>
            <AlertDialogFooter class="sm:grid grid-cols-2">
              <AlertDialogCancel> Cancel </AlertDialogCancel>
              <AlertDialogAction @click.prevent="handleSubmit"> Continue </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </TooltipTrigger>
      <TooltipContent>Reset theme to default</TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
