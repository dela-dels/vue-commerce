<script setup>
import { ref } from 'vue'
import ProductCard from '../components/Product/ProductCard.vue'
import CheckBox from '../components/Form/CheckBox.vue'
import { useProductStore } from '../stores/ProductStore';
const showCategorySubMenus = ref(false)
const showBrandsSubMenus = ref(false)

const productStore = useProductStore()
</script>

<template>
  <main class="mx-20">
    <div class="mt-10">
      <span class="font-semibold text-gray-400">Home > </span>
      <span class="font-semibold">Browse Products</span>
    </div>
    <div class="flex mt-2 lg:space-x-10">
      <div
        class="hidden mt-6 p-4 border border-gray-200 divide-y rounded-md h-[35rem] lg:block md:w-1/5"
      >
        <div>
          <div class="flex items-center justify-between p-2 bg-gray-100 rounded">
            <p>Category</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div class="mx-4 mt-2" v-if="!showCategorySubMenus">
            <div class="flex items-center justify-between mt-1">
              <div class="items-center space-x-2">
                <CheckBox id="womenCategory" label="Women" />
              </div>
              <p class="text-sm">37</p>
            </div>
            <div class="flex items-center justify-between mt-1">
              <div class="items-center space-x-2">
                <CheckBox id="menCategory" label="Men" />
              </div>
              <p class="text-sm">83</p>
            </div>
            <div class="flex items-center justify-between mt-1">
              <div class="items-center space-x-2">
                <CheckBox id="kids" label="Kids" />
              </div>
              <p class="text-sm">8</p>
            </div>
            <div class="flex items-center justify-between mt-1">
              <div class="items-center space-x-2">
                <CheckBox id="sporty" label="Sporty" />
              </div>
              <p class="text-sm">16</p>
            </div>
            <div class="flex items-center justify-between mt-1">
              <div class="items-center space-x-2">
                <CheckBox id="casual" label="Casual" />
              </div>
              <p class="text-sm">12</p>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="flex items-center justify-between p-4 rounded">
            <p>Brands</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div class="mx-4 mt-2 space-y-2" v-if="showBrandsSubMenus">
            <p>Adidas</p>
            <p>Nike</p>
            <p>Rebook</p>
            <p>Puma</p>
            <p>Kappa</p>
          </div>
        </div>
        <div class="flex items-center justify-between p-4 rounded">
          <p>Women</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div class="flex items-center justify-between p-4 rounded">
          <p>Men</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div class="flex items-center justify-between p-4 rounded">
          <p>Kids</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div class="flex items-center justify-between p-4 rounded">
          <p>Sporty</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div class="flex items-center justify-between p-4 rounded">
          <p>Casual</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
      <div class="w-full md:w-4/5">
        <div class="grid grid-cols-1 justify-items-center md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          <div v-for="product in productStore.products" v-bind:key="product.id">
            <ProductCard :product="product"/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
