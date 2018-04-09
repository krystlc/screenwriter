<template>
  <div class="field has-addons">
    <div class="control">
      <span class="select">
        <select v-model="position" ref="input">
          <option>Ext.</option>
          <option>Int.</option>
        </select>
      </span>
    </div>
    <div class="control is-expanded">
      <input
        type="text"
        class="input"
        placeholder="Location"
        required
        v-model="location"
        @keyup.enter="sendFields"
      >
    </div>
    <div class="control">
      <span class="select">
        <select v-model="time">
          <option>Day</option>
          <option>Afternoon</option>
          <option>Night</option>
        </select>
      </span>
    </div>
    <div class="control">
      <button
        class="button is-primary"
        @click.prevent="sendFields"
      >Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      position: '',
      location: '',
      time: ''
    }
  },
  methods: {
    sendFields () {
      this.$emit('sendFields', {
        type: 'slugline',
        content: {
          position: this.position,
          location: this.location,
          time: this.time
        }
      })
    }
  },
  mounted () {
    this.$refs.input.focus()
  }
}
</script>
