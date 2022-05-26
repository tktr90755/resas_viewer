<template lang="pug">
  div
    Tutorial
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: [ 'index' ],
  name: 'IndexPage',
  created () {
    const age = this.$accessor.age.age
    this.$accessor.age.hoge()
  }
})
</script>
