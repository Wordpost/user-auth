<template>
  <div class="container">
    <h1 class="py-4">{{title}}</h1>
    <div class="row">
      <div class="col-auto">
        <div class="card">
          <div class="col-auto p-0">
            <img :src="getAva" alt="Card image cap">
          </div>
          <div class="card-body">
            <h4 class="card-title">{{getName}}</h4>
            <p class="card-text">{{getEmail}}</p>
            <router-link class="btn btn-primary" :to="`/edit/${getId}`">Edit</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'ShowUser',
  data () {
    return {
      title: 'Show user',
      user: {}
    }
  },
  mounted () {},
  computed: {
    ...mapGetters([
      'getName',
      'getEmail',
      'getId',
      'getAva'
    ])
  },
  methods: {}
}
</script>

<style>

</style>
