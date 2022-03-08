<script setup lang="ts">
import BaseIcon from "../base/BaseIcon.vue";
</script>

<template>
  <div class="w-full bg-[#68a097] py-10">
    <div class="w-fit flex flex-row mx-auto justify-between gap-10">
      <BaseIcon
        color="#82c7bc"
        hoverColor="#4f689e"
        href="https://facebook.com"
        iconUrl="/footer/facebook.webp"
        size="4rem"
      />
      <BaseIcon
        color="#82c7bc"
        hoverColor="#74c7d5"
        href="https://twitter.com"
        iconUrl="/footer/twitter.webp"
        size="4rem"
      />
      <BaseIcon
        color="#82c7bc"
        hoverColor="#df5c64"
        href="https://google.com"
        iconUrl="/footer/google.webp"
        size="4rem"
      />
      <BaseIcon
        color="#82c7bc"
        hoverColor="#3e61af"
        href="https://linkedin.com"
        iconUrl="/footer/linkedin.webp"
        size="4rem"
      />
    </div>
  </div>
</template>
