<script lang="ts" setup>
  const props = defineProps({
    data: {
      type: Object as () => Character,
      required: true
    }
  })
</script>

<template>
  <UCard class="hover:opacity-80">
    <ULink
      :to="`/character/${data.id}`"
      active-class="text-primary"
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      >
      <img class="mx-auto" :src="data.image"/>
    </ULink>
    <template #footer>
      <h3 class="text-md font-bold line-clamp-1">{{ data.name }}</h3>
      <dl class="text-sm mt-4">
        <dt class="font-bold">Dimension</dt>
        <dd class="">{{ data.origin.dimension ? data.origin.dimension : "Unknow" }}</dd>
      </dl>
    </template>
  </UCard>
</template>

<style lang="scss" scoped>
  
</style>
