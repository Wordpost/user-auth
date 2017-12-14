<template>
  <div class="container">
    <h1>{{title}}</h1>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" v-model="user.name" placeholder="Enter name" required>
      </div>
      <div class="form-group">
        <label>Surname</label>
        <input type="text" class="form-control" v-model="user.surname" placeholder="Enter surname" required>
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
export default {
  name: 'EditUser',
  data () {
    return {
      title: 'Edit user',
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
    },
    submit () {
      axios.put(`http://localhost:3000/users/${this.user.id}`, this.user)
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
