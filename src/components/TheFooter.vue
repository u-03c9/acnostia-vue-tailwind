<script setup lang="ts">
import FacebookIcon from "../assets/footer/facebook.webp";
import TwitterIcon from "../assets/footer/twitter.webp";
import GoogleIcon from "../assets/footer/google.webp";
import LinkedinIcon from "../assets/footer/linkedin.webp";
</script>

<template>
  <div class="w-full bg-[#68a097] py-10">
    <div class="w-fit flex flex-row mx-auto justify-between gap-10">
      <img
        class="hover:opacity-90 cursor-pointer"
        :src="FacebookIcon"
        alt="facebook"
      />
      <img
        class="hover:opacity-90 cursor-pointer"
        :src="TwitterIcon"
        alt="twitter"
      />
      <img
        class="hover:opacity-90 cursor-pointer"
        :src="GoogleIcon"
        alt="google"
      />
      <img
        class="hover:opacity-90 cursor-pointer"
        :src="LinkedinIcon"
        alt="linkedin"
      />
    </div>
  </div>
</template>
