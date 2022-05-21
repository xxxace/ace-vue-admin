import { defineStore } from "pinia";
import { UserState } from "./types";

const useUserStore = defineStore('user', {
    state: (): UserState => ({
        name: 'ace',
        avatar: undefined
    }),
    actions:{
        changeUserName(name:string){
            this.name = name
        }
    }
})
export default useUserStore