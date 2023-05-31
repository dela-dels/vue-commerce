import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useProductStore } from './ProductStore'

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
  const totalNumberOfCartItems = ref(0)

  function add(product) {
    const productStore = useProductStore()

    const existingProductInStore = products.value.filter((p) => p.id === product.id)

    if (existingProductInStore.length > 0) {
      return
    } else {
      products.value.push(product)
      productStore.decreaseProductQuantity(product.id, product.quantity)
      totalNumberOfCartItems.value++
    }
  }

  function remove(product) {
    products.value.pop(product.id)
  }

  return { totalAmount, products, totalNumberOfCartItems, add, remove }
})
