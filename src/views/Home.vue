<template>
  <div class="home">
    <div class="home__box-input-component">
      <div class="home__base-input-component">
        <BaseInput 
          v-model="value"
        />
      </div>
    </div>
    <div class="home__box-card-component">
      <BaseCard 
        v-for="card in getFilterPosts"
        :key="card.id"
        :title="card.title"
        :description="card.body"
        :author="card.authorName"
      />
    </div>
  </div>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
import BaseInput from '@/components/BaseInput.vue'

export default {
  name: 'Home',
  components: {
    BaseCard,
    BaseInput,
  },

  data: () => ({
    value: '',
  }),


  beforeMount() {
    this.$store.dispatch('getAllUsers')
    this.$store.dispatch('getAllPosts')   
  },


  computed: {
    getPosts() {
      if (this.$store.getters.allPosts != null) {
        this.addAuthorNamePosts
        return this.$store.getters.allPosts
      }
    },

    getUsers() {
      if (this.$store.getters.allUsers != null) {
        return this.$store.getters.allUsers
      }
    },

    addAuthorNamePosts() {
      if (!this.$store.getters.allPosts.every(this.authorNameIsPresent)) {
        return this.$store.commit('addAuthorNamePosts')
      }
    },

    getFilterPosts() {
      if (Boolean(this.value) && typeof(this.value) === 'string') {
        return this.getPosts.filter(item =>  item.authorName.toLowerCase().includes(this.value.toLowerCase()))  
      }
      return this.getPosts
    }
  },

  methods: {
    authorNameIsPresent(element) {
      return Boolean(element.authorName)
    }
  }

}
</script>

<style lang="postcss" scoped>
@layer base {
  .home {
    @apply
      container
      h-full
      mx-auto

      bg-blue-100
    ;
  }

  .home__box-input-component {
    @apply
      grid
      sm:grid-cols-3
      grid-cols-1
    ;
  }
  
  .home__base-input-component {
    @apply
      sm:col-start-2
    ;
  }

  .home__box-card-component {
    @apply
      grid 
      lg:grid-cols-3
      sm:grid-cols-2
      grid-cols-1
    ;
  }
}
</style>
