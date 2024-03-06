<script lang="ts" setup>
  const route = useRoute()
  const {character}  = await GqlGetCharacter({ id: route.params.id as string });

  useSeoMeta({
    title: `${character.name} | Rick and Morty Characters`,
    description: `Rick and Morty character ${character.name} information`,
    ogTitle: `${character.name} | Rick and Morty Characters`,
    ogDescription: `Rick and Morty character ${character.name} information`,
    ogImage: character.image,
    twitterCard: "summary_large_image",
  })
</script>

<template>
  <UContainer class="mt-5">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div>
        <UCard class="sticky top-20" >
          <h1 class="text-3xl uppercase font-bold text-center">{{ character.name }}</h1>
          <img class="max-w-full w-44 my-5 rounded-full mx-auto":src="character.image">
          <dd class="mt-5">
            <dt class="font-bold">Status</dt>
            <dd>{{ character.status }}</dd>
            <hr class="my-4">
            <dt class="font-bold">Gender</dt>
            <dd>{{ character.gender }} </dd>
            <hr class="my-4">
            <dt class="font-bold">Species</dt>
            <dd>{{ character.species }} </dd>
            <hr class="my-4">
            <dt class="font-bold">Dimension</dt>
            <dd>{{ character.location.dimension ? character.location.dimension : "Unknow" }} </dd>
          </dd>
        </UCard>
      </div>
      <div class="md-col-span-full lg:col-span-2">
        <div class="flex justify-between items-center">
          <h2 class="text-2xl font-bold">Episodes </h2>
          <p>Total: <strong> {{ character.episode.length }}</strong> </p>
        </div>
        <ul class="mt-5">
          <li v-for="episode in character.episode">
            <dd>
              <dt class="font-bold">{{ episode.name }}</dt>
              <dd class="flex items-center text-sm mt-1 dark:text-slate-300 text-zinc-600"> <Icon class="me-2" name="fa:calendar"/> {{ episode.air_date }} </dd>
              <hr class="my-4"/>
            </dd>
          </li>
        </ul>
      </div>
    </div>
  </UContainer>
</template>
