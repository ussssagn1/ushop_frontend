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

    return {headphones, fetchItems}
})