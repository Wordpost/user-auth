<template>
  <div class="container">
    <h1>{{title}}</h1>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" v-model="user.displayName" placeholder="Enter name" required>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" v-model="user.email" placeholder="Enter email" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'AddUser',
  data () {
    return {
      title: 'Add user',
      url: 'http://localhost:3000/users/',
      user: {
        displayName: '',
        email: '',
        createdAt: new Date(),
        ava: 'http://i.imgur.com/xmm2bjD.png'
      }
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    submit () {
      axios.post(this.url, this.user)
        .then(res => {
          console.log(res)
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
