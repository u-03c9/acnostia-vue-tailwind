<script setup lang="ts">
import BaseSection from "../base/BaseSection.vue";
import BaseIcon from "../base/BaseIcon.vue";

const cards = [
  {
    name: "Anton Petrov",
    title: "General Manager",
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
  backgroundLayer: "/about/layer.webp",
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
            class="card w-full bg-[#4d3f4b] opacity-70 hover:opacity-100 pt-12 pb-8 rounded drop-shadow-md"
            v-for="{ name, title } in cards"
          >
            <img
              class="mx-auto profile"
              src="/about/profile.webp"
              alt="Profile pic"
            />
            <h3 class="uppercase mt-3 text-2xl font-bold">{{ name }}</h3>
            <p class="text-[#a1ca6c] text-sm mt-1">{{ title }}</p>

            <div
              class="icons w-fit flex justify-between pt-8 mx-auto gap-2 lg:gap-4"
            >
              <BaseIcon
                color="#a1859e"
                hoverColor="#4f689e"
                href="https://facebook.com"
                iconUrl="/about/facebook.webp"
                size="1.75rem"
                alt="facebook"
              />
              <BaseIcon
                color="#a1859e"
                hoverColor="#74c7d5"
                href="https://twitter.com"
                iconUrl="/about/twitter.webp"
                size="1.75rem"
                alt="twitter"
              />
              <BaseIcon
                color="#a1859e"
                hoverColor="#df5c64"
                href="https://google.com"
                iconUrl="/about/google.webp"
                size="1.75rem"
                alt="google"
              />
              <BaseIcon
                color="#a1859e"
                hoverColor="#3e61af"
                href="https://linkedin.com"
                iconUrl="/about/linkedin.webp"
                size="1.75rem"
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
</style>
