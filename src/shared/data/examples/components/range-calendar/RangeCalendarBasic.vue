<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { DateRange } from "reka-ui";
import { getLocalTimeZone, today } from "@internationalized/date";
import { RangeCalendar } from "@/shared/components/ui/range-calendar";

const start = today(getLocalTimeZone());
const end = start.add({ days: 7 });

const dateRange = ref({
  start,
  end,
}) as Ref<DateRange>;
</script>

<template>
  <RangeCalendar v-model="dateRange" class="w-max mx-auto" data-component-x-ray="RangeCalendar" />
</template>
