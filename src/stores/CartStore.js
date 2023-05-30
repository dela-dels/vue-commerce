import { defineStore } from 'pinia'
import { ref } from 'vue'

/**
 * Using the Options API
 */
// export const useCartStore = defineStore('cartStore', {
//   state: () => {
//     return {
//       products: [{}],
//       totalAmount: 0
//     }
//   },
//   actions: {
//     add(product) {
//       this.products.push({ product })
//     },
//     remove(product) {
//       this.products.pop(product.id)
//       return this.products
//     }
//   }
// })

/**
 * Using the Composition API
 */
export const useCartStore = defineStore('cartStore', () => {
  const products = ref([])
  const totalAmount = ref(0)

  function add(product) {
    products.value.push({ product })
  }

  function remove(product) {
    products.value.pop(product.id)
  }

  return { totalAmount, products, add, remove }
})
