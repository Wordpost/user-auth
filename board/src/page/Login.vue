<template>
  <div class="container">
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" v-model="user.email" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" v-model="user.password" placeholder="Password">
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input type="checkbox" v-model="user.checked" class="form-check-input">
          Check me out
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: 'word1@mail.ru',
        password: '123456'
      }
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },

  methods: {
    login () {
      this.$store.dispatch('login', [this, this.user])
    }
  }
}
</script>

<style>

</style>
