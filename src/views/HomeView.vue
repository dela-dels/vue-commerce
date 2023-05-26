<script setup>
import { ref } from 'vue'
import ProductCard from '../components/Product/ProductCard.vue'
const showCategorySubMenus = ref(false)
const showBrandsSubMenus = ref(true)
</script>

<template>
  <main class="mx-10">
    <div class="mt-10">
      <span class="font-semibold text-gray-400">Home > </span>
      <span class="font-semibold">Browse Products</span>
    </div>
    <div class="flex mt-8 space-x-10">
      <div class="hidden p-2 rounded lg:block md:w-1/4">
        <div>
          <p>Category</p>
          <div class="mx-4 mt-2" v-if="!showCategorySubMenus">
            <div class="flex justify-between mt-1 space-x-2">
              <div>
                <input type="checkbox" id="women-category" />
                <label for="women-category">Women</label>
              </div>
              <p class="">37</p>
            </div>
            <div class="flex mt-1 space-x-2">
              <input type="checkbox" id="mem-category" />
              <label for="men-category">Men</label>
              <p class="">37</p>
            </div>
            <p class="mt-1">Kids</p>
            <p class="mt-1">Sporty</p>
            <p class="mt-1">Casual</p>
          </div>
        </div>
        <div class="mt-4">
          <p>Brands</p>
          <div class="mx-4 mt-2" v-if="showBrandsSubMenus">
            <p>Adidas</p>
            <p>Nike</p>
            <p>Rebook</p>
            <p>Puma</p>
            <p>Kappa</p>
          </div>
        </div>
        <div class="mt-4">Women</div>
        <div class="mt-4">Men</div>
        <div class="mt-4">Kids</div>
        <div class="mt-4">Sporty</div>
        <div class="mt-4">Casual</div>
      </div>
      <div class="w-3/4">
        <div class="grid grid-cols-2 md:grid-cols-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  </main>
</template>
