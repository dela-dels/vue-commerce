<script setup>
defineProps({
  id: String,
  label: String
})
</script>
<template>
  <label
    :for="id"
    class="px-5 py-3 text-lg border border-gray-300 rounded-lg cursor-pointer group hover:bg-black hover:text-white"
  >
    {{ label }}
    <input
      :id="id"
      value="{{ label }}"
      class="hidden group-checked:bg-black group-checked:text-white group-hover:bg-black group-hover:text-white"
      type="checkbox"
    />
  </label>
</template>
