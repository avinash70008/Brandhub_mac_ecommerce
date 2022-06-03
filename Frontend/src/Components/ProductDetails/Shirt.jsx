
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { useNavigate } from "react-router"
import { singleDatas } from "../../Redux/Shirt/action"

export const ShirtDetails = () => {
    const dispatch  = useDispatch()

    const {id} = useParams()
    console.log("id",id)
    const navigate = useNavigate();
    const [data ,setData] = useState([])
    
    useEffect(()=>{getData()},[])

    var ShirtData = useSelector((store)=> store.shirt.shirt)
    console.log(ShirtData)
    
     const getData = ()=>{
         console.log(id)
         
        let updatedData = ShirtData.filter((el)=>el._id===id )
        setData(updatedData)
        
     }
    console.log(data)
    

    // let arr = JSON.parse(localStorage.getItem("cartData")) || [];

    function AddToCart(el){
      alert("Product is Added to cart")
        // console.log(el)

        // arr.push(el);
        dispatch(singleDatas(el))
        
        
        // localStorage.setItem("cartData",JSON.stringify(arr));
        
    }
    

    return(

       <>    
            <div className="detailsPage">
            {data.map((el)=>(
                <div key={el.id} className="leftPart">
                    <img src={el.imgUrl} alt="" height="100%" width="100%" />
                </div>

            ))}
            {data.map((el)=>(
                <div key={el.id} className="rightPart">
                    <h1 id="price"> Rs . {el.price}</h1>
                    <h3> Color - {el.colour}</h3>
                    
                    <h3> Size - {el.size}</h3>

                    <button onClick={()=>AddToCart(el)} id="cartButton">ADD TO CART</button>
                </div>
                
            ))}
            </div>
            

       </>
    )
}