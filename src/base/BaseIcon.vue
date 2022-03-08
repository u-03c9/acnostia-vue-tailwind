<script setup lang="ts">
import { computed } from "vue";

const props = defineProps([
  "href",
  "iconUrl",
  "color",
  "hoverColor",
  "size",
  "alt",
]);

const style = computed(() => {
  return {
    width: props.size,
    height: props.size,
    "--background-color": props.color,
    "--background-hover": props.hoverColor,
  };
});
</script>

<template>
  <div class="icon rounded-full" :style="style">
    <a class="w-full h-full flex cursor-pointer" :href="href" target="_blank">
      <img :src="iconUrl" :alt="alt" class="place-self-center mx-auto" />
    </a>
  </div>
</template>

<style scoped>
.icon {
  background-color: var(--background-color);
}

.icon:hover {
  background-color: var(--background-hover);
}
</style>
