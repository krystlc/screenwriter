<template>
  <div class="control" :class="{'is-expanded': config.isExpanded}">
    <template v-if="config.tag === 'textarea'">
      <textarea
        class="textarea"
        :value="value"
        :placeholder="config.label"
        :required="config.isRequired"
        :autofocus="focus"
        @input="updateField"
        ref="textInput"
      ></textarea>
    </template>
    <template v-else>
      <input
        type="text"
        class="input"
        :value="value"
        :placeholder="config.label"
        :required="config.isRequired"
        :autofocus="focus"
        @input="updateField"
        ref="textInput"
      >
    </template>
  </div>
</template>

<script>
export default {
  props: ['config', 'value', 'focus'],
  methods: {
    updateField () {
      this.$emit('input', this.$refs.textInput.value)
    }
  }
}
</script>
