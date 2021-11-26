<script setup>
import Sidebar from "./elements/Sidebar.vue";
</script>
<template>
  <div class="flex w-full absolute py-4 ml-4 md:ml-0">
    <div class="max-w-screen-xl w-full mx-auto">
      <button
        class="toggle"
        @click="navOpen = !navOpen"
        :class="{ active: navOpen }"
      >
        <div
          class="top transition-all duration-300 transform h-1 w-7 bg-black"
          :class="[navOpen ? 'translate-y-2  -rotate-45' : '-translate-y-1']"
        ></div>
        <div
          class="mid transition-all duration-300 h-1 w-5 bg-black"
          :class="[navOpen ? '-translateX-40 rotate-180 opacity-0' : false]"
        ></div>
        <div
          class="bottom transition-all duration-300 transform h-1 w-7 bg-black"
          :class="[navOpen ? ' translate-y-0 rotate-45' : 'translate-y-1']"
        ></div>
      </button>
    </div>
  </div>

<transition name="translateX">
  <div
    v-show="navOpen"
    class="absolute bg-black w-full h-screen z-50 text-white"
  >
    <div class="sidebar max-w-screen-lg mx-auto w-full py-32">
      <div class="flex flex-col items-end w-full">
        <button
          class="toggle"
          @click="navOpen = !navOpen"
          :class="{ active: navOpen }"
        >
          <div
            class="top transition-all duration-300 transform h-1 w-7 bg-white"
            :class="[navOpen ? 'translate-y-2  -rotate-45' : '-translate-y-1']"
          ></div>
          <div
            class="mid transition-all duration-300 h-1 w-5 bg-black"
            :class="[navOpen ? '-translateX-40 rotate-180 opacity-0' : false]"
          ></div>
          <div
            class="
              bottom
              transition-all
              duration-300
              transform
              h-1
              w-7
              bg-white
            "
            :class="[navOpen ? ' translate-y-0 rotate-45' : 'translate-y-1']"
          ></div>
        </button>
      </div>
      <Sidebar :navOpen="navOpen" />
    </div>
  </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      navOpen: false,
    };
  },
};
</script>
<style scoped>

.translateX-enter-from {
  transform: translateY(100%) translateX(-95%) scale(2);
  border-radius:50%;
  opacity: 0;
}
.translateX-enter-to {
transform:translateY(0%) translateX(0%) scale(2);
  border-radius:50%;
  opacity: 1;
}

.translateX-enter-active, .translateX-leave-active{
  transition: all 0.5s ease;
}
.translateX-enter-active > * {
    opacity:0;
}
.translateX-leave-from {
  transform: translateY(0%) translateX(0%) scale(2);
  border-radius:50%;
  opacity: 1;
}

.translateX-leave-to {
  transform: translateY(150%) translateX(-95%) scale(2);
  border-radius:50%;
  opacity: 0;
}
</style>
