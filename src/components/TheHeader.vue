<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import LogoImg from "../assets/header/logo.webp";
import SolidBarsIcon from "../base/SolidBarsSVG.vue";

const nav = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Work",
    href: "#work",
  },
  {
    name: "Contacts",
    href: "#contacts",
  },
];

const scrollY = ref(0);

const handleWindowScroll = (event: Event) => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  scrollY.value = window.scrollY;
  window.addEventListener("scroll", handleWindowScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleWindowScroll);
});

const headerExtraClassName = computed(() => {
  if (scrollY.value > 50) {
    return "final-header";
  }

  return "initial-header";
});

const isMenuOpen = ref(false);

function handleMenuClick(href: string) {
  window.location.href = href;
  isMenuOpen.value = false;
}

const smallScreenMenuExtraClass = computed(() => {
  if (!isMenuOpen.value) return "";
  if (scrollY.value > 50) {
    return "final-small-menu";
  }
  return "initial-small-menu";
});
</script>

<template>
  <teleport to="body">
    <div v-if="isMenuOpen">
      <div
        class="w-full h-full fixed top-0 left-0 bg-[#4d4c4c94] z-40"
        @click="isMenuOpen = false"
      ></div>

      <nav
        :class="smallScreenMenuExtraClass"
        class="fixed right-0 bg-white z-50 place-self-center"
      >
        <div
          v-for="{ name, href } in nav"
          :key="name"
          @click="handleMenuClick(href)"
          class="text-lg text-black block hover:bg-[#74c7d5] cursor-pointer w-full px-16 py-5 text-center"
        >
          {{ name }}
        </div>
      </nav>
    </div>
  </teleport>
  <section class="h-0 sticky top-0 z-30">
    <div class="bg-[#91b561b2]">
      <div
        class="lg:w-8/12 lg:px-0 px-10 mx-auto flex justify-between"
        :class="headerExtraClassName"
      >
        <div class="cursor-pointer pt-6 h-[30px] w-[151px]">
          <a href="#home" class="cursor-pointer">
            <img :src="LogoImg" alt="logo" class="" />
          </a>
        </div>
        <nav class="">
          <a
            v-for="{ name, href } in nav"
            :key="name"
            :href="href"
            class="text-lg text-white pt-6 pb-4 lg:px-6 hover:bg-[#74c7d5] rounded-b-md cursor-pointer hidden lg:block float-left"
          >
            {{ name }}
          </a>
          <a
            href="javascript:void(0);"
            class="icon float-right pt-6 pb-4 lg:hidden"
            @click="isMenuOpen = true"
          >
            <SolidBarsIcon class="fill-white w-7" />
          </a>
        </nav>
      </div>
    </div>
  </section>
</template>

<style scoped>
.initial-header {
  transition: all 400ms ease-in-out;
  padding-bottom: 4rem;
}

.final-header {
  transition: all 400ms ease-in-out;
  padding-bottom: 0;
}

.initial-small-menu {
  transition: all 400ms ease-in-out;
  top: 8.5rem;
}
.final-small-menu {
  transition: all 400ms ease-in-out;
  top: 4.5rem;
}
</style>
