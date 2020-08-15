<template>
  <div>
    <h1>hola no estoy disponible</h1>
    <p>{{route}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    route () {
      return this.$route.path
    }
  }
}
</script>

<style>
</style>
