<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '../stores/CartStore'
import { defineProps } from 'vue'
import { useProductStore } from '../stores/ProductStore'

const props = defineProps({
  id: String
})

const quantity = ref(1)
const selectedSize = ref("")

const cartStore = useCartStore()
const productStore = useProductStore()

function incrementQuantity() {
  quantity.value++
}

function decrementQuantity() {
  if (quantity.value < 1) {
    quantity.value = 1
  }
  quantity.value--
}

function addItemToCart(productUUID) {
  const product = productStore.products.find((product) => product.id === productUUID)

  cartStore.add({
    id: product.id,
    name: product.name,
    quantity: quantity.value,
    size: selectedSize.value,
    price: product.price
  })
}

const productDetails = computed(() => {
  return productStore.products.find((product) => product.id === props.id)
})
</script>
<template>
  <main class="container flex flex-col px-20 mb-40">
    <div class="flex flex-row items-center justify-center md:space-x-2 md:justify-start">
      <span class="text-gray-400">Browse Products</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-3 h-3"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
      <span class="text-gray-400">Men</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-3 h-3"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
      <span class="font-bold">Shirts</span>
    </div>

    <div class="grid mt-10 md:mx-5 md:gap-8 grid-col-1 md:grid-cols-2">
      <div class="grid-cols-1 h-[28rem] md:h-[30rem]">
        <div class="h-full">
          <img
            src="../assets/images/products/man-shirt.jpg"
            alt=""
            class="object-cover w-full h-full rounded-lg"
          />
        </div>

        <!--Smaller Product Image Cards-->
        <div class="hidden mt-4 lg:flex lg:justify-evenly">
          <div class="w-32 h-32 rounded-lg">
            <img
              src="../assets/images/products/man-shirt.jpg"
              class="object-cover w-full h-full rounded-lg"
              alt=""
            />
          </div>
          <div class="w-32 h-32 rounded-lg">
            <img
              src="../assets/images/products/man-shirt.jpg"
              class="object-cover w-full h-full rounded-lg"
              alt=""
            />
          </div>
          <div class="w-32 h-32 rounded-lg">
            <img
              src="../assets/images/products/man-shirt.jpg"
              class="object-cover w-full h-full rounded-lg"
              alt=""
            />
          </div>
          <div class="w-32 h-32 rounded-lg">
            <img
              src="../assets/images/products/man-shirt.jpg"
              class="object-cover w-full h-full rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="w-full grid-cols-1 mt-5 md:mt-0">
        <div>
          <h4 class="text-3xl font-bold">{{ productDetails.name }}</h4>
        </div>

        <!--Rating Stars-->
        <div class="flex mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-yellow-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-yellow-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-yellow-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-yellow-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <span class="ml-4 text-sm"> (4.0) </span>
        </div>

        <!--Price-->
        <div class="mt-4">
          <p class="text-3xl font-semibold">${{ productDetails.price }}</p>
        </div>

        <!--Available Sizes-->
        <div class="mt-10 md:mt-14 lg:mt-24">
          <div>
            <label class="font-bold" for="sizes">Available Sizes</label>
          </div>
          <ul class="flex mt-8 space-x-4">
            <li v-for="size in productDetails.sizes" v-bind:key="size">
              <input
                class="sr-only peer"
                type="radio"
                :value="size.size"
                name="size"
                :id="size.size"
                v-model="selectedSize"
              />
              <label
                class="px-5 py-3 text-sm border border-gray-300 rounded-lg cursor-pointer peer-checked:bg-black peer-checked:text-white peer-checked:border-0 hover:bg-black hover:text-white"
                :for="size.size"
              >
                {{ size.label }}</label
              >
            </li>
          </ul>
        </div>

        <!--Quantity Left-->
        <div class="mt-8">
          <p class="text-lg font-semibold">Pieces Available</p>
          <p class="text-lg">{{ productDetails.quantity }} left</p>
        </div>

        <!--Add To Cart-->
        <div class="flex w-full mt-10 space-x-4">
          <div
            class="flex items-center w-32 space-x-4 border border-gray-300 rounded-lg justify-evenly"
          >
            <button class="px-2" @click="decrementQuantity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
              </svg>
            </button>
            <span>{{ quantity }}</span>
            <button class="px-2" @click="incrementQuantity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>
          <div>
            <button
              @click="addItemToCart(productDetails.id)"
              class="px-4 py-3 text-white bg-black rounded-lg hover:bg-gray-900 active:bg-gray-900"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
