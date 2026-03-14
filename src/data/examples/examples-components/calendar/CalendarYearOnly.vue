<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { DateValue } from "@internationalized/date";
import { CalendarDate, fromDate, getLocalTimeZone } from "@internationalized/date";
import { Calendar } from "@/components/ui/calendar";

const date = ref(fromDate(new Date(), getLocalTimeZone())) as Ref<DateValue>;
</script>

<template>
  <div class="flex justify-center">
    <Calendar
      v-model="date"
      class="mx-auto"
      layout="year-only"
      :min-value="new CalendarDate(1925, 1, 1)"
      :max-value="new CalendarDate(2035, 1, 1)"
    />
  </div>
</template>
