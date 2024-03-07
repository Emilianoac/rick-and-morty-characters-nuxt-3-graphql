<script lang="ts" setup> 
  const data = reactive({
    characters: [] as Character[],
    count: 0,
    page: 1,
    currentName: "",
  })

  async function getData(page: number, name: string) {
    if (name && name !== data.currentName ) {
      data.page = 1;
      data.currentName = name;
    }
    const { characters } = await GqlGetCharacters({ page: page, name: name});
    data.characters = characters.results
    data.count = characters.info.count
  }
  await getData(data.page, "")

  async function toggleRadio(value: string) {
    if (data.currentName === value) {
      data.currentName = "";
      await getData(1, "");
    } else {
      await getData(1, value);
    }
  };
</script>

<template>
  <UContainer class="my-10">
    <span class="text-xl font-bold mb-4 block">Filter by character</span>
    <div class="grid md:grid-cols-5 gap-4 mb-5">
      <input 
        @click="toggleRadio('rick')"
        v-model="data.currentName" 
        hidden
        class="filter-input w-full p-2" 
        type="radio" 
        id="rick"
        name="filter"
        value="rick"
      />
      <label 
        class="filter-label  flex items-center p-2 border-2 cursor-pointer border-slate-400 dark:border-slate-700 rounded-lg bg-slate-200 dark:bg-slate-900" 
        for="rick">
        <UAvatar
          size="md"
          src="/rick.jpg"
          alt="Avatar"
        />
        <span class="ml-2 text-sm font-bold uppercase">Rick</span>
      </label>

      <input 
        @click="toggleRadio('morty')"
        v-model="data.currentName" 
        hidden
        class="filter-input w-full p-2" 
        type="radio" 
        id="morty"
        name="filter"
        value="morty"
      />
      <label 
        class="filter-label flex items-center p-2 border-2 cursor-pointer border-slate-400 dark:border-slate-700 rounded-lg bg-slate-200 dark:bg-slate-900" 
        for="morty">
        <UAvatar
          size="md"
          src="/morty.jpg"
          alt="Avatar"
        />
        <span class="ml-2  text-sm font-bold uppercase">Morty</span>
      </label>

      <input 
        @click="toggleRadio('summer')"
        v-model="data.currentName" 
        hidden
        class="filter-input w-full p-2" 
        type="radio" 
        id="summer"
        name="filter"
        value="summer"
      />
      <label 
        class="filter-label flex items-center p-2 border-2 cursor-pointer border-slate-400 dark:border-slate-700 rounded-lg bg-slate-200 dark:bg-slate-900" 
        for="summer">
        <UAvatar
          size="md"
          src="/summer.jpg"
          alt="Avatar"
        />
        <span class="ml-2  text-sm font-bold uppercase">Summer</span>
      </label>

      <input 
        @click="toggleRadio('beth')"
        v-model="data.currentName" 
        hidden
        class="filter-input w-full p-2" 
        type="radio" 
        id="beth"
        name="filter"
        value="beth"
      />
      <label 
        class="filter-label flex items-center p-2 border-2 cursor-pointer border-slate-400 dark:border-slate-700 rounded-lg bg-slate-200 dark:bg-slate-900" 
        for="beth">
        <UAvatar
          size="md"
          src="/beth.jpg"
          alt="Avatar"
        />
        <span class="ml-2  text-sm font-bold uppercase">Beth</span>
      </label>

      <input 
        @click="toggleRadio('jerry')"
        v-model="data.currentName" 
        hidden
        class="filter-input w-full p-2" 
        type="radio" 
        id="jerry"
        name="filter"
        value="jerry"
      />
      <label 
        class="filter-label flex items-center p-2 border-2 cursor-pointer border-slate-400 dark:border-slate-700 rounded-lg bg-slate-200 dark:bg-slate-900" 
        for="jerry">
        <UAvatar
          size="md"
          src="/jerry.jpg"
          alt="Avatar"
        />
        <span class="ml-2  text-sm font-bold uppercase">Jerry</span>
      </label>


    </div>
    <UPagination  
      @click="getData(data.page, data.currentName)" 
      class="mb-5 justify-center md:justify-end" 
      v-model="data.page" 
      size="md"
      :page-count="20" 
      :total="data.count" 
    />  
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <CardCharacter v-for="character in data.characters" :data="character"/>
    </div>
    <UPagination  
      @click="getData(data.page, data.currentName)" 
      class="mt-5 justify-center md:justify-end" 
      v-model="data.page" 
      size="md"
      :page-count="20" 
      :total="data.count" 
    />  
  </UContainer>
</template>

<style lang="scss" scoped>
  @for $i from 1 through 20 {
    .filter-input:nth-of-type(#{$i}):checked ~ label:nth-of-type(#{$i}) {
      border: 2px solid #4ade80;
    }
  }
</style>

