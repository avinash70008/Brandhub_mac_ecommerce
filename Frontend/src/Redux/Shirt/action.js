import axios from "axios";

export const GET_SHIRT_LODING = "GET_SHIRT_LODING";
export const GET_SHIRTDATA = "GET_SHIRTDATA";
export const GET_SHIRT_ERROR = "GET_SHIRT_ERROR";






export const ShirtData = (payload) => ({

    type : GET_SHIRTDATA,
    payload : payload
})

export const ShirtLoading = () => ({
    type: GET_SHIRT_LODING
})

export const ShirtError = () => ({
    type: GET_SHIRT_ERROR
})


export const getShirtData = () => (dispatch) => {
    dispatch(ShirtLoading())
 axios.get("https://avinashbrandhub.herokuapp.com/shirt").then((res)=>{
        console.log("data",res.data)
        dispatch(ShirtData(res.data))
        .catch(() => dispatch(ShirtError()))
    })
}
export const singleDatas = (el) => (dispatch) => {
    console.log('signle id',el)
    
            
       
            dispatch({type : 'SINGLE_RPODDUCT', payload: el})
        
    }
   
    
    export const IncButton = (id) => (dispatch) => {
        console.log('Inc',id)
        
                
           
                dispatch({type : 'INC_BTN', payload: id})
            
        }

        export const DecButton = (id) => (dispatch) => {
            console.log('Dec',id)
            
                    
               
                    dispatch({type : 'DEC_BTN', payload: id})
                
            }