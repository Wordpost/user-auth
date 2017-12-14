<template>
  <div class="container">
    <form @submit.prevent="signup()">
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" v-model="user.displayName" placeholder="Enter name">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" v-model="user.email" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" v-model="user.password" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'signUp',
  data () {
    return {
      url: 'http://localhost:3000/users/',
      user: {
        displayName: 'bob',
        email: 'word@mail.ru',
        password: '123456'
      }
    }
  },
  methods: {
    signup () {
      axios.post(this.url, this.user)
        .then(res => {
          if (res.status === 200) {
            this.$router.push('/login')
          }
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
