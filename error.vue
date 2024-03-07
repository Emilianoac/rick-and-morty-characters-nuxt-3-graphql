<script lang="ts" setup>
  const props = defineProps( {
    error: Object as any
  })

  useSeoMeta({
    title: `${props.error.statusCode} | Rick and Morty Characters`,
    description: 'Error',
    keywords: 'Error'
  })
</script>

<template>
  <Navbar/>
  <UContainer>
    <div class="text-center mt-20">
      <img class="max-w-48 mx-auto" src="/error.png" alt="Error"/>
      <h1 class="text-8xl font-bold mx-auto mt-5">{{ error.statusCode }}</h1>
      <p class="mt-3">{{ error.message }}</p>
    </div>
  </Ucontainer>
</template>

<style lang="scss" scoped>
  
</style>
