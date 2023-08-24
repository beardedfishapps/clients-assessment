<template>
  <div class="w-fit m-auto p-8">
    <div v-if="clients?.length > 0">
      <h1 class="text-3xl mb-4 text-center border-b border-black">
        Clients
      </h1>
      <div class="mb-4">
        <input
          id="filterText"
          type="text"
          name="filterText"
          class="p-2 bg-white border border-slate-700 rounded-sm w-full"
          placeholder="Filter text"
          @keyup="filterBy"
        >      
      </div>
      <ClientList :clients="filteredClients" />
    </div>
    <p v-if="clients?.length == 0">
      Loading clients...
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ClientList from './components/ClientList.vue'

useHead({
  title: 'Clients Assessment Application',
  htmlAttrs: {
    lang: 'en',
  }
})

const clients = ref([])
const filteredClients = ref([])

const filterBy = (e) => {
  console.log('in filterBy')  
  const filterText = e.target.value

  if (filterText.trim() !== '') {
    filteredClients.value = clients.value.filter((client) => {
      return client.name?.includes(filterText) || client.title?.includes(filterText) || client.avatar?.includes(filterText) || client.quote?.includes(filterText) || client.nationality?.includes(filterText)
    })
  } else {
    filteredClients.value = clients.value
  }
  
}

onMounted(() => {
  fetch('/api/clients')
  .then((res) => res.json())
  .then((data) => {
    clients.value = data
    filteredClients.value = data
  })
})
</script>
