<template>
  <div id="container">
    <main class="content">
      <h1 class="title has-text-centered">{{ title }}</h1>
      <h6>Fade in:</h6>
      <div v-for="(field, i) in script" :key="i" :id="`el-${i}`">
        <h6 v-if="field.type === 'slugline'" class="slugline">
          {{ field.content.position }} {{ field.content.location }} — {{ field.content.time }}
        </h6>
        <p v-if="field.type === 'action'" class="action">
          {{ field.content.body }}
        </p>
        <blockquote v-if="field.type === 'dialogue'">
          <h6 class="has-text-centered">{{ field.content.character }} <span v-if="field.content.extention">({{ field.content.extention }})</span></h6>
          <span v-if="field.content.paranthetical">({{ field.content.paranthetical }})</span>
          <p>{{ field.content.speech }}</p>
        </blockquote>
        <h6 v-if="field.type === 'transition'" class="has-text-right">
          {{ field.content }}:
        </h6>
      </div>
    </main>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Screenwriter</h1>
          <h2 class="subtitle">A bad hombre project</h2>
          <form @submit.prevent="test">
            <div>
              <button v-shortkey.once="['s']" @shortkey="input.type = 'slugline'" class="button" disabled>(s) Slugline</button>
              <button v-shortkey.once="['a']" @shortkey="input.type = 'action'" class="button" disabled>(a) Action</button>
              <button v-shortkey.once="['d']" @shortkey="input.type = 'dialogue'" class="button" disabled>(d) Dialogue</button>
              <button v-shortkey.once="['t']" @shortkey="input.type = 'transition'" class="button" disabled>(t) Transition</button>
            </div>
            <div>
              <div v-if="input.type === 'slugline'" class="field has-addons">
                <div class="control is-expanded">
                  <input
                    ref="input"
                    type="text"
                    placeholder="Slugline/Scene Heading"
                    class="input"
                    @keyup.enter="onSubmit"
                  >
                </div>
                <div class="control">
                  <button class="button is-primary">Submit</button>
                </div>
              </div>
              <div v-if="input.type === 'action'">
                <textarea
                  ref="input"
                  class="textarea"
                  placeholder="Scene description"
                  @keyup.ctrl.enter="onSubmit"
                ></textarea>
              </div>
              <div v-if="input.type === 'dialogue'">
                <input
                  ref="input"
                  type="text"
                  placeholder="Character name"
                  class="input"
                >
                <input
                  ref="input"
                  type="text"
                  placeholder="Extention"
                  class="input"
                >
                <input
                  ref="input"
                  type="text"
                  placeholder="Parenthetical"
                  class="input"
                >
                <textarea
                  ref="input"
                  class="textarea"
                  placeholder="Lines"
                  @keyup.ctrl.enter="onSubmit"
                ></textarea>
              </div>
              <div v-if="input.type === 'transition'">
                <input
                  ref="input"
                  type="text"
                  placeholder="Transition"
                  class="input"
                  @keyup.enter="onSubmit"
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DemoScript from '../../static/api/demo.json'

export default {
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
    onSubmit () {
      this.script.push({
        type: this.input.type,
        content: this.$refs.input.value
      })
      this.$refs.input.value = ''
      this.input.type = ''
      console.log(this.script)
    },
    test () {
      console.log('hi')
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  font-family: 'Cutive Mono', monospace;
  padding: 3rem;

  h6 {
    font-weight: bold;
    text-transform: uppercase;
  }
  blockquote {
    margin: 1.25rem 20%;
  }
}
@media only screen {
  main {
    width: 50%;
  }
  .hero {
    top: 0;
    right: 0;
    width: 50%;
    position: fixed;
    background-color: #eee;
  }
}
</style>
