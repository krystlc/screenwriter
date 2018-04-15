<template>
  <div>
    <div class="field has-addons">
      <div class="control" v-for="form in forms" :key="form">
        <button class="button" v-shortkey.once="[form.charAt(0)]" @shortkey="loadForm(form)" @click.prevent="loadForm(form)">{{ form }}</button>
      </div>
    </div>
    <form @submit.prevent="validateForm">
      <template v-if="displayForm === 'slugline'">
        <div class="field has-addons">
          <element-field :config="{label: 'position'}" v-model="fields.position" ref="focus"></element-field>
          <element-field :config="{label: 'location', isExpanded: true, isRequired: true}" v-model="fields.location"></element-field>
          <element-field :config="{label: 'time'}" v-model="fields.time"></element-field>
        </div>
      </template>
      <template v-if="displayForm === 'action'">
        <div class="field">
          <element-field :config="{label: 'action', tag: 'textarea', isRequired: true}" v-model="fields.content" ref="focus"></element-field>
        </div>
      </template>
      <template v-if="displayForm === 'dialogue'">
        <div class="field has-addons">
          <element-field :config="{label: 'character', isExpanded: true, isRequired: true}" v-model="fields.character" ref="focus"></element-field>
          <element-field :config="{label: 'extention'}" v-model="fields.extention"></element-field>
          <element-field :config="{label: 'paranthetical'}" v-model="fields.paranthetical"></element-field>
        </div>
        <div class="field">
          <element-field :config="{label: 'speech', tag: 'textarea', isRequired: true}" v-model="fields.content"></element-field>
        </div>
      </template>
      <template v-if="displayForm === 'transition'">
        <div class="field">
          <element-field :config="{label: 'transition', isRequired: true}" v-model="fields.transition" ref="focus"></element-field>
        </div>
      </template>
      <div class="field" v-if="displayForm">
        <div class="control">
          <button class="button is-primary">ctrl+enter</button>
          <button class="button is-danger" @click.prevent="handleDelete" v-if="index !== ''">delete</button>
          <button class="button" disabled="disabled" v-shortkey="['ctrl','space']" @shortkey="focusField">ctrl+space</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ElementField from './ElementField'

const forms = ['slugline', 'action', 'dialogue', 'transition']

export default {
  props: ['edit'],
  components: { ElementField },
  data () {
    return {
      forms,
      index: '',
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
    clearFields () {
      const fields = this.fields
      Object.keys(fields).forEach(v => { fields[v] = '' })
      this.index = ''
    },
    loadForm (form) {
      this.clearFields()
      this.displayForm = form
    },
    clearForm () {
      this.displayForm = ''
    },
    validateForm () {
      const fieldset = {
        index: this.index,
        data: {
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
      }
      Object.keys(fieldset.data.fields).forEach((key) => (fieldset.data.fields[key] === '') && delete fieldset.data.fields[key])
      this.sendForm(fieldset)
    },
    sendForm (fieldset) {
      this.$emit('payload', fieldset)
      this.clearForm()
    },
    focusField () {
      this.$refs.focus.$el.childNodes[0].focus()
    },
    handleDelete () {
      this.$emit('delete', this.index)
      this.clearFields()
      this.clearForm()
    }
  },
  watch: {
    edit: function (data) {
      this.index = data.index
      this.displayForm = data.fieldset.element
      this.fields = data.fieldset.fields
    }
  }
}
</script>
