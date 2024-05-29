import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
    const items = ref([]);

    const addItem = (product) => {
        console.log(product)
        const existingItem = items.value.find(item => item.name === product.name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            items.value.push({ ...product, quantity: 1 });
        }
    };

    const removeItem = (_id) => {
        const index = items.value.findIndex(item => item._id === _id);
        if (index !== -1) {
            items.value.splice(index, 1);
        }
    };

    const totalPrice = computed(() => {
        return items.value.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    });

    return {
        items,
        addItem,
        removeItem,
        totalPrice,
    };
});
