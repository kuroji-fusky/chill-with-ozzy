<template>
  <cwo-player-actions id="btn-actions" class="flex gap-x-3 mt-3">
    <button>
      <font-awesome-icon
        :icon="['fas', 'fa-backward-step']"
      ></font-awesome-icon>
    </button>
    <button>
      <font-awesome-icon :icon="['fas', 'fa-play']"></font-awesome-icon>
    </button>
    <button>
      <font-awesome-icon :icon="['fas', 'fa-forward-step']"></font-awesome-icon>
    </button>
    <button>
      <font-awesome-icon :icon="['fas', 'fa-shuffle']"></font-awesome-icon>
    </button>
  </cwo-player-actions>
</template>

<style scoped>
button {
  @apply px-5 py-3 rounded-md shadow-lg bg-purple-200 hover:bg-purple-50 hover:-translate-y-0.5 transition-all duration-300;
}
</style>
