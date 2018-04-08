<template>
  <blockquote>
    <header class="has-text-centered">
    <h6>{{ content.character}} <span v-if="content.extention.length > 0">({{ content.extention }})</span></h6>
    <em v-if="content.paranthetical.length > 0">({{ content.paranthetical }})</em>
    </header>
    <p>{{ content.speech }}</p>
  </blockquote>
</template>

<script>
export default {
  props: ['content']
}
</script>
