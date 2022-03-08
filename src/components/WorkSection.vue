<script setup lang="ts">
const cards = [
  {
    title: "aenean a elit",
    picUrl: "src/assets/work/items/item-0.webp",
  },
  {
    title: "aliquam",
    picUrl: "src/assets/work/items/item-1.webp",
  },
  {
    title: "suspendisse libero",
    picUrl: "src/assets/work/items/item-2.webp",
  },
  {
    title: "maecenas fingilla",
    picUrl: "src/assets/work/items/item-3.webp",
  },
  {
    title: "donec vehicula",
    picUrl: "src/assets/work/items/item-4.webp",
  },
  {
    title: "ut et sapien",
    picUrl: "src/assets/work/items/item-5.webp",
  },
  {
    title: "quis malesada",
    picUrl: "src/assets/work/items/item-6.webp",
  },
  {
    title: "vestibulum ante",
    picUrl: "src/assets/work/items/item-7.webp",
  },
];

const data = {
  id: "work",
  title: "OUR WORK",
  description: `Crass suscipit porttitor. Morbi sit amet tincidunt sapien. Curabitur
    posuere lectus aliquet erat rutrum sollicitudin. In enim diam, ullamcorper
    quis libero et, ultricies commodo est. Quisque at ante vitae justo fermentum
    viverra ac eu justo. Ut luctus imperdiet lacus, eget laoreet erat posuere
    quis.`,
  descriptionColor: "#fff",
  backgroundColor: "#81a256",
  backgroundLayer: "src/assets/work/layer.webp",
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
    <template #default>
      <div class="w-full pt-12">
        <div
          class="w-full flex justify-between font-bold border-y-2 border-[#fff3] py-8"
        >
          <div class="uppercase text-xl py-2">Portfolio</div>
          <div class="flex flex-row gap-10 text-md">
            <span class="hover:bg-[#f5c149] p-2 rounded">All</span>
            <span class="hover:bg-[#f5c149] p-2 rounded">Photography</span>
            <span class="hover:bg-[#f5c149] p-2 rounded">Logo design</span>
            <span class="hover:bg-[#f5c149] p-2 rounded">Web design</span>
          </div>
        </div>

        <div class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 pt-10">
          <!-- card -->
          <div
            v-for="{ title, picUrl } in cards"
            :key="title"
            class="w-full drop-shadow-md cursor-pointer"
          >
            <div
              class="w-full h-52 bg-no-repeat bg-cover bg-center hover:bg-blend-color hover:bg-30 card-image"
              :style="{ backgroundImage: `url(${picUrl})` }"
            ></div>
            <div
              class="w-full py-3 bg-white rounded-b text-[#727272] uppercase text-sm"
            >
              {{ title }}
            </div>
          </div>
          <!-- end of card -->
        </div>
      </div>
    </template>
  </BaseSection>
</template>
