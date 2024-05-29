import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useHeadphoneStore = defineStore("headphone", () => {
    const headphones = ref([])

    const fetchItems = async () => {
        try {
            const response = await axios.get("http://localhost:3000/headphones")
            console.log(response)
            headphones.value = response.data
        } catch (error) {
            console.error("Error fetching headphones:", error)
        }
    }

    const filteredFetchItems = async (name, filter) => {
        try {
            const response = await axios.get("http://localhost:3000/headphones", {
                params: {
                    sortBy: name,
                    sortOrder: filter,
                },
            })
            headphones.value = response.data
        } catch (e) {
            console.error("Error fetching headphones:", e)
        }
    }
    return {headphones, fetchItems, filteredFetchItems};
})