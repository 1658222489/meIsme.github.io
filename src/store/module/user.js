import {login} from "@/api/user";

export default {
    state:{

    },
    mutations:{

    },
    actions:{
        // eslint-disable-next-line no-unused-vars
         userLogin({commit},data){
             console.log(data);
            return new Promise(((resolve, reject) => {
                login(data).then(res => resolve(res)).catch(error => reject(error))
            }))
        }
    }
}

