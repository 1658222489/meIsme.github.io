import {login} from "@/api/user";

export default {
    state:{

    },
    mutations:{

    },
    actions:{
         userLogin({commit},data){
            return new Promise((resolve, reject) => {
                login(data).then(res => resolve(res)).catch(error => reject(error))
            })
        }
    }
}

