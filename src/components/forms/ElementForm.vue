<template>
  <form @submit.prevent="sendForm">
    <div class="field has-addons">
      <div class="control" v-for="form in Object.keys(forms)" :key="form">
        <button class="button" v-shortkey.once="[form.charAt(0)]" @shortkey="loadForm(form)" @click.prevent="loadForm(form)">{{ form }}</button>
      </div>
    </div>
    <template v-if="type === 'slugline'">
      <div class="field has-addons">
        <element-field :config="{label: 'position'}" v-model="fields.position"></element-field>
        <element-field :config="{label: 'location', isExpanded: true}" v-model="fields.location"></element-field>
        <element-field :config="{label: 'time'}" v-model="fields.time"></element-field>
      </div>
    </template>
    <template v-if="type === 'action'">
      <div class="field">
        <element-field :config="{label: 'action', tag: 'textarea'}" v-model="fields.content"></element-field>
      </div>
    </template>
    <template v-if="type === 'dialogue'">
      <div class="field has-addons">
        <element-field :config="{label: 'character', isExpanded: true}" v-model="fields.character"></element-field>
        <element-field :config="{label: 'extention'}" v-model="fields.extention"></element-field>
        <element-field :config="{label: 'paranthetical'}" v-model="fields.paranthetical"></element-field>
      </div>
      <div class="field">
        <element-field :config="{label: 'speech', tag: 'textarea'}" v-model="fields.speech"></element-field>
      </div>
    </template>
    <template v-if="type === 'transition'">
      <div class="field">
        <element-field :config="{label: 'transition'}" v-model="fields.transition"></element-field>
      </div>
    </template>
    <div class="field">
      <div class="control">
        <button class="button is-primary" v-if="type">ctrl+enter</button>
      </div>
    </div>
    <pre>{{ fields }}</pre>
  </form>
</template>

<script>
import ElementField from './ElementField'

export default {
  components: { ElementField },
  data () {
    return {
      forms: {
        slugline: false,
        action: false,
        dialogue: false,
        transition: false
      },
      type: '',
      fields: {
        position: '',
        location: '',
        time: '',
        content: '',
        character: '',
        extention: '',
        paranthetical: '',
        transition: ''
      }
    }
  },
  methods: {
    loadForm (form) {
      // i want to change the this.form's bool here
      this.clearForm()
    },
    clearForm () {
      const fields = this.fields
      Object.keys(fields).forEach(v => { fields[v] = '' })
    },
    sendForm (el) {
      this.$emit('handleFields', el, this.type, this.fields)
      console.log('payload sent to parent component', el, this.type, this.fields)
    }
  }
}
</script>
