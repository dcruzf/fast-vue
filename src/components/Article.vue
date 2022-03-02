<template>
    <div class="bg-base-200 flex flex-col items-center gap-20 py-20">
    <div
      class="text-base-content glass xl:rounded-box -mt-48 grid max-w-screen-xl gap-4 bg-opacity-60 xl:pb-0"
    >
      <div class="px-2 pt-2">
        <div class="text-primary-content rounded-box space-x-1">
          <div class="mx-2 flex-1 justify-center px-2 md:flex md:justify-start">
            <span class="text-2xl font-bold"> {{ props.title }}</span>
          </div>
        </div>
      </div>
      <div
        id="component-demo"
        class="flex w-full items-center px-10 pt-1 pb-10"
      >
        <div>
            {{ props.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    text: String
})
</script>
