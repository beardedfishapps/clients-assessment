<template>
  <div :class="props.class">
    <NuxtImg
      :src="client.avatar"
      :alt="client.name + ' avatar photo'"
      width="75"
      height="75"
    />
    <div class="text-right w-full">
      <h2
        class="text-2xl"
        v-html="client.name"
      />
      <p>{{ client.title }}</p>
    </div>
  </div>
</template>
  
<script setup>

const props = defineProps({
    client: {
        type: Object,
        default: () => {}
    },
    class: {
      type: String,
      default: ''
    }
})
</script>