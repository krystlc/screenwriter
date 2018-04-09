<template>
  <div>
    <div class="field">
      <div class="control">
        <textarea
          ref="input"
          class="textarea"
          placeholder="Scene description"
          v-model="body"
          @keyup.ctrl.enter="sendFields"
        ></textarea>
      </div>
    </div>
    <div class="field">
      <div class="control">
      <button
        class="button is-primary"
        @click.prevent="sendFields"
      >Submit</button>
      </div>
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
        type: 'action',
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
