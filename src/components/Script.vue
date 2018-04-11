<template>
  <div id="container">
    <main class="content">
      <h1 class="title has-text-centered">{{ doc.title }}</h1>
      <h6>Fade in:</h6>
      <template v-for="(el, index) in doc.script">
        <component :is="el.element" :key="index" :fields="el.fields" @click.native="editField(index)" :id="`el-${index}`"></component>
      </template>
    </main>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Screenwriter</h1>
          <h2 class="subtitle">A bad hombre project</h2>
          <element-form></element-form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Slugline, Action, Dialogue, SceneTransition } from '@/components/elements'
import { SluglineForm, ActionForm, DialogueForm, SceneTransitionForm } from '@/components/forms'
import ElementForm from '@/components/forms/ElementForm'
import DemoScript from '../../static/api/demo.json'

export default {
  components: {
    Slugline,
    Action,
    Dialogue,
    SceneTransition,
    SluglineForm,
    ActionForm,
    DialogueForm,
    SceneTransitionForm,
    ElementForm
  },
  data () {
    return {
      doc: DemoScript,
      input: {
        type: ''
      }
    }
  },
  mounted () {
  },
  methods: {
    onSubmit (fields) {
      this.doc.script.push(fields)
      this.input.type = null
    },
    loadForm (fieldType) {
      this.input.type = fieldType + '-form'
    },
    editField (index) {
      console.log('coming soon')
    }
  }
}
</script>
