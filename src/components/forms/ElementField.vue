<template>
  <div class="control" :class="{'is-expanded': config.isExpanded}">
    <template v-if="config.tag === 'textarea'">
      <textarea class="textarea" :value="value" :placeholder="config.label" @input="updateField" ref="textInput"></textarea>
    </template>
    <template v-else>
      <input type="text" class="input" :value="value" :placeholder="config.label" @input="updateField" ref="textInput">
    </template>
  </div>
</template>

<script>
export default {
  props: ['config', 'value'],
  methods: {
    updateField () {
      this.$emit('input', this.$refs.textInput.value)
    }
  }
}
</script>
