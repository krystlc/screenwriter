<template>
  <div>
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
</template>
