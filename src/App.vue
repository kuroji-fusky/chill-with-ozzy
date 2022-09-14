<script setup lang="ts">
import { ref } from "vue"
import PlayerActions from "./components/PlayerActions.vue"

let trackTitle = "It's You"
let trackArtist = "헨리 Henry"
let isClosed1 = ref(false)
let isClosed2 = ref(false)
</script>

<template>
  <main>
    <iframe
      width="1"
      height="1"
      src="https://www.youtube-nocookie.com/embed/MFxq3SA2b4I?controls=0&autoplay=1"
      title="YouTube video player"
      frameborder="0"
      allow="autoplay; encrypted-media;"
      class="opacity-0"
    ></iframe>
    <cwo-notice class="fixed top-0 w-full">
      <div
        :class="{ hidden: isClosed1 }"
        class="text-red-900 bg-red-400 bg-opacity-30 px-7 py-3.5 flex justify-between items-center"
      >
        <div>
          <strong>
            <font-awesome-icon
              :icon="['fas', 'fa-warning']"
            ></font-awesome-icon>
            Note</strong
          >
          In browsers such as Firefox, you must enable the autoplay permission
          or click "Allow Video and Audio" in the URL bar for this to work.
        </div>
        <button @click="isClosed1 = !isClosed1">
          <font-awesome-icon :icon="['fas', 'fa-times']"></font-awesome-icon>
        </button>
      </div>
      <div
        :class="{ hidden: isClosed2 }"
        class="text-yellow-900 bg-yellow-400 bg-opacity-30 px-7 py-3.5 flex justify-between items-center"
      >
        <div>
          <strong>
            <font-awesome-icon
              :icon="['fas', 'fa-warning']"
            ></font-awesome-icon>
            Warning</strong
          >
          Project still under construction, it's still a working prototype, so
          none of the buttons work yet!
        </div>
        <button @click="isClosed2 = !isClosed2">
          <font-awesome-icon :icon="['fas', 'fa-times']"></font-awesome-icon>
        </button>
      </div>
    </cwo-notice>
    <cwo-btm-wrapper class="absolute bottom-0 pt-5 pb-10 w-full">
      <cwo-player class="text-center flex flex-col items-center gap-y-2">
        <strong class="text-sm text-gray-500 text-opacity-75">
          <font-awesome-icon :icon="['fas', 'fa-play']"></font-awesome-icon>
          NOW PLAYING</strong
        >
        <strong class="text-2xl" :aria-label="`Song title: ${trackTitle}`">{{
          trackTitle
        }}</strong>
        <span class="text-sm" :aria-label="`Artist: ${trackArtist}`">{{
          trackArtist
        }}</span>
        <PlayerActions />
      </cwo-player>
    </cwo-btm-wrapper>
    <cwo-cutie
      class="fade-onload opacity-0 -z-10 w-full h-full fixed inset-0 flex justify-center items-center"
    >
      <img
        class="w-[25%]"
        src="https://res.cloudinary.com/skepfusky-dookie/image/upload/c_scale,q_80,w_400/v1663099032/projects/ozzychill/ozzyuwu.png"
        alt="yes"
      />
    </cwo-cutie>
  </main>
</template>

<style>
.fade-onload {
  animation: fadeTheCutie 1200ms linear forwards;
}
@keyframes fadeTheCutie {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}
</style>