<template>
  <div id="container">
    <main class="content">
      <h1 class="title has-text-centered">{{ title }}</h1>
      <h6>Fade in:</h6>
      <template v-for="(field, index) in script">
        <component :is="field.type" :key="index" :content="field.content" @click.native="deleteField(index)"></component>
      </template>
    </main>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Screenwriter</h1>
          <h2 class="subtitle">A bad hombre project</h2>
          <form @submit.prevent="onSubmit">
            <div class="field has-addons">
              <div class="control">
                <button class="button" v-shortkey.once="['s']" @shortkey="loadForm('slugline')" @click.prevent="loadForm('slugline')">(s)lugline</button>
              </div>
              <div class="control">
                <button v-shortkey.once="['a']" @shortkey="input.type = 'action'" class="button" @click.prevent="test">(a)ction</button>
              </div>
              <div class="control">
                <button v-shortkey.once="['d']" @shortkey="input.type = 'dialogue'" class="button" @click.prevent="test">(d)ialogue</button>
              </div>
              <div class="control">
                <button v-shortkey.once="['t']" @shortkey="input.type = 'scene-transition'" class="button" @click.prevent="test">(t)ransition</button>
              </div>
            </div>
            <div>
              <!-- SLUGLINE FIELDS -->
              <div class="field has-addons" v-if="input.type === 'slugline'">
                <div class="control">
                  <span class="select">
                    <select>
                      <option>Ext.</option>
                      <option>Int.</option>
                    </select>
                  </span>
                </div>
                <div class="control is-expanded">
                  <input
                    ref="input"
                    type="text"
                    class="input"
                    placeholder="Location"
                    @keyup.enter="onSubmit"
                  >
                </div>
                <div class="control">
                  <span class="select">
                    <select>
                      <option>Day</option>
                      <option>Afternoon</option>
                      <option>Night</option>
                    </select>
                  </span>
                </div>
                <div class="control">
                  <button
                    class="button is-primary"
                  >Submit</button>
                </div>
              </div>
              <!-- ACTION FIELDS -->
              <div class="field" v-if="input.type === 'action'">
                <div class="control">
                <textarea
                  ref="input"
                  class="textarea"
                  placeholder="Scene description"
                  @keyup.ctrl.enter="onSubmit"
                ></textarea>
                </div>
                <div class="control">
                <button
                  class="button is-primary"
                >Submit</button>
                </div>
              </div>
              <!-- DIALOGUE FIELDS -->
              <div v-if="input.type === 'dialogue'">
                <div class="field has-addons">
                  <div class="control">
                    <input
                      ref="input"
                      type="text"
                      placeholder="Extention"
                      class="input"
                    >
                  </div>
                  <div class="control">
                    <input
                      ref="input"
                      type="text"
                      placeholder="Character name"
                      class="input"
                    >
                  </div>
                  <div class="control is-expanded">
                    <input
                      ref="input"
                      type="text"
                      placeholder="Parenthetical"
                      class="input"
                    >
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <textarea
                      ref="input"
                      class="textarea"
                      placeholder="Lines"
                      @keyup.ctrl.enter="onSubmit"
                    ></textarea>
                  </div>
                </div>
              </div>
              <!-- TRANSITION FIELDS -->
              <div v-if="input.type === 'scene-transition'">
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
import Slugline from '@/components/fields/Slugline'
import Action from '@/components/fields/Action'
import Dialogue from '@/components/fields/Dialogue'
import SceneTransition from '@/components/fields/SceneTransition'
import DemoScript from '../../static/api/demo.json'

export default {
  components: { Slugline, Action, Dialogue, SceneTransition },
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
      const payload = Object
      this.script.push({
        type: this.input.type,
        content: payload
      })
      this.$refs.input.value = ''
      this.input.type = ''
    },
    test () {
      console.log('hi')
    },
    loadForm (fieldType) {
      switch (fieldType) {
        case 'slugline':
          console.log('you made it here')
          this.input.type = fieldType
          break
        default:
          console.log('too bad')
      }
    },
    deleteField (index) {
      this.script.splice(index, 1)
    }
  }
}
</script>
