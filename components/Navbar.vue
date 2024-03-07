<script lang="ts" setup>
  const colorMode = useColorMode()
  const isDark = computed({
    get () {
      return colorMode.value === 'dark'
    },
    set () {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
  })
</script> 

<template>
  <div class="p-3 bg-gray-100 dark:bg-gray-900 sticky top-0 z-50">
    <UContainer>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
        <div class="">
          <NuxtLink to="/" >
            <img class="max-w-28" src="/logo.png" alt="Site logo">
          </NuxtLink>
        </div>
        <div class="col-span-2 md:col-span-1">
          <SearchBar/>
        </div>
        <div class="justify-self-end row-start-1 col-start-2 md:row-auto md:col-auto ">
          <ClientOnly>
            <UButton
              :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
              color="gray"
              variant="ghost"
              aria-label="Theme"
              @click="isDark = !isDark"
            />
          </ClientOnly>
        </div>
      </div>
    </UContainer>
  </div>
</template>
