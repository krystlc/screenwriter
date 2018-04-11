<template>
  <form @submit.prevent="sendFields">
    <div class="field has-addons">
      <div class="control" v-for="element in elements" :key="element">
        <button class="button" v-shortkey.once="['s']" @shortkey="loadForm(element)" @click="loadForm()">{{ element }}</button>
      </div>
    </div>
    <p>i'm an element form, element as in an element of the script.</p>
  </form>
</template>

<script>
const elements = [
  'slugline',
  'action',
  'dialogue',
  'scene-transition'
]

export default {
  data () {
    return {
      type: null,
      elements
    }
  },
  methods: {
    loadForm (el) {
      console.log('nothing yet', el)
    }
  }
}
</script>
