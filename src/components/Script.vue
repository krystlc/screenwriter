<template>
  <div id="container">
    <main class="content">
      <h1 class="title has-text-centered">{{ title }}</h1>
      <h6>Fade in:</h6>
      <template v-for="(field, index) in script">
        <component :is="field.type" :key="index" :content="field.content" @click.native="deleteField(index)" :id="`el-${index}`"></component>
      </template>
    </main>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Screenwriter</h1>
          <h2 class="subtitle">A bad hombre project</h2>
            <div class="field has-addons">
              <div class="control">
                <button class="button" v-shortkey.once="['s']" @shortkey="loadForm('slugline')" @click.prevent="loadForm('slugline')">(s)lugline</button>
              </div>
              <div class="control">
                <button v-shortkey.once="['a']" @shortkey="loadForm('action')" class="button" @click.prevent="loadForm('action')">(a)ction</button>
              </div>
              <div class="control">
                <button v-shortkey.once="['d']" @shortkey="loadForm('dialogue')" class="button" @click.prevent="loadForm('dialogue')">(d)ialogue</button>
              </div>
              <div class="control">
                <button v-shortkey.once="['t']" @shortkey="loadForm('scene-transition')" class="button" @click.prevent="loadForm('scene-transition')">(t)ransition</button>
              </div>
            </div>
            <component :is="input.type" @sendFields="onSubmit"></component>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Slugline, Action, Dialogue, SceneTransition } from '@/components/elements'
import { SluglineForm, ActionForm, DialogueForm, SceneTransitionForm } from '@/components/forms'
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
    SceneTransitionForm
  },
  data () {
    return {
      title: 'The JSON Files',
      script: DemoScript,
      input: {
        type: ''
      }
    }
  },
  methods: {
    onSubmit (fields) {
      this.script.push(fields)
      this.input.type = null
    },
    loadForm (fieldType) {
      this.input.type = fieldType + '-form'
    },
    deleteField (index) {
      this.script.splice(index, 1)
    }
  },
  updated () {
    document.getElementById(`el-${this.script.length - 1}`).scrollIntoView()
  }
}
</script>
