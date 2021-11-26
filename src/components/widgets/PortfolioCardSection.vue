<template>
<div class="reading-section flex flex-col bg-gray-100 py-16 px-4">
    <div class="flex max-w-screen-xl mx-auto w-full flex-col">
      <div class="title">
        <h1 class="text-3xl md:text-5xl text-black-400 font-bold uppercase heading">
          <span class="has-tooltip text-stroke"
            >#PORTFOLIO
            <span
              class="
                tooltip
                -mt-4
                py-2
                px-4
                rounded
                bg-white
                font-normal
                text-black text-sm
                max-w-sm
                normal-case
                shadow-md
              "
              >Kumpulan portfolio website yang pernah saya buat ada disini </span
            >
          </span>
        </h1>
      </div>
      <div class="content mt-16">
  <div
    class="card wrapper grid gap-4 grid-cols-1"
    :class="[cols ? 'md:grid-cols-' + cols : 'md:grid-cols-3']"
  >
    <div
      class="card-item relative flex flex-col"
      v-for="portfolio in items"
      :key="portfolio"
    >
      <div class="image">
        <img
          :src="portfolio.thumbnail"
          class="w-full object-cover"
        />
      </div>
      <div class="portfolio-detail p-4">
        <div
          class="
            border-wrapper border-2 border-white
            w-full
            h-full
            flex
            space-y-2
            flex-col
            text-md
            items-center
            justify-center
          "
        >
          <h3 class="text-4xl uppercase text-stroke-small text-white font-bold">
            {{ portfolio.name }}
          </h3>
          <div class="stack">
            <span
              v-for="(stack, index) in portfolio.portfolio.stacks"
              :key="stack"
              >{{ stack }} <span v-if="index + 1 < portfolio.portfolio.stacks.length">, </span></span
            >
          </div>
          <div class="tags text-sm">
            <span v-for="(tag, index) in portfolio.portfolio.tags" :key="tag">
            {{ tag }}<span v-if="index + 1 < portfolio.portfolio.tags.length">, </span></span
            >
          </div>
          <a
            :href="portfolio.portfolio.link"
            class="
              portfolio-more
              px-4
              text-md
              border-animate border-effect
              relative
              py-2
              border
              hover:px-4
              border-white
              transition
              duration-1000
              hover:border-transparent
              font-lato
            "
            target="_blank"
            >Lihat Detail Project</a
          >
        </div>
      </div>
    </div>
  </div>

      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";

export default {
  props: ["items", "cols"],
  setup(props) {
    onMounted(() => console.log(props.items));
  },
};
</script>

<style></style>
