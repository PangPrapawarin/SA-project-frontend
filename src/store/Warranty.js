import Vue from 'vue'
import Vuex from 'vuex'
import WarrantyService from '@/services/WarrantyService'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: [],
    },
    
    getters: {
        warranties: (state) => state.data
    },

    mutations: {
        fetch(state, payload) {
            state.data = payload.data;
        }
    },
    actions: {
        async fetchWarranty({ commit }) {
            let payload = await WarrantyService.getWarranty();
            commit("fetch", payload)
            return payload.data
        },
    }
})