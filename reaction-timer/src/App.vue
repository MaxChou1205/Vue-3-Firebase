<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame" />
  <Results v-if="isShowResult" :score="score"></Results>
</template>

<script setup>
import { ref } from "vue";
import Block from "@/components/Block.vue";
import Results from "@/components/Results.vue";

let isPlaying = ref(false);
let isShowResult = ref(false);
let delay = ref(null);
let score = ref(0);

const start = () => {
  isPlaying.value = true;
  isShowResult.value = false;
  delay.value = 2000 + Math.random() * 2000;
};

const endGame = reactionTime => {
  score.value = reactionTime;
  isPlaying.value = false;
  isShowResult.value = true;
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
button {
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
