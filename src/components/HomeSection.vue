<script setup lang="ts">
import { computed, ref } from "vue";
import AngleLeftSVG from "../assets/AngleLeftSVG.vue";
import AngleRightSVG from "../assets/AngleRightSVG.vue";

const slides = [
  {
    id: 0,
    url: "/home/slide-0.webp",
  },
  {
    id: 1,
    url: "/home/slide-1.webp",
  },
  {
    id: 2,
    url: `/home/slide-2.webp`,
  },
];

const currentSlideId = ref(0);
const currentSlideUrl = computed(() => {
  return `url(${slides[currentSlideId.value].url})`;
});

function nextSlide() {
  if (currentSlideId.value >= slides.length - 1) currentSlideId.value = 0;
  else currentSlideId.value++;
}
function previousSlide() {
  if (currentSlideId.value <= 0) currentSlideId.value = slides.length - 1;
  else currentSlideId.value--;
}
</script>

<template>
  <div id="home" class="w-full h-screen">
    <div
      class="absolute top-0 left-0 h-full w-full -z-50 bg-no-repeat bg-cover bg-center overflow-hidden"
      :style="{ backgroundImage: currentSlideUrl }"
    ></div>

    <div class="flex w-full h-full px-10">
      <AngleLeftSVG
        class="w-10 fill-[#fff8] hover:fill-[#ffff] cursor-pointer"
        @click="previousSlide"
      />
      <div
        class="place-self-center flex md:flex-row md:gap-4 gap-8 flex-col justify-items-stretch mx-auto lg:px-8 md:px-4 px-8 lg:py-4 md:py-0 py-4 bg-[#fff8] text-[#74c7d5] rounded"
      >
        <div
          class="h-full flex md:flex-col lg:gap-9 md:gap-10 gap-1 flex-row place-self-center select-none lg:text-6xl lg:leading-3 md:text-5xl md:leading-3 text-3xl"
        >
          <span class="uppercase md:tracking-wide"> good ideas </span>
          <span
            class="md:text-right md:lowercase uppercase md:tracking-tighter"
          >
            comes
          </span>
        </div>
        <div class="">
          <span
            class="md:text-9xl md:leading-normal text-8xl uppercase font-black select-none leading-3"
          >
            first!
          </span>
        </div>
      </div>

      <AngleRightSVG
        class="w-10 fill-[#fff8] hover:fill-[#ffff] cursor-pointer"
        @click="nextSlide"
      />
    </div>
    <div class="absolute bottom-20 w-full">
      <div class="flex mx-auto gap-10 justify-center">
        <input
          type="radio"
          v-for="slide in slides"
          :key="slide.id"
          :value="slide.id"
          v-model.number="currentSlideId"
          name="slides"
          class="w-5 h-5 appearance-none rounded-full bg-[#fff8] checked:bg-[#74c7d5] cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>
