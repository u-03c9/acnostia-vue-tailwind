<script setup lang="ts">
const cards = [
  {
    title: "researching",
    description: `Praesent interdum blandit quam. Asunt in anim uis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore.`,
    picUrl: "/services/icon-lightbulb.webp",
  },
  {
    title: "design",
    description: `Praesent interdum blandit quam. Asunt in anim uis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore.`,
    picUrl: "/services/icon-wand.webp",
  },
  {
    title: "development",
    description: `Praesent interdum blandit quam. Asunt in anim uis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore.`,
    picUrl: "/services/icon-gears.webp",
  },
  {
    title: "launch",
    description: `Praesent interdum blandit quam. Asunt in anim uis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore.`,
    picUrl: "/services/icon-rocket.webp",
  },
];

const data = {
  id: "services",
  title: "OUR SERVICES",
  description: `Crass suscipit porttitor. Morbi sit amet tincidunt sapien. Curabitur
    posuere lectus aliquet erat rutrum sollicitudin. In enim diam, ullamcorper
    quis libero et, ultricies commodo est. Quisque at ante vitae justo fermentum
    viverra ac eu justo. Ut luctus imperdiet lacus, eget laoreet erat posuere
    quis.`,
  descriptionColor: "#e6d1e3",
  backgroundColor: "#b24a50",
  backgroundLayer: "/services/layer.webp",
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
    <template #subtitle>
      <h3 class="mt-5 text-xl uppercase">
        Cras commodo mattis justo nec
        <span class="text-[#ec9da2]">lobortis</span>. Nam ut tellus lobortis,
        ullamcorper massa sit amet
      </h3>
    </template>
    <template #default>
      <div class="w-full">
        <div
          class="mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          <!-- card loop -->
          <div
            class="pt-12 pb-8 px-4 card w-full bg-[#c45158] hover:bg-[#c45f66] rounded drop-shadow-sm"
            v-for="{ title, description, picUrl } in cards"
          >
            <img class="mx-auto icon" :src="picUrl" alt="service pic" />
            <h3 class="uppercase mt-3 text-2xl">{{ title }}</h3>
            <p class="text-sm mt-12">{{ description }}</p>
          </div>
          <!-- end of card loop -->
        </div>
      </div>
    </template>
  </BaseSection>
</template>

<style scoped>
.card:hover .icon {
  outline-style: solid;
  outline-color: #ce797e;
  outline-width: thick;
  outline-offset: -10px;
  border-radius: 50%;
}
</style>
