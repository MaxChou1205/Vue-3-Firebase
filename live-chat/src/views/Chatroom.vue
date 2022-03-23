<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<script setup>
import { watch } from "vue";
import { useRouter } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import getUser from "@/composables/getUser";

const router = useRouter();
const { user } = getUser();

watch(user, () => {
  if (!user.value) router.push({ name: "Welcome" });
});
</script>

<style lang="scss" scoped></style>
