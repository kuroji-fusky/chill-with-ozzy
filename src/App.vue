<script setup lang="ts">
import type { track } from "@vue/reactivity"

let trackTitle = "SoulMate"
let trackArtist = "ZICO (feat. IU)"
</script>

<template>
  <main>
    <iframe
      width="1"
      height="1"
      src="https://www.youtube-nocookie.com/embed/Vl1kO9hObpA?controls=0&autoplay=1"
      title="YouTube video player"
      frameborder="0"
      allow="autoplay; encrypted-media;"
      class="opacity-0"
    ></iframe>
    <cwo-notice class="fixed top-0 w-full">
      <div class="text-red-900 bg-red-400 bg-opacity-30 px-7 py-3.5">
        <strong>
          <font-awesome-icon :icon="['fas', 'fa-warning']"></font-awesome-icon>
          Note</strong
        >
        In browsers such as Firefox, you must enable the autoplay permission or
        click "Allow Video and Audio" in the URL bar for this to work.
      </div>
      <div class="text-yellow-900 bg-yellow-400 bg-opacity-30 px-7 py-3.5">
        <strong>
          <font-awesome-icon :icon="['fas', 'fa-warning']"></font-awesome-icon>
          Warning</strong
        >
        Project still under construction, it's still a working prototype, so
        none of the buttons work yet!
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
        <cwo-player-actions id="btn-actions" class="flex gap-x-3 mt-3">
          <button
            class="px-5 py-3 rounded-md shadow-lg bg-purple-200 hover:bg-purple-50"
          >
            <font-awesome-icon
              :icon="['fas', 'fa-backward-step']"
            ></font-awesome-icon>
          </button>
          <button
            class="px-5 py-3 rounded-md shadow-lg bg-purple-200 hover:bg-purple-50"
          >
            <font-awesome-icon :icon="['fas', 'fa-play']"></font-awesome-icon>
          </button>
          <button
            class="px-5 py-3 rounded-md shadow-lg bg-purple-200 hover:bg-purple-50"
          >
            <font-awesome-icon
              :icon="['fas', 'fa-forward-step']"
            ></font-awesome-icon>
          </button>
          <button
            class="px-5 py-3 rounded-md shadow-lg bg-purple-200 hover:bg-purple-50"
          >
            <font-awesome-icon
              :icon="['fas', 'fa-shuffle']"
            ></font-awesome-icon>
          </button>
        </cwo-player-actions>
      </cwo-player>
    </cwo-btm-wrapper>
    <cwo-cutie
      class="-z-10 w-full h-full fixed inset-0 flex justify-center items-center"
    >
      <img
        class="w-[25%]"
        src="https://res.cloudinary.com/skepfusky-dookie/image/upload/c_scale,q_80,w_400/v1663099032/projects/ozzychill/ozzyuwu.png"
        alt="yes"
      />
    </cwo-cutie>
  </main>
</template>
