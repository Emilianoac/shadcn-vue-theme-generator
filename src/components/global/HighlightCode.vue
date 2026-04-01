<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import hljs from "highlight.js/lib/common";

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
});
const codeBlock = ref(null);

const highlight = () => {
  if (codeBlock.value) {
    hljs.highlightElement(codeBlock.value);
  }
};

watch(
  () => props.code,
  () => {
    setTimeout(highlight, 0);
  },
);

onMounted(highlight);
</script>

<template>
  <pre><code ref="codeBlock" :class="`language-${lang}`">{{ code }}</code></pre>
</template>
