<template>
  <div>
    <div id="main">
      Counter: {{ counter }}
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </div>
    <Counter id="counter" />
  </div>
</template>

<script setup>
// const counter = useState("counter", () => Math.round(Math.random() * 1000));
const counter = useCounter();
</script>

<style lang="scss" scoped></style>

<!-- <template>
  <div class="Main">
    <h1>Hello Nuxt 3</h1>
    <IconsBell class="w-10 h-10" />
    <ContentDoc />
      {{ $hello("dda") }} -->
<!-- <img
      src="@/assets/snorlax.png"
      alt=""
    />
    <img
      src="/pikachu.png"
      alt=""
    />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
// const sayHello = () => console.log("Hello");
// sayHello();

// const { $hello } = useNuxtApp();
// $hello("chikita");
</script> -->
