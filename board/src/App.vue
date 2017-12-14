<template>
  <div id="app">
    <page-header/>
    <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
</style>
