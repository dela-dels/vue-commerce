<script setup>
import { defineProps } from 'vue'

defineProps({
  product: {}
})
</script>
<template>
  <RouterLink :to="{ name: 'Product', params: { id: product.id } }" class="">
    <div class="flex flex-col my-6 rounded-lg cursor-pointer w-72 h-80">
      <div class="w-full h-60">
        <img
          src="../../assets/images/products/man-shirt.jpg"
          alt=""
          class="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div class="h-20 p-2 mt-2">
        <div class="flex justify-between">
          <p class="font-semibold">{{ product.name }}</p>
          <p class="text-xl font-bold">${{ product.price }}</p>
        </div>
        <div class="mt-2">
          <p class="text-gray-400">{{ product.numberOfVariants }} Variants</p>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
