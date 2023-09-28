<template>
  <div>event id: {{ $route.params.id }}</div>
</template>

<script setup>
const nux = useNuxtApp();

console.log(nux);
</script>
