<template>
  <div class="block" v-if="showBlock" @click="stopTimer">click me</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  delay: Number
});

const emit = defineEmits(["end"]);

let showBlock = ref(false);
let timer = null;
let reactionTime = 0;

onMounted(() => {
  setTimeout(() => {
    showBlock.value = true;
    startTimer();
  }, props.delay);
});

const startTimer = () => {
  timer = setInterval(() => {
    reactionTime += 10;
  }, 10);
};

const stopTimer = () => {
  clearInterval(timer);
  emit("end", reactionTime);
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
