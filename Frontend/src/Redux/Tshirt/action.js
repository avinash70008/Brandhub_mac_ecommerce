import axios from "axios";


export const GET_TSHIRTDATA = "GET_TSHIRTDATA";
export const GET_TSHIRT_LOADING = "GET_TSHIRT_LOADING";
export const GET_TSHIRT_ERROR = "GET_TSHIRT_ERROR"







export const TshirtData = (payload) => {
    console.log("action" , payload)
    return{ 

        type : GET_TSHIRTDATA,
        payload : payload
    }
    
}

export const getTshirtData = () => (dispatch) => {

  
     axios.get("https://avinashbrandhub.herokuapp.com/tshirt").then((res)=>{
         console.log("server",res.data)
        dispatch(TshirtData(res.data))
    })
}

export const singleData = (el) => (dispatch) => {
    console.log('signle id',el)
    
            
       
            dispatch({type : 'SINGLE_RPODDUCT', payload: el})
        
    }