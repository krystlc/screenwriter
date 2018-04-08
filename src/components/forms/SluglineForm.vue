<template>
  <div class="field has-addons">
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
</template>
