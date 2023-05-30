<script setup>
defineProps({
  id: String,
  classes: String,
  label: String
})
</script>
<template>
  <div class="items-center space-x-2">
    <input
      type="checkbox"
      :id="id"
      :class="classes ? classes : 'border-gray-300 rounded default:ring-0 checked:ring-0 checked:ring-black checked:bg-black'"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>
