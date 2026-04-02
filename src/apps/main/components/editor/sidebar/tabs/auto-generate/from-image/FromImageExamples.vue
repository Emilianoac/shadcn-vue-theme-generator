<script lang="ts" setup>
import exampleImage01 from "@/apps/main/assets/images/auto-generate-examples/01.webp";
import exampleImage02 from "@/apps/main/assets/images/auto-generate-examples/02.webp";
import exampleImage03 from "@/apps/main/assets/images/auto-generate-examples/03.webp";
import exampleImage04 from "@/apps/main/assets/images/auto-generate-examples/04.webp";
import exampleImage05 from "@/apps/main/assets/images/auto-generate-examples/05.webp";
import exampleImage06 from "@/apps/main/assets/images/auto-generate-examples/06.webp";
import { Label } from "@/shared/components/ui/label";
import { AspectRatio } from "@/shared/components/ui/aspect-ratio";
const examples = [
  {
    src: exampleImage01,
    title: "Example Image 1",
  },
  {
    src: exampleImage02,
    title: "Example Image 2",
  },
  {
    src: exampleImage03,
    title: "Example Image 3",
  },
  {
    src: exampleImage04,
    title: "Example Image 4",
  },
  {
    src: exampleImage05,
    title: "Example Image 5",
  },
  {
    src: exampleImage06,
    title: "Example Image 6",
  },
];

const emit = defineEmits<{
  imageSelected: [source: Event];
}>();

async function handleExampleClick(example: { src: string; title: string }) {
  try {
    const response = await fetch(example.src);
    const blob = await response.blob();
    const file = new File([blob], example.title, { type: blob.type });
    const event = new Event("change", { bubbles: true });
    Object.defineProperty(event, "target", { value: { files: [file] } });
    emit("imageSelected", event);
  } catch (error) {
    console.error("Error fetching example image:", error);
  }
}
</script>

<template>
  <div class="space-y-4">
    <Label class="text-sm font-semibold">Examples</Label>
    <div class="grid grid-cols-5 gap-1">
      <AspectRatio
        :ratio="1 / 1"
        v-for="example in examples"
        :key="example.title"
        class="cursor-pointer rounded-sm overflow-hidden border hover:ring-2 hover:ring-primary/50"
        @click="handleExampleClick(example)"
      >
        <img :src="example.src" :alt="example.title" class="h-full w-full object-cover" fill />
      </AspectRatio>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
