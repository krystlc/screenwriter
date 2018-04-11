<template>
  <form @submit.prevent="sendFields">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          ref="input"
          type="text"
          placeholder="Transition"
          class="input"
          v-model="body"
          @keyup.enter="console.log('wtf?')"
        >
      </div>
      <div class="control">
        <button
          class="button is-primary"
          @click.prevent="sendFields"
        >Ctrl+Enter</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      body: null
    }
  },
  methods: {
    sendFields () {
      if (this.body) {
        this.$emit('sendFields', {
          element: 'scene-transition',
          fields: {
            transition: this.body
          }
        })
      } else {
        console.log(this.body, 'nothing to see here')
      }
    }
  },
  mounted () {
    this.$refs.input.focus()
  }
}
</script>
