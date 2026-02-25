<script lang="ts" setup>
import ExerciseMinutes from "@/components/editor/examples/cards/ExerciseMinutes.vue";
import Calendar from "@/components/editor/examples/cards/Calendar.vue";
import Stats from "@/components/editor/examples/cards/Stats.vue";
import ActivityGoal from "@/components/editor/examples/cards/ActivityGoal.vue";
import Forms from "@/components/editor/examples/cards/Forms.vue";
import TeamMembers from "@/components/editor/examples/cards/TeamMembers.vue";
import CookieSettings from "@/components/editor/examples/cards/CookieSettings.vue";
import CreateAccount from "@/components/editor/examples/cards/CreateAccount.vue";
import Chat from "@/components/editor/examples/cards/Chat.vue";
import ReportIssue from "@/components/editor/examples/cards/ReportIssue.vue";
import Share from "@/components/editor/examples/cards/Share.vue";
import Payments from "@/components/editor/examples/cards/Payments.vue";
</script>

<template>
  <div class="@container/examples p-0 md:p-8 md:border overflow-y-auto h-full">
    <div class="grid grid-cols-1 @5xl:grid-cols-4 gap-4 items-start">
      <!--COLUMN 1-->
      <div class="grid col-span-2 gap-4 min-w-0">
        <div class="min-w-0">
          <Stats />
        </div>

        <div class="grid grid-cols-1 @7xl:grid-cols-2 gap-4 items-start">
          <div class="grid gap-4">
            <div class="min-w-0 space-y-4">
              <Forms />
              <TeamMembers />
              <CookieSettings />
            </div>
          </div>
          <div class="grid gap-4">
            <div class="min-w-0 space-y-4">
              <CreateAccount />
              <Chat />
              <ReportIssue />
            </div>
          </div>
        </div>
      </div>

      <!--COLUMN 2-->
      <div class="grid col-span-2 gap-4 min-w-0 grid-cols-1 @lg:grid-cols-[auto_1fr]">
        <Calendar class="hidden @lg:flex" />

        <div class="min-w-0">
          <ActivityGoal />
        </div>

        <div class="grid gap-4 col-span-full">
          <div class="min-w-0">
            <ExerciseMinutes />
          </div>

          <div class="min-w-0">
            <Payments />
          </div>

          <div class="min-w-0">
            <Share />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
