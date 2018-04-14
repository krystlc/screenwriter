<template>
  <form @submit.prevent="sendForm">
    <div class="field has-addons">
      <div class="control" v-for="form in forms" :key="form">
        <button class="button" v-shortkey.once="[form.charAt(0)]" @shortkey="loadForm(form)" @click.prevent="loadForm(form)">{{ form }}</button>
      </div>
    </div>
    <template v-if="displayForm === 'slugline'">
      <div class="field has-addons">
        <element-field :config="{label: 'position'}" v-model="fields.position"></element-field>
        <element-field :config="{label: 'location', isExpanded: true, isRequired: true}" v-model="fields.location"></element-field>
        <element-field :config="{label: 'time'}" v-model="fields.time"></element-field>
      </div>
    </template>
    <template v-if="displayForm === 'action'">
      <div class="field">
        <element-field :config="{label: 'action', tag: 'textarea', isRequired: true}" v-model="fields.content"></element-field>
      </div>
    </template>
    <template v-if="displayForm === 'dialogue'">
      <div class="field has-addons">
        <element-field :config="{label: 'character', isExpanded: true, isRequired: true}" v-model="fields.character"></element-field>
        <element-field :config="{label: 'extention'}" v-model="fields.extention"></element-field>
        <element-field :config="{label: 'paranthetical'}" v-model="fields.paranthetical"></element-field>
      </div>
      <div class="field">
        <element-field :config="{label: 'speech', tag: 'textarea', isRequired: true}" v-model="fields.content"></element-field>
      </div>
    </template>
    <template v-if="displayForm === 'transition'">
      <div class="field">
        <element-field :config="{label: 'transition', isRequired: true}" v-model="fields.transition"></element-field>
      </div>
    </template>
    <div class="field" v-if="displayForm">
      <div class="control">
        <button class="button is-primary">ctrl+enter</button>
      </div>
    </div>
  </form>
</template>

<script>
import ElementField from './ElementField'

const forms = ['slugline', 'action', 'dialogue', 'transition']

export default {
  components: { ElementField },
  data () {
    return {
      forms,
      fields: {
        position: '',
        location: '',
        time: '',
        content: '',
        character: '',
        extention: '',
        paranthetical: '',
        transition: ''
      },
      displayForm: ''
    }
  },
  methods: {
    loadForm (form) {
      this.clearForm()
      this.displayForm = form
    },
    clearForm () {
      const fields = this.fields
      Object.keys(fields).forEach(v => { fields[v] = '' })
    },
    sendForm () {
      const fielset = {
        element: this.displayForm,
        fields: {
          position: this.fields.position,
          location: this.fields.location,
          time: this.fields.time,
          content: this.fields.content,
          character: this.fields.character,
          extention: this.fields.extention,
          paranthetical: this.fields.paranthetical,
          transition: this.fields.transition
        }
      }
      Object.keys(fielset.fields).forEach((key) => (fielset.fields[key] === '') && delete fielset.fields[key])
      this.$emit('payload', fielset)
      this.displayForm = ''
      this.clearForm()
    },
    test () {
      console.log('wee')
    }
  }
}
</script>
