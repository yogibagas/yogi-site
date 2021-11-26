<template>
  <div class="max-w-screen-xl mx-auto w-full py-32">
    <nav>
      <ul class="flex flex-col text-3xl text-white space-y-4">
        <li class="list-none" v-for="item in menu" :key="item">{{item.label}}</li>
      </ul>
    </nav>
  </div>
</template>

<script>import { ref } from "@vue/reactivity";

export default {
  setup(){
    const menu = [
     { label:'Coming Soon Dulu ya temen-temen karna masih tahap build 😋 ', route:'About'},
    ]

    return {
      menu
    }
  }
};
</script>
