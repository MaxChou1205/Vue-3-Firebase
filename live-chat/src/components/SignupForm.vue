<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <button type="submit">Sign up</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const displayName = ref("");
const email = ref("");
const password = ref("");

const handleSubmit = () => {
  console.log(displayName, email, password);
};
</script>

<style></style>
