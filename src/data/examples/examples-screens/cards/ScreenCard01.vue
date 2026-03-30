<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import ExerciseMinutes from "./components/ExerciseMinutes.vue";
import ExerciseMinutesRaw from "./components/ExerciseMinutes.vue?raw";
import Calendar from "./components/Calendar.vue";
import CalendarRaw from "./components/Calendar.vue?raw";
import StatsCharts from "./components/StatsCharts.vue";
import StatsChartsRaw from "./components/StatsCharts.vue?raw";
import ActivityGoal from "./components/ActivityGoal.vue";
import ActivityGoalRaw from "./components/ActivityGoal.vue?raw";
import UpgradeSubscriptionForm from "./components/UpgradeSubscriptionForm.vue";
import UpgradeSubscriptionFormRaw from "./components/UpgradeSubscriptionForm.vue?raw";
import TeamMembers from "./components/TeamMembers.vue";
import TeamMembersRaw from "./components/TeamMembers.vue?raw";
import CookieSettings from "./components/CookieSettings.vue";
import CookieSettingsRaw from "./components/CookieSettings.vue?raw";
import CreateAccount from "./components/CreateAccount.vue";
import CreateAccountRaw from "./components/CreateAccount.vue?raw";
import ChatWindow from "./components/ChatWindow.vue";
import ChatWindowRaw from "./components/ChatWindow.vue?raw";
import ReportIssue from "./components/ReportIssue.vue";
import ReportIssueRaw from "./components/ReportIssue.vue?raw";
import ShareForm from "./components/ShareForm.vue";
import ShareFormRaw from "./components/ShareForm.vue?raw";
import PaymentsTable from "./components/PaymentsTable.vue";
import PaymentsTableRaw from "./components/PaymentsTable.vue?raw";
</script>

<template>
  <div class="@container">
    <div class="grid grid-cols-1 @[970px]:grid-cols-[1fr_auto] gap-4 mx-auto">
      <!-- Exercise Minutes -->
      <div class="min-w-0">
        <ExampleCard :raw-component="ExerciseMinutesRaw">
          <template #title>Exercise Minutes Chart</template>
          <template #example>
            <ExerciseMinutes />
          </template>
        </ExampleCard>
      </div>
      <!-- Range Calendar -->
      <ExampleCard :raw-component="CalendarRaw">
        <template #title>Range Calendar</template>
        <template #example>
          <Calendar class="mx-auto" />
        </template>
      </ExampleCard>
      <!-- Stats Charts -->
      <ExampleCard :raw-component="StatsChartsRaw" class="@container/stats">
        <template #title>Stats Charts</template>
        <template #example>
          <StatsCharts />
        </template>
      </ExampleCard>
      <!-- Activity Goal -->
      <div class="min-w-0">
        <ExampleCard :raw-component="ActivityGoalRaw">
          <template #title>Activity Goal</template>
          <template #example>
            <ActivityGoal />
          </template>
        </ExampleCard>
      </div>
      <!-- Create Account -->
      <ExampleCard :raw-component="CreateAccountRaw">
        <template #title>Create Account</template>
        <template #example>
          <CreateAccount />
        </template>
      </ExampleCard>
      <!-- Chat -->
      <ExampleCard :raw-component="ChatWindowRaw">
        <template #title>Chat</template>
        <template #example>
          <ChatWindow />
        </template>
      </ExampleCard>
      <!-- Upgrade Subscription Form -->
      <ExampleCard :raw-component="UpgradeSubscriptionFormRaw">
        <template #title>Upgrade Subscription Form</template>
        <template #example>
          <UpgradeSubscriptionForm />
        </template>
      </ExampleCard>
      <!-- Report Issue -->
      <ExampleCard :raw-component="ReportIssueRaw">
        <template #title>Report Issue</template>
        <template #example>
          <ReportIssue />
        </template>
      </ExampleCard>
      <!-- Cookie Settings -->
      <ExampleCard :raw-component="CookieSettingsRaw">
        <template #title>Cookie Settings</template>
        <template #example>
          <CookieSettings />
        </template>
      </ExampleCard>
      <!-- Team Members -->
      <ExampleCard :raw-component="TeamMembersRaw">
        <template #title>Team Members</template>
        <template #example>
          <TeamMembers />
        </template>
      </ExampleCard>
      <!-- Payments Table -->
      <ExampleCard :raw-component="PaymentsTableRaw">
        <template #title>Payments Table</template>
        <template #example>
          <PaymentsTable />
        </template>
      </ExampleCard>
      <!-- Share -->
      <ExampleCard :raw-component="ShareFormRaw">
        <template #title>Share Form</template>
        <template #example>
          <ShareForm />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
