<script lang="ts" setup>
import ExerciseMinutes from "./components/ExerciseMinutes.vue";
import Calendar from "./components/Calendar.vue";
import Stats from "./components/Stats.vue";
import ActivityGoal from "./components/ActivityGoal.vue";
import Forms from "./components/Forms.vue";
import TeamMembers from "./components/TeamMembers.vue";
import CookieSettings from "./components/CookieSettings.vue";
import CreateAccount from "./components/CreateAccount.vue";
import Chat from "./components/Chat.vue";
import ReportIssue from "./components/ReportIssue.vue";
import Share from "./components/Share.vue";
import Payments from "./components/Payments.vue";
</script>

<template>
  <div class="@container/examples w-full h-full">
    <div class="grid grid-cols-1 @5xl:grid-cols-5 gap-4 items-start">
      <!--COLUMN 1-->
      <div class="grid col-span-3 gap-4 min-w-0">
        <div class="min-w-0">
          <Stats />
        </div>

        <div class="grid grid-cols-1 @4xl:grid-cols-2 gap-4 items-start">
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
