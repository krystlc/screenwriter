<template>
  <div class="field">
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
</template>
