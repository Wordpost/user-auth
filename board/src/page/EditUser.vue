<template>
  <div class="container">
    <h1 class="py-4">{{title}}</h1>
    <form @submit.prevent="userEdit">
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" v-model="getName" placeholder="Enter name" required>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" v-model="getEmail" placeholder="Enter email" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'EditUser',
  data () {
    return {
      title: 'Edit user'
    }
  },
  computed: {
    ...mapGetters([
      'getName',
      'getEmail',
      'getAva'
    ])
  },
  methods: {
    ...mapActions(['userEdit'])
  }
}
</script>

<style>

</style>
