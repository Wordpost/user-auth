<template>
  <div class="container">
    <h1>{{title}}</h1>
    <div class="card">
      <div class="col-auto">
        <img :src="user.ava" alt="Card image cap">
      </div>
      <div class="card-body">
        <h4 class="card-title">{{user.name}} {{user.surname}}</h4>
        <p class="card-text">{{user.email}}</p>
        <router-link class="btn btn-primary" :to="`/edit/${user.id}`">Edit</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ShowUser',
  data () {
    return {
      title: 'Show user',
      url: `http://localhost:3000/users/${this.$route.params.id}`,
      user: {}
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      axios.get(this.url)
        .then(res => {
          this.user = res.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
