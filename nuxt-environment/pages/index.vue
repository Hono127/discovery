<template>
  <div>
    <h1>Top Page</h1>
    <p>{{ users }}</p>
  </div>
</template>

<script setup>
const {data:users} = await useFetch('https://jsonplaceholder.typicode.com/users')
</script>