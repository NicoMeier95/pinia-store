import { defineStore } from 'pinia'

export const useAuthUserStore = defineStore('AuthUserStore', {
    state: () => {
        return {
            username: 'devnicolasmeier',
        }
    },
    actions: {
        visitLinkedInProfile() {
            window.open(`https://www.linkedin.com/in/${this.username}/`, '_blank')
        }
    }
})