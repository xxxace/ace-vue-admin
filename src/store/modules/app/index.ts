import { defineStore } from 'pinia';
import { AppState } from './type';

const useAppStore = defineStore('app', {
    state: (): AppState => ({
        device: 'desktop',
        menuCollapse: false
    }),

    actions: {
        updateSetting(partial: Partial<AppState>) {
            this.$patch(partial);
        }
    },

    getters: {
        appDevice(state: AppState) {
            return state.device
        },
        appMenuCollapse(state: AppState) {
            return state.menuCollapse
        }
    }
})

export default useAppStore