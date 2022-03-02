<template>
  <div
    class="bg-base-100 rounded-box col-span-1 row-span-1 mx-2 flex w-72 flex-shrink-0 flex-col justify-center gap-4 place-self-start p-4 shadow-xl xl:mx-0 xl:w-full"
  >
    <div class="px-6 pt-6">
      <div class="text-xl font-extrabold">{{ props.title}}</div>
      <div class="text-base-content my-4 text-xs text-opacity-60">
        {{ props.abstract }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    abstract: String
})
</script>
