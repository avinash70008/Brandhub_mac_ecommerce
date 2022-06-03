
import { GET_SHIRTDATA } from "./action";

const initState = {
    
    shirt : [],
   
    singless : []
}

export const ShirtReducer = (store = initState , {type , payload} ) => {

    switch(type){

        case GET_SHIRTDATA:
        return {...store , shirt : [...payload]}

        case "SINGLE_RPODDUCT":
            return {...store , singless : [...store.singless , payload]}

            case "INC_BTN":

                    const increaseCartIndex = store.singless.findIndex((ele) => ele._id == payload)
                    if (store.singless[increaseCartIndex].qty >= 0) {
                   store.singless[increaseCartIndex].qty +=  1
                   console.log(store.singless)
                //    let price = store.singless[increaseCartIndex].price
                //    let quat = store.singless[increaseCartIndex].qty
                //    price = price * quat
                      return {
                        ...store, singless : [...store.singless]
                      }
                    }


            case "DEC_BTN":
                const decreaseCartIndex = store.singless.findIndex((ele) => ele._id == payload)
                if (store.singless[decreaseCartIndex].qty >= 0) {
               store.singless[decreaseCartIndex].qty -= 1
            //    let price = store.singless[decreaseCartIndex].price
            //    let quat = store.singless[decreaseCartIndex].qty
            //    price = price * quat
                  return {
                    ...store, singless : [...store.singless]
                  }
                }
                if (store.singless[decreaseCartIndex].qty < 0) {
                    store.singless[decreaseCartIndex].qty = 0
                 //    let price = store.singless[decreaseCartIndex].price
                 //    let quat = store.singless[decreaseCartIndex].qty
                 //    price = price * quat
                       return {
                         ...store, singless : [...store.singless]
                       }
                     }


        default :
        return store
    }
}