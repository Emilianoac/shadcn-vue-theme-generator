<script setup lang="ts">
import { ref } from "vue";
import { ImageIcon, UploadIcon, XIcon } from "lucide-vue-next";

const props = defineProps<{
  previewUrl: string;
  imageName: string;
}>();

const emit = defineEmits<{
  imageSelected: [event: Event];
  clear: [];
}>();

const fileInput = ref<HTMLInputElement | null>(null);

function openFilePicker() {
  fileInput.value?.click();
}

function handleClear() {
  if (fileInput.value) {
    fileInput.value.value = "";
  }
  emit("clear");
}
</script>

<template>
  <div>
    <input
      ref="fileInput"
      type="file"
      accept="image/*"
      class="sr-only"
      @change="emit('imageSelected', $event)"
    />
    <div
      class="relative overflow-hidden rounded-lg border border-dashed border-border bg-muted/20 transition-colors hover:bg-accent/20"
      role="button"
      aria-label="Choose an image"
      @click="openFilePicker"
    >
      <button
        v-if="props.previewUrl"
        type="button"
        class="absolute right-2 top-2 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/90 text-muted-foreground shadow-sm transition hover:text-foreground"
        @click.stop="handleClear"
      >
        <XIcon class="h-4 w-4" />
      </button>

      <div v-if="props.previewUrl" class="relative h-50 w-full">
        <img
          :src="props.previewUrl"
          :alt="props.imageName || 'Selected image preview'"
          class="h-full w-full object-cover absolute z-0 blur"
        />
        <img
          :src="props.previewUrl"
          :alt="props.imageName || 'Selected image preview'"
          class="h-auto w-auto object-contain absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[90%] max-h-[90%] rounded-md"
        />
        <div
          class="absolute inset-x-0 bottom-0 min-w-0 bg-linear-to-t from-background/90 to-transparent px-3 pb-3 pt-8"
        ></div>
      </div>

      <div v-else class="flex flex-col items-center gap-2 p-4 text-center cursor-pointer">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background"
        >
          <ImageIcon class="h-5 w-5 text-muted-foreground" />
        </div>
        <div class="space-y-1">
          <p class="text-sm font-medium">Click to choose an image</p>
          <p class="text-xs text-muted-foreground">Upload a local image file</p>
        </div>
        <span class="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
          <UploadIcon class="h-3.5 w-3.5" />
          File
        </span>
      </div>
    </div>
  </div>
</template>
