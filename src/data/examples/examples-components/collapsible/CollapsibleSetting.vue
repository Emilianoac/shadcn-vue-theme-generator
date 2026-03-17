<script setup lang="ts">
import { ref } from "vue";
import { MaximizeIcon, MinimizeIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const isOpen = ref(false);
</script>

<template>
  <Card class="mx-auto w-full max-w-xs" data-component-x-ray="Card">
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTittle">Radius</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">
        Set the corner radius of the element.
      </CardDescription>
    </CardHeader>

    <CardContent data-component-x-ray="CardContent">
      <Collapsible
        v-model:open="isOpen"
        class="flex items-start gap-2"
        data-component-x-ray="Collapsible"
      >
        <FieldGroup class="grid w-full grid-cols-2 gap-2" data-component-x-ray="FieldGroup">
          <Field data-component-x-ray="Field">
            <FieldLabel for="radius-x" class="sr-only" data-component-x-ray="FieldLabel">
              Radius X
            </FieldLabel>
            <Input id="radius-x" placeholder="0" :default-value="0" data-component-x-ray="Input" />
          </Field>

          <Field data-component-x-ray="Field">
            <FieldLabel for="radius-y" class="sr-only" data-component-x-ray="FieldLabel">
              Radius Y
            </FieldLabel>
            <Input id="radius-y" placeholder="0" :default-value="0" data-component-x-ray="Input" />
          </Field>

          <CollapsibleContent
            class="col-span-full grid grid-cols-subgrid gap-2"
            data-component-x-ray="CollapsibleContent"
          >
            <Field data-component-x-ray="Field">
              <FieldLabel for="radius-x2" class="sr-only" data-component-x-ray="FieldLabel">
                Radius X
              </FieldLabel>
              <Input
                id="radius-x2"
                placeholder="0"
                :default-value="0"
                data-component-x-ray="Input"
              />
            </Field>

            <Field data-component-x-ray="Field">
              <FieldLabel for="radius-y2" class="sr-only" data-component-x-ray="FieldLabel">
                Radius Y
              </FieldLabel>
              <Input
                id="radius-y2"
                placeholder="0"
                :default-value="0"
                data-component-x-ray="Input"
              />
            </Field>
          </CollapsibleContent>
        </FieldGroup>

        <CollapsibleTrigger as-child>
          <Button variant="outline" size="icon" data-component-x-ray-trigger="Button">
            <MinimizeIcon v-if="isOpen" />
            <MaximizeIcon v-else />
          </Button>
        </CollapsibleTrigger>
      </Collapsible>
    </CardContent>
  </Card>
</template>
```
