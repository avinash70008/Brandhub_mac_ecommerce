import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {useEffect} from "react"
import { DecButton, IncButton } from "../../Redux/Shirt/action";



export const Cart = ()=>{
  const dispatch = useDispatch();
  const arr  = useSelector((store)=> store.shirt.singless)
  console.log("string",arr)
   
    const [flag,setFlag] = useState(false);
    const navigate = useNavigate()

   const Inc = (id) =>{
     dispatch(IncButton(id))
    }
    const Dec = (id) =>{
      dispatch(DecButton(id))
     }
    

 
    

    return(

        <>
        <h1 id="mycart">MY CART</h1>
        <div >
         {arr.map((el,index)=>(

            <div key={index} className="flexdiv">
              <div className="imgdiv"> <img  src={el.imgUrl} alt="" />
              </div>

              
                 <div className="counter">
                 <button onClick={()=>{
                  Dec(el._id)
                }}>-</button>
                      <p>{el.qty}</p>
                    

                       <button onClick={()=>{
                        Inc(el._id)
                      }}>+</button>
                </div> 



                
                      <div className="Details">
                    <p>Price: {el.price}</p>
                    <p>Size: {el.size}</p>
                    <p>Colour: {el.colour}</p>
                    <p>Total: {el.price*el.qty}</p>
                   
                   
                    <button onClick={()=>{
                      
                      arr.splice(index,1);
                      //  localStorage.setItem("cartData",JSON.stringify(cartData))
                      setFlag(!flag)
                          
                    }}>Remove</button>
                    
                       </div>
            </div>
            
         ))}
        </div>
      
      

        <button onClick={()=> navigate("/signup")} id="payBtn">Proceed to Pay</button>
        </>
    )
}