<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { DateValue } from "@internationalized/date";
import { getLocalTimeZone, today } from "@internationalized/date";
import { Card, CardContent } from "@/components/ui/card";
import { RangeCalendar } from "@/components/ui/range-calendar";

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
  <Card class="hidden p-0">
    <CardContent class="p-0">
      <RangeCalendar v-model="dateRange" disable-days-outside-current-view />
    </CardContent>
  </Card>
</template>
