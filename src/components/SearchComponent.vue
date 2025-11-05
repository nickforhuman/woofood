<template>
  <form action="" class="w-full flex justify-center items-center relative">
    <input
      ref="searchInput"
      v-model="query"
      type="search"
      class="w-full rounded-full px-4 shadow-md hover:shadow-lg text-center py-2 bg-gray-100 focus:outline focus:outline-primary focus:ring-2 focus:ring-primary/30 transition-all"
      placeholder="Pizza, Hamburgers..."
    />

    <button
      class="absolute right-1 flex justify-center items-center"
      type="button"
      @click="focusSearch"
      title="shortkey: Ctrl + K"
    >
      <span
        class="flex text-xs gap-1 justify-center items-center p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
      >
        <Command class="w-4 h-4" />K
      </span>
    </button>

    <button
      class="absolute left-0 px-4 py-2 border-r border-r-gray-300 flex justify-center items-center"
      type="button"
      @click="focusSearch"
    >
      <Search class="w-4 h-4 text-gray-600" />
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onKeyStroke } from '@vueuse/core'
import { Search, Command } from 'lucide-vue-next'

const searchInput = ref<HTMLInputElement | null>(null)
const query = ref('')

const focusSearch = () => {
  searchInput.value?.focus()
}

onKeyStroke('k', (e) => {
  // CTRL + K və ya yalnız K (opsional olaraq dəyişə bilərsən)
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault()
    focusSearch()
  }
})
</script>
