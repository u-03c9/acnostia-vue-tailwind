<script setup lang="ts">
import ProfilePic from "../assets/about/profile.webp";
import FacebookPic from "../assets/about/facebook.webp";
import TwitterPic from "../assets/about/twitter.webp";
import GooglePic from "../assets/about/google.webp";
import LinkedinPic from "../assets/about/linkedin.webp";
import BaseSection from "../base/BaseSection.vue";

const cards = [
  {
    name: "Anton Petrov",
    title: "Genral Manager",
  },
  {
    name: "Kirl Donchev",
    title: "Design Master",
  },
  {
    name: "Ilian Bonev",
    title: "Developer Ninja",
  },
  {
    name: "Doni Stamov",
    title: "SEO guru",
  },
];

const data = {
  id: "about",
  title: "WHO WE ARE & WHAT WE DO",
  description: `Crass suscipit porttitor. Morbi sit amet tincidunt sapien. Curabitur
    posuere lectus aliquet erat rutrum sollicitudin. In enim diam, ullamcorper
    quis libero et, ultricies commodo est. Quisque at ante vitae justo fermentum
    viverra ac eu justo. Ut luctus imperdiet lacus, eget laoreet erat posuere
    quis.`,
  descriptionColor: "#e6d1e3",
  backgroundColor: "#675565",
  backgroundLayer: "src/assets/about/layer.webp",
};
</script>

<template>
  <BaseSection
    :id="data.id"
    :title="data.title"
    :description="data.description"
    :descriptionColor="data.descriptionColor"
    :backgroundColor="data.backgroundColor"
    :backgroundLayer="data.backgroundLayer"
  >
    <template v-slot:default>
      <div class="w-full">
        <div class="mt-16">
          <span
            class="text-2xl md:text-3xl font-medium w-full py-2 px-4 md:px-10 bg-[#a1ca6c] rounded"
          >
            MEET THE TEAM
          </span>
          <div class="triangle-down w-full mx-auto"></div>
        </div>

        <div class="w-full grid gap-5 md:grid-cols-2 lg:grid-cols-4 mt-14">
          <!-- card loop -->
          <div
            class="card w-full bg-[#4d3f4b] opacity-70 hover:opacity-100 pt-12 pb-8 rounded"
            v-for="{ name, title } in cards"
          >
            <img class="mx-auto profile" :src="ProfilePic" alt="Profile pic" />
            <h3 class="uppercase mt-3 text-2xl font-bold">{{ name }}</h3>
            <p class="text-[#a1ca6c] text-sm mt-1">{{ title }}</p>

            <div
              class="icons w-fit flex justify-between pt-8 mx-auto gap-2 lg:gap-4"
            >
              <img
                class="cursor-pointer facebook"
                :src="FacebookPic"
                alt="facebock"
              />
              <img
                class="cursor-pointer twitter"
                :src="TwitterPic"
                alt="twitter"
              />
              <img
                class="cursor-pointer google"
                :src="GooglePic"
                alt="google"
              />
              <img
                class="cursor-pointer linkedin"
                :src="LinkedinPic"
                alt="linkedin"
              />
            </div>
          </div>
          <!-- end of card loop -->
        </div>
      </div>
    </template>
  </BaseSection>
</template>

<style scoped>
.triangle-down {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid #a1ca6c;
}
.card:hover {
  background-color: #4d3f4be0;
}
.card:hover p {
  color: #ff8973;
}
.card:hover .profile {
  filter: hue-rotate(40deg) saturate(300%) brightness(150%);
}
.facebook:hover {
  filter: hue-rotate(280deg) saturate(270%) contrast(130%) brightness(90%);
}
.twitter:hover {
  filter: hue-rotate(270deg) saturate(270%) brightness(120%);
}
.google:hover {
  filter: hue-rotate(40deg) saturate(200%) contrast(150%);
}
.linkedin:hover {
  filter: hue-rotate(280deg) saturate(280%) contrast(250%) brightness(90%);
}
</style>
