<template>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-8">
    <Client
      v-for="client in clients"
      :key="client.name"
      :client="client"
      class="flex flex-row items-center p-4 rounded-md bg-blue-100 border-orange-100 hover:cursor-pointer hover:border-blue-100 transition-[border-color] border-8"
      @click="dialogClient = client"
    />
  </div>

  <div
    v-if="dialogClient"
    class="absolute top-0 left-0 w-full h-full bg-black/75"
  />
  <dialog
    v-if="dialogClient"
    open
    class="p-4 rounded-md bg-slate-50 absolute inset-0"
  >
    <div class="flex flex-row items-center p-4">
      <NuxtImg
        :src="dialogClient.avatar"
        :alt="dialogClient.name + ' avatar photo'"
      />
      <div class="text-right w-full">
        <div class="mb-4">
          <h2
            class="text-2xl mb-4"
            v-html="dialogClient.name"
          />
          <p
            v-if="dialogClient.title"
            class="mb-1"
          >
            {{ dialogClient.title }}
          </p>
          <p
            v-if="dialogClient.nationality"
            class="mb-1"
          >
            {{ dialogClient.nationality }}
          </p>
          <em
            v-if="dialogClient.quote"
            class="mb-1"
          >{{ dialogClient.quote }}</em>
        </div>
        <button
          class="p-2 bg-blue-100 rounded-md"
          @click="closeDialog"
        >
          Close
        </button>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  clients: {
    type: Array,
    default: () => []
  }
})

const dialogClient = ref(null)

const closeDialog = () => {
  document.querySelector('dialog').close()
  dialogClient.value = null
}
</script>