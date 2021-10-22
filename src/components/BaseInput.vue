<template>
  <div class="input-component">
    <div class="input-component__wrapper">
      <label class="input-component__label">
        <img class="input-component__icon" src="@/assets/svg/search.svg" alt="search">
        <input 
          class="input-component__input"
          type="text"
          :value="value"
          @input="$emit('input', $event.target.value)"
          >
          <!-- @click="$emit('input')" -->
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      require: false,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped>
@layer base {
  .input-component {
    @apply
      w-auto
      m-2
    ;
  }
  
  .input-component__label {
    @apply
      flex
    ;
  }

  .input-component__input {
    @apply
      w-full
      rounded-r-lg
      p-1
      outline-none

      transition
      duration-300
      ease-in-out

      focus:ring-4
      focus:ring-blue-300
    ;
  }

  .input-component__icon {
    @apply 
      w-8
      h-8
      p-1
  
      bg-white
    ;
  }
}
</style>