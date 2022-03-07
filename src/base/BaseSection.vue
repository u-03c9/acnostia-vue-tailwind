<script setup lang="ts">
defineProps([
  "title",
  "description",
  "descriptionColor",
  "backgroundColor",
  "backgroundLayer",
]);
</script>

<template>
  <div
    class="w-full pt-48 pb-24 text-center text-white bg-cover bg-no-repeat"
    :style="{
      backgroundColor: backgroundColor,
      backgroundImage: `url(${backgroundLayer})`,
    }"
  >
    <div class="w-8/12 mx-auto">
      <h1 class="text-6xl font-light">{{ title }}</h1>
      <slot name="subtitle"></slot>
      <p class="mt-5 text-sm" :style="{ color: descriptionColor }">
        {{ description }}
      </p>
      <slot name="default"></slot>
    </div>
  </div>
</template>
