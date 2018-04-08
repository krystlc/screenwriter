<template>
  <blockquote>
    <h6 class="has-text-centered">
      {{ content.character}}
      <span v-if="content.extention.length > 0">
        ({{ content.extention }})
      </span>
      <p v-if="content.paranthetical.length > 0">
        ({{ content.paranthetical }})
      </p>
    </h6>
    <p>{{ content.speech }}</p>
  </blockquote>
</template>

<script>
export default {
  props: ['content']
}
</script>
