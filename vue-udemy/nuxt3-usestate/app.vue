<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <h1>{{ title }}</h1>
    <button @click="titleState.changeTitle('hello nuxt3')">changetitle</button>
  </div>
</template>
<script setup>
const titleState = useTitle();
const { title } = titleState();
</script>
