<script lang="ts" setup> 

  const characters = ref([])
  const page = ref(1)

  async function getData(page: number) {
    const { characters: data } = await GqlGetCharacters({ page: page });
    characters.value = data as any
  }
  await getData(page.value)
</script>

<template>
  <UContainer class="my-10">
    <UPagination  
      @click="getData(page)" 
      class="mb-5 justify-end" 
      v-model="page" 
      size="lg"
      :page-count="20" 
      :total="characters.info.count" 
    />  
    <div class="grid sm:grid-cols-4 gap-4">
      <UCard v-for="character in characters.results">
        <img class="mx-auto" :src="character.image"/>
        <template #footer>
          <h3 class="font-bold">{{ character.name }}</h3>
        </template>
      </UCard>
    </div>
    <UPagination  
      @click="getData(page)" 
      class="mt-5 justify-end" 
      v-model="page" 
      size="lg"
      :page-count="20" 
      :total="characters.info.count" 
    />  
  </UContainer>
  
</template>




