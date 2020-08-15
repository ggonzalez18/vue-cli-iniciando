<template>
  <div>
    <h1 v-text="title"></h1>
    <router-link :to="paginate(false)" class="btn btn-info mr-3">Anterior</router-link>
    <router-link :to="paginate(true)" class="btn btn-info">Siguiente</router-link>
    <br>
    <br>
    <router-link :to="{name:'Comments'}">Comentar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    title () {
      return `Este es el blog n°${this.$route.params.post}`
    }
  },
  methods: {
    paginate (dir) {
      const currentPost = parseInt(this.$route.params.post)
      if (dir) {
        return `/blog/${currentPost + 1}`
      } else {
        return currentPost > 1 ? `/blog/${currentPost - 1}` : `/blog/${currentPost}`
      }
    }
  }
}
</script>

<style>
</style>
