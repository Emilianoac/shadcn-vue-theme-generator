<script lang="ts" setup>
import ExampleCard from "../../ExampleCard.vue";
import AvatarSizes from "./AvatarSizes.vue";
import AvatarSizesRaw from "./AvatarSizes.vue?raw";
import AvatarBadge from "./AvatarBadge.vue";
import AvatarBadgeRaw from "./AvatarBadge.vue?raw";
import AvatarBadgeIcon from "./AvatarBadgeIcon.vue";
import AvatarBadgeIconRaw from "./AvatarBadgeIcon.vue?raw";
import AvatarGroup from "./AvatarGroup.vue";
import AvatarGroupRaw from "./AvatarGroup.vue?raw";
import AvatarGroupCount from "./AvatarGroupCount.vue";
import AvatarGroupCountRaw from "./AvatarGroupCount.vue?raw";
import AvatarGroupIcon from "./AvatarGroupIcon.vue";
import AvatarGroupIconRaw from "./AvatarGroupIcon.vue?raw";
import AvatarGroupEmpty from "./AvatarGroupEmpty.vue";
import AvatarGroupEmptyRaw from "./AvatarGroupEmpty.vue?raw";
</script>

<template>
  <div class="@container max-w-200 mx-auto">
    <div class="grid grid-cols-1 @xl:grid-cols-2 gap-8 mx-auto">
      <ExampleCard :raw-component="AvatarSizesRaw">
        <template #title>Sizes</template>
        <template #example>
          <AvatarSizes />
        </template>
      </ExampleCard>

      <ExampleCard :raw-component="AvatarBadgeRaw">
        <template #title>Badge</template>
        <template #example>
          <AvatarBadge />
        </template>
      </ExampleCard>

      <ExampleCard :raw-component="AvatarBadgeIconRaw">
        <template #title>Badge with Icon</template>
        <template #example>
          <AvatarBadgeIcon />
        </template>
      </ExampleCard>

      <ExampleCard :raw-component="AvatarGroupRaw">
        <template #title>Group</template>
        <template #example>
          <AvatarGroup />
        </template>
      </ExampleCard>

      <ExampleCard :raw-component="AvatarGroupCountRaw">
        <template #title>Group with Count</template>
        <template #example>
          <AvatarGroupCount />
        </template>
      </ExampleCard>

      <ExampleCard :raw-component="AvatarGroupIconRaw">
        <template #title>Group with Icon</template>
        <template #example>
          <AvatarGroupIcon />
        </template>
      </ExampleCard>

      <ExampleCard :raw-component="AvatarGroupEmptyRaw">
        <template #title>In Empty</template>
        <template #example>
          <AvatarGroupEmpty />
        </template>
      </ExampleCard>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
