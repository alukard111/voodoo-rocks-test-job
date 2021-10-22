<template>
  <div class="card-component">
    <div class="card-component__wrapper">
      <h1 class="card-component__title">
        {{ title }}
      </h1>
      <p class="card-component__description">
        {{ description }}
      </p>
      <p class="card-component__author">
        {{ author }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String || Number,
      require: false,
      default: '',
    },
    description: {
      type: String || Number,
      require: false,
      default: '',
    },
    author: {
      type: String || Number,
      require: false,
      default: '',
    },
  }
}
</script>



<style lang="postcss" scoped>
@layer base {
  .card-component {
    @apply
      w-auto
      m-2
    ;
  }
  .card-component__wrapper {
    @apply
      p-4

      w-full

      bg-white
      rounded-md
      shadow-md
    ;
  }
  .card-component__title {
    @apply
      font-bold
      text-blue-500
    ;
  }
  .card-component__description {
    @apply
      font-medium
      text-gray-700

      break-all
      my-3
    ;
  }
  .card-component__author {
    @apply
      text-gray-400

      break-all
    ;
  }


}
</style>