<template>
  <div class="container">
    <h1>{{title}}</h1>
    <div class="row">
      <div class="col-md-3 mb-4" v-for="user in users" :key="user.id">
        <div class="card">
          <img class="card-img-top" :src="user.ava ? user.ava : 'http://i.pravatar.cc/300'" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">{{user.displayName ? user.displayName : 'No name'}}</h4>
            <p class="card-text">{{user.email}}</p>
            <p class="card-text">{{formatDate(user.createdAt, user.id)}}</p>
            <router-link class="btn btn-primary" :to="`/user/${user.id}`">More</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UsersList',
  data () {
    return {
      title: 'Users list',
      url: 'http://localhost:3000/users/',
      users: []
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      axios.get(this.url)
        .then(res => {
          this.users = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    formatDate (data, id) {
      let arg = new Date(data)
      return `${arg.getFullYear()}.${arg.getMonth()}.${arg.getDate()}`
    }
  }
}
</script>

<style>

</style>
