import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('productStore', () => {
  const products = ref([
    {
      id: crypto.randomUUID(),
      name: 'Black-Gray Shirt Loose',
      price: 85,
      genderCategory: 'Men',
      productCategory: 'Shirts',
      sizes: [
        {
          size: 'Small',
          label: 'S'
        },
        {
          size: 'Medium',
          label: 'M'
        },
        {
          size: 'Large',
          label: 'L'
        },
        {
          size: 'Extra Large',
          label: 'XL'
        }
      ],
      quantity: 100,
      numberOfVariants: 6
    },
    {
      id: crypto.randomUUID(),
      name: 'Denim Shirt',
      price: 185,
      genderCategory: 'Men',
      productCategory: 'Shirts',
      sizes: [
        {
          size: 'Small',
          label: 'S'
        },
        {
          size: 'Medium',
          label: 'M'
        },
        {
          size: 'Large',
          label: 'L'
        },
        {
          size: 'Extra Large',
          label: 'XL'
        }
      ],
      quantity: 20,
      numberOfVariants: 3
    },
    {
      id: crypto.randomUUID(),
      name: 'Marquee Leather Skirt',
      price: 45,
      genderCategory: 'Women',
      productCategory: 'Skirts',
      sizes: [
        {
          size: 'Small',
          label: 'S'
        },
        {
          size: 'Medium',
          label: 'M'
        },
        {
          size: 'Large',
          label: 'L'
        },
        {
          size: 'Extra Large',
          label: 'XL'
        }
      ],
      quantity: 200,
      numberOfVariants: 4
    },
    {
      id: crypto.randomUUID(),
      name: 'Blue-Gray Shirt Loose',
      price: 85,
      genderCategory: 'Men',
      productCategory: 'Shirts',
      sizes: [
        {
          size: 'Small',
          label: 'S'
        },
        {
          size: 'Medium',
          label: 'M'
        },
        {
          size: 'Large',
          label: 'L'
        },
        {
          size: 'Extra Large',
          label: 'XL'
        }
      ],
      quantity: 100,
      numberOfVariants: 2
    },
    {
      id: crypto.randomUUID(),
      name: 'V-Neck American Shirt',
      price: 34,
      genderCategory: 'Men',
      productCategory: 'Shirts',
      sizes: [
        {
          size: 'Small',
          label: 'S'
        },
        {
          size: 'Medium',
          label: 'M'
        },
        {
          size: 'Large',
          label: 'L'
        },
        {
          size: 'Extra Large',
          label: 'XL'
        }
      ],
      quantity: 100,
      numberOfVariants: 1
    }
  ])

  function decreaseProductQuantity(uuid, quantity) {
    let product = products.value.find((p) => p.id === uuid)
    product.quantity -= quantity
  }

  return { products, decreaseProductQuantity }
})
