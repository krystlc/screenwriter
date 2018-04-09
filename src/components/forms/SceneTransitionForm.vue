<template>
  <div class="field has-addons">
    <div class="control is-expanded">
      <input
        ref="input"
        type="text"
        placeholder="Transition"
        class="input"
        v-model="body"
        @keyup.enter="sendFields"
      >
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
      body: ''
    }
  },
  methods: {
    sendFields () {
      this.$emit('sendFields', {
        type: 'scene-transition',
        content: {
          body: this.body
        }
      })
    }
  },
  mounted () {
    this.$refs.input.focus()
  }
}
</script>
