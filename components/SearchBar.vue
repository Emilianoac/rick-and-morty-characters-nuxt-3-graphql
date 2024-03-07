<script lang="ts" setup>
  const router = useRouter()
  const searchTerm = ref("")
  const searchResults = ref<Character[]>([])
  const isActive = ref(false)

  watch(searchTerm, async (value) => {
    if (!value) return isActive.value = false
    if (value.length < 3) return searchResults.value = []
    isActive.value = true
    const { characters } = await GqlGetCharacters({ page: 1, name: value })
    searchResults.value = characters.results
  })

  router.beforeEach(() => {
    isActive.value = false
  })
</script>

<template>
  <div class="relative">
    <UInput type="search" v-model="searchTerm" placeholder="Search Character" size="lg"/>
    <UCard class="mt-2 resultados absolute top-10 w-full overflow-auto max-h-80" v-if="isActive">
      <ul class="p-0">
        <li v-for="result in searchResults" class="hover:opacity-50">
          <NuxtLink class="flex justify-start items-center" :to="`/character/${result.id}`">
            <img class="w-12 h-12 me-2 rounded-md" :src="result?.image" :alt="result?.name">
            <div>
              <p>{{ result?.name }}</p>
              <p class="text-sm mt-1 dark:text-slate-400 text-slate-600">Dimension: {{ result.origin.dimension ? result.origin.dimension : "Unknow"  }}</p>
            </div>
          </NuxtLink>
          <hr class="my-4"/>
        </li>
        <li v-if="searchResults.length === 0" class="text-center">No results found</li>
      </ul>
    </UCard>
  </div>
</template>

