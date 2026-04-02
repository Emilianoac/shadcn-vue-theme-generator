<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { DateValue } from "@internationalized/date";
import { getLocalTimeZone, today } from "@internationalized/date";
import { Card, CardContent } from "@/shared/components/ui/card";
import { RangeCalendar } from "@/shared/components/ui/range-calendar";

defineOptions({
  name: "CardCalendar",
});

const start = today(getLocalTimeZone());
const end = start.add({ days: 12 });

const dateRange = ref({
  start,
  end,
}) as Ref<{ start: DateValue; end: DateValue }>;
</script>

<template>
  <Card class="p-0 w-fit" data-component-x-ray="Card">
    <CardContent class="p-0" data-component-x-ray="CardContent">
      <RangeCalendar
        v-model="dateRange"
        disable-days-outside-current-view
        data-component-x-ray="RangeCalendar"
      />
    </CardContent>
  </Card>
</template>
