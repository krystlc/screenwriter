<template>
  <blockquote>
    <header class="has-text-centered">
    <h6>{{ fields.character}} <span v-if="fields.extention.length > 0">({{ fields.extention }})</span></h6>
    <em v-if="fields.paranthetical.length > 0">({{ fields.paranthetical }})</em>
    </header>
    <p>{{ fields.content }}</p>
  </blockquote>
</template>

<script>
export default {
  props: ['fields']
}
</script>
