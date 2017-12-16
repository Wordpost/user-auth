<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="/">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/list">Users list</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/add">Add user</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-if="isLoggedIn">
            <a href="#" @click.prevent="logout" class="nav-link">Logout</a>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link class="nav-link" to="/signup">Sign up</router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link class="nav-link" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link class="nav-link" :to="`/user/${getId}`">{{getName}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav> 
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      title: 'Header'
    }
  },
  watch: {
    'isLoggedIn': 'isLogin'
  },
  methods: {
    ...mapActions(['logout']),
    isLogin () {
      if (!this.isLoggedIn) {
        this.$router.push('/')
      }
    }
  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
      'getName',
      'getId'
    ])
  }
}
</script>

<style>

</style>
