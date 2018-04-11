<template>
  <form @submit.prevent="sendFields">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          type="text"
          ref="input"
          placeholder="Character name"
          class="input"
          v-model="character"
        >
      </div>
      <div class="control">
        <input
          type="text"
          placeholder="Extention"
          class="input"
          v-model="extention"
        >
      </div>
      <div class="control">
        <input
          type="text"
          placeholder="Paranthetical"
          class="input"
          v-model="paranthetical"
        >
      </div>
    </div>
    <div class="field">
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Lines"
          v-model="speech"
          @keyup.ctrl.enter="sendFields"
        ></textarea>
      </div>
    </div>
    <div class="field">
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
      extention: '',
      character: '',
      paranthetical: '',
      speech: ''
    }
  },
  methods: {
    sendFields () {
      this.$emit('sendFields', {
        element: 'dialogue',
        fields: {
          extention: this.extention,
          character: this.character,
          paranthetical: this.paranthetical,
          content: this.speech
        }
      })
    }
  },
  mounted () {
    this.$refs.input.focus()
  }
}
</script>
