<template>
  <div class="hello">
    <div class="container">
      <h1>Hai Welcome to Manggo Tree</h1>
      <button type="button" name="button" @click="startGrow" class="btn btn-primary">Start Growing</button>
      <ul>
        <li>{{ status }}</li>
        <li>{{ isDead }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      isDead: '',
      status: ''
    }
  },
  mounted: function () {
    this.getData()
  },
  methods: {
    ...mapActions([
      'start'
    ]),
    getData () {
      this.$db.on('value', (mango) => {
        this.status = mango.val().status
        this.isDead = mango.val().isDead
      })
    },
    startGrow () {
      this.$db.set({ isDead: '', status: '' })
      this.start()
    }
  }
}
</script>
<style scoped>

</style>
