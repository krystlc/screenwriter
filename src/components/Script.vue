<template>
  <div id="container">
    <main class="content">
      <h1 class="title has-text-centered">{{ doc.title }}</h1>
      <h6>Fade in:</h6>
      <template v-for="(el, index) in doc.script">
        <h6 v-if="el.element === 'slugline'" :key="index" :id="`el-${index}`">{{ el.fields.position }} {{ el.fields.location }} - {{ el.fields.time }}</h6>
        <p v-else-if="el.element === 'action'" :key="index" :id="`el-${index}`">{{ el.fields.content }}</p>
        <blockquote v-else-if="el.element === 'dialogue'" :key="index" :id="`el-${index}`">
          <header class="has-text-centered">
            <h6>{{ el.fields.character }} <span v-if="el.fields.extention">({{ el.fields.extention }})</span></h6>
            <em v-if="el.fields.paranthetical.length">({{ el.fields.paranthetical }})</em>
          </header>
          <p>{{ el.fields.content }}</p>
        </blockquote>
        <h6 class="has-text-right" v-else-if="el.element === 'transition'" :key="index" :id="`el-${index}`">{{ el.fields.transition }}:</h6>
      </template>
    </main>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Screenwriter</h1>
          <h2 class="subtitle">A bad hombre project</h2>
          <element-form @payload="payload"></element-form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DemoScript from '../../static/api/demo.json'
import ElementForm from '@/components/forms/ElementForm'

export default {
  components: { ElementForm },
  data () {
    return {
      doc: DemoScript
    }
  },
  methods: {
    editField (index) {
      console.log('editing function coming soon!', this.doc.script[index])
    },
    payload (fieldset) {
      this.doc.script.push(fieldset)
      document.getElementById('container').scrollIntoView(false)
    }
  }
}
</script>
