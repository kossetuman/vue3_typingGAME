<script setup>
import { ref } from 'vue'
const title = 'vue.js!'
let price = ref(9.9)
function increment() {
  price.value = price.value + 1
}
</script>
<template>
  <h1>{{ title }}</h1>
  <h2>${{ price - 1 }}</h2>
  <button @click="increment">button</button>
</template>
