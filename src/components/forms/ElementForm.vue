<template>
  <form @submit.prevent="sendFields">
    <div class="field has-addons">
      <div class="control" v-for="el in elements" :key="el">
        <button class="button" v-shortkey.once="['s']" @shortkey="type = el" @click.prevent="type = el">{{ el }}</button>
      </div>
    </div>
    <template v-if="type === 'slugline'">
      <div class="field has-addons">
        <div class="control">
          <text-line v-model="fields.position" :field="'position'"></text-line>
        </div>
        <div class="control is-expanded">
          <text-line v-model="fields.location" :field="'location'"></text-line>
        </div>
        <div class="control">
          <text-line v-model="fields.time" :field="'time'"></text-line>
        </div>
      </div>
    </template>
    <template v-if="type === 'action'">
      <div class="field">
        <text-box v-model="fields.content"></text-box>
      </div>
    </template>
    <template v-if="type === 'dialogue'">
      <div class="field has-addons">
        <div class="control is-expanded">
          <text-line v-model="fields.character" :field="'character'"></text-line>
        </div>
        <div class="control">
          <text-line v-model="fields.extention" :field="'extention'"></text-line>
        </div>
        <div class="control">
          <text-line v-model="fields.paranthetical" :field="'paranthetical'"></text-line>
        </div>
      </div>
      <div class="field">
        <text-box v-model="fields.time"></text-box>
      </div>
    </template>
    <template v-if="type === 'scene-transition'">
      <div class="field">
        <div class="control is-expanded">
          <text-line v-model="fields.transition" :field="'transition'"></text-line>
        </div>
      </div>
    </template>
    <div class="field">
      <div class="control">
        <button class="button is-primary" v-if="type">ctrl+enter</button>
      </div>
    </div>
    {{ type }}{{ fields }}
  </form>
</template>

<script>
import { TextBox, TextLine } from '@/components/forms/fields'

const elements = [
  'slugline',
  'action',
  'dialogue',
  'scene-transition'
]

export default {
  components: { TextBox, TextLine },
  data () {
    return {
      elements,
      type: null,
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
    sendFields (el) {
      this.$emit('handleFields', el)
      console.log('payload sent to parent component', el)
    }
  }
}
</script>
