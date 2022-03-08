<script setup lang="ts">
import { reactive } from "vue";

const data = {
  id: "contacts",
  title: "CONTACT US",
  description: `Crass suscipit porttitor. Morbi sit amet tincidunt sapien. Curabitur
    posuere lectus aliquet erat rutrum sollicitudin. In enim diam, ullamcorper
    quis libero et, ultricies commodo est. Quisque at ante vitae justo fermentum
    viverra ac eu justo. Ut luctus imperdiet lacus, eget laoreet erat posuere
    quis.`,
  descriptionColor: "#fff",
  backgroundColor: "#75b4aa",
  backgroundLayer: "src/assets/about/layer.webp",
};

const formData = reactive({
  name: "",
  email: "",
  question: "",
});
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
    <template v-slot>
      <div class="w-full mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5 text-left">
        <div class="">
          <h2 class="text-3xl">Address</h2>
          <!-- details -->
          <div class="mt-3 grid grid-cols-1 md:grid-cols-2">
            <div class="basis-1/2 flex flex-col justify-between">
              <div class="">
                <h3 class="text-xl text-[#c0dfda]">Acrostia</h3>
                <p class="mt-2">Sevenoaks Rd</p>
                <p>Sevenoaks TN14 7HR, UK</p>
              </div>
              <div class="pt-6 md:pt-0">
                <div class="flex">
                  <div class="col mr-8 text-[#c0dfda]">
                    <p>Phone:</p>
                    <p>Fax:</p>
                    <p>E-mail:</p>
                    <p>Skype:</p>
                  </div>
                  <div class="col">
                    <p>+44 555 555 555</p>
                    <p>+44 555 555 555</p>
                    <p>info@acrostia.com</p>
                    <p>Ac0stia</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- map -->
            <div class="basis-1/2 pt-12 md:pt-0">
              <div class="map w-full h-64 border-dashed border-2"></div>
            </div>
          </div>
        </div>
        <!-- contact form -->
        <div class="">
          <h2 class="text-3xl">Ask a Question</h2>
          <form @submit.prevent class="mt-3 w-full">
            <div class="grid grid-col-1 gap-5">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  class="w-full bg-[#68a097] rounded px-5 py-2 placeholder:text-[#82c8bd] focus:outline-none focus:bg-white focus:text-[#68a097] hover:bg-[#75a8a0]"
                  type="text"
                  placeholder="Name"
                  name="name"
                  v-model.trim="formData.name"
                />
                <input
                  class="w-full bg-[#68a097] rounded px-5 py-2 placeholder:text-[#82c8bd] focus:outline-none focus:bg-white focus:text-[#68a097] hover:bg-[#75a8a0]"
                  type="email"
                  placeholder="Email"
                  name="email"
                  v-model.trim="formData.email"
                />
              </div>
              <textarea
                class="w-full bg-[#68a097] rounded px-5 py-2 placeholder:text-[#82c8bd] focus:outline-none focus:bg-white focus:text-[#68a097] hover:bg-[#75a8a0] resize-none h-[12.3rem]"
                name="question"
                placeholder="Your question"
                v-model.trim="formData.question"
              >
              </textarea>
              <button
                class="mt-5 py-2 w-5/12 mx-auto bg-[#df5c64] text-2xl text-white hover:bg-[#df737a]"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </template>
  </BaseSection>
</template>

<style scoped>
.map {
  background-image: url("../assets/contact/map.webp");
  background-position: center;
  background-size: 155%;
  background-repeat: no-repeat;
  background-clip: content-box;
}
</style>
