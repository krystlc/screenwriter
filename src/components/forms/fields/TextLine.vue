<template>
  <div>
    <input
      type="text"
      class="input"
      ref="textInput"
      :value="value"
      @input="updateField"
      :placeholder="field.charAt(0).toUpperCase() + field.substr(1)"
    >
    <ul v-show="null">
      <li>just chilling</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['field', 'value'],
  methods: {
    updateField () {
      this.$emit('input', this.$refs.textInput.value)
    }
  }
}
</script>
