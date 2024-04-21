import { createStore } from 'vuex'
import reaction from "@/mocks/reaction.js";

// здесь в промисе создаем задержку и поле нее передаем массив реакций на фильм
const loadReactions = (time) => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(reaction)
        }, time)
    })
}

// Create a new store instance.
const store = createStore({
    namespaced: true,
    state: {
        reaction: []
    },
    getters: {
        getReactions(state) {
            return state.reaction
        }
    },
    mutations: {
        SET_REACTIONS(state, payload) {
            state.reaction = payload
        }
    },
    actions: {
        async loadReactions({commit}, payload) {
            try {
                const reaction = await loadReactions(payload)
                commit('SET_REACTIONS', reaction)
                console.log(payload)
            } catch (error) {
                console.error(error)
            }
        }
    }
})
export default store
